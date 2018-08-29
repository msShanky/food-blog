const tailwindcss = require('tailwindcss')

module.exports = {
  "plugins": [
    require('tailwindcss')('./node_modules/tailwindcss'),
    require('autoprefixer')(),
  ]
}