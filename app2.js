// TO RUN: Copy and paste this script into the console of
// the Albert shopping cart page.


// Add the script to the head of the doc to run
// Note: We should write the entire script (i.e. everything
// past these 3 lines) into this "script" element, and then
// all we have to do in the console is put the script in the
// head to make it run.
var script = document.createElement('script');
var head = document.getElementsByTagName('head')[0];
head.appendChild(script);

// Get into iFrame
var iframe = document.getElementsByTagName("frame");
iframe = iframe[1];

// Get class names
var name_1 = iframe.contentWindow.document.getElementById("P_CLASS_NAME$0").text
var name_2 = iframe.contentWindow.document.getElementById("P_CLASS_NAME$1").text
var name_3 = iframe.contentWindow.document.getElementById("P_CLASS_NAME$2").text
var name_4 = iframe.contentWindow.document.getElementById("P_CLASS_NAME$3").text

// Get class times
var time_1 = iframe.contentWindow.document.getElementById("DERIVED_REGFRM1_SSR_MTG_SCHED_LONG$0").textContent
var time_2 = iframe.contentWindow.document.getElementById("DERIVED_REGFRM1_SSR_MTG_SCHED_LONG$1").textContent
var time_3 = iframe.contentWindow.document.getElementById("DERIVED_REGFRM1_SSR_MTG_SCHED_LONG$2").textContent
var time_4 = iframe.contentWindow.document.getElementById("DERIVED_REGFRM1_SSR_MTG_SCHED_LONG$3").textContent

// Convert times to cells
var cellsToColor1 = getCellsToFill(time_1);
var cellsToColor4 = getCellsToFill(time_4);

// Add a modal div to "grey out" background
var cal_div = document.createElement('div')
cal_div.setAttribute("z-index", "1")
cal_div.setAttribute("style", "position:absolute; width:100%; height:200%; top:0; left:0; background-color:grey; opacity: 0.5;")
frames[1].document.body.appendChild(cal_div)

// Create a table
var table = document.createElement('table');
table.setAttribute("id", "table");
table.setAttribute("border", "2");
table.setAttribute("z-index", "2");
table.setAttribute("style", "position:absolute; left:50; width:90%; height:90%; top:0; left:0; background-color:white");

// Create list of cells
var cells = [];
for (var i = 0; i < 41*6; i++) {
    var cell= document.createElement('td');
    cell.innerHTML = i;
    cell.setAttribute("id", String(i));
    cells.push(cell);
}
cells = cells.reverse()

// Create list of rows
var rows = [];
for (var j = 0; j < 41; j++) {
    var row = document.createElement('tr');
    rows.push(row);
}

// Append cells to rows
for (var i = 0; i < rows.length; i++) {
    for (var j = 0; j < 6; j++) {
        rows[i].appendChild(cells.pop());
    }
}

// Append rows to table
for (var i = 0; i < rows.length; i++) {
    table.appendChild(rows[i]);
}

// Append table to the iframe
frames[1].document.body.appendChild(table);

// Color the cells that are taken. Note: cellsToColor1 and 4 are
// defined up near the top. In my demo, classes 1 and 4 were the
// classes with only 1-day classes, i.e. I didn't have to account for
// Mo/We or Tu/Th coloring.
for (var i= 0; i < cellsToColor1.length; i++) {
    var cell = iframe.contentWindow.document.getElementById(String(cellsToColor1[i]));
    cell.setAttribute("style", "background-color:pink");
}
for (var i= 0; i < cellsToColor4.length; i++) {
    var cell = iframe.contentWindow.document.getElementById(String(cellsToColor4[i]));
    cell.setAttribute("style", "background-color:pink");
}

// This is the broken code for filling in the first column with time
// names.
// for (var j = 0; j < all_times.length; j++) {
//     for (var i = 0; i < 245; i+=6) {
//         var all_times = [
//         "8:00AM","8:15AM","8:30AM","8:45AM",
//         "9:00AM","9:15AM","9:30AM","9:45AM",
//         "10:00AM","10:15AM","10:30","10:45AM",
//         "11:00AM","11:15AM","11:30","11:45",
//         "12:00PM","12:15PM","12:30","12:45",
//         "1:00PM","1:15PM","1:30PM","1:45PM",
//         "2:00PM","2:15PM","2:30PM","2:45PM",
//         "3:00PM","3:15PM","3:30PM","3:45PM",
//         "4:00PM","4:15PM","4:30PM","4:45PM",
//         "5:00PM","5:15PM","5:30PM","5:45PM",
//         "6:00PM" ]
//         var cell = iframe.contentWindow.document.getElementById(String(i));
//         cell.innerHTML = all_times[j]
//     }
// }

function getCellsToFill(time) {
    var time_chunk =  time.split(" ");
    var day  = time_chunk[0]
    var cellsToColor = []

    ///WORK WITH DAYS:
    if(day == "MoWe"){
        var col1 = 1
        var col2 = 3
    } else if (day == "TuTh"){
        var col1 = 2
        var col2 = 4
    } else if (day == "WeFr"){
        var col1 = 3
        var col2 = 5
    } else { //ONLY 1 day:
        if(day == "Mo"){
            var single_col = 1
        }
        else if(day == "Tu"){
            var single_col = 2
        }
        else if(day == "We"){
            var single_col = 3
        }
        else if(day == "Th"){
            var single_col = 4
        }
        else if(day == "Fr"){
            var single_col = 5
        }
    }

    ///WORKING WITH TIMES
    var start_time  =  time_chunk[1]
    var end_time  =  time_chunk[3]

    //CHECK INDICES IN ARRAYLIST

    var all_times = [
    "8:00AM","8:15AM","8:30AM","8:45AM",
    "9:00AM","9:15AM","9:30AM","9:45AM",
    "10:00AM","10:15AM","10:30","10:45AM",
    "11:00AM","11:15AM","11:30","11:45",
    "12:00PM","12:15PM","12:30","12:45",
    "1:00PM","1:15PM","1:30PM","1:45PM",
    "2:00PM","2:15PM","2:30PM","2:45PM",
    "3:00PM","3:15PM","3:30PM","3:45PM",
    "4:00PM","4:15PM","4:30PM","4:45PM",
    "5:00PM","5:15PM","5:30PM","5:45PM",
    "6:00PM" ]


    for (var i = 0; i < all_times.length; i++) {
        if (all_times[i] === start_time) {
            var start_cell = i * 6 + single_col;
            cellsToColor.push(start_cell);
        }
    }

    for (var i = 0; i < all_times.length; i++) {
        if (all_times[i] === end_time) {
            var end_cell = i * 6 + single_col;
            cellsToColor.push(end_cell);
        }
    }
    var start_cell = cellsToColor[0];
    var end_cell = cellsToColor[1];
    console.log(start_cell);
    console.log(end_cell);

    for (var i = start_cell; i < end_cell; i+=6) {
        console.log(i);
        cellsToColor.push(i);
    }

    console.log(cellsToColor);
    return cellsToColor;
}