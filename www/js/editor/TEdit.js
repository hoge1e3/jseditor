define(function (require) {
  var Tonyu=require('Tonyu');
  var Columns=require('Columns');
  var Menu=require('Menu');
  var FS=require('FS');
  var Util=require('Util');
  var JSONConf=require('JSONConf');
  var FileList=require('FileList');
  var ace=require('ace');
  var EditorSet=require('EditorSet');
  var Finder=require('Finder');
  var Base=require('Base');
  return Tonyu.klass.define({
    fullName: 'jseditor.TEdit',
    shortName: 'TEdit',
    namespace: 'jseditor',
    superclass: Tonyu.classes.jseditor.Base,
    includes: [],
    methods: {
      main :function _trc_TEdit_main() {
        "use strict";
        var _this=this;
        
        //$LASTPOS=6000111;//jseditor.TEdit:111
        Columns.make(["div",{id: "fileViewer","class": "col-xs-3"},["div",{id: "fileItemList"}]],["div",{id: "mainArea","class": "col-xs-9"},["div",{id: "fileLabel"},"."],["div",{id: "progs"}]]);
        
        //$LASTPOS=6000362;//jseditor.TEdit:362
        Menu.make("JS Editor",[{label: "Home",href: "index.html"},{label: "ファイル",sub: [{label: "新規",id: "newFile",action: Tonyu.bindFunc(_this,_this.newFile)},{label: "名前変更",id: "mvFile",action: Tonyu.bindFunc(_this,_this.mvFile)},{label: "上書き保存",id: "saveFile",action: Tonyu.bindFunc(_this,_this.save),key: "ctrl+s"},{label: "コピー",id: "cpFile"},{label: "削除",id: "rmFile",action: Tonyu.bindFunc(_this,_this.rmFile)}]},{label: "ツール",sub: [{label: "TonyuC",id: "tonyuC",action: Tonyu.bindFunc(_this,_this.tonyuC),key: "f9"},{label: "genReqConf",id: "genReqConf",action: Tonyu.bindFunc(_this,_this.genReqConf)}]},{label: "ウィンドウ",sub: [{label: "新規ウィンドウ",id: "newWindow",action: Tonyu.bindFunc(_this,_this.newWindow)},{label: "ブックマーク...",id: "bookmark",action: Tonyu.bindFunc(_this,_this.openBookmark)}]},{label: "設定",sub: [{label: "エディタの文字の大きさ",id: "textsize",action: Tonyu.bindFunc(_this,_this.textSize)}]}]);
        
        
        //$LASTPOS=6001364;//jseditor.TEdit:1364
        _this.cwd = FS.get(Util.getQueryString("dir")||process.cwd().replace(/\\/g,"/"));
        
        //$LASTPOS=6001447;//jseditor.TEdit:1447
        _this.projectTop = FS.get(process.cwd().replace(/\\/g,"/")).rel("www/");
        
        //$LASTPOS=6001519;//jseditor.TEdit:1519
        _this.etc = FS.get(process.cwd()).rel(".jsetc/");
        
        //$LASTPOS=6001566;//jseditor.TEdit:1566
        _this.desktopEnv = new JSONConf(_this.etc.rel("desktop.json"));
        
        //$LASTPOS=6001621;//jseditor.TEdit:1621
        Tonyu.globals.$reqConfBuilder=new Tonyu.classes.jseditor.ReqConfBuilder({output: _this.projectTop.rel("js/reqConfTest.js"),htmlDir: _this.projectTop});
        //$LASTPOS=6001735;//jseditor.TEdit:1735
        _this.desktopEnv.load();
        //$LASTPOS=6001755;//jseditor.TEdit:1755
        _this.fl = new FileList($("#fileItemList"),{open: (function anonymous_1807(f) {
          
          //$LASTPOS=6001831;//jseditor.TEdit:1831
          console.log("opening",f);
          //$LASTPOS=6001866;//jseditor.TEdit:1866
          _this.es.save();
          //$LASTPOS=6001886;//jseditor.TEdit:1886
          _this.es.open(f);
        })});
        
        //$LASTPOS=6001910;//jseditor.TEdit:1910
        _this.bookmark = new Tonyu.classes.jseditor.Bookmark({file: _this.etc.rel("bookmark.json"),fileList: _this.fl});
        
        
        //$LASTPOS=6003316;//jseditor.TEdit:3316
        _this.onResize();
        //$LASTPOS=6003329;//jseditor.TEdit:3329
        $(window).resize(Tonyu.bindFunc(_this,_this.onResize));
        //$LASTPOS=6003358;//jseditor.TEdit:3358
        requirejs(["ace"],(function anonymous_3376() {
          
          //$LASTPOS=6003394;//jseditor.TEdit:3394
          console.log("ace loaded:",ace);
          //$LASTPOS=6003431;//jseditor.TEdit:3431
          _this.es=new EditorSet($("#progs"),$("#fileLabel"),{height: _this.editorH,fontSize: (_this.desktopEnv.data&&_this.desktopEnv.data.editorFontSize||12)});
          //$LASTPOS=6003598;//jseditor.TEdit:3598
          _this.finder=new Finder(_this.es);
          //$LASTPOS=6003626;//jseditor.TEdit:3626
          if (typeof  _this.SplashScreen!="undefined") {
            //$LASTPOS=6003664;//jseditor.TEdit:3664
            _this.SplashScreen.hide();
          }
          //$LASTPOS=6003690;//jseditor.TEdit:3690
          _this.fileMenu=new Tonyu.classes.jseditor.FileMenu({editorSet: _this.es,fileList: _this.fl});
          return _this.fl.open(_this.cwd);
        }));
      },
      fiber$main :function _trc_TEdit_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=6000111;//jseditor.TEdit:111
        Columns.make(["div",{id: "fileViewer","class": "col-xs-3"},["div",{id: "fileItemList"}]],["div",{id: "mainArea","class": "col-xs-9"},["div",{id: "fileLabel"},"."],["div",{id: "progs"}]]);
        
        //$LASTPOS=6000362;//jseditor.TEdit:362
        Menu.make("JS Editor",[{label: "Home",href: "index.html"},{label: "ファイル",sub: [{label: "新規",id: "newFile",action: Tonyu.bindFunc(_this,_this.newFile)},{label: "名前変更",id: "mvFile",action: Tonyu.bindFunc(_this,_this.mvFile)},{label: "上書き保存",id: "saveFile",action: Tonyu.bindFunc(_this,_this.save),key: "ctrl+s"},{label: "コピー",id: "cpFile"},{label: "削除",id: "rmFile",action: Tonyu.bindFunc(_this,_this.rmFile)}]},{label: "ツール",sub: [{label: "TonyuC",id: "tonyuC",action: Tonyu.bindFunc(_this,_this.tonyuC),key: "f9"},{label: "genReqConf",id: "genReqConf",action: Tonyu.bindFunc(_this,_this.genReqConf)}]},{label: "ウィンドウ",sub: [{label: "新規ウィンドウ",id: "newWindow",action: Tonyu.bindFunc(_this,_this.newWindow)},{label: "ブックマーク...",id: "bookmark",action: Tonyu.bindFunc(_this,_this.openBookmark)}]},{label: "設定",sub: [{label: "エディタの文字の大きさ",id: "textsize",action: Tonyu.bindFunc(_this,_this.textSize)}]}]);
        
        
        //$LASTPOS=6001364;//jseditor.TEdit:1364
        _this.cwd = FS.get(Util.getQueryString("dir")||process.cwd().replace(/\\/g,"/"));
        
        //$LASTPOS=6001447;//jseditor.TEdit:1447
        _this.projectTop = FS.get(process.cwd().replace(/\\/g,"/")).rel("www/");
        
        //$LASTPOS=6001519;//jseditor.TEdit:1519
        _this.etc = FS.get(process.cwd()).rel(".jsetc/");
        
        //$LASTPOS=6001566;//jseditor.TEdit:1566
        _this.desktopEnv = new JSONConf(_this.etc.rel("desktop.json"));
        
        //$LASTPOS=6001621;//jseditor.TEdit:1621
        Tonyu.globals.$reqConfBuilder=new Tonyu.classes.jseditor.ReqConfBuilder({output: _this.projectTop.rel("js/reqConfTest.js"),htmlDir: _this.projectTop});
        //$LASTPOS=6001735;//jseditor.TEdit:1735
        _this.desktopEnv.load();
        //$LASTPOS=6001755;//jseditor.TEdit:1755
        _this.fl = new FileList($("#fileItemList"),{open: (function anonymous_1807(f) {
          
          //$LASTPOS=6001831;//jseditor.TEdit:1831
          console.log("opening",f);
          //$LASTPOS=6001866;//jseditor.TEdit:1866
          _this.es.save();
          //$LASTPOS=6001886;//jseditor.TEdit:1886
          _this.es.open(f);
        })});
        
        //$LASTPOS=6001910;//jseditor.TEdit:1910
        _this.bookmark = new Tonyu.classes.jseditor.Bookmark({file: _this.etc.rel("bookmark.json"),fileList: _this.fl});
        
        
        
        _thread.enter(function _trc_TEdit_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=6003316;//jseditor.TEdit:3316
              _this.fiber$onResize(_thread);
              __pc=1;return;
            case 1:
              
              //$LASTPOS=6003329;//jseditor.TEdit:3329
              $(window).resize(Tonyu.bindFunc(_this,_this.onResize));
              //$LASTPOS=6003358;//jseditor.TEdit:3358
              requirejs(["ace"],(function anonymous_3376() {
                
                //$LASTPOS=6003394;//jseditor.TEdit:3394
                console.log("ace loaded:",ace);
                //$LASTPOS=6003431;//jseditor.TEdit:3431
                _this.es=new EditorSet($("#progs"),$("#fileLabel"),{height: _this.editorH,fontSize: (_this.desktopEnv.data&&_this.desktopEnv.data.editorFontSize||12)});
                //$LASTPOS=6003598;//jseditor.TEdit:3598
                _this.finder=new Finder(_this.es);
                //$LASTPOS=6003626;//jseditor.TEdit:3626
                if (typeof  _this.SplashScreen!="undefined") {
                  //$LASTPOS=6003664;//jseditor.TEdit:3664
                  _this.SplashScreen.hide();
                }
                //$LASTPOS=6003690;//jseditor.TEdit:3690
                _this.fileMenu=new Tonyu.classes.jseditor.FileMenu({editorSet: _this.es,fileList: _this.fl});
                return _this.fl.open(_this.cwd);
              }));
              _thread.exit(_this);return;
            }
          }
        });
      },
      genReqConf :function _trc_TEdit_genReqConf() {
        "use strict";
        var _this=this;
        
        //$LASTPOS=6002024;//jseditor.TEdit:2024
        Tonyu.globals.$reqConfBuilder.build();
      },
      fiber$genReqConf :function _trc_TEdit_f_genReqConf(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=6002024;//jseditor.TEdit:2024
        Tonyu.globals.$reqConfBuilder.build();
        
        _thread.retVal=_this;return;
      },
      tonyuC :function _trc_TEdit_tonyuC() {
        "use strict";
        var _this=this;
        var tc;
        
        //$LASTPOS=6002078;//jseditor.TEdit:2078
        tc = new Tonyu.classes.jseditor.TonyuC;
        
        //$LASTPOS=6002102;//jseditor.TEdit:2102
        tc.parallel("compile",_this.projectTop.rel("js/"));
      },
      fiber$tonyuC :function _trc_TEdit_f_tonyuC(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var tc;
        
        //$LASTPOS=6002078;//jseditor.TEdit:2078
        tc = new Tonyu.classes.jseditor.TonyuC;
        
        //$LASTPOS=6002102;//jseditor.TEdit:2102
        tc.parallel("compile",_this.projectTop.rel("js/"));
        
        _thread.retVal=_this;return;
      },
      openBookmark :function _trc_TEdit_openBookmark() {
        "use strict";
        var _this=this;
        
        //$LASTPOS=6002183;//jseditor.TEdit:2183
        _this.bookmark.open();
      },
      fiber$openBookmark :function _trc_TEdit_f_openBookmark(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=6002183;//jseditor.TEdit:2183
        _this.bookmark.open();
        
        _thread.retVal=_this;return;
      },
      newWindow :function _trc_TEdit_newWindow() {
        "use strict";
        var _this=this;
        var genID;
        
        //$LASTPOS=6002232;//jseditor.TEdit:2232
        genID = ""+Math.random();
        
        //$LASTPOS=6002265;//jseditor.TEdit:2265
        window.open(_this.location.href,genID,'width=800,height=400,menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes');
      },
      fiber$newWindow :function _trc_TEdit_f_newWindow(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var genID;
        
        //$LASTPOS=6002232;//jseditor.TEdit:2232
        genID = ""+Math.random();
        
        //$LASTPOS=6002265;//jseditor.TEdit:2265
        window.open(_this.location.href,genID,'width=800,height=400,menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes');
        
        _thread.retVal=_this;return;
      },
      find :function _trc_TEdit_find() {
        "use strict";
        var _this=this;
        
        return _this.finder.find();
      },
      fiber$find :function _trc_TEdit_f_find(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        _thread.retVal=_this.finder.find();return;
        
        
        _thread.retVal=_this;return;
      },
      mvFile :function _trc_TEdit_mvFile() {
        "use strict";
        var _this=this;
        
        return _this.fileMenu.parallel("rename");
      },
      fiber$mvFile :function _trc_TEdit_f_mvFile(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        _thread.retVal=_this.fileMenu.parallel("rename");return;
        
        
        _thread.retVal=_this;return;
      },
      rmFile :function _trc_TEdit_rmFile() {
        "use strict";
        var _this=this;
        
        return _this.fileMenu.parallel("remove");
      },
      fiber$rmFile :function _trc_TEdit_f_rmFile(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        _thread.retVal=_this.fileMenu.parallel("remove");return;
        
        
        _thread.retVal=_this;return;
      },
      newFile :function _trc_TEdit_newFile() {
        "use strict";
        var _this=this;
        
        return _this.fileMenu.parallel("create");
      },
      fiber$newFile :function _trc_TEdit_f_newFile(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        _thread.retVal=_this.fileMenu.parallel("create");return;
        
        
        _thread.retVal=_this;return;
      },
      textSize :function _trc_TEdit_textSize() {
        "use strict";
        var _this=this;
        var s;
        
        //$LASTPOS=6002669;//jseditor.TEdit:2669
        s = _this.prompt("エディタの文字の大きさ",_this.desktopEnv.data.editorFontSize||12);
        
        //$LASTPOS=6002767;//jseditor.TEdit:2767
        _this.desktopEnv.data.editorFontSize=_this.parseInt(s);
        //$LASTPOS=6002816;//jseditor.TEdit:2816
        if (_this.es) {
          //$LASTPOS=6002824;//jseditor.TEdit:2824
          _this.es.setFontSize(_this.desktopEnv.data.editorFontSize||12);
        }
        return _this.desktopEnv.save();
      },
      fiber$textSize :function _trc_TEdit_f_textSize(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var s;
        
        
        _thread.enter(function _trc_TEdit_ent_textSize(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=6002669;//jseditor.TEdit:2669
              _this.fiber$prompt(_thread, "エディタの文字の大きさ", _this.desktopEnv.data.editorFontSize||12);
              __pc=1;return;
            case 1:
              s=_thread.retVal;
              
              //$LASTPOS=6002767;//jseditor.TEdit:2767
              _this.desktopEnv.data.editorFontSize=_this.parseInt(s);
              //$LASTPOS=6002816;//jseditor.TEdit:2816
              if (_this.es) {
                //$LASTPOS=6002824;//jseditor.TEdit:2824
                _this.es.setFontSize(_this.desktopEnv.data.editorFontSize||12);
              }
              _thread.exit(_this.desktopEnv.save());return;
              _thread.exit(_this);return;
            }
          }
        });
      },
      save :function _trc_TEdit_save(e) {
        "use strict";
        var _this=this;
        
        //$LASTPOS=6002935;//jseditor.TEdit:2935
        _this.es.save();
      },
      fiber$save :function _trc_TEdit_f_save(_thread,e) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=6002935;//jseditor.TEdit:2935
        _this.es.save();
        
        _thread.retVal=_this;return;
      },
      onResize :function _trc_TEdit_onResize() {
        "use strict";
        var _this=this;
        var h;
        
        //$LASTPOS=6002999;//jseditor.TEdit:2999
        h = $(window).height()-$("#navBar").height()-$("#tabTop").height();
        
        //$LASTPOS=6003074;//jseditor.TEdit:3074
        h-=20;
        //$LASTPOS=6003086;//jseditor.TEdit:3086
        _this.screenH=h;
        //$LASTPOS=6003102;//jseditor.TEdit:3102
        _this.editorH=_this.screenH-$("#fileLabel").height();
        //$LASTPOS=6003149;//jseditor.TEdit:3149
        if (_this.es) {
          //$LASTPOS=6003157;//jseditor.TEdit:3157
          _this.es.options.height=_this.editorH;
        }
        //$LASTPOS=6003189;//jseditor.TEdit:3189
        $("#progs pre").css("height",_this.editorH+"px");
        //$LASTPOS=6003238;//jseditor.TEdit:3238
        console.log("canvas size",h,_this.editorH);
        //$LASTPOS=6003282;//jseditor.TEdit:3282
        $("#fileItemList").height(h);
      },
      fiber$onResize :function _trc_TEdit_f_onResize(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var h;
        
        //$LASTPOS=6002999;//jseditor.TEdit:2999
        h = $(window).height()-$("#navBar").height()-$("#tabTop").height();
        
        //$LASTPOS=6003074;//jseditor.TEdit:3074
        h-=20;
        //$LASTPOS=6003086;//jseditor.TEdit:3086
        _this.screenH=h;
        //$LASTPOS=6003102;//jseditor.TEdit:3102
        _this.editorH=_this.screenH-$("#fileLabel").height();
        //$LASTPOS=6003149;//jseditor.TEdit:3149
        if (_this.es) {
          //$LASTPOS=6003157;//jseditor.TEdit:3157
          _this.es.options.height=_this.editorH;
        }
        //$LASTPOS=6003189;//jseditor.TEdit:3189
        $("#progs pre").css("height",_this.editorH+"px");
        //$LASTPOS=6003238;//jseditor.TEdit:3238
        console.log("canvas size",h,_this.editorH);
        //$LASTPOS=6003282;//jseditor.TEdit:3282
        $("#fileItemList").height(h);
        
        _thread.retVal=_this;return;
      },
      __dummy: false
    },
    decls: {"methods":{"main":{"nowait":false},"genReqConf":{"nowait":false},"tonyuC":{"nowait":false},"openBookmark":{"nowait":false},"newWindow":{"nowait":false},"find":{"nowait":false},"mvFile":{"nowait":false},"rmFile":{"nowait":false},"newFile":{"nowait":false},"textSize":{"nowait":false},"save":{"nowait":false},"onResize":{"nowait":false}}}
  });
});