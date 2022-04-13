import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home/Home";
import MainPages from "./Pages/Main/MainPages";
// import Ddd from './Pages/Dorixona/Ddd';
import Dorixona from './Pages/Dorixona/Dorixona';
import Markazlashgan from "./Pages/Dorixona/Sections/Markazlashgan";
import Ichki from './Pages/Dorixona/Sections/Ichki';
import Muruvvat from './Pages/Dorixona/Sections/Muruvvat';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Routes>
        <Route path="/" element={<MainPages />} />
        <Route path="/Dorixona" element={<Dorixona/>} />
        <Route path="/Markazlashgan" element={<Markazlashgan/>} />
        <Route path="/Ichki" element={<Ichki/>} />
        <Route path="/Muruvvat" element={<Muruvvat/>} />
      </Routes>
    </>
  );
}

export default App;
