import { assert } from "chai";

import Example from "../../src/Example.js";

const firstVariable = 1;
const secondVariable = 2;
const expectedResult = 3;

describe('Test Example class', () => {
    it('Test addTwoVars function in Example class', () => {
        this.retries(4);
        assert.equal(
            Example.addTwoVars(firstVariable, secondVariable), 
            expectedResult, 
            `${firstVariable} + ${secondVariable} is not equal ${expectedResult}`);
    })

    xit('Test minusTwoVars function in Example class', () => {
        assert.equal(
            Example.minusTwoVars(firstVariable, secondVariable), 
            expectedResult, 
            `${firstVariable} - ${secondVariable} is not equal ${expectedResult}`);
    })
})