import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from './components/Home';
import Day from './components/Day';
import './App.css';

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Day />} />
    </Routes>
  </BrowserRouter>
};

export default App;
