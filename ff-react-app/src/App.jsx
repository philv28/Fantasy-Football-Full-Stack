import { useState } from "react";
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Players from './components/Players.jsx'
import Teams from './components/Teams.jsx'
import NewTeam from './components/NewTeam.jsx'

function App() {
  const [activeTab, setActiveTab] = useState("home");

  return(
    <>
      <Header setActiveTab={setActiveTab}/>
      {activeTab === "players" && <Players />}
      {activeTab === "teams" && <Teams setActiveTab={setActiveTab} />}
      {activeTab === "newTeam" && <NewTeam />}
      <Footer/>
    </>
  );

}

export default App
