import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import vitePluginJavascriptObfuscator from 'vite-plugin-javascript-obfuscator';

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 5174,
  },
  plugins: [
    react(),
    vitePluginJavascriptObfuscator({
      include: ['src/**/*.js', 'src/**/*.jsx'],
      exclude: [/node_modules/, /\.html$/],
      apply: 'build',
      debugger: true,
      options: {
        compact: true,
        controlFlowFlattening: true,
        controlFlowFlatteningThreshold: 0.1,
        disableConsoleOutput: true,
        identifierNamesGenerator: 'hexadecimal',
        log: false,
        numbersToExpressions: true,
        renameGlobals: false,
        selfDefending: true,
        simplify: true,
        splitStrings: true,
        splitStringsChunkLength: 10,
        stringArray: true,
        stringArrayEncoding: ['base64'],
        stringArrayThreshold: 0.75,
        transformObjectKeys: true
      }
    }),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg'],
      workbox: {
        maximumFileSizeToCacheInBytes: 5000000,
        cleanupOutdatedCaches: true
      },
      manifest: {
        id: '/',
        start_url: '/',
        name: 'DataFútbol',
        short_name: 'DataFútbol',
        description: 'Explorá el archivo definitivo del fútbol. Historiales (H2H), leyendas, y campeones desde la era amateur hasta hoy.',
        theme_color: '#020617',
        background_color: '#020617',
        display: 'standalone',
        icons: [
          {
            src: '/pwa-192x192.png?v=2',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable'
          },
          {
            src: '/pwa-512x512.png?v=2',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ],
});
