const path = require('path')

module.exports = {
  use: [
    [
      'tux/neutrino',
      {
        style: {
          test: /\.scss/,
          loaders: [
            {
              loader: require.resolve('sass-loader'),
              options: {
                data: '@import "styles/includes/index.scss";',
                includePaths: [
                  path.resolve(__dirname, './node_modules'),
                  path.resolve(__dirname, './src/app')
                ]
              }
            },
            {
              loader: require.resolve('@epegzz/sass-vars-loader'),
              options: {
                files: [require.resolve('./src/app/styles/variables')]
              }
            }
          ]
        }
      }
    ],

    // Create alias for main folders
    neutrino => {
      neutrino.config.resolve.alias
        .set('app', path.resolve(__dirname, './src/app'))
        .set('server', path.resolve(__dirname, './src/server'))
    },

    // Compile source files for shared components as well
    neutrino => {
      neutrino.config.module
        .rule('compile')
        .include.add(/\/components\/src/)
        .add(/\/styles/)
    }
  ]
}
