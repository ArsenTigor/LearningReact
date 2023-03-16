import React from "react";
import memesData from "../memesData";





export default function Meme() {

    let allMeme = memesData["data"]["memes"];

    function getRandomMeme(){
        const randomIndex = Math.floor(Math.random() * allMeme.length)
        const randomMeme = allMeme[randomIndex]

        setCurrentMeme(prevData =>
            ({ ...prevData, 
                url : randomMeme["url"]}))
    }


    const [currentMeme, setCurrentMeme] = React.useState({
        topText: "",
        bottomText: "",
        url: "http://i.imgflip.com/1bij.jpg"
    })
    

    

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
            <img className="meme--image" src={currentMeme["url"]}></img>

        </main>    
    )
}