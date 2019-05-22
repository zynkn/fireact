import React from 'react';


interface Props {
  width?: string
  height?: string
  fill?: string
}
export const ArrowUp: React.FC<Props> = ({ width = '100px', fill = '#000' }) => (
  <svg version="1.1" x="0px" y="0px" viewBox="0 0 100 100" width={width}>
    <g transform="translate(0,-952.36218)">
      <path d="m 49.5312,986.37844 a 4.0004,4.0004 0 0 0 -2.375,1.1562 l -24,23.99996 a 4.0106896,4.0106896 0 1 0 5.6876,5.6563 L 50,996.03464 71.1562,1017.1909 a 4.0106896,4.0106896 0 1 0 5.6876,-5.6563 l -24,-23.99996 a 4.0004,4.0004 0 0 0 -3.3126,-1.1562 z"
        fill={fill} /></g>
  </svg>
)
