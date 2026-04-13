import * as React from "react";
import { IProject } from "../types";

export function ProjectCard({ project }: { project: IProject, key?: React.Key }) {
  // 预留的视频状态，待后续有视频时解开注释使用
  // const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div className="glass-panel project-card">
      <div className="project-card-inner">
        {/* Left/Top: Text */}
        <div className="project-text-content">
          <div className="project-header">
             <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--text-main)' }}>{project.title}</h3>
             <span style={{ fontSize: '0.85rem', color: 'var(--gold)', fontFamily: 'monospace' }}>{project.period}</span>
          </div>
          <div style={{ marginBottom: '16px', color: 'var(--accent)', fontSize: '0.95rem', fontWeight: '600' }}>{project.role}</div>
          
          <div style={{ display: 'flex', gap: '6px', marginBottom: '20px', flexWrap: 'wrap' }}>
            {project.tags.map(tag => (
              <span key={tag} style={{ fontSize: '0.75rem', padding: '2px 6px', background: '#000', border: '1px solid var(--border)', color: '#888' }}>
                {tag}
              </span>
            ))}
          </div>

          <p style={{ marginBottom: '20px', lineHeight: '1.6', color: '#ccc' }}>
            {project.description}
          </p>

          <ul style={{ paddingLeft: '20px', color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7', margin: 0 }}>
            {project.details.map((detail, idx) => (
              <li key={idx} style={{ marginBottom: '6px' }}>{detail}</li>
            ))}
          </ul>
        </div>

        {/* Right/Bottom: Image or Video */}
        <a href={project.link} target="_blank" rel="noreferrer" className="project-media-link"
           // onMouseEnter={() => setIsHovered(true)}
           // onMouseLeave={() => setIsHovered(false)}
        >
          {/* TODO: 预留视频播放位置。如果 project.videoPreview 存在且 isHovered，则只渲染 <video>，否则渲染 <img> */}
          {/* { project.videoPreview && isHovered ? (
               <video src={project.videoPreview} autoPlay loop muted playsInline className="project-media-content" />
             ) : (
               <img src={project.image} alt={project.title} className="project-media-content" />
             )
          } */}
          
          <img 
            src={project.image} 
            alt={project.title}
            className="project-media-content"
          />
          
          {/* Overlay Hint */}
          <div className="project-media-hint">
            点击查看演示
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginLeft: '4px' }}>
               <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
            </svg>
          </div>
        </a>
      </div>
    </div>
  );
}
