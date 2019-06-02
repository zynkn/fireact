import React from 'react';


interface Props {
  width?: string
  height?: string
  fill?: string
}
export const Gear: React.FC<Props> = ({ width = '100px', fill = '#000' }) => (
  <svg viewBox="0 0 18 18" x="0px" y="0px" width={width}>
    <g style={{width: '100%'}}>
    <path style={{width: '100%'}} fill={fill} d="M115,0H95c-8.284,0-15,6.716-15,15v20c0,8.284,6.716,15,15,15h20c8.284,0,15-6.716,15-15V15
      C130,6.716,123.284,0,115,0z"/>
    <path fill={fill} d="M115,80H95c-8.284,0-15,6.716-15,15v20c0,8.284,6.716,15,15,15h20c8.284,0,15-6.716,15-15V95
      C130,86.716,123.284,80,115,80z"/>
    <path fill={fill} d="M115,160H95c-8.284,0-15,6.716-15,15v20c0,8.284,6.716,15,15,15h20c8.284,0,15-6.716,15-15v-20
      C130,166.716,123.284,160,115,160z"/>
  </g>

  </svg>
)
