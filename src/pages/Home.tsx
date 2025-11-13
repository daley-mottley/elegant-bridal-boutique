import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import heroImage from "@/assets/hero-wedding.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Hero Image Background */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Elegant wedding dress"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background/60" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="font-display text-6xl md:text-8xl mb-6 text-foreground animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Where Dreams Meet Elegance
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-muted-foreground font-light animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
            Discover your perfect wedding dress from our exquisite collection
          </p>
          <div className="flex gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            <Link to="/catalogue">
              <Button size="lg" className="text-base px-8">
                View Collection
              </Button>
            </Link>
            <Link to="/gallery">
              <Button size="lg" variant="outline" className="text-base px-8">
                See Our Brides
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-muted-foreground/30 rounded-full" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-display text-4xl md:text-5xl mb-6">
            Timeless Elegance
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            At Élégance Bridal, we believe every bride deserves to feel extraordinary on her special day. 
            Our curated collection features the finest wedding dresses, each designed with meticulous attention 
            to detail and crafted from the most luxurious fabrics. From classic ball gowns to contemporary 
            silhouettes, find the dress that tells your unique love story.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
