import React, {useState}from 'react'
import './tellme.css'

const TellMe = () => {
    const [text,setText] = useState("")

    const onClick=()=>{
       fetch('https://v2.jokeapi.dev/joke/Dark,Spooky?blacklistFlags=nsfw,religious,political,racist,sexist')
       .then(res=>res.json())
       .then(data=>setText(`${data.setup}${data.delivery} `));        
    }
    
    return (
        <div className=' tell-me tc dib br3 bg-light-green' >
            <img className='dib f3'
            src= "https://www.pinclipart.com/picdir/big/562-5622317_crystal-ball-emoji-png-emoji-crystal-ball-png.png" alt="ball" 
            style={{height:'300px',width:'auto',padding:'15px'}}   
            />
            <button className='shadow-5' onClick={onClick}>click me</button>
            <p>{text.includes('undefined')? "Let me think.... Ahh, click again": text}</p>
        </div>
    )
}

export default TellMe;