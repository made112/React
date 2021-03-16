import logo from './logo.svg';
import './App.css';
import MyComoponent from "./components/Graet";
import Welcome from "./components/Welcome";
import React, { Fragment } from "react";
import Hello from "./components/Hello";
import Great from "./components/Graet";
import Message from "./components/Message";
import Counter from './components/Counter';
import FunctionClick from './components/Function';
import HandleClass from './components/HandleClass';
import EventHandler from './components/EventBind';
import ParentComponents from './components/ParentComponents';
import UserGreat from './components/UserGreat';
import ListComponents from './components/ListComponents';
import Stylesheet from './components/Stylesheet';
import './appStyle.css'
import styles from './appStyle.module.css'
import FormComponents from './components/FormComponents';
import Ftagment from './components/Ftagment';
import PostList from './components/PostList';
import Counterb from './components/Counterb';
import HookCounter from './components/HookCounter';
import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
      <Todo/>
      {/* <HookCounter/> */}
      {/* <Counterb/> */}
      {/* <PostList/> */}
      {/* <Ftagment/> */}
      {/* <FormComponents/> */}
      {/* <h1 className = 'error'>Error</h1>
      <h1 className = {styles.sucsess}>Succ</h1> */}

      {/* <ListComponents/> */}
      {/* <ParentComponents/> */}
      {/* <UserGreat/> */}
      {/* <EventHandler/> */}
      {/* <ParentController/> */}
      {/* <HandleClass/> */} 
      {/* <Great/> */}
      {/* <Counter/> */}
        {/* <Message/> */}
     {/* <Great name  = "a" heroName = "moha"/>
      <Great name = "b" heroName = "masda"/> */}
     {/*   <Great name = "c"/>*/}
     {/* <Welcome name  = "bvbv" heroName = "moha"/>
      <Welcome name = "bmhj" heroName = "masda"/> */}

        {/*/!*<Welcome/>*!/*/}
     {/*<Hello/>*/}


    </div>
  );
}

export default App;
