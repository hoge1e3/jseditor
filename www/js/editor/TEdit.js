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
  var ReqConfBuilder=require('ReqConfBuilder');
  var Bookmark=require('Bookmark');
  var FileMenu=require('FileMenu');
  var TonyuC=require('TonyuC');
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
        
        //$LASTPOS=6000151;//jseditor.TEdit:151
        Columns.make(["div",{id: "fileViewer","class": "col-xs-3"},["div",{id: "fileItemList"}]],["div",{id: "mainArea","class": "col-xs-9"},["div",{id: "fileLabel"},"."],["div",{id: "progs"}]]);
        
        //$LASTPOS=6000402;//jseditor.TEdit:402
        Menu.make("JS Editor",[{label: "Home",href: "index.html"},{label: "ファイル",sub: [{label: "新規",id: "newFile",action: Tonyu.bindFunc(_this,_this.newFile)},{label: "名前変更",id: "mvFile",action: Tonyu.bindFunc(_this,_this.mvFile)},{label: "上書き保存",id: "saveFile",action: Tonyu.bindFunc(_this,_this.save),key: "ctrl+s"},{label: "コピー",id: "cpFile"},{label: "削除",id: "rmFile",action: Tonyu.bindFunc(_this,_this.rmFile)}]},{label: "ツール",sub: [{label: "TonyuC",id: "tonyuC",action: Tonyu.bindFunc(_this,_this.tonyuC),key: "f9"}]},{label: "ウィンドウ",sub: [{label: "新規ウィンドウ",id: "newWindow",action: Tonyu.bindFunc(_this,_this.newWindow)},{label: "ブックマーク...",id: "bookmark",action: Tonyu.bindFunc(_this,_this.openBookmark)}]},{label: "設定",sub: [{label: "エディタの文字の大きさ...",id: "textsize",action: Tonyu.bindFunc(_this,_this.textSize)},{label: "ワークスペース切り替え...",id: "setEtc",action: Tonyu.bindFunc(_this,_this.setEtc)}]}]);
        
        
        //$LASTPOS=6001426;//jseditor.TEdit:1426
        _this.cwd = FS.get(Util.getQueryString("dir")||process.cwd().replace(/\\/g,"/"));
        
        //$LASTPOS=6001509;//jseditor.TEdit:1509
        _this.projectTop = FS.get(process.cwd().replace(/\\/g,"/")).rel("www/");
        
        //$LASTPOS=6001581;//jseditor.TEdit:1581
        _this.etc = localStorage.etc?FS.get(localStorage.etc):FS.get(process.cwd()).rel(".jsetc/");
        
        //$LASTPOS=6001686;//jseditor.TEdit:1686
        _this.desktopEnv = new JSONConf(_this.etc.rel("desktop.json"));
        
        //$LASTPOS=6001741;//jseditor.TEdit:1741
        Tonyu.globals.$reqConfBuilder=new Tonyu.classes.jseditor.ReqConfBuilder({output: _this.projectTop.rel("js/reqConfTest.js"),htmlDir: _this.projectTop});
        //$LASTPOS=6001855;//jseditor.TEdit:1855
        _this.desktopEnv.load();
        //$LASTPOS=6001875;//jseditor.TEdit:1875
        _this.fl = new FileList($("#fileItemList"),{open: (function anonymous_1927(f) {
          
          //$LASTPOS=6001951;//jseditor.TEdit:1951
          console.log("opening",f);
          //$LASTPOS=6001986;//jseditor.TEdit:1986
          _this.es.save();
          //$LASTPOS=6002006;//jseditor.TEdit:2006
          _this.es.open(f);
        })});
        
        //$LASTPOS=6002030;//jseditor.TEdit:2030
        _this.bookmark = new Tonyu.classes.jseditor.Bookmark({file: _this.etc.rel("bookmark.json"),fileList: _this.fl});
        
        
        //$LASTPOS=6003685;//jseditor.TEdit:3685
        _this.onResize();
        //$LASTPOS=6003698;//jseditor.TEdit:3698
        $(window).resize(Tonyu.bindFunc(_this,_this.onResize));
        //$LASTPOS=6003727;//jseditor.TEdit:3727
        requirejs(["ace"],(function anonymous_3745() {
          
          //$LASTPOS=6003763;//jseditor.TEdit:3763
          console.log("ace loaded:",ace);
          //$LASTPOS=6003800;//jseditor.TEdit:3800
          _this.es=new EditorSet($("#progs"),$("#fileLabel"),{height: _this.editorH,fontSize: (_this.desktopEnv.data&&_this.desktopEnv.data.editorFontSize||12)});
          //$LASTPOS=6003967;//jseditor.TEdit:3967
          _this.finder=new Finder(_this.es);
          //$LASTPOS=6003995;//jseditor.TEdit:3995
          if (typeof  _this.SplashScreen!="undefined") {
            //$LASTPOS=6004033;//jseditor.TEdit:4033
            _this.SplashScreen.hide();
          }
          //$LASTPOS=6004059;//jseditor.TEdit:4059
          _this.fileMenu=new Tonyu.classes.jseditor.FileMenu({editorSet: _this.es,fileList: _this.fl});
          return _this.fl.open(_this.cwd);
        }));
      },
      fiber$main :function _trc_TEdit_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=6000151;//jseditor.TEdit:151
        Columns.make(["div",{id: "fileViewer","class": "col-xs-3"},["div",{id: "fileItemList"}]],["div",{id: "mainArea","class": "col-xs-9"},["div",{id: "fileLabel"},"."],["div",{id: "progs"}]]);
        
        //$LASTPOS=6000402;//jseditor.TEdit:402
        Menu.make("JS Editor",[{label: "Home",href: "index.html"},{label: "ファイル",sub: [{label: "新規",id: "newFile",action: Tonyu.bindFunc(_this,_this.newFile)},{label: "名前変更",id: "mvFile",action: Tonyu.bindFunc(_this,_this.mvFile)},{label: "上書き保存",id: "saveFile",action: Tonyu.bindFunc(_this,_this.save),key: "ctrl+s"},{label: "コピー",id: "cpFile"},{label: "削除",id: "rmFile",action: Tonyu.bindFunc(_this,_this.rmFile)}]},{label: "ツール",sub: [{label: "TonyuC",id: "tonyuC",action: Tonyu.bindFunc(_this,_this.tonyuC),key: "f9"}]},{label: "ウィンドウ",sub: [{label: "新規ウィンドウ",id: "newWindow",action: Tonyu.bindFunc(_this,_this.newWindow)},{label: "ブックマーク...",id: "bookmark",action: Tonyu.bindFunc(_this,_this.openBookmark)}]},{label: "設定",sub: [{label: "エディタの文字の大きさ...",id: "textsize",action: Tonyu.bindFunc(_this,_this.textSize)},{label: "ワークスペース切り替え...",id: "setEtc",action: Tonyu.bindFunc(_this,_this.setEtc)}]}]);
        
        
        //$LASTPOS=6001426;//jseditor.TEdit:1426
        _this.cwd = FS.get(Util.getQueryString("dir")||process.cwd().replace(/\\/g,"/"));
        
        //$LASTPOS=6001509;//jseditor.TEdit:1509
        _this.projectTop = FS.get(process.cwd().replace(/\\/g,"/")).rel("www/");
        
        //$LASTPOS=6001581;//jseditor.TEdit:1581
        _this.etc = localStorage.etc?FS.get(localStorage.etc):FS.get(process.cwd()).rel(".jsetc/");
        
        //$LASTPOS=6001686;//jseditor.TEdit:1686
        _this.desktopEnv = new JSONConf(_this.etc.rel("desktop.json"));
        
        //$LASTPOS=6001741;//jseditor.TEdit:1741
        Tonyu.globals.$reqConfBuilder=new Tonyu.classes.jseditor.ReqConfBuilder({output: _this.projectTop.rel("js/reqConfTest.js"),htmlDir: _this.projectTop});
        //$LASTPOS=6001855;//jseditor.TEdit:1855
        _this.desktopEnv.load();
        //$LASTPOS=6001875;//jseditor.TEdit:1875
        _this.fl = new FileList($("#fileItemList"),{open: (function anonymous_1927(f) {
          
          //$LASTPOS=6001951;//jseditor.TEdit:1951
          console.log("opening",f);
          //$LASTPOS=6001986;//jseditor.TEdit:1986
          _this.es.save();
          //$LASTPOS=6002006;//jseditor.TEdit:2006
          _this.es.open(f);
        })});
        
        //$LASTPOS=6002030;//jseditor.TEdit:2030
        _this.bookmark = new Tonyu.classes.jseditor.Bookmark({file: _this.etc.rel("bookmark.json"),fileList: _this.fl});
        
        
        
        _thread.enter(function _trc_TEdit_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=6003685;//jseditor.TEdit:3685
              _this.fiber$onResize(_thread);
              __pc=1;return;
            case 1:
              
              //$LASTPOS=6003698;//jseditor.TEdit:3698
              $(window).resize(Tonyu.bindFunc(_this,_this.onResize));
              //$LASTPOS=6003727;//jseditor.TEdit:3727
              requirejs(["ace"],(function anonymous_3745() {
                
                //$LASTPOS=6003763;//jseditor.TEdit:3763
                console.log("ace loaded:",ace);
                //$LASTPOS=6003800;//jseditor.TEdit:3800
                _this.es=new EditorSet($("#progs"),$("#fileLabel"),{height: _this.editorH,fontSize: (_this.desktopEnv.data&&_this.desktopEnv.data.editorFontSize||12)});
                //$LASTPOS=6003967;//jseditor.TEdit:3967
                _this.finder=new Finder(_this.es);
                //$LASTPOS=6003995;//jseditor.TEdit:3995
                if (typeof  _this.SplashScreen!="undefined") {
                  //$LASTPOS=6004033;//jseditor.TEdit:4033
                  _this.SplashScreen.hide();
                }
                //$LASTPOS=6004059;//jseditor.TEdit:4059
                _this.fileMenu=new Tonyu.classes.jseditor.FileMenu({editorSet: _this.es,fileList: _this.fl});
                return _this.fl.open(_this.cwd);
              }));
              _thread.exit(_this);return;
            }
          }
        });
      },
      setEtc :function _trc_TEdit_setEtc() {
        "use strict";
        var _this=this;
        
        //$LASTPOS=6002132;//jseditor.TEdit:2132
        _this.parallel(Tonyu.bindFunc(_this,_this.setEtcP));
      },
      fiber$setEtc :function _trc_TEdit_f_setEtc(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=6002132;//jseditor.TEdit:2132
        _this.parallel(Tonyu.bindFunc(_this,_this.setEtcP));
        
        _thread.retVal=_this;return;
      },
      setEtcP :function _trc_TEdit_setEtcP() {
        "use strict";
        var _this=this;
        var np;
        
        //$LASTPOS=6002173;//jseditor.TEdit:2173
        np = _this.prompt("ワークスペースのディレクトリ",_this.etc.path());
        
        //$LASTPOS=6002223;//jseditor.TEdit:2223
        if (np) {
          //$LASTPOS=6002242;//jseditor.TEdit:2242
          localStorage.etc=np;
          //$LASTPOS=6002272;//jseditor.TEdit:2272
          location.reload();
          
        }
      },
      fiber$setEtcP :function _trc_TEdit_f_setEtcP(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var np;
        
        
        _thread.enter(function _trc_TEdit_ent_setEtcP(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=6002173;//jseditor.TEdit:2173
              _this.fiber$prompt(_thread, "ワークスペースのディレクトリ", _this.etc.path());
              __pc=1;return;
            case 1:
              np=_thread.retVal;
              
              //$LASTPOS=6002223;//jseditor.TEdit:2223
              if (np) {
                //$LASTPOS=6002242;//jseditor.TEdit:2242
                localStorage.etc=np;
                //$LASTPOS=6002272;//jseditor.TEdit:2272
                location.reload();
                
              }
              _thread.exit(_this);return;
            }
          }
        });
      },
      genReqConf :function _trc_TEdit_genReqConf() {
        "use strict";
        var _this=this;
        
        //$LASTPOS=6002331;//jseditor.TEdit:2331
        Tonyu.globals.$reqConfBuilder.build();
      },
      fiber$genReqConf :function _trc_TEdit_f_genReqConf(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=6002331;//jseditor.TEdit:2331
        Tonyu.globals.$reqConfBuilder.build();
        
        _thread.retVal=_this;return;
      },
      tonyuC :function _trc_TEdit_tonyuC() {
        "use strict";
        var _this=this;
        var tc;
        
        //$LASTPOS=6002385;//jseditor.TEdit:2385
        tc = new Tonyu.classes.jseditor.TonyuC;
        
        //$LASTPOS=6002409;//jseditor.TEdit:2409
        tc.parallel("compile",_this.projectTop.rel("js/"));
      },
      fiber$tonyuC :function _trc_TEdit_f_tonyuC(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var tc;
        
        //$LASTPOS=6002385;//jseditor.TEdit:2385
        tc = new Tonyu.classes.jseditor.TonyuC;
        
        //$LASTPOS=6002409;//jseditor.TEdit:2409
        tc.parallel("compile",_this.projectTop.rel("js/"));
        
        _thread.retVal=_this;return;
      },
      openBookmark :function _trc_TEdit_openBookmark() {
        "use strict";
        var _this=this;
        
        //$LASTPOS=6002490;//jseditor.TEdit:2490
        _this.bookmark.open();
      },
      fiber$openBookmark :function _trc_TEdit_f_openBookmark(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=6002490;//jseditor.TEdit:2490
        _this.bookmark.open();
        
        _thread.retVal=_this;return;
      },
      newWindow :function _trc_TEdit_newWindow() {
        "use strict";
        var _this=this;
        var genID;
        
        //$LASTPOS=6002539;//jseditor.TEdit:2539
        genID = ""+Math.random();
        
        //$LASTPOS=6002572;//jseditor.TEdit:2572
        window.open(location.href,genID,'width=800,height=400,menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes');
      },
      fiber$newWindow :function _trc_TEdit_f_newWindow(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var genID;
        
        //$LASTPOS=6002539;//jseditor.TEdit:2539
        genID = ""+Math.random();
        
        //$LASTPOS=6002572;//jseditor.TEdit:2572
        window.open(location.href,genID,'width=800,height=400,menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes');
        
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
        
        //$LASTPOS=6002976;//jseditor.TEdit:2976
        _this.parallel("textSizeP");
      },
      fiber$textSize :function _trc_TEdit_f_textSize(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=6002976;//jseditor.TEdit:2976
        _this.parallel("textSizeP");
        
        _thread.retVal=_this;return;
      },
      textSizeP :function _trc_TEdit_textSizeP() {
        "use strict";
        var _this=this;
        var s;
        
        //$LASTPOS=6003031;//jseditor.TEdit:3031
        s = _this.prompt("エディタの文字の大きさ",_this.desktopEnv.data.editorFontSize||12);
        
        //$LASTPOS=6003129;//jseditor.TEdit:3129
        _this.desktopEnv.data.editorFontSize=window.parseInt(s);
        //$LASTPOS=6003185;//jseditor.TEdit:3185
        if (_this.es) {
          //$LASTPOS=6003193;//jseditor.TEdit:3193
          _this.es.setFontSize(_this.desktopEnv.data.editorFontSize||12);
        }
        return _this.desktopEnv.save();
      },
      fiber$textSizeP :function _trc_TEdit_f_textSizeP(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var s;
        
        
        _thread.enter(function _trc_TEdit_ent_textSizeP(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=6003031;//jseditor.TEdit:3031
              _this.fiber$prompt(_thread, "エディタの文字の大きさ", _this.desktopEnv.data.editorFontSize||12);
              __pc=1;return;
            case 1:
              s=_thread.retVal;
              
              //$LASTPOS=6003129;//jseditor.TEdit:3129
              _this.desktopEnv.data.editorFontSize=window.parseInt(s);
              //$LASTPOS=6003185;//jseditor.TEdit:3185
              if (_this.es) {
                //$LASTPOS=6003193;//jseditor.TEdit:3193
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
        
        //$LASTPOS=6003304;//jseditor.TEdit:3304
        _this.es.save();
      },
      fiber$save :function _trc_TEdit_f_save(_thread,e) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=6003304;//jseditor.TEdit:3304
        _this.es.save();
        
        _thread.retVal=_this;return;
      },
      onResize :function _trc_TEdit_onResize() {
        "use strict";
        var _this=this;
        var h;
        
        //$LASTPOS=6003368;//jseditor.TEdit:3368
        h = $(window).height()-$("#navBar").height()-$("#tabTop").height();
        
        //$LASTPOS=6003443;//jseditor.TEdit:3443
        h-=20;
        //$LASTPOS=6003455;//jseditor.TEdit:3455
        _this.screenH=h;
        //$LASTPOS=6003471;//jseditor.TEdit:3471
        _this.editorH=_this.screenH-$("#fileLabel").height();
        //$LASTPOS=6003518;//jseditor.TEdit:3518
        if (_this.es) {
          //$LASTPOS=6003526;//jseditor.TEdit:3526
          _this.es.options.height=_this.editorH;
        }
        //$LASTPOS=6003558;//jseditor.TEdit:3558
        $("#progs pre").css("height",_this.editorH+"px");
        //$LASTPOS=6003607;//jseditor.TEdit:3607
        console.log("canvas size",h,_this.editorH);
        //$LASTPOS=6003651;//jseditor.TEdit:3651
        $("#fileItemList").height(h);
      },
      fiber$onResize :function _trc_TEdit_f_onResize(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var h;
        
        //$LASTPOS=6003368;//jseditor.TEdit:3368
        h = $(window).height()-$("#navBar").height()-$("#tabTop").height();
        
        //$LASTPOS=6003443;//jseditor.TEdit:3443
        h-=20;
        //$LASTPOS=6003455;//jseditor.TEdit:3455
        _this.screenH=h;
        //$LASTPOS=6003471;//jseditor.TEdit:3471
        _this.editorH=_this.screenH-$("#fileLabel").height();
        //$LASTPOS=6003518;//jseditor.TEdit:3518
        if (_this.es) {
          //$LASTPOS=6003526;//jseditor.TEdit:3526
          _this.es.options.height=_this.editorH;
        }
        //$LASTPOS=6003558;//jseditor.TEdit:3558
        $("#progs pre").css("height",_this.editorH+"px");
        //$LASTPOS=6003607;//jseditor.TEdit:3607
        console.log("canvas size",h,_this.editorH);
        //$LASTPOS=6003651;//jseditor.TEdit:3651
        $("#fileItemList").height(h);
        
        _thread.retVal=_this;return;
      },
      __dummy: false
    },
    decls: {"methods":{"main":{"nowait":false},"setEtc":{"nowait":false},"setEtcP":{"nowait":false},"genReqConf":{"nowait":false},"tonyuC":{"nowait":false},"openBookmark":{"nowait":false},"newWindow":{"nowait":false},"find":{"nowait":false},"mvFile":{"nowait":false},"rmFile":{"nowait":false},"newFile":{"nowait":false},"textSize":{"nowait":false},"textSizeP":{"nowait":false},"save":{"nowait":false},"onResize":{"nowait":false}}}
  });
});