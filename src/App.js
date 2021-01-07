import React from 'react';
import { Header } from './components/Header';

import './styles/app.css';
import { Date } from './vectors/Date';

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
              <div className='post_details'>
                <div className='noisy-absolute ' />
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
      <div className='phone_container'>
        <div className='noisy-absolute' />
        <div className='phone_content'>
          <div className='phone_content_area'>
            <img
              style={{ width: 'auto', height: 100, marginBottom: 20 }}
              src='https://files.facepunch.com/lewis/1b2911b1/rustplusbranding.svg'
              alt='Rust+ Logo'
            />

            <p className='app_details'>
              The official Rust companion app – stay connected to the game so
              you never miss an important moment again. Coordinate with your
              team, receive alerts when you’re being raided, remotely set off
              traps, and more!
            </p>

            <button className='phone_btn'>LEARN MORE</button>
          </div>
        </div>
      </div>
      <div className='more_info_container'>
        <div className='noisy-absolute ' />
        <div className='more_info_content'>
          <div className='block_container'>
            <img
              style={{ width: 170, height: 'auto' }}
              src='https://files.facepunch.com/lewis/1b1911b1/monthly-updates.png'
              alt='Blueprint'
            />
            <span className='block_title'>Monthly Updates</span>
            <p className='block_text'>
              We release an update <b>every month</b>. Each update brings
              significant additions and features to the game. We also include an
              assortment of performance improvements, balance changes, and bug
              fixes.
            </p>
          </div>
          <div className='block_container'>
            <div style={{ width: 140, height: 'auto' }}>
              <Steam />
            </div>
            <span className='block_title'>Available on Steam</span>
            <p className='block_text'>
              RUST has been available in Early Access on Steam since late 2013.
              During this time it has sold over <b>5 million </b>copies
              worldwide.
            </p>
            <button className='post_btn' style={{ alignSelf: 'center' }}>
              VIEW ON STEAM
            </button>
          </div>
        </div>
      </div>
      <div className='updates_container'>
        <div className='noisy-absolute ' />
        <div className='updates_content'>
          <div className='latest_post_title'>
            <div
              style={{ width: 24, height: 24, marginRight: 8, marginTop: 5 }}
            >
              <Post />
            </div>
            <span style={{ fontWeight: '800', fontSize: 24 }}>
              More updates
            </span>
          </div>
          <div className='update_blocks'>
            <div className='update_block'>
              <div
                className='update_block_img'
                style={{
                  backgroundImage:
                    'url("https://files.facepunch.com/s/43cbcbffc5cd.jpg")',
                }}
              />
              <a className='update_title' href='#update'>
                Community Update 229
              </a>
              <div className='update_bottom'>
                <span className='update_tag'>COMMUNITY</span>
                <div className='update_date'>
                  <div
                    style={{
                      width: 10,
                      height: 10,
                      marginLeft: 15,
                      marginRight: 5,
                      marginBottom: 6,
                    }}
                  >
                    <Date />
                  </div>
                  <span className='date_text'>Thursday, December 31, 2020</span>
                </div>
              </div>
            </div>
            <div className='update_block'>
              <div
                className='update_block_img'
                style={{
                  backgroundImage:
                    'url("https://files.facepunch.com/s/265da1b6c966.jpg")',
                }}
              />
              <a className='update_title' href='#update'>
                Season's Beatings!
              </a>
              <div className='update_bottom'>
                <span className='update_tag'>DEVBLOG</span>
                <div className='update_date'>
                  <div
                    style={{
                      width: 10,
                      height: 10,
                      marginLeft: 15,
                      marginRight: 5,
                      marginBottom: 6,
                    }}
                  >
                    <Date />
                  </div>
                  <span className='date_text'>Thursday, December 17, 2020</span>
                </div>
              </div>
            </div>
            <div className='update_block'>
              <div
                className='update_block_img'
                style={{
                  backgroundImage:
                    'url("https://files.facepunch.com/s/ee253d183d0b.jpg")',
                }}
              />
              <a className='update_title' href='#update'>
                Tech Tree Update
              </a>
              <div className='update_bottom'>
                <span className='update_tag'>DEVBLOG</span>
                <div className='update_date'>
                  <div
                    style={{
                      width: 10,
                      height: 10,
                      marginLeft: 15,
                      marginRight: 5,
                      marginBottom: 6,
                    }}
                  >
                    <Date />
                  </div>
                  <span className='date_text'>Thursday, December 3, 2020</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
