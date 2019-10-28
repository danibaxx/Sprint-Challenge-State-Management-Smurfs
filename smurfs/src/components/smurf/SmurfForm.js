import React, { useState } from 'react';
import axios from 'axios';

const SmurfForm = () => {
  const [newSmurf, setNewSmurf] = useState([])

    axios
    .post('http://localhost:3333/smurfs')
    .then(res => {
      console.log('res in post', res)
    })
    .catch(err => {
      console.log('Error Loading...', err)
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

export default SmurfForm;