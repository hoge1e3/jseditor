define(function (require, exports, module) {
    var TonyuC=require("TonyuC");
    var FS=require("FS");
    var JSEProject=require("JSEProject");
    var prj=new JSEProject({}, "jseditor");
    var tc=new TonyuC(prj);
    tc.parallel("compile");
});