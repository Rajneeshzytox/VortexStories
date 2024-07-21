import Carousel from "../ui/Slider";
import PrimaryCard from "../ui/card";
import { SecondaryCard1 } from "../ui/secondaryCards";
import Panigation from "../ui/Panigation";

export default function Home() {
  return (
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

        <div className="flex justify-center mt-2 mb-12">
          <Panigation />
        </div>

        
        {/* post grid */}
        <div className="grid sm:grid-cols-2  sm:grid-rows-3 grid-rows-4  w-full gap-2 *:shadow-lg *:bg-base-100 *:rounded-md *:overflow-hidden transition-all ">

          {/* post grid col 1 */}
          <div className="sm:row-span-3 xl:row-span-2 flex flex-row sm:flex-col">
            {/* post grid col 1 img */}
            <figure className="sm:w-full w-[40%]  aspect-square bg-base-200 h-44 bg-[url('https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z3JhZGllbnQlMjB0ZWNofGVufDB8fDB8fHww')] bg-cover bg-center bg-no-repeat">
            </figure>
            {/* post grid col text cont */}
            <div className=" sm:w-full  w-[60%] flex flex-col justify-center px-4 py-6">
              <h3 className="text-lg font-semibold text-secondary-content capitalize line-clamp-2 mb-1">
                Best way to exit tutorial hell
              </h3>
              <p className="line-clamp-3 sm:line-clamp-4 text-balance lg:line-clamp-3 text-sm pr-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                qui cum, repellat maxime distinctio deleniti recusandae quos
                ipsa corrupti minus pariatur! Placeat eius quis odit est.
                Exercitationem officiis modi assumenda!
              </p>
            </div>
          </div>

          {/* post grid col 2 */}
          <div className="w-full bg-base-100 p-2 pr-6 rounded-lg flex items-center gap-3 line-clamp-1 text-md">
            <figure className="bg-base-200 aspect-square rounded-md h-full bg-[url('https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat"></figure>
            <div className="py-4">
              <h4 className="font-semibold line-clamp-2 mb-1">My journey from jee aspirant to BCA student My journey from jee aspirant to BCA student</h4>
              <p className="text-xs ">Rajneesh Kumar</p>

            </div>
          </div>
          {/* opposite post grid col 2 */}
          <div className="w-full bg-base-100 p-2 rounded-lg flex items-center justify-between gap-3 line-clamp-1 text-md xl:row-span-2 xl:flex-col-reverse xl:p-0">
            
            <div className="py-4 mx-2 xl:m-4">
              <h4 className="font-semibold line-clamp-2 mb-1">My journey from jee aspirant to BCA student My journey from jee aspirant to BCA student</h4>
              <p className="text-xs ">Rajneesh Kumar</p>

            </div>

            <figure className="bg-base-200 aspect-square rounded-md h-full xl:w-full xl:rounded-none max-h-44 bg-[url('https://images.unsplash.com/photo-1607016284318-d1384bf5edd1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGdhbWluZ3xlbnwwfHwwfHx8MA%3D%3D')]  bg-cover bg-center"></figure>
          </div>

          {/* post grid col 2 */}
          <div className="w-full bg-base-100 p-2 pr-6 rounded-lg flex items-center gap-3 line-clamp-1 text-md">
            <figure className="bg-base-200 aspect-square rounded-md h-full bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1514254651968-1c86261335e9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGluayUyMGRhcmslMjB0ZWNofGVufDB8fDB8fHww')]"></figure>
            <div className="py-4">
              <h4 className="font-semibold line-clamp-2 mb-1">My journey from jee aspirant to BCA student My journey from jee aspirant to BCA student</h4>
              <p className="text-xs ">Rajneesh Kumar</p>

            </div>
          </div>


          
         
        </div>
      </main>
    </>
  );
}
