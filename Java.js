const boxes = $('.bounce')

$(#scrollmenu).mouseover(function () {
    $(this).addClass('boomboom')
    $(this).one('animationend', function() {
        $(this).removeClass('boomboom')
    });
});
