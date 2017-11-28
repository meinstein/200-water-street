import React from 'react'

import Numeral from './Numeral'
import { generateVals } from './utils'

const Minutes = ({m, s}) => (
  <div className="Minutes-container">
    {generateVals(0, 59).map((val, idx) => (
      <Numeral key={idx} m={m} s={s}>
        {val}
      </Numeral>
    ))}
  </div>
)

export default Minutes
