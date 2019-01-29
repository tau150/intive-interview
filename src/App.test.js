import React from 'react';
import { App } from './App';
import { shallow } from 'enzyme';

describe('<App /> with isLoading true', () => {
	const wrapper = shallow(<App isLoading={true} />);
	it('should render 1 <App /> component', () => {
		expect(wrapper).toHaveLength(1);
	});

	it('should render <Loading /> component when isLoading props is true ', () => {
		expect(wrapper.find('Loading')).not.toBeNull();
	});

	it('should render <SearchBar /> component ', () => {
		expect(wrapper.find('SearchBar')).not.toBeNull();
	});

	it('should render <Notifications /> component ', () => {
		expect(wrapper.find('Notifications')).not.toBeNull();
	});

	it('should render <ResultsTable /> component ', () => {
		expect(wrapper.find('ResultsTable')).not.toBeNull();
	});
});

describe('<App /> with isLoading true', () => {
	const wrapper = shallow(<App isLoading={false} />);

	it('does not render <Loading /> component when isLoading props is false ', () => {
		expect(wrapper.find('Loading').length).toBe(0);
	});
});

// describe('<Notifications /> rendering', () => {
// 	const wrapper = shallow(<App isLoading={false} />);
// 	it('should render <Notifications /> component when tostType and messase props are defined ', () => {
// 		expect(wrapper.find('#notifications').length).toBe(1);
// 	});
// });

// describe('<Notifications /> rendering', () => {
// 	const wrapper = shallow(<App isLoading={false} />);
// 	it('doesn not render <Notifications /> component when tostType and messase props are not defined ', () => {
// 		console.log(wrapper.find('#notifications'));
// 		expect(wrapper.find('#notifications').length).toBe(0);
// 	});
// });
