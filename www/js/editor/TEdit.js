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
        (new Tonyu.classes.jseditor.TMenu).make("JS Editor",[{label: "Home",href: "index.html"},{label: "ファイル",sub: [{label: "新規",id: "newFile",action: "$fileMenu.create"},{label: "名前変更",id: "mvFile",action: "$fileMenu.rename"},{label: "上書き保存",id: "saveFile",action: "$editorSet.save",key: "ctrl+s"},{label: "コピー",id: "cpFile"},{label: "削除",id: "rmFile",action: "$fileMenu.remove"}]},{label: "ツール",sub: [{label: "TonyuC",id: "tonyuC",action: Tonyu.bindFunc(_this,_this.tonyuC),key: "f9"}]},{label: "ウィンドウ",sub: [{label: "新規ウィンドウ",id: "newWindow",action: Tonyu.bindFunc(_this,_this.newWindow)},{label: "ブックマーク...",id: "bookmark",action: "$bookmark.open"}]},{label: "設定",sub: [{label: "エディタの文字の大きさ...",id: "textsize",action: Tonyu.bindFunc(_this,_this.textSize)},{label: "ワークスペース切り替え...",id: "setEtc",action: Tonyu.bindFunc(_this,_this.setEtc)}]}]);
        
        
        //$LASTPOS=10001570;//jseditor.TEdit:1570
        _this.etc = new Tonyu.classes.jseditor.Etc;
        
        //$LASTPOS=10001588;//jseditor.TEdit:1588
        _this.prjs = _this.waitFor(_this.etc.conf("projects.json").load());
        
        //$LASTPOS=10001641;//jseditor.TEdit:1641
        _this.prj = new Tonyu.classes.jseditor.JSEProject(_this.prjs,Util.getQueryString("prj"));
        
        //$LASTPOS=10001700;//jseditor.TEdit:1700
        Tonyu.globals.$jsePrj=_this.prj;
        //$LASTPOS=10001755;//jseditor.TEdit:1755
        _this.tc = new Tonyu.classes.jseditor.TonyuC(_this.prj);
        
        //$LASTPOS=10001780;//jseditor.TEdit:1780
        _this.desktopEnv = _this.etc.conf("desktop.json");
        
        //$LASTPOS=10001822;//jseditor.TEdit:1822
        _this.desktopEnv.load();
        //$LASTPOS=10001842;//jseditor.TEdit:1842
        _this.fl = Tonyu.globals.$fileList=new FileList($("#fileItemList"),{open: (function anonymous_1904(f) {
          
          //$LASTPOS=10001928;//jseditor.TEdit:1928
          console.log("opening",f);
          //$LASTPOS=10001963;//jseditor.TEdit:1963
          _this.es.save();
          //$LASTPOS=10001983;//jseditor.TEdit:1983
          _this.es.open(f);
        })});
        
        //$LASTPOS=10002007;//jseditor.TEdit:2007
        Tonyu.globals.$bookmark=new Tonyu.classes.jseditor.Bookmark({file: _this.etc.rel("bookmark.json"),fileList: _this.fl});
        
        //$LASTPOS=10003219;//jseditor.TEdit:3219
        _this.onResize();
        //$LASTPOS=10003232;//jseditor.TEdit:3232
        $(window).resize(Tonyu.bindFunc(_this,_this.onResize));
        //$LASTPOS=10003261;//jseditor.TEdit:3261
        requirejs(["ace"],(function anonymous_3279() {
          
          //$LASTPOS=10003297;//jseditor.TEdit:3297
          console.log("ace loaded:",ace);
          //$LASTPOS=10003334;//jseditor.TEdit:3334
          Tonyu.globals.$editorSet=_this.es=new Tonyu.classes.jseditor.TEditorSet($("#progs"),$("#fileLabel"),{height: _this.editorH,fontSize: (_this.desktopEnv.data&&_this.desktopEnv.data.editorFontSize||12)});
          //$LASTPOS=10003513;//jseditor.TEdit:3513
          Tonyu.globals.$finder=new Tonyu.classes.jseditor.Finder;
          //$LASTPOS=10003538;//jseditor.TEdit:3538
          if (typeof  _this.SplashScreen!="undefined") {
            //$LASTPOS=10003576;//jseditor.TEdit:3576
            _this.SplashScreen.hide();
          }
          //$LASTPOS=10003602;//jseditor.TEdit:3602
          Tonyu.globals.$fileMenu=_this.fileMenu=new Tonyu.classes.jseditor.FileMenu({editorSet: _this.es,fileList: _this.fl});
          return _this.fl.open(_this.prj.path);
        }));
        //$LASTPOS=10003916;//jseditor.TEdit:3916
        $(window).on("beforeunload",(function anonymous_3945(e) {
          var s;
          
          //$LASTPOS=10003957;//jseditor.TEdit:3957
          s = _this.shouldConfirmClose();
          
          //$LASTPOS=10003990;//jseditor.TEdit:3990
          if (s) {
            return s;
            
          } else {
            //$LASTPOS=10004041;//jseditor.TEdit:4041
            e.preventDefault();
            
          }
        }));
        //$LASTPOS=10004073;//jseditor.TEdit:4073
        _this.gui = nwDispatcher.requireNwGui();
        
        //$LASTPOS=10004114;//jseditor.TEdit:4114
        _this.win = _this.gui.Window.get();
        
        //$LASTPOS=10004143;//jseditor.TEdit:4143
        _this.win.on('close',(function anonymous_4159() {
          var s;
          
          //$LASTPOS=10004177;//jseditor.TEdit:4177
          s = _this.shouldConfirmClose();
          
          //$LASTPOS=10004210;//jseditor.TEdit:4210
          if (s) {
            //$LASTPOS=10004228;//jseditor.TEdit:4228
            if (window.confirm(s)) {
              //$LASTPOS=10004265;//jseditor.TEdit:4265
              _this.win.close(true);
              
            }
            
          } else {
            //$LASTPOS=10004316;//jseditor.TEdit:4316
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
              Tonyu.globals.$jsePrj=_this.prj;
              //$LASTPOS=10001755;//jseditor.TEdit:1755
              _this.tc = new Tonyu.classes.jseditor.TonyuC(_this.prj);
              
              //$LASTPOS=10001780;//jseditor.TEdit:1780
              _this.desktopEnv = _this.etc.conf("desktop.json");
              
              //$LASTPOS=10001822;//jseditor.TEdit:1822
              _this.desktopEnv.load();
              //$LASTPOS=10001842;//jseditor.TEdit:1842
              _this.fl = Tonyu.globals.$fileList=new FileList($("#fileItemList"),{open: (function anonymous_1904(f) {
                
                //$LASTPOS=10001928;//jseditor.TEdit:1928
                console.log("opening",f);
                //$LASTPOS=10001963;//jseditor.TEdit:1963
                _this.es.save();
                //$LASTPOS=10001983;//jseditor.TEdit:1983
                _this.es.open(f);
              })});
              
              //$LASTPOS=10002007;//jseditor.TEdit:2007
              Tonyu.globals.$bookmark=new Tonyu.classes.jseditor.Bookmark({file: _this.etc.rel("bookmark.json"),fileList: _this.fl});
              
              //$LASTPOS=10003219;//jseditor.TEdit:3219
              _this.fiber$onResize(_thread);
              __pc=2;return;
            case 2:
              
              //$LASTPOS=10003232;//jseditor.TEdit:3232
              $(window).resize(Tonyu.bindFunc(_this,_this.onResize));
              //$LASTPOS=10003261;//jseditor.TEdit:3261
              requirejs(["ace"],(function anonymous_3279() {
                
                //$LASTPOS=10003297;//jseditor.TEdit:3297
                console.log("ace loaded:",ace);
                //$LASTPOS=10003334;//jseditor.TEdit:3334
                Tonyu.globals.$editorSet=_this.es=new Tonyu.classes.jseditor.TEditorSet($("#progs"),$("#fileLabel"),{height: _this.editorH,fontSize: (_this.desktopEnv.data&&_this.desktopEnv.data.editorFontSize||12)});
                //$LASTPOS=10003513;//jseditor.TEdit:3513
                Tonyu.globals.$finder=new Tonyu.classes.jseditor.Finder;
                //$LASTPOS=10003538;//jseditor.TEdit:3538
                if (typeof  _this.SplashScreen!="undefined") {
                  //$LASTPOS=10003576;//jseditor.TEdit:3576
                  _this.SplashScreen.hide();
                }
                //$LASTPOS=10003602;//jseditor.TEdit:3602
                Tonyu.globals.$fileMenu=_this.fileMenu=new Tonyu.classes.jseditor.FileMenu({editorSet: _this.es,fileList: _this.fl});
                return _this.fl.open(_this.prj.path);
              }));
              //$LASTPOS=10003916;//jseditor.TEdit:3916
              $(window).on("beforeunload",(function anonymous_3945(e) {
                var s;
                
                //$LASTPOS=10003957;//jseditor.TEdit:3957
                s = _this.shouldConfirmClose();
                
                //$LASTPOS=10003990;//jseditor.TEdit:3990
                if (s) {
                  return s;
                  
                } else {
                  //$LASTPOS=10004041;//jseditor.TEdit:4041
                  e.preventDefault();
                  
                }
              }));
              //$LASTPOS=10004073;//jseditor.TEdit:4073
              _this.gui = nwDispatcher.requireNwGui();
              
              //$LASTPOS=10004114;//jseditor.TEdit:4114
              _this.win = _this.gui.Window.get();
              
              //$LASTPOS=10004143;//jseditor.TEdit:4143
              _this.win.on('close',(function anonymous_4159() {
                var s;
                
                //$LASTPOS=10004177;//jseditor.TEdit:4177
                s = _this.shouldConfirmClose();
                
                //$LASTPOS=10004210;//jseditor.TEdit:4210
                if (s) {
                  //$LASTPOS=10004228;//jseditor.TEdit:4228
                  if (window.confirm(s)) {
                    //$LASTPOS=10004265;//jseditor.TEdit:4265
                    _this.win.close(true);
                    
                  }
                  
                } else {
                  //$LASTPOS=10004316;//jseditor.TEdit:4316
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
        
        //$LASTPOS=10002106;//jseditor.TEdit:2106
        _this.parallel(Tonyu.bindFunc(_this,_this.setEtcP));
      },
      fiber$setEtc :function _trc_TEdit_f_setEtc(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=10002106;//jseditor.TEdit:2106
        _this.parallel(Tonyu.bindFunc(_this,_this.setEtcP));
        
        _thread.retVal=_this;return;
      },
      setEtcP :function _trc_TEdit_setEtcP() {
        "use strict";
        var _this=this;
        var np;
        
        //$LASTPOS=10002147;//jseditor.TEdit:2147
        np = _this.prompt("ワークスペースのディレクトリ",_this.etc.path());
        
        //$LASTPOS=10002197;//jseditor.TEdit:2197
        if (np) {
          //$LASTPOS=10002216;//jseditor.TEdit:2216
          localStorage.etc=np;
          //$LASTPOS=10002246;//jseditor.TEdit:2246
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
              //$LASTPOS=10002147;//jseditor.TEdit:2147
              _this.fiber$prompt(_thread, "ワークスペースのディレクトリ", _this.etc.path());
              __pc=1;return;
            case 1:
              np=_thread.retVal;
              
              //$LASTPOS=10002197;//jseditor.TEdit:2197
              if (np) {
                //$LASTPOS=10002216;//jseditor.TEdit:2216
                localStorage.etc=np;
                //$LASTPOS=10002246;//jseditor.TEdit:2246
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
        
        //$LASTPOS=10002301;//jseditor.TEdit:2301
        _this.tc.parallel("compile");
      },
      fiber$tonyuC :function _trc_TEdit_f_tonyuC(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=10002301;//jseditor.TEdit:2301
        _this.tc.parallel("compile");
        
        _thread.retVal=_this;return;
      },
      newWindow :function _trc_TEdit_newWindow() {
        "use strict";
        var _this=this;
        var genID;
        
        //$LASTPOS=10002357;//jseditor.TEdit:2357
        genID = ""+Math.random();
        
        //$LASTPOS=10002390;//jseditor.TEdit:2390
        window.open(location.href,genID,'width=800,height=400,menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes');
      },
      fiber$newWindow :function _trc_TEdit_f_newWindow(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var genID;
        
        //$LASTPOS=10002357;//jseditor.TEdit:2357
        genID = ""+Math.random();
        
        //$LASTPOS=10002390;//jseditor.TEdit:2390
        window.open(location.href,genID,'width=800,height=400,menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes');
        
        _thread.retVal=_this;return;
      },
      textSize :function _trc_TEdit_textSize() {
        "use strict";
        var _this=this;
        
        //$LASTPOS=10002549;//jseditor.TEdit:2549
        _this.parallel("textSizeP");
      },
      fiber$textSize :function _trc_TEdit_f_textSize(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=10002549;//jseditor.TEdit:2549
        _this.parallel("textSizeP");
        
        _thread.retVal=_this;return;
      },
      textSizeP :function _trc_TEdit_textSizeP() {
        "use strict";
        var _this=this;
        var s;
        
        //$LASTPOS=10002604;//jseditor.TEdit:2604
        s = _this.prompt("エディタの文字の大きさ",_this.desktopEnv.data.editorFontSize||12);
        
        //$LASTPOS=10002702;//jseditor.TEdit:2702
        _this.desktopEnv.data.editorFontSize=window.parseInt(s);
        //$LASTPOS=10002758;//jseditor.TEdit:2758
        if (_this.es) {
          //$LASTPOS=10002766;//jseditor.TEdit:2766
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
              //$LASTPOS=10002604;//jseditor.TEdit:2604
              _this.fiber$prompt(_thread, "エディタの文字の大きさ", _this.desktopEnv.data.editorFontSize||12);
              __pc=1;return;
            case 1:
              s=_thread.retVal;
              
              //$LASTPOS=10002702;//jseditor.TEdit:2702
              _this.desktopEnv.data.editorFontSize=window.parseInt(s);
              //$LASTPOS=10002758;//jseditor.TEdit:2758
              if (_this.es) {
                //$LASTPOS=10002766;//jseditor.TEdit:2766
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
        
        //$LASTPOS=10002902;//jseditor.TEdit:2902
        h = $(window).height()-$("#navBar").height()-$("#tabTop").height();
        
        //$LASTPOS=10002977;//jseditor.TEdit:2977
        h-=20;
        //$LASTPOS=10002989;//jseditor.TEdit:2989
        _this.screenH=h;
        //$LASTPOS=10003005;//jseditor.TEdit:3005
        _this.editorH=_this.screenH-$("#fileLabel").height();
        //$LASTPOS=10003052;//jseditor.TEdit:3052
        if (_this.es) {
          //$LASTPOS=10003060;//jseditor.TEdit:3060
          _this.es.options.height=_this.editorH;
        }
        //$LASTPOS=10003092;//jseditor.TEdit:3092
        $("#progs pre").css("height",_this.editorH+"px");
        //$LASTPOS=10003141;//jseditor.TEdit:3141
        console.log("canvas size",h,_this.editorH);
        //$LASTPOS=10003185;//jseditor.TEdit:3185
        $("#fileItemList").height(h);
      },
      fiber$onResize :function _trc_TEdit_f_onResize(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var h;
        
        //$LASTPOS=10002902;//jseditor.TEdit:2902
        h = $(window).height()-$("#navBar").height()-$("#tabTop").height();
        
        //$LASTPOS=10002977;//jseditor.TEdit:2977
        h-=20;
        //$LASTPOS=10002989;//jseditor.TEdit:2989
        _this.screenH=h;
        //$LASTPOS=10003005;//jseditor.TEdit:3005
        _this.editorH=_this.screenH-$("#fileLabel").height();
        //$LASTPOS=10003052;//jseditor.TEdit:3052
        if (_this.es) {
          //$LASTPOS=10003060;//jseditor.TEdit:3060
          _this.es.options.height=_this.editorH;
        }
        //$LASTPOS=10003092;//jseditor.TEdit:3092
        $("#progs pre").css("height",_this.editorH+"px");
        //$LASTPOS=10003141;//jseditor.TEdit:3141
        console.log("canvas size",h,_this.editorH);
        //$LASTPOS=10003185;//jseditor.TEdit:3185
        $("#fileItemList").height(h);
        
        _thread.retVal=_this;return;
      },
      shouldConfirmClose :function _trc_TEdit_shouldConfirmClose() {
        "use strict";
        var _this=this;
        var m;
        
        //$LASTPOS=10003729;//jseditor.TEdit:3729
        m = (Tonyu.globals.$editorSet&&Tonyu.globals.$editorSet.allModified())||[];
        
        //$LASTPOS=10003788;//jseditor.TEdit:3788
        if (m.length>0) {
          return "保存しないで終了しますか？: "+m.map((function anonymous_3846(f) {
            
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
        
        //$LASTPOS=10003729;//jseditor.TEdit:3729
        m = (Tonyu.globals.$editorSet&&Tonyu.globals.$editorSet.allModified())||[];
        
        //$LASTPOS=10003788;//jseditor.TEdit:3788
        if (m.length>0) {
          _thread.retVal="保存しないで終了しますか？: "+m.map((function anonymous_3846(f) {
            
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