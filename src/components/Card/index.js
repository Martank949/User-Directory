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
					</ul>
				</p>
			</div>
		</div>
	);
}

export default Card;
