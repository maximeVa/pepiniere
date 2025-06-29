"use client"

interface ScrollButtonProps {
  targetId: string;
  children: React.ReactNode;
  className?: string;
}

const ScrollButton: React.FC<ScrollButtonProps> = ({ targetId, children, className = "" }) => {
  const scrollToTarget = () => {
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
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