// Import the page-mod API
var pageMod = require("sdk/page-mod");

// js as separate files supplied in "data" directory. 
var data = require("sdk/self").data;

pageMod.PageMod({
    include: ["*.sport.pl", "*.gazeta.pl", "*.gazeta.biz", "*.tokfm.pl", "*.gazetapraca.pl", "*.moto.pl", "*.wyborcza.pl", "*.wyborcza.biz", "*.wysokieobcasy.pl", "*.polygamia.pl", "*.deser.pl"],
    contentScriptFile: data.url("script.js"),
	contentScriptWhen: "ready"
});
