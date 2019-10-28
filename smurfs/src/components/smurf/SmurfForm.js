import React from 'react';

const SmurfForm = () => {
  return (
    <div className='smurf-form'>
      <form>
        <input 
          placeholder='name'
          name='name'
        />
        <input 
          placeholder='age'
          name='age'
        />
        <input
          placeholder='height'
          name='height' 
        />
        <button type='submit'>Add Smurf to the village</button>
      </form>
    </div>
  );
};

export default SmurfForm;