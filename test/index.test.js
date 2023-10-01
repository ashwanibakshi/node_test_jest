const calcuation = require('../index');

describe('checking calc',()=>{
  test('sum',()=>{
    var result = calcuation.sum(2,3);
       expect(result).toBe(5)
  });
  test('substract',()=>{
        var result = calcuation.less(8,4);
        expect(result).toBe(4);
  });
});