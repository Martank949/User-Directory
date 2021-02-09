import React from "react";

function Table() {
	return (
		<table>
			<caption>Alien football stars</caption>
			<tr>
				<th scope="col">Player</th>
				<th scope="col">Gloobles</th>
				<th scope="col">Za'taak</th>
			</tr>
			<tr>
				<th scope="row">TR-7</th>
				<td>7</td>
				<td>4,569</td>
			</tr>
			<tr>
				<th scope="row">Khiresh Odo</th>
				<td>7</td>
				<td>7,223</td>
			</tr>
			<tr>
				<th scope="row">Mia Oolong</th>
				<td>9</td>
				<td>6,219</td>
			</tr>
		</table>
	);
}

export default Table;
