import { useState, useMemo } from 'react';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';
import ImageLightbox from '../components/ImageLightbox';
import './Gallery.css';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filtered = useMemo(() =>
    activeCategory === 'all' ? products : products.filter(p => p.category === activeCategory),
    [activeCategory]
  );

  const lightboxImages = filtered.map(p => ({ src: p.image, alt: p.name }));

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="gallery-page" id="gallery-page">
      <section className="gallery-hero">
        <div className="container">
          <span className="badge badge-gold">🪵 Our Products</span>
          <h1>Products</h1>
          <p className="section-subtitle">
            Explore our handcrafted masterpieces — from divine deity statues to contemporary wall art.
            Each piece is unique, carved with devotion and decades of expertise.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="gallery-filters" id="gallery-filters">
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`gallery-filter-btn ${activeCategory === cat.id ? 'gallery-filter-btn--active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
                {cat.id !== 'all' && (
                  <span className="gallery-filter-count">
                    {products.filter(p => p.category === cat.id).length}
                  </span>
                )}
              </button>
            ))}
          </div>

          <div className="gallery-masonry" id="gallery-grid">
            {filtered.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={() => openLightbox(index)}
                index={index}
              />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="gallery-empty">
              <p>No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <ImageLightbox
        images={lightboxImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setLightboxIndex}
        productName={filtered[lightboxIndex]?.name}
      />
    </div>
  );
}
