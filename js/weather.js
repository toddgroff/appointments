//uses ajax to import weather for city of event
app.weather = function (appt) {
    var weather = $('#weather-data').html();
    var weatherTemplate = _.template(weather, {variable: 'm'});
    var cityState = appt.cityState;
    var cityStateEsc = cityState.replace(/\s/g,'');

    $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=' + cityStateEsc)
    .done(function (data) {
        $('.weather-container').html(weatherTemplate(data));
    })
    .fail(function (request, status, err) {
        console.log(err);
        alert('Failed to connect to weather data... See console for details.');
    });
};
