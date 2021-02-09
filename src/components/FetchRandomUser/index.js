import React from "react";

export default class FetchRandomUser extends React.Component {
	state = {
		loading: true,
		person: null,
	};
	async componentDidMount() {
		const url = "https://api.randomuser.me/";
		const response = await fetch(url);
		const data = await response.json();
		this.setState({ person: data.results[0], loading: false });
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
				<h1>{this.state.person.name.first}</h1>
				<h1>{this.state.person.name.last}</h1>
				<img src={this.state.person.picture.thumbnail} />
			</div>
		);
	}
}
