
import React from 'react';


interface Props {
  width?: string
  height?: string
  fill?: string
}
export const Calendar: React.FC<Props> = ({ width = '100px', fill = '#000' }) => (
  <svg fill={fill} width={width} viewBox="0 0 24 24">
    <path d="M17 10H7v2h10v-2zm2-7h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zm-5-5H7v2h7v-2z">
    </path>
  </svg>
);