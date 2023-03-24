const express = require('express');
const app = express();


const ejs = require('ejs');
app.set('view engine', 'ejs');

const workingHoursMiddleware = (req, res, next) => {
    const date = new Date();
    const dayOfWeek = date.getDay();
    const hour = date.getHours();
    if (dayOfWeek >= 1 && dayOfWeek <= 5 && hour >= 9 && hour <= 17) {
      next();
    } else {
      res.send('The website is only available during working hours (Monday to Friday, from 9 to 17).');
    }
  };

  
  app.get('/', workingHoursMiddleware, (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
  });
  
  app.get('/services', workingHoursMiddleware, (req, res) => {
    res.sendFile(__dirname + '/public/services.html');
  });
  
  app.get('/contact', workingHoursMiddleware, (req, res) => {
    res.sendFile(__dirname + '/public/contact.html');
  });

  app.get('/', workingHoursMiddleware, (req, res) => {
    res.render('index');
  });
  


