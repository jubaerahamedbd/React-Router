import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter as Router, Link } from '../node_modules/react-router-dom'
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio'


function App() {
  return (
    <Router>
      <div className="App">
        <h1>Home</h1>


        <Link to="/about">About</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact">Contact</Link>
        <Routes>
          <Route path="/about" element={<About/>} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
