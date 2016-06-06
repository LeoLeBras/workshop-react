/* @flow */

import React from 'react'
import styles from './Wrapper.css'

type Props = {
  children: React$Element,
}

const Wrapper = (props: Props): React$Element => {
  const { children } = props
  return (
    <div className={styles.container}>{children}</div>
  )
}

export default Wrapper
