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
        
        //$LASTPOS=10000214;//jseditor.TEdit:214
        Columns.make(["div",{id: "fileViewer","class": "col-xs-3"},["div",{id: "fileItemList"}]],["div",{id: "mainArea","class": "col-xs-9"},["div",{id: "fileLabel"},"."],["div",{id: "progs"}]]);
        
        //$LASTPOS=10000467;//jseditor.TEdit:467
        (new Tonyu.classes.jseditor.TMenu).make("JS Editor",[{label: "Home",href: "index.html"},{label: "ファイル",sub: [{label: "新規",id: "newFile",action: "$fileMenu.create"},{label: "名前変更",id: "mvFile",action: "$fileMenu.rename"},{label: "上書き保存",id: "saveFile",action: "$editorSet.save",key: "ctrl+s"},{label: "コピー",id: "cpFile"},{label: "削除",id: "rmFile",action: "$fileMenu.remove"}]},{label: "ツール",sub: [{label: "TonyuC",id: "tonyuC",action: Tonyu.bindFunc(_this,_this.tonyuC),key: "f9"}]},{label: "ウィンドウ",sub: [{label: "新規ウィンドウ",id: "newWindow",action: Tonyu.bindFunc(_this,_this.newWindow)},{label: "ブックマーク...",id: "bookmark",action: "$bookmark.open"}]},{label: "設定",sub: [{label: "エディタの文字の大きさ...",id: "textsize",action: Tonyu.bindFunc(_this,_this.textSize)},{label: "ワークスペース切り替え...",id: "setEtc",action: Tonyu.bindFunc(_this,_this.setEtc)}]}]);
        
        
        //$LASTPOS=10001570;//jseditor.TEdit:1570
        _this.etc = new Tonyu.classes.jseditor.Etc;
        
        //$LASTPOS=10001588;//jseditor.TEdit:1588
        _this.prjs = _this.waitFor(_this.etc.conf("projects.json").load());
        
        //$LASTPOS=10001641;//jseditor.TEdit:1641
        _this.prj = new Tonyu.classes.jseditor.JSEProject(_this.prjs,Util.getQueryString("prj"));
        
        //$LASTPOS=10001700;//jseditor.TEdit:1700
        _this.print(_this.prj);
        //$LASTPOS=10001918;//jseditor.TEdit:1918
        _this.desktopEnv = _this.etc.conf("desktop.json");
        
        //$LASTPOS=10002099;//jseditor.TEdit:2099
        _this.tc = new Tonyu.classes.jseditor.TonyuC(_this.prj);
        
        //$LASTPOS=10002124;//jseditor.TEdit:2124
        _this.desktopEnv.load();
        //$LASTPOS=10002144;//jseditor.TEdit:2144
        _this.fl = Tonyu.globals.$fileList=new FileList($("#fileItemList"),{open: (function anonymous_2206(f) {
          
          //$LASTPOS=10002230;//jseditor.TEdit:2230
          console.log("opening",f);
          //$LASTPOS=10002265;//jseditor.TEdit:2265
          _this.es.save();
          //$LASTPOS=10002285;//jseditor.TEdit:2285
          _this.es.open(f);
        })});
        
        //$LASTPOS=10002309;//jseditor.TEdit:2309
        Tonyu.globals.$bookmark=new Tonyu.classes.jseditor.Bookmark({file: _this.etc.rel("bookmark.json"),fileList: _this.fl});
        
        //$LASTPOS=10003588;//jseditor.TEdit:3588
        _this.onResize();
        //$LASTPOS=10003601;//jseditor.TEdit:3601
        $(window).resize(Tonyu.bindFunc(_this,_this.onResize));
        //$LASTPOS=10003630;//jseditor.TEdit:3630
        requirejs(["ace"],(function anonymous_3648() {
          
          //$LASTPOS=10003666;//jseditor.TEdit:3666
          console.log("ace loaded:",ace);
          //$LASTPOS=10003703;//jseditor.TEdit:3703
          Tonyu.globals.$editorSet=_this.es=new Tonyu.classes.jseditor.TEditorSet($("#progs"),$("#fileLabel"),{height: _this.editorH,fontSize: (_this.desktopEnv.data&&_this.desktopEnv.data.editorFontSize||12)});
          //$LASTPOS=10003882;//jseditor.TEdit:3882
          Tonyu.globals.$finder=new Finder(_this.es);
          //$LASTPOS=10003911;//jseditor.TEdit:3911
          if (typeof  _this.SplashScreen!="undefined") {
            //$LASTPOS=10003949;//jseditor.TEdit:3949
            _this.SplashScreen.hide();
          }
          //$LASTPOS=10003975;//jseditor.TEdit:3975
          Tonyu.globals.$fileMenu=_this.fileMenu=new Tonyu.classes.jseditor.FileMenu({editorSet: _this.es,fileList: _this.fl});
          return _this.fl.open(_this.prj.path);
        }));
        //$LASTPOS=10004289;//jseditor.TEdit:4289
        $(window).on("beforeunload",(function anonymous_4318(e) {
          var s;
          
          //$LASTPOS=10004330;//jseditor.TEdit:4330
          s = _this.shouldConfirmClose();
          
          //$LASTPOS=10004363;//jseditor.TEdit:4363
          if (s) {
            return s;
            
          } else {
            //$LASTPOS=10004414;//jseditor.TEdit:4414
            e.preventDefault();
            
          }
        }));
        //$LASTPOS=10004446;//jseditor.TEdit:4446
        _this.gui = nwDispatcher.requireNwGui();
        
        //$LASTPOS=10004487;//jseditor.TEdit:4487
        _this.win = _this.gui.Window.get();
        
        //$LASTPOS=10004516;//jseditor.TEdit:4516
        _this.win.on('close',(function anonymous_4532() {
          var s;
          
          //$LASTPOS=10004550;//jseditor.TEdit:4550
          s = _this.shouldConfirmClose();
          
          //$LASTPOS=10004583;//jseditor.TEdit:4583
          if (s) {
            //$LASTPOS=10004601;//jseditor.TEdit:4601
            if (window.confirm(s)) {
              //$LASTPOS=10004638;//jseditor.TEdit:4638
              _this.win.close(true);
              
            }
            
          } else {
            //$LASTPOS=10004689;//jseditor.TEdit:4689
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
        (new Tonyu.classes.jseditor.TMenu).make("JS Editor",[{label: "Home",href: "index.html"},{label: "ファイル",sub: [{label: "新規",id: "newFile",action: "$fileMenu.create"},{label: "名前変更",id: "mvFile",action: "$fileMenu.rename"},{label: "上書き保存",id: "saveFile",action: "$editorSet.save",key: "ctrl+s"},{label: "コピー",id: "cpFile"},{label: "削除",id: "rmFile",action: "$fileMenu.remove"}]},{label: "ツール",sub: [{label: "TonyuC",id: "tonyuC",action: Tonyu.bindFunc(_this,_this.tonyuC),key: "f9"}]},{label: "ウィンドウ",sub: [{label: "新規ウィンドウ",id: "newWindow",action: Tonyu.bindFunc(_this,_this.newWindow)},{label: "ブックマーク...",id: "bookmark",action: "$bookmark.open"}]},{label: "設定",sub: [{label: "エディタの文字の大きさ...",id: "textsize",action: Tonyu.bindFunc(_this,_this.textSize)},{label: "ワークスペース切り替え...",id: "setEtc",action: Tonyu.bindFunc(_this,_this.setEtc)}]}]);
        
        
        //$LASTPOS=10001570;//jseditor.TEdit:1570
        _this.etc = new Tonyu.classes.jseditor.Etc;
        
        
        _thread.enter(function _trc_TEdit_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=10001588;//jseditor.TEdit:1588
              _this.fiber$waitFor(_thread, _this.etc.conf("projects.json").load());
              __pc=1;return;
            case 1:
              _this.prjs=_thread.retVal;
              
              //$LASTPOS=10001641;//jseditor.TEdit:1641
              _this.prj = new Tonyu.classes.jseditor.JSEProject(_this.prjs,Util.getQueryString("prj"));
              
              //$LASTPOS=10001700;//jseditor.TEdit:1700
              _this.fiber$print(_thread, _this.prj);
              __pc=2;return;
            case 2:
              
              //$LASTPOS=10001918;//jseditor.TEdit:1918
              _this.desktopEnv = _this.etc.conf("desktop.json");
              
              //$LASTPOS=10002099;//jseditor.TEdit:2099
              _this.tc = new Tonyu.classes.jseditor.TonyuC(_this.prj);
              
              //$LASTPOS=10002124;//jseditor.TEdit:2124
              _this.desktopEnv.load();
              //$LASTPOS=10002144;//jseditor.TEdit:2144
              _this.fl = Tonyu.globals.$fileList=new FileList($("#fileItemList"),{open: (function anonymous_2206(f) {
                
                //$LASTPOS=10002230;//jseditor.TEdit:2230
                console.log("opening",f);
                //$LASTPOS=10002265;//jseditor.TEdit:2265
                _this.es.save();
                //$LASTPOS=10002285;//jseditor.TEdit:2285
                _this.es.open(f);
              })});
              
              //$LASTPOS=10002309;//jseditor.TEdit:2309
              Tonyu.globals.$bookmark=new Tonyu.classes.jseditor.Bookmark({file: _this.etc.rel("bookmark.json"),fileList: _this.fl});
              
              //$LASTPOS=10003588;//jseditor.TEdit:3588
              _this.fiber$onResize(_thread);
              __pc=3;return;
            case 3:
              
              //$LASTPOS=10003601;//jseditor.TEdit:3601
              $(window).resize(Tonyu.bindFunc(_this,_this.onResize));
              //$LASTPOS=10003630;//jseditor.TEdit:3630
              requirejs(["ace"],(function anonymous_3648() {
                
                //$LASTPOS=10003666;//jseditor.TEdit:3666
                console.log("ace loaded:",ace);
                //$LASTPOS=10003703;//jseditor.TEdit:3703
                Tonyu.globals.$editorSet=_this.es=new Tonyu.classes.jseditor.TEditorSet($("#progs"),$("#fileLabel"),{height: _this.editorH,fontSize: (_this.desktopEnv.data&&_this.desktopEnv.data.editorFontSize||12)});
                //$LASTPOS=10003882;//jseditor.TEdit:3882
                Tonyu.globals.$finder=new Finder(_this.es);
                //$LASTPOS=10003911;//jseditor.TEdit:3911
                if (typeof  _this.SplashScreen!="undefined") {
                  //$LASTPOS=10003949;//jseditor.TEdit:3949
                  _this.SplashScreen.hide();
                }
                //$LASTPOS=10003975;//jseditor.TEdit:3975
                Tonyu.globals.$fileMenu=_this.fileMenu=new Tonyu.classes.jseditor.FileMenu({editorSet: _this.es,fileList: _this.fl});
                return _this.fl.open(_this.prj.path);
              }));
              //$LASTPOS=10004289;//jseditor.TEdit:4289
              $(window).on("beforeunload",(function anonymous_4318(e) {
                var s;
                
                //$LASTPOS=10004330;//jseditor.TEdit:4330
                s = _this.shouldConfirmClose();
                
                //$LASTPOS=10004363;//jseditor.TEdit:4363
                if (s) {
                  return s;
                  
                } else {
                  //$LASTPOS=10004414;//jseditor.TEdit:4414
                  e.preventDefault();
                  
                }
              }));
              //$LASTPOS=10004446;//jseditor.TEdit:4446
              _this.gui = nwDispatcher.requireNwGui();
              
              //$LASTPOS=10004487;//jseditor.TEdit:4487
              _this.win = _this.gui.Window.get();
              
              //$LASTPOS=10004516;//jseditor.TEdit:4516
              _this.win.on('close',(function anonymous_4532() {
                var s;
                
                //$LASTPOS=10004550;//jseditor.TEdit:4550
                s = _this.shouldConfirmClose();
                
                //$LASTPOS=10004583;//jseditor.TEdit:4583
                if (s) {
                  //$LASTPOS=10004601;//jseditor.TEdit:4601
                  if (window.confirm(s)) {
                    //$LASTPOS=10004638;//jseditor.TEdit:4638
                    _this.win.close(true);
                    
                  }
                  
                } else {
                  //$LASTPOS=10004689;//jseditor.TEdit:4689
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
        
        //$LASTPOS=10002408;//jseditor.TEdit:2408
        _this.parallel(Tonyu.bindFunc(_this,_this.setEtcP));
      },
      fiber$setEtc :function _trc_TEdit_f_setEtc(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=10002408;//jseditor.TEdit:2408
        _this.parallel(Tonyu.bindFunc(_this,_this.setEtcP));
        
        _thread.retVal=_this;return;
      },
      setEtcP :function _trc_TEdit_setEtcP() {
        "use strict";
        var _this=this;
        var np;
        
        //$LASTPOS=10002449;//jseditor.TEdit:2449
        np = _this.prompt("ワークスペースのディレクトリ",_this.etc.path());
        
        //$LASTPOS=10002499;//jseditor.TEdit:2499
        if (np) {
          //$LASTPOS=10002518;//jseditor.TEdit:2518
          localStorage.etc=np;
          //$LASTPOS=10002548;//jseditor.TEdit:2548
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
              //$LASTPOS=10002449;//jseditor.TEdit:2449
              _this.fiber$prompt(_thread, "ワークスペースのディレクトリ", _this.etc.path());
              __pc=1;return;
            case 1:
              np=_thread.retVal;
              
              //$LASTPOS=10002499;//jseditor.TEdit:2499
              if (np) {
                //$LASTPOS=10002518;//jseditor.TEdit:2518
                localStorage.etc=np;
                //$LASTPOS=10002548;//jseditor.TEdit:2548
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
        
        //$LASTPOS=10002629;//jseditor.TEdit:2629
        _this.tc.parallel("compile");
      },
      fiber$tonyuC :function _trc_TEdit_f_tonyuC(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=10002629;//jseditor.TEdit:2629
        _this.tc.parallel("compile");
        
        _thread.retVal=_this;return;
      },
      newWindow :function _trc_TEdit_newWindow() {
        "use strict";
        var _this=this;
        var genID;
        
        //$LASTPOS=10002726;//jseditor.TEdit:2726
        genID = ""+Math.random();
        
        //$LASTPOS=10002759;//jseditor.TEdit:2759
        window.open(location.href,genID,'width=800,height=400,menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes');
      },
      fiber$newWindow :function _trc_TEdit_f_newWindow(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var genID;
        
        //$LASTPOS=10002726;//jseditor.TEdit:2726
        genID = ""+Math.random();
        
        //$LASTPOS=10002759;//jseditor.TEdit:2759
        window.open(location.href,genID,'width=800,height=400,menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes');
        
        _thread.retVal=_this;return;
      },
      textSize :function _trc_TEdit_textSize() {
        "use strict";
        var _this=this;
        
        //$LASTPOS=10002918;//jseditor.TEdit:2918
        _this.parallel("textSizeP");
      },
      fiber$textSize :function _trc_TEdit_f_textSize(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=10002918;//jseditor.TEdit:2918
        _this.parallel("textSizeP");
        
        _thread.retVal=_this;return;
      },
      textSizeP :function _trc_TEdit_textSizeP() {
        "use strict";
        var _this=this;
        var s;
        
        //$LASTPOS=10002973;//jseditor.TEdit:2973
        s = _this.prompt("エディタの文字の大きさ",_this.desktopEnv.data.editorFontSize||12);
        
        //$LASTPOS=10003071;//jseditor.TEdit:3071
        _this.desktopEnv.data.editorFontSize=window.parseInt(s);
        //$LASTPOS=10003127;//jseditor.TEdit:3127
        if (_this.es) {
          //$LASTPOS=10003135;//jseditor.TEdit:3135
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
              //$LASTPOS=10002973;//jseditor.TEdit:2973
              _this.fiber$prompt(_thread, "エディタの文字の大きさ", _this.desktopEnv.data.editorFontSize||12);
              __pc=1;return;
            case 1:
              s=_thread.retVal;
              
              //$LASTPOS=10003071;//jseditor.TEdit:3071
              _this.desktopEnv.data.editorFontSize=window.parseInt(s);
              //$LASTPOS=10003127;//jseditor.TEdit:3127
              if (_this.es) {
                //$LASTPOS=10003135;//jseditor.TEdit:3135
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
        
        //$LASTPOS=10003271;//jseditor.TEdit:3271
        h = $(window).height()-$("#navBar").height()-$("#tabTop").height();
        
        //$LASTPOS=10003346;//jseditor.TEdit:3346
        h-=20;
        //$LASTPOS=10003358;//jseditor.TEdit:3358
        _this.screenH=h;
        //$LASTPOS=10003374;//jseditor.TEdit:3374
        _this.editorH=_this.screenH-$("#fileLabel").height();
        //$LASTPOS=10003421;//jseditor.TEdit:3421
        if (_this.es) {
          //$LASTPOS=10003429;//jseditor.TEdit:3429
          _this.es.options.height=_this.editorH;
        }
        //$LASTPOS=10003461;//jseditor.TEdit:3461
        $("#progs pre").css("height",_this.editorH+"px");
        //$LASTPOS=10003510;//jseditor.TEdit:3510
        console.log("canvas size",h,_this.editorH);
        //$LASTPOS=10003554;//jseditor.TEdit:3554
        $("#fileItemList").height(h);
      },
      fiber$onResize :function _trc_TEdit_f_onResize(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var h;
        
        //$LASTPOS=10003271;//jseditor.TEdit:3271
        h = $(window).height()-$("#navBar").height()-$("#tabTop").height();
        
        //$LASTPOS=10003346;//jseditor.TEdit:3346
        h-=20;
        //$LASTPOS=10003358;//jseditor.TEdit:3358
        _this.screenH=h;
        //$LASTPOS=10003374;//jseditor.TEdit:3374
        _this.editorH=_this.screenH-$("#fileLabel").height();
        //$LASTPOS=10003421;//jseditor.TEdit:3421
        if (_this.es) {
          //$LASTPOS=10003429;//jseditor.TEdit:3429
          _this.es.options.height=_this.editorH;
        }
        //$LASTPOS=10003461;//jseditor.TEdit:3461
        $("#progs pre").css("height",_this.editorH+"px");
        //$LASTPOS=10003510;//jseditor.TEdit:3510
        console.log("canvas size",h,_this.editorH);
        //$LASTPOS=10003554;//jseditor.TEdit:3554
        $("#fileItemList").height(h);
        
        _thread.retVal=_this;return;
      },
      shouldConfirmClose :function _trc_TEdit_shouldConfirmClose() {
        "use strict";
        var _this=this;
        var m;
        
        //$LASTPOS=10004102;//jseditor.TEdit:4102
        m = (Tonyu.globals.$editorSet&&Tonyu.globals.$editorSet.allModified())||[];
        
        //$LASTPOS=10004161;//jseditor.TEdit:4161
        if (m.length>0) {
          return "保存しないで終了しますか？: "+m.map((function anonymous_4219(f) {
            
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
        
        //$LASTPOS=10004102;//jseditor.TEdit:4102
        m = (Tonyu.globals.$editorSet&&Tonyu.globals.$editorSet.allModified())||[];
        
        //$LASTPOS=10004161;//jseditor.TEdit:4161
        if (m.length>0) {
          _thread.retVal="保存しないで終了しますか？: "+m.map((function anonymous_4219(f) {
            
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