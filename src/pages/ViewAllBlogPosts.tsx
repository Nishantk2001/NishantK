import { Calendar, Clock, ArrowRight, Tag, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const ViewAllBlogPosts = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Web Development: Trends to Watch in 2024",
      excerpt:
        "Exploring the latest trends in web development including AI integration, WebAssembly, and the evolution of frontend frameworks.",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Web Development",
      tags: ["React", "AI", "WebAssembly", "Trends"],
      featured: true,
    },
    {
      id: 2,
      title: "Mastering CSS Grid: Advanced Layouts Made Simple",
      excerpt:
        "Deep dive into CSS Grid properties and techniques for creating complex, responsive layouts with ease.",
      image:
        "https://images.unsplash.com/photo-1545670723-196ed0954986?w=600&h=400&fit=crop",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "CSS",
      tags: ["CSS", "Grid", "Layout", "Responsive"],
      featured: false,
    },
    {
      id: 3,
      title: "Building Accessible React Components",
      excerpt:
        "Best practices for creating inclusive user interfaces that work for everyone, with practical React examples.",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop",
      date: "2024-01-05",
      readTime: "10 min read",
      category: "Accessibility",
      tags: ["React", "Accessibility", "UX", "A11y"],
      featured: false,
    },
    {
      id: 4,
      title: "TypeScript Tips for Better Code Quality",
      excerpt:
        "Advanced TypeScript techniques and patterns that will make your code more maintainable and bug-free.",
      image:
        "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?w=600&h=400&fit=crop",
      date: "2023-12-28",
      readTime: "7 min read",
      category: "TypeScript",
      tags: ["TypeScript", "JavaScript", "Best Practices"],
      featured: false,
    },
    {
      id: 5,
      title: "Modern React Patterns and Best Practices",
      excerpt:
        "Discover the latest React patterns, hooks usage, and architectural decisions for scalable applications.",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop",
      date: "2023-12-20",
      readTime: "9 min read",
      category: "React",
      tags: ["React", "Hooks", "Patterns", "Architecture"],
      featured: false,
    },
    {
      id: 6,
      title: "Node.js Performance Optimization Techniques",
      excerpt:
        "Learn how to optimize your Node.js applications for better performance, scalability, and resource management.",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
      date: "2023-12-15",
      readTime: "12 min read",
      category: "Backend",
      tags: ["Node.js", "Performance", "Optimization", "Backend"],
      featured: false,
    },
  ];

  const categories = [
    "All",
    ...new Set(blogPosts.map((post) => post.category)),
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-surface/30 border-b border-border">
        <div className="section-container py-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-hover mb-6 transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
              All Blog Posts
            </h1>
            <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
              Deep insights into web development, design trends, and modern
              technology
            </p>
          </div>
        </div>
      </div>

      {/* Blog Posts */}
      <section className="section-padding">
        <div className="section-container">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 bg-surface-elevated border border-border rounded-lg text-sm font-medium text-foreground-muted hover:text-primary hover:border-primary transition-colors duration-300"
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="group interactive-card rounded-2xl overflow-hidden block"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent"></div>

                  {/* Featured Badge */}
                  {post.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-background text-xs font-bold px-3 py-1 rounded-full">
                        Featured
                      </span>
                    </div>
                  )}

                  {/* Category */}
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-surface/90 backdrop-blur-sm text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Meta */}
                  <div className="flex items-center gap-4 text-sm text-foreground-subtle mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-foreground-subtle mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="flex items-center gap-1 px-2 py-1 bg-surface-elevated border border-border rounded-md text-xs font-medium text-foreground-muted"
                      >
                        <Tag className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                    {post.tags.length > 3 && (
                      <span className="px-2 py-1 text-xs text-foreground-subtle">
                        +{post.tags.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Read More */}
                  <span className="inline-flex items-center gap-2 text-primary hover:text-primary-hover font-medium transition-colors duration-300 group/link">
                    Read Article
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ViewAllBlogPosts;
