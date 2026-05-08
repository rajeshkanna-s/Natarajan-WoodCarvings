export interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  product: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Rajesh Sharma',
    location: 'New Delhi, India',
    rating: 5,
    text: 'The Nataraja statue I ordered is absolutely breathtaking. Every detail of the cosmic dance is captured with such precision. My home temple feels truly divine now. The craftsmanship is world-class!',
    product: 'Dancing Nataraja (3ft)',
  },
  {
    id: 2,
    name: 'Priya Venkatesh',
    location: 'Chennai, Tamil Nadu',
    rating: 5,
    text: 'I ordered a custom Ganesha panel for my new home entrance. Mr. Natarajan personally ensured every detail matched my vision. The GI-tagged quality is evident in every chisel mark. Truly a heritage piece.',
    product: 'Custom Ganesha Panel',
  },
  {
    id: 3,
    name: 'Michael Thompson',
    location: 'London, United Kingdom',
    rating: 5,
    text: 'Shipped internationally with impeccable packaging. The wall mount arrived in perfect condition. The level of detail in the Dashavatar panel is museum-worthy. Will definitely order more pieces.',
    product: 'Dashavatar Wall Panel',
  },
  {
    id: 4,
    name: 'Anitha Krishnamurthy',
    location: 'Bengaluru, Karnataka',
    rating: 5,
    text: 'We commissioned a complete pooja mandap for our family temple. The team visited, measured, designed, and delivered a masterpiece. Four generations of craft knowledge shows in their work.',
    product: 'Custom Pooja Mandap',
  },
  {
    id: 5,
    name: 'David Chen',
    location: 'Singapore',
    rating: 5,
    text: 'As an art collector, I appreciate fine craftsmanship. Natarajan WoodCarvings delivers pieces that rival museum collections. The Shiva-Parvati panel is the centerpiece of my Asian art collection.',
    product: 'Shiva-Parvati Panel',
  },
  {
    id: 6,
    name: 'Lakshmi Narayanan',
    location: 'Coimbatore, Tamil Nadu',
    rating: 5,
    text: 'The Poompuhar Award is well-deserved. I have been buying from Natarajan sir for over 15 years. Each piece is unique and carries the soul of Tamil Nadu\'s woodcarving tradition.',
    product: 'Multiple Purchases',
  },
];
