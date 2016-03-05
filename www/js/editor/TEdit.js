define(function (require) {
  var Tonyu=require('Tonyu');
  var Columns=require('Columns');
  var Util=require('Util');
  var FileList=require('FileList');
  var ace=require('ace');
  var Base=require('Base');
  var TMenu=require('TMenu');
  var Etc=require('Etc');
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
        
        //$LASTPOS=10000214;//jseditor.TEdit:214
        Columns.make(["div",{id: "fileViewer","class": "col-xs-3"},["div",{id: "fileItemList"}]],["div",{id: "mainArea","class": "col-xs-9"},["div",{id: "fileLabel"},"."],["div",{id: "progs"}]]);
        
        //$LASTPOS=10000467;//jseditor.TEdit:467
        (new Tonyu.classes.jseditor.TMenu).make("JS Editor",[{label: "Home",href: "index.html"},{label: "ファイル",sub: [{label: "新規",id: "newFile",action: "$fileMenu.create"},{label: "名前変更",id: "mvFile",action: "$fileMenu.rename"},{label: "上書き保存",id: "saveFile",action: "$editorSet.save",key: "ctrl+s"},{label: "コピー",id: "cpFile"},{label: "閉じる",id: "closeFile",action: "$editorSet.close"},{label: "削除",id: "rmFile",action: "$fileMenu.remove"}]},{label: "ツール",sub: [{label: "TonyuC",id: "tonyuC",action: Tonyu.bindFunc(_this,_this.tonyuC),key: "f9"}]},{label: "ウィンドウ",sub: [{label: "新規ウィンドウ",id: "newWindow",action: Tonyu.bindFunc(_this,_this.newWindow)},{label: "ブックマーク...",id: "bookmark",action: "$bookmark.open"}]},{label: "設定",sub: [{label: "エディタの文字の大きさ...",id: "textsize",action: Tonyu.bindFunc(_this,_this.textSize)},{label: "ワークスペース切り替え...",id: "setEtc",action: Tonyu.bindFunc(_this,_this.setEtc)}]}]);
        
        
        //$LASTPOS=10001635;//jseditor.TEdit:1635
        _this.etc = new Tonyu.classes.jseditor.Etc;
        
        //$LASTPOS=10001653;//jseditor.TEdit:1653
        _this.prjs = _this.readJSON(_this.etc.rel("projects.json"));
        
        //$LASTPOS=10001699;//jseditor.TEdit:1699
        _this.prj = new Tonyu.classes.jseditor.JSEProject(_this.prjs,Util.getQueryString("prj"));
        
        //$LASTPOS=10001758;//jseditor.TEdit:1758
        Tonyu.globals.$jsePrj=_this.prj;
        //$LASTPOS=10001813;//jseditor.TEdit:1813
        _this.tc = new Tonyu.classes.jseditor.TonyuC(_this.prj);
        
        //$LASTPOS=10001838;//jseditor.TEdit:1838
        _this.desktopEnvFile = _this.etc.rel("desktop.json");
        
        //$LASTPOS=10001883;//jseditor.TEdit:1883
        _this.desktopEnv = _this.readJSON(_this.desktopEnvFile);
        
        //$LASTPOS=10001925;//jseditor.TEdit:1925
        _this.fl = Tonyu.globals.$fileList=new FileList($("#fileItemList"),{open: (function anonymous_1987(f) {
          
          //$LASTPOS=10002011;//jseditor.TEdit:2011
          console.log("opening",f);
          //$LASTPOS=10002046;//jseditor.TEdit:2046
          _this.es.save();
          //$LASTPOS=10002066;//jseditor.TEdit:2066
          _this.es.open(f);
        })});
        
        //$LASTPOS=10002090;//jseditor.TEdit:2090
        Tonyu.globals.$bookmark=new Tonyu.classes.jseditor.Bookmark({file: _this.etc.rel("bookmark.json"),fileList: _this.fl});
        
        //$LASTPOS=10003307;//jseditor.TEdit:3307
        _this.onResize();
        //$LASTPOS=10003320;//jseditor.TEdit:3320
        $(window).resize(Tonyu.bindFunc(_this,_this.onResize));
        //$LASTPOS=10003349;//jseditor.TEdit:3349
        requirejs(["ace"],(function anonymous_3367() {
          
          //$LASTPOS=10003385;//jseditor.TEdit:3385
          console.log("ace loaded:",ace);
          //$LASTPOS=10003422;//jseditor.TEdit:3422
          Tonyu.globals.$editorSet=_this.es=new Tonyu.classes.jseditor.TEditorSet($("#progs"),$("#fileLabel"),{height: _this.editorH,fontSize: (_this.desktopEnv&&_this.desktopEnv.editorFontSize||12)});
          //$LASTPOS=10003591;//jseditor.TEdit:3591
          Tonyu.globals.$finder=new Tonyu.classes.jseditor.Finder;
          //$LASTPOS=10003616;//jseditor.TEdit:3616
          if (typeof  _this.SplashScreen!="undefined") {
            //$LASTPOS=10003654;//jseditor.TEdit:3654
            _this.SplashScreen.hide();
          }
          //$LASTPOS=10003680;//jseditor.TEdit:3680
          Tonyu.globals.$fileMenu=_this.fileMenu=new Tonyu.classes.jseditor.FileMenu({editorSet: _this.es,fileList: _this.fl});
          return _this.fl.open(_this.prj.path);
        }));
        //$LASTPOS=10003994;//jseditor.TEdit:3994
        $(window).on("beforeunload",(function anonymous_4023(e) {
          var s;
          
          //$LASTPOS=10004035;//jseditor.TEdit:4035
          s = _this.shouldConfirmClose();
          
          //$LASTPOS=10004068;//jseditor.TEdit:4068
          if (s) {
            return s;
            
          } else {
            //$LASTPOS=10004119;//jseditor.TEdit:4119
            e.preventDefault();
            
          }
        }));
        //$LASTPOS=10004151;//jseditor.TEdit:4151
        _this.gui = nwDispatcher.requireNwGui();
        
        //$LASTPOS=10004192;//jseditor.TEdit:4192
        _this.win = _this.gui.Window.get();
        
        //$LASTPOS=10004221;//jseditor.TEdit:4221
        _this.win.on('close',(function anonymous_4237() {
          var s;
          
          //$LASTPOS=10004255;//jseditor.TEdit:4255
          s = _this.shouldConfirmClose();
          
          //$LASTPOS=10004288;//jseditor.TEdit:4288
          if (s) {
            //$LASTPOS=10004306;//jseditor.TEdit:4306
            if (window.confirm(s)) {
              //$LASTPOS=10004343;//jseditor.TEdit:4343
              _this.win.close(true);
              
            }
            
          } else {
            //$LASTPOS=10004394;//jseditor.TEdit:4394
            _this.win.close(true);
            
          }
        }));
      },
      fiber$main :function _trc_TEdit_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=10000214;//jseditor.TEdit:214
        Columns.make(["div",{id: "fileViewer","class": "col-xs-3"},["div",{id: "fileItemList"}]],["div",{id: "mainArea","class": "col-xs-9"},["div",{id: "fileLabel"},"."],["div",{id: "progs"}]]);
        
        //$LASTPOS=10000467;//jseditor.TEdit:467
        (new Tonyu.classes.jseditor.TMenu).make("JS Editor",[{label: "Home",href: "index.html"},{label: "ファイル",sub: [{label: "新規",id: "newFile",action: "$fileMenu.create"},{label: "名前変更",id: "mvFile",action: "$fileMenu.rename"},{label: "上書き保存",id: "saveFile",action: "$editorSet.save",key: "ctrl+s"},{label: "コピー",id: "cpFile"},{label: "閉じる",id: "closeFile",action: "$editorSet.close"},{label: "削除",id: "rmFile",action: "$fileMenu.remove"}]},{label: "ツール",sub: [{label: "TonyuC",id: "tonyuC",action: Tonyu.bindFunc(_this,_this.tonyuC),key: "f9"}]},{label: "ウィンドウ",sub: [{label: "新規ウィンドウ",id: "newWindow",action: Tonyu.bindFunc(_this,_this.newWindow)},{label: "ブックマーク...",id: "bookmark",action: "$bookmark.open"}]},{label: "設定",sub: [{label: "エディタの文字の大きさ...",id: "textsize",action: Tonyu.bindFunc(_this,_this.textSize)},{label: "ワークスペース切り替え...",id: "setEtc",action: Tonyu.bindFunc(_this,_this.setEtc)}]}]);
        
        
        //$LASTPOS=10001635;//jseditor.TEdit:1635
        _this.etc = new Tonyu.classes.jseditor.Etc;
        
        
        _thread.enter(function _trc_TEdit_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=10001653;//jseditor.TEdit:1653
              _this.fiber$readJSON(_thread, _this.etc.rel("projects.json"));
              __pc=1;return;
            case 1:
              _this.prjs=_thread.retVal;
              
              //$LASTPOS=10001699;//jseditor.TEdit:1699
              _this.prj = new Tonyu.classes.jseditor.JSEProject(_this.prjs,Util.getQueryString("prj"));
              
              //$LASTPOS=10001758;//jseditor.TEdit:1758
              Tonyu.globals.$jsePrj=_this.prj;
              //$LASTPOS=10001813;//jseditor.TEdit:1813
              _this.tc = new Tonyu.classes.jseditor.TonyuC(_this.prj);
              
              //$LASTPOS=10001838;//jseditor.TEdit:1838
              _this.desktopEnvFile = _this.etc.rel("desktop.json");
              
              //$LASTPOS=10001883;//jseditor.TEdit:1883
              _this.fiber$readJSON(_thread, _this.desktopEnvFile);
              __pc=2;return;
            case 2:
              _this.desktopEnv=_thread.retVal;
              
              //$LASTPOS=10001925;//jseditor.TEdit:1925
              _this.fl = Tonyu.globals.$fileList=new FileList($("#fileItemList"),{open: (function anonymous_1987(f) {
                
                //$LASTPOS=10002011;//jseditor.TEdit:2011
                console.log("opening",f);
                //$LASTPOS=10002046;//jseditor.TEdit:2046
                _this.es.save();
                //$LASTPOS=10002066;//jseditor.TEdit:2066
                _this.es.open(f);
              })});
              
              //$LASTPOS=10002090;//jseditor.TEdit:2090
              Tonyu.globals.$bookmark=new Tonyu.classes.jseditor.Bookmark({file: _this.etc.rel("bookmark.json"),fileList: _this.fl});
              
              //$LASTPOS=10003307;//jseditor.TEdit:3307
              _this.fiber$onResize(_thread);
              __pc=3;return;
            case 3:
              
              //$LASTPOS=10003320;//jseditor.TEdit:3320
              $(window).resize(Tonyu.bindFunc(_this,_this.onResize));
              //$LASTPOS=10003349;//jseditor.TEdit:3349
              requirejs(["ace"],(function anonymous_3367() {
                
                //$LASTPOS=10003385;//jseditor.TEdit:3385
                console.log("ace loaded:",ace);
                //$LASTPOS=10003422;//jseditor.TEdit:3422
                Tonyu.globals.$editorSet=_this.es=new Tonyu.classes.jseditor.TEditorSet($("#progs"),$("#fileLabel"),{height: _this.editorH,fontSize: (_this.desktopEnv&&_this.desktopEnv.editorFontSize||12)});
                //$LASTPOS=10003591;//jseditor.TEdit:3591
                Tonyu.globals.$finder=new Tonyu.classes.jseditor.Finder;
                //$LASTPOS=10003616;//jseditor.TEdit:3616
                if (typeof  _this.SplashScreen!="undefined") {
                  //$LASTPOS=10003654;//jseditor.TEdit:3654
                  _this.SplashScreen.hide();
                }
                //$LASTPOS=10003680;//jseditor.TEdit:3680
                Tonyu.globals.$fileMenu=_this.fileMenu=new Tonyu.classes.jseditor.FileMenu({editorSet: _this.es,fileList: _this.fl});
                return _this.fl.open(_this.prj.path);
              }));
              //$LASTPOS=10003994;//jseditor.TEdit:3994
              $(window).on("beforeunload",(function anonymous_4023(e) {
                var s;
                
                //$LASTPOS=10004035;//jseditor.TEdit:4035
                s = _this.shouldConfirmClose();
                
                //$LASTPOS=10004068;//jseditor.TEdit:4068
                if (s) {
                  return s;
                  
                } else {
                  //$LASTPOS=10004119;//jseditor.TEdit:4119
                  e.preventDefault();
                  
                }
              }));
              //$LASTPOS=10004151;//jseditor.TEdit:4151
              _this.gui = nwDispatcher.requireNwGui();
              
              //$LASTPOS=10004192;//jseditor.TEdit:4192
              _this.win = _this.gui.Window.get();
              
              //$LASTPOS=10004221;//jseditor.TEdit:4221
              _this.win.on('close',(function anonymous_4237() {
                var s;
                
                //$LASTPOS=10004255;//jseditor.TEdit:4255
                s = _this.shouldConfirmClose();
                
                //$LASTPOS=10004288;//jseditor.TEdit:4288
                if (s) {
                  //$LASTPOS=10004306;//jseditor.TEdit:4306
                  if (window.confirm(s)) {
                    //$LASTPOS=10004343;//jseditor.TEdit:4343
                    _this.win.close(true);
                    
                  }
                  
                } else {
                  //$LASTPOS=10004394;//jseditor.TEdit:4394
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
        
        //$LASTPOS=10000190;//jseditor.TEdit:190
        _this.parallel("main");
      },
      fiber$runApp :function _trc_TEdit_f_runApp(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=10000190;//jseditor.TEdit:190
        _this.parallel("main");
        
        _thread.retVal=_this;return;
      },
      setEtc :function _trc_TEdit_setEtc() {
        "use strict";
        var _this=this;
        
        //$LASTPOS=10002189;//jseditor.TEdit:2189
        _this.parallel(Tonyu.bindFunc(_this,_this.setEtcP));
      },
      fiber$setEtc :function _trc_TEdit_f_setEtc(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=10002189;//jseditor.TEdit:2189
        _this.parallel(Tonyu.bindFunc(_this,_this.setEtcP));
        
        _thread.retVal=_this;return;
      },
      setEtcP :function _trc_TEdit_setEtcP() {
        "use strict";
        var _this=this;
        var np;
        
        //$LASTPOS=10002230;//jseditor.TEdit:2230
        np = _this.prompt("ワークスペースのディレクトリ",_this.etc.path());
        
        //$LASTPOS=10002280;//jseditor.TEdit:2280
        if (np) {
          //$LASTPOS=10002299;//jseditor.TEdit:2299
          localStorage.etc=np;
          //$LASTPOS=10002329;//jseditor.TEdit:2329
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
              //$LASTPOS=10002230;//jseditor.TEdit:2230
              _this.fiber$prompt(_thread, "ワークスペースのディレクトリ", _this.etc.path());
              __pc=1;return;
            case 1:
              np=_thread.retVal;
              
              //$LASTPOS=10002280;//jseditor.TEdit:2280
              if (np) {
                //$LASTPOS=10002299;//jseditor.TEdit:2299
                localStorage.etc=np;
                //$LASTPOS=10002329;//jseditor.TEdit:2329
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
        
        //$LASTPOS=10002384;//jseditor.TEdit:2384
        _this.tc.parallel("compile");
      },
      fiber$tonyuC :function _trc_TEdit_f_tonyuC(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=10002384;//jseditor.TEdit:2384
        _this.tc.parallel("compile");
        
        _thread.retVal=_this;return;
      },
      newWindow :function _trc_TEdit_newWindow() {
        "use strict";
        var _this=this;
        var genID;
        
        //$LASTPOS=10002440;//jseditor.TEdit:2440
        genID = ""+Math.random();
        
        //$LASTPOS=10002473;//jseditor.TEdit:2473
        window.open(location.href,genID,'width=800,height=400,menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes');
      },
      fiber$newWindow :function _trc_TEdit_f_newWindow(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var genID;
        
        //$LASTPOS=10002440;//jseditor.TEdit:2440
        genID = ""+Math.random();
        
        //$LASTPOS=10002473;//jseditor.TEdit:2473
        window.open(location.href,genID,'width=800,height=400,menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes');
        
        _thread.retVal=_this;return;
      },
      textSize :function _trc_TEdit_textSize() {
        "use strict";
        var _this=this;
        
        //$LASTPOS=10002632;//jseditor.TEdit:2632
        _this.parallel("textSizeP");
      },
      fiber$textSize :function _trc_TEdit_f_textSize(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=10002632;//jseditor.TEdit:2632
        _this.parallel("textSizeP");
        
        _thread.retVal=_this;return;
      },
      textSizeP :function _trc_TEdit_textSizeP() {
        "use strict";
        var _this=this;
        var s;
        
        //$LASTPOS=10002687;//jseditor.TEdit:2687
        s = _this.prompt("エディタの文字の大きさ",_this.desktopEnv.editorFontSize||12);
        
        //$LASTPOS=10002780;//jseditor.TEdit:2780
        _this.desktopEnv.editorFontSize=window.parseInt(s);
        //$LASTPOS=10002831;//jseditor.TEdit:2831
        if (_this.es) {
          //$LASTPOS=10002839;//jseditor.TEdit:2839
          _this.es.setFontSize(_this.desktopEnv.editorFontSize||12);
        }
        return _this.writeJSON(_this.desktopEnvFile,_this.desktopEnv);
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
              //$LASTPOS=10002687;//jseditor.TEdit:2687
              _this.fiber$prompt(_thread, "エディタの文字の大きさ", _this.desktopEnv.editorFontSize||12);
              __pc=1;return;
            case 1:
              s=_thread.retVal;
              
              //$LASTPOS=10002780;//jseditor.TEdit:2780
              _this.desktopEnv.editorFontSize=window.parseInt(s);
              //$LASTPOS=10002831;//jseditor.TEdit:2831
              if (_this.es) {
                //$LASTPOS=10002839;//jseditor.TEdit:2839
                _this.es.setFontSize(_this.desktopEnv.editorFontSize||12);
              }
              _thread.exit(_this.writeJSON(_this.desktopEnvFile,_this.desktopEnv));return;
              _thread.exit(_this);return;
            }
          }
        });
      },
      onResize :function _trc_TEdit_onResize() {
        "use strict";
        var _this=this;
        var h;
        
        //$LASTPOS=10002990;//jseditor.TEdit:2990
        h = $(window).height()-$("#navBar").height()-$("#tabTop").height();
        
        //$LASTPOS=10003065;//jseditor.TEdit:3065
        h-=20;
        //$LASTPOS=10003077;//jseditor.TEdit:3077
        _this.screenH=h;
        //$LASTPOS=10003093;//jseditor.TEdit:3093
        _this.editorH=_this.screenH-$("#fileLabel").height();
        //$LASTPOS=10003140;//jseditor.TEdit:3140
        if (_this.es) {
          //$LASTPOS=10003148;//jseditor.TEdit:3148
          _this.es.options.height=_this.editorH;
        }
        //$LASTPOS=10003180;//jseditor.TEdit:3180
        $("#progs pre").css("height",_this.editorH+"px");
        //$LASTPOS=10003229;//jseditor.TEdit:3229
        console.log("canvas size",h,_this.editorH);
        //$LASTPOS=10003273;//jseditor.TEdit:3273
        $("#fileItemList").height(h);
      },
      fiber$onResize :function _trc_TEdit_f_onResize(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var h;
        
        //$LASTPOS=10002990;//jseditor.TEdit:2990
        h = $(window).height()-$("#navBar").height()-$("#tabTop").height();
        
        //$LASTPOS=10003065;//jseditor.TEdit:3065
        h-=20;
        //$LASTPOS=10003077;//jseditor.TEdit:3077
        _this.screenH=h;
        //$LASTPOS=10003093;//jseditor.TEdit:3093
        _this.editorH=_this.screenH-$("#fileLabel").height();
        //$LASTPOS=10003140;//jseditor.TEdit:3140
        if (_this.es) {
          //$LASTPOS=10003148;//jseditor.TEdit:3148
          _this.es.options.height=_this.editorH;
        }
        //$LASTPOS=10003180;//jseditor.TEdit:3180
        $("#progs pre").css("height",_this.editorH+"px");
        //$LASTPOS=10003229;//jseditor.TEdit:3229
        console.log("canvas size",h,_this.editorH);
        //$LASTPOS=10003273;//jseditor.TEdit:3273
        $("#fileItemList").height(h);
        
        _thread.retVal=_this;return;
      },
      shouldConfirmClose :function _trc_TEdit_shouldConfirmClose() {
        "use strict";
        var _this=this;
        var m;
        
        //$LASTPOS=10003807;//jseditor.TEdit:3807
        m = (Tonyu.globals.$editorSet&&Tonyu.globals.$editorSet.allModified())||[];
        
        //$LASTPOS=10003866;//jseditor.TEdit:3866
        if (m.length>0) {
          return "保存しないで終了しますか？: "+m.map((function anonymous_3924(f) {
            
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
        
        //$LASTPOS=10003807;//jseditor.TEdit:3807
        m = (Tonyu.globals.$editorSet&&Tonyu.globals.$editorSet.allModified())||[];
        
        //$LASTPOS=10003866;//jseditor.TEdit:3866
        if (m.length>0) {
          _thread.retVal="保存しないで終了しますか？: "+m.map((function anonymous_3924(f) {
            
            return f.name();
          })).join(",");return;
          
          
        }
        
        _thread.retVal=_this;return;
      },
      __dummy: false
    },
    decls: {"methods":{"main":{"nowait":false},"runApp":{"nowait":false},"setEtc":{"nowait":false},"setEtcP":{"nowait":false},"tonyuC":{"nowait":false},"newWindow":{"nowait":false},"textSize":{"nowait":false},"textSizeP":{"nowait":false},"onResize":{"nowait":false},"shouldConfirmClose":{"nowait":false}}}
  });
});