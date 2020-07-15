const assert = require('chai').assert;
const index = require('../index');


describe('asdbsdtest', () => {
    it('Chaeck that test run', () => {
        assert.isString('test phase", 'string');

    });
    
    it('check that exports function call', () => {
        assert.isNumber(index.adnum(1, 3));
    });
});