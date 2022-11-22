import React, { Component , useState } from 'react';
import './index.css';



function RecordReps({reps,setReps, input,inputIn,input2,inputIn2}) {
  
  //const [reps,setReps] = useState(0);
  
  const[weight,setWeight] = useState("");


	const handleEnter = function(e){


		if(e.key ==='Enter'){
			setReps(e.target.value);
			inputIn(true);
		}
	}

  const handleEnter2= function(e){


    if(e.key ==='Enter'){
      setWeight(e.target.value);
      inputIn2(true);
    }
  }


if((!input) && (!input2)){
  return (
    <div>
    
      <input placeHolder = "enter number of reps" onKeyDown={handleEnter} />
      <input placeHolder = "enter weight" onKeyDown = {handleEnter2}/>

    </div>
  );

 }

else {
  if (input && !input2){
      return (
      <div class= "container">
      <div class ="reps"> Number of reps: {reps}</div>
      <input placeHolder = "enter weight" onKeyDown = {handleEnter2}/>
      </div>
      );
  }
  
  return (
 	      <div class = "container">
 	
        <div class ="reps">Number of reps: {reps} </div>
        <div class = "weight"> {weight} Pounds  </div>
    
        </div>
    );

		
  }
 
}

export default RecordReps;