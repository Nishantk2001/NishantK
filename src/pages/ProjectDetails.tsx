import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  User,
  Tag,
} from "lucide-react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock project data - in a real app, this would come from an API or database
  const projects = [
    {
      id: "1",
      title: "E-Commerce Platform",
      description:
        "Modern e-commerce platform with advanced filtering, real-time inventory management, and seamless checkout experience.",
      fullDescription:
        "This comprehensive e-commerce platform was built to handle high-traffic retail operations with a focus on user experience and performance. The platform features advanced product filtering, real-time inventory tracking, secure payment processing, and an intuitive admin dashboard for managing products, orders, and analytics.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=500&fit=crop",
      ],
      tags: ["React", "TypeScript", "Node.js", "MongoDB", "Stripe"],
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/example",
      category: "Web Application",
      client: "RetailCorp Inc.",
      duration: "4 months",
      team: "Frontend Developer, UI/UX Designer",
      challenges: [
        "Implementing real-time inventory synchronization across multiple warehouses",
        "Optimizing performance for large product catalogs",
        "Creating a seamless checkout flow with multiple payment options",
      ],
      solutions: [
        "Built a robust WebSocket system for real-time updates",
        "Implemented virtual scrolling and lazy loading for performance",
        "Integrated multiple payment gateways with fallback options",
      ],
      technologies: {
        frontend: ["React", "TypeScript", "Tailwind CSS", "React Query"],
        backend: ["Node.js", "Express", "MongoDB", "Redis"],
        tools: ["Figma", "Git", "Docker", "AWS"],
      },
    },
    {
      id: "2",
      title: "Task Management App",
      description:
        "Collaborative task management application with real-time updates, team collaboration, and advanced analytics.",
      fullDescription:
        "A comprehensive task management solution designed for modern teams. Features include real-time collaboration, advanced project analytics, time tracking, and seamless integration with popular productivity tools.",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=600&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?w=800&h=500&fit=crop",
      ],
      tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "WebSocket"],
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/example",
      category: "Productivity App",
      client: "TechStartup LLC",
      duration: "3 months",
      team: "Full Stack Developer",
      challenges: [
        "Building real-time collaboration features",
        "Designing intuitive project management workflows",
        "Implementing advanced analytics and reporting",
      ],
      solutions: [
        "Used WebSocket for real-time updates and notifications",
        "Created drag-and-drop interfaces with smooth animations",
        "Built custom analytics dashboard with interactive charts",
      ],
      technologies: {
        frontend: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
        backend: ["Next.js API", "Prisma", "PostgreSQL", "WebSocket"],
        tools: ["Figma", "Vercel", "Supabase", "GitHub"],
      },
    },
  ];

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <div className="section-padding">
          <div className="section-container text-center">
            <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
            <p className="text-foreground-muted mb-8">
              The project you're looking for doesn't exist.
            </p>
            <button onClick={() => navigate("/")} className="btn-primary">
              Back to Home
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="section-padding pt-32">
        <div className="section-container">
          {/* Back Button */}
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-foreground-muted hover:text-primary transition-colors duration-300 mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </button>

          {/* Project Header */}
          <div className="mb-12">
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
                {project.category}
              </span>
              <div className="flex items-center gap-2 text-foreground-subtle">
                <User className="w-4 h-4" />
                <span>{project.client}</span>
              </div>
              <div className="flex items-center gap-2 text-foreground-subtle">
                <Calendar className="w-4 h-4" />
                <span>{project.duration}</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
              {project.title}
            </h1>

            <p className="text-xl text-foreground-muted max-w-3xl mb-8">
              {project.fullDescription}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                View Code
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative rounded-2xl overflow-hidden mb-16">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-[60vh] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Project Gallery */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Project Gallery</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.gallery.map((image, index) => (
                    <div key={index} className="rounded-xl overflow-hidden">
                      <img
                        src={image}
                        alt={`${project.title} screenshot ${index + 1}`}
                        className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Challenges & Solutions */}
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Challenges</h3>
                  <ul className="space-y-3">
                    {project.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <span className="text-foreground-muted">
                          {challenge}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Solutions</h3>
                  <ul className="space-y-3">
                    {project.solutions.map((solution, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <span className="text-foreground-muted">
                          {solution}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Project Info */}
              <div className="interactive-card p-6 rounded-2xl">
                <h3 className="text-xl font-bold mb-4">Project Details</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-1">Client</h4>
                    <p className="text-foreground-muted">{project.client}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Duration</h4>
                    <p className="text-foreground-muted">{project.duration}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Role</h4>
                    <p className="text-foreground-muted">{project.team}</p>
                  </div>
                </div>
              </div>

              {/* Technologies Used */}
              <div className="interactive-card p-6 rounded-2xl">
                <h3 className="text-xl font-bold mb-4">Technologies Used</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Frontend</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.frontend.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-surface-elevated border border-border rounded-lg text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Backend</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.backend.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-surface-elevated border border-border rounded-lg text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-3 py-1 bg-surface-elevated border border-border rounded-lg text-xs font-medium"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="interactive-card p-6 rounded-2xl">
                <h3 className="text-xl font-bold mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="flex items-center gap-1 px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium"
                    >
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetails;
