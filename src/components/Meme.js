
import React from "react"
const Meme = function(props){
    
    const [imageurl,setImageurl] = React.useState(getRandomMemeImage())
    
    function getRandomMemeImage(){
        const randomNumber= Math.floor( Math.random() * props.memesData.length)
        const imageurl= props.memesData[randomNumber].url
        return imageurl
    }

        // React doesnot watch for local variables for rerendering the component
    function handleClick()
    {   
        setImageurl((previmageurl) => previmageurl = getRandomMemeImage())
        
    }

    return(
        <main className="interactiveContainer">
               <div className="inputFieldsContainer">
                    <input type="text"  placeholder="Top text"/>
                    <input type="text"  placeholder="Bottom text"/>
                </div>
                <button onClick={handleClick} className="pickButton">Get a new meme image  🖼</button>
                <img className="memeImage" src={imageurl} alt="memeImage"/>
        </main>

    )

}

export default Meme;