import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion } from "framer-motion";
import heroWorkspace from "@/assets/hero-workspace.png";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "info@abskitechnology.com",
    href: "mailto:info@abskitechnology.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 95314 28622",
    href: "tel:+919531428622",
  },
  {
    icon: MapPin,
    title: "Address",
    value: "Abc, Tarun Nagar by lane no 6, Guwahati 781005, Assam India",
    href: "https://maps.google.com/?q=Tarun+Nagar+Guwahati+781005",
  },
];

const servicesList = [
  "Lab Establishment",
  "STEM Labs",
  "Robotics & Embedded Systems",
  "PCB Design & Fabrication",
  "3D Printing & Fabrication",
  "Laser Cutting & Engraving",
  "Flex & Vinyl Printing",
  "MDF Board Cutting"
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    service: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct a structured "Inquiry" style message
    const divider = "-------------------------------------------";
    const message =
      `*${divider}*%0A` +
      `   📩 *NEW SERVICE INQUIRY*   %0A` +
      `*${divider}*%0A` +
      `👤 *NAME*    : ${formData.name}%0A` +
      `📧 *EMAIL*   : ${formData.email}%0A` +
      `🛠️ *SERVICE* : ${formData.service || "General Inquiry"}%0A` +
      `*${divider}*%0A` +
      `💬 *MESSAGE*: %0A${formData.message}%0A` +
      `*${divider}*`;

    const whatsappUrl = `https://wa.me/919531428622?text=${message}`;

    // Open WhatsApp
    window.open(whatsappUrl, "_blank");

    toast({
      title: "Opening WhatsApp...",
      description: "Redirecting you to send your inquiry details.",
    });

    setFormData({ name: "", email: "", message: "", service: "" });
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
              Get in <span className="text-white/90">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Have a question or want to work with us? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-4">
              <h2 className="text-xl font-display font-semibold mb-6">Get in Touch</h2>
              {contactInfo.map((info) => (
                <Card key={info.title}>
                  <CardContent className="p-4 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center shrink-0">
                      <info.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium">{info.title}</p>
                      {info.title === "Address" ? (
                        <a
                          href={info.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-sm text-muted-foreground">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-display font-semibold mb-6">Send us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Services you are looking for</Label>
                      <Select
                        value={formData.service}
                        onValueChange={(value) => setFormData({ ...formData, service: value })}
                      >
                        <SelectTrigger className="w-full h-12 rounded-xl focus:ring-primary/20 bg-background border-border">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl border-border shadow-2xl bg-white">
                          {servicesList.map((service) => (
                            <SelectItem
                              key={service}
                              value={service}
                              className="focus:bg-primary/5 focus:text-primary py-3 cursor-pointer"
                            >
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us more about your inquiry..."
                        rows={5}
                        required
                      />
                    </div>
                    <Button type="submit" className="gradient-bg hover:opacity-90 text-primary-foreground">
                      Send Message <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
