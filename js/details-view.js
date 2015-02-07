//displays the details view and binds events to that page
app.showDetailsView = function (appt) {
    var detailsViewHtml = $('#frame-view').html();
    var template = _.template(detailsViewHtml, { variable: 'm' });

    $('.app-view').html(template(appt));

    $('.back-arrow').click(function () {

        app.showListView();
    });

    $('.edit-frame').click(function () {
        var item = $(this);
        var appointmentId = item.data('id');
        var appt = app.appointments.getById(appointmentId);

        app.showEditView(appt);
    });
};


// var item = $(this);
// var appointmentId = item.data('id');
// var appt = app.appointments.getById(appointmentId);
//
// app.showDetailsView(appt);
