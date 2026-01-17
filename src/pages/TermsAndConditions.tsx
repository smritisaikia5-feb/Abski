import { motion } from "framer-motion";
import heroWorkspace from "@/assets/hero-workspace.png";

const TermsAndConditions = () => {
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
                        Terms & Conditions
                    </motion.h1>
                    <p className="text-xl text-white/80">Last updated: January 2026</p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="prose prose-blue max-w-none">
                        <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
                        <p className="mb-6 text-muted-foreground">
                            By accessing or using the Abski Technology website, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access the website.
                        </p>

                        <h2 className="text-2xl font-bold mb-4">2. Intellectual Property Rights</h2>
                        <p className="mb-6 text-muted-foreground">
                            Unless otherwise stated, Abski Technology owns the intellectual property rights for all material on the website. All intellectual property rights are reserved. You may access this from Abski Technology for your own personal use subjected to restrictions set in these terms and conditions.
                        </p>

                        <h2 className="text-2xl font-bold mb-4">3. User Obligations</h2>
                        <p className="mb-4 text-muted-foreground">
                            When using our inquiry forms and application tools, you agree:
                        </p>
                        <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
                            <li>To provide accurate and current information.</li>
                            <li>Not to use the website for any unlawful purpose.</li>
                            <li>Not to attempt to gain unauthorized access to any portion of the website.</li>
                            <li>Not to transmit any harmful code or viruses.</li>
                        </ul>

                        <h2 className="text-2xl font-bold mb-4">4. Services & Products</h2>
                        <p className="mb-6 text-muted-foreground">
                            We reserve the right to modify or discontinue any product or service (or any part or content thereof) without notice at any time. We shall not be liable to you or to any third-party for any modification, price change, suspension or discontinuance of the Service.
                        </p>

                        <h2 className="text-2xl font-bold mb-4">5. Limitation of Liability</h2>
                        <p className="mb-6 text-muted-foreground">
                            In no event shall Abski Technology, nor any of its officers, directors and employees, be held liable for anything arising out of or in any way connected with your use of this website whether such liability is under contract.
                        </p>

                        <h2 className="text-2xl font-bold mb-4">6. Indemnification</h2>
                        <p className="mb-6 text-muted-foreground">
                            You hereby indemnify to the fullest extent Abski Technology from and against any and/or all liabilities, costs, demands, causes of action, damages and expenses arising in any way related to your breach of any of the provisions of these Terms.
                        </p>

                        <h2 className="text-2xl font-bold mb-4">7. Governing Law</h2>
                        <p className="mb-6 text-muted-foreground">
                            These Terms will be governed by and interpreted in accordance with the laws of India, and you submit to the non-exclusive jurisdiction of the state and federal courts located in India for the resolution of any disputes.
                        </p>

                        <h2 className="text-2xl font-bold mb-4">8. Contact Details</h2>
                        <p className="mb-6 text-muted-foreground text-sm italic">
                            Questions about the Terms & Conditions should be sent to us at contact@abskitechnology.com.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TermsAndConditions;
