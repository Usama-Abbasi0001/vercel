import { Github, Linkedin, Twitter, Youtube, ChevronUp } from "lucide-react";

const FooterSec = () => {
  const footerSections = [
    {
      title: "Products",
      links: [
        "AI",
        "Enterprise",
        "Fluid Compute",
        "Next.js",
        "Observability",
        "Previews",
        "Rendering",
        "Security",
        "Turbo",
        "Domains",
        "v0",
      ],
    },
    {
      title: "Resources",
      links: [
        "Community",
        "Docs",
        "Guides",
        "Academy",
        "Help",
        "Integrations",
        "Pricing",
        "Resources",
        "Solution Partners",
        "Startups",
        "Templates",
        "SDKs by Vercel",
      ],
    },
    {
      title: "Company",
      links: [
        "About",
        "Blog",
        "Careers",
        "Changelog",
        "Contact Us",
        "Customers",
        "Events",
        "Partners",
        "Shipped",
        "Privacy Policy",
        "Legal",
      ],
    },
    {
      title: "Social",
      links: [
        { name: "GitHub", icon: Github },
        { name: "LinkedIn", icon: Linkedin },
        { name: "Twitter", icon: Twitter },
        { name: "YouTube", icon: Youtube },
      ],
      isSocial: true,
    },
  ];

  return (
    <footer className="bg-[#0a0a0a] mt-10 border-t border-white/10 ">
      <div className="max-w-7xl mx-auto px-8 py-12 relative">
        {/* Scroll to top button */}
        <button
          className="absolute top-8 right-8 p-2 hover:bg-white/10 rounded transition-colors"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-5 h-5 text-white" />
        </button>

        {/* Footer content grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold text-sm mb-6">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => {
                  if (section.isSocial && typeof link === "object") {
                    const Icon = link.icon;
                    return (
                      <li key={link.name}>
                        <a
                          href="#"
                          className="text-gray-400 hover:text-white text-sm flex items-center gap-2 transition-colors"
                        >
                          <Icon className="w-4 h-4" />
                          {link.name}
                        </a>
                      </li>
                    );
                  }

                  return (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white text-sm transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom border accent */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Vercel, 11/3/25 by Usama Khan.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSec;