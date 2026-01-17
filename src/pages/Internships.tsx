import { useState } from "react";
import { Link } from "react-router-dom";
import { Clock, MapPin, Briefcase, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import heroWorkspace from "@/assets/hero-workspace.png";

const internships = [
  {
    title: "Robotics & Embedded Systems",
    duration: "3-6 months",
    type: "Full-time / Part-time",
    location: "On-site / Remote",
    skills: ["Arduino", "Raspberry Pi", "C/C++", "Python"],
    description: "Work on real-world robotics projects and learn embedded systems programming.",
  },
  {
    title: "PCB Design & Development",
    duration: "3 months",
    type: "Full-time",
    location: "On-site",
    skills: ["Altium", "KiCad", "Circuit Design", "DFM"],
    description: "Learn professional PCB design and manufacturing processes.",
  },
  {
    title: "3D Design & Prototyping",
    duration: "2-4 months",
    type: "Full-time / Part-time",
    location: "On-site",
    skills: ["SolidWorks", "Fusion 360", "3D Printing", "CAD"],
    description: "Create 3D models and work with various prototyping technologies.",
  },
  {
    title: "IoT & AI Projects",
    duration: "4-6 months",
    type: "Full-time",
    location: "Hybrid",
    skills: ["IoT Platforms", "Python", "ML Basics", "Cloud"],
    description: "Build IoT solutions and explore machine learning applications.",
  },
];

const benefits = [
  "Hands-on project experience",
  "Mentorship from industry experts",
  "Certificate of completion",
  "Letter of recommendation",
  "Networking opportunities",
  "Potential for full-time roles",
];

const Internships = () => {
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    university: "",
    position: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct a structured "Form" style message
    const divider = "-------------------------------------------";
    const message =
      `*${divider}*%0A` +
      `   🎓 *INTERNSHIP APPLICATION*   %0A` +
      `*${divider}*%0A` +
      `👤 *NAME*         : ${formData.name}%0A` +
      `📧 *EMAIL*        : ${formData.email}%0A` +
      `📱 *PHONE*        : ${formData.phone}%0A` +
      `🏫 *UNIVERSITY* : ${formData.university}%0A` +
      `🛠️ *POSITION*   : ${formData.position}%0A` +
      `*${divider}*%0A` +
      `💬 *MESSAGE*: %0A${formData.message || "No additional message"}%0A` +
      `*${divider}*`;

    const whatsappUrl = `https://wa.me/919531428622?text=${message}`;

    // Open WhatsApp
    window.open(whatsappUrl, "_blank");

    toast({
      title: "Opening WhatsApp...",
      description: "Sending your formatted application form.",
    });

    setIsOpen(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      university: "",
      position: "",
      message: ""
    });
  };

  const openAppForm = (position?: string) => {
    if (position) {
      setFormData(prev => ({ ...prev, position }));
    }
    setIsOpen(true);
  };

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
              Internship <span className="text-white/90">Programs</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Launch your engineering career with hands-on experience at Abski Technology.
              Learn from industry experts and work on real-world projects.
            </p>
          </div>
        </div>
      </section>

      {/* Available Internships */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-8">Available Positions</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {internships.map((internship) => (
              <Card key={internship.title} className="group hover:shadow-xl hover:border-primary/50 hover:bg-primary/[0.01] transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button onClick={() => openAppForm(internship.title)} size="sm" className="rounded-full shadow-lg">Apply Now</Button>
                </div>
                <CardHeader>
                  <CardTitle className="font-display pr-20">{internship.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{internship.description}</p>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" /> {internship.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Briefcase className="h-4 w-4" /> {internship.type}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" /> {internship.location}
                    </span>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {internship.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-8 text-center">
              Why Intern With Us?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3 p-4 bg-background rounded-lg">
                  <div className="w-2 h-2 rounded-full gradient-bg" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 relative overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1),transparent)]" />
        <div className="container relative z-10 mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-display font-bold">Ready to Apply?</h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Send us your resume and tell us about your interests. We'll get back to you soon!
          </p>
          <div className="pt-2">
            <Button onClick={() => setIsOpen(true)} size="lg" variant="secondary" className="rounded-full px-10 h-14 text-base font-bold shadow-xl hover:scale-105 transition-transform">
              Apply Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Application Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[600px] h-[90vh] sm:h-auto overflow-y-auto rounded-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-display font-bold">Internship Application</DialogTitle>
            <DialogDescription>
              Join Abski Technology. Fill in your details and we'll connect with you.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-6 mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  required
                  className="rounded-xl"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  required
                  className="rounded-xl"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 XXXXX XXXXX"
                  required
                  className="rounded-xl"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="university">University / College</Label>
                <Input
                  id="university"
                  value={formData.university}
                  onChange={(e) => setFormData({ ...formData, university: e.target.value })}
                  placeholder="Your University Name"
                  required
                  className="rounded-xl"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Position Interested In</Label>
              <Select
                value={formData.position}
                onValueChange={(value) => setFormData({ ...formData, position: value })}
                required
              >
                <SelectTrigger className="w-full h-12 rounded-xl focus:ring-primary/20">
                  <SelectValue placeholder="Select an internship role" />
                </SelectTrigger>
                <SelectContent className="rounded-xl">
                  {internships.map((internship) => (
                    <SelectItem key={internship.title} value={internship.title}>
                      {internship.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>


            <div className="space-y-2">
              <Label htmlFor="message">Brief Message (Optional)</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell us why you are interested in this role..."
                rows={3}
                className="rounded-xl"
              />
            </div>

            <DialogFooter>
              <Button type="submit" className="w-full h-12 rounded-xl font-bold transition-all hover:scale-[1.02]">
                Submit Application
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Internships;
