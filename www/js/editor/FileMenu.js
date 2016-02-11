define(function (require) {
  var Tonyu=require('Tonyu');
  var Tonyu=require('Tonyu');
  var UIDiag=require('UIDiag');
  var WaitMod=require('WaitMod');
  return Tonyu.klass.define({
    fullName: 'jseditor.FileMenu',
    shortName: 'FileMenu',
    namespace: 'jseditor',
    includes: [Tonyu.classes.jseditor.WaitMod],
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
      initialize :function _trc_FileMenu_initialize(p) {
        "use strict";
        var _this=this;
        
        //$LASTPOS=3000049;//jseditor.FileMenu:49
        Tonyu.extend(_this,p);
      },
      newFile :function _trc_FileMenu_newFile() {
        "use strict";
        var _this=this;
        var es;
        var fl;
        var dir;
        var n;
        var nf;
        var isd;
        
        //$LASTPOS=3000090;//jseditor.FileMenu:90
        es = _this.editorSet;
        
        //$LASTPOS=3000112;//jseditor.FileMenu:112
        fl = _this.fileList;
        
        //$LASTPOS=3000133;//jseditor.FileMenu:133
        dir = fl.curDir;
        
        //$LASTPOS=3000156;//jseditor.FileMenu:156
        if (! dir) {
          return _this;
        }
        //$LASTPOS=3000178;//jseditor.FileMenu:178
        n = _this.waitFor(UIDiag.prompt("ファイル名"));
        
        //$LASTPOS=3000221;//jseditor.FileMenu:221
        console.log("fn",n);
        //$LASTPOS=3000246;//jseditor.FileMenu:246
        nf = dir.rel(n);
        
        //$LASTPOS=3000269;//jseditor.FileMenu:269
        isd = _this.waitFor(nf.isDir());
        
        //$LASTPOS=3000302;//jseditor.FileMenu:302
        if (isd) {
          //$LASTPOS=3000321;//jseditor.FileMenu:321
          dir=nf;
          //$LASTPOS=3000337;//jseditor.FileMenu:337
          _this.waitFor(nf.mkdir());
          
        } else {
          //$LASTPOS=3000379;//jseditor.FileMenu:379
          _this.waitFor(nf.text(""));
          
        }
        //$LASTPOS=3000411;//jseditor.FileMenu:411
        _this.waitFor(fl.open(dir));
        //$LASTPOS=3000438;//jseditor.FileMenu:438
        if (! isd) {
          //$LASTPOS=3000458;//jseditor.FileMenu:458
          es.open(nf);
          
        }
      },
      fiber$newFile :function _trc_FileMenu_f_newFile(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var es;
        var fl;
        var dir;
        var n;
        var nf;
        var isd;
        
        //$LASTPOS=3000090;//jseditor.FileMenu:90
        es = _this.editorSet;
        
        //$LASTPOS=3000112;//jseditor.FileMenu:112
        fl = _this.fileList;
        
        //$LASTPOS=3000133;//jseditor.FileMenu:133
        dir = fl.curDir;
        
        //$LASTPOS=3000156;//jseditor.FileMenu:156
        if (! dir) {
          _thread.retVal=_this;return;
          
        }
        
        _thread.enter(function _trc_FileMenu_ent_newFile(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=3000178;//jseditor.FileMenu:178
              _this.fiber$waitFor(_thread, UIDiag.prompt("ファイル名"));
              __pc=1;return;
            case 1:
              n=_thread.retVal;
              
              //$LASTPOS=3000221;//jseditor.FileMenu:221
              console.log("fn",n);
              //$LASTPOS=3000246;//jseditor.FileMenu:246
              nf = dir.rel(n);
              
              //$LASTPOS=3000269;//jseditor.FileMenu:269
              _this.fiber$waitFor(_thread, nf.isDir());
              __pc=2;return;
            case 2:
              isd=_thread.retVal;
              
              //$LASTPOS=3000302;//jseditor.FileMenu:302
              if (!(isd)) { __pc=4; break; }
              //$LASTPOS=3000321;//jseditor.FileMenu:321
              dir=nf;
              //$LASTPOS=3000337;//jseditor.FileMenu:337
              _this.fiber$waitFor(_thread, nf.mkdir());
              __pc=3;return;
            case 3:
              
              __pc=6;break;
            case 4:
              //$LASTPOS=3000379;//jseditor.FileMenu:379
              _this.fiber$waitFor(_thread, nf.text(""));
              __pc=5;return;
            case 5:
              
            case 6:
              
              //$LASTPOS=3000411;//jseditor.FileMenu:411
              _this.fiber$waitFor(_thread, fl.open(dir));
              __pc=7;return;
            case 7:
              
              //$LASTPOS=3000438;//jseditor.FileMenu:438
              if (! isd) {
                //$LASTPOS=3000458;//jseditor.FileMenu:458
                es.open(nf);
                
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