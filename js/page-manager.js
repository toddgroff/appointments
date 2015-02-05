// var manager = PageManager($('#main-content'));
//
// manager.registerPage('list', function () {
//     //HERE, you render the list page
// });
//
// manager.editPage('edit', function () {
//     //HERE, you render the edit page
// });
//
// manager.gotTo('list', appointments);


//Responsible for changing from one page to another
//with our SPA
// app.PageChanger = function () {
//     return {
//         registerPage: function (name, callback) {
//
//         },
//
//         goTo: function (name, data) {
//
//         },
//     };
// };

$(function () {
    var frameWall = $('#frame-wall').html();
    var frameNew = $('#frame-edit').html();
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
