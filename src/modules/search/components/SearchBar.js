import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Col, Form, FormGroup, Input } from 'reactstrap';
import styled from 'styled-components';
import { setSearchFilters } from '../actions';

const StyledDiv = styled.div`
	.text-danger {
		position: absolute;
	}

	.container-action-buttons {
		display: flex;
		justify-content: space-around;
	}
`;

const StyledH1 = styled.h1`
	margin: 5% 0;
	text-align: left;
`;

export class SearchBar extends Component {
	state = {
		name: '',
		positions: [
			'Attacking Midfield',
			'Central Midfield',
			'Centre-Back',
			'Centre-Forward',
			'Centre-Forward',
			'Defensive Midfield',
			'Keeper',
			'Left Midfield',
			'Left Wing',
			'Left-Back',
			'Right-Back'
		],
		selectedPosition: '',
		age: '',
		validationMessages: {
			age: null,
			name: null
		}
	};

	handleNameInput = e => {
		this.setState({ name: e.target.value });
	};

	handlePositionInput = e => {
		this.setState({ selectedPosition: e.target.value });
	};

	handleAgeInput = e => {
		this.setState({ age: e.target.value });

		if (e.target.value === '') {
			this.setState({ age: '' });
		}
		if (e.target.value < 18 || e.target.value > 40) {
			this.setState({
				validationMessages: { age: 'Age must be between 18 and 40' }
			});
		} else {
			this.setState({ validationMessages: { age: null } });
		}

		if (e.target.value === '') {
			this.setState({ validationMessages: { age: null } });
		}
	};

	handleAllPlayers = () => {
		this.setState({
			name: '',
			age: '',
			selectedPosition: ''
		});

		const filters = {
			name: null,
			selectedPosition: null,
			age: null
		};

		this.props.setSearchFilters(filters);
	};

	handleFormSubmit = e => {
		e.preventDefault();

		const filters = {
			name: this.state.name.trim() || null,
			selectedPosition: this.state.selectedPosition || null,
			age: this.state.age || null
		};

		this.props.setSearchFilters(filters);
	};

	render() {
		return (
			<StyledDiv>
				<StyledH1>Football Player Finder</StyledH1>
				<Form inline onSubmit={this.handleFormSubmit}>
					<Col md={3}>
						<FormGroup>
							<Input
								onChange={this.handleNameInput}
								type="text"
								name="name"
								id="name"
								value={this.state.name}
								placeholder="Name"
							/>
						</FormGroup>
					</Col>
					<Col md={3}>
						<FormGroup>
							<Input
								onChange={this.handlePositionInput}
								type="select"
								name="position"
								id="position"
								placeholder="Position"
								value={this.state.selectedPosition}
							>
								<option value="">Position</option>
								{this.state.positions.map(position => {
									return <option>{position}</option>;
								})}
							</Input>
						</FormGroup>
					</Col>
					<Col md={3}>
						<FormGroup>
							<Input
								onChange={this.handleAgeInput}
								type="number"
								min="1"
								name="email"
								value={this.state.age}
								id="age"
								placeholder="Age"
							/>
						</FormGroup>
						{this.state.validationMessages.age ? (
							<p id="age-validation" className="text-danger">
								{this.state.validationMessages.age}
							</p>
						) : (
							''
						)}
					</Col>
					<Col md={3}>
						<div className="container-action-buttons">
							<Button
								id="submit-button"
								disabled={
									(this.state.selectedPosition === '' &&
										this.state.name === '' &&
										this.state.age === '') ||
									(this.state.age < 18 && this.state.age !== '') ||
									this.state.age > 40
										? true
										: false
								}
							>
								Submit
							</Button>
							<Button id="all-players-button" onClick={this.handleAllPlayers}>
								All Players
							</Button>
						</div>
					</Col>
				</Form>
			</StyledDiv>
		);
	}
}

export default connect(
	null,
	{ setSearchFilters }
)(SearchBar);
