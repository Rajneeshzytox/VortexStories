// Secondary card to show other info
import { Ellipsis } from "lucide-react";


export function SecondaryCard1() {
  return (
    <>
      <div className="Card2 w-[90%] mx-auto">
        {/* CARD CONTENT */}
        <div className=" flex justify-between gap-8">
          <div className="TextCard w-[70%]">
            {/* profile */}
            <div className="flex gap-2 mb-2 text-xs items-center font-semibold">
              <div className="avatar online">
                {/* img */}
                <div className="w-6 rounded-full bg-secondary"></div>
              </div>
              <h5>Rajneesh Kumar</h5>
            </div>

            <h3 className=" text-neutral capitalize text-lg font-semibold">
              Card Heading Text
            </h3>
            <p className="line-clamp-3 text-balance text-sm w-[90%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. sunt,
              facilis, non voluptas autem, dolores eos molestias quos qui unde
              iusto ullam cumque voluptatum accusamus eum cupiditate sequi
              quidem laborum.
            </p>
          </div>

          <div className="bg-secondary aspect-square rounded-md max-w-24 max-h-24 w-24"></div>
        </div>
        {/* CARD OPTIONS */}
        <div className="flex gap-4 justify-between items-center w-[80%] mt-4">
            <div className="flex gap-4 items-center">
            <a className="bg-secondary text-secondary-content px-4 rounded-md text-sm py-[2px] cursor-pointer">Read More...</a>
            <a className="text-xs text-neutral">4 days ago</a>
            </div>
            <div className="">
                <Ellipsis />
            </div>

        </div>
        {/* CARD DIVIDER */}
        <div className="divider"></div>
      </div>
    </>
  );
}
