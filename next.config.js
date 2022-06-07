const nextTranslate = require('next-translate')

module.exports = {
  env: {
    API_URL: 'http://sapi.gandhifabrics.com/',
    WEB_URL: 'http://localhost:3005/'
  },
  images: {
    domains: ['sapi.gandhifabrics.com'],
  },
  compress: true,
  ...nextTranslate()
}