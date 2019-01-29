import React from 'react';
import { mount, shallow } from 'enzyme';
import { ResultsTable } from './ResultsTable';
import NoData from '../../UI/components/NoData';

const fetchPlayers = jest.fn();

const wrapper = mount(<ResultsTable fetchPlayers={fetchPlayers} />);

describe('<ResultsTable /> component', () => {
	it('should render one <ResultsTable /> component', () => {
		expect(wrapper).toHaveLength(1);
	});

	it(' should not render <ResultsTable /> component if players props are note defined', () => {
		wrapper.setProps({ players: null });
		expect(wrapper.find('.main-container')).toHaveLength(0);
	});

	it(' should render tbody tag if players are more than 0', () => {
		wrapper.setProps({
			players: [
				{
					contractUntil: '2022-06-30',
					dateOfBirth: '1993-05-13',
					jerseyNumber: 9,
					name: 'Romelu Lukaku',
					nationality: 'Belgium',
					position: 'Centre-Forward'
				},
				{
					contractUntil: '2019-06-30',
					dateOfBirth: '1990-11-07',
					jerseyNumber: 1,
					name: 'David de Gea',
					nationality: 'Spain',
					position: 'Keeper'
				}
			]
		});
		expect(wrapper.find('tbody')).toHaveLength(1);
	});

	it(' should render <NoData /> if players are not defined', () => {
		wrapper.setProps({
			players: []
		});
		expect(wrapper.find('#no-data')).toHaveLength(1);
	});
});

describe('Lifecycles', () => {
	it('componentDidMount', () => {
		wrapper.instance().componentDidMount();
		expect(fetchPlayers).toHaveBeenCalled();
	});
});
