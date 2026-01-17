import { useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  Cpu,
  BookOpen,
  Package,
  Star,
  Info,
  ShoppingCart,
  CheckCircle2,
  ChevronRight,
  Filter,
  X,
  ArrowUpDown
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Asset Imports
import roboticsBg from "@/assets/robotics-bg.jpg";
import stemBg from "@/assets/stem-bg.jpg";
import pcbDesignBg from "@/assets/pcb-design-bg.jpg";
import pcbFabricationBg from "@/assets/pcb-fabrication-bg.jpg";
import techBg from "@/assets/hero-tech.jpg";
import factoryBg from "@/assets/hero-factory.jpg";
import labBg from "@/assets/lab-setup-bg.png";
import heroWorkspace from "@/assets/hero-workspace.png";
import explorerKit from "@/assets/explorer-kit.png";
import esp32DevKit from "@/assets/esp32-devkit.png";
import raspberryPi from "@/assets/raspberry-pi.png";
import arduinoUno from "@/assets/arduino-uno.png";
import multimeter from "@/assets/multimeter.png";
import aerospaceKit from "@/assets/aerospace-kit.png";
import waterTestingKit from "@/assets/water-testing-kit.png";

interface ProductItem {
  name: string;
  desc: string;
  price: string;
  rating: number;
  features: string[];
  image?: string;
  stockStatus: "In Stock" | "Low Stock" | "Out of Stock";
  tag?: string;
}

interface CategoryInfo {
  title: string;
  description: string;
  icon: any;
  items: ProductItem[];
}

const productData: Record<string, CategoryInfo> = {
  electronics: {
    title: "Electronics Sales",
    description: "Quality electronic components and supplies for all your project needs.",
    icon: Cpu,
    items: [
      {
        name: "Arduino Uno R3",
        desc: "The classic microcontroller board, perfect for beginners and professionals alike.",
        price: "650",
        rating: 4.9,
        stockStatus: "In Stock",
        tag: "Arduino",
        image: arduinoUno,
        features: ["ATmega328P MCU", "14 Digital I/O Pins", "6 Analog Inputs", "USB Programmable"]
      },
      {
        name: "ESP32 DevKit V1",
        desc: "Powerful Wi-Fi + Bluetooth + BLE MCU module for IoT applications.",
        price: "450",
        rating: 4.8,
        stockStatus: "In Stock",
        tag: "IoT",
        image: esp32DevKit,
        features: ["Dual-Core 240MHz", "Integrated Wi-Fi/BT", "30 GPIO Pins", "Low Power Consumption"]
      },
      {
        name: "Digital Multimeter",
        desc: "Essential tool for measuring voltage, current, and resistance in your circuits.",
        price: "850",
        rating: 4.7,
        stockStatus: "In Stock",
        tag: "Tools",
        image: multimeter,
        features: ["Large LCD Display", "Overload Protection", "Continuity Tester", "Battery Included"]
      },
      {
        name: "Raspberry Pi 4 (4GB)",
        desc: "High-performance single board computer for complex computing tasks.",
        price: "4,200",
        rating: 4.9,
        stockStatus: "Low Stock",
        tag: "Computing",
        image: raspberryPi,
        features: ["Quad-Core 1.5GHz", "4K Dual Display", "Gigabit Ethernet", "USB 3.0 Support"]
      }
    ],
  },
  "educational-kits": {
    title: "Educational Kits",
    description: "Comprehensive learning kits designed for hands-on engineering education.",
    icon: BookOpen,
    items: [
      {
        name: "Water Testing Kit",
        desc: "Advanced digital water testing kit for testing pH, turbidity, and dissolved oxygen. Perfect for environmental science projects.",
        price: "149.99",
        rating: 4.8,
        stockStatus: "In Stock",
        tag: "Science",
        image: waterTestingKit,
        features: [
          "Digital LCD Display",
          "Instant Results",
          "Testing for 12 parameters",
          "Durable carrying case"
        ]
      },
      {
        name: "Aerospace Kit",
        desc: "An introductory kit to the world of aerospace engineering. Build gliders and learn flight mechanics.",
        price: "49.99",
        rating: 4.7,
        stockStatus: "In Stock",
        tag: "Aerospace",
        image: aerospaceKit,
        features: ["Build 3 different models", "Learn aerodynamics", "Instructional DVD", "Flight Test Log"]
      },
      {
        name: "Explorer Kit",
        desc: "A hands-on robotics kit designed for self-learning, experimentation, and practical project development.",
        price: "3,450",
        rating: 4.6,
        stockStatus: "In Stock",
        tag: "Robotics",
        image: explorerKit,
        features: ["Arduino Compatible", "Sensors & Modules", "Aluminum Chassis", "Remote Control App"]
      },
      {
        name: "AI & ML Kit",
        desc: "Explore the fundamentals of Artificial Intelligence and Machine Learning with visual learning tools.",
        price: "5,200",
        rating: 4.9,
        stockStatus: "In Stock",
        tag: "AI",
        image: techBg,
        features: ["Vision Recognition", "Voice Control", "Python Integration", "Curriculum Included"]
      }
    ],
  },
};

const ProductCard = ({ product, onOpenDetails }: { product: ProductItem; onOpenDetails: (product: ProductItem) => void }) => {
  return (
    <div className="group bg-card rounded-[2rem] overflow-hidden border border-border/50 shadow-sm hover:shadow-2xl hover:-translate-y-1 hover:border-primary/40 hover:bg-primary/[0.01] transition-all duration-500 flex flex-col h-full">
      {/* Visual Header */}
      <div className="relative aspect-[16/10] overflow-hidden bg-muted/30">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-50 z-[1]" />

        {/* Actual Image */}
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <Package className="w-16 h-16 text-muted shadow-sm opacity-20 group-hover:scale-110 transition-transform duration-700" />
          </div>
        )}

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
          <Badge className={cn(
            "px-3 py-1 bg-green-500/90 backdrop-blur-md text-white border-none text-[10px] font-bold uppercase tracking-wider",
            product.stockStatus === "Low Stock" && "bg-orange-500/90",
            product.stockStatus === "Out of Stock" && "bg-destructive/90"
          )}>
            {product.stockStatus}
          </Badge>
          {product.tag && (
            <Badge variant="secondary" className="px-3 py-1 bg-background/60 backdrop-blur-md text-foreground border border-border/50 text-[10px] font-bold uppercase tracking-wider">
              {product.tag}
            </Badge>
          )}
        </div>
      </div>

      {/* Content Side */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold font-display tracking-tight group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <div className="flex items-center gap-1.5 px-2 py-1 bg-yellow-400/10 rounded-lg">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="text-sm font-bold text-yellow-700">{product.rating}</span>
          </div>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-6">
          {product.desc}
        </p>

        {/* Features Grid */}
        <div className="pt-4 border-t border-border/50 mb-6">
          <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-3">Key Features:</p>
          <div className="grid grid-cols-2 gap-y-2 gap-x-4">
            {product.features.slice(0, 4).map((feature, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-primary/40 shrink-0" />
                <span className="text-[11px] font-medium text-muted-foreground truncate">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-auto pt-4 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Price</span>
            <div className="flex items-baseline gap-0.5">
              <span className="text-sm font-bold text-foreground">₹</span>
              <span className="text-2xl font-black text-foreground">{product.price}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              size="icon"
              variant="outline"
              className="rounded-xl w-10 h-10 border-border/50 hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all"
              onClick={() => onOpenDetails(product)}
            >
              <Info className="w-4 h-4" />
            </Button>
            <Button
              className="rounded-xl px-5 h-10 font-bold bg-[#1e3a5f] hover:bg-[#152e4d] text-white shadow-lg shadow-blue-900/10 transition-all flex items-center gap-2"
              onClick={() => {
                const message = encodeURIComponent(`Hello! I'm interested in the ${product.name} priced at ₹${product.price}. Please provide more details.`);
                window.open(`https://wa.me/919531428622?text=${message}`, "_blank");
              }}
            >
              <ShoppingCart className="w-4 h-4" />
              <span>Add to Cart</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Products = () => {
  const { category } = useParams();
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [sortBy, setSortBy] = useState<"relevance" | "price-low" | "price-high">("relevance");
  const currentCategory = category || "educational-kits";
  const productInfo = productData[currentCategory as keyof typeof productData];

  const sortedItems = useMemo(() => {
    if (!productInfo) return [];

    // Create a copy of the items array to avoid mutating the original data
    const items = [...productInfo.items];

    switch (sortBy) {
      case "price-low":
        return items.sort((a, b) => {
          const priceA = parseFloat(a.price.replace(/,/g, ''));
          const priceB = parseFloat(b.price.replace(/,/g, ''));
          return priceA - priceB;
        });
      case "price-high":
        return items.sort((a, b) => {
          const priceA = parseFloat(a.price.replace(/,/g, ''));
          const priceB = parseFloat(b.price.replace(/,/g, ''));
          return priceB - priceA;
        });
      case "relevance":
      default:
        // For relevance, we could use rating or original order
        return items.sort((a, b) => b.rating - a.rating);
    }
  }, [productInfo, sortBy]);

  if (!productInfo) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] p-4">
        <h1 className="text-4xl font-bold mb-4">Category Not Found</h1>
        <Button asChild>
          <Link to="/products">Back to All Products</Link>
        </Button>
      </div>
    );
  }

  const sortLabels = {
    "relevance": "Relevance",
    "price-low": "Price: Low to High",
    "price-high": "Price: High to Low"
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-background">
      {/* Header Section */}
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
          <div className="max-w-4xl mx-auto text-center space-y-8">

            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight">
                Our <span className="text-white/90">Products</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                Unlock your potential with our curated selection of high-quality electronics and comprehensive educational kits.
              </p>
            </div>

            {/* Category Switcher */}
            <div className="w-full max-w-2xl mx-auto flex flex-col sm:flex-row p-1.5 bg-white/10 backdrop-blur-md rounded-2xl md:rounded-full border border-white/20 shadow-xl gap-1">
              {Object.keys(productData).map((key) => (
                <Link
                  key={key}
                  to={`/products/${key}`}
                  className={cn(
                    "flex-1 px-4 py-3 sm:py-2.5 rounded-xl md:rounded-full text-xs sm:text-sm font-bold transition-all duration-300 text-center flex items-center justify-center",
                    currentCategory === key
                      ? "bg-white text-primary shadow-lg"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                  )}
                >
                  {productData[key].title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          {/* Controls Bar */}
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-2xl font-bold font-display flex items-center gap-3">
              <productInfo.icon className="w-7 h-7 text-primary" />
              {productInfo.title}
            </h2>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {sortedItems.map((item, index) => (
              <ProductCard key={index} product={item} onOpenDetails={(p) => setSelectedProduct(p)} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 mt-12 relative overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1),transparent)]" />
        <div className="container relative z-10 mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-display font-bold">Custom Educational Solutions</h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Looking for bulk orders or customized kits for your institution? We offer tailored packages and dedicated support.
          </p>
          <div className="pt-2">
            <Button asChild size="lg" variant="secondary" className="rounded-full px-10 h-14 text-base font-bold shadow-xl hover:scale-105 transition-transform">
              <Link to="/contact">Get a Personalized Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Product Details Modal */}
      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-5xl p-0 overflow-hidden bg-white border-none rounded-[2rem] shadow-2xl">
          {selectedProduct && (
            <div className="flex flex-col md:flex-row min-h-[500px]">
              {/* Product Image Section */}
              <div className="flex-1 bg-muted/20 relative p-12 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
                {selectedProduct.image ? (
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-auto max-h-[400px] object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <Package className="w-32 h-32 text-muted" />
                )}
              </div>

              {/* Product Details Section */}
              <div className="flex-1 p-8 md:p-12 flex flex-col relative bg-white">
                <div className="mb-8">
                  <div className="flex items-center gap-2 text-sm font-bold mb-4">
                    <span className="text-muted-foreground uppercase tracking-wider">Status:</span>
                    <span className={cn(
                      "text-green-600",
                      selectedProduct.stockStatus === "Low Stock" && "text-orange-500",
                      selectedProduct.stockStatus === "Out of Stock" && "text-red-500"
                    )}>
                      {selectedProduct.stockStatus}
                    </span>
                  </div>
                  <h2 className="text-4xl font-black font-display mb-4 leading-tight">
                    {selectedProduct.name}
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                    {selectedProduct.desc}
                  </p>

                  <ul className="space-y-4">
                    {selectedProduct.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#1e3a5f] mt-2 shrink-0" />
                        <span className="text-muted-foreground font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Section in Modal */}
                <div className="mt-auto pt-8 border-t border-muted flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">Total Price</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-xl font-bold">₹</span>
                      <span className="text-4xl font-black">{selectedProduct.price}</span>
                    </div>
                  </div>
                  <Button
                    className="rounded-2xl px-10 h-14 text-lg font-bold bg-[#1e3a5f] hover:bg-[#152e4d] text-white shadow-xl shadow-blue-900/20 transition-all flex items-center gap-3"
                    onClick={() => {
                      const message = encodeURIComponent(`Hello! I'm interested in the ${selectedProduct.name} priced at ₹${selectedProduct.price}. Please provide more details.`);
                      window.open(`https://wa.me/919531428622?text=${message}`, "_blank");
                    }}
                  >
                    <ShoppingCart className="w-5 h-5" />
                    <span>Add to Cart</span>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Products;
