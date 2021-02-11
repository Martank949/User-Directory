import React from "react";

function Table(props) {
	return (
		<table className="table table-info">
			<tr>
				<th scope="col">#</th>
				<th scope="col">First Name:</th>
				<th scope="col">Last Name:</th>
				<th scope="col">City:</th>
				<th scope="col">State:</th>
				<th scope="col">Email:</th>
				<th scope="col">Age:</th>
				<th scope="col">Gender:</th>
				<th scope="col">Phone Number:</th>
				<th scope="col">Cell Number:</th>
				<th scope="col">Picture:</th>
			</tr>
			<tr>
				<th scope="row">{props.id}</th>
				<td>{props.firstName}</td>
				<td>{props.lastName}</td>
				<td>{props.city}</td>
				<td>{props.state}</td>
				<td>{props.email}</td>
				<td>{props.age}</td>
				<td>{props.gender}</td>
				<td>{props.phone}</td>
				<td>{props.cell}</td>
				<td>
					<img alt={props.firstName} src={props.picture}></img>
				</td>
			</tr>
		</table>
	);
}

export default Table;
