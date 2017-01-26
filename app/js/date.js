var datetime = null,
        date = null;

var update = function () {
    date = moment(new Date())
    datetime.html(date.format('DD.MM.YYYY, HH:mm:ss'));
};

$(document).ready(function(){
    datetime = $('#datetime')
    update();
    setInterval(update, 1000);
});
