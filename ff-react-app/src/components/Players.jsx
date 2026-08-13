import players from '../players.json'

function Players(){
    return(
        <div className="players-page">
            <h2>Players</h2>
            <table className="players-table">
                <thead>
                    <tr>
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

export default Players