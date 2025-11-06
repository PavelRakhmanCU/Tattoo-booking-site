import React from 'react';
import './App.css';
import { Routes, Route} from 'react-router-dom';
import ToggleSwitch from './components/ToggleSwitch';
import SideBarMenu from './components/sideBarMenu';
import { GlobalContextProvider } from './context/GlobalContext';
import Gallery from './pages/Gallery';
import Gallery2 from './pages/Gallery2';
import Gallery3 from './pages/Gallery3';
import Gallery4 from './pages/Gallery4';
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
    <Route path='/gallery3' element={<Gallery3></Gallery3>}></Route>
    <Route path='/gallery4' element={<Gallery4></Gallery4>}></Route>
    <Route path='/booking' element={<Booking></Booking>}></Route>
    <Route path='/' element={<HomePage></HomePage>}></Route>
    <Route path='/aftercare' element={<AfterCare></AfterCare>}></Route>
    </Routes>
    
    </GlobalContextProvider>
    
    
  );
}

export default App;
