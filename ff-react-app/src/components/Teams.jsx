
function Teams({setActiveTab}) {
    return(
        <div className="teams-page">
            <h2>Teams</h2>
            <nav>
                <button onClick={() => setActiveTab("newTeam")}>Create New Team</button>
            </nav>
        </div>
    );
}

export default Teams