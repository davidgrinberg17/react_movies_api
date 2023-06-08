import './App.css';
import { PeliculasGrid } from './Components/PeliculasGrid';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">
          <h1 className="title">Peliculas</h1>
        </Link>
      </header>
      <Routes>
        <Route path="/" element={<PeliculasGrid/>}/>
        <Route path="pelicula" element="otra vista"/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;