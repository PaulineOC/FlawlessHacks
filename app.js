
// Add the script to the head of the doc to run
var script = document.createElement('script')
var head = document.getElementsbyTagName('head')[0]
head.appendChild(script)

// Get course names
var iframe = document.getElementsByTagName("frame")
iframe = iframe[1] //wants to get the second iframe only
var class_name_1 = iframe.contentWindow.document.getElementById("P_CLASS_NAME$0").text
var class_name_2 = iframe.contentWindow.document.getElementById("P_CLASS_NAME$1").text
var class_name_3 = iframe.contentWindow.document.getElementById("P_CLASS_NAME$2").text
var class_name_4 = iframe.contentWindow.document.getElementById("P_CLASS_NAME$3").text