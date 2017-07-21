// @flow
/* eslint-disable max-len */

// Enzyme docs:
// http://airbnb.io/enzyme/docs/api/index.html

import React from 'react'
import { shallow } from 'enzyme'
import DeleteDevice from './DeleteDevice'


const mockProps = {
  location: {
    pathname: '/',
    state: {
      device: {},
    },
  },
  removeDevice: () => {},
  fetchDevices: () => {},
}


it('<DeleteDevice> renders the DeleteDevice content', () => {

  const wrapper = shallow(
    <DeleteDevice
      {...mockProps}
    />
  )

  expect(wrapper).toMatchSnapshot()

})
