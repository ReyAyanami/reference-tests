import {assert} from 'chai';
import {payload, people} from '../serialization';
// you can ge row data form payload.js file

describe('payload', function () {

  // in this tests try to use as least as possible number of assignments

  it('car quantity with owners older than 20 years', function () {

    let answer;

    /**
     * you code here
     */

    assert.equal(answer, 2);

  });

  it('all car colors separated by comma without duplicates', function () {

    let answer;

    /**
     * you code here
     */

    assert.equal(answer, 'red,yellow');

  });

  it('id\'s of all vehicles separated by comma', function () {

    let answer;

    /**
     * you code here
     */

    assert.equal(answer, '1,3,6,4,2');

  });

  it('summary price of all items', function () {

    let answer;

    /**
     * you code here
     */

    assert.equal(answer, 42800);

  });

  it('price of all things john has own', function () {

    let answer;

    /**
     * you code here
     */

    assert.equal(answer, 25000);

  });

  it('all cities', function () {

    let answer;

    /**
     * you code here
     */

    assert.equal(answer, 'New York,Boston,Columbia,Rapture');

  });
});
