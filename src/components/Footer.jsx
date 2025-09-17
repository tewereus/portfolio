import {
  Heart,
  ArrowUp,
  Github,
  Linkedin,
  Twitter,
  Mail,
  Code2,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/tewereus",
      color: "hover:text-primary",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com",
      color: "hover:text-secondary",
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com",
      color: "hover:text-accent",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:alex.johnson@email.com",
      color: "hover:text-primary",
    },
  ];

  const services = [
    "Web Development",
    "Mobile Apps",
    "UI/UX Design",
    "Consulting",
    "Code Review",
    "Technical Writing",
  ];

  return (
    <footer className="relative bg-background-secondary/50 backdrop-blur-lg">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center">
                <Code2 className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-bold gradient-text">
                Tewolde Gebreyesus
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              Passionate full-stack developer and designer creating beautiful,
              functional digital experiences. Always learning, always building.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-lg glass-card hover:scale-110 transition-all duration-300 ${social.color}`}
                  title={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <div className="w-1.5 h-1.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <div className="text-muted-foreground flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                    {service}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="glass-card p-8 rounded-2xl mt-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
              <p className="text-muted-foreground">
                Get notified about new projects, blog posts, and tech insights.
              </p>
            </div>

            <div className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-3 rounded-lg bg-input border border-glass-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 outline-none"
              />
              <button className="px-6 py-3 rounded-lg bg-primary hover:bg-primary-glow text-primary-foreground font-medium hover:scale-105 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-glass-border">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <span>© {currentYear} Alex Johnson. Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>and lots of coffee ☕</span>
            </div>

            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-8 right-8 p-3 rounded-full glass-card hover:scale-110 transition-all duration-300 group animate-bounce"
        title="Back to top"
      >
        <ArrowUp className="w-5 h-5 group-hover:text-primary transition-colors" />
      </button>
    </footer>
  );
};

export default Footer;
