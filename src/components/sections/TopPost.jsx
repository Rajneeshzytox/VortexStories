import { topPostData } from "../../data/topPostData";
import { ArrowUpRight } from "lucide-react";

export default function TopPost() {
  return (
    <>
      <aside className="mt-4">
        {/* section headings*/}
        <div className="font-bold text-lg mb-4 ml-6 ">Top Posts</div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2 bg-base-100 rounded-lg shadow-lg overflow-hidden pt-5 m-4  px-6 ">

          {/* Map (loop) of cards top post */}
          {topPostData.map((post, index) => (
            <div key={post.id} className="topPostCard flex gap-4 relative ">
              {/* number  */}
              <span className="text-base-300 text-xl font-semibold lg:text-md">{`0${
                index + 1
              }`}</span>

              {/* top post container */}
              <div className="text-neutral w-full PostCard">
                {/* topCard Title */}
                <h5 className="font-bold text-primary lg:text-sm line-clamp-2">
                  {post.title}
                </h5>

                {/* topcard UserName */}
                <span className="text-sm font-semibold lg:text-xs">
                  {post.Author}
                </span>

                <span className="text-sm mx-1 lg:text-xs">in</span>

                {/* top card category */}
                <span className="text-sm font-semibold lg:text-xs">
                  {post.Category}
                </span>

                {/* topcard details */}
                <div className="w-full text-neutral text-xs">
                  <span>{`${post.date} ago`}</span>
                </div>

                {/* link to visite Top post */}
                <a
                  href={post.href}
                  className="VisitLink absolute top-1/2 -translate-y-6 right-16 opacity-0 transition-all lg:right-0 lg:-translate-y-4 btn btn-sm btn-circle hover:btn-primary origin-center"
                >
                  <ArrowUpRight />
                </a>

              {/* divider */}
              <span className="divider divider-secondary w-full"></span>
            </div>
        </div>

          ))}
        </div>
      </aside>


    {/* Linkk IN animation top Post */}
      <style jsx>{`
        .PostCard:hover .VisitLink{
            opacity: 1;
            right: 2rem;
        }
        `}
      </style>
    </>
  );
}
