module.exports = {_calculateDiference}


function _calculateDiference({d2, d1}) {
  let result = (d2) - (d1)

  if (d2 === d1) result = 0

  result = d2 > d1 ? result = -Math.abs(result) : result = Math.abs(result)

  return Math.round(result * 100) / 100
}