var assert = require('assert'),
    vows = require('vows');

var BigInt = require('../');

vows.describe('bitwise').addBatch({
  'and': {
    topic: new BigInt(0xF0F0F0F0),

    'with bigger bitmask': function (big) {
      assert.strictEqual(+big.and(0xAAAAAAAAAAAA), 0xA0A0A0A0);
    },

    'with equal size bitmask': function (big) {
      assert.strictEqual(+big.and(0xAAAAAAAA), 0xA0A0A0A0);
    },

    'with smaller bitmask': function (big) {
      assert.strictEqual(+big.and(0xAA), 0xA0);
    }
  },

  'or': {
    topic: new BigInt('0x1100011'),

    'with bigger bitmask': function (big) {
      assert.strictEqual(big.or('0xA0A0A0A0A0A0A0A').toString(), '723401728398592539');
    },

    'with equal size bitmask': function (big) {
      assert.strictEqual(+big.or('0x1234321'), 20136753);
    },

    'with smaller bitmask': function (big) {
      assert.strictEqual(+big.or('0xAB'), 17825979);
    }
  },

  'shift': {
    topic: new BigInt(0xDDCCBBAA),

    'left': function (big) {
      assert.strictEqual(+big.shiftLeft(8), 0xDDCCBBAA00);
      // Corner case where value fits perfectly in one value before shift.
      assert.strictEqual(+new BigInt(32767).shiftLeft(1), 65534);
    },

    'right': function (big) {
      assert.strictEqual(+big.shiftRight(8), 0xDDCCBB);
    }
  },

  'xor': {
    topic: new BigInt('0x1100011'),

    'with bigger bitmask': function (big) {
      assert.strictEqual(big.xor('0xABABABABABABABA').toString(), '773135597222673067');
    },

    'with equal size bitmask': function (big) {
      assert.strictEqual(+big.xor('0x1234321'), 3359536);
    },

    'with smaller bitmask': function (big) {
      assert.strictEqual(+big.xor('0xAB'), 17825978);
    }
  }
}).export(module);
