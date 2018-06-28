
$(document).ready(function() {
    $(window).resize(function(){
    var windowWidth = $('body').innerWidth();
    if(windowWidth > 995)$("#nav-reg").addClass("my-navbar");
    else $("#nav-reg").removeClass("my-navbar");
    });
});
