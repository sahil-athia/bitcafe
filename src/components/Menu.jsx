import './Menu.scss'

export default function Menu(props) {
  const ALL = "ALL"
  const DRINK = "DRINK"
  const DESSERT = "DESSERT"
  const COFFEE = "COFFEE"
  // const changeView = (newView) => setView(newView)

  return (
    <nav role="navigation">
        <div id="menuToggle">
          <input type="checkbox" />

          <span></span>
          <span></span>
          <span></span>

          <ul id="menu">
            <button className="menuItem" onClick={() => props.setView(ALL)}><li>All</li></button>
            <button className="menuItem" onClick={() => props.setView(DRINK)}><li>Drinks</li></button>
            <button className="menuItem" onClick={() => props.setView(DESSERT)}><li>Desserts</li></button>
            <button className="menuItem" onClick={() => props.setView(COFFEE)}><li>Coffee</li></button>
          </ul>
        </div>
      </nav>
  )
};