import React from 'react'

export default function Score(props) {

  const newGame = () => {
    props.creatGame();
    props.setswitchPages(1);
  }
  const outGame = () => {
    props.setswitchPages(0);
    props.playerTable();
  }
  

  return (
    <div id='divScore'>
      <h1>{props.winOrLose}</h1>
      <h1>your wins: {props.player.win}</h1>
      <h1>your Loses: {props.player.lose}</h1>
      <button onClick={newGame} id='buttonScore'>Again?</button>
      <button onClick={outGame} id='buttonScore'>Exit</button>
    </div>
  )
}
