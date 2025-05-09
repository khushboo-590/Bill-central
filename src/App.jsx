import React from 'react'
import './App.css'
import Header from './components/Header'
import Slider from './components/Slider'
import SwitchEngery from './components/SwitchEngery'
import SwitchSilder from './components/SwitchSilder'
import ComprehensiveUtility from './components/ComprehensiveUtility'
import Footer from './components/Footer'
import JoinNews from './components/JoinNews'
import Utilies from './components/Utilies'
import Testimonls from './components/Testimonls'
import Faq from './components/Faq'
function App() {

  return (
    <>
      <Header />
      <Slider />
      <SwitchEngery />
      <SwitchSilder />
      <ComprehensiveUtility/>
      <Utilies />
      <Testimonls />
      <Faq/>
      <JoinNews/>
      <Footer/>
    </>
  )
}

export default App
