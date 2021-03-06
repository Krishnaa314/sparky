const assert = require('assert');
const when = require('when');
const Spark = require('../');
const validator = require('../validator');

if (typeof process.env.SPARKY_API_TOKEN === 'string') {
  const spark = new Spark({ token: process.env.SPARKY_API_TOKEN });

  describe('#Spark.rolesGet()', () => {
    it('returns an array of spark role objects', () => spark.rolesGet()
      .then(roles => when(assert(validator.isRoles(roles), 'invalid response'))));
  });
}
