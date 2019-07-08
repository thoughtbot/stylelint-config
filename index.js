module.exports = {
  "extends": "stylelint-config-recommended",
  "plugins": [
    "stylelint-declaration-block-no-ignored-properties",
    "stylelint-order",
    "stylelint-scss"
  ],
  "rules": {
    "at-rule-no-unknown": null,
    "block-closing-brace-empty-line-before": "never",
    "block-closing-brace-newline-before": "always-multi-line",
    "block-opening-brace-newline-after": "always-multi-line",
    "block-opening-brace-space-before": "always",
    "color-hex-case": "lower",
    "color-hex-length": "short",
    "color-named": "never",
    "comment-whitespace-inside": "always",
    "declaration-bang-space-after": "never",
    "declaration-bang-space-before": "always",
    "declaration-block-semicolon-newline-after": "always-multi-line",
    "declaration-block-trailing-semicolon": "always",
    "declaration-colon-space-after": "always-single-line",
    "declaration-colon-space-before": "never",
    "declaration-no-important": true,
    "declaration-property-unit-whitelist": {
      "line-height": []
    },
    "declaration-property-value-blacklist": {
      "/^transition/": ["/all/"]
    },
    "function-calc-no-invalid": true,
    "function-comma-space-after": "always-single-line",
    "function-comma-space-before": "never",
    "function-parentheses-space-inside": "never-single-line",
    "function-url-quotes": "always",
    "indentation": 2,
    "length-zero-no-unit": true,
    "max-nesting-depth": 3,
    "no-eol-whitespace": true,
    "no-missing-end-of-source-newline": true,
    "number-leading-zero": "always",
    "number-no-trailing-zeros": true,
    "order/properties-alphabetical-order": true,
    "plugin/declaration-block-no-ignored-properties": true,
    "property-no-vendor-prefix": true,
    "rule-empty-line-before": [
      "always",
      {
        "except": [
          "first-nested"
        ],
        "ignore": [
          "after-comment"
        ]
      }
    ],
    "scss/at-extend-no-missing-placeholder": true,
    "scss/at-import-no-partial-leading-underscore": true,
    "scss/at-import-partial-extension-blacklist": ["scss"],
    "scss/at-rule-no-unknown": true,
    "scss/dollar-variable-colon-space-after": "always",
    "scss/dollar-variable-colon-space-before": "never",
    "scss/map-keys-quotes": "always",
    "scss/no-duplicate-dollar-variables": true,
    "scss/operator-no-unspaced": true,
    "scss/selector-no-redundant-nesting-selector": true,
    "scss/selector-no-union-class-name": true,
    "selector-list-comma-newline-after": "always",
    "selector-max-id": 0,
    "selector-no-qualifying-type": true,
    "selector-no-vendor-prefix": true,
    "selector-pseudo-class-case": "lower",
    "selector-pseudo-element-case": "lower",
    "selector-pseudo-element-colon-notation": "double",
    "selector-type-case": "lower",
    "shorthand-property-no-redundant-values": true,
    "string-quotes": "double",
    "value-no-vendor-prefix": true
  }
}
