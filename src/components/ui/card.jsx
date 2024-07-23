export default function PrimaryCard({data}) {
  return (
    <>
      <div className="min-w-64  card bg-base-100 rounded-lg mx-4 shadow-lg p-2">
        <figure className="w-full ring h-32 overflow-hidden rounded-md image-full">
          {/* img here */}
          <img src={data.imageUrl} alt={data.id} className="size-full w-44" />
        </figure>

        {/* Card text content */}
        <div className="mt-2 p-2 flex flex-col gap-3">
            {/* card info */}
            <div className="InfoCard text-xs text-neutral flex justify-between">
              {/* Category here */}
                <span className="CardCategory">{data.category}</span>
                <span className="DateOfPublish">{data.date} ago</span>
            </div>
            {/* crard title */}
            <div className="TitleCard text-md font-semibold text-primary flex justify-between items-center pr-1">
                <h4 className="CardTitle w-[80%] line-clamp-2 capitalize text-wrap leading-tight max-w-64">
                {data.title}
                </h4>

                {/* avatar */}
                <div className={` overflow-hidden w-8 rounded-full avatar ${(data.IsOnline)? 'online' : 'offline'}`}>
                <img className="aspect-square w-4" src={data.avatarUrl} />
                </div>
            </div>
            {/* Card Tags */}
            <div className="CardTags *:inline-block">
                  {
                    data.tags.map((tag) =>(
                      <a href="#" className="badge badge-secondary rounded-md px-4 mx-1 ">

                        {tag}
                      </a>    
                       
                    ))
                  }

            </div>
        </div>
      </div>
    </>
  );
}
