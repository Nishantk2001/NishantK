import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Tag, Share2, User } from "lucide-react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock blog data - in a real app, this would come from an API or database
  const blogPosts = [
    {
      id: "1",
      title: "The Future of Web Development: Trends to Watch in 2024",
      excerpt:
        "Exploring the latest trends in web development including AI integration, WebAssembly, and the evolution of frontend frameworks.",
      content: `
        <p>The web development landscape is constantly evolving, and 2024 promises to bring exciting new trends and technologies that will shape how we build and interact with web applications.</p>

        <h2>AI Integration in Web Development</h2>
        <p>Artificial Intelligence is no longer just a buzzword—it's becoming an integral part of modern web development. From AI-powered code completion tools like GitHub Copilot to intelligent chatbots and personalized user experiences, AI is revolutionizing how developers work and how users interact with web applications.</p>

        <h3>Key AI Applications:</h3>
        <ul>
          <li>Automated code generation and debugging</li>
          <li>Intelligent content personalization</li>
          <li>Advanced search and recommendation systems</li>
          <li>Natural language processing interfaces</li>
        </ul>

        <h2>WebAssembly (WASM) Goes Mainstream</h2>
        <p>WebAssembly continues to gain traction as a way to run high-performance applications in the browser. We're seeing more complex applications, including video editors, image processors, and even games, running at near-native speeds in web browsers.</p>

        <h2>The Evolution of Frontend Frameworks</h2>
        <p>React, Vue, and Angular continue to evolve, but new players are entering the scene. Frameworks like Svelte, Solid, and Qwik are pushing the boundaries of what's possible in terms of performance and developer experience.</p>

        <h3>What to Expect:</h3>
        <ul>
          <li>Better performance optimization</li>
          <li>Improved developer experience</li>
          <li>Enhanced component composition patterns</li>
          <li>Better TypeScript integration</li>
        </ul>

        <h2>Progressive Web Apps (PWAs) 2.0</h2>
        <p>PWAs are getting more powerful with new capabilities like background sync, push notifications, and offline functionality becoming more sophisticated. The line between web and native apps continues to blur.</p>

        <h2>Conclusion</h2>
        <p>The future of web development is bright and full of possibilities. As developers, staying up-to-date with these trends will be crucial for building the next generation of web applications that are fast, accessible, and user-friendly.</p>
      `,
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=600&fit=crop",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Web Development",
      tags: ["React", "AI", "WebAssembly", "Trends"],
      author: {
        name: "Alex Johnson",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
        bio: "Senior Frontend Developer with 8+ years of experience in React, TypeScript, and modern web technologies.",
      },
    },
    {
      id: "2",
      title: "Mastering CSS Grid: Advanced Layouts Made Simple",
      excerpt:
        "Deep dive into CSS Grid properties and techniques for creating complex, responsive layouts with ease.",
      content: `
        <p>CSS Grid has revolutionized how we approach layout design on the web. Unlike flexbox, which is primarily one-dimensional, CSS Grid allows us to create complex two-dimensional layouts with ease.</p>

        <h2>Understanding Grid Fundamentals</h2>
        <p>Before diving into advanced techniques, let's review the core concepts of CSS Grid:</p>

        <h3>Grid Container Properties</h3>
        <ul>
          <li><code>display: grid</code> - Defines a grid container</li>
          <li><code>grid-template-columns</code> - Defines column sizes</li>
          <li><code>grid-template-rows</code> - Defines row sizes</li>
          <li><code>gap</code> - Controls spacing between grid items</li>
        </ul>

        <h2>Advanced Grid Techniques</h2>
        
        <h3>1. Grid Areas and Template Areas</h3>
        <p>One of the most powerful features of CSS Grid is the ability to name grid areas and create visual layout templates.</p>

        <h3>2. Implicit vs Explicit Grids</h3>
        <p>Understanding when and how the browser creates implicit grid tracks is crucial for mastering grid layouts.</p>

        <h3>3. Subgrid (Where Supported)</h3>
        <p>Subgrid allows nested grids to participate in the sizing of their parent grid, creating more cohesive layouts.</p>

        <h2>Real-World Examples</h2>
        
        <h3>Magazine Layout</h3>
        <p>Creating a complex magazine-style layout with varying column spans and image placements.</p>

        <h3>Dashboard Grid</h3>
        <p>Building responsive dashboard layouts that adapt to different screen sizes while maintaining visual hierarchy.</p>

        <h2>Best Practices</h2>
        <ul>
          <li>Use semantic grid area names</li>
          <li>Consider accessibility when designing grid layouts</li>
          <li>Test layouts across different screen sizes</li>
          <li>Combine grid with flexbox for optimal results</li>
        </ul>

        <h2>Conclusion</h2>
        <p>CSS Grid is a powerful tool that, when mastered, can significantly improve both your development workflow and the user experience of your websites. Practice these techniques and experiment with different layouts to fully harness the power of CSS Grid.</p>
      `,
      image:
        "https://images.unsplash.com/photo-1545670723-196ed0954986?w=1200&h=600&fit=crop",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "CSS",
      tags: ["CSS", "Grid", "Layout", "Responsive"],
      author: {
        name: "Alex Johnson",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
        bio: "Senior Frontend Developer with 8+ years of experience in React, TypeScript, and modern web technologies.",
      },
    },
  ];

  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <div className="section-padding">
          <div className="section-container text-center">
            <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
            <p className="text-foreground-muted mb-8">
              The blog post you're looking for doesn't exist.
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
        <div className="section-container max-w-4xl">
          {/* Back Button */}
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-foreground-muted hover:text-primary transition-colors duration-300 mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </button>

          {/* Category */}
          <span className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium mb-4">
            {post.category}
          </span>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
            {post.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-foreground-subtle mb-8">
            <div className="flex items-center gap-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-medium text-foreground">
                  {post.author.name}
                </p>
              </div>
            </div>
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
            <button className="flex items-center gap-1 text-primary hover:text-primary-hover transition-colors">
              <Share2 className="w-4 h-4" />
              <span>Share</span>
            </button>
          </div>

          {/* Hero Image */}
          <div className="relative rounded-2xl overflow-hidden mb-12">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-[50vh] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-padding">
        <div className="section-container max-w-4xl">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <article className="lg:col-span-3">
              <div
                className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-foreground-muted prose-li:text-foreground-muted prose-code:text-primary prose-code:bg-surface-elevated prose-code:px-2 prose-code:py-1 prose-code:rounded"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-border">
                <h3 className="text-lg font-semibold mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="flex items-center gap-1 px-3 py-1 bg-surface-elevated border border-border rounded-lg text-sm font-medium text-foreground-muted hover:text-primary transition-colors"
                    >
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-32 space-y-6">
                {/* Author Bio */}
                <div className="interactive-card p-6 rounded-2xl">
                  <h3 className="text-lg font-semibold mb-4">
                    About the Author
                  </h3>
                  <div className="flex items-start gap-3">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-12 h-12 rounded-full flex-shrink-0"
                    />
                    <div>
                      <h4 className="font-medium mb-1">{post.author.name}</h4>
                      <p className="text-sm text-foreground-muted">
                        {post.author.bio}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Share */}
                <div className="interactive-card p-6 rounded-2xl">
                  <h3 className="text-lg font-semibold mb-4">Share Article</h3>
                  <div className="space-y-2">
                    <button className="w-full text-left px-3 py-2 text-sm text-foreground-muted hover:text-primary hover:bg-surface-elevated rounded-lg transition-colors">
                      Share on Twitter
                    </button>
                    <button className="w-full text-left px-3 py-2 text-sm text-foreground-muted hover:text-primary hover:bg-surface-elevated rounded-lg transition-colors">
                      Share on LinkedIn
                    </button>
                    <button className="w-full text-left px-3 py-2 text-sm text-foreground-muted hover:text-primary hover:bg-surface-elevated rounded-lg transition-colors">
                      Copy Link
                    </button>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPost;
