import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import dress1 from "@/assets/dress-1.jpg";
import dress2 from "@/assets/dress-2.jpg";
import dress3 from "@/assets/dress-3.jpg";
import dress4 from "@/assets/dress-4.jpg";
import dress5 from "@/assets/dress-5.jpg";
import dress6 from "@/assets/dress-6.jpg";

const dresses = [
  {
    id: 1,
    name: "Graceful Lace",
    description: "A-line silhouette with delicate lace details",
    image: dress1,
  },
  {
    id: 2,
    name: "Romantic Mermaid",
    description: "Fitted mermaid style with intricate beading",
    image: dress2,
  },
  {
    id: 3,
    name: "Classic Elegance",
    description: "Timeless ball gown with cathedral train",
    image: dress3,
  },
  {
    id: 4,
    name: "Bohemian Dream",
    description: "Ethereal lace gown with flowing sleeves",
    image: dress4,
  },
  {
    id: 5,
    name: "Modern Minimalist",
    description: "Contemporary design with clean lines",
    image: dress5,
  },
  {
    id: 6,
    name: "Vintage Romance",
    description: "Classic silhouette with vintage-inspired details",
    image: dress6,
  },
];

const Catalogue = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-display text-5xl md:text-6xl mb-4">
              Our Collection
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our carefully curated selection of wedding dresses, each piece a masterpiece of design and craftsmanship
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dresses.map((dress) => (
              <Card 
                key={dress.id} 
                className="group overflow-hidden border-border hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={dress.image}
                    alt={dress.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="font-display text-2xl mb-2">{dress.name}</h3>
                  <p className="text-muted-foreground">{dress.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalogue;
