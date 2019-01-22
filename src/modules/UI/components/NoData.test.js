import React from 'react';
import { shallow } from 'enzyme';
import NoData from './NoData';

describe('<NoData /> component', () => {
  const wrapper = shallow(<NoData message={'message'} />);
  it('renders one <NoData /> component', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('renders  <NoData /> component with message', () => {
    expect(wrapper.find('h3').text()).toEqual('message');
  });
});
