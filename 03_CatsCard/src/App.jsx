import React, { useState } from 'react';
import Phone from '/images/phone-icon.png';
import Email from '/images/mail-icon.png';



function Contact(props) {
  return (
    <div className="contact-card">
        <img src={props.img}/>
        <h3>{props.name}</h3>
        <div className="info-group">
            <img src={Phone} />
            <p>{props.phone}</p>
        </div>
        <div className="info-group">
            <img src={Email} />
            <p>{props.email}</p>
        </div>
    </div>
  )
}

export default function App() {
  return (
    <div className="contacts">
    <Contact 
        img='./images/mr-whiskerson.png'
        name="Mr. Whiskerson"
        phone="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"
    />
    <Contact 
        img='./images/fluffykins.png'
        name="Fluffykins"
        phone="(212) 555-2345"
        email="fluff@me.com"
    />
    <Contact 
        img='./images/felix.png'
        name="Felix"
        phone="(212) 555-4567"
        email="thecat@hotmail.com"
    />
    <Contact 
        img='./images/pumpkin.png'
        name="Pumpkin"
        phone="(0800) CAT KING"
        email="pumpkin@scrimba.com"
    />
</div>
)
}

