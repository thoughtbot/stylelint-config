# Change Log

All notable changes to this project will be documented in this file. This
project adheres to [Semantic Versioning](http://semver.org).

## [Unreleased (`master`)][unreleased]

Nothing at the moment.

[unreleased]: https://github.com/thoughtbot/stylelint-config/compare/v1.1.0...HEAD

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
