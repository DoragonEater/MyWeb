import * as React from "react";
import { Section, SkillTag } from "./Shared";
import { RESUME_DATA } from "../data";

export function SkillsSection() {
  return (
    <Section id="skills" title="技能清单">
      <div className="glass-panel" style={{ padding: '40px', borderRadius: '4px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '40px' }}>
          <div>
            <h3 style={{ fontSize: '1rem', color: 'var(--gold)', marginBottom: '16px', borderBottom: '1px solid var(--border)', paddingBottom: '8px' }}>程序开发</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {RESUME_DATA.skills.tech.map(s => <SkillTag key={s} label={s} type="tech" />)}
            </div>
          </div>
          <div>
            <h3 style={{ fontSize: '1rem', color: 'var(--gold)', marginBottom: '16px', borderBottom: '1px solid var(--border)', paddingBottom: '8px' }}>策划设计</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {RESUME_DATA.skills.design.map(s => <SkillTag key={s} label={s} type="design" />)}
            </div>
          </div>
          <div>
            <h3 style={{ fontSize: '1rem', color: 'var(--gold)', marginBottom: '16px', borderBottom: '1px solid var(--border)', paddingBottom: '8px' }}>工具 & 语言</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {[...RESUME_DATA.skills.tools, ...RESUME_DATA.skills.languages].map(s => <SkillTag key={s} label={s} />)}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
