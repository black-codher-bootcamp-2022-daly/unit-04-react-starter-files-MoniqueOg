import logo from './logo.svg';
import './App.css';
import { NavBar } from './NavBar'
import { Header } from './components/Header';
import { Footer } from './components/Footer';


const monique = <Header name="Monique" color="yellow" fruit="lychee"/>;
const keir = <NavBar name="Keir" color="blue"/>

function App() {  
  return (
    <div className="App">
      <NavBar>
        <li>Homepage</li>
        <li>About</li>
        <li><button onClick={() => setNameToShow("Monique")}>Show Monique</button></li>
        <li><button onClick={() => setNameToShow("Keir")}>Show Keir</button></li>
      </NavBar>
      {setNameToShow === "Monique"? monique :keir}
      
      {
        if()
      }

      <Header className="header-monique" name="Monique" color="yellow" object="sun"></Header>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Monique
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Footer nickname="Money"/>
    </div>
  );
}

export default App;
