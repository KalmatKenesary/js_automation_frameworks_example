import { assert } from "chai";

import Example from "../../src/Example.js";

const firstVariable = 4;
const secondVariable = 2;
const expectedResult = 2;

xdescribe('Test Example class', () => { // skip = xdescribe
    xit('Test addTwoVars function in Example class', () => { // skip = xit
        this.retries(4);
        assert.equal(
            Example.divideTwoVars(firstVariable, secondVariable), 
            expectedResult, 
            `${firstVariable} + ${secondVariable} is not equal ${expectedResult}`);
    })
})