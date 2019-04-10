var el = $('.codeconSkillbar div');

$(window).scroll(function(){
    if ( $(this).scrollTop() > el.offset().top - 200 ) {
        el.addId(@keyframes);
    }
});