import React from 'react';
import { App } from './App';
import { shallow } from 'enzyme';

describe('<App /> with isLoading true', () => {
  const wrapper = shallow(<App isLoading={true} />);
  it('renders 1 <App /> component', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('render <Loading /> component when isLoading props is true ', () => {
    expect(wrapper.find('Loading').length).toBe(1);
  });

  it('render <SearchBar /> component ', () => {
    expect(wrapper.find('#searchBar').length).toBe(1);
  });
});

describe('<App /> with isLoading true', () => {
  const wrapper = shallow(<App isLoading={false} />);

  it('does not render <Loading /> component when isLoading props is false ', () => {
    expect(wrapper.find('Loading').length).toBe(0);
  });
});
