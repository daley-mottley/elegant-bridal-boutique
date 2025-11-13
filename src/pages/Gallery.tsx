import { useState } from "react";
import Navigation from "@/components/Navigation";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";
import testimonial4 from "@/assets/testimonial-4.jpg";
import testimonial5 from "@/assets/testimonial-5.jpg";
import testimonial6 from "@/assets/testimonial-6.jpg";

const testimonials = [
  {
    id: 1,
    image: testimonial1,
    name: "Sarah Mitchell",
    quote: "The dress of my dreams! I felt like a princess on my special day.",
  },
  {
    id: 2,
    image: testimonial2,
    name: "Emma Thompson",
    quote: "Absolutely stunning craftsmanship and perfect fit. I couldn't have asked for more.",
  },
  {
    id: 3,
    image: testimonial3,
    name: "Olivia Parker",
    quote: "Élégance Bridal made my wedding day magical with this beautiful gown.",
  },
  {
    id: 4,
    image: testimonial4,
    name: "Isabella Chen",
    quote: "Modern elegance at its finest. I felt confident and beautiful.",
  },
  {
    id: 5,
    image: testimonial5,
    name: "Sophia Rodriguez",
    quote: "A romantic dream come true. The quality and design exceeded all expectations.",
  },
  {
    id: 6,
    image: testimonial6,
    name: "Ava Williams",
    quote: "Timeless beauty. This dress will be treasured in my family for generations.",
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openFullscreen = (index: number) => {
    setSelectedImage(index);
  };

  const closeFullscreen = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return;
    
    if (direction === "prev") {
      setSelectedImage(selectedImage === 0 ? testimonials.length - 1 : selectedImage - 1);
    } else {
      setSelectedImage(selectedImage === testimonials.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-display text-5xl md:text-6xl mb-4">
              Our Beautiful Brides
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See the joy and elegance of our brides wearing their dream dresses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="group relative cursor-pointer overflow-hidden rounded-lg aspect-square"
                onClick={() => openFullscreen(index)}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="font-display text-xl mb-2">{testimonial.name}</p>
                    <p className="text-sm italic">{testimonial.quote}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Slider */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white hover:bg-white/10"
            onClick={closeFullscreen}
          >
            <X className="h-6 w-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10"
            onClick={() => navigateImage("prev")}
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>

          <div className="max-w-7xl max-h-[90vh] mx-auto px-20">
            <img
              src={testimonials[selectedImage].image}
              alt={testimonials[selectedImage].name}
              className="w-full h-full object-contain"
            />
            <div className="text-center mt-6 text-white">
              <p className="font-display text-2xl mb-2">{testimonials[selectedImage].name}</p>
              <p className="text-lg italic">{testimonials[selectedImage].quote}</p>
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10"
            onClick={() => navigateImage("next")}
          >
            <ChevronRight className="h-8 w-8" />
          </Button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
            {selectedImage + 1} / {testimonials.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
