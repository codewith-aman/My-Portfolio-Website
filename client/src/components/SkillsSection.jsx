import { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
  //Frontend
  { name: "HTML/CSS", level: 85, category: "frontend" },
  { name: "JavaScript", level: 70, category: "frontend" },
  { name: "React.js", level: 85, category: "frontend" },
  { name: "Vue.js", level: 75, category: "frontend" },
  { name: "TypeScript", level: 50, category: "frontend" },
  { name: "TailwindCSS/Bootstrap", level: 80, category: "frontend" },
  { name: "Next.js", level: 70, category: "frontend" },

  //Other Technologies
  { name: "Azure/AWS Cloud", level: 70, category: "others" },
  { name: "My SQL", level: 75, category: "others" },
  { name: "Generative AI", level: 70, category: "others" },
  { name: "Node.js", level: 50, category: "others" },
  { name: "MongoDB", level: 50, category: "others" },

  //Tools
  { name: "Git/Github", level: 80, category: "tools" },
  { name: "JIRA/Directus", level: 85, category: "tools" },
  { name: "Chrome DevTools", level: 75, category: "tools" },
];

const categories = ["all", "frontend", "others", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center ">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap gap-4 mb-12 justify-center">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name} </h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
