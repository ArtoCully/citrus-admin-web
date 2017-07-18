// @flow
import React from 'react'
import { Link } from 'react-router'
import img from 'src/styles/images.css'
import css from './SideBar.style.css'

type Props = {
  routes: Array<Object>,
}

const SideBar = (props: Props): React$Element<any> => {

  return (
    <div className={css.sideBar}>
      <div className={`${img.logoHeader} ${css.logoImage}`} />
      <div className={css.menuLinks}>
        <Link to="/devices" className={css.link}>
          Devices
        </Link>
        <Link to="/types" className={css.link}>
          Device Types
        </Link>
      </div>
    </div>
  )

}


export default SideBar
