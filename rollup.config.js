import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'
import pkg from './package.json' assert { type: 'json' }

const cjsConfig = {
  input: 'src/index.js',
  output: {
    exports: 'named',
    name: pkg.name,
    file: './index.cjs',
    format: 'cjs',
    globals: {
      react: 'React',
    },
    banner: `/*! ${pkg.name} !*/`,
    footer: `/* Copyright 2018 - ${(new Date()).getFullYear()} - ${pkg.author} */`,
  },
}

const umdConfig = {
  input: 'src/index.js',
  output: {
    exports: 'named',
    name: pkg.name,
    file: './index.cjs',
    format: 'umd',
    globals: {
      react: 'React',
    },
    banner: `/*! ${pkg.name} !*/`,
    footer: `/* Copyright 2018 - ${(new Date()).getFullYear()} - ${pkg.author} */`,
  },
}

const config = {
  ...(process.env.BABEL_ENV === 'cjs' ? cjsConfig : umdConfig),
  external: [
    'react',
  ],
  plugins: [
    json(),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'runtime',
    }),
    resolve(),
    commonjs({
      include: /node_modules/,
    }),
  ],
}

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(terser())
}

export default config
