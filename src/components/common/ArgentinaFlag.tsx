import React from 'react';

export interface ArgentinaFlagProps {
  width?: number;
  height?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function ArgentinaFlag({
  width = 20,
  height = 14,
  className,
  style,
}: ArgentinaFlagProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 16"
      width={width}
      height={height}
      className={className}
      style={{
        display: 'inline-block',
        verticalAlign: '-2px',
        borderRadius: '2px',
        boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.15)',
        overflow: 'hidden',
        flexShrink: 0,
        ...style,
      }}
      aria-label="Bandeira da Argentina"
      role="img"
    >
      {/* Faixa superior azul celeste */}
      <rect x="0" y="0" width="24" height="5.33" fill="#74ACDF" />
      {/* Faixa central branca */}
      <rect x="0" y="5.33" width="24" height="5.34" fill="#FFFFFF" />
      {/* Faixa inferior azul celeste */}
      <rect x="0" y="10.67" width="24" height="5.33" fill="#74ACDF" />

      {/* Sol de Mayo */}
      <g transform="translate(12, 8)">
        <circle r="2.2" fill="#F6B40E" stroke="#85340A" strokeWidth="0.25" />
        <circle r="1.3" fill="#F6B40E" />
        <g stroke="#F6B40E" strokeWidth="0.5" strokeLinecap="round">
          <line x1="0" y1="-2.9" x2="0" y2="2.9" />
          <line x1="-2.9" y1="0" x2="2.9" y2="0" />
          <line x1="-2.1" y1="-2.1" x2="2.1" y2="2.1" />
          <line x1="-2.1" y1="2.1" x2="2.1" y2="-2.1" />
        </g>
        <circle r="0.9" fill="#85340A" />
        <circle r="0.75" fill="#F6B40E" />
      </g>
    </svg>
  );
}
