import * as React from "react";
import { useState, useRef, useEffect } from "react";
import { createRoot } from "react-dom/client";

// --- Configuration & Data ---

const RESUME_DATA = {
  profile: {
    name: "张鑫龙",
    role: "游戏策划 / 开发者",
    tagline: "Lv.20 | 2027届本科 | 河北工程大学",
    location: "计算机科学与技术",
    email: "1337490125@qq.com",
    phone: "15033895942",
    avatar: "/images/myavatar.jpg",
    // 在这里修改顶部的背景图片 👇
    headerBackground: "/images/bg.jpg", 
    summary: "具备在Unity中快速验证玩法的能力，能独立产出白盒关卡。熟悉日式叙事风格与用户痛点，持有日语N1证书。热衷于ACT战斗机制与TRPG规则设计，追求“好玩”与“美感”的极致平衡。",
  },
  skills: {
    tech: ["Unity3D（熟练）", "C#(熟练)", "C++（熟练）", "Lua（掌握）", "有限状态机FSM", "行为树BT", "Timeline"],
    design: ["打击感", "关卡设计", "系统拆解", "数值平衡", "Timeline"],
    tools: ["Xmind", "Axure", "飞书", "UGit","office三件套"],
    languages: ["日语 (N1)"]
  },
  experience: [
    {
      company: "喵头鹰独立游戏开发社",
      role: "程策副社长",
      period: "2024.09 - 至今",
      description: "作为河北省首个游戏开发社团联合创始人之一，管理策划与程序部门。制定教学大纲，帮助新生入门。策划“游戏红黑榜”活动，为社团带来千人次曝光。",
      images: [
        "/images/jx.jpg",
        "/images/game.jpg",
        "/images/hhb.jpg"
      ]
    },
    {
      company: "腾讯游戏学堂",
      role: "策划公开课学员",
      period: "2024.09 - 2025.02",
      description: "入选策划方向公开课，系统学习游戏策划与运营知识并顺利结业。",
      images: [
        "/images/txyxxt.jpg",
        "/images/txkjyk.jpg"
      ]
    }
  ],
  projects: [
    {
      id: "act-demo",
      title: "ActDemo (Unity动作游戏)",
      role: "独立开发 & 策划",
      period: "2025.09 - 至今", 
      tags: ["Unity", "3D ACT", "FSM"],
      description: "专注于打击感与操作反馈的3D动作游戏Demo。",
      details: [
        "使用FSM管理角色状态，实现连招(Combo)、防御闪避等核心机制。",
        "通过调整顿帧(Hit Stop)、屏幕震动与音效提升打击感。",
        "实现Jump/Dodge Cancel机制，提升操作上限。"
      ],
      link: "https://www.bilibili.com/video/BV1CBU5BYEPJ/",
      image: "/images/ActDemo.jpg"
    },
    {
      id: "library-night",
      title: "图书馆奇妙夜",
      role: "策划 & 程序",
      period: "2025.06 - 2025.10",
      tags: ["Unity", "3D Puzzle"],
      description: "与校图书馆合作开发的3D解密闯关游戏。",
      details: [
        "负责角色3C手感、动画机、变身技能设计。",
        "使用Timeline制作所有过场动画。",
        "编写踏板机关、旋转激光阵等核心关卡逻辑。"
      ],
      link: "https://ncnuj2teeteo.feishu.cn/wiki/XSibwQaztifFGpkEyKXcHkQVnqd?from=from_copylink",
      image: "/images/tsgxm.jpg"
    },
    {
      id: "trpg",
      title: "TRPG与SLG规则设计",
      role: "主策划",
      period: "2020.01 - 2023.01",
      tags: ["规则设计", "PVP"],
      description: "基于型月世界观的战棋类(SRPG)规则设计。",
      details: [
        "独立设计战斗规则、职介数值与技能体系。",
        "组织6次跑团测试，持续迭代平衡性。",
        "解决Caster职介压制问题，优化Assassin背刺收益。"
      ],
      link: "https://www.bilibili.com/opus/1137610590500421636",
      image: "/images/gz.png"
    }
  ],
  hobbies: {
    games: [
      { name: "英雄联盟", info: "2700h, 铂金", type: "MOBA" },
      { name: "穿越火线", info: "2200h", type: "FPS" },
      { name: "CS:GO", info: "400h", type: "FPS" },
      { name: "APEX Legends", info: "300h", type: "FPS" },
      { name: "无主之地系列", info: "200h", type: "FPS" },
      { name: "彩虹六号: 围攻", info: "200h", type: "FPS" },
      { name: "战地 1 & 5", info: "200h", type: "FPS" },
      { name: "合金装备V: 幻痛", info: "100h", type: "ACT" },
      { name: "只狼: 影逝二度", info: "全成就", type: "ACT" },
      { name: "合金装备: 崛起复仇", info: "通关", type: "ACT" },
      { name: "神之亵渎", info: "通关", type: "ACT" },
      { name: "艾尔登法环", info: "白金", type: "ARPG" },
      { name: "巫师 3: 狂猎", info: "通关", type: "ARPG" },
      { name: "古墓丽影三部曲", info: "通关", type: "ARPG" },
      { name: "消逝的光芒 1", info: "通关", type: "ARPG" },
      { name: "双人成行", info: "通关", type: "Co-op" },
    ],
    anime: [
      { name: "日语能力 N1", info: "交流无障碍" },
      { name: "阅片量 500+", info: "二次元内容储备" },
      { name: "明日方舟", info: "手游" },
      { name: "碧蓝航线", info: "手游" },
      { name: "蔚蓝档案", info: "手游" },
      { name: "赛马娘", info: "手游" },
      { name: "尘白禁区", info: "手游" },
      { name: "原神", info: "手游" },
      { name: "日式叙事研究", info: "擅长把握痛点" },
    ]
  },
  analysis: [
    { title: "只狼战斗系统拆解", link: "https://ncnuj2teeteo.feishu.cn/wiki/XTZBwZDrOiUKnYkFeOzciYEXnqc", image: "/images/sekiro.png" },
    { title: "角色设计作品集", link: "https://ncnuj2teeteo.feishu.cn/wiki/Wr6uwqVrMidtzIkq1mKcmLxInwe", image: "/images/sj.png" },
    { title: "巨剑蓄力攻击思考", link: "https://ncnuj2teeteo.feishu.cn/wiki/AJ9zwBmw8il81GkQkjdcbrALn1e", image: "/images/jj.png" }
  ]
};

// --- Components ---

const IconMail = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>;
const IconPhone = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;
const IconCode = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>;
const IconGame = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="6" y1="12" x2="10" y2="12"/><line x1="8" y1="10" x2="8" y2="14"/><line x1="15" y1="13" x2="15.01" y2="13"/><line x1="18" y1="11" x2="18.01" y2="11"/><rect x="2" y="6" width="20" height="12" rx="2"/></svg>;
const IconLink = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>;
const IconArrowRight = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>;
const IconArrowLeft = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>;
const IconSparkles = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>;
const IconMessage = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>;
const IconSend = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>;
const IconX = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>;
const IconChevronLeft = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6" /></svg>;
const IconChevronRight = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>;
const IconArrowUp = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>;
const IconTriangleFilled = () => <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M8 5v14l11-7z" /></svg>;

function MouseEffects() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // State
    const mouse = { x: -100, y: -100 };
    const trail: { x: number; y: number; life: number }[] = [];
    const particles: { 
      x: number; y: number; 
      vx: number; vy: number; 
      size: number; rotation: number; rotationSpeed: number; 
      life: number; decay: number;
      type: 'petal' | 'spark';
      color?: string;
    }[] = [];
    const slashes: { x: number; y: number; life: number; angle: number }[] = [];

    // Configuration
    const TRAIL_LENGTH = 15;
    const TRAIL_DECAY = 0.85;
    
    // Handlers
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      
      // Add trail point
      trail.push({ x: mouse.x, y: mouse.y, life: 1.0 });

      // Spawn passive petals
      if (Math.random() < 0.2) {
        particles.push({
          x: mouse.x,
          y: mouse.y,
          vx: (Math.random() - 0.5) * 1,
          vy: Math.random() * 1 + 0.5,
          size: Math.random() * 4 + 2,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.1,
          life: 1.0,
          decay: 0.005 + Math.random() * 0.01,
          type: 'petal'
        });
      }
    };

    const handleClick = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      
      // Spawn Slash
      slashes.push({
        x: clientX,
        y: clientY,
        life: 1.0,
        // Random angle for dynamic slashing (0 to 360 degrees)
        angle: Math.random() * Math.PI * 2 
      });

      // Spawn Explosion Petals
      for (let i = 0; i < 25; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 5 + 2;
        particles.push({
          x: clientX,
          y: clientY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed, // Initial explosion velocity
          size: Math.random() * 6 + 3,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.2,
          life: 1.0,
          decay: 0.01 + Math.random() * 0.015,
          type: 'petal'
        });
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    // Loop
    const loop = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw Trail
      
      // Update life
      for (let i = 0; i < trail.length; i++) {
        trail[i].life *= TRAIL_DECAY;
      }

      // Remove dead points (fixes persistent trail bug)
      while (trail.length > 0 && trail[0].life < 0.05) {
        trail.shift();
      }

      // Length limit check (just in case)
      if (trail.length > TRAIL_LENGTH) {
        trail.shift();
      }

      if (trail.length > 1) { // Need at least 2 points to draw a line
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.lineWidth = 3;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        // Start from first point
        ctx.moveTo(trail[0].x, trail[0].y);
        for (let i = 1; i < trail.length; i++) {
           ctx.lineTo(trail[i].x, trail[i].y);
        }
        ctx.stroke();
      }

      // 2. Draw Slashes
      for (let i = slashes.length - 1; i >= 0; i--) {
        const slash = slashes[i];
        slash.life -= 0.06; // Fast fade
        if (slash.life <= 0) {
          slashes.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.translate(slash.x, slash.y);
        ctx.rotate(slash.angle);
        
        // Expanding cut visual
        const len = 300 * (1 - slash.life * 0.5) + 50; 
        const opacity = slash.life;
        const thickness = 3 * slash.life;

        // Draw Slash Line
        ctx.beginPath();
        ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.lineWidth = thickness;
        ctx.moveTo(-len / 2, 0);
        ctx.lineTo(len / 2, 0);
        ctx.stroke();

        // Draw Glow
        ctx.shadowBlur = 15;
        ctx.shadowColor = 'white';
        ctx.stroke();
        ctx.restore();
      }

      // 3. Draw Particles (Petals & Sparks)
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life -= p.decay;
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.rotationSpeed;

        // Gravity/Physics
        if (p.type === 'petal') {
            p.vy += 0.05; 
            p.vx *= 0.98; // Air resistance
        } else {
            // Sparks have less air resistance to fly further
            p.vx *= 0.92;
            p.vy *= 0.92;
            p.vy += 0.1; // Slight gravity for sparks
        }

        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.globalAlpha = p.life;

        if (p.type === 'petal') {
            // Draw Petal Shape
            // White/Light Pink
            ctx.fillStyle = '#fff0f5'; 
            ctx.beginPath();
            // Simple petal shape
            // Start bottom-center (0,0 is center of rotation)
            ctx.moveTo(0, 0);
            // Curve out and up
            ctx.bezierCurveTo(p.size, -p.size/2, p.size, p.size/2, 0, p.size);
            ctx.bezierCurveTo(-p.size, p.size/2, -p.size, -p.size/2, 0, 0);
            ctx.fill();
        } else {
            // Spark
            ctx.fillStyle = p.color || '#ffffff';
            ctx.beginPath();
            ctx.arc(0, 0, p.size, 0, Math.PI * 2);
            ctx.fill();
        }

        ctx.restore();
      }

      requestAnimationFrame(loop);
    };

    const animationId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, pointerEvents: 'none', zIndex: 9999 }} />;
}

// Sidebar Component
function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { id: 'header', label: '概览' },
    { id: 'skills', label: '技能' },
    { id: 'projects', label: '项目' },
    { id: 'campus', label: '经历' },
    { id: 'hobbies', label: '兴趣' },
    { id: 'analysis', label: '分析' },
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      bottom: 0,
      width: '160px',
      zIndex: 10000,
      background: 'rgba(20, 20, 20, 0.95)',
      backdropFilter: 'blur(10px)',
      borderRight: '1px solid var(--border)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px 0',
      boxShadow: isOpen ? '4px 0 30px rgba(0,0,0,0.5)' : 'none',
      transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
      transition: 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
    }}>
       {/* Decorative Top - Horizontal */}
       <div style={{ 
         marginBottom: '40px', 
         color: 'var(--accent)', 
         fontSize: '1.5rem', 
         fontFamily: 'serif', 
         fontWeight: 'bold',
         letterSpacing: '0.1em',
         borderBottom: '2px solid var(--accent)',
         paddingBottom: '8px'
       }}>
          目 录
       </div>

       <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '8px' }}>
       {navItems.map(item => (
         <button
           key={item.id}
           onClick={() => scrollTo(item.id)}
           style={{
             background: 'transparent',
             border: 'none',
             color: 'var(--text-secondary)',
             padding: '16px 0',
             fontSize: '1.1rem',
             cursor: 'pointer',
             width: '100%',
             textAlign: 'center',
             transition: 'all 0.2s',
             fontFamily: 'serif',
             letterSpacing: '0.1em',
           }}
           onMouseEnter={(e) => {
             e.currentTarget.style.color = 'var(--gold)';
             e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
             e.currentTarget.style.borderLeft = '3px solid var(--gold)';
           }}
           onMouseLeave={(e) => {
             e.currentTarget.style.color = 'var(--text-secondary)';
             e.currentTarget.style.background = 'transparent';
             e.currentTarget.style.borderLeft = '3px solid transparent';
           }}
         >
           {item.label}
         </button>
       ))}
       </div>

       {/* Toggle Button attached to Sidebar */}
       <button
        onClick={() => setIsOpen(!isOpen)}
        title={isOpen ? "点击收起目录" : "点击展开目录"}
        style={{
          position: 'absolute',
          top: '50%',
          right: '-28px', // Width of button
          width: '28px',
          height: '56px',
          transform: 'translateY(-50%)',
          background: 'var(--accent)',
          borderRadius: '0 50px 50px 0',
          border: '1px solid var(--border)',
          borderLeft: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          outline: 'none',
          boxShadow: '4px 0 10px rgba(0,0,0,0.3)',
          paddingLeft: '2px' // Visual optical adjustment
        }}
       >
          <div style={{ 
            transition: 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)', 
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
             <IconTriangleFilled />
          </div>
       </button>
    </div>
  );
}

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: '40px',
        right: '40px',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        backgroundColor: 'var(--accent)',
        color: '#fff',
        border: '1px solid var(--border)',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? 'auto' : 'none',
        transition: 'opacity 0.3s ease, transform 0.3s ease, background-color 0.3s',
        zIndex: 100,
        boxShadow: '0 4px 14px rgba(0,0,0,0.5)',
      }}
       onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-3px)';
        e.currentTarget.style.backgroundColor = 'var(--accent-hover)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.backgroundColor = 'var(--accent)';
      }}
    >
      <IconArrowUp />
    </button>
  );
}

function Header() {
  const { profile } = RESUME_DATA;
  return (
    <header id="header" style={{ 
      position: 'relative', 
      padding: '100px 20px 80px', 
      borderBottom: '4px solid var(--accent)',
      backgroundImage: `url("${profile.headerBackground}")`, // Use the variable here
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      {/* Dark Overlay to ensure text readability */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.9))',
        zIndex: 0
      }} />

      {/* Decorative Kanji */}
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

      <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <div style={{ marginBottom: '32px' }}>
          <img 
            src={profile.avatar} 
            alt={profile.name} 
            style={{ 
              width: '140px', 
              height: '140px', 
              borderRadius: '50%', 
              border: '3px solid var(--gold)', 
              boxShadow: '0 0 25px rgba(0,0,0,0.6)',
              objectFit: 'cover'
            }} 
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

function Section({ id, title, children, rightAction }: { id?: string, title: string, children?: React.ReactNode, rightAction?: React.ReactNode }) {
  return (
    <section id={id} style={{ padding: '80px 20px' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '50px', borderBottom: '1px solid var(--border)', paddingBottom: '16px' }}>
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

function SkillTag({ label, type = 'default' }: { label: string, type?: 'tech' | 'design' | 'default', key?: any }) {
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

function SkillsSection() {
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

function ProjectCard({ project }: { project: typeof RESUME_DATA.projects[0], key?: any }) {
  return (
    <div className="glass-panel" style={{ 
      marginBottom: '40px',
      display: 'flex',
      flexDirection: 'column',
      borderRadius: '2px',
      overflow: 'hidden',
    }}>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {/* Left: Text */}
        <div style={{ flex: '1 1 400px', padding: '32px', borderRight: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px' }}>
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

          <ul style={{ paddingLeft: '20px', color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7' }}>
            {project.details.map((detail, idx) => (
              <li key={idx} style={{ marginBottom: '6px' }}>{detail}</li>
            ))}
          </ul>
        </div>

        {/* Right: Image (Clickable) */}
        <a href={project.link} target="_blank" rel="noreferrer" style={{ 
            flex: '1 1 300px', 
            minHeight: '250px',
            position: 'relative',
            overflow: 'hidden',
            cursor: 'pointer',
            display: 'block',
            borderBottom: 'none' // override global link style
          }}
          className="project-image-link"
        >
          <img 
            src={project.image} 
            alt={project.title}
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover',
              transition: 'transform 0.5s ease, filter 0.3s ease',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.filter = 'brightness(1.1)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.filter = 'brightness(1)';
            }}
          />
          {/* Overlay Hint */}
          <div style={{
            position: 'absolute',
            bottom: '0',
            left: '0',
            right: '0',
            padding: '12px',
            background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
            color: 'var(--gold)',
            fontSize: '0.9rem',
            textAlign: 'right',
            pointerEvents: 'none'
          }}>
            点击查看演示 <IconLink />
          </div>
        </a>
      </div>
    </div>
  );
}

// Inner Carousel for Campus Images
function ImageCarousel({ images }: { images: string[] }) {
  const [idx, setIdx] = useState(0);

  const next = () => setIdx((i) => (i + 1) % images.length);
  const prev = () => setIdx((i) => (i - 1 + images.length) % images.length);

  if (!images || images.length === 0) return null;

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
      {images.length > 1 && (
        <>
          <button 
            onClick={(e) => { e.stopPropagation(); prev(); }}
            style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', zIndex: 10, background: 'rgba(0,0,0,0.6)', color: '#fff', border: 'none', borderRadius: '50%', width: 32, height: 32, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <IconChevronLeft />
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); next(); }}
            style={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)', zIndex: 10, background: 'rgba(0,0,0,0.6)', color: '#fff', border: 'none', borderRadius: '50%', width: 32, height: 32, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <IconChevronRight />
          </button>
        </>
      )}
      <img 
        src={images[idx]} 
        alt="Experience proof" 
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

// Experience Card Component (Similar to ProjectCard but for Experience)
function ExperienceCard({ item }: { item: typeof RESUME_DATA.experience[0], key?: any }) {
  return (
    <div className="glass-panel" style={{ 
      marginBottom: '40px',
      display: 'flex',
      flexDirection: 'column',
      borderRadius: '2px',
      overflow: 'hidden',
    }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', minHeight: '300px' }}>
        {/* Left: Text */}
        <div style={{ flex: '1 1 400px', padding: '32px', borderRight: '1px solid var(--border)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px' }}>
             <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--text-main)' }}>{item.role}</h3>
             <span style={{ fontSize: '0.85rem', color: 'var(--gold)', fontFamily: 'monospace' }}>{item.period}</span>
          </div>
          <div style={{ marginBottom: '16px', color: 'var(--accent)', fontSize: '0.95rem', fontWeight: '600' }}>{item.company}</div>
          
          <p style={{ lineHeight: '1.8', color: '#ccc' }}>
            {item.description}
          </p>
        </div>

        {/* Right: Images */}
        <div style={{ flex: '1 1 300px', minHeight: '250px', position: 'relative' }}>
          {item.images && item.images.length > 0 ? (
             <ImageCarousel images={item.images} />
          ) : (
            <div style={{ width: '100%', height: '100%', background: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#333' }}>
              No Image
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Campus Experience Component -> List of ExperienceCards
function CampusExperience() {
  return (
    <div style={{ marginBottom: '20px' }}>
      {RESUME_DATA.experience.map((item, index) => (
        <ExperienceCard key={index} item={item} />
      ))}
    </div>
  );
}
interface HobbyItem {
  name: string;
  info: string;
  type: string;
}
// Game & Anime Scrollable Lists
function HobbySection() {
  // 2. 明确 state 的类型
  const [hobbiesData, setHobbiesData] = useState<{
    games: HobbyItem[];
    anime: HobbyItem[];
  }>({
    games: RESUME_DATA.hobbies.games as HobbyItem[],
    anime: RESUME_DATA.hobbies.anime as HobbyItem[]
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/hobbies');
        if (res.ok) {
          const data = await res.json();
          setHobbiesData({
            games: data.games || [],
            anime: data.anime || []
          });
        }
      } catch (error) {
        console.log("Fetch failed, using static fallback.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const { games, anime } = hobbiesData;
  const [gameFilter, setGameFilter] = useState("ALL");
  const [animeFilter, setAnimeFilter] = useState("ALL");

  // 3. 在处理过滤逻辑时，确保 g.type 存在（使用 optional chaining 或 fallback）
  const gameTypes = ["ALL", ...Array.from(new Set(games.map(g => g.type || "Other")))];
  const filteredGames = gameFilter === "ALL" 
    ? games 
    : games.filter(g => g.type === gameFilter);

  const animeTypes = ["ALL", ...Array.from(new Set(anime.map(a => a.type || "Other")))];
  const filteredAnime = animeFilter === "ALL" 
    ? anime 
    : anime.filter(a => a.type === animeFilter);
  
  // ... 下方的 return 部分保持不变 ...
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
      {/* Games Column */}
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
            <h3 style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--gold)' }}>游戏阅历</h3>
          </div>
          
          {/* Custom Dropdown for Filtering Games */}
          <select 
            value={gameFilter}
            onChange={(e) => setGameFilter(e.target.value)}
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

      {/* Anime Column */}
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
            <h3 style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--gold)' }}>二次元 & 动漫</h3>
          </div>

          {/* Custom Dropdown for Filtering Anime */}
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

function AnalysisCard({ item }: { item: typeof RESUME_DATA.analysis[0], key?: any }) {
  return (
    <a href={item.link} target="_blank" rel="noreferrer" style={{ textDecoration: 'none', display: 'block' }}>
      <div className="glass-panel" style={{ 
        borderRadius: '4px', 
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}
      >
        <div style={{ padding: '20px 20px 12px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h4 style={{ fontSize: '1.1rem', fontWeight: '500', color: 'var(--text-main)', margin: 0 }}>
              {item.title}
            </h4>
            <div style={{ color: 'var(--accent)', opacity: 0.8 }}><IconLink /></div>
        </div>
        
        {/* Image Container - "Under the sentence" */}
        <div style={{ position: 'relative', width: '100%', height: '180px', overflow: 'hidden' }}>
            <img 
              src={item.image} 
              alt={item.title} 
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover',
                filter: 'grayscale(30%) contrast(110%)',
                transition: 'transform 0.5s ease, filter 0.5s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.filter = 'grayscale(0%) contrast(100%)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.filter = 'grayscale(30%) contrast(110%)';
              }}
            />
             {/* Gradient Overlay for integration */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '40px', background: 'linear-gradient(to bottom, var(--card-bg), transparent)' }}></div>
        </div>
      </div>
    </a>
  );
}

function App() {
  return (
    <div style={{ paddingBottom: '120px' }}>
      <MouseEffects />
      <Sidebar />
      <BackToTop />
      <Header />
      
      <SkillsSection />

      <Section id="projects" title="项目经历">
        {RESUME_DATA.projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Section>

      <Section id="campus" title="校园经历">
        <CampusExperience />
      </Section>

      <Section id="hobbies" title="兴趣阅历">
        <HobbySection />
      </Section>

      <Section id="analysis" title="拆解与分析" rightAction={<div style={{color:'var(--gold)', fontSize:'0.9rem'}}>点击阅读</div>}>
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

const root = createRoot(document.getElementById("root")!);
root.render(<App />);