// Import the page-mod API
var pageMod = require("sdk/page-mod");
// js as separate files supplied in "data" directory. 
// In this case files are specified by a URL typically constructed using the url() method of the self module's data object:
var data = require("sdk/self").data;


pageMod.PageMod({
    include: ["*.sport.pl", "*.gazeta.pl", "*.gazeta.biz", "*.tokfm.pl", "*.gazetapraca.pl", "*.moto.pl", "*.wyborcza.pl", "*.wyborcza.biz", "*.wysokieobcasy.pl"],
    contentScriptFile: data.url("script.js")
});