import { React } from "react";
import ReactDOM from "react-dom/client";
import propTypes from "prop-types";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PetForm from "./components/PetForm";

export default function App() {
  return (
    <Router>
      <ul className="breadcrumb">
        <li>
          <Link to="/"> All Pets </Link>
        </li>
        <li>
          <Link to="/kittens"> Kittens </Link>
        </li>
        <li>
          <Link to="/puppies"> Puppies </Link>
        </li>
        <li>
          <Link to="/duckling"> Duckling </Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="kittens"
          element={<Animal name="kitten" img="imgs/kitten.jpg" />}
        />
        <Route
          path="puppies"
          element={<Animal name="puppies" img="imgs/puppy.jpg" />}
        />
        <Route
          path="duckling"
          element={<Animal name="duckling" imgs="imgs/duckling.jpg" />}
        />
      </Routes>
    </Router>
  );
}

function Home() {
  return (
    <>
      <h1>All Pets</h1>
      <section>This is the page for all your pet needs</section>
      <PetForm />
      <img src="imgs/kitten.jpg" alt="Kitten" />
      <img src="imgs/puppy.jpg" alt="Puppy" />
      <img src="imgs/duckling.jpg" alt="Duckling" />
    </>
  );
}

function Kittens() {
  return (
    <>
      <h1>Kittens</h1>
      <section>This is the cats page</section>
      <img src="imgs/kitten.jpg" alt="Kitten" />
    </>
  );
}

function Puppies() {
  return (
    <div>
      <h2>Puppies</h2>
      <section>This is the dogs page</section>
      <img src="imgs/puppy.jpg" alt="puppy" />
    </div>
  );
}

function Duckling() {
  return (
    <div>
      <h3>Ducklings</h3>
      <section>This is the duckling page</section>
      <img src="imgs/duckling.jpg" alt="duckling" />
    </div>
  );
}

function Animal({ name, img }) {
  return (
    <div>
      <h2>{name}</h2>
      <section>This is the {name} page</section>
      <img src={img} alt={name} />
    </div>
  );
}

Animal.propTypes = {
  name: propTypes.string,
  img: propTypes.string,
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);