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
    var Util=require("Util");
    var TonyuC=require("TonyuC");
    var JSONConf=require("JSONConf");
    var Test=require("Test");
    var FileMenu=require("FileMenu");
    //require("tonyuCompiled");
    
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
            //{label:"新規ツール...",id:"newTool"}
            {label:"TonyuC", id:"tonyuC",action:tonyuC},
            {label:"test", id:"test",action:test}
        ]},
        {label:"ウィンドウ",sub:[
            {label:"新規ウィンドウ",id:"newWindow",action:newWindow},
            {label:"ブックマーク...",id:"bookmark",action:newWindow}
        ]},
        /*{label:"実行",sub:[
              {label:"実行(F9)",id:"runMenu",action:run},
        ]},*/
        {label:"設定",sub:[
              {label:"エディタの文字の大きさ",
                id:"textsize",action:textSize}
        ]}
    ]);
    function test() {
        new Test().foo();
    }
    var fileMenu;
    var es;
    var cwd=FS.get(Util.getQueryString("dir") || process.cwd()  );
    var etc=FS.get(process.cwd()).rel(".jsetc/");
    var desktopEnv=new JSONConf(etc.rel("desktop.json"));
    desktopEnv.load();
    var fl=new FileList($("#fileItemList"),{
        open:function (f) {
            es.save();
            es.open(f);
        }
    });
    function tonyuC() {
        return TonyuC.compile(FS.get(process.cwd()).rel("www/js")).then(function (){
            alert("Compiled");
        }).fail(function (e) {
            alert("Compile fail"+e);
            console.log(e);
        });
    }
    function newWindow() {
        var genID=""+Math.random();
        window.open(location.href,genID,
        'width=800,height=400,menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes');
    }
    function find() {
        return finder.find();
    }
    function newFile() {
        return fileMenu.parallel("newFile");
        
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
    }
    function textSize() {
        UIDiag.prompt(
            "エディタの文字の大きさ", 
            desktopEnv.data.editorFontSize||12
        ).then(function (s) {
            desktopEnv.data.editorFontSize=parseInt(s);
            if (es) es.setFontSize(desktopEnv.data.editorFontSize||12);
            return desktopEnv.save();
        });
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
        es=new EditorSet( $("#progs"), $("#fileLabel"), {
            height:editorH, 
            fontSize:( desktopEnv.data && desktopEnv.data.editorFontSize || 12 )
        });
        finder=new Finder(es);
        if (typeof SplashScreen!="undefined") SplashScreen.hide();
        fileMenu=new FileMenu({editorSet:es,fileList:fl});
        return fl.open(cwd);
    });

});