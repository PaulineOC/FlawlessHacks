

var script = document.createElement('script')
var head = document.getElementsbyTagName('head')[0]
head.appendChild(script)
var iframe = document.getElementsByTagName("frame")
iframe = iframe[1] //wants to get the second iframe only
//var tableRows = iframe.contentWindow.getElementByTagName("tr") // returns a list []
// tableRows.forEach(function, accumulator
var classname = iframe.contentWindow.getElementById("P_CLASS_NAME$#")//gets element of Class: p_CLASS --> need to add a number for how
var classtxt = classname.text