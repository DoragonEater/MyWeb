import * as React from "react";
import { useState, useEffect } from "react";
import { IconTriangleFilled, IconArrowUp } from "./Icons";

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { id: 'header', label: '概览' },
    { id: 'skills', label: '技能' },
    { id: 'work', label: '工作经历' },
    { id: 'projects', label: '项目' },
    { id: 'campus', label: '校园经历' },
    { id: 'hobbies', label: '游戏阅历' },
    { id: 'analysis', label: '其它作品' },
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    // Close sidebar on mobile
    if (window.innerWidth <= 768) {
      setIsOpen(false);
    }
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
       <div className="sidebar-title">
          目 录
       </div>

       <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '8px' }}>
       {navItems.map(item => (
         <button
           key={item.id}
           onClick={() => scrollTo(item.id)}
           className="sidebar-link"
         >
           {item.label}
         </button>
       ))}
       </div>

       <button
        onClick={() => setIsOpen(!isOpen)}
        title={isOpen ? "点击收起目录" : "点击展开目录"}
        className="sidebar-toggle"
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

export function BackToTop() {
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
      className={`back-to-top ${isVisible ? 'visible' : ''}`}
    >
      <IconArrowUp />
    </button>
  );
}
