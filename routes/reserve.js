const express = require('express')
const reserves = express.Router()
const cors = require('cors')
const models = require('../models')
reserves.use(cors())


module.exports = function (app) {
  app.get('/all', (req, res) => {
    models
    .reserve
    .findAll()  
    .then(resultat => res.json(resultat))   
    })
  

 app.get('/reserve', (req, res) => {
    models
    .reserve
    .findOne({
      where: {
          nom: req.body.id
      }})})

  app.post('/add', (req, res) =>{
    models.reserve.create({
      title: req.body.title,
    }).then((reserve) =>res.json(reserve))
  })
}