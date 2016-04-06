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
        //$LASTPOS=13001760;//jseditor.TEdit:1760
        Tonyu.globals.$desktopEnvEditor=new Tonyu.classes.jseditor.DesktopEnv;
        //$LASTPOS=13001795;//jseditor.TEdit:1795
        _this.update(10);
        //$LASTPOS=13001810;//jseditor.TEdit:1810
        _this.prjs = _this.readJSON(_this.etc.rel("projects.json"));
        
        //$LASTPOS=13001856;//jseditor.TEdit:1856
        _this.prj = new Tonyu.classes.jseditor.JSEProject(_this.prjs,Util.getQueryString("prj"));
        
        //$LASTPOS=13001915;//jseditor.TEdit:1915
        Tonyu.globals.$jsePrj=_this.prj;
        //$LASTPOS=13001929;//jseditor.TEdit:1929
        $("title").text(Util.getQueryString("prj")+" - JS Editor");
        //$LASTPOS=13002031;//jseditor.TEdit:2031
        _this.tc = new Tonyu.classes.jseditor.TonyuC(_this.prj);
        
        //$LASTPOS=13002056;//jseditor.TEdit:2056
        _this.fl = Tonyu.globals.$fileList=new FileList($("#fileItemList"),{open: (function anonymous_2118(f) {
          
          //$LASTPOS=13002142;//jseditor.TEdit:2142
          console.log("opening",f);
          //$LASTPOS=13002177;//jseditor.TEdit:2177
          _this.es.save();
          //$LASTPOS=13002197;//jseditor.TEdit:2197
          _this.es.open(f);
        })});
        
        //$LASTPOS=13002221;//jseditor.TEdit:2221
        Tonyu.globals.$bookmark=new Tonyu.classes.jseditor.Bookmark({file: _this.etc.rel("bookmark.json"),fileList: _this.fl});
        
        //$LASTPOS=13003102;//jseditor.TEdit:3102
        _this.onResize();
        //$LASTPOS=13003115;//jseditor.TEdit:3115
        $(window).resize(Tonyu.bindFunc(_this,_this.onResize));
        //$LASTPOS=13003144;//jseditor.TEdit:3144
        requirejs(["ace"],(function anonymous_3162() {
          var desktopEnv;
          
          //$LASTPOS=13003180;//jseditor.TEdit:3180
          desktopEnv = Tonyu.globals.$desktopEnvEditor.model;
          
          //$LASTPOS=13003225;//jseditor.TEdit:3225
          _this.print("denv",desktopEnv&&desktopEnv.editorFontSize||12);
          //$LASTPOS=13003291;//jseditor.TEdit:3291
          console.log("ace loaded:",ace);
          //$LASTPOS=13003328;//jseditor.TEdit:3328
          Tonyu.globals.$editorSet=_this.es=new Tonyu.classes.jseditor.TEditorSet($("#progs"),$("#fileLabel"),{height: _this.editorH,fontSize: (desktopEnv&&desktopEnv.editorFontSize||12)});
          //$LASTPOS=13003497;//jseditor.TEdit:3497
          Tonyu.globals.$finder=new Tonyu.classes.jseditor.Finder;
          //$LASTPOS=13003522;//jseditor.TEdit:3522
          if (typeof  _this.SplashScreen!="undefined") {
            //$LASTPOS=13003560;//jseditor.TEdit:3560
            _this.SplashScreen.hide();
          }
          //$LASTPOS=13003586;//jseditor.TEdit:3586
          Tonyu.globals.$fileMenu=_this.fileMenu=new Tonyu.classes.jseditor.FileMenu({editorSet: _this.es,fileList: _this.fl});
          //$LASTPOS=13003652;//jseditor.TEdit:3652
          _this.fl.open(_this.prj.path);
          //$LASTPOS=13003682;//jseditor.TEdit:3682
          Tonyu.globals.$desktopEnvEditor.on("modelsaved",(function anonymous_3717(model) {
            
            //$LASTPOS=13003737;//jseditor.TEdit:3737
            _this.print("SAVED",model);
            //$LASTPOS=13003768;//jseditor.TEdit:3768
            Tonyu.globals.$editorSet.setFontSize(desktopEnv.editorFontSize);
          }));
        }));
        //$LASTPOS=13004049;//jseditor.TEdit:4049
        $(window).on("beforeunload",(function anonymous_4078(e) {
          var s;
          
          //$LASTPOS=13004090;//jseditor.TEdit:4090
          s = _this.shouldConfirmClose();
          
          //$LASTPOS=13004123;//jseditor.TEdit:4123
          if (s) {
            return s;
            
          } else {
            //$LASTPOS=13004174;//jseditor.TEdit:4174
            e.preventDefault();
            
          }
        }));
        //$LASTPOS=13004206;//jseditor.TEdit:4206
        _this.gui = nwDispatcher.requireNwGui();
        
        //$LASTPOS=13004247;//jseditor.TEdit:4247
        _this.win = _this.gui.Window.get();
        
        //$LASTPOS=13004276;//jseditor.TEdit:4276
        _this.win.on('close',(function anonymous_4292() {
          var s;
          
          //$LASTPOS=13004310;//jseditor.TEdit:4310
          s = _this.shouldConfirmClose();
          
          //$LASTPOS=13004343;//jseditor.TEdit:4343
          if (s) {
            //$LASTPOS=13004361;//jseditor.TEdit:4361
            if (window.confirm(s)) {
              //$LASTPOS=13004398;//jseditor.TEdit:4398
              _this.win.close(true);
              
            }
            
          } else {
            //$LASTPOS=13004449;//jseditor.TEdit:4449
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
        //$LASTPOS=13001760;//jseditor.TEdit:1760
        Tonyu.globals.$desktopEnvEditor=new Tonyu.classes.jseditor.DesktopEnv;
        
        _thread.enter(function _trc_TEdit_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=13001795;//jseditor.TEdit:1795
              _this.fiber$update(_thread, 10);
              __pc=1;return;
            case 1:
              
              //$LASTPOS=13001810;//jseditor.TEdit:1810
              _this.fiber$readJSON(_thread, _this.etc.rel("projects.json"));
              __pc=2;return;
            case 2:
              _this.prjs=_thread.retVal;
              
              //$LASTPOS=13001856;//jseditor.TEdit:1856
              _this.prj = new Tonyu.classes.jseditor.JSEProject(_this.prjs,Util.getQueryString("prj"));
              
              //$LASTPOS=13001915;//jseditor.TEdit:1915
              Tonyu.globals.$jsePrj=_this.prj;
              //$LASTPOS=13001929;//jseditor.TEdit:1929
              $("title").text(Util.getQueryString("prj")+" - JS Editor");
              //$LASTPOS=13002031;//jseditor.TEdit:2031
              _this.tc = new Tonyu.classes.jseditor.TonyuC(_this.prj);
              
              //$LASTPOS=13002056;//jseditor.TEdit:2056
              _this.fl = Tonyu.globals.$fileList=new FileList($("#fileItemList"),{open: (function anonymous_2118(f) {
                
                //$LASTPOS=13002142;//jseditor.TEdit:2142
                console.log("opening",f);
                //$LASTPOS=13002177;//jseditor.TEdit:2177
                _this.es.save();
                //$LASTPOS=13002197;//jseditor.TEdit:2197
                _this.es.open(f);
              })});
              
              //$LASTPOS=13002221;//jseditor.TEdit:2221
              Tonyu.globals.$bookmark=new Tonyu.classes.jseditor.Bookmark({file: _this.etc.rel("bookmark.json"),fileList: _this.fl});
              
              //$LASTPOS=13003102;//jseditor.TEdit:3102
              _this.fiber$onResize(_thread);
              __pc=3;return;
            case 3:
              
              //$LASTPOS=13003115;//jseditor.TEdit:3115
              $(window).resize(Tonyu.bindFunc(_this,_this.onResize));
              //$LASTPOS=13003144;//jseditor.TEdit:3144
              requirejs(["ace"],(function anonymous_3162() {
                var desktopEnv;
                
                //$LASTPOS=13003180;//jseditor.TEdit:3180
                desktopEnv = Tonyu.globals.$desktopEnvEditor.model;
                
                //$LASTPOS=13003225;//jseditor.TEdit:3225
                _this.print("denv",desktopEnv&&desktopEnv.editorFontSize||12);
                //$LASTPOS=13003291;//jseditor.TEdit:3291
                console.log("ace loaded:",ace);
                //$LASTPOS=13003328;//jseditor.TEdit:3328
                Tonyu.globals.$editorSet=_this.es=new Tonyu.classes.jseditor.TEditorSet($("#progs"),$("#fileLabel"),{height: _this.editorH,fontSize: (desktopEnv&&desktopEnv.editorFontSize||12)});
                //$LASTPOS=13003497;//jseditor.TEdit:3497
                Tonyu.globals.$finder=new Tonyu.classes.jseditor.Finder;
                //$LASTPOS=13003522;//jseditor.TEdit:3522
                if (typeof  _this.SplashScreen!="undefined") {
                  //$LASTPOS=13003560;//jseditor.TEdit:3560
                  _this.SplashScreen.hide();
                }
                //$LASTPOS=13003586;//jseditor.TEdit:3586
                Tonyu.globals.$fileMenu=_this.fileMenu=new Tonyu.classes.jseditor.FileMenu({editorSet: _this.es,fileList: _this.fl});
                //$LASTPOS=13003652;//jseditor.TEdit:3652
                _this.fl.open(_this.prj.path);
                //$LASTPOS=13003682;//jseditor.TEdit:3682
                Tonyu.globals.$desktopEnvEditor.on("modelsaved",(function anonymous_3717(model) {
                  
                  //$LASTPOS=13003737;//jseditor.TEdit:3737
                  _this.print("SAVED",model);
                  //$LASTPOS=13003768;//jseditor.TEdit:3768
                  Tonyu.globals.$editorSet.setFontSize(desktopEnv.editorFontSize);
                }));
              }));
              //$LASTPOS=13004049;//jseditor.TEdit:4049
              $(window).on("beforeunload",(function anonymous_4078(e) {
                var s;
                
                //$LASTPOS=13004090;//jseditor.TEdit:4090
                s = _this.shouldConfirmClose();
                
                //$LASTPOS=13004123;//jseditor.TEdit:4123
                if (s) {
                  return s;
                  
                } else {
                  //$LASTPOS=13004174;//jseditor.TEdit:4174
                  e.preventDefault();
                  
                }
              }));
              //$LASTPOS=13004206;//jseditor.TEdit:4206
              _this.gui = nwDispatcher.requireNwGui();
              
              //$LASTPOS=13004247;//jseditor.TEdit:4247
              _this.win = _this.gui.Window.get();
              
              //$LASTPOS=13004276;//jseditor.TEdit:4276
              _this.win.on('close',(function anonymous_4292() {
                var s;
                
                //$LASTPOS=13004310;//jseditor.TEdit:4310
                s = _this.shouldConfirmClose();
                
                //$LASTPOS=13004343;//jseditor.TEdit:4343
                if (s) {
                  //$LASTPOS=13004361;//jseditor.TEdit:4361
                  if (window.confirm(s)) {
                    //$LASTPOS=13004398;//jseditor.TEdit:4398
                    _this.win.close(true);
                    
                  }
                  
                } else {
                  //$LASTPOS=13004449;//jseditor.TEdit:4449
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
        
        //$LASTPOS=13002320;//jseditor.TEdit:2320
        _this.parallel(Tonyu.bindFunc(_this,_this.setEtcP));
      },
      fiber$setEtc :function _trc_TEdit_f_setEtc(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=13002320;//jseditor.TEdit:2320
        _this.parallel(Tonyu.bindFunc(_this,_this.setEtcP));
        
        _thread.retVal=_this;return;
      },
      setEtcP :function _trc_TEdit_setEtcP() {
        "use strict";
        var _this=this;
        var np;
        
        //$LASTPOS=13002361;//jseditor.TEdit:2361
        np = _this.prompt("ワークスペースのディレクトリ",_this.etc.path());
        
        //$LASTPOS=13002411;//jseditor.TEdit:2411
        if (np) {
          //$LASTPOS=13002430;//jseditor.TEdit:2430
          localStorage.etc=np;
          //$LASTPOS=13002460;//jseditor.TEdit:2460
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
              //$LASTPOS=13002361;//jseditor.TEdit:2361
              _this.fiber$prompt(_thread, "ワークスペースのディレクトリ", _this.etc.path());
              __pc=1;return;
            case 1:
              np=_thread.retVal;
              
              //$LASTPOS=13002411;//jseditor.TEdit:2411
              if (np) {
                //$LASTPOS=13002430;//jseditor.TEdit:2430
                localStorage.etc=np;
                //$LASTPOS=13002460;//jseditor.TEdit:2460
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
        
        //$LASTPOS=13002515;//jseditor.TEdit:2515
        _this.tc.parallel("compile");
      },
      fiber$tonyuC :function _trc_TEdit_f_tonyuC(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=13002515;//jseditor.TEdit:2515
        _this.tc.parallel("compile");
        
        _thread.retVal=_this;return;
      },
      newWindow :function _trc_TEdit_newWindow() {
        "use strict";
        var _this=this;
        var genID;
        
        //$LASTPOS=13002571;//jseditor.TEdit:2571
        genID = ""+Math.random();
        
        //$LASTPOS=13002604;//jseditor.TEdit:2604
        window.open(location.href,genID,'width=800,height=400,menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes');
      },
      fiber$newWindow :function _trc_TEdit_f_newWindow(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var genID;
        
        //$LASTPOS=13002571;//jseditor.TEdit:2571
        genID = ""+Math.random();
        
        //$LASTPOS=13002604;//jseditor.TEdit:2604
        window.open(location.href,genID,'width=800,height=400,menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes');
        
        _thread.retVal=_this;return;
      },
      onResize :function _trc_TEdit_onResize() {
        "use strict";
        var _this=this;
        var h;
        
        //$LASTPOS=13002785;//jseditor.TEdit:2785
        h = $(window).height()-$("#navBar").height()-$("#tabTop").height();
        
        //$LASTPOS=13002860;//jseditor.TEdit:2860
        h-=20;
        //$LASTPOS=13002872;//jseditor.TEdit:2872
        _this.screenH=h;
        //$LASTPOS=13002888;//jseditor.TEdit:2888
        _this.editorH=_this.screenH-$("#fileLabel").height();
        //$LASTPOS=13002935;//jseditor.TEdit:2935
        if (_this.es) {
          //$LASTPOS=13002943;//jseditor.TEdit:2943
          _this.es.options.height=_this.editorH;
        }
        //$LASTPOS=13002975;//jseditor.TEdit:2975
        $("#progs pre").css("height",_this.editorH+"px");
        //$LASTPOS=13003024;//jseditor.TEdit:3024
        console.log("canvas size",h,_this.editorH);
        //$LASTPOS=13003068;//jseditor.TEdit:3068
        $("#fileItemList").height(h);
      },
      fiber$onResize :function _trc_TEdit_f_onResize(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var h;
        
        //$LASTPOS=13002785;//jseditor.TEdit:2785
        h = $(window).height()-$("#navBar").height()-$("#tabTop").height();
        
        //$LASTPOS=13002860;//jseditor.TEdit:2860
        h-=20;
        //$LASTPOS=13002872;//jseditor.TEdit:2872
        _this.screenH=h;
        //$LASTPOS=13002888;//jseditor.TEdit:2888
        _this.editorH=_this.screenH-$("#fileLabel").height();
        //$LASTPOS=13002935;//jseditor.TEdit:2935
        if (_this.es) {
          //$LASTPOS=13002943;//jseditor.TEdit:2943
          _this.es.options.height=_this.editorH;
        }
        //$LASTPOS=13002975;//jseditor.TEdit:2975
        $("#progs pre").css("height",_this.editorH+"px");
        //$LASTPOS=13003024;//jseditor.TEdit:3024
        console.log("canvas size",h,_this.editorH);
        //$LASTPOS=13003068;//jseditor.TEdit:3068
        $("#fileItemList").height(h);
        
        _thread.retVal=_this;return;
      },
      shouldConfirmClose :function _trc_TEdit_shouldConfirmClose() {
        "use strict";
        var _this=this;
        var m;
        
        //$LASTPOS=13003862;//jseditor.TEdit:3862
        m = (Tonyu.globals.$editorSet&&Tonyu.globals.$editorSet.allModified())||[];
        
        //$LASTPOS=13003921;//jseditor.TEdit:3921
        if (m.length>0) {
          return "保存しないで終了しますか？: "+m.map((function anonymous_3979(f) {
            
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
        
        //$LASTPOS=13003862;//jseditor.TEdit:3862
        m = (Tonyu.globals.$editorSet&&Tonyu.globals.$editorSet.allModified())||[];
        
        //$LASTPOS=13003921;//jseditor.TEdit:3921
        if (m.length>0) {
          _thread.retVal="保存しないで終了しますか？: "+m.map((function anonymous_3979(f) {
            
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