import React from 'react';
import { shallow } from 'enzyme';
import Loading from './Loading';

describe('<Loading /> component', () => {
  it('renders one <Loading /> component', () => {
    const component = shallow(<Loading />);
    expect(component).toHaveLength(1);
  });
});
