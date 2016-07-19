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
  var Finder=require('Finder');
  var TonyuC=require('TonyuC');
  var Bookmark=require('Bookmark');
  var TEditorSet=require('TEditorSet');
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
        (new Tonyu.classes.jseditor.TMenu).make("JS Editor",[{label: "Home",href: "index.html"},{label: "ファイル",sub: [{label: "新規",id: "newFile",action: "$fileMenu.create"},{label: "名前変更",id: "mvFile",action: "$fileMenu.rename"},{label: "上書き保存",id: "saveFile",action: "$editorSet.save",key: "ctrl+s"},{label: "コピー",id: "cpFile",action: "$fileMenu.copy"},{label: "閉じる",id: "closeFile",action: "$editorSet.close"},{label: "削除",id: "rmFile",action: "$fileMenu.remove"}]},{label: "ツール",sub: [{label: "TonyuC",id: "tonyuC",action: Tonyu.bindFunc(_this,_this.tonyuC),key: "f9"},{label: "実行",id: "run",action: Tonyu.bindFunc(_this,_this.runHTML),key: "f5"},{label: "sync",id: "sync",action: Tonyu.bindFunc(_this,_this.sync),key: "f8"}]},{label: "ウィンドウ",sub: [{label: "新規ウィンドウ",id: "newWindow",action: Tonyu.bindFunc(_this,_this.newWindow)},{label: "新規ウィンドウ＆Home",id: "newWindowHome",action: Tonyu.bindFunc(_this,_this.newWindowHome)},{label: "フォルダを開く",id: "openFolder",action: Tonyu.bindFunc(_this,_this.openFolder)}]},{label: "設定",sub: [{label: "環境設定...",id: "textsize",action: "$desktopEnvEditor.dialog"},{label: "ワークスペース切り替え...",id: "setEtc",action: Tonyu.bindFunc(_this,_this.setEtc)}]}]);
        
        
        //$LASTPOS=13002015;//jseditor.TEdit:2015
        _this.etc = new Tonyu.classes.jseditor.Etc;
        
        //$LASTPOS=13002033;//jseditor.TEdit:2033
        Tonyu.globals.$etc=_this.etc;
        //$LASTPOS=13002044;//jseditor.TEdit:2044
        Tonyu.globals.$desktopEnvEditor=new Tonyu.classes.jseditor.DesktopEnv;
        //$LASTPOS=13002079;//jseditor.TEdit:2079
        _this.update(10);
        //$LASTPOS=13002094;//jseditor.TEdit:2094
        _this.prjs = _this.readJSON(_this.etc.rel("projects.json"));
        
        //$LASTPOS=13002140;//jseditor.TEdit:2140
        _this.prj = new Tonyu.classes.jseditor.JSEProject(_this.prjs,Util.getQueryString("prj"));
        
        //$LASTPOS=13002199;//jseditor.TEdit:2199
        Tonyu.globals.$jsePrj=_this.prj;
        //$LASTPOS=13002213;//jseditor.TEdit:2213
        $("title").text(Util.getQueryString("prj")+" - JS Editor");
        //$LASTPOS=13002274;//jseditor.TEdit:2274
        Tonyu.globals.$finder=new Tonyu.classes.jseditor.Finder;
        //$LASTPOS=13002295;//jseditor.TEdit:2295
        Tonyu.globals.$finder.parallel("findFileLoop",Tonyu.globals.$jsePrj.path);
        //$LASTPOS=13002386;//jseditor.TEdit:2386
        _this.tc = _this.prj.tonyuC&&new Tonyu.classes.jseditor.TonyuC(_this.prj);
        
        //$LASTPOS=13002425;//jseditor.TEdit:2425
        _this.fl = Tonyu.globals.$fileList=new FileList($("#fileItemList"),{open: (function anonymous_2487(f) {
          
          //$LASTPOS=13002511;//jseditor.TEdit:2511
          console.log("opening",f);
          //$LASTPOS=13002546;//jseditor.TEdit:2546
          _this.es.save();
          //$LASTPOS=13002566;//jseditor.TEdit:2566
          _this.es.open(f);
        })});
        
        //$LASTPOS=13002590;//jseditor.TEdit:2590
        Tonyu.globals.$bookmark=new Tonyu.classes.jseditor.Bookmark({file: _this.etc.rel("bookmark.json"),fileList: _this.fl});
        
        //$LASTPOS=13004017;//jseditor.TEdit:4017
        _this.onResize();
        //$LASTPOS=13004030;//jseditor.TEdit:4030
        $(window).resize(Tonyu.bindFunc(_this,_this.onResize));
        //$LASTPOS=13004059;//jseditor.TEdit:4059
        requirejs(["ace"],(function anonymous_4077() {
          var desktopEnv;
          
          //$LASTPOS=13004095;//jseditor.TEdit:4095
          desktopEnv = Tonyu.globals.$desktopEnvEditor.model;
          
          //$LASTPOS=13004140;//jseditor.TEdit:4140
          _this.print("denv",desktopEnv&&desktopEnv.editorFontSize||12);
          //$LASTPOS=13004206;//jseditor.TEdit:4206
          console.log("ace loaded:",ace);
          //$LASTPOS=13004243;//jseditor.TEdit:4243
          Tonyu.globals.$editorSet=_this.es=new Tonyu.classes.jseditor.TEditorSet($("#progs"),$("#fileLabel"),{height: _this.editorH,fontSize: (desktopEnv&&desktopEnv.editorFontSize||12)});
          //$LASTPOS=13004412;//jseditor.TEdit:4412
          if (typeof  _this.SplashScreen!="undefined") {
            //$LASTPOS=13004450;//jseditor.TEdit:4450
            _this.SplashScreen.hide();
          }
          //$LASTPOS=13004476;//jseditor.TEdit:4476
          Tonyu.globals.$fileMenu=_this.fileMenu=new Tonyu.classes.jseditor.FileMenu({editorSet: _this.es,fileList: _this.fl});
          //$LASTPOS=13004542;//jseditor.TEdit:4542
          _this.fl.open(_this.prj.path);
          //$LASTPOS=13004572;//jseditor.TEdit:4572
          Tonyu.globals.$desktopEnvEditor.on("modelsaved",(function anonymous_4607(model) {
            
            //$LASTPOS=13004627;//jseditor.TEdit:4627
            _this.print("SAVED",model);
            //$LASTPOS=13004658;//jseditor.TEdit:4658
            Tonyu.globals.$editorSet.setFontSize(desktopEnv.editorFontSize);
          }));
        }));
        //$LASTPOS=13005205;//jseditor.TEdit:5205
        $(window).on("beforeunload",(function anonymous_5234(e) {
          var s;
          
          //$LASTPOS=13005246;//jseditor.TEdit:5246
          s = _this.shouldConfirmClose();
          
          //$LASTPOS=13005279;//jseditor.TEdit:5279
          if (s) {
            return s;
            
          } else {
            //$LASTPOS=13005330;//jseditor.TEdit:5330
            e.preventDefault();
            
          }
        }));
        //$LASTPOS=13005362;//jseditor.TEdit:5362
        _this.gui = nwDispatcher.requireNwGui();
        
        //$LASTPOS=13005403;//jseditor.TEdit:5403
        _this.win = _this.gui.Window.get();
        
        //$LASTPOS=13005432;//jseditor.TEdit:5432
        _this.win.on('close',(function anonymous_5448() {
          var s;
          
          //$LASTPOS=13005466;//jseditor.TEdit:5466
          s = _this.shouldConfirmClose();
          
          //$LASTPOS=13005499;//jseditor.TEdit:5499
          if (s) {
            //$LASTPOS=13005517;//jseditor.TEdit:5517
            if (window.confirm(s)) {
              //$LASTPOS=13005554;//jseditor.TEdit:5554
              _this.win.close(true);
              
            }
            
          } else {
            //$LASTPOS=13005605;//jseditor.TEdit:5605
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
        (new Tonyu.classes.jseditor.TMenu).make("JS Editor",[{label: "Home",href: "index.html"},{label: "ファイル",sub: [{label: "新規",id: "newFile",action: "$fileMenu.create"},{label: "名前変更",id: "mvFile",action: "$fileMenu.rename"},{label: "上書き保存",id: "saveFile",action: "$editorSet.save",key: "ctrl+s"},{label: "コピー",id: "cpFile",action: "$fileMenu.copy"},{label: "閉じる",id: "closeFile",action: "$editorSet.close"},{label: "削除",id: "rmFile",action: "$fileMenu.remove"}]},{label: "ツール",sub: [{label: "TonyuC",id: "tonyuC",action: Tonyu.bindFunc(_this,_this.tonyuC),key: "f9"},{label: "実行",id: "run",action: Tonyu.bindFunc(_this,_this.runHTML),key: "f5"},{label: "sync",id: "sync",action: Tonyu.bindFunc(_this,_this.sync),key: "f8"}]},{label: "ウィンドウ",sub: [{label: "新規ウィンドウ",id: "newWindow",action: Tonyu.bindFunc(_this,_this.newWindow)},{label: "新規ウィンドウ＆Home",id: "newWindowHome",action: Tonyu.bindFunc(_this,_this.newWindowHome)},{label: "フォルダを開く",id: "openFolder",action: Tonyu.bindFunc(_this,_this.openFolder)}]},{label: "設定",sub: [{label: "環境設定...",id: "textsize",action: "$desktopEnvEditor.dialog"},{label: "ワークスペース切り替え...",id: "setEtc",action: Tonyu.bindFunc(_this,_this.setEtc)}]}]);
        
        
        //$LASTPOS=13002015;//jseditor.TEdit:2015
        _this.etc = new Tonyu.classes.jseditor.Etc;
        
        //$LASTPOS=13002033;//jseditor.TEdit:2033
        Tonyu.globals.$etc=_this.etc;
        //$LASTPOS=13002044;//jseditor.TEdit:2044
        Tonyu.globals.$desktopEnvEditor=new Tonyu.classes.jseditor.DesktopEnv;
        
        _thread.enter(function _trc_TEdit_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=13002079;//jseditor.TEdit:2079
              _this.fiber$update(_thread, 10);
              __pc=1;return;
            case 1:
              
              //$LASTPOS=13002094;//jseditor.TEdit:2094
              _this.fiber$readJSON(_thread, _this.etc.rel("projects.json"));
              __pc=2;return;
            case 2:
              _this.prjs=_thread.retVal;
              
              //$LASTPOS=13002140;//jseditor.TEdit:2140
              _this.prj = new Tonyu.classes.jseditor.JSEProject(_this.prjs,Util.getQueryString("prj"));
              
              //$LASTPOS=13002199;//jseditor.TEdit:2199
              Tonyu.globals.$jsePrj=_this.prj;
              //$LASTPOS=13002213;//jseditor.TEdit:2213
              $("title").text(Util.getQueryString("prj")+" - JS Editor");
              //$LASTPOS=13002274;//jseditor.TEdit:2274
              Tonyu.globals.$finder=new Tonyu.classes.jseditor.Finder;
              //$LASTPOS=13002295;//jseditor.TEdit:2295
              Tonyu.globals.$finder.parallel("findFileLoop",Tonyu.globals.$jsePrj.path);
              //$LASTPOS=13002386;//jseditor.TEdit:2386
              _this.tc = _this.prj.tonyuC&&new Tonyu.classes.jseditor.TonyuC(_this.prj);
              
              //$LASTPOS=13002425;//jseditor.TEdit:2425
              _this.fl = Tonyu.globals.$fileList=new FileList($("#fileItemList"),{open: (function anonymous_2487(f) {
                
                //$LASTPOS=13002511;//jseditor.TEdit:2511
                console.log("opening",f);
                //$LASTPOS=13002546;//jseditor.TEdit:2546
                _this.es.save();
                //$LASTPOS=13002566;//jseditor.TEdit:2566
                _this.es.open(f);
              })});
              
              //$LASTPOS=13002590;//jseditor.TEdit:2590
              Tonyu.globals.$bookmark=new Tonyu.classes.jseditor.Bookmark({file: _this.etc.rel("bookmark.json"),fileList: _this.fl});
              
              //$LASTPOS=13004017;//jseditor.TEdit:4017
              _this.fiber$onResize(_thread);
              __pc=3;return;
            case 3:
              
              //$LASTPOS=13004030;//jseditor.TEdit:4030
              $(window).resize(Tonyu.bindFunc(_this,_this.onResize));
              //$LASTPOS=13004059;//jseditor.TEdit:4059
              requirejs(["ace"],(function anonymous_4077() {
                var desktopEnv;
                
                //$LASTPOS=13004095;//jseditor.TEdit:4095
                desktopEnv = Tonyu.globals.$desktopEnvEditor.model;
                
                //$LASTPOS=13004140;//jseditor.TEdit:4140
                _this.print("denv",desktopEnv&&desktopEnv.editorFontSize||12);
                //$LASTPOS=13004206;//jseditor.TEdit:4206
                console.log("ace loaded:",ace);
                //$LASTPOS=13004243;//jseditor.TEdit:4243
                Tonyu.globals.$editorSet=_this.es=new Tonyu.classes.jseditor.TEditorSet($("#progs"),$("#fileLabel"),{height: _this.editorH,fontSize: (desktopEnv&&desktopEnv.editorFontSize||12)});
                //$LASTPOS=13004412;//jseditor.TEdit:4412
                if (typeof  _this.SplashScreen!="undefined") {
                  //$LASTPOS=13004450;//jseditor.TEdit:4450
                  _this.SplashScreen.hide();
                }
                //$LASTPOS=13004476;//jseditor.TEdit:4476
                Tonyu.globals.$fileMenu=_this.fileMenu=new Tonyu.classes.jseditor.FileMenu({editorSet: _this.es,fileList: _this.fl});
                //$LASTPOS=13004542;//jseditor.TEdit:4542
                _this.fl.open(_this.prj.path);
                //$LASTPOS=13004572;//jseditor.TEdit:4572
                Tonyu.globals.$desktopEnvEditor.on("modelsaved",(function anonymous_4607(model) {
                  
                  //$LASTPOS=13004627;//jseditor.TEdit:4627
                  _this.print("SAVED",model);
                  //$LASTPOS=13004658;//jseditor.TEdit:4658
                  Tonyu.globals.$editorSet.setFontSize(desktopEnv.editorFontSize);
                }));
              }));
              //$LASTPOS=13005205;//jseditor.TEdit:5205
              $(window).on("beforeunload",(function anonymous_5234(e) {
                var s;
                
                //$LASTPOS=13005246;//jseditor.TEdit:5246
                s = _this.shouldConfirmClose();
                
                //$LASTPOS=13005279;//jseditor.TEdit:5279
                if (s) {
                  return s;
                  
                } else {
                  //$LASTPOS=13005330;//jseditor.TEdit:5330
                  e.preventDefault();
                  
                }
              }));
              //$LASTPOS=13005362;//jseditor.TEdit:5362
              _this.gui = nwDispatcher.requireNwGui();
              
              //$LASTPOS=13005403;//jseditor.TEdit:5403
              _this.win = _this.gui.Window.get();
              
              //$LASTPOS=13005432;//jseditor.TEdit:5432
              _this.win.on('close',(function anonymous_5448() {
                var s;
                
                //$LASTPOS=13005466;//jseditor.TEdit:5466
                s = _this.shouldConfirmClose();
                
                //$LASTPOS=13005499;//jseditor.TEdit:5499
                if (s) {
                  //$LASTPOS=13005517;//jseditor.TEdit:5517
                  if (window.confirm(s)) {
                    //$LASTPOS=13005554;//jseditor.TEdit:5554
                    _this.win.close(true);
                    
                  }
                  
                } else {
                  //$LASTPOS=13005605;//jseditor.TEdit:5605
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
        
        //$LASTPOS=13002690;//jseditor.TEdit:2690
        f = Tonyu.globals.$editorSet.curFile;
        
        //$LASTPOS=13002721;//jseditor.TEdit:2721
        genID = ""+Math.random();
        
        //$LASTPOS=13002754;//jseditor.TEdit:2754
        window.open("file://"+f.path(),genID,'width=800,height=400,menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes');
      },
      fiber$runHTML :function _trc_TEdit_f_runHTML(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var f;
        var genID;
        
        //$LASTPOS=13002690;//jseditor.TEdit:2690
        f = Tonyu.globals.$editorSet.curFile;
        
        //$LASTPOS=13002721;//jseditor.TEdit:2721
        genID = ""+Math.random();
        
        //$LASTPOS=13002754;//jseditor.TEdit:2754
        window.open("file://"+f.path(),genID,'width=800,height=400,menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes');
        
        _thread.retVal=_this;return;
      },
      setEtc :function _trc_TEdit_setEtc() {
        "use strict";
        var _this=this;
        
        //$LASTPOS=13002910;//jseditor.TEdit:2910
        _this.parallel(Tonyu.bindFunc(_this,_this.setEtcP));
      },
      fiber$setEtc :function _trc_TEdit_f_setEtc(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=13002910;//jseditor.TEdit:2910
        _this.parallel(Tonyu.bindFunc(_this,_this.setEtcP));
        
        _thread.retVal=_this;return;
      },
      setEtcP :function _trc_TEdit_setEtcP() {
        "use strict";
        var _this=this;
        var np;
        
        //$LASTPOS=13002951;//jseditor.TEdit:2951
        np = _this.prompt("ワークスペースのディレクトリ",localStorage.etc||"");
        
        //$LASTPOS=13003011;//jseditor.TEdit:3011
        if (np) {
          //$LASTPOS=13003030;//jseditor.TEdit:3030
          localStorage.etc=np;
          //$LASTPOS=13003060;//jseditor.TEdit:3060
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
              //$LASTPOS=13002951;//jseditor.TEdit:2951
              _this.fiber$prompt(_thread, "ワークスペースのディレクトリ", localStorage.etc||"");
              __pc=1;return;
            case 1:
              np=_thread.retVal;
              
              //$LASTPOS=13003011;//jseditor.TEdit:3011
              if (np) {
                //$LASTPOS=13003030;//jseditor.TEdit:3030
                localStorage.etc=np;
                //$LASTPOS=13003060;//jseditor.TEdit:3060
                location.reload();
                
              }
              _thread.exit(_this);return;
            }
          }
        });
      },
      sync :function _trc_TEdit_sync() {
        "use strict";
        var _this=this;
        
        //$LASTPOS=13003105;//jseditor.TEdit:3105
        _this.prj.parallel("doSync");
      },
      fiber$sync :function _trc_TEdit_f_sync(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=13003105;//jseditor.TEdit:3105
        _this.prj.parallel("doSync");
        
        _thread.retVal=_this;return;
      },
      tonyuC :function _trc_TEdit_tonyuC() {
        "use strict";
        var _this=this;
        
        //$LASTPOS=13003158;//jseditor.TEdit:3158
        if (! _this.tc) {
          //$LASTPOS=13003167;//jseditor.TEdit:3167
          _this.alert("TonyuC is not configured");
        } else {
          //$LASTPOS=13003212;//jseditor.TEdit:3212
          _this.tc.parallel("compile");
        }
      },
      fiber$tonyuC :function _trc_TEdit_f_tonyuC(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        _thread.enter(function _trc_TEdit_ent_tonyuC(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=13003158;//jseditor.TEdit:3158
              if (!(! _this.tc)) { __pc=2; break; }
              //$LASTPOS=13003167;//jseditor.TEdit:3167
              _this.fiber$alert(_thread, "TonyuC is not configured");
              __pc=1;return;
            case 1:
              
              __pc=3;break;
            case 2:
              //$LASTPOS=13003212;//jseditor.TEdit:3212
              _this.tc.parallel("compile");
            case 3:
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      newWindow :function _trc_TEdit_newWindow() {
        "use strict";
        var _this=this;
        var genID;
        
        //$LASTPOS=13003268;//jseditor.TEdit:3268
        genID = ""+Math.random();
        
        //$LASTPOS=13003301;//jseditor.TEdit:3301
        window.open(location.href,genID,'width=800,height=400,menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes');
      },
      fiber$newWindow :function _trc_TEdit_f_newWindow(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var genID;
        
        //$LASTPOS=13003268;//jseditor.TEdit:3268
        genID = ""+Math.random();
        
        //$LASTPOS=13003301;//jseditor.TEdit:3301
        window.open(location.href,genID,'width=800,height=400,menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes');
        
        _thread.retVal=_this;return;
      },
      newWindowHome :function _trc_TEdit_newWindowHome() {
        "use strict";
        var _this=this;
        var genID;
        
        //$LASTPOS=13003465;//jseditor.TEdit:3465
        genID = ""+Math.random();
        
        //$LASTPOS=13003498;//jseditor.TEdit:3498
        window.open(location.href.replace(/\?.*/,""),genID,'width=800,height=400,menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes');
      },
      fiber$newWindowHome :function _trc_TEdit_f_newWindowHome(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var genID;
        
        //$LASTPOS=13003465;//jseditor.TEdit:3465
        genID = ""+Math.random();
        
        //$LASTPOS=13003498;//jseditor.TEdit:3498
        window.open(location.href.replace(/\?.*/,""),genID,'width=800,height=400,menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes');
        
        _thread.retVal=_this;return;
      },
      onResize :function _trc_TEdit_onResize() {
        "use strict";
        var _this=this;
        var h;
        
        //$LASTPOS=13003700;//jseditor.TEdit:3700
        h = $(window).height()-$("#navBar").height()-$("#tabTop").height();
        
        //$LASTPOS=13003775;//jseditor.TEdit:3775
        h-=20;
        //$LASTPOS=13003787;//jseditor.TEdit:3787
        _this.screenH=h;
        //$LASTPOS=13003803;//jseditor.TEdit:3803
        _this.editorH=_this.screenH-$("#fileLabel").height();
        //$LASTPOS=13003850;//jseditor.TEdit:3850
        if (_this.es) {
          //$LASTPOS=13003858;//jseditor.TEdit:3858
          _this.es.options.height=_this.editorH;
        }
        //$LASTPOS=13003890;//jseditor.TEdit:3890
        $("#progs pre").css("height",_this.editorH+"px");
        //$LASTPOS=13003939;//jseditor.TEdit:3939
        console.log("canvas size",h,_this.editorH);
        //$LASTPOS=13003983;//jseditor.TEdit:3983
        $("#fileItemList").height(h);
      },
      fiber$onResize :function _trc_TEdit_f_onResize(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var h;
        
        //$LASTPOS=13003700;//jseditor.TEdit:3700
        h = $(window).height()-$("#navBar").height()-$("#tabTop").height();
        
        //$LASTPOS=13003775;//jseditor.TEdit:3775
        h-=20;
        //$LASTPOS=13003787;//jseditor.TEdit:3787
        _this.screenH=h;
        //$LASTPOS=13003803;//jseditor.TEdit:3803
        _this.editorH=_this.screenH-$("#fileLabel").height();
        //$LASTPOS=13003850;//jseditor.TEdit:3850
        if (_this.es) {
          //$LASTPOS=13003858;//jseditor.TEdit:3858
          _this.es.options.height=_this.editorH;
        }
        //$LASTPOS=13003890;//jseditor.TEdit:3890
        $("#progs pre").css("height",_this.editorH+"px");
        //$LASTPOS=13003939;//jseditor.TEdit:3939
        console.log("canvas size",h,_this.editorH);
        //$LASTPOS=13003983;//jseditor.TEdit:3983
        $("#fileItemList").height(h);
        
        _thread.retVal=_this;return;
      },
      shouldConfirmClose :function _trc_TEdit_shouldConfirmClose() {
        "use strict";
        var _this=this;
        var m;
        
        //$LASTPOS=13004752;//jseditor.TEdit:4752
        m = (Tonyu.globals.$editorSet&&Tonyu.globals.$editorSet.allModified())||[];
        
        //$LASTPOS=13004811;//jseditor.TEdit:4811
        if (m.length>0) {
          return "保存しないで終了しますか？: "+m.map((function anonymous_4869(f) {
            
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
        
        //$LASTPOS=13004752;//jseditor.TEdit:4752
        m = (Tonyu.globals.$editorSet&&Tonyu.globals.$editorSet.allModified())||[];
        
        //$LASTPOS=13004811;//jseditor.TEdit:4811
        if (m.length>0) {
          _thread.retVal="保存しないで終了しますか？: "+m.map((function anonymous_4869(f) {
            
            return f.name();
          })).join(",");return;
          
          
        }
        
        _thread.retVal=_this;return;
      },
      openFolder :function _trc_TEdit_openFolder() {
        "use strict";
        var _this=this;
        var f;
        
        //$LASTPOS=13004998;//jseditor.TEdit:4998
        f = Tonyu.globals.$editorSet.curFile||_this.fl.lastSelected;
        
        //$LASTPOS=13005048;//jseditor.TEdit:5048
        console.log(f);
        //$LASTPOS=13005069;//jseditor.TEdit:5069
        if (f) {
          //$LASTPOS=13005087;//jseditor.TEdit:5087
          console.log(f.path());
          //$LASTPOS=13005119;//jseditor.TEdit:5119
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
        
        //$LASTPOS=13004998;//jseditor.TEdit:4998
        f = Tonyu.globals.$editorSet.curFile||_this.fl.lastSelected;
        
        //$LASTPOS=13005048;//jseditor.TEdit:5048
        console.log(f);
        //$LASTPOS=13005069;//jseditor.TEdit:5069
        if (f) {
          //$LASTPOS=13005087;//jseditor.TEdit:5087
          console.log(f.path());
          //$LASTPOS=13005119;//jseditor.TEdit:5119
          _this.gui.Shell.showItemInFolder(f.path().replace(/\//g,"\\"));
          _thread.retVal=_this;return;
          
          
        }
        
        _thread.retVal=_this;return;
      },
      __dummy: false
    },
    decls: {"methods":{"main":{"nowait":false},"runApp":{"nowait":false},"runHTML":{"nowait":false},"setEtc":{"nowait":false},"setEtcP":{"nowait":false},"sync":{"nowait":false},"tonyuC":{"nowait":false},"newWindow":{"nowait":false},"newWindowHome":{"nowait":false},"onResize":{"nowait":false},"shouldConfirmClose":{"nowait":false},"openFolder":{"nowait":false}}}
  });
});