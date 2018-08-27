import {assert} from 'chai';
import {payload, people} from '../serialization';
// you can ge row data form payload.js file

const filter = (type,type2) => {
    return payload.data.filter(x => x.type === type || x.type === type2);
}

const TYPES = {
    Car: 'Car',
    Bicycle: 'Bicycle',
    Gun: 'Gun',
}

describe('payload', function () {

    // in this tests try to use as least as possible number of assignments

    it('car quantity with owners older than 20 years', function () {

        let answer = 0;

        const filteredPayload = filter(TYPES.Car);
        filteredPayload.map( data => {
            data.owners.some( x => x.personalInfo.age <= 20 ? answer++ : null)
        });

        assert.equal(answer, 2);

    });

    it('all car colors separated by comma without duplicates', function () {

        let answer = [];

        const filteredPayload = filter(TYPES.Car);
        filteredPayload.map( data => {
            !answer.includes(data.attrs.color) ? answer.push(data.attrs.color) : null;
        });

        assert.equal(answer, 'red,yellow');

    });

    it('id\'s of all vehicles separated by comma', function () {

        let answer = [];

        const filteredPayload = filter(TYPES.Car,TYPES.Bicycle);
        filteredPayload.map( data => {
            answer.push(data.id);
        });

        assert.equal(answer, '1,3,6,4,2');

    });

    it('summary price of all items', function () {

        let answer = 0;

        payload.data.map( data => {
            answer += data.attrs.price;
        });

        assert.equal(answer, 42800);

    });

    it('price of all things john has own', function () {

        let answer = 0;

        payload.data.map( data => {
            data.owners.some( owner => owner.firstName === 'john' ? answer+=data.attrs.price  : null)
        });

        assert.equal(answer, 25000);

    });

    it('all cities', function () {

        let answer = [];

        Object.keys(people).forEach( (i) => {
            answer.push(people[i].cities);
        });

        assert.equal(answer, 'New York,Boston,Columbia,Rapture');

    });
});