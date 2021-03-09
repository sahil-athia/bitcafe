import logo from './logo.svg';
import Menu from './components/Menu.jsx'
import Nav from './components/Nav.jsx'

import All from "./components/views/All"
import Dessert from "./components/views/Dessert"
import Drink from "./components/views/Drink"
import Coffee from "./components/views/Coffee"

import { useState } from "react";
import './App.css';


function App() {
  const ALL = "ALL"
  const [view, setView] = useState(ALL)
  const [open, setOpen] = useState(false)


  return (
    <div className="App">
      <Nav />
      <Menu setView={setView} setOpen={setOpen} open={open} />
      {view === "ALL" && <All open={open} />}
      {view === "DRINK" && <Drink open={open} />}
      {view === "DESSERT" && <Dessert open={open} />}
      {view === "COFFEE" && <Coffee open={open} />}
    </div>
  );
}

export default App;
