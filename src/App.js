import React from "react";
import Card from "./components/Card";
import Jumbotron from "./components/Jumbotron";
import FetchRandomUser from "./components/FetchRandomUser";

function App() {
	return (
		<div className="container-fluid">
			<Jumbotron />
			<FetchRandomUser />
			<Card />
		</div>
	);
}

export default App;
