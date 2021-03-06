import './Menu.css'
import { useState } from "react";

export default function Menu(props) {
  const ALL = "ALL"
  const DRINK = "DRINK"
  const DESSERT = "DESSERT"
  const COFFEE = "COFFEE"
  const [view, setView] = useState(ALL)

  // const changeView = (newView) => setView(newView)

  return (
    <nav role="navigation">
        <div id="menuToggle">
          <input type="checkbox" />

          <span></span>
          <span></span>
          <span></span>

          <ul id="menu">
            <a href="#" onClick={() => setView(ALL)}><li>All</li></a>
            <a href="#" onClick={() => setView(DRINK)}><li>Drinks</li></a>
            <a href="#" onClick={() => setView(DESSERT)}><li>Desserts</li></a>
            <a href="#" onClick={() => setView(COFFEE)}><li>Coffee</li></a>
          </ul>
        </div>
      </nav>
  )
};