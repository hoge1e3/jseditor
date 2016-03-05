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
        
        //$LASTPOS=13000214;//jseditor.TEdit:214
        Columns.make(["div",{id: "fileViewer","class": "col-xs-3"},["div",{id: "fileItemList"}]],["div",{id: "mainArea","class": "col-xs-9"},["div",{id: "fileLabel"},"."],["div",{id: "progs"}]]);
        
        //$LASTPOS=13000467;//jseditor.TEdit:467
        (new Tonyu.classes.jseditor.TMenu).make("JS Editor",[{label: "Home",href: "index.html"},{label: "ファイル",sub: [{label: "新規",id: "newFile",action: "$fileMenu.create"},{label: "名前変更",id: "mvFile",action: "$fileMenu.rename"},{label: "上書き保存",id: "saveFile",action: "$editorSet.save",key: "ctrl+s"},{label: "コピー",id: "cpFile"},{label: "閉じる",id: "closeFile",action: "$editorSet.close"},{label: "削除",id: "rmFile",action: "$fileMenu.remove"}]},{label: "ツール",sub: [{label: "TonyuC",id: "tonyuC",action: Tonyu.bindFunc(_this,_this.tonyuC),key: "f9"}]},{label: "ウィンドウ",sub: [{label: "新規ウィンドウ",id: "newWindow",action: Tonyu.bindFunc(_this,_this.newWindow)},{label: "ブックマーク...",id: "bookmark",action: "$bookmark.open"}]},{label: "設定",sub: [{label: "環境設定...",id: "textsize",action: "$desktopEnvEditor.dialog"},{label: "ワークスペース切り替え...",id: "setEtc",action: Tonyu.bindFunc(_this,_this.setEtc)}]}]);
        
        
        //$LASTPOS=13001731;//jseditor.TEdit:1731
        _this.etc = new Tonyu.classes.jseditor.Etc;
        
        //$LASTPOS=13001749;//jseditor.TEdit:1749
        Tonyu.globals.$etc=_this.etc;
        //$LASTPOS=13001851;//jseditor.TEdit:1851
        Tonyu.globals.$desktopEnvEditor=new Tonyu.classes.jseditor.DesktopEnv;
        //$LASTPOS=13001886;//jseditor.TEdit:1886
        _this.update(10);
        //$LASTPOS=13001945;//jseditor.TEdit:1945
        _this.prjs = _this.readJSON(_this.etc.rel("projects.json"));
        
        //$LASTPOS=13001991;//jseditor.TEdit:1991
        _this.prj = new Tonyu.classes.jseditor.JSEProject(_this.prjs,Util.getQueryString("prj"));
        
        //$LASTPOS=13002050;//jseditor.TEdit:2050
        Tonyu.globals.$jsePrj=_this.prj;
        //$LASTPOS=13002105;//jseditor.TEdit:2105
        _this.tc = new Tonyu.classes.jseditor.TonyuC(_this.prj);
        
        //$LASTPOS=13002130;//jseditor.TEdit:2130
        _this.fl = Tonyu.globals.$fileList=new FileList($("#fileItemList"),{open: (function anonymous_2192(f) {
          
          //$LASTPOS=13002216;//jseditor.TEdit:2216
          console.log("opening",f);
          //$LASTPOS=13002251;//jseditor.TEdit:2251
          _this.es.save();
          //$LASTPOS=13002271;//jseditor.TEdit:2271
          _this.es.open(f);
        })});
        
        //$LASTPOS=13002295;//jseditor.TEdit:2295
        Tonyu.globals.$bookmark=new Tonyu.classes.jseditor.Bookmark({file: _this.etc.rel("bookmark.json"),fileList: _this.fl});
        
        //$LASTPOS=13003516;//jseditor.TEdit:3516
        _this.onResize();
        //$LASTPOS=13003529;//jseditor.TEdit:3529
        $(window).resize(Tonyu.bindFunc(_this,_this.onResize));
        //$LASTPOS=13003558;//jseditor.TEdit:3558
        requirejs(["ace"],(function anonymous_3576() {
          var desktopEnv;
          
          //$LASTPOS=13003594;//jseditor.TEdit:3594
          desktopEnv = Tonyu.globals.$desktopEnvEditor.model;
          
          //$LASTPOS=13003639;//jseditor.TEdit:3639
          _this.print("denv",desktopEnv&&desktopEnv.editorFontSize||12);
          //$LASTPOS=13003705;//jseditor.TEdit:3705
          console.log("ace loaded:",ace);
          //$LASTPOS=13003742;//jseditor.TEdit:3742
          Tonyu.globals.$editorSet=_this.es=new Tonyu.classes.jseditor.TEditorSet($("#progs"),$("#fileLabel"),{height: _this.editorH,fontSize: (desktopEnv&&desktopEnv.editorFontSize||12)});
          //$LASTPOS=13003911;//jseditor.TEdit:3911
          Tonyu.globals.$finder=new Tonyu.classes.jseditor.Finder;
          //$LASTPOS=13003936;//jseditor.TEdit:3936
          if (typeof  _this.SplashScreen!="undefined") {
            //$LASTPOS=13003974;//jseditor.TEdit:3974
            _this.SplashScreen.hide();
          }
          //$LASTPOS=13004000;//jseditor.TEdit:4000
          Tonyu.globals.$fileMenu=_this.fileMenu=new Tonyu.classes.jseditor.FileMenu({editorSet: _this.es,fileList: _this.fl});
          //$LASTPOS=13004066;//jseditor.TEdit:4066
          _this.fl.open(_this.prj.path);
          //$LASTPOS=13004096;//jseditor.TEdit:4096
          Tonyu.globals.$desktopEnvEditor.on("modelsaved",(function anonymous_4131(model) {
            
            //$LASTPOS=13004151;//jseditor.TEdit:4151
            _this.print("SAVED",model);
            //$LASTPOS=13004182;//jseditor.TEdit:4182
            Tonyu.globals.$editorSet.setFontSize(desktopEnv.editorFontSize);
          }));
        }));
        //$LASTPOS=13004463;//jseditor.TEdit:4463
        $(window).on("beforeunload",(function anonymous_4492(e) {
          var s;
          
          //$LASTPOS=13004504;//jseditor.TEdit:4504
          s = _this.shouldConfirmClose();
          
          //$LASTPOS=13004537;//jseditor.TEdit:4537
          if (s) {
            return s;
            
          } else {
            //$LASTPOS=13004588;//jseditor.TEdit:4588
            e.preventDefault();
            
          }
        }));
        //$LASTPOS=13004620;//jseditor.TEdit:4620
        _this.gui = nwDispatcher.requireNwGui();
        
        //$LASTPOS=13004661;//jseditor.TEdit:4661
        _this.win = _this.gui.Window.get();
        
        //$LASTPOS=13004690;//jseditor.TEdit:4690
        _this.win.on('close',(function anonymous_4706() {
          var s;
          
          //$LASTPOS=13004724;//jseditor.TEdit:4724
          s = _this.shouldConfirmClose();
          
          //$LASTPOS=13004757;//jseditor.TEdit:4757
          if (s) {
            //$LASTPOS=13004775;//jseditor.TEdit:4775
            if (window.confirm(s)) {
              //$LASTPOS=13004812;//jseditor.TEdit:4812
              _this.win.close(true);
              
            }
            
          } else {
            //$LASTPOS=13004863;//jseditor.TEdit:4863
            _this.win.close(true);
            
          }
        }));
      },
      fiber$main :function _trc_TEdit_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=13000214;//jseditor.TEdit:214
        Columns.make(["div",{id: "fileViewer","class": "col-xs-3"},["div",{id: "fileItemList"}]],["div",{id: "mainArea","class": "col-xs-9"},["div",{id: "fileLabel"},"."],["div",{id: "progs"}]]);
        
        //$LASTPOS=13000467;//jseditor.TEdit:467
        (new Tonyu.classes.jseditor.TMenu).make("JS Editor",[{label: "Home",href: "index.html"},{label: "ファイル",sub: [{label: "新規",id: "newFile",action: "$fileMenu.create"},{label: "名前変更",id: "mvFile",action: "$fileMenu.rename"},{label: "上書き保存",id: "saveFile",action: "$editorSet.save",key: "ctrl+s"},{label: "コピー",id: "cpFile"},{label: "閉じる",id: "closeFile",action: "$editorSet.close"},{label: "削除",id: "rmFile",action: "$fileMenu.remove"}]},{label: "ツール",sub: [{label: "TonyuC",id: "tonyuC",action: Tonyu.bindFunc(_this,_this.tonyuC),key: "f9"}]},{label: "ウィンドウ",sub: [{label: "新規ウィンドウ",id: "newWindow",action: Tonyu.bindFunc(_this,_this.newWindow)},{label: "ブックマーク...",id: "bookmark",action: "$bookmark.open"}]},{label: "設定",sub: [{label: "環境設定...",id: "textsize",action: "$desktopEnvEditor.dialog"},{label: "ワークスペース切り替え...",id: "setEtc",action: Tonyu.bindFunc(_this,_this.setEtc)}]}]);
        
        
        //$LASTPOS=13001731;//jseditor.TEdit:1731
        _this.etc = new Tonyu.classes.jseditor.Etc;
        
        //$LASTPOS=13001749;//jseditor.TEdit:1749
        Tonyu.globals.$etc=_this.etc;
        //$LASTPOS=13001851;//jseditor.TEdit:1851
        Tonyu.globals.$desktopEnvEditor=new Tonyu.classes.jseditor.DesktopEnv;
        
        _thread.enter(function _trc_TEdit_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=13001886;//jseditor.TEdit:1886
              _this.fiber$update(_thread, 10);
              __pc=1;return;
            case 1:
              
              //$LASTPOS=13001945;//jseditor.TEdit:1945
              _this.fiber$readJSON(_thread, _this.etc.rel("projects.json"));
              __pc=2;return;
            case 2:
              _this.prjs=_thread.retVal;
              
              //$LASTPOS=13001991;//jseditor.TEdit:1991
              _this.prj = new Tonyu.classes.jseditor.JSEProject(_this.prjs,Util.getQueryString("prj"));
              
              //$LASTPOS=13002050;//jseditor.TEdit:2050
              Tonyu.globals.$jsePrj=_this.prj;
              //$LASTPOS=13002105;//jseditor.TEdit:2105
              _this.tc = new Tonyu.classes.jseditor.TonyuC(_this.prj);
              
              //$LASTPOS=13002130;//jseditor.TEdit:2130
              _this.fl = Tonyu.globals.$fileList=new FileList($("#fileItemList"),{open: (function anonymous_2192(f) {
                
                //$LASTPOS=13002216;//jseditor.TEdit:2216
                console.log("opening",f);
                //$LASTPOS=13002251;//jseditor.TEdit:2251
                _this.es.save();
                //$LASTPOS=13002271;//jseditor.TEdit:2271
                _this.es.open(f);
              })});
              
              //$LASTPOS=13002295;//jseditor.TEdit:2295
              Tonyu.globals.$bookmark=new Tonyu.classes.jseditor.Bookmark({file: _this.etc.rel("bookmark.json"),fileList: _this.fl});
              
              //$LASTPOS=13003516;//jseditor.TEdit:3516
              _this.fiber$onResize(_thread);
              __pc=3;return;
            case 3:
              
              //$LASTPOS=13003529;//jseditor.TEdit:3529
              $(window).resize(Tonyu.bindFunc(_this,_this.onResize));
              //$LASTPOS=13003558;//jseditor.TEdit:3558
              requirejs(["ace"],(function anonymous_3576() {
                var desktopEnv;
                
                //$LASTPOS=13003594;//jseditor.TEdit:3594
                desktopEnv = Tonyu.globals.$desktopEnvEditor.model;
                
                //$LASTPOS=13003639;//jseditor.TEdit:3639
                _this.print("denv",desktopEnv&&desktopEnv.editorFontSize||12);
                //$LASTPOS=13003705;//jseditor.TEdit:3705
                console.log("ace loaded:",ace);
                //$LASTPOS=13003742;//jseditor.TEdit:3742
                Tonyu.globals.$editorSet=_this.es=new Tonyu.classes.jseditor.TEditorSet($("#progs"),$("#fileLabel"),{height: _this.editorH,fontSize: (desktopEnv&&desktopEnv.editorFontSize||12)});
                //$LASTPOS=13003911;//jseditor.TEdit:3911
                Tonyu.globals.$finder=new Tonyu.classes.jseditor.Finder;
                //$LASTPOS=13003936;//jseditor.TEdit:3936
                if (typeof  _this.SplashScreen!="undefined") {
                  //$LASTPOS=13003974;//jseditor.TEdit:3974
                  _this.SplashScreen.hide();
                }
                //$LASTPOS=13004000;//jseditor.TEdit:4000
                Tonyu.globals.$fileMenu=_this.fileMenu=new Tonyu.classes.jseditor.FileMenu({editorSet: _this.es,fileList: _this.fl});
                //$LASTPOS=13004066;//jseditor.TEdit:4066
                _this.fl.open(_this.prj.path);
                //$LASTPOS=13004096;//jseditor.TEdit:4096
                Tonyu.globals.$desktopEnvEditor.on("modelsaved",(function anonymous_4131(model) {
                  
                  //$LASTPOS=13004151;//jseditor.TEdit:4151
                  _this.print("SAVED",model);
                  //$LASTPOS=13004182;//jseditor.TEdit:4182
                  Tonyu.globals.$editorSet.setFontSize(desktopEnv.editorFontSize);
                }));
              }));
              //$LASTPOS=13004463;//jseditor.TEdit:4463
              $(window).on("beforeunload",(function anonymous_4492(e) {
                var s;
                
                //$LASTPOS=13004504;//jseditor.TEdit:4504
                s = _this.shouldConfirmClose();
                
                //$LASTPOS=13004537;//jseditor.TEdit:4537
                if (s) {
                  return s;
                  
                } else {
                  //$LASTPOS=13004588;//jseditor.TEdit:4588
                  e.preventDefault();
                  
                }
              }));
              //$LASTPOS=13004620;//jseditor.TEdit:4620
              _this.gui = nwDispatcher.requireNwGui();
              
              //$LASTPOS=13004661;//jseditor.TEdit:4661
              _this.win = _this.gui.Window.get();
              
              //$LASTPOS=13004690;//jseditor.TEdit:4690
              _this.win.on('close',(function anonymous_4706() {
                var s;
                
                //$LASTPOS=13004724;//jseditor.TEdit:4724
                s = _this.shouldConfirmClose();
                
                //$LASTPOS=13004757;//jseditor.TEdit:4757
                if (s) {
                  //$LASTPOS=13004775;//jseditor.TEdit:4775
                  if (window.confirm(s)) {
                    //$LASTPOS=13004812;//jseditor.TEdit:4812
                    _this.win.close(true);
                    
                  }
                  
                } else {
                  //$LASTPOS=13004863;//jseditor.TEdit:4863
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
        
        //$LASTPOS=13000190;//jseditor.TEdit:190
        _this.parallel("main");
      },
      fiber$runApp :function _trc_TEdit_f_runApp(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=13000190;//jseditor.TEdit:190
        _this.parallel("main");
        
        _thread.retVal=_this;return;
      },
      setEtc :function _trc_TEdit_setEtc() {
        "use strict";
        var _this=this;
        
        //$LASTPOS=13002394;//jseditor.TEdit:2394
        _this.parallel(Tonyu.bindFunc(_this,_this.setEtcP));
      },
      fiber$setEtc :function _trc_TEdit_f_setEtc(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=13002394;//jseditor.TEdit:2394
        _this.parallel(Tonyu.bindFunc(_this,_this.setEtcP));
        
        _thread.retVal=_this;return;
      },
      setEtcP :function _trc_TEdit_setEtcP() {
        "use strict";
        var _this=this;
        var np;
        
        //$LASTPOS=13002435;//jseditor.TEdit:2435
        np = _this.prompt("ワークスペースのディレクトリ",_this.etc.path());
        
        //$LASTPOS=13002485;//jseditor.TEdit:2485
        if (np) {
          //$LASTPOS=13002504;//jseditor.TEdit:2504
          localStorage.etc=np;
          //$LASTPOS=13002534;//jseditor.TEdit:2534
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
              //$LASTPOS=13002435;//jseditor.TEdit:2435
              _this.fiber$prompt(_thread, "ワークスペースのディレクトリ", _this.etc.path());
              __pc=1;return;
            case 1:
              np=_thread.retVal;
              
              //$LASTPOS=13002485;//jseditor.TEdit:2485
              if (np) {
                //$LASTPOS=13002504;//jseditor.TEdit:2504
                localStorage.etc=np;
                //$LASTPOS=13002534;//jseditor.TEdit:2534
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
        
        //$LASTPOS=13002589;//jseditor.TEdit:2589
        _this.tc.parallel("compile");
      },
      fiber$tonyuC :function _trc_TEdit_f_tonyuC(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=13002589;//jseditor.TEdit:2589
        _this.tc.parallel("compile");
        
        _thread.retVal=_this;return;
      },
      newWindow :function _trc_TEdit_newWindow() {
        "use strict";
        var _this=this;
        var genID;
        
        //$LASTPOS=13002645;//jseditor.TEdit:2645
        genID = ""+Math.random();
        
        //$LASTPOS=13002678;//jseditor.TEdit:2678
        window.open(location.href,genID,'width=800,height=400,menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes');
      },
      fiber$newWindow :function _trc_TEdit_f_newWindow(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var genID;
        
        //$LASTPOS=13002645;//jseditor.TEdit:2645
        genID = ""+Math.random();
        
        //$LASTPOS=13002678;//jseditor.TEdit:2678
        window.open(location.href,genID,'width=800,height=400,menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes');
        
        _thread.retVal=_this;return;
      },
      onResize :function _trc_TEdit_onResize() {
        "use strict";
        var _this=this;
        var h;
        
        //$LASTPOS=13003199;//jseditor.TEdit:3199
        h = $(window).height()-$("#navBar").height()-$("#tabTop").height();
        
        //$LASTPOS=13003274;//jseditor.TEdit:3274
        h-=20;
        //$LASTPOS=13003286;//jseditor.TEdit:3286
        _this.screenH=h;
        //$LASTPOS=13003302;//jseditor.TEdit:3302
        _this.editorH=_this.screenH-$("#fileLabel").height();
        //$LASTPOS=13003349;//jseditor.TEdit:3349
        if (_this.es) {
          //$LASTPOS=13003357;//jseditor.TEdit:3357
          _this.es.options.height=_this.editorH;
        }
        //$LASTPOS=13003389;//jseditor.TEdit:3389
        $("#progs pre").css("height",_this.editorH+"px");
        //$LASTPOS=13003438;//jseditor.TEdit:3438
        console.log("canvas size",h,_this.editorH);
        //$LASTPOS=13003482;//jseditor.TEdit:3482
        $("#fileItemList").height(h);
      },
      fiber$onResize :function _trc_TEdit_f_onResize(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var h;
        
        //$LASTPOS=13003199;//jseditor.TEdit:3199
        h = $(window).height()-$("#navBar").height()-$("#tabTop").height();
        
        //$LASTPOS=13003274;//jseditor.TEdit:3274
        h-=20;
        //$LASTPOS=13003286;//jseditor.TEdit:3286
        _this.screenH=h;
        //$LASTPOS=13003302;//jseditor.TEdit:3302
        _this.editorH=_this.screenH-$("#fileLabel").height();
        //$LASTPOS=13003349;//jseditor.TEdit:3349
        if (_this.es) {
          //$LASTPOS=13003357;//jseditor.TEdit:3357
          _this.es.options.height=_this.editorH;
        }
        //$LASTPOS=13003389;//jseditor.TEdit:3389
        $("#progs pre").css("height",_this.editorH+"px");
        //$LASTPOS=13003438;//jseditor.TEdit:3438
        console.log("canvas size",h,_this.editorH);
        //$LASTPOS=13003482;//jseditor.TEdit:3482
        $("#fileItemList").height(h);
        
        _thread.retVal=_this;return;
      },
      shouldConfirmClose :function _trc_TEdit_shouldConfirmClose() {
        "use strict";
        var _this=this;
        var m;
        
        //$LASTPOS=13004276;//jseditor.TEdit:4276
        m = (Tonyu.globals.$editorSet&&Tonyu.globals.$editorSet.allModified())||[];
        
        //$LASTPOS=13004335;//jseditor.TEdit:4335
        if (m.length>0) {
          return "保存しないで終了しますか？: "+m.map((function anonymous_4393(f) {
            
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
        
        //$LASTPOS=13004276;//jseditor.TEdit:4276
        m = (Tonyu.globals.$editorSet&&Tonyu.globals.$editorSet.allModified())||[];
        
        //$LASTPOS=13004335;//jseditor.TEdit:4335
        if (m.length>0) {
          _thread.retVal="保存しないで終了しますか？: "+m.map((function anonymous_4393(f) {
            
            return f.name();
          })).join(",");return;
          
          
        }
        
        _thread.retVal=_this;return;
      },
      __dummy: false
    },
    decls: {"methods":{"main":{"nowait":false},"runApp":{"nowait":false},"setEtc":{"nowait":false},"setEtcP":{"nowait":false},"tonyuC":{"nowait":false},"newWindow":{"nowait":false},"onResize":{"nowait":false},"shouldConfirmClose":{"nowait":false}}}
  });
});