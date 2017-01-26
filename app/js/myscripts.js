var update = function () {
  var date = moment(new Date());
  datetime.html(date.format('DD.MM.YYYY, HH:mm:ss'));
};
$(document).ready(function(){ 
  datetime = $('#datetime')
  update();
  setInterval(update, 1000);
});

//var log = new Log(Log.DEBUG, Log.consoleLogger);
var log = Log4js.getLogger('MyLogger');
log.setLevel(Log4js.Level.ALL);
log.addAppender( new ConsoleAppender(true) );
