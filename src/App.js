import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import About from './Components/About';  
import Contact from './Components/Contacts'; 
import Skills from './Components/Skills' 
// import Blog from './components/Blog';
import Blog from './Components/Blog/blog';
// import Portfolio from './components/sections/portfolio';



const App = () => {
  return (
    <div>
      
      <Header />
        <Home />
        <About />
        <Skills/>
        <Contact />
       
        <Blog />
        
      
      <Footer />
    </div>
  );
};

export default App;

