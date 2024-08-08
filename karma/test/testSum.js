describe('test sum file', () => {
    [
        {
            a: 1,
            b: 2,
            expected: 3
        },
        {
            a: 4,
            b: 3,
            expected: 7
        }
    ].forEach((element) => {
        it(`test sum function ${element.a} + ${element.b} = ${element.expected}`, () => {
            expect(mySum(element.a, element.b)).to.equal(element.expected);
        })
    })
})