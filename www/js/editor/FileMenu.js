define(function (require) {
  var Tonyu=require('Tonyu');
  var UIDiag=require('UIDiag');
  var Base=require('Base');
  return Tonyu.klass.define({
    fullName: 'jseditor.FileMenu',
    shortName: 'FileMenu',
    namespace: 'jseditor',
    superclass: Tonyu.classes.jseditor.Base,
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
      create :function _trc_FileMenu_create() {
        "use strict";
        var _this=this;
        var es;
        var fl;
        var dir;
        var n;
        var nf;
        var isd;
        
        //$LASTPOS=4000047;//jseditor.FileMenu:47
        es = _this.editorSet;
        
        //$LASTPOS=4000069;//jseditor.FileMenu:69
        fl = _this.fileList;
        
        //$LASTPOS=4000090;//jseditor.FileMenu:90
        dir = fl.curDir;
        
        //$LASTPOS=4000113;//jseditor.FileMenu:113
        if (! dir) {
          return _this;
        }
        //$LASTPOS=4000135;//jseditor.FileMenu:135
        n = _this.waitFor(UIDiag.prompt("ファイル名"));
        
        //$LASTPOS=4000178;//jseditor.FileMenu:178
        if (! n) {
          return _this;
        }
        //$LASTPOS=4000198;//jseditor.FileMenu:198
        console.log("fn",n);
        //$LASTPOS=4000223;//jseditor.FileMenu:223
        nf = dir.rel(n);
        
        //$LASTPOS=4000246;//jseditor.FileMenu:246
        isd = _this.waitFor(nf.isDir());
        
        //$LASTPOS=4000279;//jseditor.FileMenu:279
        if (isd) {
          //$LASTPOS=4000298;//jseditor.FileMenu:298
          dir=nf;
          //$LASTPOS=4000314;//jseditor.FileMenu:314
          _this.waitFor(nf.mkdir());
          
        } else {
          //$LASTPOS=4000356;//jseditor.FileMenu:356
          _this.waitFor(nf.text(""));
          
        }
        //$LASTPOS=4000388;//jseditor.FileMenu:388
        _this.waitFor(fl.open(dir));
        //$LASTPOS=4000415;//jseditor.FileMenu:415
        if (! isd) {
          //$LASTPOS=4000435;//jseditor.FileMenu:435
          es.open(nf);
          
        }
      },
      fiber$create :function _trc_FileMenu_f_create(_thread) {
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
        
        //$LASTPOS=4000047;//jseditor.FileMenu:47
        es = _this.editorSet;
        
        //$LASTPOS=4000069;//jseditor.FileMenu:69
        fl = _this.fileList;
        
        //$LASTPOS=4000090;//jseditor.FileMenu:90
        dir = fl.curDir;
        
        //$LASTPOS=4000113;//jseditor.FileMenu:113
        if (! dir) {
          _thread.retVal=_this;return;
          
        }
        
        _thread.enter(function _trc_FileMenu_ent_create(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=4000135;//jseditor.FileMenu:135
              _this.fiber$waitFor(_thread, UIDiag.prompt("ファイル名"));
              __pc=1;return;
            case 1:
              n=_thread.retVal;
              
              //$LASTPOS=4000178;//jseditor.FileMenu:178
              if (!(! n)) { __pc=2; break; }
              _thread.exit(_this);return;
            case 2:
              
              //$LASTPOS=4000198;//jseditor.FileMenu:198
              console.log("fn",n);
              //$LASTPOS=4000223;//jseditor.FileMenu:223
              nf = dir.rel(n);
              
              //$LASTPOS=4000246;//jseditor.FileMenu:246
              _this.fiber$waitFor(_thread, nf.isDir());
              __pc=3;return;
            case 3:
              isd=_thread.retVal;
              
              //$LASTPOS=4000279;//jseditor.FileMenu:279
              if (!(isd)) { __pc=5; break; }
              //$LASTPOS=4000298;//jseditor.FileMenu:298
              dir=nf;
              //$LASTPOS=4000314;//jseditor.FileMenu:314
              _this.fiber$waitFor(_thread, nf.mkdir());
              __pc=4;return;
            case 4:
              
              __pc=7;break;
            case 5:
              //$LASTPOS=4000356;//jseditor.FileMenu:356
              _this.fiber$waitFor(_thread, nf.text(""));
              __pc=6;return;
            case 6:
              
            case 7:
              
              //$LASTPOS=4000388;//jseditor.FileMenu:388
              _this.fiber$waitFor(_thread, fl.open(dir));
              __pc=8;return;
            case 8:
              
              //$LASTPOS=4000415;//jseditor.FileMenu:415
              if (! isd) {
                //$LASTPOS=4000435;//jseditor.FileMenu:435
                es.open(nf);
                
              }
              _thread.exit(_this);return;
            }
          }
        });
      },
      rename :function _trc_FileMenu_rename() {
        "use strict";
        var _this=this;
        
      },
      fiber$rename :function _trc_FileMenu_f_rename(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        _thread.retVal=_this;return;
      },
      copy :function _trc_FileMenu_copy() {
        "use strict";
        var _this=this;
        
      },
      fiber$copy :function _trc_FileMenu_f_copy(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        _thread.retVal=_this;return;
      },
      del :function _trc_FileMenu_del() {
        "use strict";
        var _this=this;
        
      },
      fiber$del :function _trc_FileMenu_f_del(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        _thread.retVal=_this;return;
      },
      __dummy: false
    },
    decls: {"methods":{"main":{"nowait":false},"create":{"nowait":false},"rename":{"nowait":false},"copy":{"nowait":false},"del":{"nowait":false}}}
  });
});