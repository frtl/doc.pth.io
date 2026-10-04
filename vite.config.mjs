import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// the static web apps workflow deploys `build`, so vite writes there.
export default defineConfig({
  plugins: [svelte()],
  build: { outDir: 'build', target: 'es2018' },
})
