$(function() {
    app.appointments = app.AppointmentStore();

// This is the default view, which is set up and initialized
// in show-list-view.js
    app.appointments.load();

    app.showListView();
});
