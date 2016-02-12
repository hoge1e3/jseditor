define(function (require) {
  var Tonyu=require('Tonyu');
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
        
        //$LASTPOS=5000047;//jseditor.FileMenu:47
        es = _this.editorSet;
        
        //$LASTPOS=5000069;//jseditor.FileMenu:69
        fl = _this.fileList;
        
        //$LASTPOS=5000090;//jseditor.FileMenu:90
        dir = _this.curDir;
        
        //$LASTPOS=5000110;//jseditor.FileMenu:110
        if (! dir) {
          return _this;
        }
        //$LASTPOS=5000132;//jseditor.FileMenu:132
        n = _this.prompt("ファイル名");
        
        //$LASTPOS=5000159;//jseditor.FileMenu:159
        if (! n) {
          return _this;
        }
        //$LASTPOS=5000179;//jseditor.FileMenu:179
        console.log("fn",n);
        //$LASTPOS=5000204;//jseditor.FileMenu:204
        nf = dir.rel(n);
        
        //$LASTPOS=5000227;//jseditor.FileMenu:227
        isd = _this.isDir(nf);
        
        //$LASTPOS=5000250;//jseditor.FileMenu:250
        if (isd) {
          //$LASTPOS=5000269;//jseditor.FileMenu:269
          dir=nf;
          //$LASTPOS=5000285;//jseditor.FileMenu:285
          _this.mkdir(nf);
          
        } else {
          //$LASTPOS=5000317;//jseditor.FileMenu:317
          _this.writeFile(nf,"");
          
        }
        //$LASTPOS=5000345;//jseditor.FileMenu:345
        _this.waitFor(fl.open(dir));
        //$LASTPOS=5000372;//jseditor.FileMenu:372
        if (! isd) {
          //$LASTPOS=5000392;//jseditor.FileMenu:392
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
        
        //$LASTPOS=5000047;//jseditor.FileMenu:47
        es = _this.editorSet;
        
        //$LASTPOS=5000069;//jseditor.FileMenu:69
        fl = _this.fileList;
        
        //$LASTPOS=5000090;//jseditor.FileMenu:90
        dir = _this.curDir;
        
        //$LASTPOS=5000110;//jseditor.FileMenu:110
        if (! dir) {
          _thread.retVal=_this;return;
          
        }
        
        _thread.enter(function _trc_FileMenu_ent_create(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=5000132;//jseditor.FileMenu:132
              _this.fiber$prompt(_thread, "ファイル名");
              __pc=1;return;
            case 1:
              n=_thread.retVal;
              
              //$LASTPOS=5000159;//jseditor.FileMenu:159
              if (!(! n)) { __pc=2; break; }
              _thread.exit(_this);return;
            case 2:
              
              //$LASTPOS=5000179;//jseditor.FileMenu:179
              console.log("fn",n);
              //$LASTPOS=5000204;//jseditor.FileMenu:204
              nf = dir.rel(n);
              
              //$LASTPOS=5000227;//jseditor.FileMenu:227
              _this.fiber$isDir(_thread, nf);
              __pc=3;return;
            case 3:
              isd=_thread.retVal;
              
              //$LASTPOS=5000250;//jseditor.FileMenu:250
              if (!(isd)) { __pc=5; break; }
              //$LASTPOS=5000269;//jseditor.FileMenu:269
              dir=nf;
              //$LASTPOS=5000285;//jseditor.FileMenu:285
              _this.fiber$mkdir(_thread, nf);
              __pc=4;return;
            case 4:
              
              __pc=7;break;
            case 5:
              //$LASTPOS=5000317;//jseditor.FileMenu:317
              _this.fiber$writeFile(_thread, nf, "");
              __pc=6;return;
            case 6:
              
            case 7:
              
              //$LASTPOS=5000345;//jseditor.FileMenu:345
              _this.fiber$waitFor(_thread, fl.open(dir));
              __pc=8;return;
            case 8:
              
              //$LASTPOS=5000372;//jseditor.FileMenu:372
              if (! isd) {
                //$LASTPOS=5000392;//jseditor.FileMenu:392
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
      __getter__curDir :function _trc_FileMenu___getter__curDir() {
        "use strict";
        var _this=this;
        
        return _this.fileList.curDir;
      },
      remove :function _trc_FileMenu_remove() {
        "use strict";
        var _this=this;
        var fl;
        var f;
        var r;
        
        //$LASTPOS=5000506;//jseditor.FileMenu:506
        fl = _this.fileList;
        
        //$LASTPOS=5000527;//jseditor.FileMenu:527
        f = fl.lastSelected;
        
        //$LASTPOS=5000554;//jseditor.FileMenu:554
        if (! f) {
          return _this;
        }
        //$LASTPOS=5000574;//jseditor.FileMenu:574
        r = _this.confirm(f.path()+"を削除しますか？");
        
        //$LASTPOS=5000614;//jseditor.FileMenu:614
        if (! r) {
          return _this;
        }
        //$LASTPOS=5000634;//jseditor.FileMenu:634
        _this.rm(f);
        //$LASTPOS=5000645;//jseditor.FileMenu:645
        if (_this.curDir) {
          //$LASTPOS=5000657;//jseditor.FileMenu:657
          _this.waitFor(fl.open(_this.curDir));
        }
      },
      fiber$remove :function _trc_FileMenu_f_remove(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var fl;
        var f;
        var r;
        
        //$LASTPOS=5000506;//jseditor.FileMenu:506
        fl = _this.fileList;
        
        //$LASTPOS=5000527;//jseditor.FileMenu:527
        f = fl.lastSelected;
        
        //$LASTPOS=5000554;//jseditor.FileMenu:554
        if (! f) {
          _thread.retVal=_this;return;
          
        }
        
        _thread.enter(function _trc_FileMenu_ent_remove(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=5000574;//jseditor.FileMenu:574
              _this.fiber$confirm(_thread, f.path()+"を削除しますか？");
              __pc=1;return;
            case 1:
              r=_thread.retVal;
              
              //$LASTPOS=5000614;//jseditor.FileMenu:614
              if (!(! r)) { __pc=2; break; }
              _thread.exit(_this);return;
            case 2:
              
              //$LASTPOS=5000634;//jseditor.FileMenu:634
              _this.fiber$rm(_thread, f);
              __pc=3;return;
            case 3:
              
              //$LASTPOS=5000645;//jseditor.FileMenu:645
              if (!(_this.curDir)) { __pc=5; break; }
              //$LASTPOS=5000657;//jseditor.FileMenu:657
              _this.fiber$waitFor(_thread, fl.open(_this.curDir));
              __pc=4;return;
            case 4:
              
            case 5:
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      __dummy: false
    },
    decls: {"methods":{"main":{"nowait":false},"create":{"nowait":false},"rename":{"nowait":false},"copy":{"nowait":false},"__getter__curDir":{"nowait":true},"remove":{"nowait":false}}}
  });
});