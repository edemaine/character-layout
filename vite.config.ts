import { defineConfig, PluginOption } from 'vite'
import solidPlugin from 'vite-plugin-solid'
import civetPlugin from '@danielx/civet/vite'

export default defineConfig({
  base: "./",
  plugins: [
    civetPlugin({ts: "civet"}),
    solidPlugin()
  ],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
})
