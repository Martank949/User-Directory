import React from "react";
import Card from "../Card";

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
				{this.state.person.map((persons, index) => (
					<Card firstName={persons.name.first} lastName={persons.name.last} />
				))}
			</div>
		);
	}
}
