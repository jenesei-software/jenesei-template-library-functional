/* eslint-disable no-undef */
import path, { resolve } from 'path'
import { visualizer } from 'rollup-plugin-visualizer'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import tsconfigPaths from 'vite-tsconfig-paths'

import { peerDependencies } from './package.json'

const isDev = process.env.NODE_ENV === 'dev'

console.log('isDev: ', String(isDev))

export default defineConfig(() => {
  return {
    resolve: {
      alias: {
        '@local': path.resolve(__dirname, './src')
      }
    },
    plugins: [
      tsconfigPaths(),
      isDev &&
        visualizer({
          open: true,
          filename: 'stats.html',
          gzipSize: true,
          brotliSize: true
        }),
      dts({
        include: ['src/'],
        exclude: [],
        rollupTypes: true,
        insertTypesEntry: true,
        tsconfigPath: './tsconfig.json'
      })
    ].filter(Boolean),
    publicDir: false,
    build: {
      sourcemap: true,
      outDir: './build',
      rootDir: './src',
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      },
      lib: {
        entry: {
          main: resolve(__dirname, 'src/main.ts'),

          ['function-test']: resolve(__dirname, 'src/functions/test/index.ts')
        },
        formats: ['es', 'cjs'],
        fileName: (format, name) => `${name}.${format}.js`
      },
      rollupOptions: {
        external: Object.keys(peerDependencies),
        output: {
          globals: {}
        }
      }
    }
  }
})
