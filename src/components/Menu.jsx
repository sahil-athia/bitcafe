import './Menu.css'

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
            <a href="#" onClick={() => props.setView(ALL)}><li>All</li></a>
            <a href="#" onClick={() => props.setView(DRINK)}><li>Drinks</li></a>
            <a href="#" onClick={() => props.setView(DESSERT)}><li>Desserts</li></a>
            <a href="#" onClick={() => props.setView(COFFEE)}><li>Coffee</li></a>
          </ul>
        </div>
      </nav>
  )
};