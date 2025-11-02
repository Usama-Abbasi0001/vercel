import React from 'react'
import LeftBar from '../../components/NavBar/LeftBar';
import RightBar from '../../components/NavBar/RightBar';
import HeroSection from '../../components/HeroSec/HeroSection';
function Homepage() {
  return (
    <>
    <div className='container py-5 px-5 flex justify-between items-center'>
      <LeftBar/>
      <RightBar/>
      </div>
      <HeroSection/>
    </>
  )
}

export default Homepage;