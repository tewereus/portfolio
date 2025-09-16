import { ExternalLink, Github, Code2, Smartphone, Globe } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A modern e-commerce solution with React, Node.js, and MongoDB. Features include real-time inventory, payment integration, and admin dashboard.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      category: "Full Stack",
      liveUrl: "#",
      githubUrl: "#",
      icon: Globe,
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "Collaborative project management tool with real-time updates, file sharing, and team communication features.",
      image: "/api/placeholder/600/400",
      technologies: ["Vue.js", "Express", "Socket.io", "PostgreSQL", "AWS"],
      category: "Web App",
      liveUrl: "#",
      githubUrl: "#",
      icon: Code2,
    },
    {
      id: 3,
      title: "Mobile Fitness Tracker",
      description:
        "Cross-platform mobile app for fitness tracking with workout plans, progress analytics, and social features.",
      image: "/api/placeholder/600/400",
      technologies: ["React Native", "Firebase", "Redux", "Chart.js"],
      category: "Mobile",
      liveUrl: "#",
      githubUrl: "#",
      icon: Smartphone,
    },
    {
      id: 4,
      title: "AI Content Generator",
      description:
        "SaaS platform that uses AI to generate marketing content, blog posts, and social media captions for businesses.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "OpenAI API", "Prisma", "Vercel", "TypeScript"],
      category: "AI/ML",
      liveUrl: "#",
      githubUrl: "#",
      icon: Code2,
    },
    {
      id: 5,
      title: "Real Estate Platform",
      description:
        "Comprehensive platform for property listings with advanced search, virtual tours, and mortgage calculator.",
      image: "/api/placeholder/600/400",
      technologies: ["Angular", "Django", "PostgreSQL", "Google Maps API"],
      category: "Web Platform",
      liveUrl: "#",
      githubUrl: "#",
      icon: Globe,
    },
    {
      id: 6,
      title: "Blockchain Wallet",
      description:
        "Secure cryptocurrency wallet with multi-chain support, DeFi integration, and portfolio tracking.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Web3.js", "Solidity", "MetaMask", "Chart.js"],
      category: "Blockchain",
      liveUrl: "#",
      githubUrl: "#",
      icon: Code2,
    },
  ];

  const categories = [
    "All",
    "Full Stack",
    "Web App",
    "Mobile",
    "AI/ML",
    "Web Platform",
    "Blockchain",
  ];

  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work, from web applications to mobile apps
            and everything in between.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-3 rounded-full glass-card hover:bg-primary/20 transition-all duration-300 text-sm font-medium"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="project-card p-6">
              {/* Project Image */}
              <div className="relative mb-6 rounded-xl overflow-hidden">
                <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center rounded-xl">
                  <project.icon className="w-16 h-16 text-primary/60" />
                </div>

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.liveUrl}
                    className="p-3 rounded-full bg-primary hover:scale-110 transition-all duration-300"
                  >
                    <ExternalLink className="w-5 h-5 text-primary-foreground" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="p-3 rounded-full bg-secondary hover:scale-110 transition-all duration-300"
                  >
                    <Github className="w-5 h-5 text-secondary-foreground" />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs px-3 py-1 rounded-full bg-primary/20 text-primary font-medium">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded bg-glass-bg text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-xs px-2 py-1 rounded bg-glass-bg text-muted-foreground">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="hero-button">View All Projects</button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
