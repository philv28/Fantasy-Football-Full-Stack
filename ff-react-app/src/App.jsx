import { useState } from "react";
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Players from './components/Players.jsx'

function App() {
  const [activeTab, setActiveTab] = useState("home");

  return(
    <>
      <Header setActiveTab={setActiveTab}/>
      {activeTab === "players" && <Players />}
      <Footer/>
    </>
  );

}

export default App
