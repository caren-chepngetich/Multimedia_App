
import React from 'react';
import './Contacts.css';



const Contacts= () => {
  return (
    <div id="contacts">
      <div>
        <h2>Contact</h2>
        <div id='contact'>
        <p>Reach me through;</p>
        <div>
          <input type="text" placeholder="Trecy Malonza" />
          <br/>
          <input type="email" placeholder="trecymalonza@gmail.com" />
          <br/>
          <br/>
          <input id ='message'placeholder="Your Message"></input>
          <br/>
          <br/>
          <br/>
          <button>Send Message</button>
        </div>
        </div>
      </div>
    </div>
  );
};
export default Contacts;

