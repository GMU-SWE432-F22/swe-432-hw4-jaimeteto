import React, { Component, useState } from 'react';
import './App.css';
import  EnterWorkout from './component1/EnterWorkoutName.js';
import CountSets from './component2/component2.js';
import Logo from './component3/component3.js';
import RecordReps from './component4/component4.js';
import  List from './component5/component5.js';
import pic from './pexels-victor-freitas-2261477.jpg';


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
          
          <div class = "myLogo"><Logo/></div>
          <div class = "wrapper">

         

        
         <div class ="workout"><h2>Workout 1</h2> <EnterWorkout/><List/></div>
         <div class ="workout"><h2>Workout 2 </h2><EnterWorkout/><List/></div>
         <div class ="workout"><h2>Workout 3</h2> <EnterWorkout/><List/></div>
         <div class ="workout"><h2>Workout 4</h2> <EnterWorkout/><List/></div>
         <div class ="workout"><h2>Workout 5</h2> <EnterWorkout/><List/></div>
          

          </div>
            
            
            
      

      

      
          </div>
      );    
  }
}


export default App;
