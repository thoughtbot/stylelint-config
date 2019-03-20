module.exports = {
  "plugins": [
    "stylelint-order",
    "stylelint-scss"
  ],
  "rules": {
    "block-closing-brace-empty-line-before": "never",
    "block-closing-brace-newline-before": "always-multi-line",
    "block-no-empty": true,
    "block-opening-brace-newline-after": "always-multi-line",
    "block-opening-brace-space-before": "always",
    "color-hex-case": "lower",
    "color-hex-length": "short",
    "color-named": "never",
    "color-no-invalid-hex": true,
    "comment-whitespace-inside": "always",
    "declaration-bang-space-after": "never",
    "declaration-bang-space-before": "always",
    "declaration-block-no-duplicate-properties": true,
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
    "function-calc-no-unspaced-operator": true,
    "function-linear-gradient-no-nonstandard-direction": true,
    "function-comma-space-after": "always-single-line",
    "function-comma-space-before": "never",
    "function-parentheses-space-inside": "never-single-line",
    "function-url-quotes": "always",
    "indentation": 2,
    "length-zero-no-unit": true,
    "max-nesting-depth": 3,
    "no-duplicate-selectors": true,
    "no-eol-whitespace": true,
    "no-missing-end-of-source-newline": true,
    "number-leading-zero": "always",
    "number-no-trailing-zeros": true,
    "order/properties-alphabetical-order": true,
    "property-no-unknown": true,
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
    "scss/dollar-variable-colon-space-after": "always",
    "scss/dollar-variable-colon-space-before": "never",
    "scss/operator-no-unspaced": true,
    "scss/selector-no-redundant-nesting-selector": true,
    "selector-list-comma-newline-after": "always",
    "selector-max-id": 0,
    "selector-nested-pattern": [
      "^(?!&__|&--|&-|&_).*", {
        "message": "Don't concatenate selectors using Sass's parent selector (`&`)."
      }
    ],
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
