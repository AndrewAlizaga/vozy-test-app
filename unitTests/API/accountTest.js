var request = require('supertest');
const { v4: uuidv4 } = require('uuid')
let token = ''
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
        
        if (err) {
          console.log(err)
          return done(err);
        }

        console.log(res.body)
        token = res.body.token;
        return done();

      });

  });
})

describe('Update account', function (){

  var server;
  beforeEach(function () {

    server = require('../../server.js');

  });
  afterEach(function () {
    server.close();
  });

  //With Account Created proceed to athentication test
  //Authenticate
  it('responds to /api/account', function testSlash(done) {

    this.timeout(3000)
    request(server)
      .put('/api/account')
      .set({'Authorization': `Bearer ${token}`})
      .send({'name': 'Test User New Name!', 'password': 'qwerty'})
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function (err, res) {
        if (err) return done(err);
        return done();
      });

  });
})

describe('Delete Account', function () {
  var server;
  beforeEach(function () {
    
    server = require('../../server.js');

  });
  afterEach(function () {
    server.close();
  });

  it('responds to /api/account', function testSlash(done) {

  this.timeout(3000)
  request(server)
    .delete('/api/account/')
    .expect(200)
    .set({'Authorization': `Bearer ${token}`})
    .expect('Content-Type', /json/)
    .end(function(err, res) {
    
      if (err) {
        console.log(err)
        return done(err);
      }
      console.log(res.body)
      return done();
    });

  });
});

describe('Get Accounts', function () {
  var server;
  beforeEach(function () {
    
    server = require('../../server.js');

  });
  afterEach(function () {
    server.close();
  });

  it('responds to /api/account', function testSlash(done) {
  request(server)
    .get('/api/account')
    .expect(200)
    .expect('Content-Type', /json/)
    .end(function(err, res) {
      
      if (err) {
        console.log(err)
        return done(err);
      }

      return done();
    });

  });
});