import React, { useState } from 'react';
import { connect } from 'react-redux';

import Smurf from './Smurf';

const Smurfs = () => {
  const [smurfList] = useState([]);
  console.log("Smurf List", smurfList)
  return (
    <div className='smurfs'>
      <ul>
        {smurfList.map(smurf => (
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

export default connect(
  null,
  {}
)(Smurfs);