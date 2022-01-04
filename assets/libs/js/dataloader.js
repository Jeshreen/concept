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
        var lines = data.split('\n');
        for (var i = 0; i < lines.length; i++) {
            var row = document.createElement("tr");
            var rowContent = lines[i].split(",");
            for (var col = 0; col < rowContent.length; col++) {

                //create td element 
                var cellElement = document.createElement("td");
                //add a row element as a node for table
                var cellContent = document.createTextNode(rowContent[col]);
                cellElement.appendChild(cellContent);

                //append row child
                row.appendChild(cellElement);
            }
            //append table contents
            question2.appendChild(row); 
        }
    });
});

