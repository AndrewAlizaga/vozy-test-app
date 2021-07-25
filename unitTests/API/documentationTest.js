var request = require('supertest');

describe('Documentation Redirectioning', function () {
  var server;
  beforeEach(function () {

    server = require('../../server.js');

  });
  afterEach(function () {
    server.close();
  });

  //Create Account
  it('responds to /api/documentation', function testSlash(done) {

    this.timeout(3000)
    request(server)
      .get('/api/documentation')
      .expect(302)
      .end(function (err, res) {
        if (err) return done(err);
        return done();
      });

  });

});