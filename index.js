'use strict';

const container = require('./djectContainer');

const factory = container.build('resultBuilderFactory');
const signet = container.build('signet');

const types = {
    isFakeObject: signet.isTypeOf('fakeObject'),
    isSpyFunction: signet.isTypeOf('spyFunction'),
    isResultBuilder: signet.isTypeOf('resultBuilder'),
};

factory.types = types;

module.exports = factory;