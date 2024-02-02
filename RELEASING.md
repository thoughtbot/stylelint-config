# Releasing

This documents how to release a new version of the thoughtbot stylelint
Config. It’s for thoughtbot employees.

1. Make sure you’re on the `main` branch with a clean working directory.

1. Run `bin/build-changelog` to put together the entries for the CHANGELOG. You
   might wish to edit it or make other minor changes. Then, you can update
   `CHANGELOG.md`.

1. Run `npm version [major | minor | patch] --force`

    This script will…

    - Add the changes to `CHANGELOG.md` to the Git index
    - Bump the version in `package.json` and `package-lock.json`
    - Create a version Git commit and tag

1. Run `npm publish`

    This script will push to GitHub and publish the new version to
    the npm registry

1. Draft a [new GitHub release][github-release], copying the release’s
   changelog entry into the release notes

[changelog]: /CHANGELOG.md
[keep-a-changelog]: http://keepachangelog.com
[github-release]: https://github.com/thoughtbot/stylelint-config/releases/new
