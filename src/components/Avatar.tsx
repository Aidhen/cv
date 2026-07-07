import React from 'react';
import AvatarSvg from '../assets/AvatarComponent.svg?react';

export const Avatar: React.FC = () => {
  return (
    <div
      className="relative w-24 h-24 border-4 border-gray-700 bg-white shadow-pixel pointer-events-none select-none"
      onContextMenu={(e) => e.preventDefault()}
      onDragStart={(e) => e.preventDefault()}
    >
      <AvatarSvg
        style={{ color: 'var(--color-primary)' }}
        className="w-full h-full"
      />

      <div className="absolute inset-0 z-10 pointer-events-auto" onContextMenu={(e) => e.preventDefault()} />

      {/* Copyright Pixel Art SVG */}
      <svg
        className="absolute bottom-0.5 right-0.5 z-20 w-3 h-3 text-black pointer-events-none drop-shadow-[1px_1px_0_rgba(255,255,255,1)]"
        viewBox="0 0 7 7"
        fill="currentColor"
        shapeRendering="crispEdges"
      >
        {/* Cerchio esterno */}
        <rect x="2" y="0" width="3" height="1" />
        <rect x="1" y="1" width="1" height="1" />
        <rect x="5" y="1" width="1" height="1" />
        <rect x="0" y="2" width="1" height="3" />
        <rect x="6" y="2" width="1" height="3" />
        <rect x="1" y="5" width="1" height="1" />
        <rect x="5" y="5" width="1" height="1" />
        <rect x="2" y="6" width="3" height="1" />

        {/* Lettera C interna */}
        <rect x="3" y="2" width="2" height="1" />
        <rect x="2" y="3" width="1" height="1" />
        <rect x="3" y="4" width="2" height="1" />
      </svg>
    </div>
  );
};