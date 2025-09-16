import { Briefcase, Calendar, MapPin, Award, TrendingUp } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      companyLogo: "🚀",
      location: "Remote",
      period: "2022 - Present",
      type: "Full-time",
      description:
        "Led development of scalable web applications serving 100K+ users. Architected microservices infrastructure and mentored junior developers.",
      achievements: [
        "Increased application performance by 40% through optimization",
        "Led a team of 5 developers on critical product features",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Designed and built RESTful APIs handling 1M+ daily requests",
      ],
      technologies: [
        "React",
        "Node.js",
        "AWS",
        "PostgreSQL",
        "Docker",
        "Kubernetes",
      ],
      current: true,
    },
    {
      id: 2,
      role: "Full Stack Developer",
      company: "StartupXYZ",
      companyLogo: "💡",
      location: "Remote",
      period: "2021 - 2022",
      type: "Full-time",
      description:
        "Developed MVP for B2B SaaS platform from concept to production. Collaborated with design team to create intuitive user experiences.",
      achievements: [
        "Built complete platform MVP in 8 months",
        "Integrated payment processing and subscription management",
        "Achieved 99.9% uptime through robust error handling",
        "Implemented real-time features using WebSocket technology",
      ],
      technologies: [
        "Vue.js",
        "Express.js",
        "MongoDB",
        "Stripe API",
        "Socket.io",
      ],
      current: false,
    },
    {
      id: 3,
      role: "Frontend Developer",
      company: "Digital Agency Pro",
      companyLogo: "🎨",
      location: "Remote",
      period: "2019 - 2021",
      type: "Full-time",
      description:
        "Created responsive websites and web applications for diverse clients. Focused on performance optimization and accessibility standards.",
      achievements: [
        "Delivered 25+ client projects on time and within budget",
        "Improved average page load speeds by 50%",
        "Achieved WCAG 2.1 AA compliance for all projects",
        "Mentored 3 junior developers in modern frontend practices",
      ],
      technologies: ["React", "JavaScript", "SASS", "Webpack", "Figma"],
      current: false,
    },
    {
      id: 4,
      role: "Junior Web Developer",
      company: "Code Bootcamp Graduate",
      companyLogo: "🎓",
      location: "Addis Ababa, Ethiopia",
      period: "2018 - 2019",
      type: "Apprenticeship",
      description:
        "Intensive full-stack development program with hands-on project experience. Built several web applications using modern technologies.",
      achievements: [
        "Completed 1000+ hours of coding bootcamp",
        "Built 5 full-stack applications from scratch",
        "Graduated top 10% of cohort",
        "Received mentorship from industry professionals",
      ],
      technologies: ["JavaScript", "HTML/CSS", "Node.js", "MySQL", "Git"],
      current: false,
    },
  ];

  return (
    <section id="experience" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My professional journey and the impact I've made at each
            organization.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent opacity-50" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative flex gap-8 group">
                {/* Timeline Dot */}
                <div className="relative flex-shrink-0">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl glass-card group-hover:scale-110 transition-all duration-300 ${
                      exp.current ? "animate-pulse-glow" : ""
                    }`}
                  >
                    {exp.companyLogo}
                  </div>
                  {exp.current && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-success rounded-full flex items-center justify-center">
                      <TrendingUp className="w-3 h-3 text-success-foreground" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 glass-card p-8 rounded-2xl group-hover:scale-[1.02] transition-all duration-500">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-1">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-lg font-semibold mb-2">
                        <Briefcase className="w-5 h-5 text-secondary" />
                        {exp.company}
                        {exp.current && (
                          <span className="px-2 py-1 bg-success/20 text-success text-xs rounded-full font-medium">
                            Current
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col lg:text-right space-y-1 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1 lg:justify-end">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1 lg:justify-end">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Key Achievements */}
                  <div className="mb-6">
                    <h4 className="flex items-center gap-2 font-semibold mb-3">
                      <Award className="w-4 h-4 text-accent" />
                      Key Achievements
                    </h4>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Download CV Button */}
        <div className="text-center mt-16">
          <button className="hero-button">Download Full Resume</button>
        </div>
      </div>
    </section>
  );
};

export default Experience;
