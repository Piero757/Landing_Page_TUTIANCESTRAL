"use client";

import { useState, useEffect } from 'react';

export default function AdminPage() {
  const [content, setContent] = useState<any>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/content')
      .then(res => res.json())
      .then(data => setContent(data));
  }, []);

  const handleSave = async () => {
    setIsSaving(true);
    const res = await fetch('/api/content', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(content)
    });
    const data = await res.json();
    setMessage(data.message || data.error);
    setIsSaving(false);
    setTimeout(() => setMessage(''), 3000);
  };

  if (!content) return <div className="loading">Cargando administrador...</div>;

  return (
    <div className="admin-container">
      <header>
        <h1>Panel de Administración</h1>
        <button className="btn btn-primary" onClick={handleSave} disabled={isSaving}>
          {isSaving ? 'Guardando...' : 'Guardar Cambios'}
        </button>
      </header>

      {message && <div className="alert">{message}</div>}

      <div className="admin-grid">
        <section className="admin-section glass">
          <h2>Sección Hero</h2>
          <div className="input-group">
            <label>Título</label>
            <input 
              value={content.hero.title} 
              onChange={e => setContent({...content, hero: {...content.hero, title: e.target.value}})}
            />
          </div>
          <div className="input-group">
            <label>Subtítulo</label>
            <textarea 
              value={content.hero.subtitle} 
              onChange={e => setContent({...content, hero: {...content.hero, subtitle: e.target.value}})}
            />
          </div>
        </section>

        <section className="admin-section glass">
          <h2>Sección Nosotros</h2>
          <div className="input-group">
            <label>Título</label>
            <input 
              value={content.about.title} 
              onChange={e => setContent({...content, about: {...content.about, title: e.target.value}})}
            />
          </div>
          <div className="input-group">
            <label>Contenido</label>
            <textarea 
              value={content.about.content} 
              onChange={e => setContent({...content, about: {...content.about, content: e.target.value}})}
            />
          </div>
        </section>

        <section className="admin-section glass">
          <h2>Servicios</h2>
          {content.services.map((service: any, idx: number) => (
            <div key={idx} className="service-edit">
              <input 
                value={service.title} 
                onChange={e => {
                  const newServices = [...content.services];
                  newServices[idx].title = e.target.value;
                  setContent({...content, services: newServices});
                }}
              />
              <textarea 
                value={service.description} 
                onChange={e => {
                  const newServices = [...content.services];
                  newServices[idx].description = e.target.value;
                  setContent({...content, services: newServices});
                }}
              />
            </div>
          ))}
        </section>
      </div>

      <style jsx>{`
        .admin-container {
          padding: 40px;
          max-width: 1000px;
          margin: 0 auto;
          color: white;
        }

        header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
        }

        .alert {
          background: var(--primary);
          padding: 15px;
          border-radius: 10px;
          margin-bottom: 20px;
          text-align: center;
        }

        .admin-grid {
          display: grid;
          gap: 30px;
        }

        .admin-section {
          padding: 30px;
        }

        .admin-section h2 {
          margin-bottom: 20px;
          color: var(--primary);
        }

        .input-group {
          margin-bottom: 20px;
        }

        .input-group label {
          display: block;
          margin-bottom: 8px;
          font-size: 0.9rem;
        }

        .input-group input, 
        .input-group textarea,
        .service-edit input,
        .service-edit textarea {
          width: 100%;
          padding: 12px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 8px;
          color: white;
          font-family: inherit;
        }

        .service-edit {
          margin-bottom: 20px;
          padding-bottom: 20px;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }

        .service-edit input {
          margin-bottom: 10px;
        }
      `}</style>
    </div>
  );
}
