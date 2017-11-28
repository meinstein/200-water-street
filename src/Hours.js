import React from 'react'

import Numeral from './Numeral'
import { generateVals } from './utils'

const Hours = ({h}) => (
  <div className="Hours-container">
    {generateVals(1, 12).map((val, idx) => (
      <Numeral key={idx} h={h}>
        {val}
      </Numeral>
    ))}
  </div>
)

export default Hours
