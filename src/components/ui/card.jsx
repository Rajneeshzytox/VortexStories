export default function PrimaryCard() {
  return (
    <>
      <div className="min-w-64 card bg-base-100 rounded-lg shadow-lg p-2">
        <figure className="w-full h-32 bg-base-300 rounded-md">
          {/* img here */}
        </figure>

        {/* Card text content */}
        <div className="mt-2 p-2 flex flex-col gap-3">
            {/* card info */}
            <div className="InfoCard text-xs text-neutral flex justify-between">
                <span className="CardCategory">Success Stories</span>
                <span className="DateOfPublish">4 days ago</span>
            </div>
            {/* crard title */}
            <div className="TitleCard text-md font-semibold text-primary flex justify-between items-center pr-1">
                <h4 className="CardTitle w-[80%] line-clamp-2 text-wrap leading-tight">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat.
                </h4>

                {/* avatar */}
                <div className="avatar online">
                <div className="w-8 rounded-full bg-secondary"></div>
                </div>
            </div>
            {/* Card Tags */}
            <div className="CardTags *:inline-block">
                <a href="#" className="badge badge-secondary rounded-md px-4 ">Tag 1</a>
            </div>
        </div>
      </div>
    </>
  );
}
