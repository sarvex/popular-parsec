module.exports = {
  customSyntax: 'postcss-lit',
  extends: [
    'stylelint-config-html/html',
    'stylelint-config-html/xml',
    'stylelint-config-html/astro',
    'stylelint-config-tailwindcss',
    'stylelint-config-standard-scss',
  ],
  plugins: ['stylelint-scss'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen'],
      },
    ],
    'declaration-block-trailing-semicolon': null,
    'no-descending-specificity': null,
  },
};
