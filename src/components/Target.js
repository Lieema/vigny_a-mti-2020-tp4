import React from 'react';
import store from '../store';

const Target = ({id, x = 0, y = 0, value = 0, onClick = () => {}}) => (
  <div
    style={{
      position: 'absolute',
      top: `${y}%`,
      left: `${x}%`,
      width: '25px',
      height: '25px',
      textAlign: 'center',
      lineHeight: '25px',
      cursor: 'pointer',
      backgroundColor: '#FFD065'
    }}
    onClick={onClick}
  >
    {value}
  </div>
);

export default Target;
