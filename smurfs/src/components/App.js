import React, { useState, useEffect } from "react";
import axios from 'axios';
import SmurfForm from './smurf/SmurfForm';

import "./App.css";


const App = () =>  {
  const [smurf, setSmurf] = useState([]);

  useEffect(() => {
    setSmurf([])
    axios.get()
  })
  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <div>Start inside of your `src/index.js` file!</div>
      <div>Have fun!</div>
      <SmurfForm />
    </div>
  );
}

export default App;
