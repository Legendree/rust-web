import React from 'react';
import { Header } from './components/Header';

import './styles/app.css';
import { Steam } from './vectors/Steam';

export const App = () => {
  return (
    <div className='web_container'>
      <div className='main_container noisy'>
        <div className='video_container'>
          <video muted loop autoPlay className='video_bg'>
            <source src='bg.mp4' type='video/mp4' />
          </video>
        </div>
        <Header />
        <div className='info_container'>
          <div className='info_area'>
            <span className='big_title'>SURVIVE, COOPERATE & RAID</span>
            <span className='small_title'>
              Everything wants you to die. You need to find food, shelter and
              weapons to prevent it.
            </span>
            <button className='steam_btn'>
              <div
                style={{ width: 20, height: 20, marginRight: 5, marginTop: 1 }}
              >
                <Steam />
              </div>
              <span style={{ letterSpacing: 1 }}>VIEW RUST ON STEAM</span>
            </button>
          </div>
        </div>
      </div>
      <div className='latest_container'>
        <div className='gradient-absolute noisy' />
      </div>
    </div>
  );
};
