import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from "./components/Button";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from './components/Benefits';
import Collaboration from './components/Collaboration';
import Services from './components/Services';
import Pricing from './components/Pricing';
import RoadMap from './components/RoadMap';
import Footer from './components/Footer';

const App=()=> {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <div className="pt-[4.75] lg:pt-[5.25rem] overflow-hidden">
      <Header />
      <Hero />
      <Benefits/>
      <Collaboration/>
      <Services/>
      <Pricing/>
      <RoadMap/>
      <Footer/>

    </div>
    <ButtonGradient/>
    </>

  )
}

export default App;
