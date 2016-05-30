/**
 * Mocha test for ini-config
 */

var assert = require('assert'),
    config = require('./index');

describe('package', () => {
    
    it('merges main.ini and env.ini into an array', () => {
        var expect = {
            'web': {
                'host': 'localhost',
                'port': '3000'
            },
            'mongodb': {
                'connectionString': 'mongodb://localhost:27017/app'
            },
            'test': config.test,
            'apply': config.apply
        };
        
        assert.deepStrictEqual(config, expect);
    });
    
    it('can apply test section', () => {
        var expect = {
            'web': {
                'host': 'localhost',
                'port': '3008'
            },
            'mongodb': {
                'connectionString': 'mongodb://localhost:27017/test'
            },
            'test': config.test,
            'apply': config.apply
        };
        
        config.apply('test');        
        assert.deepStrictEqual(config, expect);        
    });
});
