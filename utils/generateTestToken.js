'use strict'

var jwt = require('jsonwebtoken')
var config = require('../config')
var tokenOptions = {
  expiresIn: '1h',
  issuer: 'https://auth.t-fk.no'
}
var data = {
  id: 898766,
  user: 'bob'
}
var token = jwt.sign(data, config.JWT_SECRET, tokenOptions)

console.log(token)

//eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ODk4NzY2LCJ1c2VyIjoiYm9iIiwiaWF0IjoxNDQ5NDkyMTg4LCJleHAiOjE0NDk0OTU3ODgsImlzcyI6Imh0dHBzOi8vYXV0aC50LWZrLm5vIn0.GvE38Jo9lvnv5WN320Ywwp1XpUkNveM3TXiVlSWPJkk
