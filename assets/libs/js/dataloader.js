$(function() {
   

    //question 1
    jQuery.get('https://raw.githubusercontent.com/Jeshreen/concept/master/assets/data/q1-hadoop.txt', function(data) {
        var lines = data.split('\n');
       
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

    //question 2
    jQuery.get('https://raw.githubusercontent.com/Jeshreen/concept/master/assets/data/q2-hive2.csv',function (data) {
        console.log(data);
        $.each(data, function(index, row){
            html += '<tr>';
            $.each(row, function(index, colData){
                html += '<td>';
                html += colData;
                html += '</td>';
            });
            html += '</tr>';
        });
        console.log(html);
        $("#question2").append(html);
    });
});

