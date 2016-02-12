define(function (require) {
  var Tonyu=require('Tonyu');
  var SFile=require('SFile');
  var WaitMod=require('WaitMod');
  return Tonyu.klass.define({
    fullName: 'jseditor.ShellMod',
    shortName: 'ShellMod',
    namespace: 'jseditor',
    includes: [Tonyu.classes.jseditor.WaitMod],
    methods: {
      main :function _trc_ShellMod_main() {
        "use strict";
        var _this=this;
        
      },
      fiber$main :function _trc_ShellMod_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        _thread.retVal=_this;return;
      },
      cd :function _trc_ShellMod_cd(dir) {
        "use strict";
        var _this=this;
        
        //$LASTPOS=2000041;//jseditor.ShellMod:41
        _this.cwd=_this.resolve(dir);
      },
      resolve :function _trc_ShellMod_resolve(f) {
        "use strict";
        var _this=this;
        
        //$LASTPOS=2000086;//jseditor.ShellMod:86
        if (SFile["is"](f)) {
          return f;
        }
        //$LASTPOS=2000120;//jseditor.ShellMod:120
        if (! _this.cwd) {
          throw new Error("CWD is not set");
          
        }
        return _this.cwd.rel(f);
      },
      listFiles :function _trc_ShellMod_listFiles(dir) {
        "use strict";
        var _this=this;
        var r;
        
        //$LASTPOS=2000212;//jseditor.ShellMod:212
        dir=_this.resolve(dir);
        //$LASTPOS=2000234;//jseditor.ShellMod:234
        r = _this.waitFor(dir.listFiles());
        
        return r;
      },
      fiber$listFiles :function _trc_ShellMod_f_listFiles(_thread,dir) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var r;
        
        //$LASTPOS=2000212;//jseditor.ShellMod:212
        dir=_this.resolve(dir);
        
        _thread.enter(function _trc_ShellMod_ent_listFiles(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=2000234;//jseditor.ShellMod:234
              _this.fiber$waitFor(_thread, dir.listFiles());
              __pc=1;return;
            case 1:
              r=_thread.retVal;
              
              _thread.exit(r);return;
              _thread.exit(_this);return;
            }
          }
        });
      },
      readFile :function _trc_ShellMod_readFile(file) {
        "use strict";
        var _this=this;
        var r;
        
        //$LASTPOS=2000304;//jseditor.ShellMod:304
        file=_this.resolve(file);
        //$LASTPOS=2000328;//jseditor.ShellMod:328
        r = _this.waitFor(file.text(_this.cont));
        
        return r;
      },
      fiber$readFile :function _trc_ShellMod_f_readFile(_thread,file) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var r;
        
        //$LASTPOS=2000304;//jseditor.ShellMod:304
        file=_this.resolve(file);
        
        _thread.enter(function _trc_ShellMod_ent_readFile(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=2000328;//jseditor.ShellMod:328
              _this.fiber$waitFor(_thread, file.text(_this.cont));
              __pc=1;return;
            case 1:
              r=_thread.retVal;
              
              _thread.exit(r);return;
              _thread.exit(_this);return;
            }
          }
        });
      },
      writeFile :function _trc_ShellMod_writeFile(file,cont) {
        "use strict";
        var _this=this;
        
        //$LASTPOS=2000404;//jseditor.ShellMod:404
        file=_this.resolve(file);
        //$LASTPOS=2000428;//jseditor.ShellMod:428
        _this.waitFor(file.text(cont));
      },
      fiber$writeFile :function _trc_ShellMod_f_writeFile(_thread,file,cont) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=2000404;//jseditor.ShellMod:404
        file=_this.resolve(file);
        
        _thread.enter(function _trc_ShellMod_ent_writeFile(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=2000428;//jseditor.ShellMod:428
              _this.fiber$waitFor(_thread, file.text(cont));
              __pc=1;return;
            case 1:
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      mv :function _trc_ShellMod_mv(src,dst) {
        "use strict";
        var _this=this;
        
        //$LASTPOS=2000475;//jseditor.ShellMod:475
        src=_this.resolve(src);
        //$LASTPOS=2000497;//jseditor.ShellMod:497
        dst=_this.resolve(dst);
        //$LASTPOS=2000519;//jseditor.ShellMod:519
        _this.waitFor(src.mv(dst));
      },
      fiber$mv :function _trc_ShellMod_f_mv(_thread,src,dst) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=2000475;//jseditor.ShellMod:475
        src=_this.resolve(src);
        //$LASTPOS=2000497;//jseditor.ShellMod:497
        dst=_this.resolve(dst);
        
        _thread.enter(function _trc_ShellMod_ent_mv(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=2000519;//jseditor.ShellMod:519
              _this.fiber$waitFor(_thread, src.mv(dst));
              __pc=1;return;
            case 1:
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      isDir :function _trc_ShellMod_isDir(file) {
        "use strict";
        var _this=this;
        var r;
        
        //$LASTPOS=2000562;//jseditor.ShellMod:562
        file=_this.resolve(file);
        //$LASTPOS=2000586;//jseditor.ShellMod:586
        r = _this.waitFor(file.isDir());
        
        return r;
      },
      fiber$isDir :function _trc_ShellMod_f_isDir(_thread,file) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var r;
        
        //$LASTPOS=2000562;//jseditor.ShellMod:562
        file=_this.resolve(file);
        
        _thread.enter(function _trc_ShellMod_ent_isDir(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=2000586;//jseditor.ShellMod:586
              _this.fiber$waitFor(_thread, file.isDir());
              __pc=1;return;
            case 1:
              r=_thread.retVal;
              
              _thread.exit(r);return;
              _thread.exit(_this);return;
            }
          }
        });
      },
      mkdir :function _trc_ShellMod_mkdir(file) {
        "use strict";
        var _this=this;
        var r;
        
        //$LASTPOS=2000650;//jseditor.ShellMod:650
        file=_this.resolve(file);
        //$LASTPOS=2000674;//jseditor.ShellMod:674
        r = _this.waitFor(file.mkdir());
        
        return r;
      },
      fiber$mkdir :function _trc_ShellMod_f_mkdir(_thread,file) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var r;
        
        //$LASTPOS=2000650;//jseditor.ShellMod:650
        file=_this.resolve(file);
        
        _thread.enter(function _trc_ShellMod_ent_mkdir(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=2000674;//jseditor.ShellMod:674
              _this.fiber$waitFor(_thread, file.mkdir());
              __pc=1;return;
            case 1:
              r=_thread.retVal;
              
              _thread.exit(r);return;
              _thread.exit(_this);return;
            }
          }
        });
      },
      rm :function _trc_ShellMod_rm(file) {
        "use strict";
        var _this=this;
        var r;
        
        //$LASTPOS=2000735;//jseditor.ShellMod:735
        file=_this.resolve(file);
        //$LASTPOS=2000759;//jseditor.ShellMod:759
        r = _this.waitFor(file.rm());
        
        return r;
      },
      fiber$rm :function _trc_ShellMod_f_rm(_thread,file) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var r;
        
        //$LASTPOS=2000735;//jseditor.ShellMod:735
        file=_this.resolve(file);
        
        _thread.enter(function _trc_ShellMod_ent_rm(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=2000759;//jseditor.ShellMod:759
              _this.fiber$waitFor(_thread, file.rm());
              __pc=1;return;
            case 1:
              r=_thread.retVal;
              
              _thread.exit(r);return;
              _thread.exit(_this);return;
            }
          }
        });
      },
      __dummy: false
    },
    decls: {"methods":{"main":{"nowait":false},"cd":{"nowait":true},"resolve":{"nowait":true},"listFiles":{"nowait":false},"readFile":{"nowait":false},"writeFile":{"nowait":false},"mv":{"nowait":false},"isDir":{"nowait":false},"mkdir":{"nowait":false},"rm":{"nowait":false}}}
  });
});