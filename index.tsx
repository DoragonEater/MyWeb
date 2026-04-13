import * as React from "react";
import { createRoot } from "react-dom/client";
import { MouseEffects } from "./src/components/MouseEffects";
import { Sidebar, BackToTop } from "./src/components/Sidebar";
import { Header } from "./src/components/Header";
import { SkillsSection } from "./src/components/SkillsSection";
import { ProjectCard } from "./src/components/ProjectCard";
import { CampusExperience } from "./src/components/CampusExperience";
import { WorkExperience } from "./src/components/WorkExperience";
import { HobbiesSection } from "./src/components/Hobbies";
import { AnalysisCard } from "./src/components/AnalysisCard";
import { Section } from "./src/components/Shared";
import { RESUME_DATA } from "./src/data";

function App() {
  return (
    <div className="app-container">
      <MouseEffects />
      <Sidebar />
      <BackToTop />
      <Header />
      
      <SkillsSection />

      <Section id="work" title="工作经历">
        <WorkExperience />
      </Section>

      <Section id="projects" title="项目经历">
        {RESUME_DATA.projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Section>

      <Section id="campus" title="校园经历">
        <CampusExperience />
      </Section>

      <Section id="hobbies" title="游戏阅历">
        <HobbiesSection />
      </Section>

      <Section id="analysis" title="其它作品" rightAction={<div style={{color:'var(--gold)', fontSize:'0.9rem'}}>点击阅读</div>}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
          {RESUME_DATA.analysis.map((item, i) => (
            <AnalysisCard key={i} item={item} />
          ))}
        </div>
      </Section>

      <footer style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--text-secondary)', fontSize: '0.9rem', borderTop: '1px solid var(--border)', marginTop: '40px', background: '#111' }}>
        <p>&copy; {new Date().getFullYear()} {RESUME_DATA.profile.name} | 犹豫，就会败北。</p>
      </footer>
    </div>
  );
}

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
}