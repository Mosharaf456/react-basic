import './App.css';
import React, { Fragment, PureComponent } from 'react';

import Hello from './components/Hello';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import MessageStatemanageEventHandling from './components/MessageStatemanage/MessageStatemanageEventHandling';
import MessagePostState from './components/MessageStatemanage/MessagePostState';

import EventBinding from './components/counter/EventBinding';
import Counter from './components/counter/Counter';
import ConditinalRendering from './components/ConditinalRendering';
import ListRendering from './components/ListRendering';
import { List } from '@mui/material';
import NameList from './components/NameList';

import StyleSheet from './components/Stylesheet';
import Inline from './components/Inline';



import ModuleBasedStyles from './components/ModuleBasedStyles';
import Form from './components/Form';
import Parent from './components/Parent';
import FragmentDemo from './components/FragmentDemo';

import TopComp from './components/TopComp';
import RefsDemo from './components/RefsDemo';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundaryComp from './components/ErrorBoundaryComp';
import ClickCounter from './components/ClickCounter';
import HoverCountr from './components/HoverCountr';
import ClickCounter2 from './components/ClickCounter2';
import HoverCountr2 from './components/HoverCountr2';
import User from './components/User';
import CounterRender from './components/CounterRender';

function App() {
  return (
    <div style={{'text-align': 'center'}}>
      {/* <Parent/> */}
      {/* <Hello/> */}
      
      {/* <Greet name="Functional" lastName="component"/>   */}
      
      {/* <Welcome name="Class" lastName="component"> 
        This is children props
        but it is not a good practice to use children props
      </Welcome>  */}

      {/* <MessagePostState/> */}

      {/* <MessageStatemanageEventHandling name="Event " lastName="handling"/> */}
      
      {/* <EventBinding/> */}
      <br/>

      {/* <Counter/> */}
      <br/>
      
      <br/>
      {/* <ConditinalRendering/>    */}
      
      <br/>
      {/* ListRendering.js:8 Warning: Each child in a list should have a unique "key" prop. */}
      {/* <ListRendering/>    */}
      
      {/* <NameList/> */}

      {/* <StyleSheet primary={true}/> */}
      {/* <Inline/> */}
      {/* <h1 className='error'>Error app conflict css</h1> */}
      {/* <ModuleBasedStyles/> */}

      {/* <Form/> */}

      {/* <FragmentDemo/> */}

      {/* <TopComp/> */}

      {/* <RefsDemo/> */}

      {/* <PortalDemo/> */}

      {/* <ErrorBoundaryComp>
        <Hero heroName="Batman"/>
      </ErrorBoundaryComp>
      <ErrorBoundaryComp>
        <Hero heroName="Superman"/>
      </ErrorBoundaryComp> */}
      {/* <ErrorBoundaryComp>
        <Hero heroName="Joker"/>
      </ErrorBoundaryComp> */}

      {/* HOC to share common functinality */}
      {/* <ClickCounter name='Mosharaf'/>
        <HoverCountr/> */}

      
      {/* another approach render props pattern to reduce duplicate */}
      <CounterRender> 
        {(count, incrementCount) => (
          <ClickCounter2 count={count} incrementCount={incrementCount}/>
        )}
      </CounterRender>
      <CounterRender>
        {(count, incrementCount) => (
          <HoverCountr2 count={count} incrementCount={incrementCount}/>
        )}
      </CounterRender>

      <User render={(isLoggedIn) => isLoggedIn ? 'Mosharaf' : 'Guest'}/>

    </div>
  );
}

export default App;
