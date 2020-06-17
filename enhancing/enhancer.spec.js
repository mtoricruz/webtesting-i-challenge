const { succeed, fail, repair } = require('./enhancer.js');
// test away!
describe('repair, success, fail items', function () {
    it('should repair item durability to 100', function() {
        expect(repair({ durability: 10, enhancement: 10 }).durability).toBe(100)
    })
    it('doesnt enhance items passed max lvl', function () {
        expect(succeed({ enhancement: 20 }).enhancement).toBe(20)
    })
    it('successfully enhance items below max lvl', function () {
        expect(succeed({ enhancement: 10 }).enhancement).toBe(11)
    })
    it.todo('fail enhance items')
})