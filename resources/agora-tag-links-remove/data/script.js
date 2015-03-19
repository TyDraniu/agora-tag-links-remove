/*
 * Test page: http://lublin.gazeta.pl/lublin/1,48724,14504860,Test.html
 */
 
var anchors = document.getElementsByClassName("external_link");
//var n = anchors.length;
//window.console.log("Agora Bad Links" + n);
for(i=1;anchors.length > 0;i++) {
    try {
        for(j=0;j<anchors.length;j++) {
            anchors[j].outerHTML = anchors[j].innerHTML
        }
    } catch(e) {  
        window.console.error ("Error: " + e);
        }
} 