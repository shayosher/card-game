import React, { useState } from 'react'
import Card from './Card';

export default function GamePage(props) {
    
    const [index,setIndex]=useState(0);

    const [pointComputer,setPointComputer]=useState(0);
    const [pointplayer,setPointplayer]=useState(0);

    const incIndex = ()=>{
      if(props.comDeck[index]>props.playerDeck[index]){
        setPointComputer(pointComputer+1);
      }
      else if(props.comDeck[index]<props.playerDeck[index]){
        setPointplayer(pointplayer+1);
      }
      setIndex(index+1);
      if(index==25){
        if(pointComputer>=pointplayer){
          props.player.lose++;
          props.setwinOrLose('you lose');
        }
        else{
          props.player.win++;
          props.setwinOrLose('you win');
        }
        props.player.gamesNumber++;
        props.setswitchPages(2)
      }
    }

    const sendCardToComputer = () =>{
        return props.comDeck[index]
    }
    const sendCardToPlayer = () =>{
        return props.playerDeck[index]
    }
    
  return (
    <div id='divGamePage'>
        <h1 className='h1GamePage'>COMPUTER</h1>
        <Card cardChoosen={sendCardToComputer}/>
        <h2>Computer:{pointComputer}</h2>
        <h2>round:{index}</h2>
        <h2>player:{pointplayer}</h2>
        <Card cardChoosen={sendCardToPlayer}/>
        <h1 className='h1GamePage'>{props.player.playerName}</h1>
        <button onClick={incIndex} id='buttonGamePage'>Next</button>  
    </div>
  )
}
