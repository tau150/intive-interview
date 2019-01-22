import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from './SearchBar';

const wrapper = shallow(<SearchBar />);

describe('<SearchBar /> component', () => {
  it('renders one <SearchBar /> component', () => {
    expect(wrapper).toHaveLength(1);
  });
});

// describe('Buttons actions', () => {
//   it('submt button should be disabled is there are not any filter selected', () => {
//     // expect(wrapper)
//     //   .find('#submit-button')
//     //   .is('[disabled]')
//     //   .toBe(true);

//     expect(wrapper.find('#submit-button').length).toBe(1);
//   });
// });
