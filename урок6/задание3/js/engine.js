$(document).ready(function(){
    var i = 5;
    $('.arrow_left').click(function(){
        console.log(i);
        $('.gallery_ribbon').animate({left: '-=196'}, function(){
            if (i > 12) {
                $('.gallery_ribbon').css('left', '-785px');
                i = 5;
            }else{
                i++;
            };
        });
    });
     
    $('.arrow_right').click(function(){
        console.log(i);
        $('.gallery_ribbon').animate({left: '+=196'}, function(){
            if (i < 3) {
                $('.gallery_ribbon').css('left', '-1765px');
                i = 10;
            }else{
                i--;
            };
        });
    });
});