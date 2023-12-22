import MyGrid from "../components/Screen/MyGrid"
import SwimmingFish from "../components/Screen/Fish/SwimmingFish"

export default function Home() {
  return (
    <div>
      {/* <div className="w-full h-6 text-white flex justify-center align-items bg-gradient-to-r from-[#CBE9D1] to-[#F2DBDB]">
        <div className="w-4/5 text-xs mt-1 whitespace-nowrap overflow-hidden">
          /*.+\\/.#$ :) %//\][!#% /*.+\\/.#$ :) coding is hard %//\][!#% /*. hello world +\\/.#$ :) %//\][!#% /*.+\\/.#$ :) %//\][!#% /*.+\\/.#$ :) %//\][!#%
        </div>
      </div> */}
      <div className="flex justify-center items-start w-full h-full pt-5">
        <div className="w-4/5">
          <MyGrid />
          <SwimmingFish />
        </div>
      </div>
    </div>

  )
}