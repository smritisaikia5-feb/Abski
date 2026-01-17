import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Brain,
  Bot,
  FlaskConical,
  Cpu,
  Settings,
  Monitor,
  Printer,
  Layers,
  Lightbulb,
  Zap,
  ScanLine,
  LucideIcon,
  ArrowRight,
  CheckCircle2,
  Image as ImageIcon,
  Scissors
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import roboticsBg from "@/assets/robotics-bg.jpg";
import stemBg from "@/assets/stem-bg.jpg";
import pcbDesignBg from "@/assets/pcb-design-bg.jpg";
import pcbFabricationBg from "@/assets/pcb-fabrication-bg.jpg";
import printing3dBg from "@/assets/3d-printing-bg.jpg";
import designing3dBg from "@/assets/3d-designing-bg.jpg";
import fabrication3dBg from "@/assets/3d-fabrication-bg.png";
import prototypingBg from "@/assets/prototyping-bg.jpg";
import laserCuttingBg from "@/assets/laser-cutting-bg.png";
import laserEngravingBg from "@/assets/laser-engraving-bg.png";
import labSetupBg from "@/assets/lab-setup-bg.png";
import flexPrintingBg from "@/assets/flex-printing-bg.jpg";
import mdfCuttingBg from "@/assets/mdf-cutting-bg.jpg";
import heroWorkspace from "@/assets/hero-workspace.png";

interface ServiceInfo {
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  longDescription?: string;
  color?: string;
  image?: string;
  imageFit?: "cover" | "contain";
  backgroundColor?: string;
}

const serviceData: Record<string, ServiceInfo> = {
  "stem-education": {
    title: "STEM Education",
    description: "Comprehensive Science, Technology, Engineering, and Mathematics education programs.",
    features: ["Curriculum development", "Teacher training", "Student workshops", "Hands-on projects"],
    icon: Brain,
    color: "text-blue-500",
    longDescription: "Our STEM education programs are designed to inspire the next generation of innovators. We provide comprehensive curriculum development, hands-on workshops, and teacher training to ensure effective delivery of STEM concepts.",
    image: stemBg,
    imageFit: "contain"
  },
  "robotics-ai": {
    title: "Robotics & AI",
    description: "Cutting-edge robotics and artificial intelligence learning programs.",
    features: ["Robot building workshops", "Programming courses", "AI/ML fundamentals", "Competition preparation"],
    icon: Bot,
    color: "text-purple-500",
    longDescription: "Dive into the world of future tech with our Robotics and AI courses. From building basic robots to understanding complex machine learning algorithms, we guide students through every step.",
    image: roboticsBg,
    imageFit: "cover"
  },
  "lab-establishment": {
    title: "Lab Setup",
    description: "Complete laboratory setup solutions for educational institutions.",
    features: ["Lab design & planning", "Equipment procurement", "Installation & setup", "Training & support"],
    icon: FlaskConical,
    color: "text-green-500",
    image: labSetupBg,
    imageFit: "cover"
  },
  "pcb-designing": {
    title: "PCB Design",
    description: "Professional PCB design services for your electronic projects.",
    features: ["Schematic design", "Multi-layer PCB layout", "Signal integrity analysis", "Design for manufacturing"],
    icon: Cpu,
    color: "text-orange-500",
    image: pcbDesignBg,
    imageFit: "cover"
  },
  "pcb-fabrication": {
    title: "PCB Fabrication",
    description: "High-quality PCB manufacturing with quick turnaround times.",
    features: ["Single & multi-layer PCBs", "Flexible PCBs", "SMT assembly", "Quality testing"],
    icon: Settings,
    color: "text-cyan-500",
    image: pcbFabricationBg,
    imageFit: "cover"
  },
  "3d-designing": {
    title: "3D Design",
    description: "Professional 3D modeling and CAD design services.",
    features: ["Product design", "Mechanical CAD", "Render & visualization", "Design optimization"],
    icon: Monitor,
    color: "text-indigo-500",
    image: designing3dBg,
    imageFit: "cover"
  },
  "3d-printing": {
    title: "3D Printing",
    description: "Advanced additive manufacturing with various materials.",
    features: ["FDM printing", "Resin printing", "Multiple materials", "Post-processing"],
    icon: Printer,
    color: "text-rose-500",
    image: printing3dBg,
    imageFit: "cover"
  },
  "3d-fabrication": {
    title: "3D Fabrication",
    description: "Complete 3D fabrication solutions from design to finished product.",
    features: ["Design consultation", "Material selection", "Production runs", "Assembly services"],
    icon: Layers,
    color: "text-amber-500",
    image: fabrication3dBg,
    imageFit: "cover"
  },
  "prototyping": {
    title: "Prototyping",
    description: "Turn your ideas into reality with our prototyping services.",
    features: ["Concept development", "Rapid prototyping", "Functional testing", "Iterative refinement"],
    icon: Lightbulb,
    color: "text-yellow-500",
    image: prototypingBg,
    imageFit: "cover"
  },
  "laser-cutting": {
    title: "Laser Cutting",
    description: "Precision laser cutting for various materials and applications.",
    features: ["Metal cutting", "Acrylic & wood", "Intricate designs", "High precision"],
    icon: Zap,
    color: "text-red-500",
    image: laserCuttingBg,
    imageFit: "cover"
  },
  "laser-engraving": {
    title: "Laser Engraving",
    description: "Custom laser engraving services for personalization and branding.",
    features: ["Custom designs", "Various materials", "Deep engraving", "Surface marking"],
    icon: ScanLine,
    color: "text-emerald-500",
    image: laserEngravingBg,
    imageFit: "cover"
  },
  "flex-vinyl-printing": {
    title: "Flex & Vinyl Printing",
    description: "High-quality large-format printing for banners, stickers, and branding materials.",
    features: ["Weather-resistant", "Vibrant colors", "Custom dimensions", "Matte & Gloss finishes"],
    icon: ImageIcon,
    color: "text-blue-600",
    longDescription: "Stand out with our professional printing services. We provide high-resolution flex and vinyl printing for everything from small stickers to massive outdoor banners, using durable, weather-resistant inks.",
    image: flexPrintingBg,
    imageFit: "cover"
  },
  "mdf-cutting-engraving": {
    title: "MDF Board Cutting & Engraving",
    description: "Precision CNC and laser services for MDF, wood, and composite boards.",
    features: ["Intricate designs", "Architectural models", "Custom furniture parts", "High precision cutting"],
    icon: Scissors,
    color: "text-amber-700",
    longDescription: "Our specialized MDF board services offer both precision cutting and detailed surface engraving. Perfect for custom furniture, interior decor, and architectural prototyping with a professional finish.",
    image: mdfCuttingBg,
    imageFit: "cover"
  },
};

const Services = () => {
  const { category } = useParams();

  // Scroll to section logic
  useEffect(() => {
    if (category) {
      const element = document.getElementById(category);
      if (element) {
        // Add a small delay/offset for smooth behavior and header compensation
        setTimeout(() => {
          const headerOffset = 180; // Adjusted for header + stickynav
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }, 300);
      }
    }
  }, [category]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 180;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden flex items-center justify-center text-white">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.img
            src={heroWorkspace}
            alt="Robotic Lab Background"
            className="w-full h-full object-cover"
            initial={{ scale: 1 }}
            animate={{ scale: 1.1 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
          />
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/80 to-background" />
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-semibold text-white/90 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
              End-to-End Solutions
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Our <span className="text-white/90">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              From educational programs to advanced manufacturing, we provide the expertise and tools you need to succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Sticky Navigation */}
      <div className="sticky top-[89px] z-40 bg-background/80 backdrop-blur-md border-y border-border/50 py-4 mb-12 shadow-sm">
        <div className="container mx-auto px-4">
          {/* Horizontal Scroll Area */}
          <div className="flex overflow-x-auto gap-2 pb-2 -mb-2 scrollbar-none snap-x">
            {Object.entries(serviceData).map(([key, data]) => (
              <button
                key={key}
                onClick={() => scrollToSection(key)}
                className={cn(
                  "flex-none snap-start px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border hover:border-primary/50 whitespace-nowrap",
                  category === key
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-background border-border text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {data.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-24 space-y-24">
        {Object.entries(serviceData).map(([key, data], index) => {
          const isEven = index % 2 === 0;
          return (
            <section
              key={key}
              id={key}
              className="scroll-mt-32 relative group"
            >
              {/* Background Elements */}
              <div className={cn(
                "absolute top-0 bottom-0 w-screen left-1/2 -translate-x-1/2 -z-10 transition-opacity duration-500 rounded-3xl",
                isEven ? "bg-muted/30 opacity-100" : "bg-transparent"
              )} />

              <div className={cn(
                "flex flex-col gap-12 lg:gap-20 items-center p-6 lg:p-12",
                isEven ? "lg:flex-row" : "lg:flex-row-reverse"
              )}>

                {/* Visual Side */}
                <div className="w-full lg:w-1/2 relative">
                  <div className={cn(
                    "relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-card border border-border group-hover:border-primary/50 transition-colors duration-500 group-hover:shadow-[0_0_50px_-12px_rgba(0,0,0,0.1)] dark:group-hover:shadow-primary/20",
                    // Add white background if using contain fit
                    data.imageFit === "contain" && (data.backgroundColor || "bg-white")
                  )}>

                    {data.image ? (
                      <>
                        <img
                          src={data.image}
                          alt={data.title}
                          className={cn(
                            "absolute inset-0 w-full h-full animate-zoom",
                            data.imageFit === "contain" ? "object-contain p-4" : "object-cover"
                          )}
                        />
                        <div className={cn(
                          "absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60",
                          // Hide gradient overlay if using contain fit to keep image clean
                          data.imageFit === "contain" && "hidden"
                        )} />
                      </>
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-card to-muted flex items-center justify-center">
                        <data.icon className={cn("w-32 h-32 opacity-10 transition-transform duration-700 group-hover:scale-110", data.color)} />
                      </div>
                    )}

                    <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px] pointer-events-none" />
                  </div>

                  {/* Info Card - Now below the image */}
                  <div className="mt-6 p-6 bg-card border border-border rounded-xl shadow-lg transition-transform duration-500 group-hover:-translate-y-1">
                    <div className="flex items-center gap-4">
                      <div className={cn("p-3 rounded-lg bg-muted shadow-sm ring-1 ring-border/50", data.color)}>
                        <data.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{data.title}</h3>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Professional Service</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <div className="space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight">
                      {data.title}
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {data.longDescription || data.description}
                    </p>
                  </div>

                  <Card className="border-none shadow-none bg-transparent">
                    <CardContent className="p-0 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {data.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3 group/item">
                          <CheckCircle2 className={cn("w-5 h-5 shrink-0 transition-colors", data.color)} />
                          <span className="text-sm font-medium group-hover/item:text-foreground transition-colors text-muted-foreground">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  <div className="pt-4 flex flex-wrap gap-4">
                    <Button asChild size="lg" className="rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all">
                      <Link to="/contact">
                        Get Started <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Global CTA */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-white/10 rounded-full blur-3xl opacity-50" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to innovate with us?</h2>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
            Whether you need educational solutions or precision manufacturing, we're here to help you achieve your goals.
          </p>
          <Button asChild size="lg" variant="secondary" className="rounded-full px-10 h-14 text-lg font-semibold shadow-xl hover:scale-105 transition-transform">
            <Link to="/contact">Contact Us Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
