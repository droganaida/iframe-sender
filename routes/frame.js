
exports.get = function(req, res){

    res.locals.title = 'Земля, я Луна, как слышно? Прием!';
    res.locals.htmldescription = 'Кроссдоменное взаимодействие - Iframe от сателлита';

    res.render('./frame/frame');
};