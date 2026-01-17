import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Abski Technology" className="h-16 w-auto" />
              <div className="flex flex-col">
                <div className="text-xl font-display font-bold leading-none tracking-tight">
                  <span className="text-secondary-foreground">ABSKI</span>{" "}
                  <span className="text-primary">TECHNOLOGY</span>
                </div>
                <span className="text-[10px] font-medium text-secondary-foreground/60 tracking-[0.2em] uppercase">
                  Simplified Engineering
                </span>
              </div>
            </div>
            <p className="text-sm text-secondary-foreground/80">
              Simplified Engineering - Empowering innovation through technology education and advanced manufacturing solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/internships" className="hover:text-primary transition-colors">Internships</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Products & Services */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Our Offerings</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/products/electronics" className="hover:text-primary transition-colors">Electronics Sales</Link></li>
              <li><Link to="/products/educational-kits" className="hover:text-primary transition-colors">Educational Kits</Link></li>
              <li><Link to="/services/stem-education" className="hover:text-primary transition-colors">STEM Education</Link></li>
              <li><Link to="/services/3d-printing" className="hover:text-primary transition-colors">3D Printing</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>Abc, Tarun Nagar by lane no 6, Guwahati 781005, Assam India</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <span>+91 95314 28622</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <span>info@abskitechnology.com</span>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li><Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-and-conditions" className="hover:text-primary transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-sm text-secondary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Abski Technology. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
