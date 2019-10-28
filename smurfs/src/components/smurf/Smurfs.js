import React from 'react';

import Smurf from './Smurf';

const Smurfs = () => {
  return (
    <div className='smurfs'>
      <h1>Smurf Village</h1>
      <ul>
        {/* map over smurfs */}
          return (
            <Smurf />
          )
      </ul>
    </div>
  );
};

export default Smurfs;