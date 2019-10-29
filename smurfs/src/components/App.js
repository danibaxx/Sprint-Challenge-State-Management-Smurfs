import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { fetchSmurfs } from '../actions/fetch';

import SmurfForm from './smurf/SmurfForm';
import Smurfs from './smurf/Smurfs';


import "./App.css";

const App = () =>  {
  
  useEffect(() => {
    props.fetchSmurfs();
  }, []);

  return(
    <div>
      <h1>Smurf Village</h1>
      {/* hold components */}
      <SmurfForm />
      <Smurfs />
    </div>
  );
}

const mapStateToProps = () => {
  return {
    // add state here
  }
}

const mapDispatchToProps = {
  fetchSmurfs
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
