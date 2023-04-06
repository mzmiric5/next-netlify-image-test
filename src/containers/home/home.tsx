import Image from "next/image";
import localImage from '@/assets/images/local-img.jpg'

export function Home () {
    return (
        <main>
            <div>
                <h2>Hello world</h2>
                <div>
                    <p>Local image</p>
                    <Image src={localImage} width={100} alt="Local Image" />
                </div>
                <div>
                    <p>Remote image</p>
                    <Image src="https://images.unsplash.com/photo-1679407592224-9f62e720bebc" width={200} height={400} alt="Remote image" />
                </div>
            </div>
        </main>
    )
}