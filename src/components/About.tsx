"use client";

import { motion } from 'framer-motion';
import content from '../data/content.json';

export default function About() {
  const { about } = content;

  return (
    <section id="nosotros" className="about">
      <div className="container about-grid">
        <motion.div 
          className="about-image"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="img-wrapper">
             <img src={about.image} alt="Tuti Ancestral - Cultura y Tradición" />
          </div>
          <div className="experience-badge">
            <span className="number">TUTI</span>
            <span className="text">Corazón del Colca</span>
          </div>
        </motion.div>

        <motion.div 
          className="about-text"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-subtitle">Conoce nuestra historia</span>
          <h2 className="section-title">{about.title}</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '30px' }}>{about.content}</p>
          <div className="features">
            <div className="feature">
              <h3 style={{ color: 'var(--primary)', marginBottom: '10px' }}>Visión</h3>
              <p>Ser el referente de turismo cultural vivencial, preservando la identidad de nuestra comunidad para el mundo.</p>
            </div>
            <div className="feature">
              <h3 style={{ color: 'var(--primary)', marginBottom: '10px' }}>Misión</h3>
              <p>Facilitar el encuentro entre viajeros y la cultura andina a través de experiencias humanas y respetuosas.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
