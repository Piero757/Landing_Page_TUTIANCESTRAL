"use client";

import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import content from '../data/content.json';

export default function Clients() {
  const { clients } = content;

  return (
    <section id="clientes" className="clients" style={{ padding: '120px 5%' }}>
      <div className="container">
        <div className="section-header" style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="section-subtitle">Testimonios</span>
          <h2 className="section-title white">Qué dicen nuestros clientes</h2>
        </div>

        <div className="testimonials-grid">
          {clients.map((client, index) => (
            <motion.div 
              key={client.id}
              className="testimonial-card glass"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <div className="quote-icon" style={{ position: 'absolute', top: '-20px', left: '50%', transform: 'translateX(-50%)', background: 'var(--background)', padding: '10px', borderRadius: '50%', border: '1px solid var(--glass-border)' }}>
                <Quote size={40} fill="var(--primary)" color="var(--primary)" />
              </div>
              <p className="comment" style={{ fontSize: '1.1rem', fontStyle: 'italic', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '25px', lineHeight: '1.8' }}>
                "{client.comment}"
              </p>
              <div className="stars" style={{ display: 'flex', justifyContent: 'center', gap: '5px', marginBottom: '20px' }}>
                {[...Array(client.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="var(--primary)" color="var(--primary)" />
                ))}
              </div>
              <h4 className="name" style={{ fontSize: '1.2rem', color: 'white', marginBottom: '5px' }}>{client.name}</h4>
              <span className="role" style={{ fontSize: '0.8rem', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Cliente Verificado
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
