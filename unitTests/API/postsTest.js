var request = require('supertest');
let token = '';
let postId = '';

describe('Get Posts', function () {
  var server;
  beforeEach(function () {
    
    server = require('../../server.js');

  });
  afterEach(function () {
    server.close();
  });

  it('responds to /api/post', function testSlash(done) {
  request(server)
    .get('/api/post')
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

describe('Make a Post', function () {
  var server;
  beforeEach(function () {
    
    server = require('../../server.js');

  });
  afterEach(function () {
    server.close();
  });


  it('responds to /api/post', function testSlash(done) {

  this.timeout(3000)
  request(server)
    .post('/api/post')
    .set({'Authorization': `Bearer ${token}`})
    .send({'title': 'Testing test', 'text': 'This is a text'})
    .expect(200)
    .expect('Content-Type', /json/)
    .end(function(err, res) {
      
      if (err) {
        console.log(err)
        return done(err);
      }

      console.log(res.body)
      postId = res.body.message._id
      return done();
    });

  });
});

describe('Get single Post', function () {
  var server;
  beforeEach(function () {
    
    server = require('../../server.js');

  });
  afterEach(function () {
    server.close();
  });


  it('responds to /api/post', function testSlash(done) {

  this.timeout(3000)
  request(server)
    .get('/api/post/'+postId)
    .expect(200)
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

describe('Update Post', function () {
  var server;
  beforeEach(function () {
    
    server = require('../../server.js');

  });
  afterEach(function () {
    server.close();
  });


  it('responds to /api/post', function testSlash(done) {

  this.timeout(3000)
  request(server)
    .put('/api/post/'+postId)
    .expect(200)
    .set({'Authorization': `Bearer ${token}`})
    .send({'title': 'Testing test v2', 'text': 'This is an updated text'})
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

describe('Delete Post', function () {
  var server;
  beforeEach(function () {
    
    server = require('../../server.js');

  });
  afterEach(function () {
    server.close();
  });


  it('responds to /api/post', function testSlash(done) {

  this.timeout(3000)
  request(server)
    .delete('/api/post/'+postId)
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