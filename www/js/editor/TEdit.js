define(function (require) {
  var Tonyu=require('Tonyu');
  var Columns=require('Columns');
  var Util=require('Util');
  var FS=require('FS');
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
        
        //$LASTPOS=9000214;//jseditor.TEdit:214
        Columns.make(["div",{id: "fileViewer","class": "col-xs-3"},["div",{id: "fileItemList"}]],["div",{id: "mainArea","class": "col-xs-9"},["div",{id: "fileLabel"},"."],["div",{id: "progs"}]]);
        
        //$LASTPOS=9000467;//jseditor.TEdit:467
        (new Tonyu.classes.jseditor.TMenu).make("JS Editor",[{label: "Home",href: "index.html"},{label: "ファイル",sub: [{label: "新規",id: "newFile",action: "$fileMenu.create"},{label: "名前変更",id: "mvFile",action: "$fileMenu.rename"},{label: "上書き保存",id: "saveFile",action: "$editorSet.save",key: "ctrl+s"},{label: "コピー",id: "cpFile"},{label: "削除",id: "rmFile",action: "$fileMenu.remove"}]},{label: "ツール",sub: [{label: "TonyuC",id: "tonyuC",action: Tonyu.bindFunc(_this,_this.tonyuC),key: "f9"}]},{label: "ウィンドウ",sub: [{label: "新規ウィンドウ",id: "newWindow",action: Tonyu.bindFunc(_this,_this.newWindow)},{label: "ブックマーク...",id: "bookmark",action: "$bookmark.open"}]},{label: "設定",sub: [{label: "エディタの文字の大きさ...",id: "textsize",action: Tonyu.bindFunc(_this,_this.textSize)},{label: "ワークスペース切り替え...",id: "setEtc",action: Tonyu.bindFunc(_this,_this.setEtc)}]}]);
        
        
        //$LASTPOS=9001570;//jseditor.TEdit:1570
        _this.etc = new Tonyu.classes.jseditor.Etc;
        
        //$LASTPOS=9001588;//jseditor.TEdit:1588
        _this.prjs = _this.waitFor(_this.etc.conf("projects.json").load());
        
        //$LASTPOS=9001641;//jseditor.TEdit:1641
        _this.prj = new Tonyu.classes.jseditor.JSEProject(_this.prjs,Util.getQueryString("prj"));
        
        //$LASTPOS=9001700;//jseditor.TEdit:1700
        _this.print(_this.prj);
        //$LASTPOS=9001715;//jseditor.TEdit:1715
        _this.cwd = FS.get(Util.getQueryString("dir")||process.cwd().replace(/\\/g,"/"));
        
        //$LASTPOS=9001798;//jseditor.TEdit:1798
        _this.projectTop = FS.get(process.cwd().replace(/\\/g,"/")).rel("www/");
        
        //$LASTPOS=9001971;//jseditor.TEdit:1971
        _this.desktopEnv = _this.etc.conf("desktop.json");
        
        //$LASTPOS=9002013;//jseditor.TEdit:2013
        Tonyu.globals.$reqConfBuilder=new Tonyu.classes.jseditor.ReqConfBuilder({output: _this.projectTop.rel("js/reqConf.js"),htmlDir: _this.projectTop});
        //$LASTPOS=9002123;//jseditor.TEdit:2123
        _this.desktopEnv.load();
        //$LASTPOS=9002143;//jseditor.TEdit:2143
        _this.fl = Tonyu.globals.$fileList=new FileList($("#fileItemList"),{open: (function anonymous_2205(f) {
          
          //$LASTPOS=9002229;//jseditor.TEdit:2229
          console.log("opening",f);
          //$LASTPOS=9002264;//jseditor.TEdit:2264
          _this.es.save();
          //$LASTPOS=9002284;//jseditor.TEdit:2284
          _this.es.open(f);
        })});
        
        //$LASTPOS=9002308;//jseditor.TEdit:2308
        Tonyu.globals.$bookmark=new Tonyu.classes.jseditor.Bookmark({file: _this.etc.rel("bookmark.json"),fileList: _this.fl});
        
        //$LASTPOS=9003566;//jseditor.TEdit:3566
        _this.onResize();
        //$LASTPOS=9003579;//jseditor.TEdit:3579
        $(window).resize(Tonyu.bindFunc(_this,_this.onResize));
        //$LASTPOS=9003608;//jseditor.TEdit:3608
        requirejs(["ace"],(function anonymous_3626() {
          
          //$LASTPOS=9003644;//jseditor.TEdit:3644
          console.log("ace loaded:",ace);
          //$LASTPOS=9003681;//jseditor.TEdit:3681
          Tonyu.globals.$editorSet=_this.es=new Tonyu.classes.jseditor.TEditorSet($("#progs"),$("#fileLabel"),{height: _this.editorH,fontSize: (_this.desktopEnv.data&&_this.desktopEnv.data.editorFontSize||12)});
          //$LASTPOS=9003860;//jseditor.TEdit:3860
          Tonyu.globals.$finder=new Finder(_this.es);
          //$LASTPOS=9003889;//jseditor.TEdit:3889
          if (typeof  _this.SplashScreen!="undefined") {
            //$LASTPOS=9003927;//jseditor.TEdit:3927
            _this.SplashScreen.hide();
          }
          //$LASTPOS=9003953;//jseditor.TEdit:3953
          Tonyu.globals.$fileMenu=_this.fileMenu=new Tonyu.classes.jseditor.FileMenu({editorSet: _this.es,fileList: _this.fl});
          return _this.fl.open(_this.cwd);
        }));
        //$LASTPOS=9004262;//jseditor.TEdit:4262
        $(window).on("beforeunload",(function anonymous_4291(e) {
          var s;
          
          //$LASTPOS=9004303;//jseditor.TEdit:4303
          s = _this.shouldConfirmClose();
          
          //$LASTPOS=9004336;//jseditor.TEdit:4336
          if (s) {
            return s;
            
          } else {
            //$LASTPOS=9004387;//jseditor.TEdit:4387
            e.preventDefault();
            
          }
        }));
        //$LASTPOS=9004419;//jseditor.TEdit:4419
        _this.gui = nwDispatcher.requireNwGui();
        
        //$LASTPOS=9004460;//jseditor.TEdit:4460
        _this.win = _this.gui.Window.get();
        
        //$LASTPOS=9004489;//jseditor.TEdit:4489
        _this.win.on('close',(function anonymous_4505() {
          var s;
          
          //$LASTPOS=9004523;//jseditor.TEdit:4523
          s = _this.shouldConfirmClose();
          
          //$LASTPOS=9004556;//jseditor.TEdit:4556
          if (s) {
            //$LASTPOS=9004574;//jseditor.TEdit:4574
            if (window.confirm(s)) {
              //$LASTPOS=9004611;//jseditor.TEdit:4611
              _this.win.close(true);
              
            }
            
          } else {
            //$LASTPOS=9004662;//jseditor.TEdit:4662
            _this.win.close(true);
            
          }
        }));
      },
      fiber$main :function _trc_TEdit_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=9000214;//jseditor.TEdit:214
        Columns.make(["div",{id: "fileViewer","class": "col-xs-3"},["div",{id: "fileItemList"}]],["div",{id: "mainArea","class": "col-xs-9"},["div",{id: "fileLabel"},"."],["div",{id: "progs"}]]);
        
        //$LASTPOS=9000467;//jseditor.TEdit:467
        (new Tonyu.classes.jseditor.TMenu).make("JS Editor",[{label: "Home",href: "index.html"},{label: "ファイル",sub: [{label: "新規",id: "newFile",action: "$fileMenu.create"},{label: "名前変更",id: "mvFile",action: "$fileMenu.rename"},{label: "上書き保存",id: "saveFile",action: "$editorSet.save",key: "ctrl+s"},{label: "コピー",id: "cpFile"},{label: "削除",id: "rmFile",action: "$fileMenu.remove"}]},{label: "ツール",sub: [{label: "TonyuC",id: "tonyuC",action: Tonyu.bindFunc(_this,_this.tonyuC),key: "f9"}]},{label: "ウィンドウ",sub: [{label: "新規ウィンドウ",id: "newWindow",action: Tonyu.bindFunc(_this,_this.newWindow)},{label: "ブックマーク...",id: "bookmark",action: "$bookmark.open"}]},{label: "設定",sub: [{label: "エディタの文字の大きさ...",id: "textsize",action: Tonyu.bindFunc(_this,_this.textSize)},{label: "ワークスペース切り替え...",id: "setEtc",action: Tonyu.bindFunc(_this,_this.setEtc)}]}]);
        
        
        //$LASTPOS=9001570;//jseditor.TEdit:1570
        _this.etc = new Tonyu.classes.jseditor.Etc;
        
        
        _thread.enter(function _trc_TEdit_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=9001588;//jseditor.TEdit:1588
              _this.fiber$waitFor(_thread, _this.etc.conf("projects.json").load());
              __pc=1;return;
            case 1:
              _this.prjs=_thread.retVal;
              
              //$LASTPOS=9001641;//jseditor.TEdit:1641
              _this.prj = new Tonyu.classes.jseditor.JSEProject(_this.prjs,Util.getQueryString("prj"));
              
              //$LASTPOS=9001700;//jseditor.TEdit:1700
              _this.fiber$print(_thread, _this.prj);
              __pc=2;return;
            case 2:
              
              //$LASTPOS=9001715;//jseditor.TEdit:1715
              _this.cwd = FS.get(Util.getQueryString("dir")||process.cwd().replace(/\\/g,"/"));
              
              //$LASTPOS=9001798;//jseditor.TEdit:1798
              _this.projectTop = FS.get(process.cwd().replace(/\\/g,"/")).rel("www/");
              
              //$LASTPOS=9001971;//jseditor.TEdit:1971
              _this.desktopEnv = _this.etc.conf("desktop.json");
              
              //$LASTPOS=9002013;//jseditor.TEdit:2013
              Tonyu.globals.$reqConfBuilder=new Tonyu.classes.jseditor.ReqConfBuilder({output: _this.projectTop.rel("js/reqConf.js"),htmlDir: _this.projectTop});
              //$LASTPOS=9002123;//jseditor.TEdit:2123
              _this.desktopEnv.load();
              //$LASTPOS=9002143;//jseditor.TEdit:2143
              _this.fl = Tonyu.globals.$fileList=new FileList($("#fileItemList"),{open: (function anonymous_2205(f) {
                
                //$LASTPOS=9002229;//jseditor.TEdit:2229
                console.log("opening",f);
                //$LASTPOS=9002264;//jseditor.TEdit:2264
                _this.es.save();
                //$LASTPOS=9002284;//jseditor.TEdit:2284
                _this.es.open(f);
              })});
              
              //$LASTPOS=9002308;//jseditor.TEdit:2308
              Tonyu.globals.$bookmark=new Tonyu.classes.jseditor.Bookmark({file: _this.etc.rel("bookmark.json"),fileList: _this.fl});
              
              //$LASTPOS=9003566;//jseditor.TEdit:3566
              _this.fiber$onResize(_thread);
              __pc=3;return;
            case 3:
              
              //$LASTPOS=9003579;//jseditor.TEdit:3579
              $(window).resize(Tonyu.bindFunc(_this,_this.onResize));
              //$LASTPOS=9003608;//jseditor.TEdit:3608
              requirejs(["ace"],(function anonymous_3626() {
                
                //$LASTPOS=9003644;//jseditor.TEdit:3644
                console.log("ace loaded:",ace);
                //$LASTPOS=9003681;//jseditor.TEdit:3681
                Tonyu.globals.$editorSet=_this.es=new Tonyu.classes.jseditor.TEditorSet($("#progs"),$("#fileLabel"),{height: _this.editorH,fontSize: (_this.desktopEnv.data&&_this.desktopEnv.data.editorFontSize||12)});
                //$LASTPOS=9003860;//jseditor.TEdit:3860
                Tonyu.globals.$finder=new Finder(_this.es);
                //$LASTPOS=9003889;//jseditor.TEdit:3889
                if (typeof  _this.SplashScreen!="undefined") {
                  //$LASTPOS=9003927;//jseditor.TEdit:3927
                  _this.SplashScreen.hide();
                }
                //$LASTPOS=9003953;//jseditor.TEdit:3953
                Tonyu.globals.$fileMenu=_this.fileMenu=new Tonyu.classes.jseditor.FileMenu({editorSet: _this.es,fileList: _this.fl});
                return _this.fl.open(_this.cwd);
              }));
              //$LASTPOS=9004262;//jseditor.TEdit:4262
              $(window).on("beforeunload",(function anonymous_4291(e) {
                var s;
                
                //$LASTPOS=9004303;//jseditor.TEdit:4303
                s = _this.shouldConfirmClose();
                
                //$LASTPOS=9004336;//jseditor.TEdit:4336
                if (s) {
                  return s;
                  
                } else {
                  //$LASTPOS=9004387;//jseditor.TEdit:4387
                  e.preventDefault();
                  
                }
              }));
              //$LASTPOS=9004419;//jseditor.TEdit:4419
              _this.gui = nwDispatcher.requireNwGui();
              
              //$LASTPOS=9004460;//jseditor.TEdit:4460
              _this.win = _this.gui.Window.get();
              
              //$LASTPOS=9004489;//jseditor.TEdit:4489
              _this.win.on('close',(function anonymous_4505() {
                var s;
                
                //$LASTPOS=9004523;//jseditor.TEdit:4523
                s = _this.shouldConfirmClose();
                
                //$LASTPOS=9004556;//jseditor.TEdit:4556
                if (s) {
                  //$LASTPOS=9004574;//jseditor.TEdit:4574
                  if (window.confirm(s)) {
                    //$LASTPOS=9004611;//jseditor.TEdit:4611
                    _this.win.close(true);
                    
                  }
                  
                } else {
                  //$LASTPOS=9004662;//jseditor.TEdit:4662
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
        
        //$LASTPOS=9000190;//jseditor.TEdit:190
        _this.parallel("main");
      },
      fiber$runApp :function _trc_TEdit_f_runApp(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=9000190;//jseditor.TEdit:190
        _this.parallel("main");
        
        _thread.retVal=_this;return;
      },
      setEtc :function _trc_TEdit_setEtc() {
        "use strict";
        var _this=this;
        
        //$LASTPOS=9002407;//jseditor.TEdit:2407
        _this.parallel(Tonyu.bindFunc(_this,_this.setEtcP));
      },
      fiber$setEtc :function _trc_TEdit_f_setEtc(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=9002407;//jseditor.TEdit:2407
        _this.parallel(Tonyu.bindFunc(_this,_this.setEtcP));
        
        _thread.retVal=_this;return;
      },
      setEtcP :function _trc_TEdit_setEtcP() {
        "use strict";
        var _this=this;
        var np;
        
        //$LASTPOS=9002448;//jseditor.TEdit:2448
        np = _this.prompt("ワークスペースのディレクトリ",_this.etc.path());
        
        //$LASTPOS=9002498;//jseditor.TEdit:2498
        if (np) {
          //$LASTPOS=9002517;//jseditor.TEdit:2517
          localStorage.etc=np;
          //$LASTPOS=9002547;//jseditor.TEdit:2547
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
              //$LASTPOS=9002448;//jseditor.TEdit:2448
              _this.fiber$prompt(_thread, "ワークスペースのディレクトリ", _this.etc.path());
              __pc=1;return;
            case 1:
              np=_thread.retVal;
              
              //$LASTPOS=9002498;//jseditor.TEdit:2498
              if (np) {
                //$LASTPOS=9002517;//jseditor.TEdit:2517
                localStorage.etc=np;
                //$LASTPOS=9002547;//jseditor.TEdit:2547
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
        
        //$LASTPOS=9002602;//jseditor.TEdit:2602
        tc = new Tonyu.classes.jseditor.TonyuC;
        
        //$LASTPOS=9002626;//jseditor.TEdit:2626
        tc.parallel("compile",_this.projectTop.rel("js/"));
      },
      fiber$tonyuC :function _trc_TEdit_f_tonyuC(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var tc;
        
        //$LASTPOS=9002602;//jseditor.TEdit:2602
        tc = new Tonyu.classes.jseditor.TonyuC;
        
        //$LASTPOS=9002626;//jseditor.TEdit:2626
        tc.parallel("compile",_this.projectTop.rel("js/"));
        
        _thread.retVal=_this;return;
      },
      newWindow :function _trc_TEdit_newWindow() {
        "use strict";
        var _this=this;
        var genID;
        
        //$LASTPOS=9002704;//jseditor.TEdit:2704
        genID = ""+Math.random();
        
        //$LASTPOS=9002737;//jseditor.TEdit:2737
        window.open(location.href,genID,'width=800,height=400,menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes');
      },
      fiber$newWindow :function _trc_TEdit_f_newWindow(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var genID;
        
        //$LASTPOS=9002704;//jseditor.TEdit:2704
        genID = ""+Math.random();
        
        //$LASTPOS=9002737;//jseditor.TEdit:2737
        window.open(location.href,genID,'width=800,height=400,menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes');
        
        _thread.retVal=_this;return;
      },
      textSize :function _trc_TEdit_textSize() {
        "use strict";
        var _this=this;
        
        //$LASTPOS=9002896;//jseditor.TEdit:2896
        _this.parallel("textSizeP");
      },
      fiber$textSize :function _trc_TEdit_f_textSize(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=9002896;//jseditor.TEdit:2896
        _this.parallel("textSizeP");
        
        _thread.retVal=_this;return;
      },
      textSizeP :function _trc_TEdit_textSizeP() {
        "use strict";
        var _this=this;
        var s;
        
        //$LASTPOS=9002951;//jseditor.TEdit:2951
        s = _this.prompt("エディタの文字の大きさ",_this.desktopEnv.data.editorFontSize||12);
        
        //$LASTPOS=9003049;//jseditor.TEdit:3049
        _this.desktopEnv.data.editorFontSize=window.parseInt(s);
        //$LASTPOS=9003105;//jseditor.TEdit:3105
        if (_this.es) {
          //$LASTPOS=9003113;//jseditor.TEdit:3113
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
              //$LASTPOS=9002951;//jseditor.TEdit:2951
              _this.fiber$prompt(_thread, "エディタの文字の大きさ", _this.desktopEnv.data.editorFontSize||12);
              __pc=1;return;
            case 1:
              s=_thread.retVal;
              
              //$LASTPOS=9003049;//jseditor.TEdit:3049
              _this.desktopEnv.data.editorFontSize=window.parseInt(s);
              //$LASTPOS=9003105;//jseditor.TEdit:3105
              if (_this.es) {
                //$LASTPOS=9003113;//jseditor.TEdit:3113
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
        
        //$LASTPOS=9003249;//jseditor.TEdit:3249
        h = $(window).height()-$("#navBar").height()-$("#tabTop").height();
        
        //$LASTPOS=9003324;//jseditor.TEdit:3324
        h-=20;
        //$LASTPOS=9003336;//jseditor.TEdit:3336
        _this.screenH=h;
        //$LASTPOS=9003352;//jseditor.TEdit:3352
        _this.editorH=_this.screenH-$("#fileLabel").height();
        //$LASTPOS=9003399;//jseditor.TEdit:3399
        if (_this.es) {
          //$LASTPOS=9003407;//jseditor.TEdit:3407
          _this.es.options.height=_this.editorH;
        }
        //$LASTPOS=9003439;//jseditor.TEdit:3439
        $("#progs pre").css("height",_this.editorH+"px");
        //$LASTPOS=9003488;//jseditor.TEdit:3488
        console.log("canvas size",h,_this.editorH);
        //$LASTPOS=9003532;//jseditor.TEdit:3532
        $("#fileItemList").height(h);
      },
      fiber$onResize :function _trc_TEdit_f_onResize(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var h;
        
        //$LASTPOS=9003249;//jseditor.TEdit:3249
        h = $(window).height()-$("#navBar").height()-$("#tabTop").height();
        
        //$LASTPOS=9003324;//jseditor.TEdit:3324
        h-=20;
        //$LASTPOS=9003336;//jseditor.TEdit:3336
        _this.screenH=h;
        //$LASTPOS=9003352;//jseditor.TEdit:3352
        _this.editorH=_this.screenH-$("#fileLabel").height();
        //$LASTPOS=9003399;//jseditor.TEdit:3399
        if (_this.es) {
          //$LASTPOS=9003407;//jseditor.TEdit:3407
          _this.es.options.height=_this.editorH;
        }
        //$LASTPOS=9003439;//jseditor.TEdit:3439
        $("#progs pre").css("height",_this.editorH+"px");
        //$LASTPOS=9003488;//jseditor.TEdit:3488
        console.log("canvas size",h,_this.editorH);
        //$LASTPOS=9003532;//jseditor.TEdit:3532
        $("#fileItemList").height(h);
        
        _thread.retVal=_this;return;
      },
      shouldConfirmClose :function _trc_TEdit_shouldConfirmClose() {
        "use strict";
        var _this=this;
        var m;
        
        //$LASTPOS=9004075;//jseditor.TEdit:4075
        m = (Tonyu.globals.$editorSet&&Tonyu.globals.$editorSet.allModified())||[];
        
        //$LASTPOS=9004134;//jseditor.TEdit:4134
        if (m.length>0) {
          return "保存しないで終了しますか？: "+m.map((function anonymous_4192(f) {
            
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
        
        //$LASTPOS=9004075;//jseditor.TEdit:4075
        m = (Tonyu.globals.$editorSet&&Tonyu.globals.$editorSet.allModified())||[];
        
        //$LASTPOS=9004134;//jseditor.TEdit:4134
        if (m.length>0) {
          _thread.retVal="保存しないで終了しますか？: "+m.map((function anonymous_4192(f) {
            
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