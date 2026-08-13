import Players from './Players.jsx'

function Header(){
    return(
        <header> 
            <h1>Fantasy Football App</h1>
            <nav>
                <button onClick={() => setActiveTab("players")}>Players</button>
                <button onClick={() => setActiveTab("teams")}>Teams</button>
                <button onClick={() => setActiveTab("leagues")}>Leagues</button>
            </nav>
            <hr/>
        </header>
    );
}

export default Header