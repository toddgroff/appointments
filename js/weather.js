//uses ajax to import current whether
$(function () {
    var weatherTemplate = _.template($('#frame-view').html(), { variable: 'm' });

    $.getJSON('http://api.openweathermap.org/data/2.5/forecast?q=' + <%- m.cityState %>)
    .done(function (data) {
        $('.app-view').html(weatherTemplate(data));
    })
    .fail(function (request, status, err) {
        console.log(err);
        alert('Failed to connect to Open Weather Map... See console for details.');
    });
});
