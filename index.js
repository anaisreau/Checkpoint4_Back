const express = require('express');
const app = express();
const models = require("./models");
const bodyparser = require('body-parser')  
const cors = require('cors')


require('dotenv/config')


app.use(bodyparser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyparser.json())

require('./routes/reserve')(app)
const Users = require('./routes/user')
app.use('/user', Users)


models
    .sequelize
    .sync()
    .then(() => {
        app.listen(5000, console.log(`Server is running well!`))
    });