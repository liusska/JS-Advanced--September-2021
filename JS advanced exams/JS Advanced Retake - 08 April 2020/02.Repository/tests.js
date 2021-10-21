let { Repository } = require("../02.Repository/solution");
const assert = require('chai').assert;

describe("Test Repository functionality", function () {
    let instance = {}

    beforeEach(() => instance = new Repository({
        name: 'string',
        age: 'number',
        birthday: 'object'
    }));

    describe("Instantiation", function () {
        it("getter count", function () {
            assert.equal(instance.count, 0);
        });
    });

    describe("add(entity)", function () {
        it("check id in the collection", function () {
            assert.equal(instance.add({ name: '', age: 1, birthday: {} }), 0)
        });
        it("check invalid id in the collection throw", function () {
            assert.throw(() => instance.getId(1), 'Entity with id: 1 does not exist!');
        });
    });

    describe("update(id, newEntity)", function () {
        it("throw if empty property", function () {
            assert.throw(() => instance.update(0, {},), `Entity with id: 0 does not exist!`)
        });
        it("throw if empty property", function () {
            instance.add({ name: '', age: 0, birthday: {}, })
            assert.throw(() => instance.update(0, { age: 1, birthday: { date: 0 } }));
        });
        it("throw if type of input[name] property is invalid ", function () {
            instance.add({ name: '', age: 0, birthday: {}, })
            assert.throw(() => instance.update(0, { name: 0, age: 1, birthday: { date: 0 } }), TypeError);
        });

    });
    describe("del(id)", function () {
        it("delete index properly", function () {
            instance.add({ name: '', age: 1, birthday: {} });
            instance.add({ name: '', age: 1, birthday: {} });
            instance.del(1);
            assert.equal(instance.data.has(1), false);
            assert.equal(instance.data.has(0), true);

        });
        it("delete invalid index ", function () {
            assert.throw(() => instance.del(-1), `Entity with id: -1 does not exist!`);

        });
    });
});
