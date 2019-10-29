import React, { useState } from 'react';
import { connect } from 'react-redux';

const Smurfs = () => {
  const [smurfList] = useState([]);
  console.log("Smurf List", smurfList)
  return (
    <div className='smurfs'>
      <ul>
        {smurfList.map(smurf => (
          <div className='smurf-card'>
            <h3>Name: {smurf.name}</h3>
            <strong>Height: {smurf.height} tall</strong>
            <p>Age: {smurf.age} smurf years old</p>
          </div>
        ))}
      </ul>
    </div>
  )
};

export default connect()(Smurfs);