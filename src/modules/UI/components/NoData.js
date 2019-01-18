import React, { Component } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
	background: red;

	h3 {
		text-align: center;
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
