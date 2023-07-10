const plugins = [
  '@babel/plugin-proposal-class-properties',
  '@babel/plugin-proposal-object-rest-spread',
  '@babel/plugin-syntax-import-assertions',
  '@babel/plugin-transform-runtime',
]

if (process.env.NODE_ENV === 'production') {
  plugins.push('babel-plugin-dev-expression')
}

module.exports = function () {
  return {
    env: {
      test: {
        presets: ['@babel/preset-env', '@babel/preset-react'],
      },
    },
    presets: [
      [
        '@babel/preset-env',
        {
          modules: false,
        },
      ],
      '@babel/preset-react',
    ],
    plugins: plugins,
  }
}
