import { Target, Eye, Award, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import heroWorkspace from "@/assets/hero-workspace.png";

const values = [
  {
    icon: Target,
    title: "Mission",
    description: "To simplify engineering and make quality technology education and manufacturing accessible to everyone.",
  },
  {
    icon: Eye,
    title: "Vision",
    description: "To be the leading provider of technology solutions and education, fostering innovation across communities.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We maintain the highest standards in everything we do, from product quality to customer service.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Building a strong community of learners, makers, and innovators who shape the future together.",
  },
];

const About = () => {
  return (
    <div className="flex flex-col">
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

        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight">
              About <span className="text-white/90">Abski Technology</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Simplified Engineering - Empowering the next generation of innovators through
              quality technology education and advanced manufacturing solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">Our Story</h2>
            <div className="prose prose-lg text-muted-foreground">
              <p className="mb-4">
                Abski Technology was founded with a simple yet powerful vision: to make engineering
                accessible and exciting for everyone. We believe that hands-on learning and practical
                experience are the keys to unlocking innovation.
              </p>
              <p className="mb-4">
                From our humble beginnings, we have grown into a comprehensive technology solutions
                provider, offering everything from educational programs and electronic components to
                advanced manufacturing services like PCB fabrication, 3D printing, and laser cutting.
              </p>
              <p>
                Today, we serve educational institutions, startups, hobbyists, and established businesses,
                helping them bring their ideas to life through our diverse range of products and services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <Card key={value.title} className="text-center hover:border-primary/50 hover:bg-primary/[0.01] transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-display font-bold">25+</p>
              <p className="text-sm text-secondary-foreground/80">Projects Completed</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-display font-bold">15+</p>
              <p className="text-sm text-secondary-foreground/80">Partner Institutions</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-display font-bold">20+</p>
              <p className="text-sm text-secondary-foreground/80">Students Trained</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-display font-bold">24/7</p>
              <p className="text-sm text-secondary-foreground/80">Support</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
