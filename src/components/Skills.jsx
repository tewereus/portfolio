import { useEffect, useState } from "react";
import {
  Code2,
  Database,
  Palette,
  Smartphone,
  Cloud,
  GitBranch,
  Users,
  Lightbulb,
  Target,
  MessageSquare,
} from "lucide-react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const skillsSection = document.getElementById("skills");
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => observer.disconnect();
  }, []);

  const technicalSkills = [
    {
      name: "JavaScript/TypeScript",
      level: 95,
      icon: Code2,
      color: "from-yellow-500 to-orange-500",
    },
    {
      name: "React/Next.js",
      level: 90,
      icon: Code2,
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Node.js/Express",
      level: 85,
      icon: Database,
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "Python/Django",
      level: 80,
      icon: Code2,
      color: "from-blue-600 to-indigo-600",
    },
    {
      name: "Database Design",
      level: 88,
      icon: Database,
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "UI/UX Design",
      level: 85,
      icon: Palette,
      color: "from-pink-500 to-rose-500",
    },
    {
      name: "Mobile Development",
      level: 75,
      icon: Smartphone,
      color: "from-indigo-500 to-purple-500",
    },
    {
      name: "Cloud/DevOps",
      level: 82,
      icon: Cloud,
      color: "from-teal-500 to-cyan-500",
    },
  ];

  const softSkills = [
    { name: "Problem Solving", level: 95, icon: Lightbulb },
    { name: "Team Leadership", level: 88, icon: Users },
    { name: "Project Management", level: 85, icon: Target },
    { name: "Communication", level: 92, icon: MessageSquare },
    { name: "Version Control", level: 90, icon: GitBranch },
    { name: "Agile/Scrum", level: 87, icon: Target },
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-background-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical abilities and professional
            skills.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Technical Skills */}
          <div className="space-y-8">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <Code2 className="text-primary" />
                Technical Skills
              </h3>

              <div className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <skill.icon className="w-5 h-5 text-primary" />
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="skill-bar">
                      <div
                        className={`skill-progress bg-gradient-to-r ${skill.color}`}
                        style={{
                          width: isVisible ? `${skill.level}%` : "0%",
                          transitionDelay: `${index * 100}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Soft Skills */}
          <div className="space-y-8">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <Users className="text-primary" />
                Professional Skills
              </h3>

              <div className="space-y-6">
                {softSkills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <skill.icon className="w-5 h-5 text-primary" />
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{
                          width: isVisible ? `${skill.level}%` : "0%",
                          transitionDelay: `${index * 150}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Skills Grid */}
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-6">Tools & Technologies</h3>
              <div className="grid grid-cols-3 gap-4">
                {[
                  "React",
                  "Vue.js",
                  "Angular",
                  "Node.js",
                  "Python",
                  "PostgreSQL",
                  "MongoDB",
                  "Redis",
                  "AWS",
                  "Docker",
                  "Kubernetes",
                  "GraphQL",
                  "REST APIs",
                  "Git",
                  "Jenkins",
                  "Figma",
                  "Adobe XD",
                  "Sketch",
                ].map((tech) => (
                  <div
                    key={tech}
                    className="text-center p-3 rounded-lg bg-glass-bg/50 hover:bg-primary/10 transition-all duration-300 hover:scale-105"
                  >
                    <span className="text-sm font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
