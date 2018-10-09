var $ = require('jquery');

var str = require('./constant');

var App = function() {
    // console.log(str);
    $('body').html(str);
    $('body').append('<p>Append</p>');
};

var app = new App();
app.get = function() {};
