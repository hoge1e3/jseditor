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
        var dir;
        var n;
        var nf;
        var isd;
        
        //$LASTPOS=11000047;//jseditor.FileMenu:47
        dir = _this.curDir;
        
        //$LASTPOS=11000067;//jseditor.FileMenu:67
        if (! dir) {
          return _this;
        }
        //$LASTPOS=11000089;//jseditor.FileMenu:89
        n = _this.prompt("ファイル名");
        
        //$LASTPOS=11000116;//jseditor.FileMenu:116
        if (! n) {
          return _this;
        }
        //$LASTPOS=11000136;//jseditor.FileMenu:136
        nf = dir.rel(n);
        
        //$LASTPOS=11000159;//jseditor.FileMenu:159
        isd = _this.isDir(nf);
        
        //$LASTPOS=11000182;//jseditor.FileMenu:182
        if (isd) {
          //$LASTPOS=11000201;//jseditor.FileMenu:201
          _this.mkdir(nf);
          
        } else {
          //$LASTPOS=11000233;//jseditor.FileMenu:233
          _this.writeFile(nf,"");
          
        }
        //$LASTPOS=11000261;//jseditor.FileMenu:261
        _this.waitFor(_this.fileList.open(nf));
      },
      fiber$create :function _trc_FileMenu_f_create(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var dir;
        var n;
        var nf;
        var isd;
        
        //$LASTPOS=11000047;//jseditor.FileMenu:47
        dir = _this.curDir;
        
        //$LASTPOS=11000067;//jseditor.FileMenu:67
        if (! dir) {
          _thread.retVal=_this;return;
          
        }
        
        _thread.enter(function _trc_FileMenu_ent_create(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=11000089;//jseditor.FileMenu:89
              _this.fiber$prompt(_thread, "ファイル名");
              __pc=1;return;
            case 1:
              n=_thread.retVal;
              
              //$LASTPOS=11000116;//jseditor.FileMenu:116
              if (!(! n)) { __pc=2; break; }
              _thread.exit(_this);return;
            case 2:
              
              //$LASTPOS=11000136;//jseditor.FileMenu:136
              nf = dir.rel(n);
              
              //$LASTPOS=11000159;//jseditor.FileMenu:159
              _this.fiber$isDir(_thread, nf);
              __pc=3;return;
            case 3:
              isd=_thread.retVal;
              
              //$LASTPOS=11000182;//jseditor.FileMenu:182
              if (!(isd)) { __pc=5; break; }
              //$LASTPOS=11000201;//jseditor.FileMenu:201
              _this.fiber$mkdir(_thread, nf);
              __pc=4;return;
            case 4:
              
              __pc=7;break;
            case 5:
              //$LASTPOS=11000233;//jseditor.FileMenu:233
              _this.fiber$writeFile(_thread, nf, "");
              __pc=6;return;
            case 6:
              
            case 7:
              
              //$LASTPOS=11000261;//jseditor.FileMenu:261
              _this.fiber$waitFor(_thread, _this.fileList.open(nf));
              __pc=8;return;
            case 8:
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      cdfl :function _trc_FileMenu_cdfl() {
        "use strict";
        var _this=this;
        
        //$LASTPOS=11000306;//jseditor.FileMenu:306
        if (_this.curDir) {
          //$LASTPOS=11000318;//jseditor.FileMenu:318
          _this.cd(_this.curDir);
        }
      },
      fiber$cdfl :function _trc_FileMenu_f_cdfl(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=11000306;//jseditor.FileMenu:306
        if (_this.curDir) {
          //$LASTPOS=11000318;//jseditor.FileMenu:318
          _this.cd(_this.curDir);
        }
        
        _thread.retVal=_this;return;
      },
      renameOrCopy :function _trc_FileMenu_renameOrCopy(rc) {
        "use strict";
        var _this=this;
        var f;
        var nf;
        
        //$LASTPOS=11000356;//jseditor.FileMenu:356
        _this.cdfl();
        //$LASTPOS=11000368;//jseditor.FileMenu:368
        _this.print(_this.cwd.path());
        //$LASTPOS=11000391;//jseditor.FileMenu:391
        f = _this.fileList.lastSelected;
        
        //$LASTPOS=11000424;//jseditor.FileMenu:424
        if (! f) {
          return _this;
        }
        //$LASTPOS=11000444;//jseditor.FileMenu:444
        nf = _this.prompt("ファイル"+["名の変更","のコピー"][rc],f.name());
        
        //$LASTPOS=11000500;//jseditor.FileMenu:500
        if (! nf) {
          return _this;
        }
        //$LASTPOS=11000521;//jseditor.FileMenu:521
        nf=_this.resolve(nf);
        //$LASTPOS=11000541;//jseditor.FileMenu:541
        if (nf.exists()) {
          //$LASTPOS=11000568;//jseditor.FileMenu:568
          _this.alert(nf+"は存在します");
          return _this;
          
        }
        //$LASTPOS=11000614;//jseditor.FileMenu:614
        if (rc==0) {
          //$LASTPOS=11000625;//jseditor.FileMenu:625
          _this.mv(f,nf);
        } else {
          //$LASTPOS=11000640;//jseditor.FileMenu:640
          _this.cp(f,nf);
        }
        //$LASTPOS=11000654;//jseditor.FileMenu:654
        if (rc==0) {
          //$LASTPOS=11000665;//jseditor.FileMenu:665
          _this.editorSet.close(f);
        }
        //$LASTPOS=11000689;//jseditor.FileMenu:689
        _this.waitFor(_this.fileList.open(nf));
        //$LASTPOS=11000721;//jseditor.FileMenu:721
        if (_this.curDir) {
          //$LASTPOS=11000733;//jseditor.FileMenu:733
          _this.waitFor(_this.fileList.open(_this.curDir));
        }
      },
      fiber$renameOrCopy :function _trc_FileMenu_f_renameOrCopy(_thread,rc) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var f;
        var nf;
        
        
        _thread.enter(function _trc_FileMenu_ent_renameOrCopy(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=11000356;//jseditor.FileMenu:356
              _this.fiber$cdfl(_thread);
              __pc=1;return;
            case 1:
              
              //$LASTPOS=11000368;//jseditor.FileMenu:368
              _this.print(_this.cwd.path());
              //$LASTPOS=11000391;//jseditor.FileMenu:391
              f = _this.fileList.lastSelected;
              
              //$LASTPOS=11000424;//jseditor.FileMenu:424
              if (!(! f)) { __pc=2; break; }
              _thread.exit(_this);return;
            case 2:
              
              //$LASTPOS=11000444;//jseditor.FileMenu:444
              _this.fiber$prompt(_thread, "ファイル"+["名の変更","のコピー"][rc], f.name());
              __pc=3;return;
            case 3:
              nf=_thread.retVal;
              
              //$LASTPOS=11000500;//jseditor.FileMenu:500
              if (!(! nf)) { __pc=4; break; }
              _thread.exit(_this);return;
            case 4:
              
              //$LASTPOS=11000521;//jseditor.FileMenu:521
              nf=_this.resolve(nf);
              //$LASTPOS=11000541;//jseditor.FileMenu:541
              if (!(nf.exists())) { __pc=6; break; }
              //$LASTPOS=11000568;//jseditor.FileMenu:568
              _this.fiber$alert(_thread, nf+"は存在します");
              __pc=5;return;
            case 5:
              
              _thread.exit(_this);return;
            case 6:
              
              //$LASTPOS=11000614;//jseditor.FileMenu:614
              if (!(rc==0)) { __pc=8; break; }
              //$LASTPOS=11000625;//jseditor.FileMenu:625
              _this.fiber$mv(_thread, f, nf);
              __pc=7;return;
            case 7:
              
              __pc=10;break;
            case 8:
              //$LASTPOS=11000640;//jseditor.FileMenu:640
              _this.fiber$cp(_thread, f, nf);
              __pc=9;return;
            case 9:
              
            case 10:
              
              //$LASTPOS=11000654;//jseditor.FileMenu:654
              if (rc==0) {
                //$LASTPOS=11000665;//jseditor.FileMenu:665
                _this.editorSet.close(f);
              }
              //$LASTPOS=11000689;//jseditor.FileMenu:689
              _this.fiber$waitFor(_thread, _this.fileList.open(nf));
              __pc=11;return;
            case 11:
              
              //$LASTPOS=11000721;//jseditor.FileMenu:721
              if (!(_this.curDir)) { __pc=13; break; }
              //$LASTPOS=11000733;//jseditor.FileMenu:733
              _this.fiber$waitFor(_thread, _this.fileList.open(_this.curDir));
              __pc=12;return;
            case 12:
              
            case 13:
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      rename :function _trc_FileMenu_rename() {
        "use strict";
        var _this=this;
        
        //$LASTPOS=11000782;//jseditor.FileMenu:782
        _this.renameOrCopy(0);
      },
      fiber$rename :function _trc_FileMenu_f_rename(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        _thread.enter(function _trc_FileMenu_ent_rename(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=11000782;//jseditor.FileMenu:782
              _this.fiber$renameOrCopy(_thread, 0);
              __pc=1;return;
            case 1:
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      copy :function _trc_FileMenu_copy() {
        "use strict";
        var _this=this;
        
        //$LASTPOS=11000815;//jseditor.FileMenu:815
        _this.renameOrCopy(1);
      },
      fiber$copy :function _trc_FileMenu_f_copy(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        _thread.enter(function _trc_FileMenu_ent_copy(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=11000815;//jseditor.FileMenu:815
              _this.fiber$renameOrCopy(_thread, 1);
              __pc=1;return;
            case 1:
              
              _thread.exit(_this);return;
            }
          }
        });
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
        
        //$LASTPOS=11000890;//jseditor.FileMenu:890
        fl = _this.fileList;
        
        //$LASTPOS=11000911;//jseditor.FileMenu:911
        f = fl.lastSelected;
        
        //$LASTPOS=11000938;//jseditor.FileMenu:938
        if (! f) {
          return _this;
        }
        //$LASTPOS=11000958;//jseditor.FileMenu:958
        r = _this.confirm(f.path()+"を削除しますか？");
        
        //$LASTPOS=11000998;//jseditor.FileMenu:998
        if (! r) {
          return _this;
        }
        //$LASTPOS=11001018;//jseditor.FileMenu:1018
        _this.rm(f);
        //$LASTPOS=11001029;//jseditor.FileMenu:1029
        _this.editorSet.close(f);
        //$LASTPOS=11001053;//jseditor.FileMenu:1053
        if (_this.curDir) {
          //$LASTPOS=11001065;//jseditor.FileMenu:1065
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
        
        //$LASTPOS=11000890;//jseditor.FileMenu:890
        fl = _this.fileList;
        
        //$LASTPOS=11000911;//jseditor.FileMenu:911
        f = fl.lastSelected;
        
        //$LASTPOS=11000938;//jseditor.FileMenu:938
        if (! f) {
          _thread.retVal=_this;return;
          
        }
        
        _thread.enter(function _trc_FileMenu_ent_remove(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=11000958;//jseditor.FileMenu:958
              _this.fiber$confirm(_thread, f.path()+"を削除しますか？");
              __pc=1;return;
            case 1:
              r=_thread.retVal;
              
              //$LASTPOS=11000998;//jseditor.FileMenu:998
              if (!(! r)) { __pc=2; break; }
              _thread.exit(_this);return;
            case 2:
              
              //$LASTPOS=11001018;//jseditor.FileMenu:1018
              _this.fiber$rm(_thread, f);
              __pc=3;return;
            case 3:
              
              //$LASTPOS=11001029;//jseditor.FileMenu:1029
              _this.editorSet.close(f);
              //$LASTPOS=11001053;//jseditor.FileMenu:1053
              if (!(_this.curDir)) { __pc=5; break; }
              //$LASTPOS=11001065;//jseditor.FileMenu:1065
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
    decls: {"methods":{"main":{"nowait":false},"create":{"nowait":false},"cdfl":{"nowait":false},"renameOrCopy":{"nowait":false},"rename":{"nowait":false},"copy":{"nowait":false},"__getter__curDir":{"nowait":true},"remove":{"nowait":false}}}
  });
});