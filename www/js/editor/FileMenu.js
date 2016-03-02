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
        
        //$LASTPOS=8000047;//jseditor.FileMenu:47
        dir = _this.curDir;
        
        //$LASTPOS=8000067;//jseditor.FileMenu:67
        if (! dir) {
          return _this;
        }
        //$LASTPOS=8000089;//jseditor.FileMenu:89
        n = _this.prompt("ファイル名");
        
        //$LASTPOS=8000116;//jseditor.FileMenu:116
        if (! n) {
          return _this;
        }
        //$LASTPOS=8000136;//jseditor.FileMenu:136
        nf = dir.rel(n);
        
        //$LASTPOS=8000159;//jseditor.FileMenu:159
        isd = _this.isDir(nf);
        
        //$LASTPOS=8000182;//jseditor.FileMenu:182
        if (isd) {
          //$LASTPOS=8000201;//jseditor.FileMenu:201
          _this.mkdir(nf);
          
        } else {
          //$LASTPOS=8000233;//jseditor.FileMenu:233
          _this.writeFile(nf,"");
          
        }
        //$LASTPOS=8000261;//jseditor.FileMenu:261
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
        
        //$LASTPOS=8000047;//jseditor.FileMenu:47
        dir = _this.curDir;
        
        //$LASTPOS=8000067;//jseditor.FileMenu:67
        if (! dir) {
          _thread.retVal=_this;return;
          
        }
        
        _thread.enter(function _trc_FileMenu_ent_create(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=8000089;//jseditor.FileMenu:89
              _this.fiber$prompt(_thread, "ファイル名");
              __pc=1;return;
            case 1:
              n=_thread.retVal;
              
              //$LASTPOS=8000116;//jseditor.FileMenu:116
              if (!(! n)) { __pc=2; break; }
              _thread.exit(_this);return;
            case 2:
              
              //$LASTPOS=8000136;//jseditor.FileMenu:136
              nf = dir.rel(n);
              
              //$LASTPOS=8000159;//jseditor.FileMenu:159
              _this.fiber$isDir(_thread, nf);
              __pc=3;return;
            case 3:
              isd=_thread.retVal;
              
              //$LASTPOS=8000182;//jseditor.FileMenu:182
              if (!(isd)) { __pc=5; break; }
              //$LASTPOS=8000201;//jseditor.FileMenu:201
              _this.fiber$mkdir(_thread, nf);
              __pc=4;return;
            case 4:
              
              __pc=7;break;
            case 5:
              //$LASTPOS=8000233;//jseditor.FileMenu:233
              _this.fiber$writeFile(_thread, nf, "");
              __pc=6;return;
            case 6:
              
            case 7:
              
              //$LASTPOS=8000261;//jseditor.FileMenu:261
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
        
        //$LASTPOS=8000306;//jseditor.FileMenu:306
        if (_this.curDir) {
          //$LASTPOS=8000318;//jseditor.FileMenu:318
          _this.cd(_this.curDir);
        }
      },
      fiber$cdfl :function _trc_FileMenu_f_cdfl(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=8000306;//jseditor.FileMenu:306
        if (_this.curDir) {
          //$LASTPOS=8000318;//jseditor.FileMenu:318
          _this.cd(_this.curDir);
        }
        
        _thread.retVal=_this;return;
      },
      rename :function _trc_FileMenu_rename() {
        "use strict";
        var _this=this;
        var f;
        var nf;
        
        //$LASTPOS=8000348;//jseditor.FileMenu:348
        _this.cdfl();
        //$LASTPOS=8000360;//jseditor.FileMenu:360
        _this.print(_this.cwd.path());
        //$LASTPOS=8000383;//jseditor.FileMenu:383
        f = _this.fileList.lastSelected;
        
        //$LASTPOS=8000416;//jseditor.FileMenu:416
        if (! f) {
          return _this;
        }
        //$LASTPOS=8000436;//jseditor.FileMenu:436
        nf = _this.prompt("ファイル名の変更",f.name());
        
        //$LASTPOS=8000476;//jseditor.FileMenu:476
        if (! nf) {
          return _this;
        }
        //$LASTPOS=8000497;//jseditor.FileMenu:497
        nf=_this.resolve(nf);
        //$LASTPOS=8000517;//jseditor.FileMenu:517
        _this.mv(f,nf);
        //$LASTPOS=8000531;//jseditor.FileMenu:531
        _this.editorSet.close(f);
        //$LASTPOS=8000555;//jseditor.FileMenu:555
        _this.waitFor(_this.fileList.open(nf));
        //$LASTPOS=8000587;//jseditor.FileMenu:587
        if (_this.curDir) {
          //$LASTPOS=8000599;//jseditor.FileMenu:599
          _this.waitFor(_this.fileList.open(_this.curDir));
        }
      },
      fiber$rename :function _trc_FileMenu_f_rename(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var f;
        var nf;
        
        
        _thread.enter(function _trc_FileMenu_ent_rename(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=8000348;//jseditor.FileMenu:348
              _this.fiber$cdfl(_thread);
              __pc=1;return;
            case 1:
              
              //$LASTPOS=8000360;//jseditor.FileMenu:360
              _this.fiber$print(_thread, _this.cwd.path());
              __pc=2;return;
            case 2:
              
              //$LASTPOS=8000383;//jseditor.FileMenu:383
              f = _this.fileList.lastSelected;
              
              //$LASTPOS=8000416;//jseditor.FileMenu:416
              if (!(! f)) { __pc=3; break; }
              _thread.exit(_this);return;
            case 3:
              
              //$LASTPOS=8000436;//jseditor.FileMenu:436
              _this.fiber$prompt(_thread, "ファイル名の変更", f.name());
              __pc=4;return;
            case 4:
              nf=_thread.retVal;
              
              //$LASTPOS=8000476;//jseditor.FileMenu:476
              if (!(! nf)) { __pc=5; break; }
              _thread.exit(_this);return;
            case 5:
              
              //$LASTPOS=8000497;//jseditor.FileMenu:497
              nf=_this.resolve(nf);
              //$LASTPOS=8000517;//jseditor.FileMenu:517
              _this.fiber$mv(_thread, f, nf);
              __pc=6;return;
            case 6:
              
              //$LASTPOS=8000531;//jseditor.FileMenu:531
              _this.editorSet.close(f);
              //$LASTPOS=8000555;//jseditor.FileMenu:555
              _this.fiber$waitFor(_thread, _this.fileList.open(nf));
              __pc=7;return;
            case 7:
              
              //$LASTPOS=8000587;//jseditor.FileMenu:587
              if (!(_this.curDir)) { __pc=9; break; }
              //$LASTPOS=8000599;//jseditor.FileMenu:599
              _this.fiber$waitFor(_thread, _this.fileList.open(_this.curDir));
              __pc=8;return;
            case 8:
              
            case 9:
              
              _thread.exit(_this);return;
            }
          }
        });
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
        
        //$LASTPOS=8000706;//jseditor.FileMenu:706
        fl = _this.fileList;
        
        //$LASTPOS=8000727;//jseditor.FileMenu:727
        f = fl.lastSelected;
        
        //$LASTPOS=8000754;//jseditor.FileMenu:754
        if (! f) {
          return _this;
        }
        //$LASTPOS=8000774;//jseditor.FileMenu:774
        r = _this.confirm(f.path()+"を削除しますか？");
        
        //$LASTPOS=8000814;//jseditor.FileMenu:814
        if (! r) {
          return _this;
        }
        //$LASTPOS=8000834;//jseditor.FileMenu:834
        _this.rm(f);
        //$LASTPOS=8000845;//jseditor.FileMenu:845
        _this.editorSet.close(f);
        //$LASTPOS=8000869;//jseditor.FileMenu:869
        if (_this.curDir) {
          //$LASTPOS=8000881;//jseditor.FileMenu:881
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
        
        //$LASTPOS=8000706;//jseditor.FileMenu:706
        fl = _this.fileList;
        
        //$LASTPOS=8000727;//jseditor.FileMenu:727
        f = fl.lastSelected;
        
        //$LASTPOS=8000754;//jseditor.FileMenu:754
        if (! f) {
          _thread.retVal=_this;return;
          
        }
        
        _thread.enter(function _trc_FileMenu_ent_remove(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=8000774;//jseditor.FileMenu:774
              _this.fiber$confirm(_thread, f.path()+"を削除しますか？");
              __pc=1;return;
            case 1:
              r=_thread.retVal;
              
              //$LASTPOS=8000814;//jseditor.FileMenu:814
              if (!(! r)) { __pc=2; break; }
              _thread.exit(_this);return;
            case 2:
              
              //$LASTPOS=8000834;//jseditor.FileMenu:834
              _this.fiber$rm(_thread, f);
              __pc=3;return;
            case 3:
              
              //$LASTPOS=8000845;//jseditor.FileMenu:845
              _this.editorSet.close(f);
              //$LASTPOS=8000869;//jseditor.FileMenu:869
              if (!(_this.curDir)) { __pc=5; break; }
              //$LASTPOS=8000881;//jseditor.FileMenu:881
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
    decls: {"methods":{"main":{"nowait":false},"create":{"nowait":false},"cdfl":{"nowait":false},"rename":{"nowait":false},"copy":{"nowait":false},"__getter__curDir":{"nowait":true},"remove":{"nowait":false}}}
  });
});