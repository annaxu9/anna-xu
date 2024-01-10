export default function Skill({level, name, children}) {
    return (
        <div className={`flex-grow p-5 border-white border-4 text-center ${level === 'beginner' ? 'bg-beginner' : ''} ${level === 'intermediate' ? 'bg-intermediate' : ''} ${level === 'advanced' ? 'bg-advanced' : ''}`}>
            <h1 className="p-2">{name}</h1>
            {children}
        </div>
    )
}