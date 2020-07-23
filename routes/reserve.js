const express = require('express')
const reserves = express.Router()
const cors = require('cors')
const models = require('../models')
reserves.use(cors())

  reserves.get('/allreserve', (req, res) => {
    models.reserve.findAll({})  
    .then(resultat => res.json(resultat))   
    })
  

  reserves.get('/reserve', (req, res) => {
    models.reserve.findOne({
      where: {
          nom: req.body.id
      }})})

  reserves.post('/add', (req, res) =>{
    models.reserve.create({
      title: req.body.title,
    }).then((reserve) =>res.json(reserve))
  })
  