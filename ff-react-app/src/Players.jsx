import players from './players.json'

function Players(){
    return(
        <div>
            <h2>Players</h2>
            
            {players.map((player) => (
                <div key={player.id}>
                    Name: {player.name} - Position: {player.position} - Team: {player.team} - Projected Points: {player.projectedPoints} - Salary: {player.salaryMillions} - Bye Week: {player.byeWeek}
                </div>
            ))}
        </div>
    );
}

export default Players