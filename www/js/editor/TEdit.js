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
        (new Tonyu.classes.jseditor.TMenu).make("JS Editor",[{label: "Home",href: "index.html"},{label: "ファイル",sub: [{label: "新規",id: "newFile",action: "$fileMenu.create"},{label: "名前変更",id: "mvFile",action: "$fileMenu.rename"},{label: "上書き保存",id: "saveFile",action: "$editorSet.save",key: "ctrl+s"},{label: "コピー",id: "cpFile",action: "$fileMenu.copy"},{label: "閉じる",id: "closeFile",action: "$editorSet.close"},{label: "削除",id: "rmFile",action: "$fileMenu.remove"}]},{label: "ツール",sub: [{label: "TonyuC",id: "tonyuC",action: Tonyu.bindFunc(_this,_this.tonyuC),key: "f9"}]},{label: "ウィンドウ",sub: [{label: "新規ウィンドウ",id: "newWindow",action: Tonyu.bindFunc(_this,_this.newWindow)},{label: "新規ウィンドウ＆Home",id: "newWindowHome",action: Tonyu.bindFunc(_this,_this.newWindowHome)},{label: "フォルダを開く",id: "openFolder",action: Tonyu.bindFunc(_this,_this.openFolder)}]},{label: "設定",sub: [{label: "環境設定...",id: "textsize",action: "$desktopEnvEditor.dialog"},{label: "ワークスペース切り替え...",id: "setEtc",action: Tonyu.bindFunc(_this,_this.setEtc)}]}]);
        
        
        //$LASTPOS=13001909;//jseditor.TEdit:1909
        _this.etc = new Tonyu.classes.jseditor.Etc;
        
        //$LASTPOS=13001927;//jseditor.TEdit:1927
        Tonyu.globals.$etc=_this.etc;
        //$LASTPOS=13001938;//jseditor.TEdit:1938
        Tonyu.globals.$desktopEnvEditor=new Tonyu.classes.jseditor.DesktopEnv;
        //$LASTPOS=13001973;//jseditor.TEdit:1973
        _this.update(10);
        //$LASTPOS=13001988;//jseditor.TEdit:1988
        _this.prjs = _this.readJSON(_this.etc.rel("projects.json"));
        
        //$LASTPOS=13002034;//jseditor.TEdit:2034
        _this.prj = new Tonyu.classes.jseditor.JSEProject(_this.prjs,Util.getQueryString("prj"));
        
        //$LASTPOS=13002093;//jseditor.TEdit:2093
        Tonyu.globals.$jsePrj=_this.prj;
        //$LASTPOS=13002107;//jseditor.TEdit:2107
        $("title").text(Util.getQueryString("prj")+" - JS Editor");
        //$LASTPOS=13002209;//jseditor.TEdit:2209
        _this.tc = new Tonyu.classes.jseditor.TonyuC(_this.prj);
        
        //$LASTPOS=13002234;//jseditor.TEdit:2234
        _this.fl = Tonyu.globals.$fileList=new FileList($("#fileItemList"),{open: (function anonymous_2296(f) {
          
          //$LASTPOS=13002320;//jseditor.TEdit:2320
          console.log("opening",f);
          //$LASTPOS=13002355;//jseditor.TEdit:2355
          _this.es.save();
          //$LASTPOS=13002375;//jseditor.TEdit:2375
          _this.es.open(f);
        })});
        
        //$LASTPOS=13002399;//jseditor.TEdit:2399
        Tonyu.globals.$bookmark=new Tonyu.classes.jseditor.Bookmark({file: _this.etc.rel("bookmark.json"),fileList: _this.fl});
        
        //$LASTPOS=13003508;//jseditor.TEdit:3508
        _this.onResize();
        //$LASTPOS=13003521;//jseditor.TEdit:3521
        $(window).resize(Tonyu.bindFunc(_this,_this.onResize));
        //$LASTPOS=13003550;//jseditor.TEdit:3550
        requirejs(["ace"],(function anonymous_3568() {
          var desktopEnv;
          
          //$LASTPOS=13003586;//jseditor.TEdit:3586
          desktopEnv = Tonyu.globals.$desktopEnvEditor.model;
          
          //$LASTPOS=13003631;//jseditor.TEdit:3631
          _this.print("denv",desktopEnv&&desktopEnv.editorFontSize||12);
          //$LASTPOS=13003697;//jseditor.TEdit:3697
          console.log("ace loaded:",ace);
          //$LASTPOS=13003734;//jseditor.TEdit:3734
          Tonyu.globals.$editorSet=_this.es=new Tonyu.classes.jseditor.TEditorSet($("#progs"),$("#fileLabel"),{height: _this.editorH,fontSize: (desktopEnv&&desktopEnv.editorFontSize||12)});
          //$LASTPOS=13003903;//jseditor.TEdit:3903
          Tonyu.globals.$finder=new Tonyu.classes.jseditor.Finder;
          //$LASTPOS=13003928;//jseditor.TEdit:3928
          if (typeof  _this.SplashScreen!="undefined") {
            //$LASTPOS=13003966;//jseditor.TEdit:3966
            _this.SplashScreen.hide();
          }
          //$LASTPOS=13003992;//jseditor.TEdit:3992
          Tonyu.globals.$fileMenu=_this.fileMenu=new Tonyu.classes.jseditor.FileMenu({editorSet: _this.es,fileList: _this.fl});
          //$LASTPOS=13004058;//jseditor.TEdit:4058
          _this.fl.open(_this.prj.path);
          //$LASTPOS=13004088;//jseditor.TEdit:4088
          Tonyu.globals.$desktopEnvEditor.on("modelsaved",(function anonymous_4123(model) {
            
            //$LASTPOS=13004143;//jseditor.TEdit:4143
            _this.print("SAVED",model);
            //$LASTPOS=13004174;//jseditor.TEdit:4174
            Tonyu.globals.$editorSet.setFontSize(desktopEnv.editorFontSize);
          }));
        }));
        //$LASTPOS=13004685;//jseditor.TEdit:4685
        $(window).on("beforeunload",(function anonymous_4714(e) {
          var s;
          
          //$LASTPOS=13004726;//jseditor.TEdit:4726
          s = _this.shouldConfirmClose();
          
          //$LASTPOS=13004759;//jseditor.TEdit:4759
          if (s) {
            return s;
            
          } else {
            //$LASTPOS=13004810;//jseditor.TEdit:4810
            e.preventDefault();
            
          }
        }));
        //$LASTPOS=13004842;//jseditor.TEdit:4842
        _this.gui = nwDispatcher.requireNwGui();
        
        //$LASTPOS=13004883;//jseditor.TEdit:4883
        _this.win = _this.gui.Window.get();
        
        //$LASTPOS=13004912;//jseditor.TEdit:4912
        _this.win.on('close',(function anonymous_4928() {
          var s;
          
          //$LASTPOS=13004946;//jseditor.TEdit:4946
          s = _this.shouldConfirmClose();
          
          //$LASTPOS=13004979;//jseditor.TEdit:4979
          if (s) {
            //$LASTPOS=13004997;//jseditor.TEdit:4997
            if (window.confirm(s)) {
              //$LASTPOS=13005034;//jseditor.TEdit:5034
              _this.win.close(true);
              
            }
            
          } else {
            //$LASTPOS=13005085;//jseditor.TEdit:5085
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
        (new Tonyu.classes.jseditor.TMenu).make("JS Editor",[{label: "Home",href: "index.html"},{label: "ファイル",sub: [{label: "新規",id: "newFile",action: "$fileMenu.create"},{label: "名前変更",id: "mvFile",action: "$fileMenu.rename"},{label: "上書き保存",id: "saveFile",action: "$editorSet.save",key: "ctrl+s"},{label: "コピー",id: "cpFile",action: "$fileMenu.copy"},{label: "閉じる",id: "closeFile",action: "$editorSet.close"},{label: "削除",id: "rmFile",action: "$fileMenu.remove"}]},{label: "ツール",sub: [{label: "TonyuC",id: "tonyuC",action: Tonyu.bindFunc(_this,_this.tonyuC),key: "f9"}]},{label: "ウィンドウ",sub: [{label: "新規ウィンドウ",id: "newWindow",action: Tonyu.bindFunc(_this,_this.newWindow)},{label: "新規ウィンドウ＆Home",id: "newWindowHome",action: Tonyu.bindFunc(_this,_this.newWindowHome)},{label: "フォルダを開く",id: "openFolder",action: Tonyu.bindFunc(_this,_this.openFolder)}]},{label: "設定",sub: [{label: "環境設定...",id: "textsize",action: "$desktopEnvEditor.dialog"},{label: "ワークスペース切り替え...",id: "setEtc",action: Tonyu.bindFunc(_this,_this.setEtc)}]}]);
        
        
        //$LASTPOS=13001909;//jseditor.TEdit:1909
        _this.etc = new Tonyu.classes.jseditor.Etc;
        
        //$LASTPOS=13001927;//jseditor.TEdit:1927
        Tonyu.globals.$etc=_this.etc;
        //$LASTPOS=13001938;//jseditor.TEdit:1938
        Tonyu.globals.$desktopEnvEditor=new Tonyu.classes.jseditor.DesktopEnv;
        
        _thread.enter(function _trc_TEdit_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=13001973;//jseditor.TEdit:1973
              _this.fiber$update(_thread, 10);
              __pc=1;return;
            case 1:
              
              //$LASTPOS=13001988;//jseditor.TEdit:1988
              _this.fiber$readJSON(_thread, _this.etc.rel("projects.json"));
              __pc=2;return;
            case 2:
              _this.prjs=_thread.retVal;
              
              //$LASTPOS=13002034;//jseditor.TEdit:2034
              _this.prj = new Tonyu.classes.jseditor.JSEProject(_this.prjs,Util.getQueryString("prj"));
              
              //$LASTPOS=13002093;//jseditor.TEdit:2093
              Tonyu.globals.$jsePrj=_this.prj;
              //$LASTPOS=13002107;//jseditor.TEdit:2107
              $("title").text(Util.getQueryString("prj")+" - JS Editor");
              //$LASTPOS=13002209;//jseditor.TEdit:2209
              _this.tc = new Tonyu.classes.jseditor.TonyuC(_this.prj);
              
              //$LASTPOS=13002234;//jseditor.TEdit:2234
              _this.fl = Tonyu.globals.$fileList=new FileList($("#fileItemList"),{open: (function anonymous_2296(f) {
                
                //$LASTPOS=13002320;//jseditor.TEdit:2320
                console.log("opening",f);
                //$LASTPOS=13002355;//jseditor.TEdit:2355
                _this.es.save();
                //$LASTPOS=13002375;//jseditor.TEdit:2375
                _this.es.open(f);
              })});
              
              //$LASTPOS=13002399;//jseditor.TEdit:2399
              Tonyu.globals.$bookmark=new Tonyu.classes.jseditor.Bookmark({file: _this.etc.rel("bookmark.json"),fileList: _this.fl});
              
              //$LASTPOS=13003508;//jseditor.TEdit:3508
              _this.fiber$onResize(_thread);
              __pc=3;return;
            case 3:
              
              //$LASTPOS=13003521;//jseditor.TEdit:3521
              $(window).resize(Tonyu.bindFunc(_this,_this.onResize));
              //$LASTPOS=13003550;//jseditor.TEdit:3550
              requirejs(["ace"],(function anonymous_3568() {
                var desktopEnv;
                
                //$LASTPOS=13003586;//jseditor.TEdit:3586
                desktopEnv = Tonyu.globals.$desktopEnvEditor.model;
                
                //$LASTPOS=13003631;//jseditor.TEdit:3631
                _this.print("denv",desktopEnv&&desktopEnv.editorFontSize||12);
                //$LASTPOS=13003697;//jseditor.TEdit:3697
                console.log("ace loaded:",ace);
                //$LASTPOS=13003734;//jseditor.TEdit:3734
                Tonyu.globals.$editorSet=_this.es=new Tonyu.classes.jseditor.TEditorSet($("#progs"),$("#fileLabel"),{height: _this.editorH,fontSize: (desktopEnv&&desktopEnv.editorFontSize||12)});
                //$LASTPOS=13003903;//jseditor.TEdit:3903
                Tonyu.globals.$finder=new Tonyu.classes.jseditor.Finder;
                //$LASTPOS=13003928;//jseditor.TEdit:3928
                if (typeof  _this.SplashScreen!="undefined") {
                  //$LASTPOS=13003966;//jseditor.TEdit:3966
                  _this.SplashScreen.hide();
                }
                //$LASTPOS=13003992;//jseditor.TEdit:3992
                Tonyu.globals.$fileMenu=_this.fileMenu=new Tonyu.classes.jseditor.FileMenu({editorSet: _this.es,fileList: _this.fl});
                //$LASTPOS=13004058;//jseditor.TEdit:4058
                _this.fl.open(_this.prj.path);
                //$LASTPOS=13004088;//jseditor.TEdit:4088
                Tonyu.globals.$desktopEnvEditor.on("modelsaved",(function anonymous_4123(model) {
                  
                  //$LASTPOS=13004143;//jseditor.TEdit:4143
                  _this.print("SAVED",model);
                  //$LASTPOS=13004174;//jseditor.TEdit:4174
                  Tonyu.globals.$editorSet.setFontSize(desktopEnv.editorFontSize);
                }));
              }));
              //$LASTPOS=13004685;//jseditor.TEdit:4685
              $(window).on("beforeunload",(function anonymous_4714(e) {
                var s;
                
                //$LASTPOS=13004726;//jseditor.TEdit:4726
                s = _this.shouldConfirmClose();
                
                //$LASTPOS=13004759;//jseditor.TEdit:4759
                if (s) {
                  return s;
                  
                } else {
                  //$LASTPOS=13004810;//jseditor.TEdit:4810
                  e.preventDefault();
                  
                }
              }));
              //$LASTPOS=13004842;//jseditor.TEdit:4842
              _this.gui = nwDispatcher.requireNwGui();
              
              //$LASTPOS=13004883;//jseditor.TEdit:4883
              _this.win = _this.gui.Window.get();
              
              //$LASTPOS=13004912;//jseditor.TEdit:4912
              _this.win.on('close',(function anonymous_4928() {
                var s;
                
                //$LASTPOS=13004946;//jseditor.TEdit:4946
                s = _this.shouldConfirmClose();
                
                //$LASTPOS=13004979;//jseditor.TEdit:4979
                if (s) {
                  //$LASTPOS=13004997;//jseditor.TEdit:4997
                  if (window.confirm(s)) {
                    //$LASTPOS=13005034;//jseditor.TEdit:5034
                    _this.win.close(true);
                    
                  }
                  
                } else {
                  //$LASTPOS=13005085;//jseditor.TEdit:5085
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
        
        //$LASTPOS=13002498;//jseditor.TEdit:2498
        _this.parallel(Tonyu.bindFunc(_this,_this.setEtcP));
      },
      fiber$setEtc :function _trc_TEdit_f_setEtc(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=13002498;//jseditor.TEdit:2498
        _this.parallel(Tonyu.bindFunc(_this,_this.setEtcP));
        
        _thread.retVal=_this;return;
      },
      setEtcP :function _trc_TEdit_setEtcP() {
        "use strict";
        var _this=this;
        var np;
        
        //$LASTPOS=13002539;//jseditor.TEdit:2539
        np = _this.prompt("ワークスペースのディレクトリ",localStorage.etc||"");
        
        //$LASTPOS=13002599;//jseditor.TEdit:2599
        if (np) {
          //$LASTPOS=13002618;//jseditor.TEdit:2618
          localStorage.etc=np;
          //$LASTPOS=13002648;//jseditor.TEdit:2648
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
              //$LASTPOS=13002539;//jseditor.TEdit:2539
              _this.fiber$prompt(_thread, "ワークスペースのディレクトリ", localStorage.etc||"");
              __pc=1;return;
            case 1:
              np=_thread.retVal;
              
              //$LASTPOS=13002599;//jseditor.TEdit:2599
              if (np) {
                //$LASTPOS=13002618;//jseditor.TEdit:2618
                localStorage.etc=np;
                //$LASTPOS=13002648;//jseditor.TEdit:2648
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
        
        //$LASTPOS=13002703;//jseditor.TEdit:2703
        _this.tc.parallel("compile");
      },
      fiber$tonyuC :function _trc_TEdit_f_tonyuC(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=13002703;//jseditor.TEdit:2703
        _this.tc.parallel("compile");
        
        _thread.retVal=_this;return;
      },
      newWindow :function _trc_TEdit_newWindow() {
        "use strict";
        var _this=this;
        var genID;
        
        //$LASTPOS=13002759;//jseditor.TEdit:2759
        genID = ""+Math.random();
        
        //$LASTPOS=13002792;//jseditor.TEdit:2792
        window.open(location.href,genID,'width=800,height=400,menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes');
      },
      fiber$newWindow :function _trc_TEdit_f_newWindow(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var genID;
        
        //$LASTPOS=13002759;//jseditor.TEdit:2759
        genID = ""+Math.random();
        
        //$LASTPOS=13002792;//jseditor.TEdit:2792
        window.open(location.href,genID,'width=800,height=400,menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes');
        
        _thread.retVal=_this;return;
      },
      newWindowHome :function _trc_TEdit_newWindowHome() {
        "use strict";
        var _this=this;
        var genID;
        
        //$LASTPOS=13002956;//jseditor.TEdit:2956
        genID = ""+Math.random();
        
        //$LASTPOS=13002989;//jseditor.TEdit:2989
        window.open(location.href.replace(/\?.*/,""),genID,'width=800,height=400,menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes');
      },
      fiber$newWindowHome :function _trc_TEdit_f_newWindowHome(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var genID;
        
        //$LASTPOS=13002956;//jseditor.TEdit:2956
        genID = ""+Math.random();
        
        //$LASTPOS=13002989;//jseditor.TEdit:2989
        window.open(location.href.replace(/\?.*/,""),genID,'width=800,height=400,menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes');
        
        _thread.retVal=_this;return;
      },
      onResize :function _trc_TEdit_onResize() {
        "use strict";
        var _this=this;
        var h;
        
        //$LASTPOS=13003191;//jseditor.TEdit:3191
        h = $(window).height()-$("#navBar").height()-$("#tabTop").height();
        
        //$LASTPOS=13003266;//jseditor.TEdit:3266
        h-=20;
        //$LASTPOS=13003278;//jseditor.TEdit:3278
        _this.screenH=h;
        //$LASTPOS=13003294;//jseditor.TEdit:3294
        _this.editorH=_this.screenH-$("#fileLabel").height();
        //$LASTPOS=13003341;//jseditor.TEdit:3341
        if (_this.es) {
          //$LASTPOS=13003349;//jseditor.TEdit:3349
          _this.es.options.height=_this.editorH;
        }
        //$LASTPOS=13003381;//jseditor.TEdit:3381
        $("#progs pre").css("height",_this.editorH+"px");
        //$LASTPOS=13003430;//jseditor.TEdit:3430
        console.log("canvas size",h,_this.editorH);
        //$LASTPOS=13003474;//jseditor.TEdit:3474
        $("#fileItemList").height(h);
      },
      fiber$onResize :function _trc_TEdit_f_onResize(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var h;
        
        //$LASTPOS=13003191;//jseditor.TEdit:3191
        h = $(window).height()-$("#navBar").height()-$("#tabTop").height();
        
        //$LASTPOS=13003266;//jseditor.TEdit:3266
        h-=20;
        //$LASTPOS=13003278;//jseditor.TEdit:3278
        _this.screenH=h;
        //$LASTPOS=13003294;//jseditor.TEdit:3294
        _this.editorH=_this.screenH-$("#fileLabel").height();
        //$LASTPOS=13003341;//jseditor.TEdit:3341
        if (_this.es) {
          //$LASTPOS=13003349;//jseditor.TEdit:3349
          _this.es.options.height=_this.editorH;
        }
        //$LASTPOS=13003381;//jseditor.TEdit:3381
        $("#progs pre").css("height",_this.editorH+"px");
        //$LASTPOS=13003430;//jseditor.TEdit:3430
        console.log("canvas size",h,_this.editorH);
        //$LASTPOS=13003474;//jseditor.TEdit:3474
        $("#fileItemList").height(h);
        
        _thread.retVal=_this;return;
      },
      shouldConfirmClose :function _trc_TEdit_shouldConfirmClose() {
        "use strict";
        var _this=this;
        var m;
        
        //$LASTPOS=13004268;//jseditor.TEdit:4268
        m = (Tonyu.globals.$editorSet&&Tonyu.globals.$editorSet.allModified())||[];
        
        //$LASTPOS=13004327;//jseditor.TEdit:4327
        if (m.length>0) {
          return "保存しないで終了しますか？: "+m.map((function anonymous_4385(f) {
            
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
        
        //$LASTPOS=13004268;//jseditor.TEdit:4268
        m = (Tonyu.globals.$editorSet&&Tonyu.globals.$editorSet.allModified())||[];
        
        //$LASTPOS=13004327;//jseditor.TEdit:4327
        if (m.length>0) {
          _thread.retVal="保存しないで終了しますか？: "+m.map((function anonymous_4385(f) {
            
            return f.name();
          })).join(",");return;
          
          
        }
        
        _thread.retVal=_this;return;
      },
      openFolder :function _trc_TEdit_openFolder() {
        "use strict";
        var _this=this;
        var f;
        
        //$LASTPOS=13004514;//jseditor.TEdit:4514
        f = Tonyu.globals.$editorSet.curFile;
        
        //$LASTPOS=13004545;//jseditor.TEdit:4545
        console.log(f);
        //$LASTPOS=13004566;//jseditor.TEdit:4566
        if (f) {
          //$LASTPOS=13004584;//jseditor.TEdit:4584
          console.log(f.path());
          //$LASTPOS=13004616;//jseditor.TEdit:4616
          _this.gui.Shell.showItemInFolder(f.path().replace(/\//g,"\\"));
          
        }
      },
      fiber$openFolder :function _trc_TEdit_f_openFolder(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var f;
        
        //$LASTPOS=13004514;//jseditor.TEdit:4514
        f = Tonyu.globals.$editorSet.curFile;
        
        //$LASTPOS=13004545;//jseditor.TEdit:4545
        console.log(f);
        //$LASTPOS=13004566;//jseditor.TEdit:4566
        if (f) {
          //$LASTPOS=13004584;//jseditor.TEdit:4584
          console.log(f.path());
          //$LASTPOS=13004616;//jseditor.TEdit:4616
          _this.gui.Shell.showItemInFolder(f.path().replace(/\//g,"\\"));
          
        }
        
        _thread.retVal=_this;return;
      },
      __dummy: false
    },
    decls: {"methods":{"main":{"nowait":false},"runApp":{"nowait":false},"setEtc":{"nowait":false},"setEtcP":{"nowait":false},"tonyuC":{"nowait":false},"newWindow":{"nowait":false},"newWindowHome":{"nowait":false},"onResize":{"nowait":false},"shouldConfirmClose":{"nowait":false},"openFolder":{"nowait":false}}}
  });
});