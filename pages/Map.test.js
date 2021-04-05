import React from 'react';
import Map from './Map';
import {shallow} from 'enzyme'
import "../setupTests"

const map = shallow(<Map />);

describe('renders correctly', () => {
  it('should render the Map Component correctly', () => {   
    expect(map).toMatchSnapshot();
  });
});
