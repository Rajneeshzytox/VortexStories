import { Search } from "lucide-react"

export default function Header(){
    return(
        <>
        <header className="header min-h-20 h-fit flex justify-between items-center pl-20 py-4 gap-6 flex-wrap first-letter pr-10 min-w-52 sticky top-0 backdrop-blur-sm z-50">
        {/* headee */}
            <div className="capitalize ">
                <h1 className="font-bold text-black">Vortex Stories</h1>
                <p className="text-sm ">Share Your amazing stories</p>
                
            </div>
           <div className="dropdown lg:dropdown-left dropdown-end">
                <Search role="button" tabIndex={0}/>
                <div className="mt-6 dropdown-content" tabIndex={0}>
                    <input className="input input-primary input-bordered" type="text" placeholder="Search Stories" />
                </div>
           </div>
        </header>
        </>
    )
}