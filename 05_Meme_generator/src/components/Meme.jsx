import React from "react";

export default function Meme() {
    return (
        <main>
            <form className="form">
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
                <button className="form--button">Generate a meme image</button>

    
            </form>
        </main>    
    )
}