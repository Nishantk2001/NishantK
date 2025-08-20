import { ExternalLink, Github, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "Modern e-commerce platform with advanced filtering, real-time inventory management, and seamless checkout experience.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tags: ["React", "TypeScript", "Node.js", "MongoDB", "Stripe"],
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/example",
      featured: true,
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "Collaborative task management application with real-time updates, team collaboration, and advanced analytics.",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "WebSocket"],
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/example",
      featured: true,
    },
    {
      id: 3,
      title: "Creative Portfolio",
      description:
        "Stunning portfolio website for a creative agency with smooth animations and interactive elements.",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      tags: ["React", "Three.js", "GSAP", "Tailwind CSS"],
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/example",
      featured: false,
    },
    {
      id: 4,
      title: "Health & Fitness Tracker",
      description:
        "Comprehensive fitness tracking app with workout planning, nutrition monitoring, and progress analytics.",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      tags: ["React Native", "TypeScript", "Firebase", "Chart.js"],
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/example",
      featured: false,
    },
    {
      id: 5,
      title: "Real Estate Platform",
      description:
        "Modern real estate platform with advanced search, virtual tours, and property management features.",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
      tags: ["Vue.js", "Nuxt.js", "Laravel", "MySQL", "Mapbox"],
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/example",
      featured: false,
    },
    {
      id: 6,
      title: "Educational Dashboard",
      description:
        "Interactive learning management system with course creation, student progress tracking, and analytics.",
      image:
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop",
      tags: ["Angular", "TypeScript", "Express.js", "MongoDB"],
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/example",
      featured: false,
    },
  ];

  return (
    <section id="projects" className="section-padding bg-surface/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
            Showcase of my latest work combining innovative design with
            cutting-edge technology
          </p>
        </div>

        <div className="grid-projects">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/project/${project.id}`}
              className={`group relative interactive-card rounded-2xl overflow-hidden block ${
                project.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-background text-xs font-bold px-3 py-1 rounded-full">
                      Featured
                    </span>
                  </div>
                )}

                {/* Overlay Actions */}
                <div className="absolute inset-0 bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <span className="btn-primary flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    View Details
                  </span>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary flex items-center gap-2"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-foreground-subtle mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-surface-elevated border border-border rounded-lg text-xs font-medium text-foreground-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex gap-4">
                  <span className="flex items-center gap-2 text-primary hover:text-primary-hover transition-colors duration-300">
                    <Eye className="w-4 h-4" />
                    <span className="text-sm font-medium">View Project</span>
                  </span>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-foreground-muted hover:text-primary transition-colors duration-300"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm font-medium">Source Code</span>
                  </a>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Projects */}
        <div className="text-center mt-12">
          <Link to="/projects" className="btn-secondary">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
