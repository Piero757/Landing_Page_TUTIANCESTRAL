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
             <img src={about.image} alt="Sobre nosotros" />
          </div>
          <div className="experience-badge">
            <span className="number">15+</span>
            <span className="text">Años de Experiencia</span>
          </div>
        </motion.div>

        <motion.div 
          className="about-text"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-subtitle">Descubre nuestra historia</span>
          <h2 className="section-title">{about.title}</h2>
          <p>{about.content}</p>
          <div className="features">
            <div className="feature">
              <h3>Visión</h3>
              <p>Ser el referente de hospitalidad y sabor en la región.</p>
            </div>
            <div className="feature">
              <h3>Misión</h3>
              <p>Brindar experiencias memorables que superen expectativas.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
