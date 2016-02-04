define(function (require) {
    var UIDiag=require("UIDiag");
    Finder=function (editorSet) {
        this.es=editorSet;
        
    };
    p=Finder.prototype;
    p.find=function () {
        var es=this.es;
        UIDiag.prompt("検索語").then(function (w) {
            var inf=es.getCurrentEditorInfo();
            inf.editor.find(w,{});
        });
    };
    return Finder;
});