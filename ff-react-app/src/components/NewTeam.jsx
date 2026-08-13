import { useState } from "react";
import players from '../players.json'

function NewTeam(){
    const [teamPlayers, setTeamPlayers] = useState([]);
    function addPlayer(player) {
        setTeamPlayers([...teamPlayers, player]);
    }
    return(
        <div className="new-team-page">
            <h2>New Team</h2>
            <table className="players-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Team</th>
                        <th>Projected Points</th>
                        <th>Salary</th>
                        <th>Bye Week</th>
                    </tr>
                </thead>
                <tbody>
                    {teamPlayers.map((player) => (
                        <tr key={player.id}>
                            <td>{player.name}</td>
                            <td>{player.position}</td>
                            <td>{player.team}</td>
                            <td>{player.projectedPoints} pts</td>
                            <td>{player.salaryMillions}</td>
                            <td>{player.byeWeek}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h2>Add Player to Team</h2>
            <table className="players-table">
                <thead>
                    <tr>
                        <th>Add Player</th>
                        <th>Name </th>
                        <th>Position </th>
                        <th>Team </th>
                        <th>Projected Points </th>
                        <th>Salary </th>
                        <th>Bye Week</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map((player) => (
                        <tr key={player.id}>
                            <button onClick={() => addPlayer(player)}>Add</button>
                            <td>{player.name}</td>
                            <td>{player.position}</td>
                            <td>{player.team}</td>
                            <td>{player.projectedPoints} pts</td>
                            <td>{player.salaryMillions}</td>
                            <td>{player.byeWeek}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default NewTeam