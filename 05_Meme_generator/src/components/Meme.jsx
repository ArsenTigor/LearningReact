import React from "react";
import memesData from "../memesData";





export default function Meme() {

    let meme = memesData["data"]["memes"];

    function getRandomMeme(){
        const randomIndex = Math.floor(Math.random() * meme.length)
        const randomMeme = meme[randomIndex]

        setMemeUrl(randomMeme["url"])
    }

    const [memeUrl, setMemeUrl] = React.useState("")

    


    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    className="form--inputs"
                    placeholder="Top text"
                />
                <input 
                    type="text"
                    className="form--inputs"
                    placeholder="Bottom text"
                />
                <button className="form--button" 
                    onClick={getRandomMeme}>
                    Generate a meme image
                </button>
            </div>
            <img className="meme-image" src={memeUrl}></img>

        </main>    
    )
}