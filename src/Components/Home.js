// import React from 'react';
// // import profile from '../Images/profile.jpg'; 
// import { FaBehance, FaDribbble, FaInstagram } from 'react-icons/fa';
// import './Home.css';
// // import { FaBehance, FaDribbble, FaInstagram } from 'react-icons/fa';

// const Home = () => {
//   return (
//     <div id="home">
//       <>
        
//           <div>
//             {/* <img src={profile} alt="Trecy" /> */}
//           </div>
//           <div>
//             <h1>Trecy Malonza <span role="img" aria-label="wave">👋</span></h1>
//             <h2>Software Developer</h2>
//             <p>I'm a creative Backend Engineer based in New York, and I'm very passionate and dedicated to my work.</p>
//             <div>
//               <button >Say Hello</button>
//               <button>My Works</button>
//             </div>
//             <div>
//               <a href="#"><FaBehance /></a>
//               <a href="#"><FaDribbble /></a>
//               <a href="#"><FaInstagram /></a>
//             </div>
//           </div>
        
//       </>
//     </div>
//   );
// };

// export default Home;

import React from 'react';
// import ussd from '../Images/ussd.png';//

import './Home.css'; 
import profile from '../Images/profile.jpg'



const Home = () => {
  return (
    <div id="home" className="home-container">
      <div className="profile-image">
     <img src ={profile} alt='profileimg'/>
     
      </div>
      <div className="profile-info">
        <h1>Trecy Malonza </h1>
        <h2>Software Developer</h2>
         
        <div className="buttons">
          <button className="say-hello-btn">Say Hello</button>
          <button className="my-works-btn">My Works</button>
        </div>
     
      </div>
    </div>
  );
};

export default Home;
