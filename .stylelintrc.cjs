module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-prettier',
    'stylelint-config-standard-scss',
  ],
  plugins: ['stylelint-order'],
  rules: {
    'color-hex-length': 'short',
    'block-no-empty': true,
    'declaration-no-important': true,

    // Порядок властивостей
    'order/properties-alphabetical-order': true,

    // SCSS-специфічне
    'scss/dollar-variable-pattern': '^[_]?[a-z]+([a-z0-9-]+)*$',
    'scss/percent-placeholder-pattern': '^%[a-z]+([a-z0-9-]+)*$',
    'scss/load-no-partial-leading-underscore': true,
    'scss/at-import-partial-extension-blacklist': ['scss'],

    // Інше
    'selector-max-id': 0,
    'rule-empty-line-before': [
      'always-multi-line',
      { ignore: ['after-comment'] },
    ],
  },
};
