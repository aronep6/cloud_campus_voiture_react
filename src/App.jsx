import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Day from './components/Day';
import Counter from "./components/Counter";
import './App.css';

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/day" element={<Day />} />
      <Route path="/counter" element={<Counter />} />
    </Routes>
  </BrowserRouter>
};

export default App;
