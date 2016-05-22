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
        
        //$LASTPOS=13003191;//jseditor.TEdit:3191
        _this.onResize();
        //$LASTPOS=13003204;//jseditor.TEdit:3204
        $(window).resize(Tonyu.bindFunc(_this,_this.onResize));
        //$LASTPOS=13003233;//jseditor.TEdit:3233
        requirejs(["ace"],(function anonymous_3251() {
          var desktopEnv;
          
          //$LASTPOS=13003269;//jseditor.TEdit:3269
          desktopEnv = Tonyu.globals.$desktopEnvEditor.model;
          
          //$LASTPOS=13003314;//jseditor.TEdit:3314
          _this.print("denv",desktopEnv&&desktopEnv.editorFontSize||12);
          //$LASTPOS=13003380;//jseditor.TEdit:3380
          console.log("ace loaded:",ace);
          //$LASTPOS=13003417;//jseditor.TEdit:3417
          Tonyu.globals.$editorSet=_this.es=new Tonyu.classes.jseditor.TEditorSet($("#progs"),$("#fileLabel"),{height: _this.editorH,fontSize: (desktopEnv&&desktopEnv.editorFontSize||12)});
          //$LASTPOS=13003586;//jseditor.TEdit:3586
          Tonyu.globals.$finder=new Tonyu.classes.jseditor.Finder;
          //$LASTPOS=13003611;//jseditor.TEdit:3611
          if (typeof  _this.SplashScreen!="undefined") {
            //$LASTPOS=13003649;//jseditor.TEdit:3649
            _this.SplashScreen.hide();
          }
          //$LASTPOS=13003675;//jseditor.TEdit:3675
          Tonyu.globals.$fileMenu=_this.fileMenu=new Tonyu.classes.jseditor.FileMenu({editorSet: _this.es,fileList: _this.fl});
          //$LASTPOS=13003741;//jseditor.TEdit:3741
          _this.fl.open(_this.prj.path);
          //$LASTPOS=13003771;//jseditor.TEdit:3771
          Tonyu.globals.$desktopEnvEditor.on("modelsaved",(function anonymous_3806(model) {
            
            //$LASTPOS=13003826;//jseditor.TEdit:3826
            _this.print("SAVED",model);
            //$LASTPOS=13003857;//jseditor.TEdit:3857
            Tonyu.globals.$editorSet.setFontSize(desktopEnv.editorFontSize);
          }));
        }));
        //$LASTPOS=13004368;//jseditor.TEdit:4368
        $(window).on("beforeunload",(function anonymous_4397(e) {
          var s;
          
          //$LASTPOS=13004409;//jseditor.TEdit:4409
          s = _this.shouldConfirmClose();
          
          //$LASTPOS=13004442;//jseditor.TEdit:4442
          if (s) {
            return s;
            
          } else {
            //$LASTPOS=13004493;//jseditor.TEdit:4493
            e.preventDefault();
            
          }
        }));
        //$LASTPOS=13004525;//jseditor.TEdit:4525
        _this.gui = nwDispatcher.requireNwGui();
        
        //$LASTPOS=13004566;//jseditor.TEdit:4566
        _this.win = _this.gui.Window.get();
        
        //$LASTPOS=13004595;//jseditor.TEdit:4595
        _this.win.on('close',(function anonymous_4611() {
          var s;
          
          //$LASTPOS=13004629;//jseditor.TEdit:4629
          s = _this.shouldConfirmClose();
          
          //$LASTPOS=13004662;//jseditor.TEdit:4662
          if (s) {
            //$LASTPOS=13004680;//jseditor.TEdit:4680
            if (window.confirm(s)) {
              //$LASTPOS=13004717;//jseditor.TEdit:4717
              _this.win.close(true);
              
            }
            
          } else {
            //$LASTPOS=13004768;//jseditor.TEdit:4768
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
              
              //$LASTPOS=13003191;//jseditor.TEdit:3191
              _this.fiber$onResize(_thread);
              __pc=3;return;
            case 3:
              
              //$LASTPOS=13003204;//jseditor.TEdit:3204
              $(window).resize(Tonyu.bindFunc(_this,_this.onResize));
              //$LASTPOS=13003233;//jseditor.TEdit:3233
              requirejs(["ace"],(function anonymous_3251() {
                var desktopEnv;
                
                //$LASTPOS=13003269;//jseditor.TEdit:3269
                desktopEnv = Tonyu.globals.$desktopEnvEditor.model;
                
                //$LASTPOS=13003314;//jseditor.TEdit:3314
                _this.print("denv",desktopEnv&&desktopEnv.editorFontSize||12);
                //$LASTPOS=13003380;//jseditor.TEdit:3380
                console.log("ace loaded:",ace);
                //$LASTPOS=13003417;//jseditor.TEdit:3417
                Tonyu.globals.$editorSet=_this.es=new Tonyu.classes.jseditor.TEditorSet($("#progs"),$("#fileLabel"),{height: _this.editorH,fontSize: (desktopEnv&&desktopEnv.editorFontSize||12)});
                //$LASTPOS=13003586;//jseditor.TEdit:3586
                Tonyu.globals.$finder=new Tonyu.classes.jseditor.Finder;
                //$LASTPOS=13003611;//jseditor.TEdit:3611
                if (typeof  _this.SplashScreen!="undefined") {
                  //$LASTPOS=13003649;//jseditor.TEdit:3649
                  _this.SplashScreen.hide();
                }
                //$LASTPOS=13003675;//jseditor.TEdit:3675
                Tonyu.globals.$fileMenu=_this.fileMenu=new Tonyu.classes.jseditor.FileMenu({editorSet: _this.es,fileList: _this.fl});
                //$LASTPOS=13003741;//jseditor.TEdit:3741
                _this.fl.open(_this.prj.path);
                //$LASTPOS=13003771;//jseditor.TEdit:3771
                Tonyu.globals.$desktopEnvEditor.on("modelsaved",(function anonymous_3806(model) {
                  
                  //$LASTPOS=13003826;//jseditor.TEdit:3826
                  _this.print("SAVED",model);
                  //$LASTPOS=13003857;//jseditor.TEdit:3857
                  Tonyu.globals.$editorSet.setFontSize(desktopEnv.editorFontSize);
                }));
              }));
              //$LASTPOS=13004368;//jseditor.TEdit:4368
              $(window).on("beforeunload",(function anonymous_4397(e) {
                var s;
                
                //$LASTPOS=13004409;//jseditor.TEdit:4409
                s = _this.shouldConfirmClose();
                
                //$LASTPOS=13004442;//jseditor.TEdit:4442
                if (s) {
                  return s;
                  
                } else {
                  //$LASTPOS=13004493;//jseditor.TEdit:4493
                  e.preventDefault();
                  
                }
              }));
              //$LASTPOS=13004525;//jseditor.TEdit:4525
              _this.gui = nwDispatcher.requireNwGui();
              
              //$LASTPOS=13004566;//jseditor.TEdit:4566
              _this.win = _this.gui.Window.get();
              
              //$LASTPOS=13004595;//jseditor.TEdit:4595
              _this.win.on('close',(function anonymous_4611() {
                var s;
                
                //$LASTPOS=13004629;//jseditor.TEdit:4629
                s = _this.shouldConfirmClose();
                
                //$LASTPOS=13004662;//jseditor.TEdit:4662
                if (s) {
                  //$LASTPOS=13004680;//jseditor.TEdit:4680
                  if (window.confirm(s)) {
                    //$LASTPOS=13004717;//jseditor.TEdit:4717
                    _this.win.close(true);
                    
                  }
                  
                } else {
                  //$LASTPOS=13004768;//jseditor.TEdit:4768
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
        np = _this.prompt("ワークスペースのディレクトリ",localStorage.etc||"");
        
        //$LASTPOS=13002500;//jseditor.TEdit:2500
        if (np) {
          //$LASTPOS=13002519;//jseditor.TEdit:2519
          localStorage.etc=np;
          //$LASTPOS=13002549;//jseditor.TEdit:2549
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
              _this.fiber$prompt(_thread, "ワークスペースのディレクトリ", localStorage.etc||"");
              __pc=1;return;
            case 1:
              np=_thread.retVal;
              
              //$LASTPOS=13002500;//jseditor.TEdit:2500
              if (np) {
                //$LASTPOS=13002519;//jseditor.TEdit:2519
                localStorage.etc=np;
                //$LASTPOS=13002549;//jseditor.TEdit:2549
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
        
        //$LASTPOS=13002604;//jseditor.TEdit:2604
        _this.tc.parallel("compile");
      },
      fiber$tonyuC :function _trc_TEdit_f_tonyuC(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=13002604;//jseditor.TEdit:2604
        _this.tc.parallel("compile");
        
        _thread.retVal=_this;return;
      },
      newWindow :function _trc_TEdit_newWindow() {
        "use strict";
        var _this=this;
        var genID;
        
        //$LASTPOS=13002660;//jseditor.TEdit:2660
        genID = ""+Math.random();
        
        //$LASTPOS=13002693;//jseditor.TEdit:2693
        window.open(location.href,genID,'width=800,height=400,menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes');
      },
      fiber$newWindow :function _trc_TEdit_f_newWindow(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var genID;
        
        //$LASTPOS=13002660;//jseditor.TEdit:2660
        genID = ""+Math.random();
        
        //$LASTPOS=13002693;//jseditor.TEdit:2693
        window.open(location.href,genID,'width=800,height=400,menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes');
        
        _thread.retVal=_this;return;
      },
      onResize :function _trc_TEdit_onResize() {
        "use strict";
        var _this=this;
        var h;
        
        //$LASTPOS=13002874;//jseditor.TEdit:2874
        h = $(window).height()-$("#navBar").height()-$("#tabTop").height();
        
        //$LASTPOS=13002949;//jseditor.TEdit:2949
        h-=20;
        //$LASTPOS=13002961;//jseditor.TEdit:2961
        _this.screenH=h;
        //$LASTPOS=13002977;//jseditor.TEdit:2977
        _this.editorH=_this.screenH-$("#fileLabel").height();
        //$LASTPOS=13003024;//jseditor.TEdit:3024
        if (_this.es) {
          //$LASTPOS=13003032;//jseditor.TEdit:3032
          _this.es.options.height=_this.editorH;
        }
        //$LASTPOS=13003064;//jseditor.TEdit:3064
        $("#progs pre").css("height",_this.editorH+"px");
        //$LASTPOS=13003113;//jseditor.TEdit:3113
        console.log("canvas size",h,_this.editorH);
        //$LASTPOS=13003157;//jseditor.TEdit:3157
        $("#fileItemList").height(h);
      },
      fiber$onResize :function _trc_TEdit_f_onResize(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var h;
        
        //$LASTPOS=13002874;//jseditor.TEdit:2874
        h = $(window).height()-$("#navBar").height()-$("#tabTop").height();
        
        //$LASTPOS=13002949;//jseditor.TEdit:2949
        h-=20;
        //$LASTPOS=13002961;//jseditor.TEdit:2961
        _this.screenH=h;
        //$LASTPOS=13002977;//jseditor.TEdit:2977
        _this.editorH=_this.screenH-$("#fileLabel").height();
        //$LASTPOS=13003024;//jseditor.TEdit:3024
        if (_this.es) {
          //$LASTPOS=13003032;//jseditor.TEdit:3032
          _this.es.options.height=_this.editorH;
        }
        //$LASTPOS=13003064;//jseditor.TEdit:3064
        $("#progs pre").css("height",_this.editorH+"px");
        //$LASTPOS=13003113;//jseditor.TEdit:3113
        console.log("canvas size",h,_this.editorH);
        //$LASTPOS=13003157;//jseditor.TEdit:3157
        $("#fileItemList").height(h);
        
        _thread.retVal=_this;return;
      },
      shouldConfirmClose :function _trc_TEdit_shouldConfirmClose() {
        "use strict";
        var _this=this;
        var m;
        
        //$LASTPOS=13003951;//jseditor.TEdit:3951
        m = (Tonyu.globals.$editorSet&&Tonyu.globals.$editorSet.allModified())||[];
        
        //$LASTPOS=13004010;//jseditor.TEdit:4010
        if (m.length>0) {
          return "保存しないで終了しますか？: "+m.map((function anonymous_4068(f) {
            
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
        
        //$LASTPOS=13003951;//jseditor.TEdit:3951
        m = (Tonyu.globals.$editorSet&&Tonyu.globals.$editorSet.allModified())||[];
        
        //$LASTPOS=13004010;//jseditor.TEdit:4010
        if (m.length>0) {
          _thread.retVal="保存しないで終了しますか？: "+m.map((function anonymous_4068(f) {
            
            return f.name();
          })).join(",");return;
          
          
        }
        
        _thread.retVal=_this;return;
      },
      openFolder :function _trc_TEdit_openFolder() {
        "use strict";
        var _this=this;
        var f;
        
        //$LASTPOS=13004197;//jseditor.TEdit:4197
        f = Tonyu.globals.$editorSet.curFile;
        
        //$LASTPOS=13004228;//jseditor.TEdit:4228
        console.log(f);
        //$LASTPOS=13004249;//jseditor.TEdit:4249
        if (f) {
          //$LASTPOS=13004267;//jseditor.TEdit:4267
          console.log(f.path());
          //$LASTPOS=13004299;//jseditor.TEdit:4299
          _this.gui.Shell.showItemInFolder(f.path().replace(/\//g,"\\"));
          
        }
      },
      fiber$openFolder :function _trc_TEdit_f_openFolder(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var f;
        
        //$LASTPOS=13004197;//jseditor.TEdit:4197
        f = Tonyu.globals.$editorSet.curFile;
        
        //$LASTPOS=13004228;//jseditor.TEdit:4228
        console.log(f);
        //$LASTPOS=13004249;//jseditor.TEdit:4249
        if (f) {
          //$LASTPOS=13004267;//jseditor.TEdit:4267
          console.log(f.path());
          //$LASTPOS=13004299;//jseditor.TEdit:4299
          _this.gui.Shell.showItemInFolder(f.path().replace(/\//g,"\\"));
          
        }
        
        _thread.retVal=_this;return;
      },
      __dummy: false
    },
    decls: {"methods":{"main":{"nowait":false},"runApp":{"nowait":false},"setEtc":{"nowait":false},"setEtcP":{"nowait":false},"tonyuC":{"nowait":false},"newWindow":{"nowait":false},"onResize":{"nowait":false},"shouldConfirmClose":{"nowait":false},"openFolder":{"nowait":false}}}
  });
});