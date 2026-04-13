import * as React from "react";

export function Section({ id, title, children, rightAction }: { id?: string, title: string, children?: React.ReactNode, rightAction?: React.ReactNode }) {
  return (
    <section id={id} style={{ padding: '80px 20px' }} className="section-container">
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div className="section-header">
          <h2 style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ display: 'block', width: '8px', height: '32px', background: 'var(--accent)' }}></span>
            {title}
          </h2>
          {rightAction}
        </div>
        {children}
      </div>
    </section>
  );
}

export function SkillTag({ label, type = 'default' }: { label: string, type?: 'tech' | 'design' | 'default', key?: React.Key }) {
  return (
    <span className="tag" style={{
      padding: '4px 12px',
      backgroundColor: 'rgba(0,0,0,0.3)',
      border: '1px solid var(--border)',
      color: type === 'tech' ? '#a5b4fc' : type === 'design' ? '#fda4af' : 'var(--text-secondary)',
      fontSize: '0.85rem',
      borderLeft: type === 'tech' ? '2px solid #a5b4fc' : type === 'design' ? '2px solid #fda4af' : '1px solid var(--border)',
    }}>
      {label}
    </span>
  );
}

export function ImageModal({ src, onClose }: { src: string | null, onClose: () => void }) {
  if (!src) return null;

  return (
    <div 
      style={{ 
        position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', 
        backgroundColor: 'rgba(0,0,0,0.9)', zIndex: 9999, display: 'flex', 
        alignItems: 'center', justifyContent: 'center', cursor: 'zoom-out',
        backdropFilter: 'blur(8px)'
      }}
      onClick={onClose}
    >
      <div style={{ position: 'relative', maxWidth: '90%', maxHeight: '90%' }}>
        <button 
          onClick={onClose}
          style={{ 
            position: 'absolute', top: -40, right: -40, background: 'none', 
            border: 'none', color: '#fff', fontSize: '2rem', cursor: 'pointer' 
          }}
        >
          &times;
        </button>
        <img 
          src={src} 
          alt="Zoomed" 
          style={{ width: '100%', height: '100%', objectFit: 'contain', boxShadow: '0 0 40px rgba(0,0,0,0.5)' }} 
        />
      </div>
    </div>
  );
}
