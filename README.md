# thoughtbot stylelint Config

A sharable [stylelint][stylelint] configuration that enforces
[thoughtbot’s Sass guides][thoughtbot-sass-guides].

[stylelint]: https://stylelint.io/
[thoughtbot-sass-guides]: https://github.com/thoughtbot/guides/tree/main/sass

## Installation

If using **npm**, run:

```bash
npm install @thoughtbot/stylelint-config --save-dev
```

If using **Yarn**, run:

```bash
yarn add @thoughtbot/stylelint-config --dev
```

## Usage

Set your [stylelint configuration][stylelint-configuration] to:

```json
{
  "extends": "@thoughtbot/stylelint-config"
}
```

You can override rules from the shared configuration, by setting your
own values within the `rules` property:

```json
{
  "extends": "@thoughtbot/stylelint-config",
  "rules": {
    "string-quotes": "single"
  }
}
```

You can also turn a rule off, by setting the value of the rule to `null`:

```json
{
  "extends": "@thoughtbot/stylelint-config",
  "rules": {
    "string-quotes": null
  }
}
```

[stylelint-configuration]: https://stylelint.io/user-guide/configuration/

## License

thoughtbot stylelint Config is copyright (c) 2020
thoughtbot, inc. It is free software, and may be redistributed under the
terms specified in the [LICENSE] file.

[LICENSE]: /LICENSE.md

<!-- START /templates/footer.md -->
<!-- END /templates/footer.md -->
