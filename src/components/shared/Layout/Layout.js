// @flow
import React from 'react'
import SideBar from './SideBar/SideBar.index'
import css from './Layout.style.css'

type Props = {
  children?: React$Element<any>,
  routes: Array<Object>,
}

const Layout = (props: Props): React$Element<any> => {

  return (
    <div className={css.layout}>
      <SideBar routes={props.routes} />
      <div className={css.rightSide}>
        {props.children}
      </div>
    </div>
  )

}

export default Layout
