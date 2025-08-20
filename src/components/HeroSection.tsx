import { useState, useEffect } from "react";
import { ArrowRight, Mouse, ChevronDown } from "lucide-react";
import heroBackground from "../assets/homebg.jpg";

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
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-background/80"></div>
      </div>
      {/* Code-related floating elements */}
      <div className="absolute top-32 right-32 text-primary/30 text-2xl font-mono animate-float-slow delay-200">
        {"{404}"}
      </div>
      <div className="absolute bottom-48 left-32 text-primary/25 text-lg font-mono animate-pulse-slow">
        {"</>"}
      </div>
      <div className="absolute top-64 left-64 text-primary/20 text-sm font-mono animate-rotate-slow">
        console.log
      </div>
      <div className="absolute bottom-64 right-48 text-primary/15 text-xs font-mono animate-slide-horizontal">
        const
      </div>
      <div className="absolute top-48 left-48 text-primary/30 text-xl animate-float delay-600">
        ⚡
      </div>
      <div className="absolute bottom-32 right-64 text-primary/25 text-lg animate-bounce-slow">
        🎨
      </div>

      {/* UI/UX Design elements */}
      <div className="absolute top-24 right-24 w-8 h-8 border-2 border-primary/20 rounded animate-spin-slow"></div>
      <div className="absolute bottom-24 left-24 w-6 h-6 bg-primary/15 animate-morph"></div>
      <div className="absolute top-80 left-80 flex gap-1 animate-float delay-400">
        <div className="w-2 h-2 bg-primary/30 rounded-full"></div>
        <div className="w-2 h-2 bg-primary/25 rounded-full"></div>
        <div className="w-2 h-2 bg-primary/20 rounded-full"></div>
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
