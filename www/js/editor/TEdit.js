define(function (require) {
  var Tonyu=require('Tonyu');
  var Columns=require('Columns');
  var Util=require('Util');
  var FileList=require('FileList');
  var ace=require('ace');
  var Base=require('Base');
  var TMenu=require('TMenu');
  var Etc=require('Etc');
  var DesktopEnv=require('DesktopEnv');
  var JSEProject=require('JSEProject');
  var TonyuC=require('TonyuC');
  var Bookmark=require('Bookmark');
  var TEditorSet=require('TEditorSet');
  var Finder=require('Finder');
  var FileMenu=require('FileMenu');
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
        
        //$LASTPOS=13000231;//jseditor.TEdit:231
        Columns.make(["div",{id: "fileViewer","class": "col-xs-3"},["div",{id: "fileItemList"}]],["div",{id: "mainArea","class": "col-xs-9"},["div",{id: "fileLabel"},"."],["div",{id: "progs"}]]);
        
        //$LASTPOS=13000484;//jseditor.TEdit:484
        (new Tonyu.classes.jseditor.TMenu).make("JS Editor",[{label: "Home",href: "index.html"},{label: "ファイル",sub: [{label: "新規",id: "newFile",action: "$fileMenu.create"},{label: "名前変更",id: "mvFile",action: "$fileMenu.rename"},{label: "上書き保存",id: "saveFile",action: "$editorSet.save",key: "ctrl+s"},{label: "コピー",id: "cpFile",action: "$fileMenu.copy"},{label: "閉じる",id: "closeFile",action: "$editorSet.close"},{label: "削除",id: "rmFile",action: "$fileMenu.remove"}]},{label: "ツール",sub: [{label: "TonyuC",id: "tonyuC",action: Tonyu.bindFunc(_this,_this.tonyuC),key: "f9"},{label: "実行",id: "run",action: Tonyu.bindFunc(_this,_this.runHTML),key: "f5"}]},{label: "ウィンドウ",sub: [{label: "新規ウィンドウ",id: "newWindow",action: Tonyu.bindFunc(_this,_this.newWindow)},{label: "新規ウィンドウ＆Home",id: "newWindowHome",action: Tonyu.bindFunc(_this,_this.newWindowHome)},{label: "フォルダを開く",id: "openFolder",action: Tonyu.bindFunc(_this,_this.openFolder)}]},{label: "設定",sub: [{label: "環境設定...",id: "textsize",action: "$desktopEnvEditor.dialog"},{label: "ワークスペース切り替え...",id: "setEtc",action: Tonyu.bindFunc(_this,_this.setEtc)}]}]);
        
        
        //$LASTPOS=13001967;//jseditor.TEdit:1967
        _this.etc = new Tonyu.classes.jseditor.Etc;
        
        //$LASTPOS=13001985;//jseditor.TEdit:1985
        Tonyu.globals.$etc=_this.etc;
        //$LASTPOS=13001996;//jseditor.TEdit:1996
        Tonyu.globals.$desktopEnvEditor=new Tonyu.classes.jseditor.DesktopEnv;
        //$LASTPOS=13002031;//jseditor.TEdit:2031
        _this.update(10);
        //$LASTPOS=13002046;//jseditor.TEdit:2046
        _this.prjs = _this.readJSON(_this.etc.rel("projects.json"));
        
        //$LASTPOS=13002092;//jseditor.TEdit:2092
        _this.prj = new Tonyu.classes.jseditor.JSEProject(_this.prjs,Util.getQueryString("prj"));
        
        //$LASTPOS=13002151;//jseditor.TEdit:2151
        Tonyu.globals.$jsePrj=_this.prj;
        //$LASTPOS=13002165;//jseditor.TEdit:2165
        $("title").text(Util.getQueryString("prj")+" - JS Editor");
        //$LASTPOS=13002267;//jseditor.TEdit:2267
        _this.tc = new Tonyu.classes.jseditor.TonyuC(_this.prj);
        
        //$LASTPOS=13002292;//jseditor.TEdit:2292
        _this.fl = Tonyu.globals.$fileList=new FileList($("#fileItemList"),{open: (function anonymous_2354(f) {
          
          //$LASTPOS=13002378;//jseditor.TEdit:2378
          console.log("opening",f);
          //$LASTPOS=13002413;//jseditor.TEdit:2413
          _this.es.save();
          //$LASTPOS=13002433;//jseditor.TEdit:2433
          _this.es.open(f);
        })});
        
        //$LASTPOS=13002457;//jseditor.TEdit:2457
        Tonyu.globals.$bookmark=new Tonyu.classes.jseditor.Bookmark({file: _this.etc.rel("bookmark.json"),fileList: _this.fl});
        
        //$LASTPOS=13003787;//jseditor.TEdit:3787
        _this.onResize();
        //$LASTPOS=13003800;//jseditor.TEdit:3800
        $(window).resize(Tonyu.bindFunc(_this,_this.onResize));
        //$LASTPOS=13003829;//jseditor.TEdit:3829
        requirejs(["ace"],(function anonymous_3847() {
          var desktopEnv;
          
          //$LASTPOS=13003865;//jseditor.TEdit:3865
          desktopEnv = Tonyu.globals.$desktopEnvEditor.model;
          
          //$LASTPOS=13003910;//jseditor.TEdit:3910
          _this.print("denv",desktopEnv&&desktopEnv.editorFontSize||12);
          //$LASTPOS=13003976;//jseditor.TEdit:3976
          console.log("ace loaded:",ace);
          //$LASTPOS=13004013;//jseditor.TEdit:4013
          Tonyu.globals.$editorSet=_this.es=new Tonyu.classes.jseditor.TEditorSet($("#progs"),$("#fileLabel"),{height: _this.editorH,fontSize: (desktopEnv&&desktopEnv.editorFontSize||12)});
          //$LASTPOS=13004182;//jseditor.TEdit:4182
          Tonyu.globals.$finder=new Tonyu.classes.jseditor.Finder;
          //$LASTPOS=13004207;//jseditor.TEdit:4207
          if (typeof  _this.SplashScreen!="undefined") {
            //$LASTPOS=13004245;//jseditor.TEdit:4245
            _this.SplashScreen.hide();
          }
          //$LASTPOS=13004271;//jseditor.TEdit:4271
          Tonyu.globals.$fileMenu=_this.fileMenu=new Tonyu.classes.jseditor.FileMenu({editorSet: _this.es,fileList: _this.fl});
          //$LASTPOS=13004337;//jseditor.TEdit:4337
          _this.fl.open(_this.prj.path);
          //$LASTPOS=13004367;//jseditor.TEdit:4367
          Tonyu.globals.$desktopEnvEditor.on("modelsaved",(function anonymous_4402(model) {
            
            //$LASTPOS=13004422;//jseditor.TEdit:4422
            _this.print("SAVED",model);
            //$LASTPOS=13004453;//jseditor.TEdit:4453
            Tonyu.globals.$editorSet.setFontSize(desktopEnv.editorFontSize);
          }));
        }));
        //$LASTPOS=13005000;//jseditor.TEdit:5000
        $(window).on("beforeunload",(function anonymous_5029(e) {
          var s;
          
          //$LASTPOS=13005041;//jseditor.TEdit:5041
          s = _this.shouldConfirmClose();
          
          //$LASTPOS=13005074;//jseditor.TEdit:5074
          if (s) {
            return s;
            
          } else {
            //$LASTPOS=13005125;//jseditor.TEdit:5125
            e.preventDefault();
            
          }
        }));
        //$LASTPOS=13005157;//jseditor.TEdit:5157
        _this.gui = nwDispatcher.requireNwGui();
        
        //$LASTPOS=13005198;//jseditor.TEdit:5198
        _this.win = _this.gui.Window.get();
        
        //$LASTPOS=13005227;//jseditor.TEdit:5227
        _this.win.on('close',(function anonymous_5243() {
          var s;
          
          //$LASTPOS=13005261;//jseditor.TEdit:5261
          s = _this.shouldConfirmClose();
          
          //$LASTPOS=13005294;//jseditor.TEdit:5294
          if (s) {
            //$LASTPOS=13005312;//jseditor.TEdit:5312
            if (window.confirm(s)) {
              //$LASTPOS=13005349;//jseditor.TEdit:5349
              _this.win.close(true);
              
            }
            
          } else {
            //$LASTPOS=13005400;//jseditor.TEdit:5400
            _this.win.close(true);
            
          }
        }));
      },
      fiber$main :function _trc_TEdit_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=13000231;//jseditor.TEdit:231
        Columns.make(["div",{id: "fileViewer","class": "col-xs-3"},["div",{id: "fileItemList"}]],["div",{id: "mainArea","class": "col-xs-9"},["div",{id: "fileLabel"},"."],["div",{id: "progs"}]]);
        
        //$LASTPOS=13000484;//jseditor.TEdit:484
        (new Tonyu.classes.jseditor.TMenu).make("JS Editor",[{label: "Home",href: "index.html"},{label: "ファイル",sub: [{label: "新規",id: "newFile",action: "$fileMenu.create"},{label: "名前変更",id: "mvFile",action: "$fileMenu.rename"},{label: "上書き保存",id: "saveFile",action: "$editorSet.save",key: "ctrl+s"},{label: "コピー",id: "cpFile",action: "$fileMenu.copy"},{label: "閉じる",id: "closeFile",action: "$editorSet.close"},{label: "削除",id: "rmFile",action: "$fileMenu.remove"}]},{label: "ツール",sub: [{label: "TonyuC",id: "tonyuC",action: Tonyu.bindFunc(_this,_this.tonyuC),key: "f9"},{label: "実行",id: "run",action: Tonyu.bindFunc(_this,_this.runHTML),key: "f5"}]},{label: "ウィンドウ",sub: [{label: "新規ウィンドウ",id: "newWindow",action: Tonyu.bindFunc(_this,_this.newWindow)},{label: "新規ウィンドウ＆Home",id: "newWindowHome",action: Tonyu.bindFunc(_this,_this.newWindowHome)},{label: "フォルダを開く",id: "openFolder",action: Tonyu.bindFunc(_this,_this.openFolder)}]},{label: "設定",sub: [{label: "環境設定...",id: "textsize",action: "$desktopEnvEditor.dialog"},{label: "ワークスペース切り替え...",id: "setEtc",action: Tonyu.bindFunc(_this,_this.setEtc)}]}]);
        
        
        //$LASTPOS=13001967;//jseditor.TEdit:1967
        _this.etc = new Tonyu.classes.jseditor.Etc;
        
        //$LASTPOS=13001985;//jseditor.TEdit:1985
        Tonyu.globals.$etc=_this.etc;
        //$LASTPOS=13001996;//jseditor.TEdit:1996
        Tonyu.globals.$desktopEnvEditor=new Tonyu.classes.jseditor.DesktopEnv;
        
        _thread.enter(function _trc_TEdit_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=13002031;//jseditor.TEdit:2031
              _this.fiber$update(_thread, 10);
              __pc=1;return;
            case 1:
              
              //$LASTPOS=13002046;//jseditor.TEdit:2046
              _this.fiber$readJSON(_thread, _this.etc.rel("projects.json"));
              __pc=2;return;
            case 2:
              _this.prjs=_thread.retVal;
              
              //$LASTPOS=13002092;//jseditor.TEdit:2092
              _this.prj = new Tonyu.classes.jseditor.JSEProject(_this.prjs,Util.getQueryString("prj"));
              
              //$LASTPOS=13002151;//jseditor.TEdit:2151
              Tonyu.globals.$jsePrj=_this.prj;
              //$LASTPOS=13002165;//jseditor.TEdit:2165
              $("title").text(Util.getQueryString("prj")+" - JS Editor");
              //$LASTPOS=13002267;//jseditor.TEdit:2267
              _this.tc = new Tonyu.classes.jseditor.TonyuC(_this.prj);
              
              //$LASTPOS=13002292;//jseditor.TEdit:2292
              _this.fl = Tonyu.globals.$fileList=new FileList($("#fileItemList"),{open: (function anonymous_2354(f) {
                
                //$LASTPOS=13002378;//jseditor.TEdit:2378
                console.log("opening",f);
                //$LASTPOS=13002413;//jseditor.TEdit:2413
                _this.es.save();
                //$LASTPOS=13002433;//jseditor.TEdit:2433
                _this.es.open(f);
              })});
              
              //$LASTPOS=13002457;//jseditor.TEdit:2457
              Tonyu.globals.$bookmark=new Tonyu.classes.jseditor.Bookmark({file: _this.etc.rel("bookmark.json"),fileList: _this.fl});
              
              //$LASTPOS=13003787;//jseditor.TEdit:3787
              _this.fiber$onResize(_thread);
              __pc=3;return;
            case 3:
              
              //$LASTPOS=13003800;//jseditor.TEdit:3800
              $(window).resize(Tonyu.bindFunc(_this,_this.onResize));
              //$LASTPOS=13003829;//jseditor.TEdit:3829
              requirejs(["ace"],(function anonymous_3847() {
                var desktopEnv;
                
                //$LASTPOS=13003865;//jseditor.TEdit:3865
                desktopEnv = Tonyu.globals.$desktopEnvEditor.model;
                
                //$LASTPOS=13003910;//jseditor.TEdit:3910
                _this.print("denv",desktopEnv&&desktopEnv.editorFontSize||12);
                //$LASTPOS=13003976;//jseditor.TEdit:3976
                console.log("ace loaded:",ace);
                //$LASTPOS=13004013;//jseditor.TEdit:4013
                Tonyu.globals.$editorSet=_this.es=new Tonyu.classes.jseditor.TEditorSet($("#progs"),$("#fileLabel"),{height: _this.editorH,fontSize: (desktopEnv&&desktopEnv.editorFontSize||12)});
                //$LASTPOS=13004182;//jseditor.TEdit:4182
                Tonyu.globals.$finder=new Tonyu.classes.jseditor.Finder;
                //$LASTPOS=13004207;//jseditor.TEdit:4207
                if (typeof  _this.SplashScreen!="undefined") {
                  //$LASTPOS=13004245;//jseditor.TEdit:4245
                  _this.SplashScreen.hide();
                }
                //$LASTPOS=13004271;//jseditor.TEdit:4271
                Tonyu.globals.$fileMenu=_this.fileMenu=new Tonyu.classes.jseditor.FileMenu({editorSet: _this.es,fileList: _this.fl});
                //$LASTPOS=13004337;//jseditor.TEdit:4337
                _this.fl.open(_this.prj.path);
                //$LASTPOS=13004367;//jseditor.TEdit:4367
                Tonyu.globals.$desktopEnvEditor.on("modelsaved",(function anonymous_4402(model) {
                  
                  //$LASTPOS=13004422;//jseditor.TEdit:4422
                  _this.print("SAVED",model);
                  //$LASTPOS=13004453;//jseditor.TEdit:4453
                  Tonyu.globals.$editorSet.setFontSize(desktopEnv.editorFontSize);
                }));
              }));
              //$LASTPOS=13005000;//jseditor.TEdit:5000
              $(window).on("beforeunload",(function anonymous_5029(e) {
                var s;
                
                //$LASTPOS=13005041;//jseditor.TEdit:5041
                s = _this.shouldConfirmClose();
                
                //$LASTPOS=13005074;//jseditor.TEdit:5074
                if (s) {
                  return s;
                  
                } else {
                  //$LASTPOS=13005125;//jseditor.TEdit:5125
                  e.preventDefault();
                  
                }
              }));
              //$LASTPOS=13005157;//jseditor.TEdit:5157
              _this.gui = nwDispatcher.requireNwGui();
              
              //$LASTPOS=13005198;//jseditor.TEdit:5198
              _this.win = _this.gui.Window.get();
              
              //$LASTPOS=13005227;//jseditor.TEdit:5227
              _this.win.on('close',(function anonymous_5243() {
                var s;
                
                //$LASTPOS=13005261;//jseditor.TEdit:5261
                s = _this.shouldConfirmClose();
                
                //$LASTPOS=13005294;//jseditor.TEdit:5294
                if (s) {
                  //$LASTPOS=13005312;//jseditor.TEdit:5312
                  if (window.confirm(s)) {
                    //$LASTPOS=13005349;//jseditor.TEdit:5349
                    _this.win.close(true);
                    
                  }
                  
                } else {
                  //$LASTPOS=13005400;//jseditor.TEdit:5400
                  _this.win.close(true);
                  
                }
              }));
              _thread.exit(_this);return;
            }
          }
        });
      },
      runApp :function _trc_TEdit_runApp() {
        "use strict";
        var _this=this;
        
        //$LASTPOS=13000207;//jseditor.TEdit:207
        _this.parallel("main");
      },
      fiber$runApp :function _trc_TEdit_f_runApp(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=13000207;//jseditor.TEdit:207
        _this.parallel("main");
        
        _thread.retVal=_this;return;
      },
      runHTML :function _trc_TEdit_runHTML() {
        "use strict";
        var _this=this;
        var f;
        var genID;
        
        //$LASTPOS=13002557;//jseditor.TEdit:2557
        f = Tonyu.globals.$editorSet.curFile;
        
        //$LASTPOS=13002588;//jseditor.TEdit:2588
        genID = ""+Math.random();
        
        //$LASTPOS=13002621;//jseditor.TEdit:2621
        window.open("file://"+f.path(),genID,'width=800,height=400,menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes');
      },
      fiber$runHTML :function _trc_TEdit_f_runHTML(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var f;
        var genID;
        
        //$LASTPOS=13002557;//jseditor.TEdit:2557
        f = Tonyu.globals.$editorSet.curFile;
        
        //$LASTPOS=13002588;//jseditor.TEdit:2588
        genID = ""+Math.random();
        
        //$LASTPOS=13002621;//jseditor.TEdit:2621
        window.open("file://"+f.path(),genID,'width=800,height=400,menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes');
        
        _thread.retVal=_this;return;
      },
      setEtc :function _trc_TEdit_setEtc() {
        "use strict";
        var _this=this;
        
        //$LASTPOS=13002777;//jseditor.TEdit:2777
        _this.parallel(Tonyu.bindFunc(_this,_this.setEtcP));
      },
      fiber$setEtc :function _trc_TEdit_f_setEtc(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=13002777;//jseditor.TEdit:2777
        _this.parallel(Tonyu.bindFunc(_this,_this.setEtcP));
        
        _thread.retVal=_this;return;
      },
      setEtcP :function _trc_TEdit_setEtcP() {
        "use strict";
        var _this=this;
        var np;
        
        //$LASTPOS=13002818;//jseditor.TEdit:2818
        np = _this.prompt("ワークスペースのディレクトリ",localStorage.etc||"");
        
        //$LASTPOS=13002878;//jseditor.TEdit:2878
        if (np) {
          //$LASTPOS=13002897;//jseditor.TEdit:2897
          localStorage.etc=np;
          //$LASTPOS=13002927;//jseditor.TEdit:2927
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
              //$LASTPOS=13002818;//jseditor.TEdit:2818
              _this.fiber$prompt(_thread, "ワークスペースのディレクトリ", localStorage.etc||"");
              __pc=1;return;
            case 1:
              np=_thread.retVal;
              
              //$LASTPOS=13002878;//jseditor.TEdit:2878
              if (np) {
                //$LASTPOS=13002897;//jseditor.TEdit:2897
                localStorage.etc=np;
                //$LASTPOS=13002927;//jseditor.TEdit:2927
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
        
        //$LASTPOS=13002982;//jseditor.TEdit:2982
        _this.tc.parallel("compile");
      },
      fiber$tonyuC :function _trc_TEdit_f_tonyuC(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=13002982;//jseditor.TEdit:2982
        _this.tc.parallel("compile");
        
        _thread.retVal=_this;return;
      },
      newWindow :function _trc_TEdit_newWindow() {
        "use strict";
        var _this=this;
        var genID;
        
        //$LASTPOS=13003038;//jseditor.TEdit:3038
        genID = ""+Math.random();
        
        //$LASTPOS=13003071;//jseditor.TEdit:3071
        window.open(location.href,genID,'width=800,height=400,menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes');
      },
      fiber$newWindow :function _trc_TEdit_f_newWindow(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var genID;
        
        //$LASTPOS=13003038;//jseditor.TEdit:3038
        genID = ""+Math.random();
        
        //$LASTPOS=13003071;//jseditor.TEdit:3071
        window.open(location.href,genID,'width=800,height=400,menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes');
        
        _thread.retVal=_this;return;
      },
      newWindowHome :function _trc_TEdit_newWindowHome() {
        "use strict";
        var _this=this;
        var genID;
        
        //$LASTPOS=13003235;//jseditor.TEdit:3235
        genID = ""+Math.random();
        
        //$LASTPOS=13003268;//jseditor.TEdit:3268
        window.open(location.href.replace(/\?.*/,""),genID,'width=800,height=400,menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes');
      },
      fiber$newWindowHome :function _trc_TEdit_f_newWindowHome(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var genID;
        
        //$LASTPOS=13003235;//jseditor.TEdit:3235
        genID = ""+Math.random();
        
        //$LASTPOS=13003268;//jseditor.TEdit:3268
        window.open(location.href.replace(/\?.*/,""),genID,'width=800,height=400,menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes');
        
        _thread.retVal=_this;return;
      },
      onResize :function _trc_TEdit_onResize() {
        "use strict";
        var _this=this;
        var h;
        
        //$LASTPOS=13003470;//jseditor.TEdit:3470
        h = $(window).height()-$("#navBar").height()-$("#tabTop").height();
        
        //$LASTPOS=13003545;//jseditor.TEdit:3545
        h-=20;
        //$LASTPOS=13003557;//jseditor.TEdit:3557
        _this.screenH=h;
        //$LASTPOS=13003573;//jseditor.TEdit:3573
        _this.editorH=_this.screenH-$("#fileLabel").height();
        //$LASTPOS=13003620;//jseditor.TEdit:3620
        if (_this.es) {
          //$LASTPOS=13003628;//jseditor.TEdit:3628
          _this.es.options.height=_this.editorH;
        }
        //$LASTPOS=13003660;//jseditor.TEdit:3660
        $("#progs pre").css("height",_this.editorH+"px");
        //$LASTPOS=13003709;//jseditor.TEdit:3709
        console.log("canvas size",h,_this.editorH);
        //$LASTPOS=13003753;//jseditor.TEdit:3753
        $("#fileItemList").height(h);
      },
      fiber$onResize :function _trc_TEdit_f_onResize(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var h;
        
        //$LASTPOS=13003470;//jseditor.TEdit:3470
        h = $(window).height()-$("#navBar").height()-$("#tabTop").height();
        
        //$LASTPOS=13003545;//jseditor.TEdit:3545
        h-=20;
        //$LASTPOS=13003557;//jseditor.TEdit:3557
        _this.screenH=h;
        //$LASTPOS=13003573;//jseditor.TEdit:3573
        _this.editorH=_this.screenH-$("#fileLabel").height();
        //$LASTPOS=13003620;//jseditor.TEdit:3620
        if (_this.es) {
          //$LASTPOS=13003628;//jseditor.TEdit:3628
          _this.es.options.height=_this.editorH;
        }
        //$LASTPOS=13003660;//jseditor.TEdit:3660
        $("#progs pre").css("height",_this.editorH+"px");
        //$LASTPOS=13003709;//jseditor.TEdit:3709
        console.log("canvas size",h,_this.editorH);
        //$LASTPOS=13003753;//jseditor.TEdit:3753
        $("#fileItemList").height(h);
        
        _thread.retVal=_this;return;
      },
      shouldConfirmClose :function _trc_TEdit_shouldConfirmClose() {
        "use strict";
        var _this=this;
        var m;
        
        //$LASTPOS=13004547;//jseditor.TEdit:4547
        m = (Tonyu.globals.$editorSet&&Tonyu.globals.$editorSet.allModified())||[];
        
        //$LASTPOS=13004606;//jseditor.TEdit:4606
        if (m.length>0) {
          return "保存しないで終了しますか？: "+m.map((function anonymous_4664(f) {
            
            return f.name();
          })).join(",");
          
        }
      },
      fiber$shouldConfirmClose :function _trc_TEdit_f_shouldConfirmClose(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var m;
        
        //$LASTPOS=13004547;//jseditor.TEdit:4547
        m = (Tonyu.globals.$editorSet&&Tonyu.globals.$editorSet.allModified())||[];
        
        //$LASTPOS=13004606;//jseditor.TEdit:4606
        if (m.length>0) {
          _thread.retVal="保存しないで終了しますか？: "+m.map((function anonymous_4664(f) {
            
            return f.name();
          })).join(",");return;
          
          
        }
        
        _thread.retVal=_this;return;
      },
      openFolder :function _trc_TEdit_openFolder() {
        "use strict";
        var _this=this;
        var f;
        
        //$LASTPOS=13004793;//jseditor.TEdit:4793
        f = Tonyu.globals.$editorSet.curFile||_this.fl.lastSelected;
        
        //$LASTPOS=13004843;//jseditor.TEdit:4843
        console.log(f);
        //$LASTPOS=13004864;//jseditor.TEdit:4864
        if (f) {
          //$LASTPOS=13004882;//jseditor.TEdit:4882
          console.log(f.path());
          //$LASTPOS=13004914;//jseditor.TEdit:4914
          _this.gui.Shell.showItemInFolder(f.path().replace(/\//g,"\\"));
          return _this;
          
        }
      },
      fiber$openFolder :function _trc_TEdit_f_openFolder(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var f;
        
        //$LASTPOS=13004793;//jseditor.TEdit:4793
        f = Tonyu.globals.$editorSet.curFile||_this.fl.lastSelected;
        
        //$LASTPOS=13004843;//jseditor.TEdit:4843
        console.log(f);
        //$LASTPOS=13004864;//jseditor.TEdit:4864
        if (f) {
          //$LASTPOS=13004882;//jseditor.TEdit:4882
          console.log(f.path());
          //$LASTPOS=13004914;//jseditor.TEdit:4914
          _this.gui.Shell.showItemInFolder(f.path().replace(/\//g,"\\"));
          _thread.retVal=_this;return;
          
          
        }
        
        _thread.retVal=_this;return;
      },
      __dummy: false
    },
    decls: {"methods":{"main":{"nowait":false},"runApp":{"nowait":false},"runHTML":{"nowait":false},"setEtc":{"nowait":false},"setEtcP":{"nowait":false},"tonyuC":{"nowait":false},"newWindow":{"nowait":false},"newWindowHome":{"nowait":false},"onResize":{"nowait":false},"shouldConfirmClose":{"nowait":false},"openFolder":{"nowait":false}}}
  });
});