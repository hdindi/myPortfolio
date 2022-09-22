$(document).ready(function () {
    $(".aboutmeLink").click(function (e) {
        e.preventDefault();
        $(".aboutme").show();
        $(".personaldetails").hide();
    });

    $(".active").click(function (e) {
        e.preventDefault();
        $(".personaldetails").show();
        $(".aboutme").hide();

    });
});