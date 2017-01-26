var log = new Log(Log.DEBUG, Log.popupLogger);
var log2 = new Log(Log.WARN, Log.alertLogger);
var log3 = new Log(Log.DEBUG, Log.consoleLogger);
log.debug('foo1');     // will popup a new window and log 'foo'
log.warn('bar1');      // will add a new 'bar' message to the popup
log2.debug('foo2');    // will do nothing (Log object's priority threshold is WARN)
log2.warn('bar2');     // will display a javascript alert with the string 'bar'
log3.debug('foo3');    // will log message to Safari console or existing popup 
log3.error('bar3');     // same
log.info(Log.dumpObject(new Array('apple','pear','orange','banana')));
