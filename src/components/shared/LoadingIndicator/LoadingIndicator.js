// @flow
import React from 'react'
import css from './LoadingIndicator.style.css'

import type { ReduxProps } from './LoadingIndicator.index'


type Props = ReduxProps & {
}

const LoadingIndicator = (props: Props): ?React$Element<*> => {

  const { weAreLoading } = props

  if (!weAreLoading) return null

  return (
    <div className={css.loading}>
      <div className={css.movingBar} />
    </div>
  )

}


export default LoadingIndicator
