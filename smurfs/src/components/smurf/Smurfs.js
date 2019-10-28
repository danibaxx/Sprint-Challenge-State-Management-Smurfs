import React from 'react';
// import { SmurfContext } from '../context/SmurfContext';

import Smurf from './Smurf';

const Smurfs = () => {
  // const smurfs = useContext(SmurfContext);
  return (
    <div className='smurfs'>
      <h1>Smurf Village</h1>
      <ul>
        {props.smurfs.map(smurf => (
          <Smurf 
            key={smurf.id}
            name={smurf.name}
            id={smurf.id}
            age={smurf.age}
            height={smurf.height}
          />
        ))}
      </ul>
    </div>
  );
};

export default Smurfs;