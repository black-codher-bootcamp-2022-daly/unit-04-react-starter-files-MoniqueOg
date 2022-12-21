import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Monique/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders the header", () => {
  render(<Header name="Monique" color="yellow" fruit="lychee" />);
  const name = screen.getByText(/Monique/i);
  const color = screen.getByText(/yellow/i);
  const fruit = screen.getByText(/lychee/i);
  expect(name).toBeInTheDocument();
  expect(color).toBeInTheDocument();
  expect(fruit).toBeInTheDocument();
});

test("renders the NavBar", () => {
  render(<NavBar nickname="28">
    <li className="navabar-1"> SuperLink 1</li>
    <li>SuperLink 2</li>
  </NavBar>);
  const result = screen.getByText(/SuperLink 1/);
  expect(result).toBeInTheDocument()
});

test.only("renders the navbar", () => {
  render(<NavBar>
    <ul>
      <li>Link 1</li>
      <li>Link 2</li>
    </ul>
  </NavBar>)
  const result = screen.getByText(/Link 1/);
  expect(result).toBeInTheDocument()
});