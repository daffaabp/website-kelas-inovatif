import { put, del } from '@vercel/blob';

import sharp from 'sharp';

export async function saveFile(file: File, subDir: string = ''): Promise<string> {
    let finalFile: Buffer | File = file;
    let finalFilename = file.name.replaceAll(' ', '_');
    let contentType = file.type;

    // Check if it's an image
    if (file.type.startsWith('image/')) {
        try {
            const arrayBuffer = await file.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer);

            // Convert to AVIF
            const convertedBuffer = await sharp(buffer)
                .avif({ quality: 80 })
                .toBuffer();

            finalFile = convertedBuffer;

            // Change extension to .avif
            const nameWithoutExt = finalFilename.substring(0, finalFilename.lastIndexOf('.')) || finalFilename;
            finalFilename = `${nameWithoutExt}.avif`;
            contentType = 'image/avif';
        } catch (error) {
            console.error('Error converting image to AVIF, falling back to original:', error);
            // Fallback to original
        }
    }

    const filename = `${subDir ? subDir + '/' : ''}${Date.now()}-${finalFilename}`;
    const blob = await put(filename, finalFile, {
        access: 'public',
        contentType: contentType,
    });

    return blob.url;
}

export async function deleteFile(url: string) {
    try {
        await del(url);
    } catch (error) {
        console.error('Error deleting file from blob:', error);
    }
}
