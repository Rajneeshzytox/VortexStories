
const tags = ["Computer Science","React" ,"Science","app development", "javascript", "rust", "python", "ai", "web development", "Studies", "jee", "machine learning", "IIT", "Neet", "Technologies"]

export default function Tags(){
    return(
        <>
        <aside className="px-4 py-8 static bottom-64">
        <div className="font-bold text-lg mb-4 ml-1">Popular Tags</div>
        
        <div className="flex flex-wrap transition-all capitalize items-center px-2">

            {
                tags.map((tag) => (
            <span key={`${tag} tag`} className="bg-base-200 rounded-md px-3 text-sm mx-3 my-[0.3rem] text-base-content hover:bg-primary hover:text-primary-content text-nowrap ">
                {tag}
            </span>
                )) 
            }
        </div>
        </aside>
        </>
    )
}