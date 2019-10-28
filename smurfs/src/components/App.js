import React, { useState, useEffect } from "react";
import axios from 'axios';

import { SmurfContext } from './context/SmurfContext';

import SmurfForm from './smurf/SmurfForm';
import Smurfs from './smurf/Smurfs';

import "./App.css";

const App = () =>  {
  const [smurf, setSmurf] = useState([]);

  const smurfs = {
    smurf,
    setSmurf
  };

  // const addSmurf = item => {
  //   setSmurf([...smurf, item])
  // };

  useEffect(() => {
    setSmurf([])
    axios
      .get('http://localhost:3333/smurfs')
      .then(response => {
        console.log("Response", response.data)
        setSmurf(response.data)
      })
      .catch(error => {
        console.log('ERROR', error)
      })
  }, [])

  return (
    <SmurfContext.Provider value={smurfs}>
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <SmurfForm />
        <Smurfs 
          name={smurf.name}
          age={smurf.age}
          height={smurf.height}
        />
      </div>
    </SmurfContext.Provider>
  );
}

export default App;
