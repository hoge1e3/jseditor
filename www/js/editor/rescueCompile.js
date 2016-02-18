define(function (require, exports, module) {
    var TonyuC=require("TonyuC");
    var FS=require("FS");
    var tc=new TonyuC;
    tc.parallel("compile",FS.get(process.cwd()).rel("www/js/"));
});