import React from "react"
import Star from "/assets/star.png"

/*
Challenge: Build the Card component
For now, hard-code in the data (like 
the rating, title, price, etc.)

Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images 
  folder for your use
- Make sure to include:
    - image
    - star icon (star.png), rating, and review count
    - title
    - cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
*/

export default function Card(props) {
    return (
        <div className="card">
            <img src={`../assets/${props.img}`} alt="Katie Zaferes" />
            
            
            <div className="rating"> 
                <img src={Star} alt="Star" />   
                <p> {props.rating} ({props.reviewCount}) * {props.country}</p>
            </div>
            <p> {props.title}</p>
            <p> <b>From {props.price}</b> /per person </p>
        </div>
    )
}