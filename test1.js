
// "ARTH-UA 450-001
//  (8048)" —————————>   TuTh      3:30PM    -    4:45PM"
//NEED TO DO PER  CLASS object

var getCellsToFill = function(time) {
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
	} else {//ONLY 1 day:
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
			var start_cell = i * 6;
		}
	}

	for (var i = 0; i < all_times.length; i++) {
		if (all_times[i] === end_time) {
			var end_cell = i * 6;
		}
	}



	//Calculate difference

	var start_index = 0
	var end_index = 0
	var block_of_time=0
	var count2 =0

	for(j=0;j<all_times.length;j++){

		if(all_times[j] == start_time ){
			start_index = count2
			break;
		} else{
			count2++;
		}
	}

	var count3=0;
	for(j=0;j<all_times.length;j++){

		if(all_times[j] == end_time ){
			end_index=count3
			break;
		}

		else{
			count3++
		}
	}

	  var block_of_time = (end_index - start_index)


	// //to actually color?
	for(int u=0;u<block_of_time;u++) {}

	}

}
