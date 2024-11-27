import { randomUUID } from 'crypto'
import { createPost } from '../../lib/createPost'
import { NextResponse } from 'next/server'
import path from 'path'
import { writeFile } from 'fs/promises'
import fs from 'fs'

export async function POST(req) {
    try {
        const data = await req.json()
        const { image, title, content, tags } = data

        // Ensure all required fields are present
        if (!title || !content || !tags || tags.length === 0) {
            return NextResponse.json(
                { error: 'Missing required fields: title, content, or tags' },
                { status: 400 }
            )
        }

        // Check if image exists and is a base64 string
        if (!image) {
            return NextResponse.json({ error: 'No image received' }, { status: 400 })
        }

        // Check for valid base64 string (basic check for this example)
        if (!/^data:image\/(png|jpg|jpeg);base64,/.test(image)) {
            return NextResponse.json({ error: 'Invalid image format' }, { status: 400 })
        }

        // Log the received image
        console.log('Received image data:', image)

        const buffer = Buffer.from(image.split(',')[1], 'base64') // Remove the prefix before decoding

        const timestamp = Date.now()
        const uuid = randomUUID()
        const filename = `${timestamp}_${uuid}.png`

        const uploadPath = path.join(process.cwd(), 'public/uploads', filename)

        // Ensure the directory exists
        if (!fs.existsSync(path.join(process.cwd(), 'public/uploads'))) {
            fs.mkdirSync(path.join(process.cwd(), 'public/uploads'), { recursive: true })
        }

        // Log the buffer and upload path
        console.log('Buffer:', buffer)
        console.log('Upload Path:', uploadPath)

        // Write the file to the server
        try {
            await writeFile(uploadPath, buffer)
        } catch (writeError) {
            console.error('File write error:', writeError)
            return NextResponse.json({ error: 'Failed to write image file' }, { status: 500 })
        }

        const imageUrl = `/uploads/${filename}`

        // Call createPost to insert post into the database
        const post = await createPost({
            title,
            content,
            imageUrl,
            tags,
        })

        // Log the created post
        console.log('Created Post:', post)

        // Return success response with the created post
        return NextResponse.json(
            { message: 'Success', post },
            { status: 201 }
        )
    } catch (err) {
        console.error('Error creating post:', err)
        return NextResponse.json(
            { message: 'Issue posting data', error: err.message },
            { status: 500 }
        )
    }
}
