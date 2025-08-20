import { ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const services = [
    "Frontend Development",
    "UI/UX Design",
    "React Development",
    "TypeScript",
    "Responsive Design",
    "Web Performance",
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-surface border-t border-border">
      <div className="section-container">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2 space-y-4">
              <h3 className="text-2xl font-bold text-gradient">Nishant.k</h3>
              <p className="text-foreground-muted leading-relaxed max-w-md">
                Frontend Developer & UI/UX Designer passionate about creating
                exceptional digital experiences through innovative design and
                clean code.
              </p>
              {/* <div className="flex items-center gap-2 text-sm text-foreground-subtle">
                <span>Made with</span>
                <Heart className="w-4 h-4 fill-red-500 text-red-500" />
                <span>using React & TypeScript</span>
              </div> */}
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">
                Quick Links
              </h4>
              <nav className="space-y-2">
                {quickLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="block text-foreground-muted hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Services</h4>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service} className="text-foreground-muted text-sm">
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-border py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-foreground-subtle text-sm">
                © {currentYear} Nishant Kumar. All rights reserved.
              </p>
            </div>

            <div className="flex items-center gap-6">
              <a
                href="/privacy"
                className="text-foreground-subtle hover:text-primary text-sm transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-foreground-subtle hover:text-primary text-sm transition-colors duration-300"
              >
                Terms of Service
              </a>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="btn-secondary p-3 rounded-full hover:scale-110 transition-all duration-300 group"
              aria-label="Back to top"
            >
              <ArrowUp className="w-5 h-5 transition-transform group-hover:-translate-y-1" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
