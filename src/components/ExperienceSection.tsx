import { Calendar, MapPin, Building2, GraduationCap } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      type: "work",
      title: "UI/UX Designer & Frontend Developer",
      company: "Kitlabs - AI Impowered Web Solutions",
      location: "Mohali, Punjab",
      period: "2025 - Present",
      description:
        "Designed and developed responsive web applications for startups and mid-size companies. Collaborated with cross-functional teams to deliver pixel-perfect designs.",
      skills: [
        "Figma",
        "React",
        "JavaScript",
        "CSS3",
        "Wordpress",
        "Wix Studio",
        "shopify",
        "Adobe Creative Suite",
      ],
    },
    {
      type: "work",
      title: "Junior Frontend Developer",
      company: "AlphaNet-Real world Solution",
      location: "Mohali, Punjab",
      period: "2023 - 2024",
      description:
        "Developed custom websites and landing pages. Gained expertise in modern frontend frameworks and responsive design principles.",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Vue.js",
        "React",
        "Redux",
        "UI/UX",
        "Bootstrap",
      ],
    },
    {
      type: "education",
      title: "Bachelor of Technology in Computer Science",
      company: "Rayat Bahra University",
      location: "Chandigarh, Punjab",
      period: "2022 - 2024",
      description:
        "Focused on web development, human-computer interaction, and software engineering. Graduated Magna Cum Laude.",
      skills: ["UI/UX", "Algorithms", "Data Engineering", "Database Design"],
    },
    {
      type: "education",
      title: "Diploma in Computer Engineering",
      company: "Govt. Millennium College",
      location: "Chamba, Himachal Pradesh",
      period: "2018 - 2021",
      description:
        "Focused on web development, human-computer interaction, and software engineering. Graduated Magna Cum Laude.",
      skills: [
        "Networking",
        "DSA Algorithms",
        "Software Engineering",
        "Database Design",
      ],
    },
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Experience & Education
          </h2>
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
            My professional journey combining technical expertise with creative
            design
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent transform md:-translate-x-0.5"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-start ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 border-4 border-background shadow-glow z-10"></div>

                {/* Content Card */}
                <div
                  className={`ml-20 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                  }`}
                >
                  <div className="interactive-card p-6 rounded-2xl">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3 mb-2">
                        {exp.type === "work" ? (
                          <Building2 className="w-6 h-6 text-primary" />
                        ) : (
                          <GraduationCap className="w-6 h-6 text-primary" />
                        )}
                        <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                          {exp.type === "work" ? "Experience" : "Education"}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {exp.title}
                    </h3>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-foreground-muted">
                        <Building2 className="w-4 h-4" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-foreground-subtle">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-foreground-subtle mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-surface-elevated border border-border rounded-lg text-xs font-medium text-foreground-muted hover:border-primary hover:text-primary transition-colors duration-300"
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
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
