const request = require('sync-request')

module.exports = () => {
  var res = request('GET', 'https://5j4d1u7jhf.execute-api.eu-west-1.amazonaws.com/default/JuicyCouponFunc')
  if (res.statusCode > 200) {
    throw new Error(`API lookup failed with HTTP error ${res.statusCode}`)
  } else {
    return JSON.parse(res.body)
  }
}
