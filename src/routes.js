// @flow
import React from 'react'
import { Route, IndexRedirect } from 'react-router'

import App from 'src/components/App.index'
import DeviceTypeList from 'src/components/DeviceTypeList/DeviceTypeList.index'
import DeviceTypeControls from 'src/components/DeviceTypeControls/DeviceTypeControls.index'
import NotFound from 'src/components/NotFound/NotFound.index'

const getRoutes = () => {

  return (
    <Route path="/" component={App}>
      <IndexRedirect to="types" />

      <Route path="types" component={DeviceTypeList} />
      <Route path="type/:typeId/controls" component={DeviceTypeControls} />

      {/* 404 */}
      <Route path="*" component={NotFound} />
    </Route>
  )

}


export default getRoutes
