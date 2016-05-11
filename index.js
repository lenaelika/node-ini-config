/**
 * Merge config main.ini + env.ini into js-array
 */

var ini = require('ini'),
    fs  = require('fs'),
    merge = require('merge');

module.exports = merge.recursive(
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
