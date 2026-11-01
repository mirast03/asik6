$(document).ready(function() {
    console.log("jQuery is ready!");

    $("#changeBtn").click(function() {
        $("#title").text("New Title");
        $(".description").html("<b>New Description</b>");
        $("p").css("color", "blue");
    });
});
