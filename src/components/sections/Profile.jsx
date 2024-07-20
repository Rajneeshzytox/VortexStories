import { SquarePen, ImagePlus, Camera, Clapperboard, Pen, Sticker, BarChart3} from "lucide-react";

export default function Profile() {
  return (
    <>
      {/* profile sections */}
      <aside className=" bg-base-100 m-4 shadow-lg rounded-lg flex gap-4 lg:gap-1 flex-col items-center overflow-hidden pb-4">
        {/* profile banner with avatar */}
        <div className="bg-base-300 w-full h-20 flex justify-center items-center mb-10 relative">
        {/* Pen - Edit Profile */}
        <a className="absolute z-10 btn btn-circle btn-md top-14 right-14 lg:btn-sm lg:top-2 lg:right-2 *:size-5 lg:*:size-3 "><Pen /></a>
          {/* img avatar profile */}
          <div className="avatar online  translate-y-1/2">
            <div className="bg-secondary w-20 aspect-square rounded-full"></div>
          </div>
        </div>

        {/* Profile Username Details */}
        <div className="text-center w-[80%] sm:w-[60%] lg:w-[90%] lg:line-clamp-3  text-pretty">
            <h3>Rajneesh Kumar</h3>
            <p className="lg:text-sm text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto consectetur animi illo molestias sit</p>
        </div>

        {/* Write Posts container */}
        <div className="flex justify-center items-center w-full px-8 gap-6 lg:gap-1">
            {/* write post logo */}
          <div className="WritePost max-w-12 h-12 aspect-square rounded-full flex justify-center items-center w-full">
            <SquarePen />
          </div>
            {/* write post input */}
            <a className="link link-hover hidden lg:block">Create Post</a>
          <div className="input input-bordered input-primary rounded-full w-full lg:hidden"></div>
        </div>

        {/* post media tyoe icons */}
        <div className=" flex justify-around w-full lg:w-[90%] lg:*:text-neutral lg:*:*:size-5   lg:*:btn-sm *:hover:*:stroke-secondary *:hover:*:fill-primary ">
            {/* camera icon */}
            <a className="btn btn-ghost btn-circle hover:bg-primary"> <Camera /></a>
            {/* img icon */}
            <a className="btn btn-ghost btn-circle hover:bg-primary"> <ImagePlus /></a>
            {/* videp icon */}
            <a className="btn btn-ghost btn-circle hover:bg-primary"><Clapperboard /></a>
            <a className="btn btn-ghost btn-circle hover:bg-primary"><BarChart3 /></a>
            <a className="btn btn-ghost btn-circle hover:bg-primary"><Sticker /></a>
        </div>

      </aside>
    </>
  );
}
