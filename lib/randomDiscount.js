const colors = require('colors')

module.exports = () => {
  const discount = 10 * (Math.floor(Math.random() * 4) + 1) // 10-40%
  console.log(`[${colors.green('✔')}] Randomized discount: ${colors.cyan(discount + '%')}`)
  return discount
}
