//displays the edit/new view and binds events to that page
app.showNewView = function () {
    var newViewHtml = $('#frame-new').html();

    $('.app-view').html(newViewHtml);

    $('.cancel').click(app.showListView);

    $('.frame-info-form').submit(function () {

        app.createAppointment();

        app.showListView();

        return false;
    });
};
