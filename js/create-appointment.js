//capturing form input and creating instances of app.Appointment

app.createAppointment = function () {
    var createAppointment = {
        title: $('.title-entry').val(),
        date: $('.date-entry').val(),
        time: $('.time-entry').val(),
        streetAddress: $('.street-address-entry').val(),
        cityState: $('.city-state-entry').val(),
        id: Date.now()
    };

    app.appointments.add(app.Appointment(createAppointment));
};
