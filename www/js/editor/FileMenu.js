define(function (require) {
  var Tonyu=require('Tonyu');
  var UIDiag=require('UIDiag');
  var WaitMod=require('WaitMod');
  return Tonyu.klass.define({
    fullName: 'jseditor.FileMenu',
    shortName: 'FileMenu',
    namespace: 'jseditor',
    superclass: Tonyu.classes.jseditor.WaitMod,
    includes: [],
    methods: {
      main :function _trc_FileMenu_main() {
        "use strict";
        var _this=this;
        
      },
      fiber$main :function _trc_FileMenu_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        _thread.retVal=_this;return;
      },
      initialize :function _trc_FileMenu_initialize(env) {
        "use strict";
        var _this=this;
        
        //$LASTPOS=3000070;//jseditor.FileMenu:70
        _this.es=env.editorSet;
        //$LASTPOS=3000092;//jseditor.FileMenu:92
        _this.fl=env.fileList;
      },
      newFile :function _trc_FileMenu_newFile() {
        "use strict";
        var _this=this;
        var dir;
        var n;
        var nf;
        var isd;
        
        //$LASTPOS=3000128;//jseditor.FileMenu:128
        dir = _this.fl.curDir;
        
        //$LASTPOS=3000151;//jseditor.FileMenu:151
        if (! dir) {
          return _this;
        }
        //$LASTPOS=3000173;//jseditor.FileMenu:173
        n = _this.waitFor(UIDiag.prompt("ファイル名"));
        
        //$LASTPOS=3000216;//jseditor.FileMenu:216
        nf = dir.rel(n);
        
        //$LASTPOS=3000239;//jseditor.FileMenu:239
        isd = _this.waitFor(nf.isDir());
        
        //$LASTPOS=3000272;//jseditor.FileMenu:272
        if (isd) {
          //$LASTPOS=3000291;//jseditor.FileMenu:291
          dir=nf;
          //$LASTPOS=3000307;//jseditor.FileMenu:307
          _this.waitFor(nf.mkdir());
          
        } else {
          //$LASTPOS=3000349;//jseditor.FileMenu:349
          _this.waitFor(nf.text(""));
          
        }
        //$LASTPOS=3000381;//jseditor.FileMenu:381
        _this.waitFor(_this.fl.open(dir));
        //$LASTPOS=3000408;//jseditor.FileMenu:408
        if (! isd) {
          //$LASTPOS=3000428;//jseditor.FileMenu:428
          _this.es.open(nf);
          
        }
      },
      fiber$newFile :function _trc_FileMenu_f_newFile(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var dir;
        var n;
        var nf;
        var isd;
        
        //$LASTPOS=3000128;//jseditor.FileMenu:128
        dir = _this.fl.curDir;
        
        //$LASTPOS=3000151;//jseditor.FileMenu:151
        if (! dir) {
          _thread.retVal=_this;return;
          
        }
        
        _thread.enter(function _trc_FileMenu_ent_newFile(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=3000173;//jseditor.FileMenu:173
              _this.fiber$waitFor(_thread, UIDiag.prompt("ファイル名"));
              __pc=1;return;
            case 1:
              n=_thread.retVal;
              
              //$LASTPOS=3000216;//jseditor.FileMenu:216
              nf = dir.rel(n);
              
              //$LASTPOS=3000239;//jseditor.FileMenu:239
              _this.fiber$waitFor(_thread, nf.isDir());
              __pc=2;return;
            case 2:
              isd=_thread.retVal;
              
              //$LASTPOS=3000272;//jseditor.FileMenu:272
              if (!(isd)) { __pc=4; break; }
              //$LASTPOS=3000291;//jseditor.FileMenu:291
              dir=nf;
              //$LASTPOS=3000307;//jseditor.FileMenu:307
              _this.fiber$waitFor(_thread, nf.mkdir());
              __pc=3;return;
            case 3:
              
              __pc=6;break;
            case 4:
              //$LASTPOS=3000349;//jseditor.FileMenu:349
              _this.fiber$waitFor(_thread, nf.text(""));
              __pc=5;return;
            case 5:
              
            case 6:
              
              //$LASTPOS=3000381;//jseditor.FileMenu:381
              _this.fiber$waitFor(_thread, _this.fl.open(dir));
              __pc=7;return;
            case 7:
              
              //$LASTPOS=3000408;//jseditor.FileMenu:408
              if (! isd) {
                //$LASTPOS=3000428;//jseditor.FileMenu:428
                _this.es.open(nf);
                
              }
              _thread.exit(_this);return;
            }
          }
        });
      },
      __dummy: false
    },
    decls: {"methods":{"main":{"nowait":false},"new":{"nowait":false},"newFile":{"nowait":false}}}
  });
});