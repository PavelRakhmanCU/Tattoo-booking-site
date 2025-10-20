import React from 'react';
import './App.css';
import { Routes, Route} from 'react-router-dom';
import ToggleSwitch from './components/ToggleSwitch';
import SideBarMenu from './components/sideBarMenu';
import { GlobalContextProvider } from './context/GlobalContext';
import Gallery from './pages/Gallery';
import Booking from './pages/BookingPage';
import HomePage from './pages/HomePage';
function App() {
  return (

    <GlobalContextProvider>
    <Routes>
    <Route path="/gallery1" element={<Gallery></Gallery>}></Route>
    </Routes>
    <div className="App">
    <ToggleSwitch></ToggleSwitch>
   <SideBarMenu></SideBarMenu></div>
   <Routes>
    <Route path="/gallery1" element={<Gallery></Gallery>}></Route>
    <Route path='/booking' element={<Booking></Booking>}></Route>
    <Route path='/' element={<HomePage></HomePage>}></Route>
    </Routes>
    
    </GlobalContextProvider>
    
    
  );
}

export default App;
