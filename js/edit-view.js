//displays the edit/new view and binds events to that page
app.showEditView = function () {
    var editViewHtml = $('#frame-edit').html();

    // var compiledTemplate = _.template(editViewHtml, { variable: 'm' });

    $('.app-view').html(editViewHtml);
    // $('.app-view').html(compiledTemplate(appt));

    $('.frame-info-form').submit(function () {

        app.createAppointment();

        app.showListView();

        return false;
    });
};

//
// app.showListView = function () {
//     var listViewHtml = $('#frame-wall').html();
//     var appts = app.appointments.query();
//     var template = _.template(listViewHtml, {variable: 'm'});
//
//     $('.app-view').html(template ( {
//         frames: appts
//     }));
//
//     $('.add-frame').click(app.showEditView);
//
//     $('.timeframe').click(function () {
//         var item = $(this);
//         var appointmentId = item.data('id');
//         var appt = app.appointments.getById(appointmentId);
//
//         app.showEditView(appt);
//     });
// };

// app.showEditScreen = function () {
//     $('main').html($('#editPage').html());
//
//     $('form').submit(function () {
//         var appt = app.Appointment({
//             title: $('input[name=title]').val(),
//             date: $('input[name=date]').val()
//         });
//
//         app.appointments.add(appt);
//
//         app.showListScreen();
//
//         return false;
//     });
// };
