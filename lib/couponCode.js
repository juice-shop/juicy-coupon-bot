const request = require('sync-request')

module.exports = (discount) => {
  var res = request('GET', 'https://5j4d1u7jhf.execute-api.eu-west-1.amazonaws.com/default/JuicyCouponFunc')
  if (res.statusCode > 200) {
    throw new Error(`AWS lookup failed with HTTP error ${res.statusCode}`)
  } else {
    const coupons = JSON.parse(res.body)
    return coupons[(discount / 10) - 1]
  }
}
