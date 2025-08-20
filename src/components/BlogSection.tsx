import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { Link } from "react-router-dom";

const BlogSection = () => {
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
    // {
    //   id: 4,
    //   title: "TypeScript Tips for Better Code Quality",
    //   excerpt:
    //     "Advanced TypeScript techniques and patterns that will make your code more maintainable and bug-free.",
    //   image:
    //     "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?w=600&h=400&fit=crop",
    //   date: "2023-12-28",
    //   readTime: "7 min read",
    //   category: "TypeScript",
    //   tags: ["TypeScript", "JavaScript", "Best Practices"],
    //   featured: false,
    // },
  ];

  return (
    <section id="blog" className="section-padding bg-surface/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Latest Blog Posts
          </h2>
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
            Sharing insights about web development, design trends, and
            technology
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Featured Post */}
          <div className="lg:col-span-2">
            {blogPosts
              .filter((post) => post.featured)
              .map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.id}`}
                  className="group interactive-card rounded-2xl overflow-hidden block"
                >
                  {/* Featured Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent"></div>

                    {/* Featured Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-background text-xs font-bold px-3 py-1 rounded-full">
                        Featured
                      </span>
                    </div>

                    {/* Category */}
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-surface/90 backdrop-blur-sm text-primary px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    {/* Meta */}
                    <div className="flex items-center gap-4 text-sm text-foreground-subtle mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>
                          {new Date(post.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                      {post.title}
                    </h3>

                    <p className="text-foreground-subtle mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="flex items-center gap-1 px-3 py-1 bg-surface-elevated border border-border rounded-lg text-xs font-medium text-foreground-muted"
                        >
                          <Tag className="w-3 h-3" />
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Read More */}
                    <span className="inline-flex items-center gap-2 text-primary hover:text-primary-hover font-medium transition-colors duration-300 group/link">
                      Read Full Article
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
          </div>

          {/* Recent Posts Sidebar */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-foreground mb-6">
              Recent Posts
            </h3>

            {blogPosts
              .filter((post) => !post.featured)
              .map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.id}`}
                  className="group interactive-card rounded-xl overflow-hidden block"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent"></div>

                    {/* Category */}
                    <div className="absolute bottom-2 left-2">
                      <span className="bg-surface/90 backdrop-blur-sm text-primary px-2 py-1 rounded-md text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    {/* Meta */}
                    <div className="flex items-center gap-3 text-xs text-foreground-subtle mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>
                          {new Date(post.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h4>

                    <p className="text-sm text-foreground-subtle mb-3 line-clamp-2">
                      {post.excerpt}
                    </p>

                    {/* Read More */}
                    <span className="inline-flex items-center gap-1 text-xs text-primary hover:text-primary-hover font-medium transition-colors duration-300 group/link">
                      Read More
                      <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover/link:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              ))}

            {/* View All Posts */}
            <div className="pt-4">
              <Link to="/blog" className="btn-secondary w-full justify-center">
                View All Posts
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
