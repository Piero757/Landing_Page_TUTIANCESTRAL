"use client";

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import content from '../data/content.json';

export default function Contact() {
  const { contact } = content;

  return (
    <section id="contacto" className="contact" style={{ backgroundColor: 'var(--background)', padding: '120px 5%' }}>
      <div className="container">
        <div className="contact-grid">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-subtitle">Contacto</span>
            <h2 className="section-title white">¿Tienes preguntas? Contáctanos</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '40px' }}>
              Estamos aquí para ayudarte a planear tu próxima aventura o evento especial.
            </p>

            <div className="info-items">
              <div className="info-item">
                <div className="icon-box"><Phone size={24} /></div>
                <div>
                  <h4 style={{ color: 'white', marginBottom: '5px' }}>Teléfono</h4>
                  <p style={{ margin: 0, fontSize: '0.95rem' }}>{contact.phone}</p>
                </div>
              </div>
              <div className="info-item">
                <div className="icon-box"><Mail size={24} /></div>
                <div>
                  <h4 style={{ color: 'white', marginBottom: '5px' }}>Email</h4>
                  <p style={{ margin: 0, fontSize: '0.95rem' }}>{contact.email}</p>
                </div>
              </div>
              <div className="info-item">
                <div className="icon-box"><MapPin size={24} /></div>
                <div>
                  <h4 style={{ color: 'white', marginBottom: '5px' }}>Ubicación</h4>
                  <p style={{ margin: 0, fontSize: '0.95rem' }}>{contact.address}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="contact-form glass"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form action="https://formspree.io/f/TU_ID_AQUI" method="POST">
              <div className="form-group">
                <label style={{ display: 'block', color: 'white', marginBottom: '10px', fontSize: '0.9rem' }}>Nombre Completo</label>
                <input type="text" name="name" placeholder="Ej. Juan Pérez" required />
              </div>
              <div className="form-group">
                <label style={{ display: 'block', color: 'white', marginBottom: '10px', fontSize: '0.9rem' }}>Correo Electrónico</label>
                <input type="email" name="email" placeholder="juan@ejemplo.com" required />
              </div>
              <div className="form-group">
                <label style={{ display: 'block', color: 'white', marginBottom: '10px', fontSize: '0.9rem' }}>Mensaje</label>
                <textarea name="message" rows={4} placeholder="¿En qué podemos ayudarte?" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                Enviar Mensaje <Send size={18} style={{ marginLeft: '10px' }} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
