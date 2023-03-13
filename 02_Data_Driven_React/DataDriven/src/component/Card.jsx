import React from "react"
import Star from "/assets/star.png"

export default function Card(props) {
    let item = props.item
    let badgeText 
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            {badgeText && <div className="card-badge">{item.badgeText}</div>}
            <img src={`../assets/${item.coverImg}`} />
            <div className="rating"> 
                <img src={Star} alt="Star" />   
                <p> {item.stats.rating} ({item.stats.reviewCount}) {item.location}</p>
            </div>
            <p> {item.title}</p>
            <p> <b>From {item.price}</b>$ /per person </p>
        </div>
    )
}