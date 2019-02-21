const colors = require('colors')
const request = require('sync-request')

module.exports = (apiEndpoint = 'https://5j4d1u7jhf.execute-api.eu-west-1.amazonaws.com/default/JuicyCouponFunc') => {
  try {
    const res = request('GET', apiEndpoint)
    const body = res.getBody()
    console.log(`[${colors.green('✔')}] API lookup success: ${body}`)
    return JSON.parse(body)
  } catch (error) {
    console.log(`[${colors.red('❌')}] API lookup failed: ${colors.red(error.message)}`)
    throw new Error('API lookup failed')
  }
}
