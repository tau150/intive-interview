import React from 'react';
import App from './App';
import Loading from './modules/UI/components/Loading';
import SearchBar from './modules/search/components/SearchBar';

import { shallow, mount } from 'enzyme';

describe('<App />', () => {
	it('renders 1 <App /> component', () => {
		const wrapper = shallow(<App />);
		expect(wrapper).toHaveLength(1);
	});

	it('doesn´t render <Loading /> component when isLoading props is false (default)', () => {
		const wrapper = shallow(<App isLoading={false} />);
		expect(wrapper.find('#loading').length).toBe(0);
		expect(wrapper.find('#searchBar').length).toBe(1);
	});

	// it('doesn´t render <Loading /> component when isLoading props is false', () => {
	// 	const component = shallow(<App isLoading={false} />);
	// 	const laodingCompononent = shallow(<Loading />);
	// 	expect(laodingCompononent).toHaveLength(0);
	// });
});
