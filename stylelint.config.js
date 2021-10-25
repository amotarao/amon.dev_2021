module.exports = {
  plugins: ['stylelint-prettier'],
  extends: ['stylelint-config-recommended-scss', 'stylelint-config-recess-order'],
  rules: {
    'prettier/prettier': true,
  },
};
