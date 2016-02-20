define(function (require) {
  var Tonyu=require('Tonyu');
  var Columns=require('Columns');
  var FS=require('FS');
  var Util=require('Util');
  var JSONConf=require('JSONConf');
  var FileList=require('FileList');
  var ace=require('ace');
  var EditorSet=require('EditorSet');
  var Finder=require('Finder');
  var Base=require('Base');
  var TMenu=require('TMenu');
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
        
        //$LASTPOS=8000151;//jseditor.TEdit:151
        Columns.make(["div",{id: "fileViewer","class": "col-xs-3"},["div",{id: "fileItemList"}]],["div",{id: "mainArea","class": "col-xs-9"},["div",{id: "fileLabel"},"."],["div",{id: "progs"}]]);
        
        //$LASTPOS=8000404;//jseditor.TEdit:404
        (new Tonyu.classes.jseditor.TMenu).make("JS Editor",[{label: "Home",href: "index.html"},{label: "ファイル",sub: [{label: "新規",id: "newFile",action: "$fileMenu.create"},{label: "名前変更",id: "mvFile",action: "$fileMenu.rename"},{label: "上書き保存",id: "saveFile",action: "$editorSet.save",key: "ctrl+s"},{label: "コピー",id: "cpFile"},{label: "削除",id: "rmFile",action: "$fileMenu.remove"}]},{label: "ツール",sub: [{label: "TonyuC",id: "tonyuC",action: Tonyu.bindFunc(_this,_this.tonyuC),key: "f9"}]},{label: "ウィンドウ",sub: [{label: "新規ウィンドウ",id: "newWindow",action: Tonyu.bindFunc(_this,_this.newWindow)},{label: "ブックマーク...",id: "bookmark",action: "$bookmark.open"}]},{label: "設定",sub: [{label: "エディタの文字の大きさ...",id: "textsize",action: Tonyu.bindFunc(_this,_this.textSize)},{label: "ワークスペース切り替え...",id: "setEtc",action: Tonyu.bindFunc(_this,_this.setEtc)}]}]);
        
        
        //$LASTPOS=8001507;//jseditor.TEdit:1507
        _this.cwd = FS.get(Util.getQueryString("dir")||process.cwd().replace(/\\/g,"/"));
        
        //$LASTPOS=8001590;//jseditor.TEdit:1590
        _this.projectTop = FS.get(process.cwd().replace(/\\/g,"/")).rel("www/");
        
        //$LASTPOS=8001662;//jseditor.TEdit:1662
        _this.etc = localStorage.etc?FS.get(localStorage.etc):FS.get(process.cwd()).rel(".jsetc/");
        
        //$LASTPOS=8001767;//jseditor.TEdit:1767
        _this.desktopEnv = new JSONConf(_this.etc.rel("desktop.json"));
        
        //$LASTPOS=8001822;//jseditor.TEdit:1822
        Tonyu.globals.$reqConfBuilder=new Tonyu.classes.jseditor.ReqConfBuilder({output: _this.projectTop.rel("js/reqConf.js"),htmlDir: _this.projectTop});
        //$LASTPOS=8001932;//jseditor.TEdit:1932
        _this.desktopEnv.load();
        //$LASTPOS=8001952;//jseditor.TEdit:1952
        _this.fl = Tonyu.globals.$fileList=new FileList($("#fileItemList"),{open: (function anonymous_2014(f) {
          
          //$LASTPOS=8002038;//jseditor.TEdit:2038
          console.log("opening",f);
          //$LASTPOS=8002073;//jseditor.TEdit:2073
          _this.es.save();
          //$LASTPOS=8002093;//jseditor.TEdit:2093
          _this.es.open(f);
        })});
        
        //$LASTPOS=8002117;//jseditor.TEdit:2117
        Tonyu.globals.$bookmark=new Tonyu.classes.jseditor.Bookmark({file: _this.etc.rel("bookmark.json"),fileList: _this.fl});
        
        //$LASTPOS=8003375;//jseditor.TEdit:3375
        _this.onResize();
        //$LASTPOS=8003388;//jseditor.TEdit:3388
        $(window).resize(Tonyu.bindFunc(_this,_this.onResize));
        //$LASTPOS=8003417;//jseditor.TEdit:3417
        requirejs(["ace"],(function anonymous_3435() {
          
          //$LASTPOS=8003453;//jseditor.TEdit:3453
          console.log("ace loaded:",ace);
          //$LASTPOS=8003490;//jseditor.TEdit:3490
          Tonyu.globals.$editorSet=_this.es=new EditorSet($("#progs"),$("#fileLabel"),{height: _this.editorH,fontSize: (_this.desktopEnv.data&&_this.desktopEnv.data.editorFontSize||12)});
          //$LASTPOS=8003668;//jseditor.TEdit:3668
          Tonyu.globals.$finder=new Finder(_this.es);
          //$LASTPOS=8003697;//jseditor.TEdit:3697
          if (typeof  _this.SplashScreen!="undefined") {
            //$LASTPOS=8003735;//jseditor.TEdit:3735
            _this.SplashScreen.hide();
          }
          //$LASTPOS=8003761;//jseditor.TEdit:3761
          Tonyu.globals.$fileMenu=_this.fileMenu=new Tonyu.classes.jseditor.FileMenu({editorSet: _this.es,fileList: _this.fl});
          return _this.fl.open(_this.cwd);
        }));
      },
      fiber$main :function _trc_TEdit_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=8000151;//jseditor.TEdit:151
        Columns.make(["div",{id: "fileViewer","class": "col-xs-3"},["div",{id: "fileItemList"}]],["div",{id: "mainArea","class": "col-xs-9"},["div",{id: "fileLabel"},"."],["div",{id: "progs"}]]);
        
        //$LASTPOS=8000404;//jseditor.TEdit:404
        (new Tonyu.classes.jseditor.TMenu).make("JS Editor",[{label: "Home",href: "index.html"},{label: "ファイル",sub: [{label: "新規",id: "newFile",action: "$fileMenu.create"},{label: "名前変更",id: "mvFile",action: "$fileMenu.rename"},{label: "上書き保存",id: "saveFile",action: "$editorSet.save",key: "ctrl+s"},{label: "コピー",id: "cpFile"},{label: "削除",id: "rmFile",action: "$fileMenu.remove"}]},{label: "ツール",sub: [{label: "TonyuC",id: "tonyuC",action: Tonyu.bindFunc(_this,_this.tonyuC),key: "f9"}]},{label: "ウィンドウ",sub: [{label: "新規ウィンドウ",id: "newWindow",action: Tonyu.bindFunc(_this,_this.newWindow)},{label: "ブックマーク...",id: "bookmark",action: "$bookmark.open"}]},{label: "設定",sub: [{label: "エディタの文字の大きさ...",id: "textsize",action: Tonyu.bindFunc(_this,_this.textSize)},{label: "ワークスペース切り替え...",id: "setEtc",action: Tonyu.bindFunc(_this,_this.setEtc)}]}]);
        
        
        //$LASTPOS=8001507;//jseditor.TEdit:1507
        _this.cwd = FS.get(Util.getQueryString("dir")||process.cwd().replace(/\\/g,"/"));
        
        //$LASTPOS=8001590;//jseditor.TEdit:1590
        _this.projectTop = FS.get(process.cwd().replace(/\\/g,"/")).rel("www/");
        
        //$LASTPOS=8001662;//jseditor.TEdit:1662
        _this.etc = localStorage.etc?FS.get(localStorage.etc):FS.get(process.cwd()).rel(".jsetc/");
        
        //$LASTPOS=8001767;//jseditor.TEdit:1767
        _this.desktopEnv = new JSONConf(_this.etc.rel("desktop.json"));
        
        //$LASTPOS=8001822;//jseditor.TEdit:1822
        Tonyu.globals.$reqConfBuilder=new Tonyu.classes.jseditor.ReqConfBuilder({output: _this.projectTop.rel("js/reqConf.js"),htmlDir: _this.projectTop});
        //$LASTPOS=8001932;//jseditor.TEdit:1932
        _this.desktopEnv.load();
        //$LASTPOS=8001952;//jseditor.TEdit:1952
        _this.fl = Tonyu.globals.$fileList=new FileList($("#fileItemList"),{open: (function anonymous_2014(f) {
          
          //$LASTPOS=8002038;//jseditor.TEdit:2038
          console.log("opening",f);
          //$LASTPOS=8002073;//jseditor.TEdit:2073
          _this.es.save();
          //$LASTPOS=8002093;//jseditor.TEdit:2093
          _this.es.open(f);
        })});
        
        //$LASTPOS=8002117;//jseditor.TEdit:2117
        Tonyu.globals.$bookmark=new Tonyu.classes.jseditor.Bookmark({file: _this.etc.rel("bookmark.json"),fileList: _this.fl});
        
        
        _thread.enter(function _trc_TEdit_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=8003375;//jseditor.TEdit:3375
              _this.fiber$onResize(_thread);
              __pc=1;return;
            case 1:
              
              //$LASTPOS=8003388;//jseditor.TEdit:3388
              $(window).resize(Tonyu.bindFunc(_this,_this.onResize));
              //$LASTPOS=8003417;//jseditor.TEdit:3417
              requirejs(["ace"],(function anonymous_3435() {
                
                //$LASTPOS=8003453;//jseditor.TEdit:3453
                console.log("ace loaded:",ace);
                //$LASTPOS=8003490;//jseditor.TEdit:3490
                Tonyu.globals.$editorSet=_this.es=new EditorSet($("#progs"),$("#fileLabel"),{height: _this.editorH,fontSize: (_this.desktopEnv.data&&_this.desktopEnv.data.editorFontSize||12)});
                //$LASTPOS=8003668;//jseditor.TEdit:3668
                Tonyu.globals.$finder=new Finder(_this.es);
                //$LASTPOS=8003697;//jseditor.TEdit:3697
                if (typeof  _this.SplashScreen!="undefined") {
                  //$LASTPOS=8003735;//jseditor.TEdit:3735
                  _this.SplashScreen.hide();
                }
                //$LASTPOS=8003761;//jseditor.TEdit:3761
                Tonyu.globals.$fileMenu=_this.fileMenu=new Tonyu.classes.jseditor.FileMenu({editorSet: _this.es,fileList: _this.fl});
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
        
        //$LASTPOS=8002216;//jseditor.TEdit:2216
        _this.parallel(Tonyu.bindFunc(_this,_this.setEtcP));
      },
      fiber$setEtc :function _trc_TEdit_f_setEtc(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=8002216;//jseditor.TEdit:2216
        _this.parallel(Tonyu.bindFunc(_this,_this.setEtcP));
        
        _thread.retVal=_this;return;
      },
      setEtcP :function _trc_TEdit_setEtcP() {
        "use strict";
        var _this=this;
        var np;
        
        //$LASTPOS=8002257;//jseditor.TEdit:2257
        np = _this.prompt("ワークスペースのディレクトリ",_this.etc.path());
        
        //$LASTPOS=8002307;//jseditor.TEdit:2307
        if (np) {
          //$LASTPOS=8002326;//jseditor.TEdit:2326
          localStorage.etc=np;
          //$LASTPOS=8002356;//jseditor.TEdit:2356
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
              //$LASTPOS=8002257;//jseditor.TEdit:2257
              _this.fiber$prompt(_thread, "ワークスペースのディレクトリ", _this.etc.path());
              __pc=1;return;
            case 1:
              np=_thread.retVal;
              
              //$LASTPOS=8002307;//jseditor.TEdit:2307
              if (np) {
                //$LASTPOS=8002326;//jseditor.TEdit:2326
                localStorage.etc=np;
                //$LASTPOS=8002356;//jseditor.TEdit:2356
                location.reload();
                
              }
              _thread.exit(_this);return;
            }
          }
        });
      },
      tonyuC :function _trc_TEdit_tonyuC() {
        "use strict";
        var _this=this;
        var tc;
        
        //$LASTPOS=8002411;//jseditor.TEdit:2411
        tc = new Tonyu.classes.jseditor.TonyuC;
        
        //$LASTPOS=8002435;//jseditor.TEdit:2435
        tc.parallel("compile",_this.projectTop.rel("js/"));
      },
      fiber$tonyuC :function _trc_TEdit_f_tonyuC(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var tc;
        
        //$LASTPOS=8002411;//jseditor.TEdit:2411
        tc = new Tonyu.classes.jseditor.TonyuC;
        
        //$LASTPOS=8002435;//jseditor.TEdit:2435
        tc.parallel("compile",_this.projectTop.rel("js/"));
        
        _thread.retVal=_this;return;
      },
      newWindow :function _trc_TEdit_newWindow() {
        "use strict";
        var _this=this;
        var genID;
        
        //$LASTPOS=8002513;//jseditor.TEdit:2513
        genID = ""+Math.random();
        
        //$LASTPOS=8002546;//jseditor.TEdit:2546
        window.open(location.href,genID,'width=800,height=400,menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes');
      },
      fiber$newWindow :function _trc_TEdit_f_newWindow(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var genID;
        
        //$LASTPOS=8002513;//jseditor.TEdit:2513
        genID = ""+Math.random();
        
        //$LASTPOS=8002546;//jseditor.TEdit:2546
        window.open(location.href,genID,'width=800,height=400,menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes');
        
        _thread.retVal=_this;return;
      },
      textSize :function _trc_TEdit_textSize() {
        "use strict";
        var _this=this;
        
        //$LASTPOS=8002705;//jseditor.TEdit:2705
        _this.parallel("textSizeP");
      },
      fiber$textSize :function _trc_TEdit_f_textSize(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=8002705;//jseditor.TEdit:2705
        _this.parallel("textSizeP");
        
        _thread.retVal=_this;return;
      },
      textSizeP :function _trc_TEdit_textSizeP() {
        "use strict";
        var _this=this;
        var s;
        
        //$LASTPOS=8002760;//jseditor.TEdit:2760
        s = _this.prompt("エディタの文字の大きさ",_this.desktopEnv.data.editorFontSize||12);
        
        //$LASTPOS=8002858;//jseditor.TEdit:2858
        _this.desktopEnv.data.editorFontSize=window.parseInt(s);
        //$LASTPOS=8002914;//jseditor.TEdit:2914
        if (_this.es) {
          //$LASTPOS=8002922;//jseditor.TEdit:2922
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
              //$LASTPOS=8002760;//jseditor.TEdit:2760
              _this.fiber$prompt(_thread, "エディタの文字の大きさ", _this.desktopEnv.data.editorFontSize||12);
              __pc=1;return;
            case 1:
              s=_thread.retVal;
              
              //$LASTPOS=8002858;//jseditor.TEdit:2858
              _this.desktopEnv.data.editorFontSize=window.parseInt(s);
              //$LASTPOS=8002914;//jseditor.TEdit:2914
              if (_this.es) {
                //$LASTPOS=8002922;//jseditor.TEdit:2922
                _this.es.setFontSize(_this.desktopEnv.data.editorFontSize||12);
              }
              _thread.exit(_this.desktopEnv.save());return;
              _thread.exit(_this);return;
            }
          }
        });
      },
      onResize :function _trc_TEdit_onResize() {
        "use strict";
        var _this=this;
        var h;
        
        //$LASTPOS=8003058;//jseditor.TEdit:3058
        h = $(window).height()-$("#navBar").height()-$("#tabTop").height();
        
        //$LASTPOS=8003133;//jseditor.TEdit:3133
        h-=20;
        //$LASTPOS=8003145;//jseditor.TEdit:3145
        _this.screenH=h;
        //$LASTPOS=8003161;//jseditor.TEdit:3161
        _this.editorH=_this.screenH-$("#fileLabel").height();
        //$LASTPOS=8003208;//jseditor.TEdit:3208
        if (_this.es) {
          //$LASTPOS=8003216;//jseditor.TEdit:3216
          _this.es.options.height=_this.editorH;
        }
        //$LASTPOS=8003248;//jseditor.TEdit:3248
        $("#progs pre").css("height",_this.editorH+"px");
        //$LASTPOS=8003297;//jseditor.TEdit:3297
        console.log("canvas size",h,_this.editorH);
        //$LASTPOS=8003341;//jseditor.TEdit:3341
        $("#fileItemList").height(h);
      },
      fiber$onResize :function _trc_TEdit_f_onResize(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var h;
        
        //$LASTPOS=8003058;//jseditor.TEdit:3058
        h = $(window).height()-$("#navBar").height()-$("#tabTop").height();
        
        //$LASTPOS=8003133;//jseditor.TEdit:3133
        h-=20;
        //$LASTPOS=8003145;//jseditor.TEdit:3145
        _this.screenH=h;
        //$LASTPOS=8003161;//jseditor.TEdit:3161
        _this.editorH=_this.screenH-$("#fileLabel").height();
        //$LASTPOS=8003208;//jseditor.TEdit:3208
        if (_this.es) {
          //$LASTPOS=8003216;//jseditor.TEdit:3216
          _this.es.options.height=_this.editorH;
        }
        //$LASTPOS=8003248;//jseditor.TEdit:3248
        $("#progs pre").css("height",_this.editorH+"px");
        //$LASTPOS=8003297;//jseditor.TEdit:3297
        console.log("canvas size",h,_this.editorH);
        //$LASTPOS=8003341;//jseditor.TEdit:3341
        $("#fileItemList").height(h);
        
        _thread.retVal=_this;return;
      },
      __dummy: false
    },
    decls: {"methods":{"main":{"nowait":false},"setEtc":{"nowait":false},"setEtcP":{"nowait":false},"tonyuC":{"nowait":false},"newWindow":{"nowait":false},"textSize":{"nowait":false},"textSizeP":{"nowait":false},"onResize":{"nowait":false}}}
  });
});