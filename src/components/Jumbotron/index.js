import React from "react";
import "./style.css";

function Jumbotron() {
	return (
		<div className="jumbotron">
			<h1>User Directory</h1>
			<p>
				Welcome to the random user directory, everytime you refresh the page it
				should generate a new random user
			</p>
		</div>
	);
}

export default Jumbotron;
