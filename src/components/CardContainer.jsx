import React, {useState}from "react";
import Card from "./Card";
import TellMe from './TellMe';



function CardContainer({cats}) {
    const [text,setText] = useState("");
    
    const onClick=()=>{
       fetch('https://v2.jokeapi.dev/joke/Dark,Spooky?blacklistFlags=nsfw,religious,political,racist,sexist')
       .then(res=>res.json())
       .then(data=>console.log(data))

       console.log(text);
    }


    let toggle = false;
    if(cats.length === 1){
        toggle = true;
    }else
        toggle = false;

    return (
        <div className='card-container pa3' 
        style={{display:'flex', flexWrap:'wrap', justifyContent:"center"}}>
           {cats.map((cat,i) =>{
                return <Card key={i} name={cats[i].name} id={cats[i].id} email={cats[i].emai} />
            })}
            
            {toggle === false? null: <TellMe onClick={onClick} text={text}/>}   
        </div>
    )
    
}


export default CardContainer;