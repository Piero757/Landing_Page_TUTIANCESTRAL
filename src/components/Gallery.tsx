"use client";

import { motion } from 'framer-motion';
import content from '../data/content.json';

export default function Gallery() {
  const { gallery } = content;

  return (
    <section id="galeria" className="gallery">
      <div className="container">
        <div className="section-header" style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="section-subtitle">Momentos</span>
          <h2 className="section-title">Galería de Fotos</h2>
        </div>

        <div className="gallery-grid-custom">
          {gallery.map((item, index) => (
            <motion.div 
              key={item.id}
              className={`gallery-item ${index < 2 ? 'item-large' : 'item-small'}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <img src={item.url} alt={item.alt} />
              <div className="gallery-overlay">
                <span style={{ color: 'white', fontWeight: '600' }}>{item.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
