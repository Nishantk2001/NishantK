import { Download, ExternalLink } from "lucide-react";
import NishantKumar from "../assets/Nishantkumar.jpg";

const AboutSection = () => {
  const skills = [
    "React",
    "TypeScript",
    "JavaScript",
    "Next.js",
    "Tailwind CSS",
    "Figma",
    "Adobe XD",
    "UX Strategy",
    "UI Design",
    "Responsive Design",
    "Node.js",
    "GraphQL",
    "MongoDB",
    "Git",
    "Agile",
  ];

  const stats = [
    { label: "Years Experience", value: "5+" },
    { label: "Projects Completed", value: "50+" },
    { label: "Happy Clients", value: "30+" },
    { label: "Countries Served", value: "10+" },
  ];

  return (
    <section id="about" className="section-padding bg-surface/30">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-surface p-1">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={NishantKumar}
                  alt="Nishant Kumar - Frontend Developer & UI/UX Designer"
                  className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent"></div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-float"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-float delay-300"></div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-gradient">
                About Me
              </h2>
              <p className="text-lg text-foreground-muted leading-relaxed">
                I'm a passionate Frontend Developer and UI/UX Designer with over
                5 years of experience creating exceptional digital experiences.
                I specialize in building responsive, accessible, and
                performance-optimized web applications.
              </p>
              <p className="text-foreground-subtle leading-relaxed">
                My journey began with a fascination for the intersection of
                technology and design. Today, I help businesses transform their
                ideas into engaging digital products that users love. I believe
                great design should be both beautiful and functional.
              </p>
            </div>

            {/* Skills */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">
                Skills & Technologies
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-surface border border-border rounded-lg text-sm font-medium text-foreground-muted hover:border-primary hover:text-primary transition-all duration-300 hover:scale-105"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-gradient mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-foreground-subtle">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/cv.pdf" download className="btn-primary group">
                <Download className="w-5 h-5 mr-2 transition-transform group-hover:translate-y-0.5" />
                Download CV
              </a>
              <a href="#projects" className="btn-secondary group">
                View Projects
                <ExternalLink className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
