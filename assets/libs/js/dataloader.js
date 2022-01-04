$(function() {
   

    //question 1
    jQuery.get('https://raw.githubusercontent.com/Jeshreen/concept/master/assets/data/q1-hadoop.txt', function(data) {
        console.log(data);
        var lines = data.split('\n');
        console.log("lines",lines);
       
        //Delayed flights
        var delay = lines[1].split('\t');
        $("#delayed-flights").html(delay[1]);
       
        //Cancelled flights
        var cancelled = lines[0].split('\t');
        $("#cancelled-flights").html(cancelled[1]);
        
        //ontime flights
        var ontime = lines[2].split('\t');
        $("#ontime-flights").html(ontime[1]);
    });
});

