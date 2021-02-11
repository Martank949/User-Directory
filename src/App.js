import React from "react";
import Jumbotron from "./components/Jumbotron";
import FetchRandomUser from "./components/FetchRandomUser";

function App() {
	return (
		<div className="container-fluid">
			<Jumbotron />
			<FetchRandomUser />
		</div>
	);
}

export default App;
