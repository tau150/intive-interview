import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import moment from 'moment';
import { Table } from 'reactstrap';
import { fetchPlayers } from '../actions';
import PlayersSelector from '../selectors';
import NoData from '../../UI/components/NoData';

const StyledDiv = styled.div`
	margin-top: 3%;

	table {
		position: relative;
	}

	thead {
		heigth: 50px;
	}
`;

export class ResultsTable extends Component {
	componentDidMount() {
		this.props.fetchPlayers();
	}

	render() {
		if (!this.props.players) return null;

		return (
			<StyledDiv className="main-container">
				<Table striped>
					<thead>
						<tr>
							<th>Player</th>
							<th>Position</th>
							<th>Team</th>
							<th>Age</th>
						</tr>
					</thead>

					{this.props.players.length > 0 ? (
						<tbody>
							{this.props.players.map(player => {
								return (
									<tr key={player.name}>
										<th scope="row">{player.name}</th>
										<td>{player.position}</td>
										<td>{player.nationality}</td>
										<td>
											{
												moment([player.dateOfBirth])
													.fromNow(true)
													.split(' ')[0]
											}
										</td>
									</tr>
								);
							})}
						</tbody>
					) : (
						<tbody />
					)}
					{this.props.fetching === false ? (
						<NoData id="no-data" message="There is not data available for selected filters" />
					) : (
						''
					)}
				</Table>
			</StyledDiv>
		);
	}
}

const mapStateToProps = state => {
	const selectorResult = PlayersSelector(state);
	return {
		toastType: state.toast.type,
		players: selectorResult.selectedPlayers,
		fetching: selectorResult.notInitialFetching
	};
};
export default connect(
	mapStateToProps,
	{ fetchPlayers }
)(ResultsTable);
