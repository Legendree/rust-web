import React from 'react';

export const CustomInput = ({ placeholder, svg, marginTop = 0 }) => {
  const [focused, setFocused] = React.useState(false);

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
            marginTop: marginTop,
            zIndex: 3,
            color: `${focused ? '#C1B8B0' : 'gray'}`,
          }}
        >
          {svg}
        </div>
      </div>
      <input
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        type='text'
        className='mailing_input'
        placeholder={placeholder}
      />
    </div>
  );
};
