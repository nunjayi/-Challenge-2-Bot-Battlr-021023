import React from "react";
import { useState } from "react";
import BotCard from "./BotCard";

function BotCollection() {
   const [bots,setBots] = useState([])
  // Your code here
  //fetch all bots
  fetch('http://localhost:3000/bots')
  .then(res=>res.json())
  .then(data=>setBots(data))

  //event handler for adding to my army    let myArmy = (mybot)=>{


    
  return (
    <div className="ui four column grid">
      <div className="row">
        {/*...and here..*/
  
          bots.map(
            (bot)=>{
              return(
                <BotCard bot={bot}  key={bot.id}/>
              )
            }
          )
        
        }
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
