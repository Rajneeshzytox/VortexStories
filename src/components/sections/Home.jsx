import Carousel from "../ui/Slider"
import PrimaryCard from "../ui/card"
import { SecondaryCard1 } from "../ui/secondaryCards"
import Panigation from "../ui/Panigation"

export default function Home(){
    return(
        <>
        <main className="home min-h-[100vh] overflow-hidden px-6 py-5 w-full">
            {/* slider */}
            <Carousel />

            <div className="font-bold text-lg mt-10 mb-4">Featured Posts</div>
            <div className="flex w-full overflow-x-scroll  gap-8">
            <PrimaryCard />
            <PrimaryCard />
            <PrimaryCard />
            </div>

            <div className="font-bold text-lg mt-10 mb-4">Top News</div>
            <SecondaryCard1 />
            <SecondaryCard1 />
            <SecondaryCard1 />

            <div className="flex justify-center">

            <Panigation />
            </div>

        </main>
        </>
    )
}