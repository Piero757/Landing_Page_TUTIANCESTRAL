"use client";

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link href="/" className="logo">
            TURISM<span>.</span>
          </Link>
          <p style={{ color: 'var(--text-muted)', margin: '20px 0', fontSize: '0.95rem' }}>
            Ofreciendo experiencias exclusivas desde 2010. Tu confort es nuestra prioridad.
          </p>
          <div className="social-links">
            <a href="#">FB</a>
            <a href="#">IG</a>
            <a href="#">X</a>
          </div>
        </div>

        <div className="footer-links">
          <h4 style={{ color: 'white', marginBottom: '25px', fontSize: '1.2rem' }}>Enlaces Rápidos</h4>
          <ul style={{ padding: 0 }}>
            <li style={{ marginBottom: '15px' }}><a href="#inicio" style={{ color: 'var(--text-muted)' }}>Inicio</a></li>
            <li style={{ marginBottom: '15px' }}><a href="#nosotros" style={{ color: 'var(--text-muted)' }}>Quiénes Somos</a></li>
            <li style={{ marginBottom: '15px' }}><a href="#servicios" style={{ color: 'var(--text-muted)' }}>Servicios</a></li>
            <li style={{ marginBottom: '15px' }}><a href="#galeria" style={{ color: 'var(--text-muted)' }}>Galería</a></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4 style={{ color: 'white', marginBottom: '25px', fontSize: '1.2rem' }}>Legal</h4>
          <ul style={{ padding: 0 }}>
            <li style={{ marginBottom: '15px' }}><a href="#" style={{ color: 'var(--text-muted)' }}>Términos y Condiciones</a></li>
            <li style={{ marginBottom: '15px' }}><a href="#" style={{ color: 'var(--text-muted)' }}>Política de Privacidad</a></li>
            <li style={{ marginBottom: '15px' }}><a href="#" style={{ color: 'var(--text-muted)' }}>Cookies</a></li>
          </ul>
        </div>

        <div className="footer-newsletter">
          <h4 style={{ color: 'white', marginBottom: '25px', fontSize: '1.2rem' }}>Boletín</h4>
          <p style={{ color: 'var(--text-muted)', marginBottom: '20px' }}>Suscríbete para recibir ofertas exclusivas.</p>
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
        <p>&copy; 2026 LuxuryStay. Todos los derechos reservados. Diseñado por Piero.</p>
      </div>
    </footer>
  );
}
