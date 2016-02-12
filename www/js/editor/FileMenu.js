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
        nf = dir.rel(n);
        
        //$LASTPOS=5000202;//jseditor.FileMenu:202
        isd = _this.isDir(nf);
        
        //$LASTPOS=5000225;//jseditor.FileMenu:225
        if (isd) {
          //$LASTPOS=5000244;//jseditor.FileMenu:244
          dir=nf;
          //$LASTPOS=5000260;//jseditor.FileMenu:260
          _this.mkdir(nf);
          
        } else {
          //$LASTPOS=5000292;//jseditor.FileMenu:292
          _this.writeFile(nf,"");
          
        }
        //$LASTPOS=5000320;//jseditor.FileMenu:320
        _this.waitFor(fl.open(dir));
        //$LASTPOS=5000347;//jseditor.FileMenu:347
        if (! isd) {
          //$LASTPOS=5000367;//jseditor.FileMenu:367
          _this.waitFor(fl.open(nf));
          
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
              nf = dir.rel(n);
              
              //$LASTPOS=5000202;//jseditor.FileMenu:202
              _this.fiber$isDir(_thread, nf);
              __pc=3;return;
            case 3:
              isd=_thread.retVal;
              
              //$LASTPOS=5000225;//jseditor.FileMenu:225
              if (!(isd)) { __pc=5; break; }
              //$LASTPOS=5000244;//jseditor.FileMenu:244
              dir=nf;
              //$LASTPOS=5000260;//jseditor.FileMenu:260
              _this.fiber$mkdir(_thread, nf);
              __pc=4;return;
            case 4:
              
              __pc=7;break;
            case 5:
              //$LASTPOS=5000292;//jseditor.FileMenu:292
              _this.fiber$writeFile(_thread, nf, "");
              __pc=6;return;
            case 6:
              
            case 7:
              
              //$LASTPOS=5000320;//jseditor.FileMenu:320
              _this.fiber$waitFor(_thread, fl.open(dir));
              __pc=8;return;
            case 8:
              
              //$LASTPOS=5000347;//jseditor.FileMenu:347
              if (!(! isd)) { __pc=10; break; }
              //$LASTPOS=5000367;//jseditor.FileMenu:367
              _this.fiber$waitFor(_thread, fl.open(nf));
              __pc=9;return;
            case 9:
              
            case 10:
              
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
        
        //$LASTPOS=5000490;//jseditor.FileMenu:490
        fl = _this.fileList;
        
        //$LASTPOS=5000511;//jseditor.FileMenu:511
        f = fl.lastSelected;
        
        //$LASTPOS=5000538;//jseditor.FileMenu:538
        if (! f) {
          return _this;
        }
        //$LASTPOS=5000558;//jseditor.FileMenu:558
        r = _this.confirm(f.path()+"を削除しますか？");
        
        //$LASTPOS=5000598;//jseditor.FileMenu:598
        if (! r) {
          return _this;
        }
        //$LASTPOS=5000618;//jseditor.FileMenu:618
        _this.rm(f);
        //$LASTPOS=5000629;//jseditor.FileMenu:629
        _this.editorSet.close(f);
        //$LASTPOS=5000653;//jseditor.FileMenu:653
        if (_this.curDir) {
          //$LASTPOS=5000665;//jseditor.FileMenu:665
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
        
        //$LASTPOS=5000490;//jseditor.FileMenu:490
        fl = _this.fileList;
        
        //$LASTPOS=5000511;//jseditor.FileMenu:511
        f = fl.lastSelected;
        
        //$LASTPOS=5000538;//jseditor.FileMenu:538
        if (! f) {
          _thread.retVal=_this;return;
          
        }
        
        _thread.enter(function _trc_FileMenu_ent_remove(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=5000558;//jseditor.FileMenu:558
              _this.fiber$confirm(_thread, f.path()+"を削除しますか？");
              __pc=1;return;
            case 1:
              r=_thread.retVal;
              
              //$LASTPOS=5000598;//jseditor.FileMenu:598
              if (!(! r)) { __pc=2; break; }
              _thread.exit(_this);return;
            case 2:
              
              //$LASTPOS=5000618;//jseditor.FileMenu:618
              _this.fiber$rm(_thread, f);
              __pc=3;return;
            case 3:
              
              //$LASTPOS=5000629;//jseditor.FileMenu:629
              _this.editorSet.close(f);
              //$LASTPOS=5000653;//jseditor.FileMenu:653
              if (!(_this.curDir)) { __pc=5; break; }
              //$LASTPOS=5000665;//jseditor.FileMenu:665
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