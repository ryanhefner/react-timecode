import fs from 'fs'
import { execSync } from 'child_process'
import prettyBytes from 'pretty-bytes'
import { gzipSizeSync } from 'gzip-size'
import pkg from '../package.json' assert { type: 'json' }

const exec = (command, extraEnv) => {
  execSync(command, {
    stdio: 'inherit',
    env: Object.assign({}, process.env, extraEnv),
  })
}

console.log('Building CommonJS modules ...')

exec('babel src -d . --out-file-extension .cjs --ignore src/__mocks__,__tests__,**/*.test.js', {
  BABEL_ENV: 'cjs',
})

console.log('\nBuilding ES modules ...')

exec('babel src -d es --ignore src/__mocks__,__tests__,**/*.test.js', {
  BABEL_ENV: 'es',
})

console.log(`\nBuilding ${pkg.name}.js ...`)

exec(`rollup -c -f umd -o umd/${pkg.name}.js`, {
  BABEL_ENV: 'umd',
  NODE_ENV: 'development',
})

console.log(`\nBuilding ${pkg.name}.min.js ...`)

exec(`rollup -c -f umd -o umd/${pkg.name}.min.js`, {
  BABEL_ENV: 'umd',
  NODE_ENV: 'production',
})

const size = gzipSizeSync(fs.readFileSync(`umd/${pkg.name}.min.js`))

console.log('\ngzipped, the UMD build is %s', prettyBytes(size))
