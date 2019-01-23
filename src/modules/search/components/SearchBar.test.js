import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { SearchBar } from './SearchBar';
import { Provider } from 'react-redux';
import store from '../../../db/store';

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
      age: '22',
    });
    const button = wrapper.find('#submit-button').first();
    expect(button.props().disabled).toEqual(false);
  });
});
// console.log(wrapper.instance().props);
