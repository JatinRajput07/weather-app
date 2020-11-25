const express = require('express')
const Router = express.Router();
const viewontroller = require('../controllers/viewontroller')


Router.get('/',viewontroller.homePge);
Router.get('/about',viewontroller.getAbout);
Router.get('/weather',viewontroller.getWeather);



module.exports = Router;