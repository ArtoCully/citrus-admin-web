// @flow
/* eslint-disable max-len */

// Enzyme docs:
// http://airbnb.io/enzyme/docs/api/index.html

import React from 'react'
import { shallow } from 'enzyme'
import ListView from './ListView'


const mockProps = {
  items: [],
  location: {},
}


it('<ListView> renders the ListView content', () => {

  const wrapper = shallow(
    <ListView
      {...mockProps}
    />
  )

  expect(wrapper).toMatchSnapshot()

})
