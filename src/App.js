/* App renders the current view based on view state. */

import React from 'react';
import { connect } from "react-redux";
import './App.css';
import ListView from './Views/ListView'
import DetailView from './Views/DetailView'

 function ConnectedApp(props) {
  if (props.detailView){
    return <DetailView/>
  }
  else {
    return <ListView/>
  }
}

function mapStateToProps(state) {
  return ({detailView: state.view.detailView})
}

const App = connect(mapStateToProps)(ConnectedApp)
export default App
