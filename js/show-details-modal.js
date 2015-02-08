app.showDetailsModal = function(e) {
    var details = $(this).closest('.frame-view');
    var modal = $($('#modal-template').html());

    e.stopPropagation();

    $(details).append(modal);

    $('.confirm-remove').click(function (e) {
        var item = $(this).closest(details);
        var appointmentId = item.data('id');
        var appt = app.appointments.getById(appointmentId);
        var frameWall = app.showListView;

        e.stopPropagation();

        details.fadeOut('fast', function() {
            details.remove();
        });

        app.appointments.removeById(appt);

        app.appointments.save();

        setTimeout(function() {
            app.showListView();
        },250);
    });

    $('.close-modal').click(function (e) {
        e.stopPropagation();
        modal.fadeOut(function() {
            modal.remove();
        })
    });

    $(modal).click(function(e) {
        e.stopPropagation();
        modal.fadeOut(function() {
            modal.remove();
        })
    });
};
