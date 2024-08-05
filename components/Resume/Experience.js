import { useState } from "react";

function Experience({ image, title, date, location, mainText, supplementaryText, links, additionalLinks }) {
    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    console.log(additionalLinks)

    function parseMainText(mainText, links) {
        return mainText.map((text, index) => {
            if (text.startsWith("[") && text.endsWith("]")) {
                const linkText = text.slice(1, -1);
                const link = links.find(l => l.text === linkText);
                if (link) {
                    return <a key={index} className="text-blue-600 dark:text-blue-500 hover:underline" href={link.href} target="_blank">{link.text}</a>;
                }
            }
            return <span key={index}>{text}</span>;
        });
    }

    return (
        <div className="mb-5">
            <div className="flex gap-2 items-center">
                <img src={image} className="w-12 h-12" alt={title} />
                <div>
                    <h3 className="font-bold">{title}</h3>
                    <h3>{location} ({date})</h3>
                </div>
            </div>

            <p className="text-center my-4">
                {parseMainText(mainText, links)}
            </p>

            <div className="bg-[#FADB4A] rounded p-2 cursor-pointer" onClick={toggleShowMore}>

                <div className={`transition-all duration-1000 overflow-hidden ${showMore ? 'max-h-screen' : 'max-h-20'}`}>
                    {!showMore && (
                        <p className="text-center">Read More!</p>
                    )}
                    {showMore && (
                        <div>
                            <ul className="list-disc ml-10 m-4">
                                {supplementaryText.map((text, index) => (
                                    <li key={index}>{text}</li>
                                ))}
                            </ul>
                            <div >
                                { additionalLinks && 
                                <div className="ml-10 m-4">
                                See Additional Links:
                                    {additionalLinks.map((item) => {
                                    return(
                                        <a key={item.href} className="text-blue-600 dark:text-blue-500" href={item.href} target="_blank" rel="noopener noreferrer">{" " + item.text}</a>
                                    )})
                                    }
                                </div>
                                }
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Experience;
