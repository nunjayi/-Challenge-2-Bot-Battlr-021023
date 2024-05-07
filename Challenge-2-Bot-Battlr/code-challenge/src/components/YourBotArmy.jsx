import React, { useState,useEffect } from "react";
import BotCard from "./BotCard";



function YourBotArmy() {
  const [mybots,setBots] = useState([])
  //your bot army code here...
  fetch("http://localhost:3000/mybots")
  .then(res=>res.json())
  .then(data=>setBots(data))

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {/*...and here...*/
           mybots.map((bot)=>{
              return(
                <BotCard bot={bot} bots={mybots} key={bot.id}/>
              )
           }) 
            
          
          
          }
          <p>Your Bot Army</p>
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
