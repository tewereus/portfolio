import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "../assets/hero-image.jpg";

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-20"
    >
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                Hi, I'm{" "}
                <span className="gradient-text">Tewolde Gebreyesus</span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-muted-foreground font-light">
                Full Stack Developer & UI/UX Designer
              </p>
            </div>

            <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
              I create beautiful, functional, and user-centered digital
              experiences that solve real-world problems with clean code and
              innovative design.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button onClick={scrollToProjects} className="hero-button">
                View My Work
              </button>
              <button className="px-8 py-4 rounded-full border border-glass-border hover:bg-glass-bg/50 transition-all duration-300 font-semibold">
                Download CV
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 justify-center lg:justify-start pt-4">
              <a
                href="https://github.com/tewereus"
                target="_blank"
                className="p-3 rounded-full glass-card hover:scale-110 transition-all duration-300"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="p-3 rounded-full glass-card hover:scale-110 transition-all duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="p-3 rounded-full glass-card hover:scale-110 transition-all duration-300"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative rounded-3xl overflow-hidden animate-float">
              <img
                src={heroImage}
                alt="Professional workspace"
                className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>

            {/* Floating Elements */}
            <div
              className="absolute -top-6 -right-6 w-24 h-24 rounded-full animate-pulse-glow opacity-60"
              style={{ background: "var(--gradient-primary)" }}
            ></div>
            <div
              className="absolute -bottom-6 -left-6 w-16 h-16 rounded-full animate-pulse-glow opacity-40 animate-pulse"
              style={{ background: "var(--gradient-accent)" }}
            ></div>
          </div>
        </div>

        {/* Scroll Indicator */}
        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
