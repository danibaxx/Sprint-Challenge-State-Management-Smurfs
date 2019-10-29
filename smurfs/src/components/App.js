import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { fetchSmurfs } from '../actions/fetch';

import SmurfForm from './smurf/SmurfForm';
import Smurfs from './smurf/Smurfs';


import "./App.css";

function App(props) {

  useEffect(() => {
    props.fetchSmurfs();
  }, []);

  asdfasdf
  return(
    <div>
      <h1>Smurf Village</h1>
      {/* hold components */}
      <SmurfForm />
      <Smurfs />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    // fetchSmurfs: state.smurf.fetchSmurfs,
    // smurf: state.smurf.smurf,
    // smurfError: state.smurf.error
  }
}

const mapDispatchToProps = {
  fetchSmurfs
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
