$(function() {
    $(".toggle").on("click", function() {
        if ($(".nav_link").hasClass("active")) {
            $(".nav_link").removeClass("active");
            $(this).find("a").html("<i class='fas fa-bars'></i>");
        } else {
            $(".nav_link").addClass("active");
            $(this).find("a").html("<i class='fas fa-times'></i>");
        }
    });
});