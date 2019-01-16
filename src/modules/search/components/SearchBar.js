import React, { Component } from 'react';
import { Button, Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import styled from 'styled-components';

const StyledDiv = styled.div`
    label
`;

const StyledH1 = styled.h1`
	margin: 5% 0;
	text-align: left;
`;

class SearchBar extends Component {
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
		age: ''
	};
	render() {
		return (
			<StyledDiv>
				<StyledH1>Football Player Finder</StyledH1>
				<Form inline>
					<Col md={3}>
						<FormGroup>
							<Input type="text" name="name" id="name" placeholder="Name" />
						</FormGroup>
					</Col>
					<Col md={3}>
						<FormGroup>
							<Input type="select" name="email" id="exampleEmail" placeholder="Position">
								<option>Position</option>
								{this.state.positions.map(position => {
									return <option value={position}>{position}</option>;
								})}
							</Input>
						</FormGroup>
					</Col>
					<Col md={3}>
						<FormGroup>
							<Input type="email" name="email" id="exampleEmail" placeholder="Age" />
						</FormGroup>
					</Col>

					<Button>Submit</Button>
				</Form>
			</StyledDiv>
		);
	}
}

export default SearchBar;
