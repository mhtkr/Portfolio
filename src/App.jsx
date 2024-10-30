import React from 'react';
import Header from './Components/Header';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import CardList from './Components/CardsList';
import SkillCard from './Components/SkillCard';
import Achieve from './Components/Achieve';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <CardList/>
      <SkillCard/>
      <Projects />
      <Achieve />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
