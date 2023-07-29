// next.config.js

const path = require('path')

module.exports = {
  webpack(config) {
    config.resolve.alias['next/link'] = path.join(__dirname, 'node_modules/next/link/index.js')
    config.resolve.alias['next/image'] = path.join(__dirname, 'node_modules/next/image/index.js')

    return config;
  }
}