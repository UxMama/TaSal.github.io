// /* script for index and projects*/


$(document).ready(function() {
$('.hamburger-btn').click(function() {
if ($('.nav-mobile').css('display') == 'none') {
$('.nav-mobile').slideDown('slow');
$('body').css('overflow', 'hidden');
} else {
$('.nav-mobile').slideUp('slow');
$('body').css('overflow', 'auto');
}
});

$(document).on('click', 'a[href^="#"]', function(e) {
e.preventDefault();
$('.nav-mobile').slideUp('fast');
$('body').css('overflow', 'auto');
var dest = $(this).attr('href');
$('html,body').animate({ scrollTop: $(dest).offset().top }, 'slow');
});
});
