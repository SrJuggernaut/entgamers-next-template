import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  presets: ['entgamers-panda-preset'],
  preflight: true,
  include: ['./src/**/*.{ts,tsx}'],
  outdir: 'src/styled-system',
  jsxFramework: 'react'
})
