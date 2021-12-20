import React, { Component } from 'react';

const payload = [
    {
      team: 'Roundball Team 2',
      city: 'City 2'
    },
    {
      team: 'Roundball Team 3',
      city: 'City 3'
    },
    {
      team: 'Roundball Team 4',
      city: 'City 4'
    },
    {
      team: 'Roundball Team 5',
      city: 'City 5'
    },
  ]

  
const displayTeams = payload.map((team, idx) => {
      return(
            <div key={idx}>
            <h1>Team: {team.team}</h1>
            <p>City: {team.city}</p>
            </div>
    );
})

class Teams extends Component {
    render() {
        return (
        <div className="Teams">
            <h1>Teams</h1>
            <div>
                <h2>{Teams.team}</h2>
                <p>{Teams.city}</p>
                <div>
                    {displayTeams}
                </div>
            </div>
        </div>
            )
    }
}

export default Teams;