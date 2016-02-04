define(function (require, exports, module) {
    var FS=require("FS");
    var Menu=require("Menu");
    var C=require("Columns");
    var UI=require("UI");
    var Finder=require("Finder");
    var UIDiag=require("UIDiag");
    var EditorSet=require("EditorSet");
    var KeyEventChecker=require("KeyEventChecker");
    var FileList=require("FileList");
    
    C.make(
        ["div",{id:"fileViewer","class":"col-xs-3"},
            ["div",{id:"fileItemList"}]
        ],
        ["div",{id:"mainArea","class":"col-xs-9"},
            ["div",{id:"fileLabel"},"."],
            ["div",{id:"progs"}]
        ]
    );
    var finder;
    Menu.make("JS Editor", [
        {label:"Home",href:"index.html"},
        {label:"ファイル",sub:[
            {label:"新規",id:"newFile",action:newFile},
            {label:"名前変更",id:"mvFile"},
            {label:"上書き保存",id:"saveFile",action:save,key:"ctrl+s"},
            {label:"コピー",id:"cpFile"},
            {label:"削除", id:"rmFile"}
        ]},
        {label:"ツール",sub:[
            //{label:"検索",id:"find",action:find,key:"ctrl+f"},
            {label:"新規ツール...",id:"newTool"}
        ]},

        /*{label:"実行",sub:[
              {label:"実行(F9)",id:"runMenu",action:run},
        ]},*/
        {label:"設定",sub:[
              {label:"エディタの文字の大きさ",
                id:"textsize",action:textSize}
        ]}
    ]);
    var es;
    var cwd=FS.get(process.cwd());
    var fl=new FileList($("#fileItemList"),{
        open:function (f) {
            es.save();
            es.open(f);
        }
    });
    function find() {
        return finder.find();
    }
    function newFile() {
        var dir=fl.curDir;
        if (!dir) return;
        UIDiag.prompt("ファイル名").then(function (n) {
            return dir.rel(n).text("//new file!");
        }).then(function () {
            return fl.open(dir);
        });
    }
    function textSize() {
    }
    function save(e) {
        es.save();
    }
    //KeyEventChecker.down(document,"ctrl+s",);
    var screenH,editorH;
    function onResize() {
        var h=$(window).height()-$("#navBar").height()-$("#tabTop").height();
        h-=20;
        screenH=h;
        editorH=screenH-$("#fileLabel").height();
        if (es) es.options.height=editorH;
        $("#progs pre").css("height",editorH+"px");
        console.log("canvas size",h, editorH);
        $("#fileItemList").height(h);
    }
    onResize();
    $(window).resize(onResize);
    requirejs(["ace"],function (){
        console.log("ace loaded:",ace);
        es=new EditorSet( $("#progs"), $("#fileLabel"), {height:editorH});
        finder=new Finder(es);
        if (typeof SplashScreen!="undefined") SplashScreen.hide();
        return fl.open(cwd.rel("www/js/editor"));
    });

});