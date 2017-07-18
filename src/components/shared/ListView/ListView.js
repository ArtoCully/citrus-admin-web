// @flow
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Link } from 'react-router'
import LinkReplace from 'src/components/shared/LinkReplace/LinkReplace'
import img from 'src/styles/images.css'
import css from './ListView.style.css'

type Props = {
  items: Array<any>,
  location: Object,
  showDelete?: boolean,
  deleteItemName?: string,
}

class ListView extends PureComponent {

  props: Props

  render (): React$Element<any> {

    const {
      location,
      showDelete,
      deleteItemName,
    } = this.props

    const items = this.props.items || []

    const list = items.map((item, index) => {

      let optionsRightDate = null
      let optionsRightDelete = null

      if (showDelete && deleteItemName) {

        optionsRightDate = (
          <div className={css.announcement}>
            {item.startDate && item.endDate
              ? `${
                moment(item.startDate).format('MM/DD/YYYY')
              } - ${moment(item.endDate).format('MM/DD/YYYY')}`
              : <span />
            }
          </div>
        )

        optionsRightDelete = (
          <LinkReplace
            className={`${css.deleteItem} ${img.icnTrash}`}
            to={{
              pathname: location.pathname,
              state: {
                modal: `delete-${deleteItemName}`,
                [deleteItemName]: item,
              },
            }}
          />
        )

      }


      return (
        <div key={index} className={css.item}>
          <Link
            className={css.detailsLink}
            to={`${location.pathname}/${item.id || item.deviceId}`}
          >
            <div className={`${css.leftSide} ${css.flex1}`}>
              <span className={css.name}>
                {item.name}
              </span>
              <span className={css.description}>
                {item.description || item.productLine}
              </span>
            </div>
            <div
              className={`${css.seeMoreLink} ${css.flex1}`}
            >
                Click to see more
            </div>
            {optionsRightDate}
          </Link>
          {optionsRightDelete}
        </div>
      )

    })


    return (
      <div className={css.list}>
        {list}
      </div>
    )

  }

}


export default ListView
