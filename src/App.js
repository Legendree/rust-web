import React from 'react';
import { Header } from './components/Header';
import { CustomInput } from './components/CustomInput';

import './styles/app.css';
import { Date } from './vectors/Date';

import { Post } from './vectors/Post';
import { Steam } from './vectors/Steam';
import { Person } from './vectors/Person';
import { Mail } from './vectors/Mail';
import { Logo } from './vectors/Logo';
import { Face } from './vectors/Face';

export const App = () => {
  return (
    <div className='web_container'>
      <div className='main_container noisy'>
        <div className='video_container'>
          <video
            preload='auto'
            autoPlay
            muted
            loop
            playsInline
            className='video_bg'
          >
            <source src='/assets/bg.mp4' type='video/mp4' />
            <source src='/assets/bg.webm' type='video/webm' />
            <span>Your browser doesn't support mp4/webm formats :(</span>
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
                    January Update
                  </span>
                  <div className='post_type'>
                    <span className='post_tag'>DEVBLOG</span>
                    <span className='post_date'>Thursday, January 7, 2021</span>
                  </div>
                  <p style={{ lineHeight: '22px' }}>
                    Santa is packing up and clearing out the bodies, we hope you
                    enjoyed the Holiday Season. We're getting back to work after
                    a couple of weeks off which is why this is a light blog and
                    we are looking forward to the journey ahead in 2021!
                  </p>

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
      <div className='mailing_container'>
        <div className='mailing_background' />
        <div className='noisy-absolute ' />
        <div className='mailing_content'>
          <div className='left_mailing'>
            <span
              style={{ fontSize: 30, color: '#F6EAE2', fontWeight: 'bold' }}
            >
              Mailing List
            </span>
            <p
              style={{
                color: '#f6eae1',
                width: 540,
                marginTop: 20,
                fontSize: 16,
              }}
            >
              If you want to follow this project you can sign up to the mailing
              list.
            </p>

            <p
              style={{
                color: '#f6eae1',
                width: 550,
                marginTop: 20,
                fontSize: 16,
                lineHeight: '22px',
              }}
            >
              We'll only update you about this project, we won't spam you about
              other stuff or sell your email address.
            </p>
          </div>
          <div className='right_mailing'>
            <CustomInput svg={<Mail />} marginTop={2} placeholder='Email' />
            <div style={{ display: 'flex', marginTop: 10 }}>
              <CustomInput svg={<Person />} placeholder='First Name' />
              <div style={{ width: 20 }} />
              <CustomInput svg={<Person />} placeholder='Last Name' />
            </div>
            <div
              style={{ display: 'flex', marginTop: 30, alignItems: 'center' }}
            >
              <input type='checkbox' />
              <span>
                I Agree to the{' '}
                <a
                  href='#terms'
                  style={{ textDecoration: 'underline', color: '#D76250' }}
                >
                  Terms Of Service
                </a>{' '}
                and{' '}
                <a
                  href='#terms'
                  style={{ textDecoration: 'underline', color: '#D76250' }}
                >
                  Privacy Policy
                </a>
              </span>
            </div>
            <button className='phone_btn'>SUBSCRIBE</button>
          </div>
        </div>
      </div>
      <div className='footer_container'>
        <div className='noisy-absolute' />
        <div className='footer_content'>
          <div className='footer_block_left'>
            <div
              style={{
                display: 'flex',
                width: '100%',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}
            >
              <div style={{ width: 140 }}>
                <Logo />
              </div>
              <div
                style={{
                  height: '100%',
                  width: 2,
                  backgroundColor: '#313131',
                }}
              />
              <div style={{ width: 35, height: 35 }}>
                <Face />
              </div>
            </div>
            <span
              style={{
                width: 210,
                marginTop: 25,
                fontSize: 16,
                color: '#7B7471',
                lineHeight: '22px',
                fontWeight: 'lighter',
              }}
            >
              © 2021 Facepunch Studios. All rights reserved.
            </span>
          </div>
          <div className='footer_block'>
            <span
              style={{
                fontSize: 12,
                color: 'gray',
                fontWeight: 600,
                letterSpacing: 2,
                marginBottom: 15,
              }}
            >
              HERE
            </span>
            <ul style={{ color: 'white', fontSize: 16 }}>
              <li style={{ marginTop: 25 }}>
                <a className='menu_link' href='#menu'>
                  Blog
                </a>
              </li>
              <li style={{ marginTop: 25 }}>
                <a className='menu_link' href='#menu'>
                  Rust+
                </a>
              </li>
              <li style={{ marginTop: 25 }}>
                <a className='menu_link' href='#menu'>
                  Merch
                </a>
              </li>
              <li style={{ marginTop: 25 }}>
                <a className='menu_link' href='#menu'>
                  Console
                </a>
              </li>
              <li style={{ marginTop: 25 }}>
                <a className='menu_link' href='#menu'>
                  Changelist
                </a>
              </li>
              <li style={{ marginTop: 25 }}>
                <a className='menu_link' href='#menu'>
                  Suggestions
                </a>
              </li>
            </ul>
          </div>
          <div className='footer_block'>
            <span
              style={{
                fontSize: 12,
                color: 'gray',
                fontWeight: 600,
                letterSpacing: 2,
                marginBottom: 15,
              }}
            >
              MISC
            </span>
            <ul style={{ color: 'white', fontSize: 16 }}>
              <li style={{ marginTop: 25 }}>
                <a className='menu_link' href='#menu'>
                  Aboust Us
                </a>
              </li>
              <li style={{ marginTop: 25 }}>
                <a className='menu_link' href='#menu'>
                  Our Projects
                </a>
              </li>
              <li style={{ marginTop: 25 }}>
                <a className='menu_link' href='#menu'>
                  Press Kits
                </a>
              </li>
              <li style={{ marginTop: 25 }}>
                <a className='menu_link' href='#menu'>
                  Blog RSS
                </a>
              </li>
              <li style={{ marginTop: 25 }}>
                <a className='menu_link' href='#menu'>
                  Commits
                </a>
              </li>
              <li style={{ marginTop: 25 }}>
                <a className='menu_link' href='#menu'>
                  Legal
                </a>
              </li>
            </ul>
          </div>
          <div className='footer_block'>
            <span
              style={{
                fontSize: 12,
                color: 'gray',
                fontWeight: 600,
                letterSpacing: 2,
                marginBottom: 15,
              }}
            >
              SOCIAL{' '}
            </span>
            <ul style={{ color: 'white', fontSize: 16 }}>
              <li style={{ marginTop: 25 }}>
                <a className='menu_link' href='#menu'>
                  Twitter
                </a>
              </li>
              <li style={{ marginTop: 25 }}>
                <a className='menu_link' href='#menu'>
                  Steam
                </a>
              </li>
              <li style={{ marginTop: 25 }}>
                <a className='menu_link' href='#menu'>
                  Facebook
                </a>
              </li>
              <li style={{ marginTop: 25 }}>
                <a className='menu_link' href='#menu'>
                  Instagram
                </a>
              </li>
              <li style={{ marginTop: 25 }}>
                <a className='menu_link' href='#menu'>
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
