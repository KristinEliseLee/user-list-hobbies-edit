import React from 'react';
import { connect } from "react-redux";
import './App.css';
import ListView from './views/ListView'
import DetailView from './views/DetailView'

 function ConnectedApp(props) {
  if (props.detailView){
    return <DetailView/>
    return <p> hi </p>
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
