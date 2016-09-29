
$(window).load(function() {

    var pageHeight = $('.frame-holder h1').height() + $('.frame-holder img').height();

    // Проверка поддерживает ли браузер обмен сообщениями

    if (window.addEventListener ) {

        // вешаем обработчик события на прием сообщения
        window.addEventListener('message', function(e) {

            // проверяем кто прислал сообщение (здесь должен быть url сайта-базы)
            if (e.origin === 'http://localhost:3002') {

                var task = e.data['task']; // task получаем от основного сайта
                var msg; // ответ от сателлита

                console.log('Я Луна. Мое задание: ' + task);

                switch (task) {
                    // тут можно перебирать любые сообщения от базы и назначать к ним ответы
                    case 'dataheight':

                        msg = {'task': 'dataheight', 'val': pageHeight};
                        e.source.postMessage(msg , e.origin);
                        break;

                    default:

                        var unknounMsg = "Что тебе надобно, Земля?"
                        msg = {'task': 'unknown', 'val': unknounMsg};
                        e.source.postMessage(msg , e.origin);
                        break;
                }
            }
        }, false);
    }

});