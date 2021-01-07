import React from 'react';
import { Logo } from '../vectors/Logo';
import { Person } from '../vectors/Person';

export const Header = () => {
  const headerRef = React.useRef(null);

  const [appear, setAppear] = React.useState(false);

  const handleOnScroll = (menuHeight) => {
    if (window.pageYOffset > menuHeight) {
      setAppear(true);
    } else if (window.pageYOffset <= 0) {
      setAppear(false);
    }
  };

  React.useEffect(() => {
    var header = headerRef.current.getBoundingClientRect();

    const handleScrollEvent = () => {
      handleOnScroll(header.height);
    };

    window.addEventListener('scroll', handleScrollEvent, true);

    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, []);

  return (
    <div
      className={`${
        appear
          ? 'header_container menu_appear'
          : 'header_container menu_disappear'
      }`}
    >
      <div ref={headerRef} className='header_container_inner'>
        <div className='logo'>
          <Logo />
        </div>
        <ul className='menu_container'>
          <li className='menu_btn'>
            <a className='link_btn' href='#link'>
              Blog
            </a>
          </li>
          <li className='menu_btn'>
            <a className='link_btn' href='#link'>
              Rust+
            </a>
          </li>
          <li className='menu_btn'>
            <a className='link_btn' href='#link'>
              Merch
            </a>
          </li>
          <li className='menu_btn'>
            <a className='link_btn' href='#link'>
              Console
            </a>
          </li>
          <li className='menu_btn'>
            <a className='link_btn' href='#link'>
              Changelist
            </a>
          </li>
          <li className='menu_btn'>
            <a className='link_btn' href='#link'>
              Suggestions
            </a>
          </li>
          <li className='menu_btn'>
            <a className='link_btn' href='#link'>
              Support
            </a>
          </li>
          <li className='menu_btn'>
            <a className='link_btn' href='#link'>
              <div style={{ width: 14, height: 14 }}>
                <Person />
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
