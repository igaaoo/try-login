import React, { useState } from 'react';

const Button: React.FC = () => {
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const generateRandomPosition = (
    currentPos: number,
    minDistance: number,
    maxPos: number
  ) => {
    const range = maxPos - minDistance - currentPos;
    return Math.floor(Math.random() * range) + minDistance;
  };

  const handleMouseOver = (event: React.MouseEvent<HTMLButtonElement>) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const minDistance = 50; // Distância mínima entre o mouse e a nova posição do botão

    const newX = generateRandomPosition(mouseX, minDistance, Math.random() * 200);
    const newY = generateRandomPosition(mouseY, minDistance, Math.random() * 200);

    setPosition({ x: newX, y: newY });
  };

  const buttonStyle: React.CSSProperties = {
    position: 'absolute',
    left: `${position.x}px`,
    top: `${position.y}px`,
  };

  return (
    <div className="relative">
      <button
        className="mt-4 inline-flex h-[35px] w-24 cursor-default items-center justify-center rounded bg-green4 px-[15px] text-[15px] font-medium leading-none text-green11 outline-none hover:bg-green5 focus:shadow-[0_0_0_2px] focus:shadow-green7"
        style={buttonStyle}
        tabIndex={-1}
        onMouseOver={handleMouseOver}
      >
        Login
      </button>
    </div>
  );
};

export default Button;
