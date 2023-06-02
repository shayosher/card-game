import React from 'react'

export default function PlayersTable(props) {
    return (
        <div>
            <table>
                <tr>
                    <td>player name: {props.val.playerName}</td>
                    <td>wins: {props.val.win}</td>
                    <td>loses: {props.val.lose}</td>
                    <td>number of games: {props.val.gamesNumber}</td>
                </tr>
            </table>
        </div>
    )
}
