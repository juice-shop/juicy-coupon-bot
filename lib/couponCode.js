const z85 = require('z85')

const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']

function toMMMYY (date) {
  const month = date.getMonth()
  const year = date.getFullYear()
  return months[month] + year.toString().substring(2, 4)
}

module.exports = (discount, date = new Date()) => {
  const coupon = toMMMYY(date) + '-' + discount
  return z85.encode(coupon)
}
