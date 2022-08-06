export default function NotFound(){
    return(
        <>
        <div className="flex justify-center gap-1 flex-col h-screen items-center">
            <h1 className="font-bold">Not Found 404</h1>
            <div className="h-5 items-center group w-1/3 flex justify-center">
                <div className="bg-black h-[1px] w-full flex items-center relative">
                    <div className="w-3 h-3 bg-slate-300 relative transition ease-out duration-500 group-hover:translate-x-28 translate-x-2 border-[4px]  border-black rounded-full "></div>
                </div>
            </div>
        </div>
        </>
    )
}