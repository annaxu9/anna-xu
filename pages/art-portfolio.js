import { useState } from "react"
import ArtImage from "../components/Art/ArtImage"

export default function ArtPortfolio() {
    const filters = [
        "All", 
        "Paintings", 
        "Prints",
        "Multimedia",
        "Pastel",
    ]
    const paintings = [
        ["/art-portfolio/oil-studies.jpeg", "These are some oil studies I did in my Basic Painting course."],
        ["/art-portfolio/coconut-tree.jpeg", "This became a set prop for Desert Island, a play I set designed."],
        ["/art-portfolio/oil-wood-dog.jpeg", "I describe this as a stream of consciousness painting. This was my final project for Basic Painting."],
    ]

    const prints = [
        ["/art-portfolio/printmaking-final.jpg", "This was my final project for Printmaking. I layered woodblocks to create this. While based on water, I wanted to create a more vibrant and abstract design."],
        ["/art-portfolio/canada-etching.jpg", "This was an etching I did based off a scene in Banff National Park in Canada. I defintely did not do its beauty justice."], 
        ["/art-portfolio/monotype-print.jpg", "A little monotype fashion icon."],
        ["/art-portfolio/woodblock-abstract.jpg", "Abstract Woodblock Print"],
        ["/art-portfolio/etching-road.jpeg", "A rainy, dark day on Whitney Avenue."],
    ]

    const multimedia = [
        ["/art-portfolio/faux-stained-glass.jpeg", "A faux stained glass window I made for Girls Aren't Funny, a comedy performance I set designed."],
        ["/art-portfolio/multimedia.jpeg", "My final project in Basic Drawing."],
        ["/art-portfolio/welcome-to-the-rainbow-room.jpeg", "My final project for my class on the Culture Wars in Public Schools Across America. This was a gift to The Rainbow Room, Bucks County's center for LGBTQ+ youth and allies."]
    ]

    const pastel = [["/art-portfolio/on-anxiety.jpeg", "A piece I did for an art class in high school. I think it was about anxiety😅"]]

    const shrimp_girls = [
        "/art-portfolio/shrimp-girl.jpg",
        "/art-portfolio/girl1.jpg",
        "/art-portfolio/girl2.jpg",
        "/art-portfolio/girl3.jpg",
    ]
    const [filter, setFilter] = useState("All")
  return (
    <div className="w-4/5 mx-auto">
        <h1 className="text-center bavista text-[#a1c4fd]">We<span className="nervada">l</span>come to my A<span className="nervada">r</span>t Po<span className="nervada">r</span>tfo<span className="nervada">l</span>io<span className="nervada">!!!!!!</span></h1>
        <div className="text-[#a1c4fd] flex justify-center items-center rounded-lg m-2">
        <h1 className="ml-4">Filter by Medium:</h1>
        <div className="flex flex-wrap m-2 ">
          {filters.map((filter, index) => {
            return (
              <button key={index} className="gradient-background rounded-lg p-1 m-1" onClick={() => setFilter(filter)}>{filter}</button>
            )
          })}
        </div>
        </div>
    
        <div className="md:w-1/2 lg:1/3 mx-auto">
            
            {
                filter === "All" || filter === "Paintings" ? (
                    <div>
                        <hr className="my-4"></hr>
                        <h1 className="mb-4 text-center text-[#a1c4fd]">✨Paintings✨</h1>
                        {/* Create rows for every two paintings */}
                        {paintings.map((painting, index) => (
                            index % 2 === 0 && (
                                <div className="flex flex-col sm:flex-row justify-center items-center" key={index}>
                                    <ArtImage className="w-full sm:w-1/2" key={index} img={paintings[index]} />
                                    {paintings[index + 1] && (
                                        <ArtImage className="w-full sm:w-1/2" key={index + 1} img={paintings[index + 1]} />
                                    )}
                                </div>
                            )
                        ))}
                    </div>
                ) : null
            }

            {
                filter === "All" || filter === "Prints" ? (
                    <div>
                        <hr className="my-4"></hr>
                        <h1 className="mb-4 text-center text-[#a1c4fd]">✨Prints✨</h1>
                        {/* Create rows for every two prints */}
                        {prints.map((print, index) => (
                            index % 2 === 0 && (
                                <div className="flex flex-col sm:flex-row justify-center items-center" key={index}>
                                    <ArtImage className="w-full sm:w-1/2" key={index} img={prints[index]} />
                                    {prints[index + 1] && (
                                        <ArtImage className="w-full sm:w-1/2" key={index + 1} img={prints[index + 1]} />
                                    )}
                                </div>
                            )
                        ))}
                    </div>
                ) : null
            }

            {
                filter === "All" || filter === "Multimedia" ? (
                    <div>
                        <hr className="my-4"></hr>
                        <h1 className="mb-4 text-center text-[#a1c4fd]">✨Multimedia✨</h1>
                        {/* Create rows for every two multimedia */}
                        {multimedia.map((mult, index) => (
                            index % 2 === 0 && (
                                <div className="flex flex-col sm:flex-row justify-center items-center" key={index}>
                                    <ArtImage className="w-full sm:w-1/2" key={index} img={multimedia[index]} />
                                    {multimedia[index + 1] && (
                                        <ArtImage className="w-full sm:w-1/2" key={index + 1} img={multimedia[index + 1]} />
                                    )}
                                </div>
                            )
                        ))}
                    </div>
                ) : null
            }

            {
                filter === "All" || filter === "Pastel" ? (
                    <div>
                        <hr className="my-4"></hr>
                        <h1 className="mb-4 text-center text-[#a1c4fd]">✨Pastel✨</h1>
                        {/* Create rows for every two pastel */}
                        {pastel.map((past, index) => (
                            index % 2 === 0 && (
                                <div className="flex flex-col sm:flex-row justify-center items-center" key={index}>
                                    <ArtImage className="w-full sm:w-1/2" key={index} img={pastel[index]} />
                                    {pastel[index + 1] && (
                                        <ArtImage className="w-full sm:w-1/2" key={index + 1} img={pastel[index + 1]} />
                                    )}
                                </div>
                            )
                        ))}
                    </div>
                ) : null
            }

        </div>
    </div>
    )
}