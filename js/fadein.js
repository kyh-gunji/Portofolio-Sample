$(function(){
    $('section[class!="main-visual"]').css("opacity", 0)
    $(window).on('scroll load', function(){
        for (var $i = 2; $i <= 7; $i++) {
            var $fadeIn = $("section:nth-child(" + $i +")").offset().top;
            $fadeIn -= 400;
            if ($(window).scrollTop() >= $fadeIn) {
                $("section:nth-child(" + $i +")").stop().animate({"opacity": 1}, 10);
            } else {
                $("section:nth-child(" + $i +")").stop().animate({"opacity": 0}, 100);
            }
        }
    });
});