//displays the edit/new view and binds events to that page
app.showEditView = function (appt) {
    var editViewHtml = $('#frame-edit').html();
    var template = _.template(editViewHtml, { variable: 'm' });

    $('.app-view').html(template(appt));

    $('.cancel').click(function () {
        var item = $(this);
        var appointmentId = item.data('id');
        var appt = app.appointments.getById(appointmentId);

        app.showDetailsView(appt);
    });

    $('.frame-info-form').submit(function() {
        var item = $(this);
        var appointmentId = item.data('id');
        var appt = app.appointments.getById(appointmentId);

        var updateAppointment = {
            title: $('.title-entry').val(),
            date: $('.date-entry').val(),
            time: $('.time-entry').val(),
            streetAddress: $('.street-address-entry').val(),
            cityState: $('.city-state-entry').val(),
            id: appointmentId
        };

        app.appointments.removeById(appt);

        app.appointments.add(app.Appointment(updateAppointment));

        app.appointments.save();

        app.showDetailsView();

        return false;
    });

    $(function() {
        $('.date-entry').datepicker({ minDate: -20});
    });

};
