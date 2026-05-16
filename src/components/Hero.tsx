"use client";

import { motion } from 'framer-motion';
import content from '../data/content.json';

export default function Hero() {
  const { hero } = content;

  return (
    <section id="inicio" className="hero" style={{ backgroundImage: `url(${hero.image})` }}>
      <div className="hero-overlay"></div>
      <div className="hero-content container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="hero-badge">Turismo & Gastronomía</span>
          <h1>{hero.title}</h1>
          <p>{hero.subtitle}</p>
          <div className="hero-btns">
            <a href="#contacto" className="btn btn-primary">{hero.cta}</a>
            <a href="#nosotros" className="btn btn-outline">Conocer Más</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
