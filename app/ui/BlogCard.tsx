export interface Post {
    id: string
    title: string
    image: Buffer
    content: string
    
    // file_size: number
    // file_type: string

    // created_at: Date
    // updated_at: Date

    // user_id: string
}

export default function BlogCard(data: Post){

    const { image, title } = data

    // 1. Convert IMAGE_BUFFER to Base64
    const base64string = image.toString('base64')

    // 2. Generate Byte64 URL
    const imageDataUrl = `data:image/webp;base64,${base64string}`


    return (
        <div className="flex flex-col items-center w-fit rounded-2xl hover:shadow hover:scale-101 transition-all duration-150" >
            <img className="rounded-t-2xl object-cover" src={imageDataUrl} alt="Imagem do Post" />
            <h1 className="bg-white w-full p-4 text-center rounded-b-2xl text-xs sm:text-lg lg:text-xl" >{title}</h1>
        </div>
    )

}