import React from "react";

function Card(props) {
	return (
		<div className="card">
			<div className="card-body">
				<p className="card-text">
					<ul>
						<li>
							<strong>First Name:</strong> {props.firstName}
						</li>
						<li>
							<strong>Last Name:</strong> {props.lastName}
						</li>
						<li>
							<strong>City:</strong> {props.city}
						</li>
						<li>
							<strong>State:</strong> {props.state}
						</li>
						<li>
							<strong>Country:</strong> {props.country}
						</li>
						<li>
							<img alt={props.firstName} src={props.image}></img>
						</li>
					</ul>
				</p>
			</div>
		</div>
	);
}

export default Card;
