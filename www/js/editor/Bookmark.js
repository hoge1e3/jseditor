define(function (require) {
    var UI=require("UI");
    var JSONConf=require("JSONConf");
    var Bookmark=function (f) {
        this.conf=new JSONConf(f);
        this.conf.load();
    };
    
});