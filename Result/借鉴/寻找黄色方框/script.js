$(document).ready(function () {
    var number = Math.floor((Math.random() * 100) + 1);
    var wondefulBox = "box" + number;
    var number_of_clicks = 0;
    var found = "nope";
    $("div").click(function () {
        number_of_clicks++;
        $("#count").html("number of clicks = " + number_of_clicks);
        if ($(this).attr("id") == wondefulBox) {
            $(this).css("background-color", "yellow");
            found = "yes";
        } else {
            $(this).css("background-color", "black");
        }
        if ((found=="yes") && (number_of_clicks <= 50)) {
            $("#result").html("You Win!!!")
        }
        if ((found=="nope") && (number_of_clicks >= 50)) {
            $("#result").html("You Lose")
        }
    });
});