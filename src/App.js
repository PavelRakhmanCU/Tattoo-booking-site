import React from 'react';
import './App.css';
import { Routes, Route} from 'react-router-dom';
import ToggleSwitch from './components/ToggleSwitch';
import SideBarMenu from './components/sideBarMenu';
import { GlobalContextProvider } from './context/GlobalContext';
import Gallery from './pages/Gallery';
import Gallery2 from './pages/Gallery2';
import Booking from './pages/BookingPage';
import AfterCare from './pages/Aftercare';
import HomePage from './pages/HomePage';
import InstagramButton from './components/InstagramButton';
function App() {
  return (

    <GlobalContextProvider>
    <Routes>
    </Routes>
    <div className="App">
    <ToggleSwitch></ToggleSwitch>
    <InstagramButton/>
   <SideBarMenu></SideBarMenu></div>
   <Routes>
    <Route path="/gallery1" element={<Gallery></Gallery>}></Route>
    <Route path='/gallery2' element={<Gallery2></Gallery2>}></Route>
    <Route path='/booking' element={<Booking></Booking>}></Route>
    <Route path='/' element={<HomePage></HomePage>}></Route>
    <Route path='/aftercare' element={<AfterCare></AfterCare>}></Route>
    </Routes>
    
    </GlobalContextProvider>
    
    
  );
}

export default App;
