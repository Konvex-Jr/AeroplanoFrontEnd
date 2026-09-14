import fs from "fs/promises"
import path from "path"

export async function convertToByte64(img_url: string){
    
    const url = path.join(img_url)

    const buffer: Buffer = Buffer.from(await fs.readFile(img_url))

    const base64string = buffer.toString('base64')

    const imageDataUrl = `data:image/webp;base64,${base64string}`

    return imageDataUrl

}