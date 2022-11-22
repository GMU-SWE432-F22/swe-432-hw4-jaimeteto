import React, { Component , useState } from 'react';
import './index.css';



function CountSets({count,setCount, target, setTarget, handleClick}) {
  
  //const [count,setCount] = useState(0);
 
  
  //const [input,inputIn]= useState(false);

  


return(

	    <button  type ="button" onClick={handleClick}>Next Set</button>

	);

	// const handleEnter = function(e){


	// 	if(e.key ==='Enter'){
	// 		setTarget(e.target.value);
	// 		inputIn(true);
	// 	}
	// }


// if(!input){
//   return (
//     <div>
    
//       <input placeHolder = "enter target number of sets" onKeyDown={handleEnter} />

//     </div>
//   );

//  }
//  else{

//  		return(
//  	<div id = "container">
 	
//     <div id="text">Target: {target}</div>
    
//     <button  type ="button" onClick={handleClick}>Next Set</button>
      

//     </div>
//     );
		
//  }
 }



export default CountSets;