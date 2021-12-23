function scrollTo(e){
    e.preventDefault();
    var target = $(e.currentTarget).attr('href');
    var offset = $(target).offset();
    $('html, body').animate({scrollTop: offset.top});
};

$('.scroll').click(scrollTo);