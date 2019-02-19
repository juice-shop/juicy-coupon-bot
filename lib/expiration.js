function toISO8601 (date) {
  let day = '' + date.getDate()
  let month = '' + (date.getMonth() + 1)
  const year = date.getFullYear()

  if (month.length < 2) month = '0' + month
  if (day.length < 2) day = '0' + day

  return [year, month, day].join('-')
}

module.exports = (date) => {
  const d = new Date()
  d.setFullYear(date.getFullYear(), date.getMonth() + 1, 0)
  return toISO8601(d)
}
