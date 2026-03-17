import React, { useEffect } from 'react'
import { useLocation } from "react-router-dom";
import Landing from '../components/Landing'
import FeatureContainer from '../components/FeatureContainer'
import Feedback from '../components/Feedback'
import Footer from '../components/Footer'
const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;
    // allow layout to settle (navbar height, etc.)
    setTimeout(() => {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);
  }, [location.hash]);

  return (
    <div className='mt-16'>
        <Landing/>
        <div id="about">
          <FeatureContainer/>
        </div>
        <Feedback/>
        <div id="contact">
          <Footer/>
        </div>
   </div>
  )
}

export default Home