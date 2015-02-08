app.showFrameModal = function(e) {
    var appts = app.appointments.query();
    var li = $(this).closest('li');
    var modal = $($('#modal-template').html());

    e.stopPropagation();

    $('.timeframe', li).append(modal);

    $('.timeframe').click(app.showListView);

    $('.confirm-remove').click(function (e) {
        var item = $(this).closest(li);
        var appointmentId = item.data('id');
        var appt = app.appointments.getById(appointmentId);

        e.stopPropagation();

        li.slideUp('fast', function() {
            li.remove();
        });

        app.appointments.removeById(appt);

        app.appointments.save();

        setTimeout(function() {
            app.showListView();
        },750);
    });

    $('.close-modal').click(function (e) {
        e.stopPropagation();
        modal.fadeOut(function() {
            modal.remove();
        })
    });
};
