import React from 'react';
import SignIn from './SignIn';
import {shallow} from 'enzyme'
import "../setupTests"

describe('App renders correctly', () => {
  it('should render the App Component correctly', () => { 
    const app = shallow(<SignIn />);  
    expect(app).toMatchSnapshot();
  });
});
