"use client";

import { motion } from 'framer-motion';
import { Bed, Utensils, Map, Waves, Wifi, Car } from 'lucide-react';
import content from '../data/content.json';

const iconMap: any = {
  Bed: <Bed size={40} />,
  Utensils: <Utensils size={40} />,
  Map: <Map size={40} />,
};

export default function Services() {
  const { services } = content;

  return (
    <section id="servicios" className="services">
      <div className="container">
        <div className="section-header" style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="section-subtitle">Nuestros Servicios</span>
          <h2 className="section-title white">Lo que ofrecemos para ti</h2>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              className="service-card glass"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <div className="service-icon">
                {iconMap[service.icon]}
              </div>
              <h3 style={{ color: 'white', marginBottom: '15px' }}>{service.title}</h3>
              <p style={{ color: 'var(--text-muted)' }}>{service.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="amenities-row">
            <div className="amenity"><Wifi size={20}/> <span style={{ color: 'white' }}>Wifi Gratis</span></div>
            <div className="amenity"><Waves size={20}/> <span style={{ color: 'white' }}>Piscina</span></div>
            <div className="amenity"><Car size={20}/> <span style={{ color: 'white' }}>Parking</span></div>
        </div>
      </div>
    </section>
  );
}
