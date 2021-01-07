import React from 'react';

export const CustomInput = ({ placeholder, svg, color, marginTop = 0 }) => {
  return (
    <div className='mailing_input_container'>
      <div className='noisy-absolute' />
      <div
        style={{
          position: 'absolute',
          display: 'flex',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          alignItems: 'center',
        }}
      >
        <div
          style={{
            width: 16,
            height: 16,
            marginLeft: 15,
            color: color,
            marginTop: marginTop,
            zIndex: 3,
          }}
        >
          {svg}
        </div>
      </div>
      <input type='text' className='mailing_input' placeholder={placeholder} />
    </div>
  );
};
