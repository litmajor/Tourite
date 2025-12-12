import heroImage from "@assets/generated_images/african_savanna_with_elephants_at_golden_hour.png";
import zanzibarImage from "@assets/generated_images/pristine_zanzibar_beach_with_turquoise_water.png";
import kiliImage from "@assets/generated_images/mount_kilimanjaro_landscape.png";
import gorillaImage from "@assets/generated_images/mountain_gorilla_in_rainforest.png";

export const tours = [
  {
    id: "masai-mara-safari",
    title: "Masai Mara Migration Safari",
    category: "Safari",
    duration: "3 Days / 2 Nights",
    price: 1200,
    image: heroImage,
    description: "Witness the Great Migration in the world-famous Masai Mara. Includes game drives, luxury tented camp accommodation, and expert guides.",
    featured: true,
  },
  {
    id: "zanzibar-beach-escape",
    title: "Zanzibar Beach Escape",
    category: "Beach",
    duration: "5 Days / 4 Nights",
    price: 850,
    image: zanzibarImage,
    description: "Relax on the pristine white sands of Zanzibar. Snorkeling, spice tours, and sunset dhow cruises included.",
    featured: true,
  },
  {
    id: "kilimanjaro-climb",
    title: "Kilimanjaro Machame Route",
    category: "Adventure",
    duration: "7 Days / 6 Nights",
    price: 2100,
    image: kiliImage,
    description: "Conquer the roof of Africa via the scenic Machame Route. Full support team, high success rate, and breathtaking views.",
    featured: true,
  },
  {
    id: "uganda-gorilla-trek",
    title: "Bwindi Gorilla Trekking",
    category: "Adventure",
    duration: "4 Days / 3 Nights",
    price: 1800,
    image: gorillaImage,
    description: "A once-in-a-lifetime encounter with mountain gorillas in Bwindi Impenetrable Forest. Permits included.",
    featured: false,
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Traveler from UK",
    text: "The safari of a lifetime! Our guide was incredibly knowledgeable and we saw the Big 5 on our first day. Highly recommended!",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Photographer",
    text: "As a photographer, the lighting and positioning were perfect. The team knew exactly where to go for the best shots.",
  },
  {
    id: 3,
    name: "Emma & David",
    role: "Honeymooners",
    text: "Zanzibar was pure magic. The resort recommendation was spot on. Thank you for making our honeymoon so special.",
  }
];
