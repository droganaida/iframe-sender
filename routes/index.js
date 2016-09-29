
module.exports = function(app){

    app.get('/', require('./main').get);
    app.get('/frame', require('./frame').get);

};