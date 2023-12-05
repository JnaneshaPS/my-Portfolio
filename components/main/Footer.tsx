"use client";

import React, { useState } from "react";
import Image from "next/image";


const makestyle = {
  className: 'cursor-pointer hover:animate-bounce',
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

  return (
    <footer className="border-t" style={{ borderWidth: '0px' }}>

      <div className="mx-auto py-10 ">
        <div className="text-center text-neutral-500 align-middle" style={{ paddingTop: '15px' }}>
          <ul className="flex flex-col md:flex-row justify-center" style={{ ...makestyle, listStyleType: 'none', padding: 0 }}>
            <li style={{ ...makestyle, color: '#696970', marginBottom: '20px' }}>Home
              <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                <li style={{ color: '#969191', paddingBottom: '10px', paddingTop: '10px' }}>Techinacal Profiency</li>
                <li style={{ color: '#969191', paddingBottom: '10px' }}>Coninous learning</li>
                <li style={{ color: '#969191', paddingBottom: '10px' }}>Problem solving</li>
                <li style={{ color: '#969191', paddingBottom: '10px' }}>Creativity</li>
                <li style={{ color: '#969191', paddingBottom: '10px' }}>Attention to Details</li>
              </ul>
            </li>
            <li style={{ ...makestyle, color: '#696970', marginLeft: '10px', paddingLeft: '100px', marginBottom: '20px' }}>About
              <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                <li style={{ color: '#969191', paddingBottom: '10px', paddingTop: '10px' }}>Introduction to web dev</li>
                <li style={{ color: '#969191', paddingBottom: '10px' }}>Responsive web design</li>
                <li style={{ color: '#969191', paddingBottom: '10px' }}>Fullstack development</li>
                <li style={{ color: '#969191', paddingBottom: '10px' }}>web dev project management</li>
                <li style={{ color: '#969191', paddingBottom: '10px' }}>web security practices</li>
              </ul>
            </li>
            <li style={{ ...makestyle, color: '#696970', marginRight: '20px', paddingLeft: '100px', marginBottom: '20px' }}>Services
              <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                <li style={{ color: '#969191', paddingBottom: '10px', paddingTop: '10px' }}>Custom web design</li>
                <li style={{ color: '#969191', paddingBottom: '10px' }}>Content mangment system</li>
                <li style={{ color: '#969191', paddingBottom: '10px' }}>Mobile rsponsive design</li>
                <li style={{ color: '#969191', paddingBottom: '10px' }}>Perfomance Optmization</li>
                <li style={{ color: '#969191', paddingBottom: '10px' }}>Security Measure</li>
              </ul>
            </li>
          </ul>

          <div className="text-center text-neutral-500" style={{ paddingTop: '10px' }}>
            Copyright © 2023. All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


