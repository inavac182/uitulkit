import typescript2 from 'rollup-plugin-typescript2';
import nodeResolve from '@rollup/plugin-node-resolve';
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';
import { join } from 'path';
import rootPkg from './package.json';

const tsconfig = join(__dirname, 'tsconfig.json');

export function getConfig(pkg, input = []) {
  // Based on initial rollup setup, src/index.ts was hard-coded in the config factory
  if (!input.includes('src/index.ts')) {
    input.unshift('src/index.ts');
  }

  const output = [
    {
      dir: './dist',
      entryFileNames: '[name].js',
      format: 'cjs'
    },
    {
      dir: './dist',
      entryFileNames: '[name].esm.js',
      format: 'esm'
    }
  ];

  return {
    input,
    output,
    external: [
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.devDependencies || {}),
      ...Object.keys(pkg.peerDependencies || {}),
      ...Object.keys(rootPkg.dependencies || {}),
      ...Object.keys(rootPkg.devDependencies || {})
    ],
    plugins: [
      nodeResolve(),
      typescript2({
        typescript: require('typescript'),
        tsconfig
      }),
      sizeSnapshot()
    ]
  };
}
