export default function StatHover({title, hovertext}){
    return (
        <div className="relative flex flex-col items-center group">
            <div className="flex items-center gap-2">
                <h2 className="cursor-pointer">{title} </h2>
                <img  src="/icons/qm.png" className='w-4 h-4'/>
            </div>
            <div className=" w-[300px] absolute bottom-full mb-2 hidden group-hover:block bg-black text-white text-sm px-2 py-1 rounded">
                {hovertext}
            </div>          
        </div>
    )
}