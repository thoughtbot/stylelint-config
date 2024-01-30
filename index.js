module.exports = {
  "extends": ["stylelint-config-standard-scss", "stylelint-config-recommended"],
  "plugins": [
    "stylelint-declaration-block-no-ignored-properties",
    "stylelint-order",
  ],
  "rules": {
    "at-rule-no-unknown": null,
    "color-hex-length": "long",
    "color-named": "never",
    "comment-whitespace-inside": "always",
    "declaration-block-no-redundant-longhand-properties": true,
    "declaration-no-important": true,
    "declaration-property-unit-allowed-list": {
      "line-height": []
    },
    "declaration-property-value-disallowed-list": {
      "/^transition/": ["/all/"]
    },
    "function-url-quotes": "always",
    "length-zero-no-unit": true,
    "max-nesting-depth": 3,
    "no-empty-source": true,
    "order/properties-alphabetical-order": true,
    "plugin/declaration-block-no-ignored-properties": true,
    "property-no-unknown": [
      true,
      {
        "ignoreProperties": [
          "text-size"
        ]
      }
    ],
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
    "scss/at-else-if-parentheses-space-before": "never",
    "scss/at-extend-no-missing-placeholder": true,
    "scss/at-function-parentheses-space-before": "never",
    "scss/load-no-partial-leading-underscore": true,
    "scss/at-import-partial-extension-blacklist": ["scss"],
    "scss/at-mixin-parentheses-space-before": "never",
    "scss/at-rule-no-unknown": true,
    "scss/dollar-variable-colon-space-after": "always",
    "scss/dollar-variable-colon-space-before": "never",
    "scss/map-keys-quotes": "always",
    "scss/no-duplicate-dollar-variables": true,
    "scss/operator-no-unspaced": true,
    "scss/selector-no-redundant-nesting-selector": true,
    "scss/selector-no-union-class-name": true,
    "selector-max-id": 0,
    "selector-no-qualifying-type": true,
    "selector-no-vendor-prefix": true,
    "selector-pseudo-element-colon-notation": "double",
    "selector-type-case": "lower",
    "shorthand-property-no-redundant-values": true,
    "value-keyword-case": "lower",
    "value-no-vendor-prefix": true
  }
}
