define(function (require) {
  var Tonyu=require('Tonyu');
  var Columns=require('Columns');
  var Util=require('Util');
  var FileList=require('FileList');
  var ace=require('ace');
  var Finder=require('Finder');
  var Base=require('Base');
  var TMenu=require('TMenu');
  var Etc=require('Etc');
  var JSEProject=require('JSEProject');
  var ReqConfBuilder=require('ReqConfBuilder');
  var Bookmark=require('Bookmark');
  var TEditorSet=require('TEditorSet');
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
        
        //$LASTPOS=10000214;//jseditor.TEdit:214
        Columns.make(["div",{id: "fileViewer","class": "col-xs-3"},["div",{id: "fileItemList"}]],["div",{id: "mainArea","class": "col-xs-9"},["div",{id: "fileLabel"},"."],["div",{id: "progs"}]]);
        
        //$LASTPOS=10000467;//jseditor.TEdit:467
        (new Tonyu.classes.jseditor.TMenu).make("JS Editor!",[{label: "Home",href: "index.html"},{label: "ファイル",sub: [{label: "新規",id: "newFile",action: "$fileMenu.create"},{label: "名前変更",id: "mvFile",action: "$fileMenu.rename"},{label: "上書き保存",id: "saveFile",action: "$editorSet.save",key: "ctrl+s"},{label: "コピー",id: "cpFile"},{label: "削除",id: "rmFile",action: "$fileMenu.remove"}]},{label: "ツール",sub: [{label: "TonyuC",id: "tonyuC",action: Tonyu.bindFunc(_this,_this.tonyuC),key: "f9"}]},{label: "ウィンドウ",sub: [{label: "新規ウィンドウ",id: "newWindow",action: Tonyu.bindFunc(_this,_this.newWindow)},{label: "ブックマーク...",id: "bookmark",action: "$bookmark.open"}]},{label: "設定",sub: [{label: "エディタの文字の大きさ...",id: "textsize",action: Tonyu.bindFunc(_this,_this.textSize)},{label: "ワークスペース切り替え...",id: "setEtc",action: Tonyu.bindFunc(_this,_this.setEtc)}]}]);
        
        
        //$LASTPOS=10001571;//jseditor.TEdit:1571
        _this.etc = new Tonyu.classes.jseditor.Etc;
        
        //$LASTPOS=10001589;//jseditor.TEdit:1589
        _this.prjs = _this.waitFor(_this.etc.conf("projects.json").load());
        
        //$LASTPOS=10001642;//jseditor.TEdit:1642
        _this.prj = new Tonyu.classes.jseditor.JSEProject(_this.prjs,Util.getQueryString("prj"));
        
        //$LASTPOS=10001701;//jseditor.TEdit:1701
        _this.print(_this.prj);
        //$LASTPOS=10001919;//jseditor.TEdit:1919
        _this.desktopEnv = _this.etc.conf("desktop.json");
        
        //$LASTPOS=10001961;//jseditor.TEdit:1961
        Tonyu.globals.$reqConfBuilder=new Tonyu.classes.jseditor.ReqConfBuilder({output: _this.prj.reqConf,htmlDir: _this.prj.www});
        //$LASTPOS=10002096;//jseditor.TEdit:2096
        _this.desktopEnv.load();
        //$LASTPOS=10002116;//jseditor.TEdit:2116
        _this.fl = Tonyu.globals.$fileList=new FileList($("#fileItemList"),{open: (function anonymous_2178(f) {
          
          //$LASTPOS=10002202;//jseditor.TEdit:2202
          console.log("opening",f);
          //$LASTPOS=10002237;//jseditor.TEdit:2237
          _this.es.save();
          //$LASTPOS=10002257;//jseditor.TEdit:2257
          _this.es.open(f);
        })});
        
        //$LASTPOS=10002281;//jseditor.TEdit:2281
        Tonyu.globals.$bookmark=new Tonyu.classes.jseditor.Bookmark({file: _this.etc.rel("bookmark.json"),fileList: _this.fl});
        
        //$LASTPOS=10003554;//jseditor.TEdit:3554
        _this.onResize();
        //$LASTPOS=10003567;//jseditor.TEdit:3567
        $(window).resize(Tonyu.bindFunc(_this,_this.onResize));
        //$LASTPOS=10003596;//jseditor.TEdit:3596
        requirejs(["ace"],(function anonymous_3614() {
          
          //$LASTPOS=10003632;//jseditor.TEdit:3632
          console.log("ace loaded:",ace);
          //$LASTPOS=10003669;//jseditor.TEdit:3669
          Tonyu.globals.$editorSet=_this.es=new Tonyu.classes.jseditor.TEditorSet($("#progs"),$("#fileLabel"),{height: _this.editorH,fontSize: (_this.desktopEnv.data&&_this.desktopEnv.data.editorFontSize||12)});
          //$LASTPOS=10003848;//jseditor.TEdit:3848
          Tonyu.globals.$finder=new Finder(_this.es);
          //$LASTPOS=10003877;//jseditor.TEdit:3877
          if (typeof  _this.SplashScreen!="undefined") {
            //$LASTPOS=10003915;//jseditor.TEdit:3915
            _this.SplashScreen.hide();
          }
          //$LASTPOS=10003941;//jseditor.TEdit:3941
          Tonyu.globals.$fileMenu=_this.fileMenu=new Tonyu.classes.jseditor.FileMenu({editorSet: _this.es,fileList: _this.fl});
          return _this.fl.open(_this.prj.path);
        }));
        //$LASTPOS=10004255;//jseditor.TEdit:4255
        $(window).on("beforeunload",(function anonymous_4284(e) {
          var s;
          
          //$LASTPOS=10004296;//jseditor.TEdit:4296
          s = _this.shouldConfirmClose();
          
          //$LASTPOS=10004329;//jseditor.TEdit:4329
          if (s) {
            return s;
            
          } else {
            //$LASTPOS=10004380;//jseditor.TEdit:4380
            e.preventDefault();
            
          }
        }));
        //$LASTPOS=10004412;//jseditor.TEdit:4412
        _this.gui = nwDispatcher.requireNwGui();
        
        //$LASTPOS=10004453;//jseditor.TEdit:4453
        _this.win = _this.gui.Window.get();
        
        //$LASTPOS=10004482;//jseditor.TEdit:4482
        _this.win.on('close',(function anonymous_4498() {
          var s;
          
          //$LASTPOS=10004516;//jseditor.TEdit:4516
          s = _this.shouldConfirmClose();
          
          //$LASTPOS=10004549;//jseditor.TEdit:4549
          if (s) {
            //$LASTPOS=10004567;//jseditor.TEdit:4567
            if (window.confirm(s)) {
              //$LASTPOS=10004604;//jseditor.TEdit:4604
              _this.win.close(true);
              
            }
            
          } else {
            //$LASTPOS=10004655;//jseditor.TEdit:4655
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
        (new Tonyu.classes.jseditor.TMenu).make("JS Editor!",[{label: "Home",href: "index.html"},{label: "ファイル",sub: [{label: "新規",id: "newFile",action: "$fileMenu.create"},{label: "名前変更",id: "mvFile",action: "$fileMenu.rename"},{label: "上書き保存",id: "saveFile",action: "$editorSet.save",key: "ctrl+s"},{label: "コピー",id: "cpFile"},{label: "削除",id: "rmFile",action: "$fileMenu.remove"}]},{label: "ツール",sub: [{label: "TonyuC",id: "tonyuC",action: Tonyu.bindFunc(_this,_this.tonyuC),key: "f9"}]},{label: "ウィンドウ",sub: [{label: "新規ウィンドウ",id: "newWindow",action: Tonyu.bindFunc(_this,_this.newWindow)},{label: "ブックマーク...",id: "bookmark",action: "$bookmark.open"}]},{label: "設定",sub: [{label: "エディタの文字の大きさ...",id: "textsize",action: Tonyu.bindFunc(_this,_this.textSize)},{label: "ワークスペース切り替え...",id: "setEtc",action: Tonyu.bindFunc(_this,_this.setEtc)}]}]);
        
        
        //$LASTPOS=10001571;//jseditor.TEdit:1571
        _this.etc = new Tonyu.classes.jseditor.Etc;
        
        
        _thread.enter(function _trc_TEdit_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=10001589;//jseditor.TEdit:1589
              _this.fiber$waitFor(_thread, _this.etc.conf("projects.json").load());
              __pc=1;return;
            case 1:
              _this.prjs=_thread.retVal;
              
              //$LASTPOS=10001642;//jseditor.TEdit:1642
              _this.prj = new Tonyu.classes.jseditor.JSEProject(_this.prjs,Util.getQueryString("prj"));
              
              //$LASTPOS=10001701;//jseditor.TEdit:1701
              _this.fiber$print(_thread, _this.prj);
              __pc=2;return;
            case 2:
              
              //$LASTPOS=10001919;//jseditor.TEdit:1919
              _this.desktopEnv = _this.etc.conf("desktop.json");
              
              //$LASTPOS=10001961;//jseditor.TEdit:1961
              Tonyu.globals.$reqConfBuilder=new Tonyu.classes.jseditor.ReqConfBuilder({output: _this.prj.reqConf,htmlDir: _this.prj.www});
              //$LASTPOS=10002096;//jseditor.TEdit:2096
              _this.desktopEnv.load();
              //$LASTPOS=10002116;//jseditor.TEdit:2116
              _this.fl = Tonyu.globals.$fileList=new FileList($("#fileItemList"),{open: (function anonymous_2178(f) {
                
                //$LASTPOS=10002202;//jseditor.TEdit:2202
                console.log("opening",f);
                //$LASTPOS=10002237;//jseditor.TEdit:2237
                _this.es.save();
                //$LASTPOS=10002257;//jseditor.TEdit:2257
                _this.es.open(f);
              })});
              
              //$LASTPOS=10002281;//jseditor.TEdit:2281
              Tonyu.globals.$bookmark=new Tonyu.classes.jseditor.Bookmark({file: _this.etc.rel("bookmark.json"),fileList: _this.fl});
              
              //$LASTPOS=10003554;//jseditor.TEdit:3554
              _this.fiber$onResize(_thread);
              __pc=3;return;
            case 3:
              
              //$LASTPOS=10003567;//jseditor.TEdit:3567
              $(window).resize(Tonyu.bindFunc(_this,_this.onResize));
              //$LASTPOS=10003596;//jseditor.TEdit:3596
              requirejs(["ace"],(function anonymous_3614() {
                
                //$LASTPOS=10003632;//jseditor.TEdit:3632
                console.log("ace loaded:",ace);
                //$LASTPOS=10003669;//jseditor.TEdit:3669
                Tonyu.globals.$editorSet=_this.es=new Tonyu.classes.jseditor.TEditorSet($("#progs"),$("#fileLabel"),{height: _this.editorH,fontSize: (_this.desktopEnv.data&&_this.desktopEnv.data.editorFontSize||12)});
                //$LASTPOS=10003848;//jseditor.TEdit:3848
                Tonyu.globals.$finder=new Finder(_this.es);
                //$LASTPOS=10003877;//jseditor.TEdit:3877
                if (typeof  _this.SplashScreen!="undefined") {
                  //$LASTPOS=10003915;//jseditor.TEdit:3915
                  _this.SplashScreen.hide();
                }
                //$LASTPOS=10003941;//jseditor.TEdit:3941
                Tonyu.globals.$fileMenu=_this.fileMenu=new Tonyu.classes.jseditor.FileMenu({editorSet: _this.es,fileList: _this.fl});
                return _this.fl.open(_this.prj.path);
              }));
              //$LASTPOS=10004255;//jseditor.TEdit:4255
              $(window).on("beforeunload",(function anonymous_4284(e) {
                var s;
                
                //$LASTPOS=10004296;//jseditor.TEdit:4296
                s = _this.shouldConfirmClose();
                
                //$LASTPOS=10004329;//jseditor.TEdit:4329
                if (s) {
                  return s;
                  
                } else {
                  //$LASTPOS=10004380;//jseditor.TEdit:4380
                  e.preventDefault();
                  
                }
              }));
              //$LASTPOS=10004412;//jseditor.TEdit:4412
              _this.gui = nwDispatcher.requireNwGui();
              
              //$LASTPOS=10004453;//jseditor.TEdit:4453
              _this.win = _this.gui.Window.get();
              
              //$LASTPOS=10004482;//jseditor.TEdit:4482
              _this.win.on('close',(function anonymous_4498() {
                var s;
                
                //$LASTPOS=10004516;//jseditor.TEdit:4516
                s = _this.shouldConfirmClose();
                
                //$LASTPOS=10004549;//jseditor.TEdit:4549
                if (s) {
                  //$LASTPOS=10004567;//jseditor.TEdit:4567
                  if (window.confirm(s)) {
                    //$LASTPOS=10004604;//jseditor.TEdit:4604
                    _this.win.close(true);
                    
                  }
                  
                } else {
                  //$LASTPOS=10004655;//jseditor.TEdit:4655
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
        
        //$LASTPOS=10002380;//jseditor.TEdit:2380
        _this.parallel(Tonyu.bindFunc(_this,_this.setEtcP));
      },
      fiber$setEtc :function _trc_TEdit_f_setEtc(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=10002380;//jseditor.TEdit:2380
        _this.parallel(Tonyu.bindFunc(_this,_this.setEtcP));
        
        _thread.retVal=_this;return;
      },
      setEtcP :function _trc_TEdit_setEtcP() {
        "use strict";
        var _this=this;
        var np;
        
        //$LASTPOS=10002421;//jseditor.TEdit:2421
        np = _this.prompt("ワークスペースのディレクトリ",_this.etc.path());
        
        //$LASTPOS=10002471;//jseditor.TEdit:2471
        if (np) {
          //$LASTPOS=10002490;//jseditor.TEdit:2490
          localStorage.etc=np;
          //$LASTPOS=10002520;//jseditor.TEdit:2520
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
              //$LASTPOS=10002421;//jseditor.TEdit:2421
              _this.fiber$prompt(_thread, "ワークスペースのディレクトリ", _this.etc.path());
              __pc=1;return;
            case 1:
              np=_thread.retVal;
              
              //$LASTPOS=10002471;//jseditor.TEdit:2471
              if (np) {
                //$LASTPOS=10002490;//jseditor.TEdit:2490
                localStorage.etc=np;
                //$LASTPOS=10002520;//jseditor.TEdit:2520
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
        
        //$LASTPOS=10002575;//jseditor.TEdit:2575
        tc = new Tonyu.classes.jseditor.TonyuC;
        
        //$LASTPOS=10002599;//jseditor.TEdit:2599
        tc.parallel("compile",_this.prj.tonyuC);
      },
      fiber$tonyuC :function _trc_TEdit_f_tonyuC(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var tc;
        
        //$LASTPOS=10002575;//jseditor.TEdit:2575
        tc = new Tonyu.classes.jseditor.TonyuC;
        
        //$LASTPOS=10002599;//jseditor.TEdit:2599
        tc.parallel("compile",_this.prj.tonyuC);
        
        _thread.retVal=_this;return;
      },
      newWindow :function _trc_TEdit_newWindow() {
        "use strict";
        var _this=this;
        var genID;
        
        //$LASTPOS=10002692;//jseditor.TEdit:2692
        genID = ""+Math.random();
        
        //$LASTPOS=10002725;//jseditor.TEdit:2725
        window.open(location.href,genID,'width=800,height=400,menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes');
      },
      fiber$newWindow :function _trc_TEdit_f_newWindow(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var genID;
        
        //$LASTPOS=10002692;//jseditor.TEdit:2692
        genID = ""+Math.random();
        
        //$LASTPOS=10002725;//jseditor.TEdit:2725
        window.open(location.href,genID,'width=800,height=400,menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes');
        
        _thread.retVal=_this;return;
      },
      textSize :function _trc_TEdit_textSize() {
        "use strict";
        var _this=this;
        
        //$LASTPOS=10002884;//jseditor.TEdit:2884
        _this.parallel("textSizeP");
      },
      fiber$textSize :function _trc_TEdit_f_textSize(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=10002884;//jseditor.TEdit:2884
        _this.parallel("textSizeP");
        
        _thread.retVal=_this;return;
      },
      textSizeP :function _trc_TEdit_textSizeP() {
        "use strict";
        var _this=this;
        var s;
        
        //$LASTPOS=10002939;//jseditor.TEdit:2939
        s = _this.prompt("エディタの文字の大きさ",_this.desktopEnv.data.editorFontSize||12);
        
        //$LASTPOS=10003037;//jseditor.TEdit:3037
        _this.desktopEnv.data.editorFontSize=window.parseInt(s);
        //$LASTPOS=10003093;//jseditor.TEdit:3093
        if (_this.es) {
          //$LASTPOS=10003101;//jseditor.TEdit:3101
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
              //$LASTPOS=10002939;//jseditor.TEdit:2939
              _this.fiber$prompt(_thread, "エディタの文字の大きさ", _this.desktopEnv.data.editorFontSize||12);
              __pc=1;return;
            case 1:
              s=_thread.retVal;
              
              //$LASTPOS=10003037;//jseditor.TEdit:3037
              _this.desktopEnv.data.editorFontSize=window.parseInt(s);
              //$LASTPOS=10003093;//jseditor.TEdit:3093
              if (_this.es) {
                //$LASTPOS=10003101;//jseditor.TEdit:3101
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
        
        //$LASTPOS=10003237;//jseditor.TEdit:3237
        h = $(window).height()-$("#navBar").height()-$("#tabTop").height();
        
        //$LASTPOS=10003312;//jseditor.TEdit:3312
        h-=20;
        //$LASTPOS=10003324;//jseditor.TEdit:3324
        _this.screenH=h;
        //$LASTPOS=10003340;//jseditor.TEdit:3340
        _this.editorH=_this.screenH-$("#fileLabel").height();
        //$LASTPOS=10003387;//jseditor.TEdit:3387
        if (_this.es) {
          //$LASTPOS=10003395;//jseditor.TEdit:3395
          _this.es.options.height=_this.editorH;
        }
        //$LASTPOS=10003427;//jseditor.TEdit:3427
        $("#progs pre").css("height",_this.editorH+"px");
        //$LASTPOS=10003476;//jseditor.TEdit:3476
        console.log("canvas size",h,_this.editorH);
        //$LASTPOS=10003520;//jseditor.TEdit:3520
        $("#fileItemList").height(h);
      },
      fiber$onResize :function _trc_TEdit_f_onResize(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var h;
        
        //$LASTPOS=10003237;//jseditor.TEdit:3237
        h = $(window).height()-$("#navBar").height()-$("#tabTop").height();
        
        //$LASTPOS=10003312;//jseditor.TEdit:3312
        h-=20;
        //$LASTPOS=10003324;//jseditor.TEdit:3324
        _this.screenH=h;
        //$LASTPOS=10003340;//jseditor.TEdit:3340
        _this.editorH=_this.screenH-$("#fileLabel").height();
        //$LASTPOS=10003387;//jseditor.TEdit:3387
        if (_this.es) {
          //$LASTPOS=10003395;//jseditor.TEdit:3395
          _this.es.options.height=_this.editorH;
        }
        //$LASTPOS=10003427;//jseditor.TEdit:3427
        $("#progs pre").css("height",_this.editorH+"px");
        //$LASTPOS=10003476;//jseditor.TEdit:3476
        console.log("canvas size",h,_this.editorH);
        //$LASTPOS=10003520;//jseditor.TEdit:3520
        $("#fileItemList").height(h);
        
        _thread.retVal=_this;return;
      },
      shouldConfirmClose :function _trc_TEdit_shouldConfirmClose() {
        "use strict";
        var _this=this;
        var m;
        
        //$LASTPOS=10004068;//jseditor.TEdit:4068
        m = (Tonyu.globals.$editorSet&&Tonyu.globals.$editorSet.allModified())||[];
        
        //$LASTPOS=10004127;//jseditor.TEdit:4127
        if (m.length>0) {
          return "保存しないで終了しますか？: "+m.map((function anonymous_4185(f) {
            
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
        
        //$LASTPOS=10004068;//jseditor.TEdit:4068
        m = (Tonyu.globals.$editorSet&&Tonyu.globals.$editorSet.allModified())||[];
        
        //$LASTPOS=10004127;//jseditor.TEdit:4127
        if (m.length>0) {
          _thread.retVal="保存しないで終了しますか？: "+m.map((function anonymous_4185(f) {
            
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