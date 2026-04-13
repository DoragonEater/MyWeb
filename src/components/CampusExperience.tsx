import * as React from "react";
import { useState } from "react";
import { IconChevronLeft, IconChevronRight } from "./Icons";
import { RESUME_DATA } from "../data";
import { ImageModal } from "./Shared";

function ImageCarousel({ images, onZoom }: { images: string[], onZoom: (src: string) => void }) {
  const [idx, setIdx] = useState(0);

  const next = () => setIdx((i) => (i + 1) % images.length);
  const prev = () => setIdx((i) => (i - 1 + images.length) % images.length);

  if (!images || images.length === 0) return null;

  return (
    <div className="carousel-container">
      <div className="carousel-zoom-hint">双击放大图片</div>
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="carousel-btn left"
          >
            <IconChevronLeft />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="carousel-btn right"
          >
            <IconChevronRight />
          </button>
        </>
      )}
      <img
        src={images[idx]}
        alt="Experience proof"
        onDoubleClick={() => onZoom(images[idx])}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
      {images.length > 1 && (
        <div style={{ position: 'absolute', bottom: 10, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 6, zIndex: 10 }}>
          {images.map((_, i) => (
            <div key={i} style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: i === idx ? 'var(--gold)' : 'rgba(255,255,255,0.4)' }} />
          ))}
        </div>
      )}
    </div>
  );
}

export function CampusExperience() {
  const [zoomedImg, setZoomedImg] = useState<string | null>(null);
  const items = RESUME_DATA.experience;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', marginBottom: '60px' }}>
      {items.map((item, idx) => (
        <div key={idx} className="glass-panel" style={{ padding: '40px', borderRadius: '2px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', flexWrap: 'wrap', gap: '8px' }}>
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: 'var(--text-main)' }}>{item.role}</h3>
              <div style={{ color: 'var(--accent)', fontSize: '1.1rem', marginTop: '4px' }}>{item.company}</div>
            </div>
            <div style={{ color: 'var(--text-secondary)', fontFamily: 'monospace' }}>{item.period}</div>
          </div>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#ccc', maxWidth: '800px', marginBottom: '20px', whiteSpace: 'pre-wrap' }}>
            {item.description}
          </p>

          {item.images && item.images.length > 0 && (
            <ImageCarousel images={item.images} onZoom={(src) => setZoomedImg(src)} />
          )}
        </div>
      ))}
      <ImageModal src={zoomedImg} onClose={() => setZoomedImg(null)} />
    </div>
  );
}
