import {
  GraduationCap,
  Award,
  BookOpen,
  Star,
  Calendar,
  MapPin,
} from "lucide-react";

const Education = () => {
  const education = [
    // {
    //   id: 1,
    //   degree: "Master of Computer Science",
    //   school: "Stanford University",
    //   schoolLogo: "🎓",
    //   location: "Stanford, CA",
    //   period: "2016 - 2018",
    //   gpa: "3.9/4.0",
    //   description:
    //     "Specialized in Software Engineering and Human-Computer Interaction. Focused on web technologies, algorithms, and user experience design.",
    //   coursework: [
    //     "Advanced Algorithms & Data Structures",
    //     "Human-Computer Interaction",
    //     "Database Systems",
    //     "Software Engineering Principles",
    //     "Machine Learning Fundamentals",
    //     "Web Development Technologies",
    //   ],
    //   honors: [
    //     "Magna Cum Laude",
    //     "Dean's List (4 semesters)",
    //     "Research Assistant",
    //   ],
    //   type: "graduate",
    // },
    {
      id: 2,
      degree: "Bachelor of Science in Computer Science",
      school: "Saint Mary University",
      schoolLogo: "🐻",
      location: "Addis Ababa, Ethiopia",
      period: "2012 - 2016",
      gpa: "3.7/4.0",
      description:
        "Strong foundation in computer science fundamentals with emphasis on software development and mathematics.",
      coursework: [
        "Data Structures and Algorithms",
        "Operating Systems",
        "Computer Networks",
        "Software Engineering",
        "Discrete Mathematics",
        "Linear Algebra",
      ],
      honors: [
        "Cum Laude",
        "CS Department Honor Roll",
        "Hackathon Winner (2x)",
      ],
      type: "undergraduate",
    },
  ];

  const certifications = [
    // {
    //   id: 1,
    //   name: "AWS Certified Solutions Architect",
    //   issuer: "Amazon Web Services",
    //   logo: "☁️",
    //   date: "2023",
    //   credentialId: "AWS-ASA-2023-001",
    //   skills: [
    //     "Cloud Architecture",
    //     "AWS Services",
    //     "System Design",
    //     "Security",
    //   ],
    // },
    {
      id: 2,
      name: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      logo: "🌐",
      date: "2022",
      credentialId: "GCP-PD-2022-045",
      skills: ["GCP Services", "Kubernetes", "App Engine", "Cloud Functions"],
    },
    {
      id: 3,
      name: "Certified Kubernetes Administrator",
      issuer: "Cloud Native Computing Foundation",
      logo: "⚙️",
      date: "2022",
      credentialId: "CKA-2022-789",
      skills: ["Container Orchestration", "DevOps", "Cluster Management"],
    },
    {
      id: 4,
      name: "Meta React Developer Professional",
      issuer: "Meta (Facebook)",
      logo: "⚛️",
      date: "2021",
      credentialId: "META-RD-2021-156",
      skills: [
        "React",
        "JavaScript",
        "Frontend Development",
        "Component Design",
      ],
    },
  ];

  return (
    <section id="education" className="py-24 px-6 bg-background-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Academic foundation and continuous learning through professional
            certifications.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <GraduationCap className="text-primary" />
              Academic Background
            </h3>

            <div className="space-y-8">
              {education.map((edu) => (
                <div
                  key={edu.id}
                  className="glass-card p-8 rounded-2xl group hover:scale-[1.02] transition-all duration-500"
                >
                  <div className="flex items-start gap-6">
                    {/* School Logo */}
                    <div className="w-16 h-16 rounded-full glass-card flex items-center justify-center text-2xl group-hover:scale-110 transition-all duration-300">
                      {edu.schoolLogo}
                    </div>

                    {/* Education Details */}
                    <div className="flex-1">
                      <div className="mb-4">
                        <h4 className="text-xl font-bold text-primary mb-1">
                          {edu.degree}
                        </h4>
                        <p className="text-lg font-semibold mb-2">
                          {edu.school}
                        </p>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {edu.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {edu.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-500" />
                            GPA: {edu.gpa}
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {edu.description}
                      </p>

                      {/* Relevant Coursework */}
                      <div className="mb-6">
                        <h5 className="font-semibold mb-3 flex items-center gap-2">
                          <BookOpen className="w-4 h-4 text-secondary" />
                          Relevant Coursework
                        </h5>
                        <div className="grid grid-cols-2 gap-2">
                          {edu.coursework.map((course) => (
                            <div
                              key={course}
                              className="text-sm text-muted-foreground flex items-start gap-2"
                            >
                              <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0" />
                              {course}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Honors */}
                      <div>
                        <h5 className="font-semibold mb-3 flex items-center gap-2">
                          <Award className="w-4 h-4 text-accent" />
                          Honors & Achievements
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {edu.honors.map((honor) => (
                            <span
                              key={honor}
                              className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full font-medium"
                            >
                              {honor}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Award className="text-primary" />
              Professional Certifications
            </h3>

            <div className="space-y-6">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="glass-card p-6 rounded-xl group hover:scale-[1.02] transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    {/* Certification Logo */}
                    <div className="w-12 h-12 rounded-lg glass-card flex items-center justify-center text-lg group-hover:scale-110 transition-all duration-300">
                      {cert.logo}
                    </div>

                    {/* Certification Details */}
                    <div className="flex-1">
                      <h4 className="font-bold text-primary mb-1">
                        {cert.name}
                      </h4>
                      <p className="text-muted-foreground mb-2">
                        {cert.issuer}
                      </p>
                      <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                        <span>Issued: {cert.date}</span>
                        <span className="text-xs bg-glass-bg px-2 py-1 rounded">
                          ID: {cert.credentialId}
                        </span>
                      </div>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-1">
                        {cert.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 bg-primary/10 text-primary text-xs rounded font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Learning */}
            <div className="glass-card p-6 rounded-xl mt-8">
              <h4 className="font-bold mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" />
                Continuous Learning
              </h4>
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                I believe in continuous learning and staying up-to-date with the
                latest technologies and best practices in software development.
              </p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {[
                  "Online Courses (Coursera, Udemy)",
                  "Tech Conferences & Meetups",
                  "Open Source Contributions",
                  "Industry Publications",
                  "Coding Challenges",
                  "Side Projects",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-muted-foreground"
                  >
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {item}
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

export default Education;
