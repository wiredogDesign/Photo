// get and display image count
var images = $('.thumbnail-trigger').length
$('.image-counter').text(images);


$('.info').click(function (e) { 
    e.preventDefault();
    $('.info').toggleClass('show-info');
});