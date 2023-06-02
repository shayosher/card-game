import React, { useState } from 'react';
import './App.css';
import GamePage from './components/GamePage';
import HomePage from './components/HomePage';
import Score from './components/Score';

function App() {
  const [switchPages, setswitchPages] = useState(0);

  const [player, setPlayer] = useState({});
  const [comDeck, setComDeck] = useState([]);
  const [playerDeck, setPlayerDeck] = useState([]);

  const [winOrLose, setwinOrLose] = useState('');

  const [playerArr, setplayerArr] = useState([]);

  const [flag, setFlag] = useState(false);

  const [index, setIndex] = useState(0);

  const addPlayerAndStart = (name) => {
    setPlayer({ playerName: name, win: 0, lose: 0, gamesNumber: 0 });
    creatGame();
  }
  const creatGame = () => {
    let temp = [];
    for (let i = 1, valueCard = 1; i <= 52; i++) {
      temp.push(valueCard);
      if (i % 4 == 0) {
        valueCard++;
      }
    }
    let rnd;
    let cDeck = [];
    let pDeck = [];
    for (let i = 0; i < 26; i++) {
      rnd = Math.floor(Math.random() * temp.length);
      cDeck.push(temp[rnd]);
      temp.splice(rnd, 1);

      rnd = Math.floor(Math.random() * temp.length);
      pDeck.push(temp[rnd]);
      temp.splice(rnd, 1);
    }
    setComDeck([...cDeck]);//שים לב ששם כאן ולא מחוץ ללולאה
    setPlayerDeck([...pDeck]);
  }
  const playerTable = () => {
    if(flag==false){
    setplayerArr([...playerArr,player]);
    }
    else {
      setplayerArr([playerArr.delete(index,1),...playerArr,player,]);
    }
  }
  const PlayerStart = (i) => {
    setPlayer(playerArr[i])
    creatGame();
    setFlag(true);
    setIndex(i);
  }
  const show = () => {
    if (switchPages == 0) {
      return <HomePage addPlayerAndStart={addPlayerAndStart} setswitchPages={setswitchPages} playerArr={playerArr} PlayerStart={PlayerStart}/>
    }
    else if (switchPages == 1) {
      return <GamePage player={player} comDeck={comDeck} playerDeck={playerDeck} setswitchPages={setswitchPages} setwinOrLose={setwinOrLose} />
    }
    else if (switchPages == 2) {
      return <Score setswitchPages={setswitchPages} creatGame={creatGame} player={player} winOrLose={winOrLose} playerTable={playerTable} />
    }
  }

  return (
    <div className="App">
      {show()}
    </div>
  );
}

export default App;
