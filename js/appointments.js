$(function () {
    var frameWall = $('#frame-wall').html();
    var frameNew = $('#frame-new').html();
    var frameView = $('#frame-view').html();

    $('.app-view').html(frameWall);

    $('.app-view').on('click', '.add-frame', function () {
        $('.app-view').html(frameNew);
    });

    $('.app-view').on('click', '.save-frame', function () {
        $('.app-view').html(frameWall);
    });

    $('.app-view').on('click', '.cancel', function () {
        $('.app-view').html(frameWall);
    });

    $('.app-view').on('click', '.timeframe', function () {
        $('.app-view').html(frameView);
    });

    $('.app-view').on('click', '.back-arrow', function () {
        $('.app-view').html(frameWall);
    });


});
