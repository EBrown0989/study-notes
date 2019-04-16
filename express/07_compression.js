/**
 * Run the server in prod: NODE_ENV=production node 07_compression.js
 *
 * env Environment mode defaults to process.env.NODE_ENV or "development".
 *
 * Test response: curl -i -X GET http://localhost:8080
 */

const express = require('express'),
    morgan = require('morgan'),
    compression = require('compression'),
    errorHandler = require('errorhandler');

const app = express().use(morgan('dev'));

app.set('port', process.env.PORT || 8080);

if (app.get('env') === 'development') {
    app.use(errorHandler());
}
if (app.get('env') === 'production') {
    app.use(compression());
}

app.get('/', (req, res) => {
    res.end('hello world! I\'ll be compressed in a production environment!\n'
                + app.get('env') + '\n\n');
});

app.listen(app.get('port'), () => {
    console.log('Express server listening on port ' + app.get('port'));
});
