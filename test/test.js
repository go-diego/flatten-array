const flatten = require("../index.js");
const assert = require("assert");

describe("Should flatten array", () => {
    describe("test input: [[1, 2, [3]], 4]", () => {
        it("should equal [1,2,3,4]", () => {
            assert.deepStrictEqual(flatten([[1, 2, [3]], 4]), [1, 2, 3, 4]);
        });
    });
    describe("test input: [[1, 2], [3, 4, 5], [6, 7, 8, 9, 10]]", () => {
        it("should equal [1,2,3,4,5,6,7,8,9,10]", () => {
            assert.deepStrictEqual(flatten([[1, 2], [3, 4, 5], [6, 7, 8, 9, 10]]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        });
    });
    describe("test input: [[1, 2, [3]], [4, [5, [6, [7, [8, [9, 10]]]]]]]", () => {
        it("should equal [1,2,3,4,5,6,7,8,9,10]", () => {
            assert.deepStrictEqual(flatten([[1, 2, [3]], [4, [5, [6, [7, [8, [9, 10]]]]]]]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        });
    });
});

/** 
 * Mocha test results
 * 
  
 Should flatten array
    test input: [[1, 2, [3]], 4]
      √ should equal [1,2,3,4]
    test input: [[1, 2], [3, 4, 5], [6, 7, 8, 9, 10]]
      √ should equal [1,2,3,4,5,6,7,8,9,10]
    test input: [[1, 2, [3]], [4, [5, [6, [7, [8, [9, 10]]]]]]]
      √ should equal [1,2,3,4,5,6,7,8,9,10]

  3 passing (13ms)

 */
