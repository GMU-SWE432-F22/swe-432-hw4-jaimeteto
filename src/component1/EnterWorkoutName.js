import React, { Component , useState } from 'react';

import './EnterNameIndex.css';

function EnterWorkout() {
  
  const [firstName,setFirstName] = useState("none");
  const [input,inputIn]= useState(false);

  const handleNameChange = function (e) {

		setFirstName(e.target.value);
		inputIn(true)





			}

	const handleEnter = function(e){


		if(e.key ==='Enter'){
			setFirstName(e.target.value);
			inputIn(true);
		}
	}


if(!input){
  return (
    <div>
    
      <input placeHolder = "enter workout name" onKeyDown={handleEnter} />

    </div>
  );

 }
 else{
 		return(
 	<div>

    <h2>{firstName}</h2>
      

    </div>
    );
 }
}

export default EnterWorkout;