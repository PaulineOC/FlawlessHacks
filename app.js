
// Add the script to the head of the doc to run
var script = document.createElement('script')
var head = document.getElementsbyTagName('head')[0]
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
