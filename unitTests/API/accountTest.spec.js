var request = require('supertest');
const { v4: uuidv4 } = require('uuid')
//const name = 'TestUser ' //+ uuidv4()

describe('Post User', function () {
  var server;
  beforeEach(function () {

    server = require('../../server.js');

  });
  afterEach(function () {
    server.close();
  });

  //Create Account
  it('responds to /api/account', function testSlash(done) {

    this.timeout(3000)
    request(server)
      .post('/api/account')
      .send({ 'name': 'Test User', 'password': 'qwerty' })
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        return done();
      });

  });

});

describe('Authenticate user', function (){

  var server;
  beforeEach(function () {

    server = require('../../server.js');

  });
  afterEach(function () {
    server.close();
  });

  //With Account Created proceed to athentication test
  //Authenticate
  it('responds to /api/auth', function testSlash(done) {

    this.timeout(3000)
    request(server)
      .post('/api/auth')
      .auth('Test User', 'qwerty')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function (err, res) {
        if (err) return done(err);
        return done();
      });

  });
})