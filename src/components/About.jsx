import profileImage from "../assets/profile-image.jpg";
import { Code2, Palette, Rocket, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description:
        "Writing maintainable, scalable code that stands the test of time.",
    },
    {
      icon: Palette,
      title: "Design Thinking",
      description:
        "Crafting user experiences that are both beautiful and functional.",
    },
    {
      icon: Rocket,
      title: "Innovation",
      description: "Always exploring new technologies and creative solutions.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "Building strong relationships with clients and team members.",
    },
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate developer with a love for creating digital experiences
            that make a difference.
          </p>
        </div>

        <div className="grid  gap-16 items-center">
          {/* Profile Image */}
          {/* <div className="relative"> */}
          {/* <div className="glass-card p-8 rounded-3xl">
              <img
                src={profileImage}
                alt="Profile"
                className="w-full rounded-2xl"
              />
            </div> */}

          {/* Decorative Elements */}
          {/* <div
              className="absolute -top-4 -left-4 w-20 h-20 rounded-full animate-pulse-glow opacity-50"
              style={{ background: "var(--gradient-secondary)" }}
            ></div>
            <div
              className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full animate-pulse opacity-60"
              style={{ background: "var(--gradient-accent)" }}
            ></div> */}
          {/* </div> */}

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Hello! I'm Tewolde, a passionate full-stack developer and
                designer based in Ethiopia. With over 5 years of experience in
                web development, I specialize in creating digital experiences
                that are not only visually stunning but also highly functional.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                My journey in tech started with a curiosity about how things
                work on the web. Today, I help businesses and startups bring
                their ideas to life through modern web technologies, thoughtful
                design, and clean, maintainable code.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                When I'm not coding, you can find me exploring new design
                trends, contributing to open-source projects, or enjoying the
                great outdoors with my camera in hand.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="glass-card p-4 sm:p-6 rounded-xl group hover:scale-105 transition-all duration-300"
                >
                  <item.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
