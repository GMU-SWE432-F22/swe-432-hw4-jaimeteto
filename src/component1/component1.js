import React, { Component , useState } from 'react';


class component1 extends Component {
  // Initialize state

  constructor(props){

    super(props);

  this.state = { workoutName :"name"}
                 
          } 

  componentDidMount() {
    this.foo();
  } 

  foo(){

    this.setState({workoutName:"hello"});
  }      
                   
render(){
  return(

    <div className = "testing">


        <h1>helloooooooooooo</h1>



    </div>


  );
}

}

  export default component1;