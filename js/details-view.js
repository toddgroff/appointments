//displays the details view and binds events to that page
app.showDetailsView = function (appt) {
    var detailsViewHtml = $('#frame-view').html();
    var compiledTemplate = _.template(detailsViewHtml, { variable: 'm' });

    console.log(appt);

    // $('.app-view').html(detailsViewHtml);
    $('.app-view').html(compiledTemplate(appt));

    $('.back-arrow').click(function () {

        app.showListView();
    });

    $('.edit-frame').click(function () {

        app.showEditView();
    });
};


// var item = $(this);
// var appointmentId = item.data('id');
// var appt = app.appointments.getById(appointmentId);
//
// app.showDetailsView(appt);
