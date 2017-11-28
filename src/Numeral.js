import React from 'react'

import { pad } from './utils'

const Numeral = ({h, m, s, children}) => {
  const classNames = ['Numeral-container']

  if (h === children) {
    classNames.push('Numeral-hour-active')
  } else if (m === children && s === children) {
    classNames.push('Numeral-second-active')
  } else if (m === children) {
    classNames.push('Numeral-minute-active')
  } else if (s === children) {
    classNames.push('Numeral-second-active')
  } else {
    classNames.push('Numeral-inactive')
  }

  return (
    <div className={classNames.join(' ')}>
      {(m || s) ? pad(children) : children}
    </div>
  )
}

export default Numeral
