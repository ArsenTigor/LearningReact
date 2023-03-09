import React, { useState } from 'react';
import Felix from './images/felix.png';
import Fluffykins from './images/fluffykins.png';
import Phone from './images/phone-icon.png';
import Email from './images/mail-icon.png';
import Whisker from './images/mr-whiskerson.png';
import Pumpkin from './images/pumpkin.png';


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
        img={Whisker}
        name="Mr. Whiskerson"
        phone="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"
    />
    <Contact 
        img={Fluffykins}
        name="Fluffykins"
        phone="(212) 555-2345"
        email="fluff@me.com"
    />
    <Contact 
        img={Felix}
        name="Felix"
        phone="(212) 555-4567"
        email="thecat@hotmail.com"
    />
    <Contact 
        img={Pumpkin}
        name="Pumpkin"
        phone="(0800) CAT KING"
        email="pumpkin@scrimba.com"
    />
</div>
)
}

