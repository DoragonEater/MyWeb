import * as React from "react";
import { useState } from "react";
import { IconGame, IconSparkles } from "./Icons";
import { RESUME_DATA } from "../data";

export function HobbiesSection() {
  const { games, anime } = RESUME_DATA.hobbies;
  const [filter, setFilter] = useState("ALL");
  const [animeFilter, setAnimeFilter] = useState("ALL");

  const gameTypes = ["ALL", ...Array.from(new Set(games.flatMap(g => 
    Array.isArray(g.type) ? g.type : [g.type || "Other"]
  )))];

  const filteredGames = filter === "ALL" 
    ? games 
    : games.filter(g => {
        if (Array.isArray(g.type)) {
          return g.type.includes(filter);
        }
        return g.type === filter;
      });

  // Anime Logic: Extract tags from info string (Split by " / ")
  const animeTypes = ["ALL", ...Array.from(new Set(anime.flatMap(a => 
    a.info.split(' / ').map(t => t.trim())
  ))).sort((a, b) => a.localeCompare(b, 'zh-Hans-CN'))];

  const filteredAnime = (animeFilter === "ALL" 
    ? anime 
    : anime.filter(a => a.info.split(' / ').map(t => t.trim()).includes(animeFilter))
  ).sort((a, b) => a.name.localeCompare(b.name, 'zh-Hans-CN'));
  
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
      <div className="glass-panel" style={{ borderRadius: '2px', overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '400px' }}>
        <div style={{ 
          padding: '16px 24px', 
          background: 'rgba(0,0,0,0.3)', 
          borderBottom: '1px solid var(--border)', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between' 
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <IconGame /> 
            <h3 style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--gold)', margin: 0 }}>游戏阅历</h3>
          </div>
          
          <select 
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            style={{
              background: '#222',
              color: 'var(--text-main)',
              border: '1px solid var(--border)',
              borderRadius: '2px',
              padding: '4px 8px',
              fontSize: '0.85rem',
              fontFamily: 'inherit',
              outline: 'none',
              cursor: 'pointer'
            }}
          >
            {gameTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
        
        <div className="fade-bottom-mask" style={{ flex: 1, overflowY: 'auto', padding: '20px 24px' }}>
          {filteredGames.length > 0 ? filteredGames.map((g, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', borderBottom: '1px dashed #333', paddingBottom: '4px' }}>
              <span style={{ color: 'var(--text-main)' }}>{g.name}</span>
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{g.info}</span>
            </div>
          )) : (
            <div style={{ color: 'var(--text-secondary)', textAlign: 'center', marginTop: '20px' }}>暂无此类游戏</div>
          )}
        </div>
      </div>

      <div className="glass-panel" style={{ borderRadius: '2px', overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '400px' }}>
        <div style={{ 
          padding: '16px 24px', 
          background: 'rgba(0,0,0,0.3)', 
          borderBottom: '1px solid var(--border)', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between' 
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <IconSparkles /> 
            <h3 style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--gold)', margin: 0 }}>二次元 & 动漫</h3>
          </div>

          <select 
            value={animeFilter}
            onChange={(e) => setAnimeFilter(e.target.value)}
            style={{
              background: '#222',
              color: 'var(--text-main)',
              border: '1px solid var(--border)',
              borderRadius: '2px',
              padding: '4px 8px',
              fontSize: '0.85rem',
              fontFamily: 'inherit',
              outline: 'none',
              cursor: 'pointer'
            }}
          >
            {animeTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div className="fade-bottom-mask" style={{ flex: 1, overflowY: 'auto', padding: '20px 24px' }}>
          {filteredAnime.length > 0 ? filteredAnime.map((a, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', borderBottom: '1px dashed #333', paddingBottom: '4px' }}>
              <span style={{ color: 'var(--text-main)' }}>{a.name}</span>
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{a.info}</span>
            </div>
          )) : (
            <div style={{ color: 'var(--text-secondary)', textAlign: 'center', marginTop: '20px' }}>暂无此类内容</div>
          )}
        </div>
      </div>
    </div>
  );
}
