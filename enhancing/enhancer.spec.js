const { succeed, fail, repair } = require('./enhancer.js');
// test away!
describe('repair, success, fail items', function () {
    it('should repair item durability to 100', function() {
        expect(repair({ durability: 10, enhancement: 10 }).durability).toBe(100)
    })
    it('successfully enhance items', function () {
        expect(success({})).toBe()
    })
    it.todo('fail enhance items')
})