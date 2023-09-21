import './App.css';
import { useState } from 'react';
import WelcomePage from './components/welcome';
import SlideImages from './components/ImageSlider'
import LivingDiningPage from './components/living';
import BackyardPage from './components/garden';
import MastersPage from './components/bedroom1';
import BedroomPage from './components/bedroom2';
import BathroomPage from './components/bathroom';
import KitchenPage from './components/kitchen';

function App() {
  const [buttonClicked, setButtonClicked] = useState(0) //which to render in body
  const [OpenDropdown, setOpenDropdown] = useState(false) //when the dropdown menu will show up

  //function for dropdown menu items
  function DropDownItems() {
    return (
      <div className='ddItems'>
        <h4 onClick={() => setButtonClicked(3)}>Living Room</h4>
        <h4 onClick={() => setButtonClicked(4)}>Primary Bedroom</h4>
        <h4 onClick={() => setButtonClicked(5)}>Bedroom 2</h4>
        <h4 onClick={() => setButtonClicked(6)}>Bathroom/Laundry</h4>
        <h4 onClick={() => setButtonClicked(7)}>Kitchen</h4>
        <h4 onClick={() => setButtonClicked(8)}>Backyard</h4>
      </div>
    )
  }

  return (
    <div>
      <nav className='header'>
        <h3 className='headerItems' onClick={() => setButtonClicked(1)}>Welcome</h3>
        <h3 className='headerItems' onClick={() => setButtonClicked(2)}>Description</h3>
        <h3 className='headerItems' onClick={() => setOpenDropdown((prev => !prev))}>Enter House</h3>
        {OpenDropdown && <DropDownItems />}
      </nav>
      <div className='body'>
        {buttonClicked === 0 && <WelcomePage />}
        {buttonClicked === 1 && <WelcomePage />}
        {buttonClicked === 2 && <SlideImages />}
        {buttonClicked === 3 && <LivingDiningPage />}
        {buttonClicked === 4 && <MastersPage />}
        {buttonClicked === 5 && <BedroomPage />}
        {buttonClicked === 6 && <BathroomPage />}
        {buttonClicked === 7 && <KitchenPage />}
        {buttonClicked === 8 && <BackyardPage />}


      </div>

    </div>
  )
}

export default App;

