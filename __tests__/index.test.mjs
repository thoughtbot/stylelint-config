import { beforeEach, describe, it } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

import stylelint from 'stylelint';

import config from '../index.js';

describe('rules', () => {
  const ruleNames = Object.keys(config.rules);

  it('is not empty', () => {
    assert.ok(ruleNames.length > 0);
  });

  ruleNames.forEach((ruleName) => {
    it(`${ruleName}`, async () => {
      const rule = await stylelint.rules[ruleName];

      // rules like `stylelint-order` don't have the same method signature and
      // so we can't tell if they're deprectated or not
      if (typeof rule !== 'undefined') {
        assert.ok(!rule.meta.deprecated, `the ${ruleName} rule is deprecated`);
      }
    });
  });
});

describe('with the valid example', () => {
  const validScss = fs.readFileSync('./__tests__/valid.scss', 'utf-8');
  let result;

  beforeEach(async () => {
    result = await stylelint.lint({
      code: validScss,
      config,
    });
  });

  it('does not error', () => {
    assert.equal(result.errored, false);
  });

  it('has no warnings', () => {
    assert.equal(result.results[0].warnings.length, 0);
  });
});

describe('with the invalid example', () => {
  const invalidScss = fs.readFileSync('./__tests__/invalid.scss', 'utf-8');
  let result;

  beforeEach(async () => {
    result = await stylelint.lint({
      code: invalidScss,
      config,
    });
  });

  it('errors', () => {
    assert.equal(result.errored, true);
  });

  it('has the correct amount of warnings', () => {
    assert.equal(result.results[0].warnings.length, 28);
  });

  it('flags the correct rules', () => {
    assert.deepEqual(
      result.results[0].warnings.map((w) => w.rule),
      [
        'order/properties-alphabetical-order',
        'order/properties-alphabetical-order',
        'order/properties-alphabetical-order',
        'order/properties-alphabetical-order',
        'order/properties-alphabetical-order',
        'order/properties-alphabetical-order',
        'scss/dollar-variable-colon-space-after',
        'scss/map-keys-quotes',
        'scss/no-duplicate-dollar-variables',
        'scss/dollar-variable-empty-line-before',
        'block-no-empty',
        'color-hex-length',
        'color-named',
        'color-named',
        'comment-whitespace-inside',
        'comment-whitespace-inside',
        'declaration-block-no-redundant-longhand-properties',
        'declaration-empty-line-before',
        'declaration-empty-line-before',
        'declaration-no-important',
        'declaration-property-unit-allowed-list',
        'declaration-property-value-disallowed-list',
        'max-nesting-depth',
        'property-no-unknown',
        'property-no-vendor-prefix',
        'selector-max-id',
        'selector-max-id',
        'selector-pseudo-element-colon-notation',
      ],
    );
  });
});
