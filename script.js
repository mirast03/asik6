
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
    // Task 5
    $("#appendBtn").click(function() {
        $("#list").append("<li>New Item</li>");
    });
    $("#prependBtn").click(function() {
        $("#list").prepend("<li>First Item</li>");
    });
    $("#removeBtn").click(function() {
        $("#list li:last").remove();
    });
    // Task 6
    $("#imageBtn").click(function() {
        $("#photo").attr("src", "https://picsum.photos/id/1025/200/150");
    });
    $("#linkBtn").click(function() {
        $("#link").attr("href", "https://github.com/mirast03/asik6");
    });
    // Task 7
    $("#name").on("input", function() {
        $("#nameOutput").text($("#name").val());
    });
    $("#email").on("input", function() {
        $("#emailOutput").text($("#email").val());
    });
    // Task 8
    $("#animate1").click(function() {
        $("#box1").animate({
            width: "150px",
            height: "150px",
            left: "100px"
        }, 1000);
    });
    // Task 9
    $("#animate2").click(function() {
        $("#box2")
            .animate({left: "150px"}, 500)
            .animate({top: "100px"}, 500)
            .animate({width: "50px", height: "50px"}, 500)
            .animate({
                left: "0px",
                top: "0px",
                width: "100px",
                height: "100px"
            }, 500);
    });
    // Task 10
    $("#animate3").click(function() {
        $("#box3").animate({
            opacity: 0.3,
            width: "150px",
            height: "150px",
            left: "100px",
            top: "50px"
        }, 1000);
    });
});
