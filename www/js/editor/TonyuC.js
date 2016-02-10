define(function (require){
    var Tonyu=require("Tonyu");
    var TPRC=require("ProjectCompiler");
    var TonyuC={};
    TonyuC.compile=function compile(dir) {
        var prj=TPRC(dir);
        prj.setModulePaths(reqConf.paths);
        return prj.compile();
    };
    return TonyuC;
});