"use strict";
var Model_node_1 = require('../classes/Model.node');
var DecorateField_node_1 = require('../services/DecorateField.node');
function Decimal(decimalPlaces) {
    'use strict';
    return function (target, key) {
        var typeName = 'decimal';
        var validatorName = 'invalidDecimal';
        DecorateField_node_1.DecorateField.addType(target, key, typeName);
        if (decimalPlaces !== undefined && decimalPlaces !== null && decimalPlaces >= 1) {
            var decimalPlacesValidatorName = 'decimalPlaces';
            DecorateField_node_1.DecorateField.addDescriptor(target, key, decimalPlacesValidatorName, decimalPlaces);
            var validator_1 = function (newValue) {
                if (!(newValue && newValue.toString)) {
                    return true;
                }
                var splitNumber = newValue.toString().split('.');
                return newValue === undefined
                    || (splitNumber.length === 2
                        && splitNumber[1].length === decimalPlaces);
            };
            Model_node_1.Model.addValidator(target, decimalPlacesValidatorName, validator_1, key);
        }
        var validator = function (newValue) {
            return newValue === undefined || typeof newValue === 'number';
        };
        Model_node_1.Model.addValidator(target, validatorName, validator, key);
    };
}
exports.Decimal = Decimal;
;
