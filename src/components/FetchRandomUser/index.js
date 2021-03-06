import React from "react";
// import Card from "../Card";
import Table from "../Table";

export default class FetchRandomUser extends React.Component {
	state = {
		loading: true,
		person: null,
	};
	async componentDidMount() {
		const url = "https://api.randomuser.me/?results=100";
		const response = await fetch(url);
		const data = await response.json();

		this.setState({ person: data.results, loading: false });
		console.log(data.results[0]);
	}

	render() {
		if (this.state.loading) {
			return <div>Loading...</div>;
		}

		if (!this.state.person) {
			return <div>No person available</div>;
		}
		return (
			<div>
				{/* BELOW IS WILL DISPLAY USING THE Un List*/}
				{/* <ul>
					<li>
						Full Name: {this.state.person.name.first},
						{this.state.person.name.last}
					</li>
					<li>City: {this.state.person.location.city}</li>
					<li>State: {this.state.person.location.state}</li>
					<li>Country: {this.state.person.location.country}</li>
					<img src={this.state.person.picture.thumbnail} />
				</ul> */}
				{/* BELOW IS WILL DISPLAY USING THE CARD*/}
				{/* {this.state.person.map((persons, index) => (
					<Card
						key={index}
						firstName={persons.name.first}
						lastName={persons.name.last}
						city={persons.location.city}
						state={persons.location.state}
						country={persons.location.country}
						image={persons.picture.thumbnail}
					/>
				))} */}
				{/* BELOW IS WILL DISPLAY USING THE Table*/}
				{this.state.person.map((persons, index) => (
					<Table
						id={index}
						firstName={persons.name.first}
						lastName={persons.name.last}
						city={persons.location.city}
						state={persons.location.state}
						email={persons.email}
						age={persons.location.country}
						gender={persons.gender}
						phone={persons.phone}
						cell={persons.cell}
						picture={persons.picture.thumbnail}
					/>
				))}
			</div>
		);
	}
}
