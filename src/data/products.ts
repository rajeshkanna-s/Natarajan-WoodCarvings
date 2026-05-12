export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  category: string;
}

export const products: Product[] = [
  // ===== JPG Images (1-30) =====
  { id: 1, name: 'Lord Venkateshwara with Prabhavali', description: 'Intricately carved Tirupati Balaji standing statue with ornate arch and rosewood finish.', image: '/images/gallery/product-1.jpg', category: 'Deity Statues' },
  { id: 2, name: 'Hanuman in Namaste Pose (Painted)', description: 'Colorful painted Hanuman statue in devotional namaste posture with vibrant detailing.', image: '/images/gallery/product-2.jpg', category: 'Deity Statues' },
  { id: 3, name: 'Lord Venkateshwara — Grand Arch', description: 'Majestic Balaji carving with elaborate prabhavali arch, traditional rosewood craftsmanship.', image: '/images/gallery/product-3.jpg', category: 'Deity Statues' },
  { id: 4, name: 'Lord Vishnu Seated (Painted)', description: 'Four-armed Vishnu seated on lotus in vibrant painted finish with chakra and conch.', image: '/images/gallery/product-4.jpg', category: 'Deity Statues' },
  { id: 5, name: 'Lord Venkateshwara — Premium Finish', description: 'Large-scale Tirupati Balaji with gilded accents and intricate jewelry detailing.', image: '/images/gallery/product-5.jpg', category: 'Deity Statues' },
  { id: 6, name: 'Lord Ganesha Seated (Painted)', description: 'Four-armed Ganesha seated on pedestal, hand-painted in traditional temple colors.', image: '/images/gallery/product-6.jpg', category: 'Deity Statues' },
  { id: 7, name: 'Lord Ganesha with Prabhavali (Painted)', description: 'Dancing Ganesha with ornate circular prabhavali, richly painted in vivid hues.', image: '/images/gallery/product-7.jpg', category: 'Deity Statues' },
  { id: 8, name: 'Lord Ganesha on Lotus (Painted)', description: 'Ganesha seated on blooming lotus with green and gold painted finish.', image: '/images/gallery/product-8.jpg', category: 'Deity Statues' },
  { id: 9, name: 'Goddess Saraswati Panel', description: 'Standing Saraswati with veena and peacock, carved into a tall decorative panel.', image: '/images/gallery/product-9.jpg', category: 'Wall Mounts' },
  { id: 10, name: 'Dashavataram Ceiling Panel', description: 'Square ceiling panel depicting the ten avatars of Vishnu in circular medallion design.', image: '/images/gallery/product-10.jpg', category: 'Wall Mounts' },
  { id: 11, name: 'Lord Krishna with Cow (Painted Panel)', description: 'Krishna playing flute with sacred cow, painted panel with nature-inspired canopy.', image: '/images/gallery/product-11.jpg', category: 'Deity Statues' },
  { id: 12, name: 'Lord Ganesha with Halo (Painted)', description: 'Four-armed seated Ganesha with circular halo, painted in green and gold finish.', image: '/images/gallery/product-12.jpg', category: 'Deity Statues' },
  { id: 13, name: 'Lord Ganesha with Cobra Hood', description: 'Natural wood finish Ganesha with five-headed cobra canopy, traditional style.', image: '/images/gallery/product-13.jpg', category: 'Deity Statues' },
  { id: 14, name: 'Lord Venkateshwara — Compact', description: 'Medium-sized Tirupati Balaji with prabhavali arch and golden-toned wood finish.', image: '/images/gallery/product-14.jpg', category: 'Deity Statues' },
  { id: 15, name: 'Lord Venkateshwara — Temple Style', description: 'Grand temple-style Balaji statue with elaborate pillared frame and golden finish.', image: '/images/gallery/product-15.jpg', category: 'Deity Statues' },
  { id: 16, name: 'Elephant & Parrot Wall Bracket', description: 'Traditional wall bracket with carved elephant above and parrot below, rosewood finish.', image: '/images/gallery/product-16.jpg', category: 'Wall Mounts' },
  { id: 17, name: 'Lord Vishnu Standing with Prabhavali', description: 'Standing Vishnu with conch and disc, framed in ornamental arch with lion motifs.', image: '/images/gallery/product-17.jpg', category: 'Deity Statues' },
  { id: 18, name: 'Lord Ganesha — Red Painted', description: 'Four-armed Ganesha in vibrant red-orange painted finish with flower garlands.', image: '/images/gallery/product-18.jpg', category: 'Deity Statues' },
  { id: 19, name: 'Lord Venkateshwara — Dark Rosewood', description: 'Detailed Balaji statue in deep rosewood with prabhavali, classic workshop style.', image: '/images/gallery/product-19.jpg', category: 'Deity Statues' },
  { id: 20, name: 'Lord Ganesha — Orange Painted', description: 'Seated Ganesha on lotus pedestal, painted in bold orange and green tones.', image: '/images/gallery/product-20.jpg', category: 'Deity Statues' },
  { id: 21, name: 'Decorative Elephant on Wheels', description: 'Royal caparisoned elephant on wheeled platform, intricate rosewood temple style.', image: '/images/gallery/product-21.jpg', category: 'Custom Orders' },
  { id: 22, name: 'Goddess Durga Seated', description: 'Seated Durga with weapons and lion vahana, light wood finish with prabhavali.', image: '/images/gallery/product-22.jpg', category: 'Deity Statues' },
  { id: 23, name: 'Parrot Wall Bracket Pair (Painted)', description: 'Matching pair of parrot-shaped wall brackets in vivid green and gold paint.', image: '/images/gallery/product-23.jpg', category: 'Wall Mounts' },
  { id: 24, name: 'Lord Venkateshwara — Light Wood Finish', description: 'Compact Balaji statue in a light wood finish with detailed prabhavali arch.', image: '/images/gallery/product-24.jpg', category: 'Deity Statues' },
  { id: 25, name: 'Royal Elephant — Large', description: 'Life-like large royal elephant with ornate blanket and anklets, rosewood finish.', image: '/images/gallery/product-25.jpg', category: 'Custom Orders' },
  { id: 26, name: 'Parrot Wall Bracket Pair (Natural)', description: 'Traditional parrot brackets in dark natural wood finish, ideal for pooja room entrance.', image: '/images/gallery/product-26.jpg', category: 'Wall Mounts' },
  { id: 27, name: 'Lord Venkateshwara — Golden Finish', description: 'Balaji in warm golden-toned wood with lotus pedestal and ornate frame.', image: '/images/gallery/product-27.jpg', category: 'Deity Statues' },
  { id: 28, name: 'Lord Ganesha — Polished Rosewood', description: 'Four-armed Ganesha on lotus, highly polished rosewood with fine detailing.', image: '/images/gallery/product-28.jpg', category: 'Deity Statues' },
  { id: 29, name: 'Lord Murugan with Valli & Deivanai', description: 'Murugan flanked by his consorts with peacock vahana, light wood triple-figure set.', image: '/images/gallery/product-29.jpg', category: 'Deity Statues' },
  { id: 30, name: 'Elephant Wall Bracket Pair (Painted)', description: 'Decorative elephant brackets in vibrant painted finish, traditional temple style.', image: '/images/gallery/product-30.jpg', category: 'Wall Mounts' },

  // ===== WebP Images (31-60) =====
  { id: 31, name: 'Ganesha Playing Veena — Wall Panel', description: 'Relief panel of Ganesha playing veena in natural wood, framed with floral border.', image: '/images/gallery/product-31.webp', category: 'Wall Mounts' },
  { id: 32, name: 'Shiva-Parvati Dancing Panel (Painted)', description: 'Colorful relief panel depicting cosmic dance of Shiva and Parvati in vivid hues.', image: '/images/gallery/product-32.webp', category: 'Wall Mounts' },
  { id: 33, name: 'Lord Ganesha — Grand Prabhavali', description: 'Large-scale seated Ganesha with ornate arch, deep rosewood workshop piece.', image: '/images/gallery/product-33.webp', category: 'Deity Statues' },
  { id: 34, name: 'Lord Nataraja — Cosmic Dance', description: 'Shiva in the cosmic dance pose within the ring of fire, traditional iconography.', image: '/images/gallery/product-34.webp', category: 'Deity Statues' },
  { id: 35, name: 'Goddess Saraswati with Prabhavali', description: 'Seated Saraswati playing veena with ornate arch frame, dark rosewood finish.', image: '/images/gallery/product-35.webp', category: 'Deity Statues' },
  { id: 36, name: 'Lord Krishna Playing Flute (Painted)', description: 'Standing Krishna with flute and cow in painted finish with vibrant blue skin.', image: '/images/gallery/product-36.webp', category: 'Deity Statues' },
  { id: 37, name: 'Goddess Lakshmi Seated (Painted)', description: 'Lakshmi seated on lotus with elephants, richly painted in traditional temple colors.', image: '/images/gallery/product-37.webp', category: 'Deity Statues' },
  { id: 38, name: 'Lord Ganesha — Dancing Pose (Painted)', description: 'Dancing Ganesha with prabhavali in vibrant painted finish with multicolor details.', image: '/images/gallery/product-38.webp', category: 'Deity Statues' },
  { id: 39, name: 'Lord Venkateshwara — Wall Panel', description: 'Balaji carved as a wall-mounted relief panel, suitable for pooja room display.', image: '/images/gallery/product-39.webp', category: 'Wall Mounts' },
  { id: 40, name: 'Lord Ganesha — Grand Throne (Painted)', description: 'Massive Ganesha on hexagonal throne with painted prabhavali, exhibition piece.', image: '/images/gallery/product-40.webp', category: 'Custom Orders' },
  { id: 41, name: 'Elephant & Peacock Bracket (Painted)', description: 'Wall bracket featuring elephant and peacock motifs in vivid painted finish.', image: '/images/gallery/product-41.webp', category: 'Wall Mounts' },
  { id: 42, name: 'Lord Rama with Bow', description: 'Standing Rama with bow and arrow in traditional warrior pose, natural wood finish.', image: '/images/gallery/product-42.webp', category: 'Deity Statues' },
  { id: 43, name: 'Goddess Lakshmi Standing (Painted)', description: 'Standing Lakshmi bestowing blessings, painted in gold and red temple colors.', image: '/images/gallery/product-43.webp', category: 'Deity Statues' },
  { id: 44, name: 'Lord Ganesha — Miniature Painted', description: 'Compact painted Ganesha statue ideal for home altar or gift giving.', image: '/images/gallery/product-44.webp', category: 'Deity Statues' },
  { id: 45, name: 'Gajalakshmi Ceiling Panel (Painted)', description: 'Square ceiling panel of Lakshmi with elephants, painted in rich temple colors.', image: '/images/gallery/product-45.webp', category: 'Wall Mounts' },
  { id: 46, name: 'Lord Venkateshwara — Rosewood Large', description: 'Grand-scale Balaji with full temple arch, premium rosewood craftsmanship.', image: '/images/gallery/product-46.webp', category: 'Custom Orders' },
  { id: 47, name: 'Lord Shiva Meditating', description: 'Seated Shiva in deep meditation with trident, serene expression in natural wood.', image: '/images/gallery/product-47.webp', category: 'Deity Statues' },
  { id: 48, name: 'Peacock Door Frame Pair', description: 'Ornamental peacock door brackets for traditional entrance framing.', image: '/images/gallery/product-48.webp', category: 'Wall Mounts' },
  { id: 49, name: 'Lord Ganesha — Four-Armed Seated', description: 'Traditional four-armed seated Ganesha with modak and tusk in hand.', image: '/images/gallery/product-49.webp', category: 'Deity Statues' },
  { id: 50, name: 'Hanuman Standing (Painted)', description: 'Standing Hanuman in namaste pose with painted finish and ornamental base.', image: '/images/gallery/product-50.webp', category: 'Deity Statues' },
  { id: 51, name: 'Goddess Parvati Standing', description: 'Graceful standing Parvati with lotus in natural wood finish.', image: '/images/gallery/product-51.webp', category: 'Deity Statues' },
  { id: 52, name: 'Lion Yali Wall Bracket Pair', description: 'Mythical Yali lion brackets for temple or traditional home entrance pillars.', image: '/images/gallery/product-52.webp', category: 'Wall Mounts' },
  { id: 53, name: 'Lord Venkateshwara Panel (Painted)', description: 'Wall panel of Balaji in painted finish with temple-style decorative border.', image: '/images/gallery/product-53.webp', category: 'Wall Mounts' },
  { id: 54, name: 'Lord Ganesha with Veena', description: 'Musical Ganesha playing veena in relaxed pose, natural teak finish.', image: '/images/gallery/product-54.webp', category: 'Deity Statues' },
  { id: 55, name: 'Lord Krishna with Cow & Prabhavali (Painted)', description: 'Krishna playing flute with cow and ornate prabhavali, blue-painted finish.', image: '/images/gallery/product-55.webp', category: 'Deity Statues' },
  { id: 56, name: 'Goddess Saraswati — Standing Panel', description: 'Tall standing Saraswati relief panel with peacock and veena in rosewood.', image: '/images/gallery/product-56.webp', category: 'Wall Mounts' },
  { id: 57, name: 'Lord Ganesha — Temple Entrance Size', description: 'Extra-large Ganesha suitable for temple entrance or mandapam display.', image: '/images/gallery/product-57.webp', category: 'Custom Orders' },
  { id: 58, name: 'Hanuman Carrying Mountain', description: 'Dynamic Hanuman carrying Sanjeevani mountain, action pose in natural wood.', image: '/images/gallery/product-58.webp', category: 'Deity Statues' },
  { id: 59, name: 'Floral Mandala Wall Panel', description: 'Geometric floral mandala wall carving with layered petal detailing.', image: '/images/gallery/product-59.webp', category: 'Wall Mounts' },
  { id: 60, name: 'Lord Krishna with Cow Panel (Painted)', description: 'Krishna with flute and cow in painted panel with ornate floral arch backdrop.', image: '/images/gallery/product-60.webp', category: 'Deity Statues' },
];

export const categories = [
  { id: 'all', label: 'All' },
  { id: 'Deity Statues', label: 'Deity Statues' },
  { id: 'Wall Mounts', label: 'Wall Mounts' },
  { id: 'Custom Orders', label: 'Custom Orders' },
];
