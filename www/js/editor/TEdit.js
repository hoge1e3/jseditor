define(function (require) {
  var Tonyu=require('Tonyu');
  var Columns=require('Columns');
  var FS=require('FS');
  var Util=require('Util');
  var JSONConf=require('JSONConf');
  var FileList=require('FileList');
  var ace=require('ace');
  var Finder=require('Finder');
  var Base=require('Base');
  var TMenu=require('TMenu');
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
        
        //$LASTPOS=8000173;//jseditor.TEdit:173
        Columns.make(["div",{id: "fileViewer","class": "col-xs-3"},["div",{id: "fileItemList"}]],["div",{id: "mainArea","class": "col-xs-9"},["div",{id: "fileLabel"},"."],["div",{id: "progs"}]]);
        
        //$LASTPOS=8000426;//jseditor.TEdit:426
        (new Tonyu.classes.jseditor.TMenu).make("JS Editor",[{label: "Home",href: "index.html"},{label: "ファイル",sub: [{label: "新規",id: "newFile",action: "$fileMenu.create"},{label: "名前変更",id: "mvFile",action: "$fileMenu.rename"},{label: "上書き保存",id: "saveFile",action: "$editorSet.save",key: "ctrl+s"},{label: "コピー",id: "cpFile"},{label: "削除",id: "rmFile",action: "$fileMenu.remove"}]},{label: "ツール",sub: [{label: "TonyuC",id: "tonyuC",action: Tonyu.bindFunc(_this,_this.tonyuC),key: "f9"}]},{label: "ウィンドウ",sub: [{label: "新規ウィンドウ",id: "newWindow",action: Tonyu.bindFunc(_this,_this.newWindow)},{label: "ブックマーク...",id: "bookmark",action: "$bookmark.open"}]},{label: "設定",sub: [{label: "エディタの文字の大きさ...",id: "textsize",action: Tonyu.bindFunc(_this,_this.textSize)},{label: "ワークスペース切り替え...",id: "setEtc",action: Tonyu.bindFunc(_this,_this.setEtc)}]}]);
        
        
        //$LASTPOS=8001529;//jseditor.TEdit:1529
        _this.cwd = FS.get(Util.getQueryString("dir")||process.cwd().replace(/\\/g,"/"));
        
        //$LASTPOS=8001612;//jseditor.TEdit:1612
        _this.projectTop = FS.get(process.cwd().replace(/\\/g,"/")).rel("www/");
        
        //$LASTPOS=8001684;//jseditor.TEdit:1684
        _this.etc = localStorage.etc?FS.get(localStorage.etc):FS.get(process.cwd()).rel(".jsetc/");
        
        //$LASTPOS=8001789;//jseditor.TEdit:1789
        _this.desktopEnv = new JSONConf(_this.etc.rel("desktop.json"));
        
        //$LASTPOS=8001844;//jseditor.TEdit:1844
        Tonyu.globals.$reqConfBuilder=new Tonyu.classes.jseditor.ReqConfBuilder({output: _this.projectTop.rel("js/reqConf.js"),htmlDir: _this.projectTop});
        //$LASTPOS=8001954;//jseditor.TEdit:1954
        _this.desktopEnv.load();
        //$LASTPOS=8001974;//jseditor.TEdit:1974
        _this.fl = Tonyu.globals.$fileList=new FileList($("#fileItemList"),{open: (function anonymous_2036(f) {
          
          //$LASTPOS=8002060;//jseditor.TEdit:2060
          console.log("opening",f);
          //$LASTPOS=8002095;//jseditor.TEdit:2095
          _this.es.save();
          //$LASTPOS=8002115;//jseditor.TEdit:2115
          _this.es.open(f);
        })});
        
        //$LASTPOS=8002139;//jseditor.TEdit:2139
        Tonyu.globals.$bookmark=new Tonyu.classes.jseditor.Bookmark({file: _this.etc.rel("bookmark.json"),fileList: _this.fl});
        
        //$LASTPOS=8003397;//jseditor.TEdit:3397
        _this.onResize();
        //$LASTPOS=8003410;//jseditor.TEdit:3410
        $(window).resize(Tonyu.bindFunc(_this,_this.onResize));
        //$LASTPOS=8003439;//jseditor.TEdit:3439
        requirejs(["ace"],(function anonymous_3457() {
          
          //$LASTPOS=8003475;//jseditor.TEdit:3475
          console.log("ace loaded:",ace);
          //$LASTPOS=8003512;//jseditor.TEdit:3512
          Tonyu.globals.$editorSet=_this.es=new Tonyu.classes.jseditor.TEditorSet($("#progs"),$("#fileLabel"),{height: _this.editorH,fontSize: (_this.desktopEnv.data&&_this.desktopEnv.data.editorFontSize||12)});
          //$LASTPOS=8003691;//jseditor.TEdit:3691
          Tonyu.globals.$finder=new Finder(_this.es);
          //$LASTPOS=8003720;//jseditor.TEdit:3720
          if (typeof  _this.SplashScreen!="undefined") {
            //$LASTPOS=8003758;//jseditor.TEdit:3758
            _this.SplashScreen.hide();
          }
          //$LASTPOS=8003784;//jseditor.TEdit:3784
          Tonyu.globals.$fileMenu=_this.fileMenu=new Tonyu.classes.jseditor.FileMenu({editorSet: _this.es,fileList: _this.fl});
          return _this.fl.open(_this.cwd);
        }));
        //$LASTPOS=8004093;//jseditor.TEdit:4093
        $(window).on("beforeunload",(function anonymous_4122(e) {
          var s;
          
          //$LASTPOS=8004134;//jseditor.TEdit:4134
          s = _this.shouldConfirmClose();
          
          //$LASTPOS=8004167;//jseditor.TEdit:4167
          if (s) {
            return s;
            
          } else {
            //$LASTPOS=8004218;//jseditor.TEdit:4218
            e.preventDefault();
            
          }
        }));
        //$LASTPOS=8004250;//jseditor.TEdit:4250
        _this.gui = nwDispatcher.requireNwGui();
        
        //$LASTPOS=8004291;//jseditor.TEdit:4291
        _this.win = _this.gui.Window.get();
        
        //$LASTPOS=8004320;//jseditor.TEdit:4320
        _this.win.on('close',(function anonymous_4336() {
          var s;
          
          //$LASTPOS=8004354;//jseditor.TEdit:4354
          s = _this.shouldConfirmClose();
          
          //$LASTPOS=8004387;//jseditor.TEdit:4387
          if (s) {
            //$LASTPOS=8004405;//jseditor.TEdit:4405
            if (window.confirm(s)) {
              //$LASTPOS=8004442;//jseditor.TEdit:4442
              _this.win.close(true);
              
            }
            
          } else {
            //$LASTPOS=8004493;//jseditor.TEdit:4493
            _this.win.close(true);
            
          }
        }));
      },
      fiber$main :function _trc_TEdit_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=8000173;//jseditor.TEdit:173
        Columns.make(["div",{id: "fileViewer","class": "col-xs-3"},["div",{id: "fileItemList"}]],["div",{id: "mainArea","class": "col-xs-9"},["div",{id: "fileLabel"},"."],["div",{id: "progs"}]]);
        
        //$LASTPOS=8000426;//jseditor.TEdit:426
        (new Tonyu.classes.jseditor.TMenu).make("JS Editor",[{label: "Home",href: "index.html"},{label: "ファイル",sub: [{label: "新規",id: "newFile",action: "$fileMenu.create"},{label: "名前変更",id: "mvFile",action: "$fileMenu.rename"},{label: "上書き保存",id: "saveFile",action: "$editorSet.save",key: "ctrl+s"},{label: "コピー",id: "cpFile"},{label: "削除",id: "rmFile",action: "$fileMenu.remove"}]},{label: "ツール",sub: [{label: "TonyuC",id: "tonyuC",action: Tonyu.bindFunc(_this,_this.tonyuC),key: "f9"}]},{label: "ウィンドウ",sub: [{label: "新規ウィンドウ",id: "newWindow",action: Tonyu.bindFunc(_this,_this.newWindow)},{label: "ブックマーク...",id: "bookmark",action: "$bookmark.open"}]},{label: "設定",sub: [{label: "エディタの文字の大きさ...",id: "textsize",action: Tonyu.bindFunc(_this,_this.textSize)},{label: "ワークスペース切り替え...",id: "setEtc",action: Tonyu.bindFunc(_this,_this.setEtc)}]}]);
        
        
        //$LASTPOS=8001529;//jseditor.TEdit:1529
        _this.cwd = FS.get(Util.getQueryString("dir")||process.cwd().replace(/\\/g,"/"));
        
        //$LASTPOS=8001612;//jseditor.TEdit:1612
        _this.projectTop = FS.get(process.cwd().replace(/\\/g,"/")).rel("www/");
        
        //$LASTPOS=8001684;//jseditor.TEdit:1684
        _this.etc = localStorage.etc?FS.get(localStorage.etc):FS.get(process.cwd()).rel(".jsetc/");
        
        //$LASTPOS=8001789;//jseditor.TEdit:1789
        _this.desktopEnv = new JSONConf(_this.etc.rel("desktop.json"));
        
        //$LASTPOS=8001844;//jseditor.TEdit:1844
        Tonyu.globals.$reqConfBuilder=new Tonyu.classes.jseditor.ReqConfBuilder({output: _this.projectTop.rel("js/reqConf.js"),htmlDir: _this.projectTop});
        //$LASTPOS=8001954;//jseditor.TEdit:1954
        _this.desktopEnv.load();
        //$LASTPOS=8001974;//jseditor.TEdit:1974
        _this.fl = Tonyu.globals.$fileList=new FileList($("#fileItemList"),{open: (function anonymous_2036(f) {
          
          //$LASTPOS=8002060;//jseditor.TEdit:2060
          console.log("opening",f);
          //$LASTPOS=8002095;//jseditor.TEdit:2095
          _this.es.save();
          //$LASTPOS=8002115;//jseditor.TEdit:2115
          _this.es.open(f);
        })});
        
        //$LASTPOS=8002139;//jseditor.TEdit:2139
        Tonyu.globals.$bookmark=new Tonyu.classes.jseditor.Bookmark({file: _this.etc.rel("bookmark.json"),fileList: _this.fl});
        
        
        _thread.enter(function _trc_TEdit_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=8003397;//jseditor.TEdit:3397
              _this.fiber$onResize(_thread);
              __pc=1;return;
            case 1:
              
              //$LASTPOS=8003410;//jseditor.TEdit:3410
              $(window).resize(Tonyu.bindFunc(_this,_this.onResize));
              //$LASTPOS=8003439;//jseditor.TEdit:3439
              requirejs(["ace"],(function anonymous_3457() {
                
                //$LASTPOS=8003475;//jseditor.TEdit:3475
                console.log("ace loaded:",ace);
                //$LASTPOS=8003512;//jseditor.TEdit:3512
                Tonyu.globals.$editorSet=_this.es=new Tonyu.classes.jseditor.TEditorSet($("#progs"),$("#fileLabel"),{height: _this.editorH,fontSize: (_this.desktopEnv.data&&_this.desktopEnv.data.editorFontSize||12)});
                //$LASTPOS=8003691;//jseditor.TEdit:3691
                Tonyu.globals.$finder=new Finder(_this.es);
                //$LASTPOS=8003720;//jseditor.TEdit:3720
                if (typeof  _this.SplashScreen!="undefined") {
                  //$LASTPOS=8003758;//jseditor.TEdit:3758
                  _this.SplashScreen.hide();
                }
                //$LASTPOS=8003784;//jseditor.TEdit:3784
                Tonyu.globals.$fileMenu=_this.fileMenu=new Tonyu.classes.jseditor.FileMenu({editorSet: _this.es,fileList: _this.fl});
                return _this.fl.open(_this.cwd);
              }));
              //$LASTPOS=8004093;//jseditor.TEdit:4093
              $(window).on("beforeunload",(function anonymous_4122(e) {
                var s;
                
                //$LASTPOS=8004134;//jseditor.TEdit:4134
                s = _this.shouldConfirmClose();
                
                //$LASTPOS=8004167;//jseditor.TEdit:4167
                if (s) {
                  return s;
                  
                } else {
                  //$LASTPOS=8004218;//jseditor.TEdit:4218
                  e.preventDefault();
                  
                }
              }));
              //$LASTPOS=8004250;//jseditor.TEdit:4250
              _this.gui = nwDispatcher.requireNwGui();
              
              //$LASTPOS=8004291;//jseditor.TEdit:4291
              _this.win = _this.gui.Window.get();
              
              //$LASTPOS=8004320;//jseditor.TEdit:4320
              _this.win.on('close',(function anonymous_4336() {
                var s;
                
                //$LASTPOS=8004354;//jseditor.TEdit:4354
                s = _this.shouldConfirmClose();
                
                //$LASTPOS=8004387;//jseditor.TEdit:4387
                if (s) {
                  //$LASTPOS=8004405;//jseditor.TEdit:4405
                  if (window.confirm(s)) {
                    //$LASTPOS=8004442;//jseditor.TEdit:4442
                    _this.win.close(true);
                    
                  }
                  
                } else {
                  //$LASTPOS=8004493;//jseditor.TEdit:4493
                  _this.win.close(true);
                  
                }
              }));
              _thread.exit(_this);return;
            }
          }
        });
      },
      setEtc :function _trc_TEdit_setEtc() {
        "use strict";
        var _this=this;
        
        //$LASTPOS=8002238;//jseditor.TEdit:2238
        _this.parallel(Tonyu.bindFunc(_this,_this.setEtcP));
      },
      fiber$setEtc :function _trc_TEdit_f_setEtc(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=8002238;//jseditor.TEdit:2238
        _this.parallel(Tonyu.bindFunc(_this,_this.setEtcP));
        
        _thread.retVal=_this;return;
      },
      setEtcP :function _trc_TEdit_setEtcP() {
        "use strict";
        var _this=this;
        var np;
        
        //$LASTPOS=8002279;//jseditor.TEdit:2279
        np = _this.prompt("ワークスペースのディレクトリ",_this.etc.path());
        
        //$LASTPOS=8002329;//jseditor.TEdit:2329
        if (np) {
          //$LASTPOS=8002348;//jseditor.TEdit:2348
          localStorage.etc=np;
          //$LASTPOS=8002378;//jseditor.TEdit:2378
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
              //$LASTPOS=8002279;//jseditor.TEdit:2279
              _this.fiber$prompt(_thread, "ワークスペースのディレクトリ", _this.etc.path());
              __pc=1;return;
            case 1:
              np=_thread.retVal;
              
              //$LASTPOS=8002329;//jseditor.TEdit:2329
              if (np) {
                //$LASTPOS=8002348;//jseditor.TEdit:2348
                localStorage.etc=np;
                //$LASTPOS=8002378;//jseditor.TEdit:2378
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
        
        //$LASTPOS=8002433;//jseditor.TEdit:2433
        tc = new Tonyu.classes.jseditor.TonyuC;
        
        //$LASTPOS=8002457;//jseditor.TEdit:2457
        tc.parallel("compile",_this.projectTop.rel("js/"));
      },
      fiber$tonyuC :function _trc_TEdit_f_tonyuC(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var tc;
        
        //$LASTPOS=8002433;//jseditor.TEdit:2433
        tc = new Tonyu.classes.jseditor.TonyuC;
        
        //$LASTPOS=8002457;//jseditor.TEdit:2457
        tc.parallel("compile",_this.projectTop.rel("js/"));
        
        _thread.retVal=_this;return;
      },
      newWindow :function _trc_TEdit_newWindow() {
        "use strict";
        var _this=this;
        var genID;
        
        //$LASTPOS=8002535;//jseditor.TEdit:2535
        genID = ""+Math.random();
        
        //$LASTPOS=8002568;//jseditor.TEdit:2568
        window.open(location.href,genID,'width=800,height=400,menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes');
      },
      fiber$newWindow :function _trc_TEdit_f_newWindow(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var genID;
        
        //$LASTPOS=8002535;//jseditor.TEdit:2535
        genID = ""+Math.random();
        
        //$LASTPOS=8002568;//jseditor.TEdit:2568
        window.open(location.href,genID,'width=800,height=400,menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes');
        
        _thread.retVal=_this;return;
      },
      textSize :function _trc_TEdit_textSize() {
        "use strict";
        var _this=this;
        
        //$LASTPOS=8002727;//jseditor.TEdit:2727
        _this.parallel("textSizeP");
      },
      fiber$textSize :function _trc_TEdit_f_textSize(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=8002727;//jseditor.TEdit:2727
        _this.parallel("textSizeP");
        
        _thread.retVal=_this;return;
      },
      textSizeP :function _trc_TEdit_textSizeP() {
        "use strict";
        var _this=this;
        var s;
        
        //$LASTPOS=8002782;//jseditor.TEdit:2782
        s = _this.prompt("エディタの文字の大きさ",_this.desktopEnv.data.editorFontSize||12);
        
        //$LASTPOS=8002880;//jseditor.TEdit:2880
        _this.desktopEnv.data.editorFontSize=window.parseInt(s);
        //$LASTPOS=8002936;//jseditor.TEdit:2936
        if (_this.es) {
          //$LASTPOS=8002944;//jseditor.TEdit:2944
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
              //$LASTPOS=8002782;//jseditor.TEdit:2782
              _this.fiber$prompt(_thread, "エディタの文字の大きさ", _this.desktopEnv.data.editorFontSize||12);
              __pc=1;return;
            case 1:
              s=_thread.retVal;
              
              //$LASTPOS=8002880;//jseditor.TEdit:2880
              _this.desktopEnv.data.editorFontSize=window.parseInt(s);
              //$LASTPOS=8002936;//jseditor.TEdit:2936
              if (_this.es) {
                //$LASTPOS=8002944;//jseditor.TEdit:2944
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
        
        //$LASTPOS=8003080;//jseditor.TEdit:3080
        h = $(window).height()-$("#navBar").height()-$("#tabTop").height();
        
        //$LASTPOS=8003155;//jseditor.TEdit:3155
        h-=20;
        //$LASTPOS=8003167;//jseditor.TEdit:3167
        _this.screenH=h;
        //$LASTPOS=8003183;//jseditor.TEdit:3183
        _this.editorH=_this.screenH-$("#fileLabel").height();
        //$LASTPOS=8003230;//jseditor.TEdit:3230
        if (_this.es) {
          //$LASTPOS=8003238;//jseditor.TEdit:3238
          _this.es.options.height=_this.editorH;
        }
        //$LASTPOS=8003270;//jseditor.TEdit:3270
        $("#progs pre").css("height",_this.editorH+"px");
        //$LASTPOS=8003319;//jseditor.TEdit:3319
        console.log("canvas size",h,_this.editorH);
        //$LASTPOS=8003363;//jseditor.TEdit:3363
        $("#fileItemList").height(h);
      },
      fiber$onResize :function _trc_TEdit_f_onResize(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var h;
        
        //$LASTPOS=8003080;//jseditor.TEdit:3080
        h = $(window).height()-$("#navBar").height()-$("#tabTop").height();
        
        //$LASTPOS=8003155;//jseditor.TEdit:3155
        h-=20;
        //$LASTPOS=8003167;//jseditor.TEdit:3167
        _this.screenH=h;
        //$LASTPOS=8003183;//jseditor.TEdit:3183
        _this.editorH=_this.screenH-$("#fileLabel").height();
        //$LASTPOS=8003230;//jseditor.TEdit:3230
        if (_this.es) {
          //$LASTPOS=8003238;//jseditor.TEdit:3238
          _this.es.options.height=_this.editorH;
        }
        //$LASTPOS=8003270;//jseditor.TEdit:3270
        $("#progs pre").css("height",_this.editorH+"px");
        //$LASTPOS=8003319;//jseditor.TEdit:3319
        console.log("canvas size",h,_this.editorH);
        //$LASTPOS=8003363;//jseditor.TEdit:3363
        $("#fileItemList").height(h);
        
        _thread.retVal=_this;return;
      },
      shouldConfirmClose :function _trc_TEdit_shouldConfirmClose() {
        "use strict";
        var _this=this;
        var m;
        
        //$LASTPOS=8003906;//jseditor.TEdit:3906
        m = (Tonyu.globals.$editorSet&&Tonyu.globals.$editorSet.allModified())||[];
        
        //$LASTPOS=8003965;//jseditor.TEdit:3965
        if (m.length>0) {
          return "保存しないで終了しますか？: "+m.map((function anonymous_4023(f) {
            
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
        
        //$LASTPOS=8003906;//jseditor.TEdit:3906
        m = (Tonyu.globals.$editorSet&&Tonyu.globals.$editorSet.allModified())||[];
        
        //$LASTPOS=8003965;//jseditor.TEdit:3965
        if (m.length>0) {
          _thread.retVal="保存しないで終了しますか？: "+m.map((function anonymous_4023(f) {
            
            return f.name();
          })).join(",");return;
          
          
        }
        
        _thread.retVal=_this;return;
      },
      __dummy: false
    },
    decls: {"methods":{"main":{"nowait":false},"setEtc":{"nowait":false},"setEtcP":{"nowait":false},"tonyuC":{"nowait":false},"newWindow":{"nowait":false},"textSize":{"nowait":false},"textSizeP":{"nowait":false},"onResize":{"nowait":false},"shouldConfirmClose":{"nowait":false}}}
  });
});