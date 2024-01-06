import Skill from "../components/Resume/Skill"

const skills = 
[
  {
    "name" : "HTML",
    "subskills": []
  }, 
]


export default function Test() {
  return (
    <div className="text-center mx-auto w-full md:w-4/5">
      <p>Click on the skill to read more about my experience</p>
      <div>
        <h1>Skill Levels</h1>
        <div className="flex justify-center w-full">
          <div className="flex-grow bg-beginner h-12">
            <p className="p-2 font-black">Basic</p>
          </div>
          <div className="flex-grow bg-intermediate h-12">
            <p className="p-2 font-black">Intermediate</p>
          </div>
          <div className="flex-grow bg-advanced h-12">
            <p className="p-2 font-black">Advanced</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center flex-wrap gap-2 mt-5">
        <Skill level="advanced" name="HTML"/>
        <Skill level="advanced" name="CSS">
          <Skill level="advanced" name="Tailwind"/>
        </Skill>
        <Skill level="intermediate" name="TypeScript"> 
          <Skill level="advanced" name="JavaScript">
            <div className="flex justify-center gap-2 flex-wrap">
              <Skill level="advanced" name="React">
                <div className="flex justify-center gap-2 flex-wrap">
                  <Skill level="intermediate" name="Reach Native"/>
                  <Skill level="intermediate" name="Next"/>
                </div>
              </Skill>
              <Skill level="intermediate" name="Vue">
                <Skill level="intermediate" name="Nuxt"/>
              </Skill>
              <Skill level="intermediate" name="jQuery"/>
              <Skill level="beginner" name="D3"/>
            </div>
          </Skill>
        </Skill>
        <Skill level="advanced" name="Python">
          <div className="flex justify-center gap-2 flex-wrap" >
            <Skill level="advanced" name="Flask"/>
            <Skill level="intermediate" name="numpy" />
            <Skill level="intermediate" name="pandas" />
          </div>
        </Skill>

        <Skill level="advanced" name="C"/>
        <Skill level="advanced" name="SQL"/>
        <Skill level="beginner" name="Java"/>
        <Skill level="beginner" name="C++"/>

      </div>

    </div>
  )
}