var expect = require('chai').expect;

import {Goose} from './goose';

describe('a basic test', () => {
   it('shoudl pass when everyting is ok', () => {
      expect(true).to.be.true;

      let goo = new Goose();
      expect(goo.add(1, 2)).to.equal(4);
   });
});