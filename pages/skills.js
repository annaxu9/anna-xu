import { useState, useEffect } from "react";

export default function Skills() {
    const [skills, setSkills] = useState([]);
    const [filteredSkills, setFilteredSkills] = useState(skills);
    const [color, setColor] = useState("#FFE0BC");
    const [selectedSkillIndex, setSelectedSkillIndex] = useState(null);
    const [hoverIndex, setHoverIndex] = useState(null);

    const categories = [["All", "#FFE0BC"], ["Frontend", "#DDF3BA"], ["Backend", "#F5BEBE"], ["Database", "#BADEF3"], ["Systems Programming", "#F5ECBE"], ["Source Control", "#B3E8C8"], ["Graphic Design", "#C8C7F8"], ["Art", "#FBC1F6"]];
    const levelDescriptions = {
        1: "Just Beginning to Learn",
        2: "Somewhat Comfortable",
        3: "Very Comfortable",
        4: "Expert Level"
      };

    useEffect(() => {
        fetch('/api/skills')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setSkills(data);
            setFilteredSkills(data);
        })
    }, []);

    function handleFilter(category, color) {
        if (category == "All") {
            setFilteredSkills(skills);
        } else {
            setFilteredSkills(skills.filter(skill => skill.category == category));
        }
        setColor(color);

    }

    // Function to lightly lighten the color on hover
    const lightenColor = (color) => {
        // Assuming color is in the format '#rrggbb'
        let r = parseInt(color.slice(1, 3), 16);
        let g = parseInt(color.slice(3, 5), 16);
        let b = parseInt(color.slice(5, 7), 16);

        // Lightly lighten each color component by 10%
        r = Math.min(Math.floor(r * 1.1), 255);
        g = Math.min(Math.floor(g * 1.1), 255);
        b = Math.min(Math.floor(b * 1.1), 255);

        // Convert each component to a two-digit hexadecimal code and return the color
        return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
    };

  
    return (
        <div className="w-11/12 mx-auto">
            <h1 className="text-center">My Web Development Journey</h1>
            <p className=" p-2 m-2 bg-lightgray">
            On a good day, coding can be a fun little puzzle. On a bad day, coding can make you want to commit violence against the most expensive thing you own. As someone who didn’t really code before college, I found myself often fighting an uphill battle.

            That's why, before my senior year, I took a gap semester. While I taught CS50 and had extracurricular commitments, without classes I was able to carve out the space to finally fill my conceptual holes, practice without much stress, and explore. I'm proud to share that when I used to feel apprehension at the thought of opening VSCode, I now engage with the application spontaneously and many times even eagerly. Below you can take a look at my skills!
            </p>

            <h1 className="text-center">Anna's Skills</h1>

            <div className="p-2 m-2 flex items-center justify-center">
                <h1 className="m-2 p-2">Filter By Category:</h1>
                <ul className="m-1">
                    {categories.map((category, index) => {
                        return (
                            <li key={index} className="inline-block m-2">
                                <button style={{ backgroundColor: category[1] }} className=" text-black p-1 rounded" onClick={() => handleFilter(category[0], category[1])}>{category[0]}</button>
                            </li>
                        )
                    })}
                </ul>

            </div>

            <div className="md:w-4/5 mx-auto">
                <div className="flex flex-col">
                    {filteredSkills.map((skill, index) => {
                        return (
                            <div>
                                <div 
                                    className="flex justify-between items-center p-4 m-2 rounded-lg cursor-pointer"
                                    style={{ backgroundColor: hoverIndex === index ? lightenColor(color) : color}}
                                      onMouseEnter={() => setHoverIndex(index)}
                                      onMouseLeave={() => setHoverIndex(null)}
                                      onClick={() => setSelectedSkillIndex(selectedSkillIndex === index ? null : index)}
                                    key={index}
                                >
                                    <h1 className="font-bold">{skill.name}</h1>
                                    <h1 className="italic">{levelDescriptions[skill.level]}</h1>
                                </div>
                                {selectedSkillIndex === index && <p className="mt-2 text-gray-600 text-sm">{skill.note}</p>}
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}