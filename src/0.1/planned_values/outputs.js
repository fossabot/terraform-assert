const assert = require('assert');

module.exports = function (outputs) {
    var outputs = outputs;
    return {
        output(name) {
            this.contains(name);
            var output = outputs[name];
            return {
                /**
                 * Checks if the output is sensitive
                 * @param {*} output 
                 */
                isSensitive: function () {
                    assert.ok(output.sensitive === true, `Output ${name} should be sensitive`);
                    return this;
                },
                /**
                 * Checks if the output is not sensitive
                 * @param {*} output 
                 */
                isNotSensitive: function () {
                    assert.ok(output.sensitive === false, `Output ${name} should not be sensitive`);
                    return this;
                }
            }
        },
        /**
         * 
         * @param {*} name 
         */
        contains(name) {
            assert.ok(outputs[name], `No output change named ${name} found`);
        }
    }
}