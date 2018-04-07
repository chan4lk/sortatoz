import { expect } from 'chai';
import { sortatoz } from '../src/index';

describe('sortatoz', () => {

   it('should sort array by property', () => {
    const arry = [
      {name: 'ranaweera'},
      {name: 'chandima'}
    ];

    const sorted = arry.sort(sortatoz('name'));
    expect(sorted.length).to.be.equal(2);
    expect(sorted[0].name).to.be.equal('chandima');
    expect(sorted[1].name).to.be.equal('ranaweera');
   });

   it('should return already sorted array by property', () => {
    const arry = [
      {name: 'chandima'},
      {name: 'ranaweera'}
    ];

    const sorted = arry.sort(sortatoz('name'));
    expect(sorted.length).to.be.equal(2);
    expect(sorted[0].name).to.be.equal('chandima');
    expect(sorted[1].name).to.be.equal('ranaweera');
   });

   it('should return same array when nested property have same value', () => {
    const arry = [
      {name: 'chandima', id : 1},
      {name: 'chandima', id: 2}
    ];

    const sorted = arry.sort(sortatoz('name'));
    expect(sorted.length).to.be.equal(2);
    expect(sorted[0].id).to.be.equal(1);
    expect(sorted[1].id).to.be.equal(2);
   });

});
