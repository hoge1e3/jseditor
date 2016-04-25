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
        (new Tonyu.classes.jseditor.TMenu).make("JS Editor",[{label: "Home",href: "index.html"},{label: "ファイル",sub: [{label: "新規",id: "newFile",action: "$fileMenu.create"},{label: "名前変更",id: "mvFile",action: "$fileMenu.rename"},{label: "上書き保存",id: "saveFile",action: "$editorSet.save",key: "ctrl+s"},{label: "コピー",id: "cpFile"},{label: "閉じる",id: "closeFile",action: "$editorSet.close"},{label: "削除",id: "rmFile",action: "$fileMenu.remove"}]},{label: "ツール",sub: [{label: "TonyuC",id: "tonyuC",action: Tonyu.bindFunc(_this,_this.tonyuC),key: "f9"}]},{label: "ウィンドウ",sub: [{label: "新規ウィンドウ",id: "newWindow",action: Tonyu.bindFunc(_this,_this.newWindow)},{label: "ブックマーク...",id: "bookmark",action: "$bookmark.open"},{label: "フォルダを開く",id: "openFolder",action: Tonyu.bindFunc(_this,_this.openFolder)}]},{label: "設定",sub: [{label: "環境設定...",id: "textsize",action: "$desktopEnvEditor.dialog"},{label: "ワークスペース切り替え...",id: "setEtc",action: Tonyu.bindFunc(_this,_this.setEtc)}]}]);
        
        
        //$LASTPOS=13001810;//jseditor.TEdit:1810
        _this.etc = new Tonyu.classes.jseditor.Etc;
        
        //$LASTPOS=13001828;//jseditor.TEdit:1828
        Tonyu.globals.$etc=_this.etc;
        //$LASTPOS=13001839;//jseditor.TEdit:1839
        Tonyu.globals.$desktopEnvEditor=new Tonyu.classes.jseditor.DesktopEnv;
        //$LASTPOS=13001874;//jseditor.TEdit:1874
        _this.update(10);
        //$LASTPOS=13001889;//jseditor.TEdit:1889
        _this.prjs = _this.readJSON(_this.etc.rel("projects.json"));
        
        //$LASTPOS=13001935;//jseditor.TEdit:1935
        _this.prj = new Tonyu.classes.jseditor.JSEProject(_this.prjs,Util.getQueryString("prj"));
        
        //$LASTPOS=13001994;//jseditor.TEdit:1994
        Tonyu.globals.$jsePrj=_this.prj;
        //$LASTPOS=13002008;//jseditor.TEdit:2008
        $("title").text(Util.getQueryString("prj")+" - JS Editor");
        //$LASTPOS=13002110;//jseditor.TEdit:2110
        _this.tc = new Tonyu.classes.jseditor.TonyuC(_this.prj);
        
        //$LASTPOS=13002135;//jseditor.TEdit:2135
        _this.fl = Tonyu.globals.$fileList=new FileList($("#fileItemList"),{open: (function anonymous_2197(f) {
          
          //$LASTPOS=13002221;//jseditor.TEdit:2221
          console.log("opening",f);
          //$LASTPOS=13002256;//jseditor.TEdit:2256
          _this.es.save();
          //$LASTPOS=13002276;//jseditor.TEdit:2276
          _this.es.open(f);
        })});
        
        //$LASTPOS=13002300;//jseditor.TEdit:2300
        Tonyu.globals.$bookmark=new Tonyu.classes.jseditor.Bookmark({file: _this.etc.rel("bookmark.json"),fileList: _this.fl});
        
        //$LASTPOS=13003181;//jseditor.TEdit:3181
        _this.onResize();
        //$LASTPOS=13003194;//jseditor.TEdit:3194
        $(window).resize(Tonyu.bindFunc(_this,_this.onResize));
        //$LASTPOS=13003223;//jseditor.TEdit:3223
        requirejs(["ace"],(function anonymous_3241() {
          var desktopEnv;
          
          //$LASTPOS=13003259;//jseditor.TEdit:3259
          desktopEnv = Tonyu.globals.$desktopEnvEditor.model;
          
          //$LASTPOS=13003304;//jseditor.TEdit:3304
          _this.print("denv",desktopEnv&&desktopEnv.editorFontSize||12);
          //$LASTPOS=13003370;//jseditor.TEdit:3370
          console.log("ace loaded:",ace);
          //$LASTPOS=13003407;//jseditor.TEdit:3407
          Tonyu.globals.$editorSet=_this.es=new Tonyu.classes.jseditor.TEditorSet($("#progs"),$("#fileLabel"),{height: _this.editorH,fontSize: (desktopEnv&&desktopEnv.editorFontSize||12)});
          //$LASTPOS=13003576;//jseditor.TEdit:3576
          Tonyu.globals.$finder=new Tonyu.classes.jseditor.Finder;
          //$LASTPOS=13003601;//jseditor.TEdit:3601
          if (typeof  _this.SplashScreen!="undefined") {
            //$LASTPOS=13003639;//jseditor.TEdit:3639
            _this.SplashScreen.hide();
          }
          //$LASTPOS=13003665;//jseditor.TEdit:3665
          Tonyu.globals.$fileMenu=_this.fileMenu=new Tonyu.classes.jseditor.FileMenu({editorSet: _this.es,fileList: _this.fl});
          //$LASTPOS=13003731;//jseditor.TEdit:3731
          _this.fl.open(_this.prj.path);
          //$LASTPOS=13003761;//jseditor.TEdit:3761
          Tonyu.globals.$desktopEnvEditor.on("modelsaved",(function anonymous_3796(model) {
            
            //$LASTPOS=13003816;//jseditor.TEdit:3816
            _this.print("SAVED",model);
            //$LASTPOS=13003847;//jseditor.TEdit:3847
            Tonyu.globals.$editorSet.setFontSize(desktopEnv.editorFontSize);
          }));
        }));
        //$LASTPOS=13004358;//jseditor.TEdit:4358
        $(window).on("beforeunload",(function anonymous_4387(e) {
          var s;
          
          //$LASTPOS=13004399;//jseditor.TEdit:4399
          s = _this.shouldConfirmClose();
          
          //$LASTPOS=13004432;//jseditor.TEdit:4432
          if (s) {
            return s;
            
          } else {
            //$LASTPOS=13004483;//jseditor.TEdit:4483
            e.preventDefault();
            
          }
        }));
        //$LASTPOS=13004515;//jseditor.TEdit:4515
        _this.gui = nwDispatcher.requireNwGui();
        
        //$LASTPOS=13004556;//jseditor.TEdit:4556
        _this.win = _this.gui.Window.get();
        
        //$LASTPOS=13004585;//jseditor.TEdit:4585
        _this.win.on('close',(function anonymous_4601() {
          var s;
          
          //$LASTPOS=13004619;//jseditor.TEdit:4619
          s = _this.shouldConfirmClose();
          
          //$LASTPOS=13004652;//jseditor.TEdit:4652
          if (s) {
            //$LASTPOS=13004670;//jseditor.TEdit:4670
            if (window.confirm(s)) {
              //$LASTPOS=13004707;//jseditor.TEdit:4707
              _this.win.close(true);
              
            }
            
          } else {
            //$LASTPOS=13004758;//jseditor.TEdit:4758
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
        (new Tonyu.classes.jseditor.TMenu).make("JS Editor",[{label: "Home",href: "index.html"},{label: "ファイル",sub: [{label: "新規",id: "newFile",action: "$fileMenu.create"},{label: "名前変更",id: "mvFile",action: "$fileMenu.rename"},{label: "上書き保存",id: "saveFile",action: "$editorSet.save",key: "ctrl+s"},{label: "コピー",id: "cpFile"},{label: "閉じる",id: "closeFile",action: "$editorSet.close"},{label: "削除",id: "rmFile",action: "$fileMenu.remove"}]},{label: "ツール",sub: [{label: "TonyuC",id: "tonyuC",action: Tonyu.bindFunc(_this,_this.tonyuC),key: "f9"}]},{label: "ウィンドウ",sub: [{label: "新規ウィンドウ",id: "newWindow",action: Tonyu.bindFunc(_this,_this.newWindow)},{label: "ブックマーク...",id: "bookmark",action: "$bookmark.open"},{label: "フォルダを開く",id: "openFolder",action: Tonyu.bindFunc(_this,_this.openFolder)}]},{label: "設定",sub: [{label: "環境設定...",id: "textsize",action: "$desktopEnvEditor.dialog"},{label: "ワークスペース切り替え...",id: "setEtc",action: Tonyu.bindFunc(_this,_this.setEtc)}]}]);
        
        
        //$LASTPOS=13001810;//jseditor.TEdit:1810
        _this.etc = new Tonyu.classes.jseditor.Etc;
        
        //$LASTPOS=13001828;//jseditor.TEdit:1828
        Tonyu.globals.$etc=_this.etc;
        //$LASTPOS=13001839;//jseditor.TEdit:1839
        Tonyu.globals.$desktopEnvEditor=new Tonyu.classes.jseditor.DesktopEnv;
        
        _thread.enter(function _trc_TEdit_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=13001874;//jseditor.TEdit:1874
              _this.fiber$update(_thread, 10);
              __pc=1;return;
            case 1:
              
              //$LASTPOS=13001889;//jseditor.TEdit:1889
              _this.fiber$readJSON(_thread, _this.etc.rel("projects.json"));
              __pc=2;return;
            case 2:
              _this.prjs=_thread.retVal;
              
              //$LASTPOS=13001935;//jseditor.TEdit:1935
              _this.prj = new Tonyu.classes.jseditor.JSEProject(_this.prjs,Util.getQueryString("prj"));
              
              //$LASTPOS=13001994;//jseditor.TEdit:1994
              Tonyu.globals.$jsePrj=_this.prj;
              //$LASTPOS=13002008;//jseditor.TEdit:2008
              $("title").text(Util.getQueryString("prj")+" - JS Editor");
              //$LASTPOS=13002110;//jseditor.TEdit:2110
              _this.tc = new Tonyu.classes.jseditor.TonyuC(_this.prj);
              
              //$LASTPOS=13002135;//jseditor.TEdit:2135
              _this.fl = Tonyu.globals.$fileList=new FileList($("#fileItemList"),{open: (function anonymous_2197(f) {
                
                //$LASTPOS=13002221;//jseditor.TEdit:2221
                console.log("opening",f);
                //$LASTPOS=13002256;//jseditor.TEdit:2256
                _this.es.save();
                //$LASTPOS=13002276;//jseditor.TEdit:2276
                _this.es.open(f);
              })});
              
              //$LASTPOS=13002300;//jseditor.TEdit:2300
              Tonyu.globals.$bookmark=new Tonyu.classes.jseditor.Bookmark({file: _this.etc.rel("bookmark.json"),fileList: _this.fl});
              
              //$LASTPOS=13003181;//jseditor.TEdit:3181
              _this.fiber$onResize(_thread);
              __pc=3;return;
            case 3:
              
              //$LASTPOS=13003194;//jseditor.TEdit:3194
              $(window).resize(Tonyu.bindFunc(_this,_this.onResize));
              //$LASTPOS=13003223;//jseditor.TEdit:3223
              requirejs(["ace"],(function anonymous_3241() {
                var desktopEnv;
                
                //$LASTPOS=13003259;//jseditor.TEdit:3259
                desktopEnv = Tonyu.globals.$desktopEnvEditor.model;
                
                //$LASTPOS=13003304;//jseditor.TEdit:3304
                _this.print("denv",desktopEnv&&desktopEnv.editorFontSize||12);
                //$LASTPOS=13003370;//jseditor.TEdit:3370
                console.log("ace loaded:",ace);
                //$LASTPOS=13003407;//jseditor.TEdit:3407
                Tonyu.globals.$editorSet=_this.es=new Tonyu.classes.jseditor.TEditorSet($("#progs"),$("#fileLabel"),{height: _this.editorH,fontSize: (desktopEnv&&desktopEnv.editorFontSize||12)});
                //$LASTPOS=13003576;//jseditor.TEdit:3576
                Tonyu.globals.$finder=new Tonyu.classes.jseditor.Finder;
                //$LASTPOS=13003601;//jseditor.TEdit:3601
                if (typeof  _this.SplashScreen!="undefined") {
                  //$LASTPOS=13003639;//jseditor.TEdit:3639
                  _this.SplashScreen.hide();
                }
                //$LASTPOS=13003665;//jseditor.TEdit:3665
                Tonyu.globals.$fileMenu=_this.fileMenu=new Tonyu.classes.jseditor.FileMenu({editorSet: _this.es,fileList: _this.fl});
                //$LASTPOS=13003731;//jseditor.TEdit:3731
                _this.fl.open(_this.prj.path);
                //$LASTPOS=13003761;//jseditor.TEdit:3761
                Tonyu.globals.$desktopEnvEditor.on("modelsaved",(function anonymous_3796(model) {
                  
                  //$LASTPOS=13003816;//jseditor.TEdit:3816
                  _this.print("SAVED",model);
                  //$LASTPOS=13003847;//jseditor.TEdit:3847
                  Tonyu.globals.$editorSet.setFontSize(desktopEnv.editorFontSize);
                }));
              }));
              //$LASTPOS=13004358;//jseditor.TEdit:4358
              $(window).on("beforeunload",(function anonymous_4387(e) {
                var s;
                
                //$LASTPOS=13004399;//jseditor.TEdit:4399
                s = _this.shouldConfirmClose();
                
                //$LASTPOS=13004432;//jseditor.TEdit:4432
                if (s) {
                  return s;
                  
                } else {
                  //$LASTPOS=13004483;//jseditor.TEdit:4483
                  e.preventDefault();
                  
                }
              }));
              //$LASTPOS=13004515;//jseditor.TEdit:4515
              _this.gui = nwDispatcher.requireNwGui();
              
              //$LASTPOS=13004556;//jseditor.TEdit:4556
              _this.win = _this.gui.Window.get();
              
              //$LASTPOS=13004585;//jseditor.TEdit:4585
              _this.win.on('close',(function anonymous_4601() {
                var s;
                
                //$LASTPOS=13004619;//jseditor.TEdit:4619
                s = _this.shouldConfirmClose();
                
                //$LASTPOS=13004652;//jseditor.TEdit:4652
                if (s) {
                  //$LASTPOS=13004670;//jseditor.TEdit:4670
                  if (window.confirm(s)) {
                    //$LASTPOS=13004707;//jseditor.TEdit:4707
                    _this.win.close(true);
                    
                  }
                  
                } else {
                  //$LASTPOS=13004758;//jseditor.TEdit:4758
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
      setEtc :function _trc_TEdit_setEtc() {
        "use strict";
        var _this=this;
        
        //$LASTPOS=13002399;//jseditor.TEdit:2399
        _this.parallel(Tonyu.bindFunc(_this,_this.setEtcP));
      },
      fiber$setEtc :function _trc_TEdit_f_setEtc(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=13002399;//jseditor.TEdit:2399
        _this.parallel(Tonyu.bindFunc(_this,_this.setEtcP));
        
        _thread.retVal=_this;return;
      },
      setEtcP :function _trc_TEdit_setEtcP() {
        "use strict";
        var _this=this;
        var np;
        
        //$LASTPOS=13002440;//jseditor.TEdit:2440
        np = _this.prompt("ワークスペースのディレクトリ",_this.etc.path());
        
        //$LASTPOS=13002490;//jseditor.TEdit:2490
        if (np) {
          //$LASTPOS=13002509;//jseditor.TEdit:2509
          localStorage.etc=np;
          //$LASTPOS=13002539;//jseditor.TEdit:2539
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
              //$LASTPOS=13002440;//jseditor.TEdit:2440
              _this.fiber$prompt(_thread, "ワークスペースのディレクトリ", _this.etc.path());
              __pc=1;return;
            case 1:
              np=_thread.retVal;
              
              //$LASTPOS=13002490;//jseditor.TEdit:2490
              if (np) {
                //$LASTPOS=13002509;//jseditor.TEdit:2509
                localStorage.etc=np;
                //$LASTPOS=13002539;//jseditor.TEdit:2539
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
        
        //$LASTPOS=13002594;//jseditor.TEdit:2594
        _this.tc.parallel("compile");
      },
      fiber$tonyuC :function _trc_TEdit_f_tonyuC(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=13002594;//jseditor.TEdit:2594
        _this.tc.parallel("compile");
        
        _thread.retVal=_this;return;
      },
      newWindow :function _trc_TEdit_newWindow() {
        "use strict";
        var _this=this;
        var genID;
        
        //$LASTPOS=13002650;//jseditor.TEdit:2650
        genID = ""+Math.random();
        
        //$LASTPOS=13002683;//jseditor.TEdit:2683
        window.open(location.href,genID,'width=800,height=400,menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes');
      },
      fiber$newWindow :function _trc_TEdit_f_newWindow(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var genID;
        
        //$LASTPOS=13002650;//jseditor.TEdit:2650
        genID = ""+Math.random();
        
        //$LASTPOS=13002683;//jseditor.TEdit:2683
        window.open(location.href,genID,'width=800,height=400,menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes');
        
        _thread.retVal=_this;return;
      },
      onResize :function _trc_TEdit_onResize() {
        "use strict";
        var _this=this;
        var h;
        
        //$LASTPOS=13002864;//jseditor.TEdit:2864
        h = $(window).height()-$("#navBar").height()-$("#tabTop").height();
        
        //$LASTPOS=13002939;//jseditor.TEdit:2939
        h-=20;
        //$LASTPOS=13002951;//jseditor.TEdit:2951
        _this.screenH=h;
        //$LASTPOS=13002967;//jseditor.TEdit:2967
        _this.editorH=_this.screenH-$("#fileLabel").height();
        //$LASTPOS=13003014;//jseditor.TEdit:3014
        if (_this.es) {
          //$LASTPOS=13003022;//jseditor.TEdit:3022
          _this.es.options.height=_this.editorH;
        }
        //$LASTPOS=13003054;//jseditor.TEdit:3054
        $("#progs pre").css("height",_this.editorH+"px");
        //$LASTPOS=13003103;//jseditor.TEdit:3103
        console.log("canvas size",h,_this.editorH);
        //$LASTPOS=13003147;//jseditor.TEdit:3147
        $("#fileItemList").height(h);
      },
      fiber$onResize :function _trc_TEdit_f_onResize(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var h;
        
        //$LASTPOS=13002864;//jseditor.TEdit:2864
        h = $(window).height()-$("#navBar").height()-$("#tabTop").height();
        
        //$LASTPOS=13002939;//jseditor.TEdit:2939
        h-=20;
        //$LASTPOS=13002951;//jseditor.TEdit:2951
        _this.screenH=h;
        //$LASTPOS=13002967;//jseditor.TEdit:2967
        _this.editorH=_this.screenH-$("#fileLabel").height();
        //$LASTPOS=13003014;//jseditor.TEdit:3014
        if (_this.es) {
          //$LASTPOS=13003022;//jseditor.TEdit:3022
          _this.es.options.height=_this.editorH;
        }
        //$LASTPOS=13003054;//jseditor.TEdit:3054
        $("#progs pre").css("height",_this.editorH+"px");
        //$LASTPOS=13003103;//jseditor.TEdit:3103
        console.log("canvas size",h,_this.editorH);
        //$LASTPOS=13003147;//jseditor.TEdit:3147
        $("#fileItemList").height(h);
        
        _thread.retVal=_this;return;
      },
      shouldConfirmClose :function _trc_TEdit_shouldConfirmClose() {
        "use strict";
        var _this=this;
        var m;
        
        //$LASTPOS=13003941;//jseditor.TEdit:3941
        m = (Tonyu.globals.$editorSet&&Tonyu.globals.$editorSet.allModified())||[];
        
        //$LASTPOS=13004000;//jseditor.TEdit:4000
        if (m.length>0) {
          return "保存しないで終了しますか？: "+m.map((function anonymous_4058(f) {
            
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
        
        //$LASTPOS=13003941;//jseditor.TEdit:3941
        m = (Tonyu.globals.$editorSet&&Tonyu.globals.$editorSet.allModified())||[];
        
        //$LASTPOS=13004000;//jseditor.TEdit:4000
        if (m.length>0) {
          _thread.retVal="保存しないで終了しますか？: "+m.map((function anonymous_4058(f) {
            
            return f.name();
          })).join(",");return;
          
          
        }
        
        _thread.retVal=_this;return;
      },
      openFolder :function _trc_TEdit_openFolder() {
        "use strict";
        var _this=this;
        var f;
        
        //$LASTPOS=13004187;//jseditor.TEdit:4187
        f = Tonyu.globals.$editorSet.curFile;
        
        //$LASTPOS=13004218;//jseditor.TEdit:4218
        console.log(f);
        //$LASTPOS=13004239;//jseditor.TEdit:4239
        if (f) {
          //$LASTPOS=13004257;//jseditor.TEdit:4257
          console.log(f.path());
          //$LASTPOS=13004289;//jseditor.TEdit:4289
          _this.gui.Shell.showItemInFolder(f.path().replace(/\//g,"\\"));
          
        }
      },
      fiber$openFolder :function _trc_TEdit_f_openFolder(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var f;
        
        //$LASTPOS=13004187;//jseditor.TEdit:4187
        f = Tonyu.globals.$editorSet.curFile;
        
        //$LASTPOS=13004218;//jseditor.TEdit:4218
        console.log(f);
        //$LASTPOS=13004239;//jseditor.TEdit:4239
        if (f) {
          //$LASTPOS=13004257;//jseditor.TEdit:4257
          console.log(f.path());
          //$LASTPOS=13004289;//jseditor.TEdit:4289
          _this.gui.Shell.showItemInFolder(f.path().replace(/\//g,"\\"));
          
        }
        
        _thread.retVal=_this;return;
      },
      __dummy: false
    },
    decls: {"methods":{"main":{"nowait":false},"runApp":{"nowait":false},"setEtc":{"nowait":false},"setEtcP":{"nowait":false},"tonyuC":{"nowait":false},"newWindow":{"nowait":false},"onResize":{"nowait":false},"shouldConfirmClose":{"nowait":false},"openFolder":{"nowait":false}}}
  });
});