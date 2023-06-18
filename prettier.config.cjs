module.exports = {
  // prettier.config.js or .prettierrc.js
  trailingComma: 'all',
  semi: true,
  singleQuote: true,

  plugins: [require.resolve('prettier-plugin-astro')],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};
