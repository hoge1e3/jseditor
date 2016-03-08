define(function (require) {
  var Tonyu=require('Tonyu');
  var UIForm=require('UIForm');
  var MyForm=require('MyForm');
  return Tonyu.klass.define({
    fullName: 'jseditor.DesktopEnv',
    shortName: 'DesktopEnv',
    namespace: 'jseditor',
    superclass: Tonyu.classes.jseditor.UIForm,
    includes: [],
    methods: {
      main :function _trc_DesktopEnv_main() {
        "use strict";
        var _this=this;
        
        //$LASTPOS=17000017;//jseditor.DesktopEnv:17
        _this.modelType={editorFontSize: "number"};
        //$LASTPOS=17000054;//jseditor.DesktopEnv:54
        _this.tag("div",(function anonymous_65() {
          
          //$LASTPOS=17000072;//jseditor.DesktopEnv:72
          _this.tag("div","エディタの文字の大きさ");
          //$LASTPOS=17000102;//jseditor.DesktopEnv:102
          _this.tag("input",{$bind: "editorFontSize",on: {enterkey: Tonyu.bindFunc(_this,_this.close)}});
          //$LASTPOS=17000165;//jseditor.DesktopEnv:165
          _this.tag("button",{on: {click: Tonyu.bindFunc(_this,_this.close)}},"OK");
          //$LASTPOS=17000208;//jseditor.DesktopEnv:208
          _this.tag(Tonyu.classes.jseditor.MyForm,{mesg: "おまけ"});
        }));
        //$LASTPOS=17000237;//jseditor.DesktopEnv:237
        _this.loadModel(Tonyu.globals.$etc.rel("desktop.json"));
      },
      fiber$main :function _trc_DesktopEnv_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=17000017;//jseditor.DesktopEnv:17
        _this.modelType={editorFontSize: "number"};
        
        _thread.enter(function _trc_DesktopEnv_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=17000054;//jseditor.DesktopEnv:54
              _this.fiber$tag(_thread, "div", (function anonymous_65() {
                
                //$LASTPOS=17000072;//jseditor.DesktopEnv:72
                _this.tag("div","エディタの文字の大きさ");
                //$LASTPOS=17000102;//jseditor.DesktopEnv:102
                _this.tag("input",{$bind: "editorFontSize",on: {enterkey: Tonyu.bindFunc(_this,_this.close)}});
                //$LASTPOS=17000165;//jseditor.DesktopEnv:165
                _this.tag("button",{on: {click: Tonyu.bindFunc(_this,_this.close)}},"OK");
                //$LASTPOS=17000208;//jseditor.DesktopEnv:208
                _this.tag(Tonyu.classes.jseditor.MyForm,{mesg: "おまけ"});
              }));
              __pc=1;return;
            case 1:
              
              //$LASTPOS=17000237;//jseditor.DesktopEnv:237
              _this.fiber$loadModel(_thread, Tonyu.globals.$etc.rel("desktop.json"));
              __pc=2;return;
            case 2:
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      close :function _trc_DesktopEnv_close() {
        "use strict";
        var _this=this;
        
        //$LASTPOS=17000290;//jseditor.DesktopEnv:290
        _this.saveModel();
        //$LASTPOS=17000307;//jseditor.DesktopEnv:307
        _this.dialog("close");
      },
      fiber$close :function _trc_DesktopEnv_f_close(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        _thread.enter(function _trc_DesktopEnv_ent_close(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=17000290;//jseditor.DesktopEnv:290
              _this.fiber$saveModel(_thread);
              __pc=1;return;
            case 1:
              
              //$LASTPOS=17000307;//jseditor.DesktopEnv:307
              _this.fiber$dialog(_thread, "close");
              __pc=2;return;
            case 2:
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      __dummy: false
    },
    decls: {"methods":{"main":{"nowait":false},"close":{"nowait":false}}}
  });
});