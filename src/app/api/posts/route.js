import { supabase } from '../../lib/supabaseClient';
import { randomUUID } from 'crypto';
import { createPost } from '../../lib/createPost';
import { NextResponse } from 'next/server';

export async function POST(req) {
    try {
        const data = await req.json();
        const { image, title, content, tags } = data;

        if (!title || !content || !tags || tags.length === 0) {
            return NextResponse.json(
                { error: 'Missing required fields: title, content, or tags' },
                { status: 400 }
            );
        }

        if (!image || !/^data:image\/(png|jpg|jpeg);base64,/.test(image)) {
            return NextResponse.json(
                { error: 'Invalid or missing image' },
                { status: 400 }
            );
        }

        // Decode base64 image
        const imageBuffer = Buffer.from(image.split(',')[1], 'base64'); // Renamed to avoid conflict
        const timestamp = Date.now();
        const uuid = randomUUID();
        const filename = `${timestamp}_${uuid}.png`;

        // Upload image to Supabase bucket
        const { data: uploadData, error: uploadError } = await supabase.storage
            .from('images') // Replace with your bucket name
            .upload(`images/${filename}`, imageBuffer, { // Use imageBuffer here
                contentType: 'image/png',
            });

        if (uploadError) {
            console.error('Supabase upload error:', uploadError);
            return NextResponse.json({ error: 'Failed to upload image' }, { status: 500 });
        }

        // Get the public URL of the uploaded image
        const { data: publicUrlData } = supabase.storage
            .from('images')
            .getPublicUrl(`images/${filename}`);

        const imageUrl = publicUrlData.publicUrl;

        // Save post to the database
        const post = await createPost({
            title,
            content,
            imageUrl,
            tags,
        });

        return NextResponse.json({ message: 'Success', post }, { status: 201 });
    } catch (err) {
        console.error('Error creating post:', err);
        return NextResponse.json(
            { message: 'Issue posting data', error: err.message },
            { status: 500 }
        );
    }
}
