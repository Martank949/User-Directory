import React from "react";
// import "./App.css";
import Card from "./components/Card";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";
// import SearchResultContainer from "./components/SearchResultContainer/SearchResultContainer";

function App() {
	return (
		<div className="container">
			<Jumbotron />
			<Navbar />
			<Card />
		</div>
	);
}

export default App;
