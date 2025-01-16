import React, { useState } from 'react';

const AnimatedLineTitle = ({title}) => {
  const [isHovering, setIsHovering] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);
  
  const handleMouseEnter = () => {
    setIsHovering(true);
    setHasEntered(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  
  return (
    <div 
      className="relative w-fit h-fit cursor-pointer overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <p>{title}</p>
      <style jsx="true">{`
        @keyframes slideIn {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
        @keyframes slideOut {
          from { transform: translateX(0); }
          to { transform: translateX(100%); }
        }
      `}</style>
      <div 
        className="absolute bottom-0 h-[1px] bg-black w-full"
        style={{
          transform: !hasEntered ? 'translateX(-100%)' : undefined,
          animation: hasEntered 
            ? (isHovering 
              ? 'slideIn 0.6s forwards'
              : 'slideOut 0.6s forwards')
            : 'none'
        }}
      />
    </div>
  );
};

export default AnimatedLineTitle;