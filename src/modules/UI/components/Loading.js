import React, { Component } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	background: rgba(0, 0, 0, 0.3);
	display: flex;
	align-items: center;
	justify-content: center;

	.loading {
		display: inline-block;
		width: 50px;
		height: 50px;
		border: 3px solid rgba(255, 255, 255, 0.3);
		border-radius: 50%;
		border-top-color: #caff2c;
		animation: spin 1s ease-in-out infinite;
		-webkit-animation: spin 1s ease-in-out infinite;
	}

	@keyframes spin {
		to {
			-webkit-transform: rotate(360deg);
		}
	}
	@-webkit-keyframes spin {
		to {
			-webkit-transform: rotate(360deg);
		}
	}
`;
class Loading extends Component {
	render() {
		return (
			<StyledDiv>
				<div className="loading" />
			</StyledDiv>
		);
	}
}

export default Loading;
