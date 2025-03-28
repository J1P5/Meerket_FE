import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: {}, // 이 부분 추가
})

const eslintConfig = [
  ...compat.extends('next/core-web-vitals'),
  ...compat.extends('@titicaca/eslint-config-triple'),
  ...compat.extends('@titicaca/eslint-config-triple/requiring-type-checking'),
  ...compat.extends('@titicaca/eslint-config-triple/prettier'),
]

export default eslintConfig
