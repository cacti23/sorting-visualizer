export default {
  '*.{ts,tsx}': filenames => [
    'npm run format:fix',
    'npm run lint',
    'npm run type:check'
  ]
}
