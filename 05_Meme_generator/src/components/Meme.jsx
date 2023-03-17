import React from "react";

export default function Meme() {

    const [allMeme, setAllMeme] = React.useState([])

    const [currentMeme, setCurrentMeme] = React.useState({
        topText: "",
        bottomText: "",
        url: "http://i.imgflip.com/1bij.jpg" 
    })

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(data => setAllMeme(data.data.memes))
        
    }, [])
    
    function getRandomMeme(){
        const randomIndex = Math.floor(Math.random() * allMeme.length)
        const randomMeme = allMeme[randomIndex]

        setCurrentMeme(prevData =>
            ({ ...prevData, 
                url : randomMeme["url"]}))
    }

    function handleChange(event){
        const {name, value} = event.target
        setCurrentMeme(prevData => ({...prevData, [name]: value}))
    }

    
    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    className="form--inputs"
                    placeholder="Top text"
                    name="topText"
                    onChange={handleChange}
                    value={currentMeme.topText}
                />
                <input 
                    type="text"
                    className="form--inputs"
                    placeholder="Bottom text"
                    name="bottomText"
                    onChange={handleChange}
                    value={currentMeme.bottomText}
                />
                <button className="form--button" 
                    onClick={getRandomMeme}>
                    Generate a meme image
                </button>
            </div>
            <div className="meme">
                <img className="meme--image" src={currentMeme["url"]}></img>
                <h2 className="meme--text top">{currentMeme.topText}</h2>
                <h2 className="meme--text bottom">{currentMeme.bottomText}</h2>
            </div>

        </main>    
    )
}