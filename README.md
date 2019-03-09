# thoughtbot Stylelint Config

A sharable [Stylelint][stylelint] configuration that enforces
[thoughtbot’s Sass guides][thoughtbot-sass-guides].

[stylelint]: https://stylelint.io/
[thoughtbot-sass-guides]: https://github.com/thoughtbot/guides/tree/master/style/sass

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

thoughtbot Stylelint Config is copyright (c) 2018 Tyson Gach and
thoughtbot, inc. It is free software, and may be redistributed under the
terms specified in the [LICENSE] file.

[LICENSE]: /LICENSE.md

## About

thoughtbot Stylelint Config is maintained by Tyson Gach.

![thoughtbot](http://presskit.thoughtbot.com/images/thoughtbot-logo-for-readmes.svg)

thoughtbot Stylelint Config is maintained and funded by thoughtbot, inc.
The names and logos for thoughtbot are trademarks of thoughtbot, inc.

We love open source software! See [our other projects][community] or
[hire us][hire] to help build your product.

[community]: https://thoughtbot.com/community?utm_source=github
[hire]: https://thoughtbot.com/hire-us?utm_source=github
