const debug = require('debug')('app:startup');
const config = require('config');
const morgan = require('morgan');
const helmet = require('helmet');
const logger = require('./middleware/logger.js');
const Joi = require('joi');
const courses = require('./routes/courses');
const home = require('./routes/home.js')
const express = require('express');
const app = express();

// templating engine
app.set('view engine', 'pug');

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(helmet());
// we tell express to map all /api/courses to courses object we required above
app.use('/api/courses', courses);
app.use('/', home);

// configuration
console.log(`Application Name: ${config.get('name')}`);
console.log(`Mail Server: ${config.get('mail.host')} `)
console.log(`Mail Password: ${config.get('mail.password')} `)

if(app.get('env') === 'development') {
    app.use(morgan('tiny'));
    debug('Morgan is enabled...');
}

app.use(logger);


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});