import './App.css';

import LandingP from './components/LandingP';
import HomeP from './components/HomeP';
import { Routes, Route } from "react-router-dom";
import DetailCountry from './components/DetailCountry';
import CreateActivity from './components/CreateActivity';


function App() {
  return (
    
    <div className="App">
      
      <Routes>
      
          <Route exact path="/" element={<LandingP/>} />
          <Route exact path="/home" element={<HomeP/>} />

          <Route path= "/home/:id" element= {<DetailCountry />}/>
          <Route path= "/home/activityform" element= {<CreateActivity />}/>

      </Routes>
      
    </div>
    
  );
}

export default App;
