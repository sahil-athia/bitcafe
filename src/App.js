import logo from './logo.svg';
import Menu from './components/Menu.jsx'
import Nav from './components/Nav.jsx'

import All from "./components/views/All"
import Dessert from "./components/views/Dessert"
import Drink from "./components/views/Drink"
import Coffee from "./components/views/Coffee"

import classNames from 'classnames';

import { useState } from "react";
import './App.css';


function App() {
  const ALL = "ALL"
  const [view, setView] = useState(ALL)
  const [open, setOpen] = useState(false)
  const [light, setLight] = useState(true)
  const [dark, setDark] = useState(false)

  const appClass = classNames('App', {
    'App--light': light,
    'App--dark': dark
  });

  console.log(light, dark)

  return (
    <div className={appClass}>
      <Nav 
        light={light}
        dark={dark}
      />
      <Menu 
        setView={setView} 
        setOpen={setOpen}
        setLight={setLight} 
        setDark={setDark}
        open={open} 
        light={light}
        dark={dark}

      />
      {
        view === "ALL" && 
        <All 
          open={open} 
          light={light}
          dark={dark}
        />
      }

      {
        view === "DRINK" && 
        <Drink 
          open={open} 
          light={light}
          dark={dark}
        />
      }

      {
        view === "DESSERT" && 
        <Dessert 
          open={open} 
          light={light}
          dark={dark} 
        />
      }

      {
        view === "COFFEE" && 
        <Coffee 
          open={open} 
          light={light}
          dark={dark} 
        />
      }

    </div>
  );
}

export default App;
