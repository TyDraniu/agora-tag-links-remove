/*
 * Test page: http://lublin.gazeta.pl/lublin/1,48724,14504860,Test.html
 */
 
var anchors = document.getElementsByClassName("external_link");
var n = anchors.length;
//console.log("Agora Bad Links " + n);
try {
	for(i = 0; i < n; i++) {
        //console.log(anchors[0].outerHTML);
		anchors[0].outerHTML = anchors[0].innerHTML;
    } 
} 
catch(e) {  
        console.exception(e.message);
    }