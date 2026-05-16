"use client";

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
            <img src="/images/logo.jpeg" alt="Logo" style={{ width: '60px', height: '60px', borderRadius: '10px' }} />
            <Link href="/" className="logo" style={{ margin: 0 }}>
              TUTI<span>ANCESTRAL</span>
            </Link>
          </div>
          <p style={{ color: 'var(--text-muted)', margin: '20px 0', fontSize: '0.95rem' }}>
            Promoviendo la cultura y tradiciones del Valle del Colca a través del turismo vivencial y auténtico.
          </p>
          <div className="social-links">
            <a href="#" aria-label="Facebook">FB</a>
            <a href="#" aria-label="Instagram">IG</a>
            <a href="#" aria-label="TikTok">TK</a>
          </div>
        </div>

        <div className="footer-links">
          <h4 style={{ color: 'white', marginBottom: '25px', fontSize: '1.2rem' }}>Explora</h4>
          <ul style={{ padding: 0 }}>
            <li style={{ marginBottom: '15px' }}><a href="#inicio" style={{ color: 'var(--text-muted)' }}>Inicio</a></li>
            <li style={{ marginBottom: '15px' }}><a href="#nosotros" style={{ color: 'var(--text-muted)' }}>Sobre Tuti</a></li>
            <li style={{ marginBottom: '15px' }}><a href="#servicios" style={{ color: 'var(--text-muted)' }}>Experiencias</a></li>
            <li style={{ marginBottom: '15px' }}><a href="#galeria" style={{ color: 'var(--text-muted)' }}>Galería</a></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4 style={{ color: 'white', marginBottom: '25px', fontSize: '1.2rem' }}>Información</h4>
          <ul style={{ padding: 0 }}>
            <li style={{ marginBottom: '15px' }}><a href="#" style={{ color: 'var(--text-muted)' }}>Cómo Llegar</a></li>
            <li style={{ marginBottom: '15px' }}><a href="#" style={{ color: 'var(--text-muted)' }}>Clima en Tuti</a></li>
            <li style={{ marginBottom: '15px' }}><a href="#" style={{ color: 'var(--text-muted)' }}>Recomendaciones</a></li>
          </ul>
        </div>

        <div className="footer-newsletter">
          <h4 style={{ color: 'white', marginBottom: '25px', fontSize: '1.2rem' }}>Únete</h4>
          <p style={{ color: 'var(--text-muted)', marginBottom: '20px' }}>Recibe novedades sobre nuestras actividades comunitarias.</p>
          <form className="newsletter-form" style={{ display: 'flex', gap: '10px' }}>
            <input 
              type="email" 
              placeholder="Tu email" 
              style={{ flex: 1, background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '12px', borderRadius: '8px', color: 'white' }} 
            />
            <button type="submit" className="btn btn-primary">Ok</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom" style={{ textAlign: 'center', paddingTop: '40px', borderTop: '1px solid rgba(255, 255, 255, 0.05)', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
        <p>&copy; {new Date().getFullYear()} Tuti Ancestral. Todos los derechos reservados. Diseñado por Piero.</p>
      </div>
    </footer>
  );
}
