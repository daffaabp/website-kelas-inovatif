import fs from 'node:fs/promises';
import path from 'node:path';

export async function saveFile(file: File, subDir: string = ''): Promise<string> {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Create unique filename
    const timestamp = Date.now();
    const safeName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
    const filename = `${timestamp}-${safeName}`;

    // Ensure directory exists
    const uploadDir = path.join(process.cwd(), 'public', 'images', subDir);
    await fs.mkdir(uploadDir, { recursive: true });

    const filepath = path.join(uploadDir, filename);
    await fs.writeFile(filepath, buffer);

    // Return public URL path
    const urlPath = path.join('/images', subDir, filename).replace(/\\/g, '/');
    return urlPath;
}
