import React from 'react';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Banner from './components/Banner';

const App:React.FC = () => {
  return (
    <div className="App">
      <NavBar />
      <Banner />
    </div>
  )
}

export default App;
