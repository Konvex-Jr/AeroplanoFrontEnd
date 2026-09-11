import fs from "fs/promises"
import path from "path"

export async function convertToBuffer(img_url: string){
    
    const url = path.join(img_url)

    console.log(img_url);

    const buffer: Buffer = Buffer.from(await fs.readFile(img_url))

    return buffer

}