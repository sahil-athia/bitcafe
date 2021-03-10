import './Menu.scss'
import classNames from 'classnames';

export default function Menu(props) {
  const ALL = "ALL"
  const DRINK = "DRINK"
  const DESSERT = "DESSERT"
  const COFFEE = "COFFEE"
  // const changeView = (newView) => setView(newView)

  const menuClass = classNames('menu', {
    'menu--light': props.light,
    'menu--dark': props.dark
  });

  const menuToggle = () => {
    props.open ? props.setOpen(false) : props.setOpen(true)
  }

  const themeToggle = (caller) => {
    if (caller === "light") {
      props.setDark(false)
      props.setLight(true)
    } else if (caller === "dark") {
      props.setDark(true)
      props.setLight(false)
    }
  }
  return (
    <nav role="navigation" >
        <div className="menuToggle">
          <input type="checkbox" onClick={menuToggle} />

          <span></span>
          <span></span>
          <span></span>

          <ul className={menuClass}>
            <button className="menuItem" onClick={() => props.setView(ALL)}><li>All</li></button>
            <button className="menuItem" onClick={() => props.setView(DRINK)}><li>Drinks</li></button>
            <button className="menuItem" onClick={() => props.setView(DESSERT)}><li>Desserts</li></button>
            <button className="menuItem" onClick={() => props.setView(COFFEE)}><li>Coffee</li></button>
            <button className="themeButton" onClick={() => themeToggle("dark")}>Dark</button>
            <button className="themeButton" onClick={() => themeToggle("light")}>Light</button>
          </ul>
        </div>
      </nav>
  )
};