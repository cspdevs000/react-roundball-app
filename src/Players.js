import React, { Component } from 'react';

const payload = [
    {
    name: 'Roundball Player 1',
    team: 'Roundball Team 1'
    },
    {
    name: 'Roundball Player 2',
    team: 'Roundball Team 2'
    },
    {
    name: 'Roundball Player 3',
    team: 'Roundball Team 3'
    },
    {
    name: 'Roundball Player 4',
    team: 'Roundball Team 4'
    }
]


const displayPlayers = payload.map((player, idx) => {
    return (
        <div key={idx}>
            <h1>Name: {player.name}</h1>
            <p>Team: {player.team}</p>
        </div>
    );
})

class Players extends Component {
    render() {
        return (
            <div className="Players">
                <h1>Players</h1>
                <div>
                    <h2>{Players.name}</h2>
                    <p>{Players.team}</p>
                    <div>
                        {displayPlayers}
                    </div>
                </div>
            </div>
        )
    }
}

export default Players;