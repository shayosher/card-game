import React, { useState } from 'react';
import PlayersTable from './PlayersTable';

export default function HomePage(props) {

    const [playerName, setPlayerName] = useState('');

    const checkName = () => {
        if (playerName == '') {
            alert('must be char!!')
        }
        else {
            let flag = false;
            for(let i=0; i<props.playerArr.length; i++){
                if(playerName == props.playerArr[i].playerName){
                    flag = true;
                    props.PlayerStart(i);
                    props.setswitchPages(1);
                    break;
                }
            }
            if(flag==false){
                props.addPlayerAndStart(playerName);
                props.setswitchPages(1);
            }
        }
    }
    return (
        <div id='divHomePage'>
            <h1 id='h1HomePage'>ready for war</h1>
            <input onChange={(e) => { setPlayerName(e.target.value) }} type="text" placeholder='Enter your name' id='inputHomePage'/>
            <br />
            <button onClick={checkName} id='buttonHomePage'>START</button>
            {/* שים לב לא ארווו חץ פאנקשיין כי הפונקציה באותה קומפוננטה */}
            {props.playerArr.map((val)=>{
               return <PlayersTable val={val}/>
            })}
        </div>
    )
}
