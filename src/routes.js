// @flow
import React from 'react'
import { Route, IndexRedirect } from 'react-router'

import App from 'src/components/App.index'
import DeviceTypeList from 'src/components/DeviceTypeList/DeviceTypeList.index'
import NotFound from 'src/components/NotFound/NotFound.index'

const getRoutes = () => {

  return (
    <Route path="/" component={App}>
      <IndexRedirect to="types" />

      <Route path="types" component={DeviceTypeList} />

      {/* 404 */}
      <Route path="*" component={NotFound} />
    </Route>
  )

}


export default getRoutes
