import React from "react";
import "./footer.css";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='text'>
        ©1999 by Masashi Kishimoto/ SHUEISHA Inc.
        <b />
        ©2016 by Masashi Kishimoto,Mikio Ikemoto/ SHUEISHA Inc.
        <b />
        ©2002 MASASHI KISHIMOTO
        <b />
        ©2002 MASASHI KISHIMOTO / 2007 SHIPPUDEN All Rights Reserved.
        <b />
        ©2002 MASASHI KISHIMOTO / 2017 BORUTO All Rights Reserved.
      </div>
      <div className='aboutUs'>
        AboutUs
        <div className='icons'>
          <a
            href='https://mail.google.com/mail/u/1/#inbox'
            target='_blank'
            style={{ color: "black" }}
          >
            <SiGmail />
          </a>

          <a
            href='https://github.com/MaidHalilovic'
            target='_blank'
            style={{ color: "black" }}
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
