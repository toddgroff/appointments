app.showListView = function () {
    var listViewHtml = $('#frame-wall').html();
    var appts = app.appointments.query().sort(function(a, b) {
            if (a.dateTime() < b.dateTime()) {
                return -1;
            }
            return 1;
        });

    console.log(appts);    

    var template = _.template(listViewHtml, {variable: 'm'});
    var noFrames = $('#no-frames').html();

    $('.app-view').html(template( {
        frames: appts
    }));

    if (appts === undefined || appts.length === 0) {
        $('.no-frames').html(noFrames);
        $('.no-frames').fadeIn('slow');
    };

    $('.add-frame').click(app.showNewView);

    $('.timeframe--remove').click(app.showFrameModal);

    $('.timeframe--edit').click(function() {
        var item = $(this).closest('div');
        var appointmentId = item.data('id');
        var appt = app.appointments.getById(appointmentId);

        app.showEditView(appt);
    });

    $('.timeframe').click(function () {
        var item = $(this);
        var appointmentId = item.data('id');
        var appt = app.appointments.getById(appointmentId);

        app.showDetailsView(appt);
    });

};
