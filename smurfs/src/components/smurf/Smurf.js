import React from 'react';
import { connect } from 'react-redux'; 

const Smurf = props => {
  console.log('Smurf Props', props)
  return (
    <div className='smurf-card'>
      <h3>Name: {props.name}</h3>
      <strong>Height: {props.height} tall</strong>
      <p>Age: {props.age} smurf years old</p>
    </div>
  );
};

export default connect()(Smurf);