import * as React from "react";
import { IconMail, IconPhone, IconDownload } from "./Icons";
import { RESUME_DATA } from "../data";

export function Header() {
  const { profile } = RESUME_DATA;

  return (
    <header id="header" style={{ 
      position: 'relative', 
      padding: '100px 20px 80px', 
      borderBottom: '4px solid var(--accent)',
      backgroundImage: `url("${profile.headerBackground}")`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.9))',
        zIndex: 0
      }} />

      <div style={{ 
        position: 'absolute', 
        top: 20, 
        left: 20, 
        opacity: 0.15, 
        fontSize: '8rem', 
        fontFamily: 'serif', 
        pointerEvents: 'none', 
        color: 'var(--accent)',
        zIndex: 0
      }}>
        隻狼
      </div>

      <div className="header-actions" style={{ position: 'absolute', top: 20, right: 20, zIndex: 10 }}>
         <a 
           href="/PDF/27届游戏策划 张鑫龙 河北工程大学.pdf" 
           download="张鑫龙-27届游戏策划-个人简历.pdf"
           className="btn-download"
           style={{ display: 'inline-flex', textDecoration: 'none' }}
         >
           <IconDownload /> <span>下载 PDF</span>
         </a>
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <div style={{ marginBottom: '32px' }}>
          <img 
            src={profile.avatar} 
            alt={profile.name} 
            className="avatar-img"
          />
        </div>

        <h1 style={{ 
          fontSize: '3.5rem', 
          fontWeight: '700', 
          marginBottom: '16px', 
          color: 'var(--text-main)',
          textShadow: '0 4px 12px rgba(0,0,0,0.8)'
        }}>
          {profile.name}
        </h1>
        <div style={{ display: 'inline-block', padding: '4px 20px', borderTop: '1px solid var(--gold)', borderBottom: '1px solid var(--gold)', marginBottom: '24px' }}>
          <p style={{ fontSize: '1.25rem', color: 'var(--accent)', fontWeight: '600', letterSpacing: '0.1em', textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>
            {profile.role}
          </p>
        </div>
        
        <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '32px', fontFamily: 'monospace', textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>
          {profile.tagline}
        </p>

        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--gold)', textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>
            <IconMail /> {profile.email}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--gold)', textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>
            <IconPhone /> {profile.phone}
          </div>
        </div>

        <p style={{ maxWidth: '640px', margin: '0 auto', lineHeight: '1.8', color: '#ccc', fontSize: '1.05rem', fontStyle: 'italic', textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>
          “{profile.summary}”
        </p>
      </div>
    </header>
  );
}
