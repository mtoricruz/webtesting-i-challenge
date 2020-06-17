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
    it('fail enhance items decrease durability by 5 if less than lvl 15', function() {
        expect(fail({ enhancement: 14, durability: 10}).durability).toBe(5)
    })
    it('fail enhance items decrease durability by 10 if enhance lvl 15 or more', function() {
        expect(fail({ enhancement: 15, durability: 10}).durability).toBe(0)
    })
    it('fail enhance decrease enhancement lvl by 1 if enhance lvl 16 or more', function() {
        expect(fail({ enhancement: 17 }).enhancement).toBe(16)
    })
})