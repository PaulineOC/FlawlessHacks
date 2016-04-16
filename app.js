
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

// Make button to run our script
// var validate_button = iframe.contentWindow.document.getElementById("DERIVED_REGFRM1_SSR_VIEW_STAT_RPT")
// var calendar_button = document.createElement("");

// Add a modal div
var cal_div = document.createElement('div')
cal_div.setAttribute("z-index", "1")
cal_div.setAttribute("style", "position:absolute; width:100%; height:100%; top:0; left:0; background-color:grey;")
frames[1].document.body.appendChild(cal_div)
// var body = document.getElementsByTagName('body')
// var body = iframe.getElementsByTagName('body')
// document.appendChild(cal_div)
