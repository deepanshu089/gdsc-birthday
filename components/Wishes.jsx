import React, { useEffect } from 'react';
import chirag from "./chirag.jpg";
import back from "../utils/back.jpg";
import grid from "../utils/paper3.avif";

const Wishes = () => {
  useEffect(() => {
    const hearts = document.querySelectorAll('.heart');
    hearts.forEach(heart => {
      const randomX = Math.random() * (window.innerWidth - 100);
      const randomY = Math.random() * (window.innerHeight - 100);
      heart.style.position = 'absolute';
      heart.style.left = `${randomX}px`;
      heart.style.top = `${randomY}px`;
      heart.classList.add('bounce');
    });
  }, []);

  const changeToText = (element, text) => {
    element.style.transform = 'scale(0)';
    element.style.opacity = '0';
    setTimeout(() => {
      element.innerHTML = text;
      element.classList.remove('heart', 'bounce');
      element.classList.add('happy-birthday');
      element.style.transform = 'scale(1)';
      element.style.opacity = '1';
    }, 500);
  };

  return (
    <div  style={styles.container}>
      <div id="bdywish" style={styles.bdywish}>
        <h3 style={styles.h3}>Happy Birthday Dear Friend</h3>
        <div className="heart-frame" style={styles.heartFrame}>
          <img src={chirag} alt="Heart Image" style={styles.image} />
        </div>
        <p id="msg" style={styles.msg}>Touch ICONS for Surprise Msg </p>
      </div>
      {['Dheeraj: Wishing you a year filled with joy!', 'Hema: Cheers to the coolest guy I know—happy birthday!', 'Neha: Hope your birthday is as legendary as you are!', 'Rohan: Wishing you joy!', 'Ayesha: Keep shining, birthday star!', 'Deepanshu: May this year bring you all the success and happiness you deserve!', 'You are special for Me!', 'Ayushi: Hope your day is as awesome as you are!'].map((text, index) => (
        <div
          key={index}
          className="heart"
          style={styles.heart}
          onClick={(e) => changeToText(e.target, text)}
        >
          {index % 2 === 0 ? '🎉' : '🎉'}
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    position: 'relative',
    width: '98vw',
    height: '87vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    flexDirection:'column',
    backgroundImage:`url(${grid})`,
    backgroundSize:'100%',
    backgroundSize: 'cover',
    // marginTop:'3vh',
    // margin:'auto',
    margin:' auto',
    // margin: 'auto',
    
    overflow: 'hidden',
  },
  bdywish: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '20px',
    backgroundColor: 'rgba(173, 153, 1, 0.5)', // Add background to improve text visibility
    borderRadius: '15px',
  },
  h3: {
    fontSize: '2rem', // 32px
    background: 'linear-gradient(65deg, rgb(0, 128, 255), rgb(195, 0, 255), red)',
    WebkitBackgroundClip: 'text',
    backgroundColor: 'transparent',
    WebkitTextFillColor: 'transparent',
    display: 'inline-block',
    fontFamily: '"Lilita One", sans-serif',
    fontWeight: '400',
    margin: '0 0 10px 0',
  },
  msg: {
    fontSize: '2rem', // 16px
    color: 'black',
    marginTop: '9px',
  },
  heartFrame: {
    width: '150px',
    height: '150px',
    backgroundColor: 'white',
    border: '3px solid rgb(123, 0, 200)',
    boxShadow: '2px 7px 10px rgb(123, 200, 255)',
    borderRadius: '50%',
    position: 'relative',
    overflow: 'hidden',
    margin: '5px',
    
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: '50%',
  },
  heart: {
    fontFamily: 'Dancing Script, cursive',
    fontSize: '1.5rem', // 32px
    cursor: 'pointer',
    margin: '10px',
    color: 'black',
    transition: 'transform 0.3s, opacity 0.3s',
    ...(window.innerWidth <= 768 && {
      fontSize:'1rem'
    })
  },
  
};

// Media queries to make styles responsive
const mediaQueryStyles = `
  @media (max-width: 768px) {
    .heart {
      font-size: 1.5rem; // 24px
    }
    #bdywish h3 {
      font-size: 1.5rem; // 24px
    }
    #msg {
      font-size: 0.875rem; // 14px
    }
  }

  @media (max-width: 480px) {
    .heart {
      font-size: 2rem; // 20px
    }
    #bdywish h3 {
      font-size: 1rem; // 20px
    }
    #msg {
      font-size: 0.75rem; // 12px
    }
  }
`;

// Add media query styles to the document head
const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = mediaQueryStyles;
document.head.appendChild(styleSheet);

export default Wishes;
