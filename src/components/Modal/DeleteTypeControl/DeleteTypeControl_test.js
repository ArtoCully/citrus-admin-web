// @flow
/* eslint-disable max-len */

// Enzyme docs:
// http://airbnb.io/enzyme/docs/api/index.html

import React from 'react'
import { shallow } from 'enzyme'
import DeleteTypeControl from './DeleteTypeControl'

const mockProps = {
  location: {
    pathname: '/',
    state: {
      deviceType: {},
      typeControl: {},
    },
  },
  deviceType: {},
}


it('<DeleteTypeControl> renders the DeleteTypeControl content', () => {

  const wrapper = shallow(
    <DeleteTypeControl
      {...mockProps}
    />
  )

  expect(wrapper).toMatchSnapshot()

})
