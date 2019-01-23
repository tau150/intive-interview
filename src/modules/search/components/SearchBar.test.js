import React from 'react';
import { mount } from 'enzyme';
import { SearchBar } from './SearchBar';

const wrapper = mount(<SearchBar />);

describe('<SearchBar /> component', () => {
	it('renders one <SearchBar /> component', () => {
		expect(wrapper).toHaveLength(1);
	});
});

describe('Buttons actions', () => {
	it('submit button should be disabled if there are not any filter selected', () => {
		const button = wrapper.find('#submit-button').first();
		expect(button.props().disabled).toEqual(true);
	});

	it('submit button should be enabled if there are any filter selected', () => {
		wrapper.setState({
			age: '22'
		});
		const button = wrapper.find('#submit-button').first();
		expect(button.props().disabled).toEqual(false);
	});

	// it('all players button should set state to empty for state erlated to inputs and null to filters to re fetch all players', () => {
	// 	// wrapper.setState({
	// 	// 	age: '22'
	// 	// });
	// 	// const button = wrapper.find('#submit-button').first();
	// 	// expect(button.props().disabled).toEqual(false);

	// 	wrapper
	// 		.find('#all-players-button')
	// 		.first()
	// 		.simulate('click');
	// });

	// expect(wrapper.state('age')).toEqual('');
	// expect(wrapper.state('name')).toEqual('');
	// expect(wrapper.state('selectedPosition')).toEqual('');
});

describe('inputs', () => {
	it('should show validation mesagge for age < 18 or > 40', () => {
		wrapper.setState({
			age: '12',
			validationMessages: { age: 'message' }
		});
		expect(wrapper.find('#age-validation').text()).toEqual('message');
	});

	it('should set state onChange event for age input', () => {
		wrapper
			.find('#age')
			.first()
			.simulate('change', { target: { value: '25' } });

		expect(wrapper.state('age')).toEqual('25');
	});

	it('should set state onChange event for position input', () => {
		wrapper
			.find('#position')
			.first()
			.simulate('change', { target: { value: 'Keeper' } });

		expect(wrapper.state('selectedPosition')).toEqual('Keeper');
	});

	it('should set state onChange event for name input', () => {
		wrapper
			.find('#name')
			.first()
			.simulate('change', { target: { value: 'santi' } });

		expect(wrapper.state('name')).toEqual('santi');
	});
});
