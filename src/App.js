import logo from './logo.svg';
import './App.css';
import './components/Nav.css'

function App() {
  return (
    <div className="App">
      <h1>BitCafe</h1>
      <nav role="navigation">
        <div id="menuToggle">
          <input type="checkbox" />

          <span></span>
          <span></span>
          <span></span>

          <ul id="menu">
            <a href="#"><li>Home</li></a>
            <a href="#"><li>About</li></a>
            <a href="#"><li>Info</li></a>
            <a href="#"><li>Contact</li></a>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default App;
