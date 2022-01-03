$(function() {
    $("#delayed-flights").html("500000");
    debugger;

    //question 1
    jQuery.get('data/q1-hadoop.txt', function(data) {
        alert(data);
        //process text file line by line
        // $('#div').html(data.replace('n',''));
    });
});

