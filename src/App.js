import React from "react";
// import Table from "./components/Table";
import Card from "./components/Card";
import Jumbotron from "./components/Jumbotron";
import FetchRandomUser from "./components/FetchRandomUser";

function App() {
	return (
		<div className="container">
			<Jumbotron />
			<FetchRandomUser />
			{/* <Table /> */}
			<Card />
		</div>
	);
}

export default App;
