import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Moment from 'react-moment';
import { Table } from 'reactstrap';
import { fetchPlayers } from '../actions';
import { getPlayerSelector } from '../selectors';

const StyledDiv = styled.div`
	margin-top: 3%;
`;

class ResultsTable extends Component {
	componentDidMount() {
		this.props.fetchPlayers();
	}
	render() {
		if (!this.props.players) return null;
		return (
			<StyledDiv>
				<Table striped>
					<thead>
						<tr>
							<th>Player</th>
							<th>Position</th>
							<th>Team</th>
							<th>Age</th>
						</tr>
					</thead>
					<tbody>
						{this.props.players.map(player => {
							return (
								<tr key={player.name}>
									<th scope="row">{player.name}</th>
									<td>{player.position}</td>
									<td>{player.nationality}</td>
									<td>
										<Moment fromNow ago>
											{player.dateOfBirth}
										</Moment>
									</td>
								</tr>
							);
						})}
					</tbody>
				</Table>
			</StyledDiv>
		);
	}
}

const mapStateToProps = state => {
	return {
		players: getPlayerSelector(state)
	};
};
export default connect(
	mapStateToProps,
	{ fetchPlayers }
)(ResultsTable);
