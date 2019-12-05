const chai = require('chai');
const { should } = require('chai');
const supertest = require('supertest');
const { expect } = require('chai');
const mongoose = require('mongoose');

const api = supertest('http://localhost:9000');

it('Main page content', function(done) {
  api
    .get('/')
    .set('Accept', 'application/json')
    .expect(200)
    .end(function(err, res) {
      expect(res.body).to.not.equal(null);
      console.log(res.body);
      done();
    });
});

it('creates users', async function() {
  api.get('/create').end(function(err, res) {
    expect(res.body).to.be.an('array');
  });
});

it('finds posts', async function() {
  api.get('/posts').end(function(err, res) {
    expect(res.body).to.be.an('array');
  });
});
