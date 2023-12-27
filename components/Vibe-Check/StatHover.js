export default function StatHover({title, hovertext}){
    return (
        <div className="relative flex flex-col items-center group">
            <h2 className="cursor-pointer">{title}</h2>
            <div className="absolute bottom-full mb-2 hidden group-hover:block bg-black text-white text-sm px-2 py-1 rounded">
                {hovertext}
            </div>          
        </div>
    )
}