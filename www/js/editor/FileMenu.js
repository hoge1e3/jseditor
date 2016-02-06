define(function (require) {
    var UIDiag=require("UIDiag");
    var FileMenu=function (env) {
        this.es=env.editorSet;
        this.fl=env.fileList;
    };
    p=FileMenu.prototype;
    p.newFile=function () {
        var fl=this.fl;
        var es=this.es;
        var dir=fl.curDir;
        if (!dir) return;
        var nf;
        UIDiag.prompt("ファイル名").then(function (n) {
            nf=dir.rel(n);
            if (nf.isDir()) {
                dir=nf;
                return nf.mkdir();
            } else {
                return nf.text("");
            }
        }).then(function () {
            return fl.open(dir);
        }).then(function () {
            if (!nf.isDir()) {
                return es.open(nf);
            }
        });
    };
});