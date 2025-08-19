import { useState, useEffect } from "react";
import { ArrowRight, Mouse, ChevronDown } from "lucide-react";

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Frontend Developer & UI/UX Designer";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-32 right-16 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float delay-300"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 to-transparent rounded-full blur-3xl animate-glow"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="text-center space-y-8">
          {/* Hero Content */}
          <div className="space-y-6 animate-slide-up">
            <div className="space-y-2">
              <p className="text-lg text-foreground-muted animate-fade-in delay-200">
                Hello, I'm
              </p>
              <h1 className="text-6xl md:text-8xl font-bold text-glow animate-fade-in delay-300">
                <span className="text-gradient">Nishant Kumar</span>
              </h1>
            </div>

            <div className="h-20 flex items-center justify-center">
              <h2 className="text-2xl md:text-4xl font-semibold text-foreground-muted min-h-[1.2em] animate-fade-in delay-500">
                <span className="border-r-2 border-primary animate-typing overflow-hidden whitespace-nowrap">
                  {displayText}
                </span>
              </h2>
            </div>

            <p className="text-lg text-foreground-subtle max-w-2xl mx-auto leading-relaxed animate-fade-in delay-700">
              I craft exceptional digital experiences through innovative
              frontend development and user-centered design. Specializing in
              React, TypeScript, and modern web technologies.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in delay-500">
            <a href="#projects" className="btn-primary group">
              View My Work
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#contact" className="btn-secondary">
              Get In Touch
            </a>
          </div>

          {/* Tech Stack Preview */}
          <div className="pt-12 animate-fade-in delay-700">
            <p className="text-sm text-foreground-subtle mb-4">
              Specialized in
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                "React",
                "TypeScript",
                "Tailwind CSS",
                "Figma",
                "Next.js",
                "Node.js",
              ].map((tech, index) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-surface border border-border rounded-full text-sm font-medium text-foreground-muted hover:border-primary hover:text-primary transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${800 + index * 100}ms` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center text-foreground-subtle">
            <Mouse className="w-6 h-6 mb-2" />
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
