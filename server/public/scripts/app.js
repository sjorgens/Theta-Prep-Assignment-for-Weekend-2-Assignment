$(document).ready(function(){
    console.log("Meow! (Really would you have expected something else from me?");

    $(".clicky-button").on('click', clickyButton);


});

function clickyButton(){
    var data = {};

    $.ajax({
        type: "GET",
        url: "/data",
        success: function(gremlins){
            data = gremlins;
            logData(data);
        }
    });


}

function logData(data){
    for (var i = 0; i < data.people.length; i++){
        $(".container").append("<p>" + data.people[i] + "</p>");
    }

    console.log(data);
}

