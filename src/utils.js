export const generateVals = (startVal,maxVal) => {
  const vals = []

  for (let h = startVal; h <= maxVal; h++) {
    vals.push(h)
  }

  return vals
}

export const pad = n => (n < 10) ? `0${n}` : n
