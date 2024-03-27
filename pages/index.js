import MyGrid from "../components/Screen/MyGrid"
import SwimmingFish from "../components/Screen/Fish/SwimmingFish"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div>
      <div className="sine-wave-background flex justify-center items-start w-full h-full pt-5">
        <div className="w-4/5 ">
          <h1 className="text-center mb-10 wobble-text">Aspiring Designer</h1>
          <div className="pb-12 flex justify-around items-center flex-col md:flex-row">
            <div className="hidden xs:block"><MyGrid className="w-2/3"/></div>
            <div className="xs:w-1/3 flex items-center xs:mt-10 md:mt-0 md:ml-24">
              <Image 
                src="/home-images/me.jpeg"
                width={500}
                height={500}
                priority="high"
              />
            </div>
          </div>
          <div className="hidden xs:block">
            <SwimmingFish />
          </div>
        </div>
      </div>
      <div className="bg-lightgray p-5"></div>
      <div className="py-5">
        <div className="w-3/4 mx-auto p-5">
          <h1 className="mb-4 text-center"></h1>
          <p className=""><span className="css-rainbow-text grow-on-hover">Creative</span>, collaborative, and goal-oriented student interested in advancing research in <span className="font-bold grow-on-hover ">Human-Computer Interaction</span>, to create platforms that are user friendly, well-designed, and <span className="font-bold grow-on-hover ">impact society positively</span>. Anna is qualified by her years of coding experience, her number of quality projects, and through teaching others how to code.</p>
        </div>
      </div>
      <div className="flex justify-center mb-10">
        <div className="flex flex-col">
        <Link className="m-2 hover-effect" href="/skills">⭑ Check out my skills</Link>
        <Link className="m-2 hover-effect" href="/resume">⭑ Check out my resume</Link>
        <Link className="m-2 hover-effect" href="/art-portfolio">⭑ Check out my art portfolio</Link>
        </div>
      </div>

    </div>
  )
}