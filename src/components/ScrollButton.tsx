"use client"

interface ScrollButtonProps {
  targetId: string;
  children: React.ReactNode;
  className?: string;
}

const ScrollButton: React.FC<ScrollButtonProps> = ({ targetId, children, className = "" }) => {
  const scrollToTarget = () => {
    const targetSection = document.getElementById(targetId);
    const header = document.querySelector('header');
    let yOffset = 0;
    if (header) {
      yOffset = -header.getBoundingClientRect().height;
    }
    if (targetSection) {
      const y = targetSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <button 
      onClick={scrollToTarget}
      className={className}
    >
      {children}
    </button>
  );
};

export default ScrollButton; 