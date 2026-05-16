"use client";

import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import content from '../data/content.json';

export default function Clients() {
  const { clients } = content;

  return (
    <section id="clientes" className="clients">
      <div className="container">
        <div className="section-header" style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="section-subtitle">Testimonios</span>
          <h2 className="section-title white">Qué dicen nuestros clientes</h2>
        </div>

        <div className="testimonials-grid">
          {clients.map((client, index) => (
            <motion.div 
              key={client.id}
              className="testimonial-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <div className="quote-icon" style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center', color: 'var(--primary)' }}>
                <Quote size={32} fill="var(--primary)" />
              </div>
              <p className="comment" style={{ fontSize: '1.1rem', fontStyle: 'italic', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '25px' }}>
                "{client.comment}"
              </p>
              <div className="stars" style={{ display: 'flex', justifyContent: 'center', gap: '5px', marginBottom: '20px' }}>
                {[...Array(client.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="var(--primary)" color="var(--primary)" />
                ))}
              </div>
              <h4 className="name" style={{ color: 'white', marginBottom: '5px' }}>{client.name}</h4>
              <span className="role" style={{ fontSize: '0.8rem', color: 'var(--primary)', textTransform: 'uppercase' }}>
                Cliente Verificado
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
