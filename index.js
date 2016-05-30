/**
 * Merge config main.ini + env.ini into js-array
 */

var ini = require('ini'),
    fs  = require('fs'),
    merge = require('merge');

var config = merge.recursive(
    parseConfig('main'),
    parseConfig('env')
);

/**
 * Parse /config/name.ini
 *
 * @param {string} name Filename
 * @returns {array} Parameters
 */
function parseConfig(name) {
    name = process.cwd() + '/config/' + name + '.ini';
    return ini.parse(fs.readFileSync(name, 'utf-8'));
}

/**
 * Apply one section of the config on itself
 * For instance, apply test section for test environment
 * 
 * @param {string} section Section of ini-config
 */
config.apply = function(section) {
    
    if (!this.hasOwnProperty(section)) {
        throw new Error('Section "' + section + '" not found in config');
    }
    
    merge.recursive(this, this[section]);
};

module.exports = config;
