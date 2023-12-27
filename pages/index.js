import MyGrid from "../components/Screen/MyGrid"
import SwimmingFish from "../components/Screen/Fish/SwimmingFish"
import Image from "next/image"

export default function Home() {
  return (
    <div>
      <div className="sine-wave-background flex justify-center items-start w-full h-full pt-5">
        <div className="w-4/5 ">
          <h1 className="text-center mb-10">Aspiring Fullstack Engineer</h1>
          <div className="pb-12 flex justify-around items-center flex-col md:flex-row">
            <div className="hidden xs:block"><MyGrid className="w-2/3"/></div>
            <div className="xs:w-1/3 flex items-center xs:mt-10 md:mt-0 md:ml-24">
              <Image 
                src="/me.jpeg"
                width={200}
                height={200}
              />
            </div>
          </div>
          <div className="hidden xs:block">
            <SwimmingFish />
          </div>
          <div className="xs:hidden text-center mb-36">
            More Coming Soon! (Also there is more happening on the homepage when using a computer. I just have yet to make it compatible with mobile... still check out Colorfy though!)
          </div>
        </div>
      </div>
    </div>
  )
}