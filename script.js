
$(document).ready(function() {
    console.log("jQuery is ready!");
    // Task 1
    $("#changeBtn").click(function() {
        $("#title").text("New Title");
        $(".description").html("<b>New Description</b>");
        $("p").css("color", "blue");
    });
    // Task 2
    $("#hideBtn").click(function() {
        $("#text").hide();
    });
    $("#showBtn").click(function() {
        $("#text").show();
    });
    $("#toggleBtn").click(function() {
        $("#text").toggle();
    });
    // Task 3
    $("#fadeInBtn").click(function() {
        $("#image").fadeIn();
    });
    $("#fadeOutBtn").click(function() {
        $("#image").fadeOut();
    });
    $("#fadeToggleBtn").click(function() {
        $("#image").fadeToggle();
    });
    // Task 4
    $("#slideUpBtn").click(function() {
        $("#panel").slideUp();
    });
    $("#slideDownBtn").click(function() {
        $("#panel").slideDown();
    });
    $("#slideToggleBtn").click(function() {
        $("#panel").slideToggle();
    });
});
