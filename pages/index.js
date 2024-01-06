import MyGrid from "../components/Screen/MyGrid"
import SwimmingFish from "../components/Screen/Fish/SwimmingFish"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div>
      <div className="sine-wave-background flex justify-center items-start w-full h-full pt-5">
        <div className="w-4/5 ">
          <h1 className="text-center mb-10 wobble-text">Aspiring Fullstack Engineer</h1>
          <div className="pb-12 flex justify-around items-center flex-col md:flex-row">
            <div className="hidden xs:block"><MyGrid className="w-2/3"/></div>
            <div className="xs:w-1/3 flex items-center xs:mt-10 md:mt-0 md:ml-24">
              <Image 
                src="/home-images/me.jpeg"
                width={500}
                height={500}
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
          <p className=""><span className="css-rainbow-text grow-on-hover">Creative</span>, collaborative, and goal-oriented student working toward a career in software engineering, leaning more towards frontend development, to create platforms that are user friendly, well-designed, and <span className="font-bold grow-on-hover ">impact society positively</span>. Anna is qualified by her years of coding experience, her number of quality projects, and through teaching others how to code.</p>
        </div>
      </div>
      <div className="flex flex-col w-3/4 mx-auto p-5">
       <Link href="/resume">📜 Take a look at my resume </Link>
       <Link href="/about/my-journey">🧗🏻‍♀️ Learn More About My CS Journey Here </Link>
       <Link href="/about/me">Learn More About Me Here</Link>
      </div>
    </div>
  )
}