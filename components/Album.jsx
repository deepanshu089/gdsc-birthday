import React, { useState } from 'react';
import chirag from "./chirag.jpg"

const Album = () => {

  return (
        <div className='albumbody'>
          
            <h1 id="birthdayName">Today is Chirag's Birthday</h1>
            {chirag && (
              <img
                id="birthdayImage"
                src={chirag}
                alt="Birthday"
                className="avatar"
              />
            )}
            <h2 className="age" id="birthdayAge">18 years old</h2>
            <h4 className="date" id="birthdayDate">
              Born on: 667
            </h4>
          

          <div className="gift-section">
            <h2 className="gift-title">
              Here's how happy I am for you today 🥳
            </h2>
            <h3 className="gift-hint">(Hover over the gift)</h3>
            <div className="happy-gif gift-cover"></div>
          </div>

          <div className="gift-section">
            <h2 className="gift-title">
              How people react when you enter the room 😍
            </h2>
            <div className="respect-gif gift-cover"></div>
          </div>

          <div className="gift-section">
            <h2 className="gift-title">
              You and Me 👇
            </h2>
            <div className="genius-gif gift-cover"></div>
          </div>

          <div className="gift-section">
            <h2 className="gift-title">
              The only person as badass as you 💪
            </h2>
            <div className="goat-gif gift-cover"></div>
          </div>

          <div className="gift-section">
            <h2 className="gift-title">This one's for you, my friend 👊</h2>
            <div className="cheers-gif gift-cover"></div>
          </div>


          <audio id="birthdayAudio" src="./hbd.mp3" preload="auto"></audio>
        </div>)}
   
  


export default Album;
