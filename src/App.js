import React, { Component, useState } from 'react';
import './App.css';
import  EnterWorkout from './component1/EnterWorkoutName.js';
import CountSets from './component2/component2.js';
import Logo from './component3/component3.js';
import RecordReps from './component4/component4.js';
import  List from './component5/component5.js';



class App extends Component {
  // Initialize state
  state = { list: [] }

  // Fetch passwords after first mount

 

  setCities() {
    
    const cities = [];
    this.setState({ cities });
  }

render() {


    return (


     

      <div className="App">
      
        {/* Render the cities*/}
          
          <div><Logo/></div>
          <div class = "wrapper">

          {/*<div class = "workout">  <EnterWorkout/> <CountSets/><RecordReps/></div>
          <div class = "workout"> <EnterWorkout/><CountSets/> </div>
          <div class = "workout">  <EnterWorkout/><CountSets/> </div>
          <div class = "workout">  <EnterWorkout/><CountSets/> </div>
          <div class = "workout">  <EnterWorkout/><CountSets/> </div>
            */}


         
         <div class ="workout"> <EnterWorkout/><List/></div>
         <div class ="workout"> <EnterWorkout/><List/></div>
         <div class ="workout"> <EnterWorkout/><List/></div>
         <div class ="workout"> <EnterWorkout/><List/></div>
         <div class ="workout"> <EnterWorkout/><List/></div>
          

          </div>
            
            
            
      

      

      
          </div>
      );    
  }
}


export default App;
