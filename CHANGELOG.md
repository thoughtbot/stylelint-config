# Change Log

All notable changes to this project will be documented in this file. This
project adheres to [Semantic Versioning](http://semver.org).

## [Unreleased (`main`)][unreleased]

Nothing at the moment.

[unreleased]: https://github.com/thoughtbot/stylelint-config/compare/v3.0.1...HEAD

## [3.0.1] - 2023-07-14

### Changed

- Updated stylelint to v15.10.1
- Updated stylelint-config-recommended to v13.0.0
- Updated stylelint-order to v6.0.0
- Updated stylelint-scss to v5.0.0

[3.0.1]: https://github.com/thoughtbot/stylelint-config/compare/v3.0.0...v3.0.1

## [3.0.0] - 2022-04-22

### Changed

- [`function-calc-no-invalid`][3.0.0-1] removed as it's been deprecated
- [`declaration-property-unit-allowed-list`][3.0.0-2] was changed from `declaration-property-unit-whitelist`
- [`declaration-property-value-disallowed-list`][3.0.0-3] was changed from `declaration-property-unit-blacklist`
- Updated stylelint to v14.7.1
- Updated stylelint-config-recommended to v7.0.0
- Updated stylelint-order to v5.0.0
- Updated stylelint-scss to v4.2.0
- Updated stylelint-declaration-block-no-ignored-properties to v2.5.0

[3.0.0]: https://github.com/thoughtbot/stylelint-config/compare/v2.0.0...v3.0.0
[3.0.0-1]: https://github.com/stylelint/stylelint/pull/5296
[3.0.0-2]: https://github.com/stylelint/stylelint/blob/13.7.0/lib/rules/declaration-property-unit-whitelist/README.md
[3.0.0-3]: https://github.com/stylelint/stylelint/blob/13.7.0/lib/rules/declaration-property-value-blacklist/README.md

## [2.0.0] - 2020-03-09

### Added

- [`property-case`][2.0.0-1] set to `lower`
- [`unit-case`][2.0.0-2] set to `lower`
- [`value-keyword-case`][2.0.0-3] set to `lower`
- [`scss/at-else-if-parentheses-space-before`][2.0.0-4] set to `never`
- [`scss/at-function-parentheses-space-before`][2.0.0-5] set to `never`
- [`scss/at-mixin-parentheses-space-before`][2.0.0-6] set to `never`
- [`declaration-block-no-redundant-longhand-properties`][2.0.0-7] set to `true`
- [`selector-list-comma-newline-before`][2.0.0-8] set to `never-multi-line`
- [`selector-list-comma-space-before`][2.0.0-9] set to `never`
- [`media-query-list-comma-newline-after`][2.0.0-10] set to `always-multi-line`
- [`media-query-list-comma-newline-before`][2.0.0-11] set to `never-multi-line`
- [`media-query-list-comma-space-after`][2.0.0-12] set to `always`
- [`media-query-list-comma-space-before`][2.0.0-13] set to `never`
- [`no-empty-first-line`][2.0.0-14] set to `true`
- [`no-empty-source`][2.0.0-15] set to `true`
- [`declaration-block-semicolon-newline-before`][2.0.0-16] set to `never-multi-line`
- [`declaration-block-semicolon-space-before`][2.0.0-17] set to `never`
- [`max-empty-lines`][2.0.0-18] set to `1`
- [`max-line-length`][2.0.0-19] set to `80`

### Changed

- [`declaration-block-semicolon-newline-after`][2.0.0-20] was changed from `always-multi-line` to `always`
- [`color-hex-length`][2.0.0-21] was changed from `short` to `long`

[2.0.0]: https://github.com/thoughtbot/stylelint-config/compare/v1.2.0...v2.0.0
[2.0.0-1]: https://stylelint.io/user-guide/rules/property-case
[2.0.0-2]: https://stylelint.io/user-guide/rules/unit-case
[2.0.0-3]: https://stylelint.io/user-guide/rules/value-keyword-case
[2.0.0-4]: https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-else-if-parentheses-space-before/README.md
[2.0.0-5]: https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-function-parentheses-space-before/README.md
[2.0.0-6]: https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-mixin-parentheses-space-before/README.md
[2.0.0-7]: https://stylelint.io/user-guide/rules/shorthand-property-no-redundant-values
[2.0.0-8]: https://stylelint.io/user-guide/rules/selector-list-comma-newline-before
[2.0.0-9]: https://stylelint.io/user-guide/rules/selector-list-comma-space-before
[2.0.0-10]: https://stylelint.io/user-guide/rules/media-query-list-comma-newline-after
[2.0.0-11]: https://stylelint.io/user-guide/rules/media-query-list-comma-newline-before
[2.0.0-12]: https://stylelint.io/user-guide/rules/media-query-list-comma-space-after
[2.0.0-13]: https://stylelint.io/user-guide/rules/media-query-list-comma-space-before
[2.0.0-14]: https://stylelint.io/user-guide/rules/no-empty-source
[2.0.0-15]: https://stylelint.io/user-guide/rules/no-empty-first-line
[2.0.0-16]: https://stylelint.io/user-guide/rules/declaration-block-semicolon-newline-before
[2.0.0-17]: https://stylelint.io/user-guide/rules/declaration-block-semicolon-space-before
[2.0.0-18]: https://stylelint.io/user-guide/rules/max-empty-lines
[2.0.0-19]: https://stylelint.io/user-guide/rules/max-line-length
[2.0.0-20]: https://stylelint.io/user-guide/rules/declaration-block-semicolon-newline-after
[2.0.0-21]: https://stylelint.io/user-guide/rules/color-hex-length

## [1.2.0] - 2019-12-15

### Changed

- Updated stylelint-config-recommended to v3.0.0
- Updated stylelint-order to v3.1.1
- Updated stylelint-scss to v3.13.0
- Updated stylelint-declaration-block-no-ignored-properties to v2.2.0

[1.2.0]: https://github.com/thoughtbot/stylelint-config/compare/v1.1.0...v1.2.0

## [1.1.0] - 2019-09-09

### Added

- Enabled [`scss/selector-no-union-class-name`] (replacing our custom
  implementation of linting for this).
- Enabled [`scss/map-keys-quotes`].

[1.1.0]: https://github.com/thoughtbot/stylelint-config/compare/v1.0.2...v1.1.0
[`scss/selector-no-union-class-name`]: https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/selector-no-union-class-name/README.md
[`scss/map-keys-quotes`]: https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/map-keys-quotes/README.md

## [1.0.2] - 2019-08-06

### Changed

- Use a `>=` stylelint peer dependency to be more flexible in which
  stylelint version consumers can use.

[1.0.2]: https://github.com/thoughtbot/stylelint-config/compare/v1.0.1...v1.0.2

## [1.0.1] - 2019-04-18

### Fixed

- Added missing `stylelint-config-recommended` dependency.

[1.0.1]: https://github.com/thoughtbot/stylelint-config/compare/v1.0.0...v1.0.1

## [1.0.0] - 2019-03-23

### Added

- This config now extends the [`stylelint-config-recommended`], which turns on
  all the possible errors rules within stylelint.
- Enabled [`selector-nested-pattern`] to lint for selectors that are
  concatenated using Sass's parent selector (`&`).
- Enabled [`scss/no-duplicate-dollar-variables`], which lints for duplicate
  Sass variables.
- Added the [`stylelint-declaration-block-no-ignored-properties`] plugin, which
  disallows property values that are ignored due to another property value in
  the same rule.

[1.0.0]: https://github.com/thoughtbot/stylelint-config/compare/v0.2.0...v1.0.0
[`stylelint-config-recommended`]: https://github.com/stylelint/stylelint-config-recommended
[`selector-nested-pattern`]: https://stylelint.io/user-guide/rules/selector-nested-pattern/
[`scss/no-duplicate-dollar-variables`]: https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/no-duplicate-dollar-variables/README.md
[`stylelint-declaration-block-no-ignored-properties`]: https://github.com/kristerkari/stylelint-declaration-block-no-ignored-properties

## [0.2.0] - 2019-01-18

### Added

- Enabled [`function-calc-no-invalid`]
- Enabled [`function-calc-no-unspaced-operator`]
- Enabled [`function-linear-gradient-no-nonstandard-direction`]

### Changed

- Bump stylelint-order to 2.0.0
- Bump stylelint-scss to 3.5.1

[0.2.0]: https://github.com/thoughtbot/stylelint-config/compare/v0.1.0...v0.2.0
[`function-calc-no-invalid`]: https://stylelint.io/user-guide/rules/function-calc-no-invalid/
[`function-calc-no-unspaced-operator`]: https://stylelint.io/user-guide/rules/function-calc-no-unspaced-operator/
[`function-linear-gradient-no-nonstandard-direction`]: https://stylelint.io/user-guide/rules/function-linear-gradient-no-nonstandard-direction/
