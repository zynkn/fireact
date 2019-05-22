import React from 'react';


interface Props {
  width?: string
  height?: string
  fill?: string
}
export const Cancel: React.FC<Props> = ({ width = '100px', fill = '#000' }) => (
  <svg version="1.1" x="0px" y="0px" viewBox="0 0 300 300" width={width}>
    <path fill={fill} d="M211.1,193.4L167.7,150l43.4-43.4c4.9-4.9,4.9-12.8,0-17.7s-12.8-4.9-17.7,0L150,132.3l-43.4-43.4c-4.9-4.9-12.8-4.9-17.7,0  s-4.9,12.8,0,17.7l43.4,43.4l-43.4,43.4c-2.3,2.3-3.7,5.5-3.7,8.8c0,6.9,5.6,12.5,12.5,12.5c3.3,0,6.5-1.3,8.8-3.7l43.4-43.4  l43.4,43.4c2.3,2.3,5.5,3.7,8.8,3.7c3.3,0,6.5-1.3,8.8-3.7C216,206.2,216,198.3,211.1,193.4z" />
  </svg>
)
