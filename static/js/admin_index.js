$(document).ready(function() {
    $("#page .content .nav-left .nav-list dl dt").click(function() {
        if ($(this).siblings("dd").is(":animated")) {
            $(this).siblings("dd").stop();
        }
        if ($(this).children("span").attr('class') == "glyphicon glyphicon-chevron-left") {
            $(this).children("span").removeClass("glyphicon glyphicon-chevron-left");
            $(this).children("span").addClass("glyphicon glyphicon-chevron-down");
        } else {
            $(this).children("span").removeClass("glyphicon glyphicon-chevron-down");
            $(this).children("span").addClass("glyphicon glyphicon-chevron-left");
        }
        $(this).siblings("dd").slideToggle('fast');
    });

    $("#page .content .nav-list-xs dl dt").click(function() {
        if ($(this).siblings("dd").is(":animated")) {
            $(this).siblings("dd").stop();
        }
        if ($(this).children("span").attr('class') == "glyphicon glyphicon-chevron-left") {
            $(this).children("span").removeClass("glyphicon glyphicon-chevron-left");
            $(this).children("span").addClass("glyphicon glyphicon-chevron-down");
        } else {
            $(this).children("span").removeClass("glyphicon glyphicon-chevron-down");
            $(this).children("span").addClass("glyphicon glyphicon-chevron-left");
        }
        $(this).siblings("dd").slideToggle('fast');
        
    });


    $("#mainFrame").load(function() {
        var _right_top_height = $("#page .content .right-top").height();
        /*alert("_right_top_height="+_right_top_height);*/
        var _content_height = $("#page .content").height();
        /*alert("_content_height="+_content_height);*/
        var _right_main_height = _content_height - _right_top_height;
        $("#page .content right-main").height(_right_main_height);
        $("#mainFrame").height(_right_main_height - 30);

    });

});
