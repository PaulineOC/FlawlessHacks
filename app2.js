// TO RUN: Copy and paste this script into the console of
// the Albert shopping cart page.


// Add the script to the head of the doc to run
var script = document.createElement('script')
var head = document.getElementsByTagName('head')[0]
head.appendChild(script)

// Get into iFrame
var iframe = document.getElementsByTagName("frame")
iframe = iframe[1] //wants to get the second iframe only

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

frames[1].document.body.appendChild(table);




	// var left = 100 + (i * 238)
	// var styles = "position: absolute; width:15%; height:75%; top:100; left: " + left + ";background-color:lightblue; border:1px solid black;"
	// var col = document.createElement('div')
	// col.setAttribute("z-index", "2")
	// col.setAttribute("style", styles)
	// frames[1].document.body.appendChild(col)
//     var j;
// for( j = 0; j < 41; j++){
// 	var top = 100 + (j * 10)
// 	var styles = "position: absolute; width:90%; height:1.875%; top: " + top + "; left: 100;background-color:transparent; border:1px solid black;"
// 	var row = document.createElement('div')
// 	row.setAttribute("z-index", "3")
// 	row.setAttribute("style", styles)
// 	frames[1].document.body.appendChild(row)
// }






// add rows



// this was the stupid white box
//var cal_div2 = document.createElement('div')
//cal_div2.setAttribute("z-index", "2")
//cal_div2.setAttribute("style", "position:absolute; width:80%; //height:75%; top:100; left:175; background-color:white;")
//frames[1].document.body.appendChild(cal_div2)

// var body = document.getElementsByTagName('body')
// var body = iframe.getElementsByTagName('body')
// document.appendChild(cal_div)
