import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
	background: rgba(0, 0, 0, 0.6);
	position: absolute;
	top: 0;
	width: 100%;
	padding: 10%;
	margin-top: 50px;

	h3 {
		text-align: center;
		color: #fff;
	}
`;
const NoDataToShow = ({ message }) => {
	return (
		<StyledDiv>
			<h3>{message}</h3>
		</StyledDiv>
	);
};

export default NoDataToShow;
