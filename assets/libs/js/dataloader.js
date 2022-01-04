$(function () {
    //question 1
    jQuery.get('https://raw.githubusercontent.com/Jeshreen/concept/master/assets/data/q1-hadoop.txt', function (data) {
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
    jQuery.get('https://raw.githubusercontent.com/Jeshreen/concept/master/assets/data/q2-hive2.csv', function (data) {
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

    //question3
    jQuery.get('https://raw.githubusercontent.com/Jeshreen/concept/master/assets/data/q3-spark1.csv', function (data) {
        var lines = data.split('\n');

        var val = parseFloat(lines).toFixed(2) + "%";
        $("#question3").html(val)
    });

    //question 4
    const chart_generation = function () {
        jQuery.get('https://raw.githubusercontent.com/Jeshreen/concept/master/assets/data/q4-spark2.csv', function (data) {
            var lines = data.split('\n');
            monthly_arr = [];

            var selectedMonth = $('#month-dropdown :selected').val()

            for (var i = 0; i < lines.length; i++) {
                values = lines[i].split(',');
                daily_arr = { "month": values[0], "day": values[1], "count": values[2] };
                if (daily_arr["month"] == selectedMonth) {
                    monthly_arr.push(daily_arr)
                }
            }
            monthly_arr = monthly_arr.sort((a, b) => a.day - b.day);

            var days = [];
            var day_val = [];
            for (var i = 0; i < monthly_arr.length; i++) {
                days.push(monthly_arr[i]['day']);
                day_val.push(monthly_arr[i]['count']);
            }

            if ($('#chartjs_bar').length) {
                var ctx = document.getElementById("chartjs_bar");

                new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: days,
                        datasets: [{
                            label: "Delayed flights",
                            backgroundColor: "rgba(89, 105, 255,0.5)",
                            borderColor: "rgba(89, 105, 255,0.7)",
                            data: day_val
                        }]
                    }
                });
            }
        });
    }
    chart_generation();

    //trigger the on change method
    $('#month-dropdown').change(function () {
        chart_generation();
    });

    //extra 1
    jQuery.get('https://raw.githubusercontent.com/Jeshreen/concept/master/assets/data/e1-hive3.csv', function (data) {
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
            extra1.appendChild(row);
        }
    });

    //extra2
    var chart = c3.generate({
        bindto: "#c3chart_category",
        data: {
            columns: [
                ['AA', 725984],
                ['AS', 172521],
                ['B6', 267048],
                ['DL', 875881],
                ['EV', 571977],
                ['F9', 90836],
                ['HA', 76272],
                ['MQ', 294632],
                ['NK', 117379],
                ['OO', 588353],
                ['UA', 515723],
                ['US', 198715],
                ['VX', 61903],
                ['WN', 1261855],
            ],
            type: 'donut',

            onclick: function (d, i) { console.log("onclick", d, i); },
            onmouseover: function (d, i) { console.log("onmouseover", d, i); },
            onmouseout: function (d, i) { console.log("onmouseout", d, i); },

            colors: {
                AA: '#964059',
                AS: '#d96681',
                B6: '#a35f8c',
                DL: '#603860',
                EV: '#765497',
                F9: '#b895d1',
                HA: '#cbc0fa',
                MQ: '#5260ae',
                NK: '#95bef9',
                OO: '#a8c572',
                UA: '#495d28',
                US: '#fca034',
                VX: '#fca034',
                WN: '#d0671c',
            }
        },
        donut: {
            label: {
                show: false
            }
        },
    });

});

