// @flow
/* eslint-disable max-len */

// Enzyme docs:
// http://airbnb.io/enzyme/docs/api/index.html

import React from 'react'
import { shallow } from 'enzyme'
import DeleteDeviceType from './DeleteDeviceType'


const mockProps = {
  location: { pathname: '/', state: { deviceType: {} } },
  deviceType: {},
}


it('<DeleteDeviceType> renders the DeleteDeviceType content', () => {

  const wrapper = shallow(
    <DeleteDeviceType
      {...mockProps}
    />
  )

  expect(wrapper).toMatchSnapshot()

})
