app.showListView = function () {
    var listViewHtml = $('#frame-wall').html();
    var appts = app.appointments.query();
    var template = _.template(listViewHtml, {variable: 'm'});

    $('.app-view').html(template ( {
        frames: appts
    }));

    $('.add-frame').click(app.showEditView);

    // $('.delete').click(function () {
    //     var item = do something to display confirm frame
    // });

    $('.timeframe-item').click(function () {
        var item = $(this);
        var appointmentId = item.data('id');
        var appt = app.appointments.getById(appointmentId);

        app.showDetailsView(appt);
    });
};
