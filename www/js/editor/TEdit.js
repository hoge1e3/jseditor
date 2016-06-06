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
        (new Tonyu.classes.jseditor.TMenu).make("JS Editor",[{label: "Home",href: "index.html"},{label: "ファイル",sub: [{label: "新規",id: "newFile",action: "$fileMenu.create"},{label: "名前変更",id: "mvFile",action: "$fileMenu.rename"},{label: "上書き保存",id: "saveFile",action: "$editorSet.save",key: "ctrl+s"},{label: "コピー",id: "cpFile",action: "$fileMenu.copy"},{label: "閉じる",id: "closeFile",action: "$editorSet.close"},{label: "削除",id: "rmFile",action: "$fileMenu.remove"}]},{label: "ツール",sub: [{label: "TonyuC",id: "tonyuC",action: Tonyu.bindFunc(_this,_this.tonyuC),key: "f9"}]},{label: "ウィンドウ",sub: [{label: "新規ウィンドウ",id: "newWindow",action: Tonyu.bindFunc(_this,_this.newWindow)},{label: "新規ウィンドウ＆Home",id: "newWindowHome",action: Tonyu.bindFunc(_this,_this.newWindowHome)},{label: "ブックマーク...",id: "bookmark",action: "$bookmark.open"},{label: "フォルダを開く",id: "openFolder",action: Tonyu.bindFunc(_this,_this.openFolder)}]},{label: "設定",sub: [{label: "環境設定...",id: "textsize",action: "$desktopEnvEditor.dialog"},{label: "ワークスペース切り替え...",id: "setEtc",action: Tonyu.bindFunc(_this,_this.setEtc)}]}]);
        
        
        //$LASTPOS=13001907;//jseditor.TEdit:1907
        _this.etc = new Tonyu.classes.jseditor.Etc;
        
        //$LASTPOS=13001925;//jseditor.TEdit:1925
        Tonyu.globals.$etc=_this.etc;
        //$LASTPOS=13001936;//jseditor.TEdit:1936
        Tonyu.globals.$desktopEnvEditor=new Tonyu.classes.jseditor.DesktopEnv;
        //$LASTPOS=13001971;//jseditor.TEdit:1971
        _this.update(10);
        //$LASTPOS=13001986;//jseditor.TEdit:1986
        _this.prjs = _this.readJSON(_this.etc.rel("projects.json"));
        
        //$LASTPOS=13002032;//jseditor.TEdit:2032
        _this.prj = new Tonyu.classes.jseditor.JSEProject(_this.prjs,Util.getQueryString("prj"));
        
        //$LASTPOS=13002091;//jseditor.TEdit:2091
        Tonyu.globals.$jsePrj=_this.prj;
        //$LASTPOS=13002105;//jseditor.TEdit:2105
        $("title").text(Util.getQueryString("prj")+" - JS Editor");
        //$LASTPOS=13002207;//jseditor.TEdit:2207
        _this.tc = new Tonyu.classes.jseditor.TonyuC(_this.prj);
        
        //$LASTPOS=13002232;//jseditor.TEdit:2232
        _this.fl = Tonyu.globals.$fileList=new FileList($("#fileItemList"),{open: (function anonymous_2294(f) {
          
          //$LASTPOS=13002318;//jseditor.TEdit:2318
          console.log("opening",f);
          //$LASTPOS=13002353;//jseditor.TEdit:2353
          _this.es.save();
          //$LASTPOS=13002373;//jseditor.TEdit:2373
          _this.es.open(f);
        })});
        
        //$LASTPOS=13002397;//jseditor.TEdit:2397
        Tonyu.globals.$bookmark=new Tonyu.classes.jseditor.Bookmark({file: _this.etc.rel("bookmark.json"),fileList: _this.fl});
        
        //$LASTPOS=13003506;//jseditor.TEdit:3506
        _this.onResize();
        //$LASTPOS=13003519;//jseditor.TEdit:3519
        $(window).resize(Tonyu.bindFunc(_this,_this.onResize));
        //$LASTPOS=13003548;//jseditor.TEdit:3548
        requirejs(["ace"],(function anonymous_3566() {
          var desktopEnv;
          
          //$LASTPOS=13003584;//jseditor.TEdit:3584
          desktopEnv = Tonyu.globals.$desktopEnvEditor.model;
          
          //$LASTPOS=13003629;//jseditor.TEdit:3629
          _this.print("denv",desktopEnv&&desktopEnv.editorFontSize||12);
          //$LASTPOS=13003695;//jseditor.TEdit:3695
          console.log("ace loaded:",ace);
          //$LASTPOS=13003732;//jseditor.TEdit:3732
          Tonyu.globals.$editorSet=_this.es=new Tonyu.classes.jseditor.TEditorSet($("#progs"),$("#fileLabel"),{height: _this.editorH,fontSize: (desktopEnv&&desktopEnv.editorFontSize||12)});
          //$LASTPOS=13003901;//jseditor.TEdit:3901
          Tonyu.globals.$finder=new Tonyu.classes.jseditor.Finder;
          //$LASTPOS=13003926;//jseditor.TEdit:3926
          if (typeof  _this.SplashScreen!="undefined") {
            //$LASTPOS=13003964;//jseditor.TEdit:3964
            _this.SplashScreen.hide();
          }
          //$LASTPOS=13003990;//jseditor.TEdit:3990
          Tonyu.globals.$fileMenu=_this.fileMenu=new Tonyu.classes.jseditor.FileMenu({editorSet: _this.es,fileList: _this.fl});
          //$LASTPOS=13004056;//jseditor.TEdit:4056
          _this.fl.open(_this.prj.path);
          //$LASTPOS=13004086;//jseditor.TEdit:4086
          Tonyu.globals.$desktopEnvEditor.on("modelsaved",(function anonymous_4121(model) {
            
            //$LASTPOS=13004141;//jseditor.TEdit:4141
            _this.print("SAVED",model);
            //$LASTPOS=13004172;//jseditor.TEdit:4172
            Tonyu.globals.$editorSet.setFontSize(desktopEnv.editorFontSize);
          }));
        }));
        //$LASTPOS=13004683;//jseditor.TEdit:4683
        $(window).on("beforeunload",(function anonymous_4712(e) {
          var s;
          
          //$LASTPOS=13004724;//jseditor.TEdit:4724
          s = _this.shouldConfirmClose();
          
          //$LASTPOS=13004757;//jseditor.TEdit:4757
          if (s) {
            return s;
            
          } else {
            //$LASTPOS=13004808;//jseditor.TEdit:4808
            e.preventDefault();
            
          }
        }));
        //$LASTPOS=13004840;//jseditor.TEdit:4840
        _this.gui = nwDispatcher.requireNwGui();
        
        //$LASTPOS=13004881;//jseditor.TEdit:4881
        _this.win = _this.gui.Window.get();
        
        //$LASTPOS=13004910;//jseditor.TEdit:4910
        _this.win.on('close',(function anonymous_4926() {
          var s;
          
          //$LASTPOS=13004944;//jseditor.TEdit:4944
          s = _this.shouldConfirmClose();
          
          //$LASTPOS=13004977;//jseditor.TEdit:4977
          if (s) {
            //$LASTPOS=13004995;//jseditor.TEdit:4995
            if (window.confirm(s)) {
              //$LASTPOS=13005032;//jseditor.TEdit:5032
              _this.win.close(true);
              
            }
            
          } else {
            //$LASTPOS=13005083;//jseditor.TEdit:5083
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
        (new Tonyu.classes.jseditor.TMenu).make("JS Editor",[{label: "Home",href: "index.html"},{label: "ファイル",sub: [{label: "新規",id: "newFile",action: "$fileMenu.create"},{label: "名前変更",id: "mvFile",action: "$fileMenu.rename"},{label: "上書き保存",id: "saveFile",action: "$editorSet.save",key: "ctrl+s"},{label: "コピー",id: "cpFile",action: "$fileMenu.copy"},{label: "閉じる",id: "closeFile",action: "$editorSet.close"},{label: "削除",id: "rmFile",action: "$fileMenu.remove"}]},{label: "ツール",sub: [{label: "TonyuC",id: "tonyuC",action: Tonyu.bindFunc(_this,_this.tonyuC),key: "f9"}]},{label: "ウィンドウ",sub: [{label: "新規ウィンドウ",id: "newWindow",action: Tonyu.bindFunc(_this,_this.newWindow)},{label: "新規ウィンドウ＆Home",id: "newWindowHome",action: Tonyu.bindFunc(_this,_this.newWindowHome)},{label: "ブックマーク...",id: "bookmark",action: "$bookmark.open"},{label: "フォルダを開く",id: "openFolder",action: Tonyu.bindFunc(_this,_this.openFolder)}]},{label: "設定",sub: [{label: "環境設定...",id: "textsize",action: "$desktopEnvEditor.dialog"},{label: "ワークスペース切り替え...",id: "setEtc",action: Tonyu.bindFunc(_this,_this.setEtc)}]}]);
        
        
        //$LASTPOS=13001907;//jseditor.TEdit:1907
        _this.etc = new Tonyu.classes.jseditor.Etc;
        
        //$LASTPOS=13001925;//jseditor.TEdit:1925
        Tonyu.globals.$etc=_this.etc;
        //$LASTPOS=13001936;//jseditor.TEdit:1936
        Tonyu.globals.$desktopEnvEditor=new Tonyu.classes.jseditor.DesktopEnv;
        
        _thread.enter(function _trc_TEdit_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=13001971;//jseditor.TEdit:1971
              _this.fiber$update(_thread, 10);
              __pc=1;return;
            case 1:
              
              //$LASTPOS=13001986;//jseditor.TEdit:1986
              _this.fiber$readJSON(_thread, _this.etc.rel("projects.json"));
              __pc=2;return;
            case 2:
              _this.prjs=_thread.retVal;
              
              //$LASTPOS=13002032;//jseditor.TEdit:2032
              _this.prj = new Tonyu.classes.jseditor.JSEProject(_this.prjs,Util.getQueryString("prj"));
              
              //$LASTPOS=13002091;//jseditor.TEdit:2091
              Tonyu.globals.$jsePrj=_this.prj;
              //$LASTPOS=13002105;//jseditor.TEdit:2105
              $("title").text(Util.getQueryString("prj")+" - JS Editor");
              //$LASTPOS=13002207;//jseditor.TEdit:2207
              _this.tc = new Tonyu.classes.jseditor.TonyuC(_this.prj);
              
              //$LASTPOS=13002232;//jseditor.TEdit:2232
              _this.fl = Tonyu.globals.$fileList=new FileList($("#fileItemList"),{open: (function anonymous_2294(f) {
                
                //$LASTPOS=13002318;//jseditor.TEdit:2318
                console.log("opening",f);
                //$LASTPOS=13002353;//jseditor.TEdit:2353
                _this.es.save();
                //$LASTPOS=13002373;//jseditor.TEdit:2373
                _this.es.open(f);
              })});
              
              //$LASTPOS=13002397;//jseditor.TEdit:2397
              Tonyu.globals.$bookmark=new Tonyu.classes.jseditor.Bookmark({file: _this.etc.rel("bookmark.json"),fileList: _this.fl});
              
              //$LASTPOS=13003506;//jseditor.TEdit:3506
              _this.fiber$onResize(_thread);
              __pc=3;return;
            case 3:
              
              //$LASTPOS=13003519;//jseditor.TEdit:3519
              $(window).resize(Tonyu.bindFunc(_this,_this.onResize));
              //$LASTPOS=13003548;//jseditor.TEdit:3548
              requirejs(["ace"],(function anonymous_3566() {
                var desktopEnv;
                
                //$LASTPOS=13003584;//jseditor.TEdit:3584
                desktopEnv = Tonyu.globals.$desktopEnvEditor.model;
                
                //$LASTPOS=13003629;//jseditor.TEdit:3629
                _this.print("denv",desktopEnv&&desktopEnv.editorFontSize||12);
                //$LASTPOS=13003695;//jseditor.TEdit:3695
                console.log("ace loaded:",ace);
                //$LASTPOS=13003732;//jseditor.TEdit:3732
                Tonyu.globals.$editorSet=_this.es=new Tonyu.classes.jseditor.TEditorSet($("#progs"),$("#fileLabel"),{height: _this.editorH,fontSize: (desktopEnv&&desktopEnv.editorFontSize||12)});
                //$LASTPOS=13003901;//jseditor.TEdit:3901
                Tonyu.globals.$finder=new Tonyu.classes.jseditor.Finder;
                //$LASTPOS=13003926;//jseditor.TEdit:3926
                if (typeof  _this.SplashScreen!="undefined") {
                  //$LASTPOS=13003964;//jseditor.TEdit:3964
                  _this.SplashScreen.hide();
                }
                //$LASTPOS=13003990;//jseditor.TEdit:3990
                Tonyu.globals.$fileMenu=_this.fileMenu=new Tonyu.classes.jseditor.FileMenu({editorSet: _this.es,fileList: _this.fl});
                //$LASTPOS=13004056;//jseditor.TEdit:4056
                _this.fl.open(_this.prj.path);
                //$LASTPOS=13004086;//jseditor.TEdit:4086
                Tonyu.globals.$desktopEnvEditor.on("modelsaved",(function anonymous_4121(model) {
                  
                  //$LASTPOS=13004141;//jseditor.TEdit:4141
                  _this.print("SAVED",model);
                  //$LASTPOS=13004172;//jseditor.TEdit:4172
                  Tonyu.globals.$editorSet.setFontSize(desktopEnv.editorFontSize);
                }));
              }));
              //$LASTPOS=13004683;//jseditor.TEdit:4683
              $(window).on("beforeunload",(function anonymous_4712(e) {
                var s;
                
                //$LASTPOS=13004724;//jseditor.TEdit:4724
                s = _this.shouldConfirmClose();
                
                //$LASTPOS=13004757;//jseditor.TEdit:4757
                if (s) {
                  return s;
                  
                } else {
                  //$LASTPOS=13004808;//jseditor.TEdit:4808
                  e.preventDefault();
                  
                }
              }));
              //$LASTPOS=13004840;//jseditor.TEdit:4840
              _this.gui = nwDispatcher.requireNwGui();
              
              //$LASTPOS=13004881;//jseditor.TEdit:4881
              _this.win = _this.gui.Window.get();
              
              //$LASTPOS=13004910;//jseditor.TEdit:4910
              _this.win.on('close',(function anonymous_4926() {
                var s;
                
                //$LASTPOS=13004944;//jseditor.TEdit:4944
                s = _this.shouldConfirmClose();
                
                //$LASTPOS=13004977;//jseditor.TEdit:4977
                if (s) {
                  //$LASTPOS=13004995;//jseditor.TEdit:4995
                  if (window.confirm(s)) {
                    //$LASTPOS=13005032;//jseditor.TEdit:5032
                    _this.win.close(true);
                    
                  }
                  
                } else {
                  //$LASTPOS=13005083;//jseditor.TEdit:5083
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
        
        //$LASTPOS=13002496;//jseditor.TEdit:2496
        _this.parallel(Tonyu.bindFunc(_this,_this.setEtcP));
      },
      fiber$setEtc :function _trc_TEdit_f_setEtc(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=13002496;//jseditor.TEdit:2496
        _this.parallel(Tonyu.bindFunc(_this,_this.setEtcP));
        
        _thread.retVal=_this;return;
      },
      setEtcP :function _trc_TEdit_setEtcP() {
        "use strict";
        var _this=this;
        var np;
        
        //$LASTPOS=13002537;//jseditor.TEdit:2537
        np = _this.prompt("ワークスペースのディレクトリ",localStorage.etc||"");
        
        //$LASTPOS=13002597;//jseditor.TEdit:2597
        if (np) {
          //$LASTPOS=13002616;//jseditor.TEdit:2616
          localStorage.etc=np;
          //$LASTPOS=13002646;//jseditor.TEdit:2646
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
              //$LASTPOS=13002537;//jseditor.TEdit:2537
              _this.fiber$prompt(_thread, "ワークスペースのディレクトリ", localStorage.etc||"");
              __pc=1;return;
            case 1:
              np=_thread.retVal;
              
              //$LASTPOS=13002597;//jseditor.TEdit:2597
              if (np) {
                //$LASTPOS=13002616;//jseditor.TEdit:2616
                localStorage.etc=np;
                //$LASTPOS=13002646;//jseditor.TEdit:2646
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
        
        //$LASTPOS=13002701;//jseditor.TEdit:2701
        _this.tc.parallel("compile");
      },
      fiber$tonyuC :function _trc_TEdit_f_tonyuC(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=13002701;//jseditor.TEdit:2701
        _this.tc.parallel("compile");
        
        _thread.retVal=_this;return;
      },
      newWindow :function _trc_TEdit_newWindow() {
        "use strict";
        var _this=this;
        var genID;
        
        //$LASTPOS=13002757;//jseditor.TEdit:2757
        genID = ""+Math.random();
        
        //$LASTPOS=13002790;//jseditor.TEdit:2790
        window.open(location.href,genID,'width=800,height=400,menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes');
      },
      fiber$newWindow :function _trc_TEdit_f_newWindow(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var genID;
        
        //$LASTPOS=13002757;//jseditor.TEdit:2757
        genID = ""+Math.random();
        
        //$LASTPOS=13002790;//jseditor.TEdit:2790
        window.open(location.href,genID,'width=800,height=400,menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes');
        
        _thread.retVal=_this;return;
      },
      newWindowHome :function _trc_TEdit_newWindowHome() {
        "use strict";
        var _this=this;
        var genID;
        
        //$LASTPOS=13002954;//jseditor.TEdit:2954
        genID = ""+Math.random();
        
        //$LASTPOS=13002987;//jseditor.TEdit:2987
        window.open(location.href.replace(/\?.*/,""),genID,'width=800,height=400,menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes');
      },
      fiber$newWindowHome :function _trc_TEdit_f_newWindowHome(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var genID;
        
        //$LASTPOS=13002954;//jseditor.TEdit:2954
        genID = ""+Math.random();
        
        //$LASTPOS=13002987;//jseditor.TEdit:2987
        window.open(location.href.replace(/\?.*/,""),genID,'width=800,height=400,menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes');
        
        _thread.retVal=_this;return;
      },
      onResize :function _trc_TEdit_onResize() {
        "use strict";
        var _this=this;
        var h;
        
        //$LASTPOS=13003189;//jseditor.TEdit:3189
        h = $(window).height()-$("#navBar").height()-$("#tabTop").height();
        
        //$LASTPOS=13003264;//jseditor.TEdit:3264
        h-=20;
        //$LASTPOS=13003276;//jseditor.TEdit:3276
        _this.screenH=h;
        //$LASTPOS=13003292;//jseditor.TEdit:3292
        _this.editorH=_this.screenH-$("#fileLabel").height();
        //$LASTPOS=13003339;//jseditor.TEdit:3339
        if (_this.es) {
          //$LASTPOS=13003347;//jseditor.TEdit:3347
          _this.es.options.height=_this.editorH;
        }
        //$LASTPOS=13003379;//jseditor.TEdit:3379
        $("#progs pre").css("height",_this.editorH+"px");
        //$LASTPOS=13003428;//jseditor.TEdit:3428
        console.log("canvas size",h,_this.editorH);
        //$LASTPOS=13003472;//jseditor.TEdit:3472
        $("#fileItemList").height(h);
      },
      fiber$onResize :function _trc_TEdit_f_onResize(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var h;
        
        //$LASTPOS=13003189;//jseditor.TEdit:3189
        h = $(window).height()-$("#navBar").height()-$("#tabTop").height();
        
        //$LASTPOS=13003264;//jseditor.TEdit:3264
        h-=20;
        //$LASTPOS=13003276;//jseditor.TEdit:3276
        _this.screenH=h;
        //$LASTPOS=13003292;//jseditor.TEdit:3292
        _this.editorH=_this.screenH-$("#fileLabel").height();
        //$LASTPOS=13003339;//jseditor.TEdit:3339
        if (_this.es) {
          //$LASTPOS=13003347;//jseditor.TEdit:3347
          _this.es.options.height=_this.editorH;
        }
        //$LASTPOS=13003379;//jseditor.TEdit:3379
        $("#progs pre").css("height",_this.editorH+"px");
        //$LASTPOS=13003428;//jseditor.TEdit:3428
        console.log("canvas size",h,_this.editorH);
        //$LASTPOS=13003472;//jseditor.TEdit:3472
        $("#fileItemList").height(h);
        
        _thread.retVal=_this;return;
      },
      shouldConfirmClose :function _trc_TEdit_shouldConfirmClose() {
        "use strict";
        var _this=this;
        var m;
        
        //$LASTPOS=13004266;//jseditor.TEdit:4266
        m = (Tonyu.globals.$editorSet&&Tonyu.globals.$editorSet.allModified())||[];
        
        //$LASTPOS=13004325;//jseditor.TEdit:4325
        if (m.length>0) {
          return "保存しないで終了しますか？: "+m.map((function anonymous_4383(f) {
            
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
        
        //$LASTPOS=13004266;//jseditor.TEdit:4266
        m = (Tonyu.globals.$editorSet&&Tonyu.globals.$editorSet.allModified())||[];
        
        //$LASTPOS=13004325;//jseditor.TEdit:4325
        if (m.length>0) {
          _thread.retVal="保存しないで終了しますか？: "+m.map((function anonymous_4383(f) {
            
            return f.name();
          })).join(",");return;
          
          
        }
        
        _thread.retVal=_this;return;
      },
      openFolder :function _trc_TEdit_openFolder() {
        "use strict";
        var _this=this;
        var f;
        
        //$LASTPOS=13004512;//jseditor.TEdit:4512
        f = Tonyu.globals.$editorSet.curFile;
        
        //$LASTPOS=13004543;//jseditor.TEdit:4543
        console.log(f);
        //$LASTPOS=13004564;//jseditor.TEdit:4564
        if (f) {
          //$LASTPOS=13004582;//jseditor.TEdit:4582
          console.log(f.path());
          //$LASTPOS=13004614;//jseditor.TEdit:4614
          _this.gui.Shell.showItemInFolder(f.path().replace(/\//g,"\\"));
          
        }
      },
      fiber$openFolder :function _trc_TEdit_f_openFolder(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var f;
        
        //$LASTPOS=13004512;//jseditor.TEdit:4512
        f = Tonyu.globals.$editorSet.curFile;
        
        //$LASTPOS=13004543;//jseditor.TEdit:4543
        console.log(f);
        //$LASTPOS=13004564;//jseditor.TEdit:4564
        if (f) {
          //$LASTPOS=13004582;//jseditor.TEdit:4582
          console.log(f.path());
          //$LASTPOS=13004614;//jseditor.TEdit:4614
          _this.gui.Shell.showItemInFolder(f.path().replace(/\//g,"\\"));
          
        }
        
        _thread.retVal=_this;return;
      },
      __dummy: false
    },
    decls: {"methods":{"main":{"nowait":false},"runApp":{"nowait":false},"setEtc":{"nowait":false},"setEtcP":{"nowait":false},"tonyuC":{"nowait":false},"newWindow":{"nowait":false},"newWindowHome":{"nowait":false},"onResize":{"nowait":false},"shouldConfirmClose":{"nowait":false},"openFolder":{"nowait":false}}}
  });
});