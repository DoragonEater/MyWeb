import * as React from "react";
import { IconLink } from "./Icons";
import { IAnalysis } from "../types";

export function AnalysisCard({ item }: { item: IAnalysis, key?: React.Key }) {
  return (
    <a href={item.link} target="_blank" rel="noreferrer" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
      <div className="glass-panel" style={{ 
        borderRadius: '4px', 
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <div style={{ padding: '20px 20px 12px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h4 style={{ fontSize: '1.1rem', fontWeight: '500', color: 'var(--text-main)', margin: 0 }}>
              {item.title}
            </h4>
            <div style={{ color: 'var(--accent)', opacity: 0.8 }}><IconLink /></div>
        </div>
        
        <div style={{ position: 'relative', width: '100%', height: '180px', overflow: 'hidden', flex: 1 }}>
            <img 
              src={item.image} 
              alt={item.title} 
              className="analysis-img"
            />
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '40px', background: 'linear-gradient(to bottom, var(--card-bg), transparent)' }}></div>
        </div>
      </div>
    </a>
  );
}
