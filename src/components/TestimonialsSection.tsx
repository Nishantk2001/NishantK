import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sahil Dubey",
      position: "AWS Solution Architect",
      company: "TechTweek Solutions",
      avatar:
        "https://images.unsplash.com/photo-1603415526960-f7e0328f2f74?w=100&h=100&fit=crop&crop=face",
      content:
        "Working with Nishant has been a great experience. He’s quick to grasp frontend concepts and always eager to improve. His clean UI work made our integration process smoother and more efficient.",
      rating: 5,
      project: "API Integration Dashboard",
    },
    {
      id: 2,
      name: "Ankita Sharma",
      position: "UI/UX Designer",
      company: "Creative Spark Studio",
      avatar:
        "https://images.unsplash.com/photo-1589987607627-816fef3a3ec9?w=100&h=100&fit=crop&crop=face",
      content:
        "Nishant brought my Figma designs to life with pixel-perfect implementation. His attention to responsive design and animations really elevated the project. Great team player with strong frontend skills.",
      rating: 5,
      project: "Landing Page for Marketing Campaign",
    },
    {
      id: 3,
      name: "Jasmeet Singh",
      position: "Full Stack Developer",
      company: "CodeCraft Labs",
      avatar:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=100&h=100&fit=crop&crop=face",
      content:
        "Nishant shows a lot of promise as a frontend developer. He’s always willing to take feedback positively and implements changes quickly. His work on our internal tools improved usability and speed.",
      rating: 5,
      project: "Internal Admin Panel UI",
    },
    {
      id: 4,
      name: "Disha Rabbashetty",
      position: "Frontend Team Lead",
      company: "NextGen Webworks",
      avatar:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop&crop=face",
      content:
        "Nishant has grown immensely as a frontend developer under my mentorship. He consistently delivers clean, maintainable code and contributes great ideas during standups. His work ethic and curiosity make him a valuable asset to any frontend team.",
      rating: 5,
      project: "Client Portfolio Website Revamp",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="section-padding">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Client Testimonials
          </h2>
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
            What clients say about working with me
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Testimonial Card */}
          <div className="relative">
            <div className="interactive-card p-8 md:p-12 rounded-3xl text-center">
              {/* Quote Icon */}
              <div className="flex justify-center mb-6">
                <Quote className="w-12 h-12 text-primary/50" />
              </div>

              {/* Rating */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-lg md:text-xl text-foreground-muted leading-relaxed mb-8 max-w-3xl mx-auto">
                "{currentTestimonial.content}"
              </blockquote>

              {/* Project */}
              <div className="mb-6">
                <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                  {currentTestimonial.project}
                </span>
              </div>

              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <img
                  src={currentTestimonial.avatar}
                  alt={currentTestimonial.name}
                  className="w-16 h-16 rounded-full border-2 border-border object-cover"
                />
                <div className="text-left">
                  <h4 className="font-semibold text-foreground text-lg">
                    {currentTestimonial.name}
                  </h4>
                  <p className="text-foreground-subtle">
                    {currentTestimonial.position}
                  </p>
                  <p className="text-primary text-sm">
                    {currentTestimonial.company}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <button
                onClick={prevTestimonial}
                className="btn-secondary p-3 rounded-full hover:scale-110 transition-transform duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Dots Indicator */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-primary scale-110"
                        : "bg-border hover:bg-primary/50"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="btn-secondary p-3 rounded-full hover:scale-110 transition-transform duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Thumbnail Testimonials */}
          <div className="grid md:grid-cols-4 gap-4 mt-12">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                onClick={() => setCurrentIndex(index)}
                className={`p-4 rounded-2xl text-left transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary/10 border border-primary scale-105"
                    : "bg-surface hover:bg-surface-elevated border border-border"
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h5 className="font-medium text-foreground text-sm">
                      {testimonial.name}
                    </h5>
                    <p className="text-xs text-foreground-subtle">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
                <p className="text-xs text-foreground-subtle line-clamp-3">
                  {testimonial.content.substring(0, 100)}...
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
