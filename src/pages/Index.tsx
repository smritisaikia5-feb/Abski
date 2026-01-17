import { useState, useEffect } from "react";
import { Bot, Box, Network, ArrowRight, Zap, Target, Award, CheckCircle2, Cpu, Users, Timer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import hero1 from "@/assets/hero-1.png";
import hero2 from "@/assets/hero-2.png";
import hero3 from "@/assets/hero-3.png";
import hero4 from "@/assets/hero-4.jpg";
import { cn } from "@/lib/utils";

const heroImages = [
    hero1,
    hero2,
    hero3,
    hero4
];

const Index = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
        }, 5000); // Change image every 5 seconds
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center overflow-hidden">
                {/* Background Image Carousel & Overlays */}
                <div className="absolute inset-0 z-0 overflow-hidden bg-background">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={currentImageIndex}
                            src={heroImages[currentImageIndex]}
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 0.9, scale: 1.05 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            className="absolute inset-0 w-full h-full object-cover"
                            alt="Abski Technology Innovation"
                        />
                    </AnimatePresence>
                    {/* Multi-layered Gradient Overlays for Readability */}
                    <div className="absolute inset-0 bg-background/10 z-[1]" />
                    <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background z-[2]" />
                    <div className="absolute inset-0 bg-gradient-to-r from-background/20 via-transparent to-transparent z-[2]" />

                    {/* Decorative Blobs */}
                    <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
                    <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-accent/20 rounded-full blur-[120px] mix-blend-screen" />
                </div>

                <div className="container relative z-10 mx-auto px-4 py-20">
                    {/* Centered Badge at the top */}
                    <div className="w-full flex justify-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold border border-primary/20 backdrop-blur-md">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            SIMPLIFIED ENGINEERING
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        {/* Left Content - Remains left-aligned */}
                        <div className="flex-1 text-center lg:text-left space-y-8 max-w-2xl mx-auto lg:mx-0">
                            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight leading-[1.1]">
                                Empowering the <br />
                                Next Generation of <br />
                                <span className="gradient-text">Innovators</span>
                            </h1>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                Abski Technology provides cutting-edge solutions in STEM education,
                                robotics, and advanced manufacturing. We bridge the gap between imagination and reality.
                            </p>
                            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
                                <Button asChild size="lg" className="rounded-full px-8 h-14 text-lg shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all">
                                    <Link to="/services">
                                        Explore Services <ArrowRight className="ml-2 h-5 w-5" />
                                    </Link>
                                </Button>
                                <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-14 text-lg hover:bg-muted/50 transition-all">
                                    <Link to="/contact">Get in Touch</Link>
                                </Button>
                            </div>
                        </div>

                        {/* Right Visual (Floating Icons) */}
                        <div className="flex-1 relative hidden lg:block">
                            <div className="relative w-full h-[400px] flex items-center justify-center">
                                <div className="absolute top-[0%] right-[20%] p-5 bg-background/40 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 animate-float transition-all hover:scale-110 z-20">
                                    <Bot className="w-10 h-10 text-primary" />
                                </div>
                                <div className="absolute bottom-[10%] left-[10%] p-5 bg-background/40 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 animate-float [animation-delay:2s] transition-all hover:scale-110 z-20">
                                    <Box className="w-10 h-10 text-orange-500" />
                                </div>
                                <div className="absolute top-[40%] right-[0%] p-5 bg-background/40 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 animate-float [animation-delay:4s] transition-all hover:scale-110 z-20">
                                    <Network className="w-10 h-10 text-blue-500" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Solutions Section */}
            <section className="py-24 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                        <h2 className="text-3xl md:text-5xl font-bold font-display">Specialized Solutions</h2>
                        <p className="text-lg text-muted-foreground">
                            Comprehensive technical services designed to support creators at every stage.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Zap,
                                title: "Rapid Prototyping",
                                desc: "Turn concepts into functional models with our high-speed 3D printing and fabrication services.",
                                color: "text-yellow-500",
                                link: "/services/prototyping"
                            },
                            {
                                icon: Target,
                                title: "STEM Education",
                                desc: "Hands-on learning programs that teach the core principles of engineering and technology.",
                                color: "text-blue-500",
                                link: "/services/stem-education"
                            },
                            {
                                icon: Award,
                                title: "Quality Manufacturing",
                                desc: "Enterprise-grade PCB design and laser cutting services with precision and reliability.",
                                color: "text-green-500",
                                link: "/services/lab-establishment"
                            }
                        ].map((feature, i) => (
                            <Link
                                key={i}
                                to={feature.link}
                                className="group p-8 rounded-3xl bg-background border border-border shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-primary/50 hover:bg-primary/[0.02] transition-all duration-300 block"
                            >
                                <div className={cn("w-14 h-14 rounded-2xl bg-muted flex items-center justify-center mb-6 group-hover:scale-110 transition-transform", feature.color)}>
                                    <feature.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                                <p className="text-muted-foreground leading-relaxed flex items-center flex-wrap gap-2">
                                    {feature.desc}
                                    <ArrowRight className="w-4 h-4 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 inline-block" />
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust Section */}
            <section className="py-32 border-y border-border bg-background/50 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none opacity-30">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(var(--primary),0.1),transparent_70%)]" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">Why Abski Technology?</h2>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            We combine years of technical expertise with a passion for teaching,
                            delivering professional results for schools, startups, and hobbyists alike.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                        {[
                            {
                                icon: Cpu,
                                title: "Innovation",
                                desc: "We leverage the latest technologies to deliver cutting-edge solutions.",
                                color: "text-blue-500",
                                bgColor: "bg-blue-500/10"
                            },
                            {
                                icon: CheckCircle2,
                                title: "Quality",
                                desc: "Our commitment to quality ensures exceptional results every time.",
                                color: "text-green-500",
                                bgColor: "bg-green-500/10"
                            },
                            {
                                icon: Users,
                                title: "Collaboration",
                                desc: "We work closely with our clients to understand their unique needs.",
                                color: "text-purple-500",
                                bgColor: "bg-purple-500/10"
                            },
                            {
                                icon: Timer,
                                title: "Efficiency",
                                desc: "We deliver projects on time and within budget, without compromise.",
                                color: "text-orange-500",
                                bgColor: "bg-orange-500/10"
                            }
                        ].map((item, i) => (
                            <div key={i} className="group p-8 rounded-3xl bg-background border border-border shadow-sm hover:shadow-md hover:border-primary/50 hover:bg-primary/[0.02] transition-all duration-300">
                                <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform", item.bgColor, item.color)}>
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-wrap justify-center gap-12 md:gap-24 lg:gap-32 pt-10 border-t border-border/50">
                        <div className="space-y-2 text-center">
                            <div className="text-5xl md:text-6xl font-bold gradient-text">25+</div>
                            <div className="text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground">Projects Done</div>
                        </div>
                        <div className="space-y-2 text-center">
                            <div className="text-5xl md:text-6xl font-bold gradient-text">100%</div>
                            <div className="text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground">Reliability</div>
                        </div>
                        <div className="space-y-2 text-center">
                            <div className="text-5xl md:text-6xl font-bold gradient-text">24/7</div>
                            <div className="text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground">Support</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-16 relative overflow-hidden bg-primary text-primary-foreground">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1),transparent)]" />
                <div className="container relative z-10 mx-auto px-4 text-center space-y-6">
                    <h2 className="text-3xl md:text-5xl font-display font-bold">Ready to Start Your Journey?</h2>
                    <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
                        Contact us today for a consultation on your project or educational requirements.
                    </p>
                    <div className="pt-2">
                        <Button asChild size="lg" variant="secondary" className="rounded-full px-10 h-14 text-base font-bold shadow-xl hover:scale-105 transition-transform">
                            <Link to="/contact">Get Started Now</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Index;
