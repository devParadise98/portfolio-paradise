import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-multi-carousel/lib/styles.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Jobs from './components/Jobs';
import Footer from './components/Footer';
import './App.css';

const App:React.FC = () => {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Jobs />
      <Footer />
    </div>
  )
}

export default App;
