$(document).ready(function() {
    $('.card').click(function() {
        if ($(this).hasClass('card-active')) {
            $(this).removeClass('card-active').animate({ 'zoom': 1 }, 500);
            $('.card').not(this).animate({ 'opacity': 1 }, 500);
            $('.card').not(this).removeClass('card-inactive');
        } else if ($(this).hasClass('card-inactive')) {
            $('.card').removeClass('card-inactive');
            $('.card').removeClass('card-active');
            $('.card').animate({ 'opacity': 1, 'zoom': 1 }, 500);
        } else {
            $(this).addClass('card-active').animate({ 'zoom': 1.2 }, 500);
            $('.card').not(this).addClass('card-inactive');
            $('.card').not(this).animate({ 'opacity': 0 }, 500);
        }
    });
});