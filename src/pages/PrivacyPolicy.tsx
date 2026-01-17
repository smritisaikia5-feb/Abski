import { motion } from "framer-motion";
import heroWorkspace from "@/assets/hero-workspace.png";

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-background">
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
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-display font-bold mb-4 tracking-tight"
                    >
                        Privacy Policy
                    </motion.h1>
                    <p className="text-xl text-white/80">Last updated: January 2026</p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="prose prose-blue max-w-none">
                        <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
                        <p className="mb-6">
                            Welcome to Abski Technology. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
                        </p>

                        <h2 className="text-2xl font-bold mb-4">2. The Data We Collect</h2>
                        <p className="mb-4">
                            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
                        </p>
                        <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
                            <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                            <li><strong>Contact Data:</strong> includes email address and telephone numbers.</li>
                            <li><strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location.</li>
                            <li><strong>Usage Data:</strong> includes information about how you use our website, products and services.</li>
                        </ul>

                        <h2 className="text-2xl font-bold mb-4">3. How We Use Your Data</h2>
                        <p className="mb-4">
                            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                        </p>
                        <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
                            <li>To provide services and fulfill requests.</li>
                            <li>To improve our website, products/services, marketing, customer relationships and experiences.</li>
                            <li>To contact you via WhatsApp or email regarding your inquiries.</li>
                        </ul>

                        <h2 className="text-2xl font-bold mb-4">4. WhatsApp Interactions</h2>
                        <p className="mb-6">
                            When you use our "Apply Now" or "Send Message" features, you are voluntarily sending your data to us via WhatsApp. This information is used solely to respond to your inquiry or process your internship application.
                        </p>

                        <h2 className="text-2xl font-bold mb-4">5. Data Security</h2>
                        <p className="mb-6">
                            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.
                        </p>

                        <h2 className="text-2xl font-bold mb-4">6. Contact Us</h2>
                        <p className="mb-6">
                            If you have any questions about this privacy policy or our privacy practices, please contact us at:
                        </p>
                        <div className="bg-muted p-6 rounded-2xl">
                            <p className="font-bold">Abski Technology</p>
                            <p>Email: info@abskitechnology.com</p>
                            <p>Phone: +91 95314 28622</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PrivacyPolicy;
