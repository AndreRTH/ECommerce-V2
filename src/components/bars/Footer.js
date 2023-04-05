import React from 'react';
import './footer.css';


function Footer() {
  return (
    <footer>
      <p>&copy; 2023 StuffBox!. All Rights Reserved.</p>
      <a href="https://www.facebook.com">
        <img src="../../images/facebook.png" alt="Facebook" className="socialimg" />
      </a>
      <a href="https://www.twitter.com">
        <img src="../../images/twitter.png" alt="Twitter" className="socialimg" />
      </a>
      <a href="https://www.tiktok.com">
        <img src="../../images/tik-tok.png" alt="TikTok" className="socialimg" />
      </a>
    </footer>
  );
}

export default Footer;
