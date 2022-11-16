import logo from './logo.svg';
import './App.css';

function Header(props) {
const {name, color, object, className} = props;
return (
  <h1 className = {className}>
 {name} is {color} like a {object}
  </h1>
);
}

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
