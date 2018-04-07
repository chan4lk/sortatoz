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

});
