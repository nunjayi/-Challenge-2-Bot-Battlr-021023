import React from "react";

const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};
//card click
 function cardClick(bot,bots){
  bots.map((mybot)=>{
    if(mybot.id == bot.id){
      //dont post 
        console.log("delete")
        fetch(`http://localhost:3000/mybots/${bot.id}`, {
          method: 'DELETE',
          headers: {
              "Content-Type": 'application/json'
          },
          body: JSON.stringify(bot)
          })
          .then(res => {
              if(res.ok) {
                  return 'added'
              } else {
                  throw new Error("Failed to delete bot!!")
              }
          })
    }else{
      console.log('post')
      fetch("http://localhost:3000/mybots", {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(bot)
        })
        .then(res => {
            if(res.ok) {
                return res.json()
            } else {
                throw new Error("Failed to add bot!!")
            }
        })
    }
  })
  //post ot your army db
 
 }

function BotCard({ bot ,bots}) {
  return (
    <div className="ui column">
      <div
        className="ui card"
        key={bot.id}
        onClick={() => {
          console.log("add code to connect event listener add to my bot")
          cardClick(bot)
          
        }}
      >
        <div className="image">
          <img alt="oh no!" src={bot.avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            {bot.name}
            <i className={botTypeClasses[bot.bot_class]} />
          </div>
          <div className="meta text-wrap">
            <small>{bot.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {bot.health}
          </span>

          <span>
            <i className="icon lightning" />
            {bot.damage}
          </span>
          <span>
            <i className="icon shield" />
            {bot.armor}
          </span>
          <span>
            <div className="ui center aligned segment basic">
              <button
                className="ui mini red button"
                onClick={() =>
                  console.log("add code to connect event listener")
                }
              >
                x
              </button>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default BotCard;
