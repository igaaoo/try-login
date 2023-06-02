module.exports = {
  plugins: ['@trivago/prettier-plugin-sort-imports', 'prettier-plugin-tailwindcss'],
  endOfLine: 'auto',
  arrowParens: 'avoid',
  singleQuote: true,
  tabWidth: 2,
  semi: true,
  printWidth: 90,
  importOrder: [
    '^(next/(.*)$)|^(next$)',
    '^(react/(.*)$)|^(react$)',
    '<THIRD_PARTY_MODULES>',
    '^~/(.*)$',
    '^[./]|^[..]',
  ],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  pluginSearchDirs: false,
}
