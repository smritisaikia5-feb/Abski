import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto flex h-24 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={logo} alt="Abski Technology" className="h-16 w-auto group-hover:scale-110 transition-transform duration-300" />
          <div className="flex flex-col">
            <h1 className="text-xl md:text-2xl font-display font-bold leading-none tracking-tight">
              <span className="text-foreground">ABSKI</span>{" "}
              <span className="text-primary">TECHNOLOGY</span>
            </h1>
            <span className="text-[10px] md:text-xs font-medium text-muted-foreground tracking-[0.2em] uppercase">
              Simplified Engineering
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          <Link
            to="/"
            className={`px-4 py-2 text-sm font-medium transition-colors hover:text-primary ${isActive("/") ? "text-primary" : "text-foreground"
              }`}
          >
            Home
          </Link>

          <Link
            to="/products"
            className={`px-4 py-2 text-sm font-medium transition-colors hover:text-primary ${isActive("/products") ? "text-primary" : "text-foreground"}`}
          >
            Products
          </Link>

          <Link
            to="/services"
            className={`px-4 py-2 text-sm font-medium transition-colors hover:text-primary ${isActive("/services") ? "text-primary" : "text-foreground"}`}
          >
            Services
          </Link>

          <Link
            to="/about"
            className={`px-4 py-2 text-sm font-medium transition-colors hover:text-primary ${isActive("/about") ? "text-primary" : "text-foreground"
              }`}
          >
            About
          </Link>

          <Link
            to="/internships"
            className={`px-4 py-2 text-sm font-medium transition-colors hover:text-primary ${isActive("/internships") ? "text-primary" : "text-foreground"
              }`}
          >
            Internships
          </Link>

          <Link
            to="/contact"
            className={`px-4 py-2 text-sm font-medium transition-colors hover:text-primary ${isActive("/contact") ? "text-primary" : "text-foreground"
              }`}
          >
            Contact Us
          </Link>

          <div className="ml-2">
            <Button asChild className="rounded-full px-6 font-bold hover:scale-105 transition-transform">
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-sm font-medium hover:text-primary"
            >
              Home
            </Link>
            <Link
              to="/products"
              onClick={() => setMobileMenuOpen(false)}
              className={`py-2 text-sm font-medium hover:text-primary ${isActive("/products") ? "text-primary" : "text-foreground"}`}
            >
              Products
            </Link>
            <Link
              to="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-sm font-medium hover:text-primary"
            >
              Services
            </Link>
            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-sm font-medium hover:text-primary"
            >
              About
            </Link>
            <Link
              to="/internships"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-sm font-medium hover:text-primary"
            >
              Internships
            </Link>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-sm font-medium hover:text-primary"
            >
              Contact Us
            </Link>
            <div className="pt-2">
              <Button asChild className="w-full rounded-full font-bold">
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Get Started</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
