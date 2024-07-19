import Carousel from "../ui/Slider"


export default function Home(){
    return(
        <>
        <main className="home min-h-[100vh] overflow-clip px-6 py-5">
            {/* slider */}
            <Carousel />
        </main>
        </>
    )
}