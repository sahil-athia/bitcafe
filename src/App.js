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

  console.log(open)

  return (
    <div className="App">
      <Nav />
      <Menu setView={setView} setOpen={setOpen} opne={open} />
      {view === "ALL" && <All />}
      {view === "DRINK" && <Drink />}
      {view === "DESSERT" && <Dessert />}
      {view === "COFFEE" && <Coffee />}
    </div>
  );
}

export default App;
