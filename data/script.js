/*
 * Test page: http://lublin.gazeta.pl/lublin/1,48724,14504860,Test.html
 */

var anchors = document.getElementsByClassName("external_link");
var n = anchors.length;

try {
	for (var i = 0; i < n; i++) {
		var t = document.createTextNode(anchors[0].textContent);
		anchors[0].parentNode.replaceChild(t, anchors[0]);
	}
}
catch(e) {  
		console.exception(e.message);
	}