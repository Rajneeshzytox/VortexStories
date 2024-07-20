



export default function TopPost() {
  return (
    <>
      <aside className="mt-4">
        {/* section headings*/}
        <div className="font-bold text-lg mb-4 ml-6">Featured Posts</div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2 bg-base-100 rounded-lg shadow-lg overflow-hidden pt-5 m-4   px-6 ">
        {/* top post card */}
        <div className="topPostCard flex gap-4 ">
          {/* number  */}
          <span className="text-base-300 text-2xl font-semibold">01</span>
          {/* top post container */}
          <div className="text-neutral ">
            {/* topCard Title */}
            <h5 className="font-bold text-primary lg:text-sm line-clamp-2">
              Create Your First Ai Chatbot Using Gemini Api
            </h5>
            {/* topcard UserName */}
            <span className="text-sm font-semibold lg:text-xs">{`Rajneesh Kumar`}</span>
            <span className="text-sm mx-1 lg:text-xs">in</span>
            {/* top card category */}
            <span className="text-sm font-semibold lg:text-xs">{`Design `}</span>
            {/* topcard details */}
            <div className="w-full text-neutral text-xs">
                <span>4 days ago</span>
            </div>
            <span className="divider divider-secondary"></span>
          </div>
        </div>
        </div>


      </aside>
    </>
  );
}
