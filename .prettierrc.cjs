// prettier.config.js, .prettierrc.js, prettier.config.cjs, or .prettierrc.cjs

/** @type {import("prettier").Config} */
const config = {
  trailingComma: 'none',
  semi: false,
  singleQuote: true,
  bracketSameLine: true,
  jsxSingleQuote: true,
  plugins: ['prettier-plugin-tailwindcss']
}

module.exports = config
