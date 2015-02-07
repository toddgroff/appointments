app.showModal = function(e) {
    var li = $(this).closest('li');
    var modal = $($('#modal-template').html());

    e.stopPropagation();

    $('.timeframe', li).append(modal);

    $('.timeframe').click(app.showListView);

    $('.confirm-remove').click(function (e) {
        e.stopPropagation();
        li.slideUp('fast', function() {
            li.remove();
        });
    });

    $('.close-modal').click(function (e) {
        e.stopPropagation();
        modal.remove();
    })
};
