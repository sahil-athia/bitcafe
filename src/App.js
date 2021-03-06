import logo from './logo.svg';
import Menu from './components/Menu.jsx'
import Nav from './components/Nav.jsx'
import All from "./components/views/All"
import Dessert from "./components/views/Dessert"
import { useState } from "react";
import './App.css';


function App() {
  const ALL = "ALL"
  const [view, setView] = useState(ALL)
  return (
    <div className="App">
      <Nav />
      <Menu setView={setView} />
      {view === ALL && <All />}
      {view === "DESSERT" && <Dessert />}
    </div>
  );
}

export default App;
