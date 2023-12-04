"use client";

import React,{useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faPhone as faPhoneSolid } from '@fortawesome/free-solid-svg-icons'; 
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';



const makestyle = {
  color: 'black',
      fontSize: '12px',
      lineHeight: '1.33337',
      fontWeight: 600,
      letterSpacing: '-.01em',
      fontFamily: '"SF Pro Text", "Myriad Set Pro", "SF Pro Icons", "Apple Legacy Chevron", "Helvetica Neue", "Helvetica", "Arial", sans-serif',
      marginRight: '30px',
      paddingRight: '30px',
      marginBottom: '0.8em',
      outline: 'none'
};
const Footer = () => {
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [selectedRating, setSelectedRating] = useState(0);
  
    const togglePopup = () => {
      setIsPopupVisible(!isPopupVisible);
    };
    return (
<footer className="border-t" style={{ borderWidth: '0px'}}>
        <div className="mx-auto py-10 ">
             <div className="text-center text-neutral-500 align-middle" style={{ paddingTop: '15px' }}>
  <ul className="flex justify-center" style={{...makestyle, listStyleType: 'none', padding: 0 }}>
    <li style={{ ...makestyle,color: '#696970', marginRight: '20px' }}>Home
    <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
        <li style={{ color: '#969191',paddingBottom:'10px',paddingTop:'10px' }}>Techinacal Profiency</li>
        <li style={{ color: '#969191',paddingBottom:'10px' }}>Coninous learning</li>
        <li style={{ color: '#969191', paddingBottom:'10px' }}>Problem solving</li>
        <li style={{ color: '#969191', paddingBottom:'10px' }}>Creativity</li>
        <li style={{ color: '#969191', paddingBottom:'10px' }}>Attention to Details</li>

      </ul>
    </li>
    <li style={{ ...makestyle,color: '#696970',marginLeft:'10px',paddingLeft:'100px' }}>About
    <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
        <li style={{ color: '#969191',paddingBottom:'10px',paddingTop:'10px' }}>Introduction to web dev</li>        <li style={{ color: '#969191', paddingBottom:'10px' }}>Responsive web design</li>
        <li style={{ color: '#969191', paddingBottom:'10px' }}>Fullstack development</li>
        <li style={{ color: '#969191', paddingBottom:'10px' }}>web dev project management</li>
        <li style={{ color: '#969191', paddingBottom:'10px' }}>web security practices</li>



      </ul>
    </li>
    <li style={{ ...makestyle,color: '#696970', marginRight: '20px',paddingLeft:'100px' }}>Services
    <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
        <li style={{ color: '#969191',paddingBottom:'10px',paddingTop:'10px' }}>Custom web design</li>
        <li style={{ color: '#969191',paddingBottom:'10px' }}>Content mangment system</li>
        <li style={{ color: '#969191', paddingBottom:'10px' }}>Mobile rsponsive design</li>
        <li style={{ color: '#969191', paddingBottom:'10px' }}>Perfomance Optmization</li>
        <li style={{ color: '#969191', paddingBottom:'10px' }}>Security Measure</li>

      </ul>
    </li>
    <li style={{ ...makestyle,color: '#696970',paddingLeft:'100px' }}>Contact
    <ul className="cursor-pointer hover:animate-bounce" style={{ listStyleType: 'none', paddingLeft: 0 }}>
        <li style={{ color: '#969191',paddingBottom:'10px',paddingTop:'10px',paddingLeft:'20px' }}> <a href="https://www.instagram.com/jnanesh_ps" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} style={{ width:'18px', height: '18px', color: 'white', marginRight: '10px' }} />
        </a></li>
        <li style={{ color: '#969191',paddingBottom:'10px',paddingLeft:'20px' }}>
        <a href="https://www.facebook.com/your_facebook_page_here" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} style={{ width:'18px', height: '18px', color: 'white', marginRight: '10px' }} />
        </a>
        </li>
        <li style={{ color: '#969191', paddingBottom:'10px',paddingLeft:'20px' }}>
        <a href="tel:9019008540">
          <FontAwesomeIcon icon={faPhoneSolid} style={{ width:'18px', height: '18px', color: 'white', marginRight: '10px' }} />
        </a>
        </li>
        <li className="cursor-pointer" style={{ color: '#969191', paddingBottom:'10px',paddingLeft:'20px' }}>
        <a href="mailto:jnaneshps5@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '18px', color: 'white', marginRight: '10px' }} />
        </a>
</li>
      </ul>
    </li>
  </ul>
  <div style={{ marginTop: '20px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '10px' }}>Give us your feedback</h3>
          <p style={{ fontSize: '14px', marginBottom: '10px' }}>We value your opinion! Rate your experience with us.</p>
          <div>
          {[1, 2, 3, 4, 5].map((rating) => (
              <span
                key={rating}
                style={{ cursor: 'pointer', fontSize: '20px', marginRight: '5px' }}
                onClick={() => {
                  setSelectedRating(rating);
                  togglePopup();
                }}
              >
                <FontAwesomeIcon icon={faStar} color={rating <= selectedRating ? 'gold' : 'gray'} />
              </span>
            ))}
          </div>
        </div>
        {isPopupVisible && (
          <div
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: 'white',
              padding: '20px',
              boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
              zIndex: 1000,
            }}
          >
            <h4>Feedback Form</h4>
            <textarea rows={4} cols={50} placeholder="Enter your feedback"></textarea>
            <button onClick={togglePopup}>Submit</button>
          </div>
        )}
     <div className="text-center text-neutral-500" style={{paddingTop:'10px'}}>
     Copyright © 2023.All rights reserved
     </div>
          </div>
        </div>
      </footer>
    )
  };
  
  export default Footer;