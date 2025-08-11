import { Code, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Website",
    description:
      "Worked on the development, maintenance and enhancement of the web-application of a famous jewellery brand.",
    image: "/projects/TOUS.png",
    tags: ["React.js", "Vue.js", "JIRA", "Directus"],
    demoURL: "#",
    githubURL: "https://github.com/settings/profile",
  },
  {
    id: 2,
    title: "My Portfolio",
    description:
      "Created a beautiful space-theme Portfolio for highlighting my career Profile, Skills, Projects, and a Contact section",
    image: "/projects/Portfolio.png",
    tags: ["HTML/CSS", "React.js", "TailwindCSS"],
    demoURL: "#",
    githubURL: "https://github.com/settings/profile",
  },
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description:
      "React.js and Next.js E-Commerce Dashboard for real-time analytics, product tracking and store management.",
    image: "/projects/Dashboard.png",
    tags: ["React.js", "SCSS", "Context API"],
    demoURL: "#",
    githubURL: "https://github.com/settings/profile",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here is a selection of my recent projects showcasing attention to
          detail, optimized performance and a focus on user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-120"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 font-medium text-xs rounded-full bg-primary/20 text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="mb-1 font-semibold text-xl">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-5">
                    <a
                      href={project.demoURL}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      target="_blank"
                    >
                      {" "}
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubURL}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      target="_blank"
                    >
                      {" "}
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
            <a 
            className="cosmic-button w-fit flex items-center mx-auto gap-2" 
            href="https://github.com/codewith-aman"
            target="_blank" >Check my GitHub <Code size={18} />
            </a>
        </div>
      </div>
    </section>
  );
};
