import './App.css';
import React from 'react';

import Hello from './components/Hello';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import MessageStatemanageEventHandling from './components/MessageStatemanage/MessageStatemanageEventHandling';
import MessagePostState from './components/MessageStatemanage/MessagePostState';

import Counter from './components/counter/Counter';
import ConditinalRendering from './components/ConditinalRendering';
import ListRendering from './components/ListRendering';
import { List } from '@mui/material';
import NameList from './components/NameList';


function App() {
  return (
    <div >
      {/* <Hello/> */}
      
      {/* <Greet name="Functional" lastName="component"/>   */}
      
      {/* <Welcome name="Class" lastName="component"> 
        This is children props
        but it is not a good practice to use children props
      </Welcome>  */}

      {/* <MessagePostState/> */}

      {/* <MessageStatemanageEventHandling name="Event " lastName="handling"/> */}
      
      <br/>
      <Counter/>
      <br/>
      
      <br/>
      <ConditinalRendering/>   
      
      <br/>
      {/* ListRendering.js:8 Warning: Each child in a list should have a unique "key" prop. */}
      {/* <ListRendering/>    */}
      
      <NameList/>

    </div>
  );
}

export default App;
