import React from 'react';


interface Props {
  width?: string
  height?: string
  fill?: string
}
export const ArrowLeft: React.FC<Props> = ({ width = '100px', fill = '#000' }) => (
  <svg version="1.1" x="0px" y="0px" viewBox="0 0 100 100" width={width}>
    <g transform="translate(0,-952.36218)">
      <path d="m 34.016284,1002.831 a 4.0004,4.0004 0 0 0 1.1562,2.375 l 23.99996,24 a 4.0106896,4.0106896 0 1 0 5.6563,-5.6876 l -21.15626,-21.1562 21.15626,-21.15624 a 4.0106896,4.0106896 0 1 0 -5.6563,-5.6876 l -23.99996,24 a 4.0004,4.0004 0 0 0 -1.1562,3.31264 z"
        fill={fill} />
    </g>
  </svg>
);