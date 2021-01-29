import React from "react";
import Card from "./Card";
import TellMe from './TellMe';



function CardContainer({cats}) {
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
            
            {toggle === false? null: <TellMe />}   
        </div>
    )
    
}


export default CardContainer;