"use client";

import { motion } from 'framer-motion';
import { Users, Utensils, Mountain, Palette, Home, Heart, Wifi, Waves, Car } from 'lucide-react';
import content from '../data/content.json';

const iconMap: any = {
  Users: <Users size={40} />,
  Utensils: <Utensils size={40} />,
  Mountain: <Mountain size={40} />,
  Palette: <Palette size={40} />,
  Home: <Home size={40} />,
  Heart: <Heart size={40} />,
};

export default function Services() {
  const { services } = content;

  return (
    <section id="servicios" className="services">
      <div className="container">
        <div className="section-header" style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="section-subtitle">Nuestras Experiencias</span>
          <h2 className="section-title white">Sumérgete en la cultura de Tuti</h2>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              className="service-card glass"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                y: -15, 
                transition: { duration: 0.3 }
              }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
            >
              <motion.div 
                className="service-icon"
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                {iconMap[service.icon]}
              </motion.div>
              <h3 style={{ color: 'white', marginBottom: '15px' }}>{service.title}</h3>
              <p style={{ color: 'var(--text-muted)' }}>{service.description}</p>
              
              <motion.div 
                className="card-line"
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                style={{ 
                  height: '2px', 
                  background: 'var(--primary)', 
                  marginTop: '20px',
                  borderRadius: '1px'
                }}
              />
            </motion.div>
          ))}
        </div>

        <div className="amenities-row">
            <div className="amenity"><Wifi size={20}/> <span style={{ color: 'white' }}>Wifi en zonas comunes</span></div>
            <div className="amenity"><Mountain size={20}/> <span style={{ color: 'white' }}>Vistas al Valle</span></div>
            <div className="amenity"><Users size={20}/> <span style={{ color: 'white' }}>Guías Locales</span></div>
        </div>
      </div>
    </section>
  );
}
