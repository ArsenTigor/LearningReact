import React from "react";

export default function Joke(props) {
    return (
        <div>
            <h3>{props.number}</h3>
            <p>{props.joke}</p>
            <p>{props.punchline}</p>
            <p>{props.isPun}</p>
            <br></br>
        </div>
    )
}