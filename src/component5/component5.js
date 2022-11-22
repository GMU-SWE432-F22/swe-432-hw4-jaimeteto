import React, { Component , useState ,useEffect} from 'react';
import './index.css';
import  EnterWorkout from '../component1/EnterWorkoutName.js';
import CountSets from '../component2/component2.js';
import Logo from '../component3/component3.js';
import RecordReps from '../component4/component4.js';

function List() {
const [list, setList]= useState([]);
const [reps,setReps] = useState(0);
const [count,setCount]= useState(1);
const[target,setTarget]= useState(-1);
const[completed, setCompleted] = useState(false);
const [input,inputIn]= useState(false);
  const [input2,inputIn2]= useState(false);
 const handleClick2 = function (e) {

		//setCount(count+1);
		setCompleted(true);
		 
	}
const handleClick = function (e) {


	setList(()=>list.concat({reps:reps,
								set:count}));

		setCount(count+1);
		//setCompleted(false);
		inputIn(false);
 		inputIn2(false);


		
}



if(!completed){

return(
	<div>
		<div class = "workout">
		<div class ="setName">Set: {count}</div>
		<CountSets  count ={count} setCount = {setCount} target = {target} setTarget= {setTarget} handleClick={handleClick}/>
		<div class= "reps"><RecordReps reps={reps} setReps = {setReps} input = {input} inputIn ={inputIn} input2 = {input2} inputIn2 = {inputIn2}/></div>
		
		<button  type ="button" onClick = {handleClick2} >workout completed</button>

		</div>

		

	</div>



	);
}

else{
	return(
	<div class = "list">
		      <ul>
        {list.map((item) => (
          <li key={item.id}>set: {item.set}Number of Reps:{item.reps}</li>
        ))}
      </ul>
		</div>	
	);


}
}


export default List;