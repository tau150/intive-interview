import React from 'react';
import { mount, shallow } from 'enzyme';
import { SearchBar } from './SearchBar';

const handleFormSubmit = jest.fn();
const setSearchFilters = jest.fn();

const wrapper = mount(<SearchBar setSearchFilters={setSearchFilters} handleFormSubmit={handleFormSubmit} />);

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

	it('sumbit button should call handleFormSubmit', () => {
		wrapper.setState({ name: 'santi', age: '32', selectedPosition: '' });

		wrapper
			.find('#submit-form')
			.last()
			.simulate('submit', { preventDefault() {} });

		expect(handleFormSubmit).toHaveBeenCalled();
	});

	it('submit button should be enabled if there are any filter selected', () => {
		wrapper.setState({
			age: '22'
		});
		const button = wrapper.find('#submit-button').first();
		expect(button.props().disabled).toEqual(false);
	});

	it('click action over all players button should blank state for filters', () => {
		wrapper
			.find('#all-players-button')
			.first()
			.simulate('click');

		expect(setSearchFilters).toHaveBeenCalled();
		expect(wrapper.state('name')).toBe('');
		expect(wrapper.state('age')).toBe('');
		expect(wrapper.state('selectedPosition')).toBe('');
	});
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

	it('onchange action over input name should change state', () => {
		wrapper
			.find('#name')
			.first()
			.simulate('change', {
				target: { value: 'santi' }
			});
		expect(wrapper.state('name')).toBe('santi');
	});

	it('onchange action over input position should change state', () => {
		wrapper
			.find('#position')
			.first()
			.simulate('change', {
				target: { value: 'Keeper' }
			});
		expect(wrapper.state('selectedPosition')).toBe('Keeper');
	});

	it('onchange action over input age should change state', () => {
		wrapper
			.find('#age')
			.first()
			.simulate('change', {
				target: { value: '22' }
			});
		expect(wrapper.state('age')).toBe('22');
	});

	it('onchange action over input  age with value "" should change state to "', () => {
		wrapper
			.find('#age')
			.first()
			.simulate('change', {
				target: { value: '' }
			});
		expect(wrapper.state('age')).toBe('');
	});

	it('onchange action over input age form values between 18 and 40 sould not show validation message', () => {
		wrapper
			.find('#age')
			.first()
			.simulate('change', {
				target: { value: '22' }
			});

		expect(wrapper.find('#age-validation').exists()).toBeFalsy();
	});

	it('onchange action over input age should show validation message for values less than 18', () => {
		wrapper
			.find('#age')
			.first()
			.simulate('change', {
				target: { value: '17' }
			});

		expect(wrapper.find('#age-validation').text('Age must be between 18 and 40'));
	});

	it('onchange action over input age should show validation message for values greather than 40', () => {
		wrapper
			.find('#age')
			.first()
			.simulate('change', {
				target: { value: '45' }
			});

		expect(wrapper.find('#age-validation').text('Age must be between 18 and 40'));
	});
});
