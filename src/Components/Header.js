// import React from 'react';
// import { Link } from 'react-scroll';
// import './Header.css';


// const Header = () => {
//   return (
//     <div>
//       <div className='styles.nav'>
//         <a className='nav'><Link to="home" smooth={true} duration={500}>Home</Link></a>
//         <a className='nav'><Link to="about" smooth={true} duration={500}>About</Link></a>
       
//  <a className='nav'><Link to="blog" smooth={true} duration={500}>Blog</Link></a>
//         <a className='nav'><Link to="contact" smooth={true} duration={500}>Contact</Link></a>
//       </div>
//     <button className='contact'>Contact Me</button>
//     </div>
//   );
// };
// export default Header;



import React from 'react';
import { Link } from 'react-scroll';
import './Header.css';

const Header = () => {
  return (
    <div className='header-container'>
      <div className='nav-links'>
        <a className='nav-item'><Link to="home" smooth={true} duration={500}>Home</Link></a>
        <a className='nav-item'><Link to="about" smooth={true} duration={500}>About</Link></a>
        <a className='nav-item'><Link to="blog" smooth={true} duration={500}>Blog</Link></a>
        <a className='nav-item'><Link to="contact" smooth={true} duration={500}>Contact</Link></a>
      </div>
      <div>
      <button className='contact-button'>Contact Me</button>
      </div>
    </div>
  );
};

export default Header;








































