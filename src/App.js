import React from 'react';
import { Header } from './components/Header';

import './styles/app.css';
import { Post } from './vectors/Post';
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
        <div className='latest_background' />
        <div className='gradient-absolute' />
        <div className='noisy-absolute ' />
        <div className='latest_content'>
          <div className='latest_post_title'>
            <div
              style={{ width: 24, height: 24, marginRight: 8, marginTop: 5 }}
            >
              <Post />
            </div>
            <span style={{ fontWeight: '800', fontSize: 24 }}>Latest Post</span>
          </div>
          <div className='post_container'>
            <div className='post_info'>
              <div className='noisy-absolute ' />
              <div className='post_details'>
                <div className='post_details_container'>
                  <span
                    style={{ fontSize: 30, fontWeight: '800', color: 'white' }}
                  >
                    Season's Beatings!
                  </span>
                  <div className='post_type'>
                    <span className='post_tag'>DEVBLOG</span>
                    <span className='post_date'>
                      Thursday, December 17, 2020
                    </span>
                  </div>
                  <span>It's the most wonderful time of the year!</span>

                  <button className='post_btn'>READ MORE</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
