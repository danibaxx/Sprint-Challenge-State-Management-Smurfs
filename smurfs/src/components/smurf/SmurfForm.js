import React, { useState, } from 'react';
import axios from 'axios';

const SmurfForm = () => {
  const [newSmurf, setNewSmurf] = useState([])
  
    axios
    .post('http://localhost:3333/smurfs')
    .then(res => {
      setNewSmurf(res.data)
      console.log('new smurf', res.data)
    })
    .catch(err => {
      console.log('Error Loading...', err.res)
    })

  return (
    <div className='smurf-form'>
      <form>
        <input 
          placeholder='Name'
          name='name'
          value={newSmurf.name}
        />
        <input 
          placeholder='Age'
          name='age'
          value={newSmurf.age}
        />
        <input
          placeholder='Height'
          name='height'
          value={newSmurf.height} 
        />
        <button type='submit'>Add Smurf to the village</button>
      </form>
    </div>
  );
};

function mapStateToProps(store) {
  return {
    
  }
}

export default SmurfForm;