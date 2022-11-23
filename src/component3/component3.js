import React, { Component , useState } from 'react';
import './index.css';

function Logo() {


	 const [motto,setMotto] = useState("");


	 const refreshPage= function(e){
	 	window.location.reload();
	 }

	 
	 return(
	 		<div class ="LogoContainer">
	 		<button  id = "logo" onClick= {refreshPage}>Workout Tracker</button>
	 		
	 		</div>

	 );

	
}

export default Logo;