import babel from 'rollup-plugin-babel'
import butternut from 'rollup-plugin-butternut'
import resolve from 'rollup-plugin-node-resolve'

const pkg = require('./package.json')

const isTest = process.env.TEST

export default {
  input: './lib/index.js',
  external: ['react', 'styled-components', 'prop-types'],
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**',
    }),
    !isTest && butternut(),
  ],
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      name: pkg.name,
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
    },
  ],
}
