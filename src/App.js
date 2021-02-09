import React from "react";
import Table from "./components/Table";
import Card from "./components/Card";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";
// import SearchResultContainer from "./components/SearchResultContainer/SearchResultContainer";

function App() {
	return (
		<div className="container">
			<Jumbotron>
				<Navbar />
			</Jumbotron>
			<Card />
		</div>
	);
}

export default App;
