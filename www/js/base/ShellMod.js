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
        
        //$LASTPOS=3000041;//jseditor.ShellMod:41
        _this.cwd=_this.resolve(dir);
      },
      resolve :function _trc_ShellMod_resolve(f) {
        "use strict";
        var _this=this;
        
        //$LASTPOS=3000086;//jseditor.ShellMod:86
        if (SFile["is"](f)) {
          return f;
        }
        //$LASTPOS=3000120;//jseditor.ShellMod:120
        if (! _this.cwd) {
          throw new Error("CWD is not set");
          
        }
        return _this.cwd.rel(f);
      },
      listFiles :function _trc_ShellMod_listFiles(dir) {
        "use strict";
        var _this=this;
        var r;
        
        //$LASTPOS=3000212;//jseditor.ShellMod:212
        dir=_this.resolve(dir);
        //$LASTPOS=3000234;//jseditor.ShellMod:234
        r = _this.waitFor(dir.listFiles());
        
        return r;
      },
      fiber$listFiles :function _trc_ShellMod_f_listFiles(_thread,dir) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var r;
        
        //$LASTPOS=3000212;//jseditor.ShellMod:212
        dir=_this.resolve(dir);
        
        _thread.enter(function _trc_ShellMod_ent_listFiles(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=3000234;//jseditor.ShellMod:234
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
        
        //$LASTPOS=3000304;//jseditor.ShellMod:304
        file=_this.resolve(file);
        //$LASTPOS=3000328;//jseditor.ShellMod:328
        r = _this.waitFor(file.text(_this.cont));
        
        return r;
      },
      fiber$readFile :function _trc_ShellMod_f_readFile(_thread,file) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var r;
        
        //$LASTPOS=3000304;//jseditor.ShellMod:304
        file=_this.resolve(file);
        
        _thread.enter(function _trc_ShellMod_ent_readFile(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=3000328;//jseditor.ShellMod:328
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
        
        //$LASTPOS=3000404;//jseditor.ShellMod:404
        file=_this.resolve(file);
        //$LASTPOS=3000428;//jseditor.ShellMod:428
        _this.waitFor(file.text(cont));
      },
      fiber$writeFile :function _trc_ShellMod_f_writeFile(_thread,file,cont) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=3000404;//jseditor.ShellMod:404
        file=_this.resolve(file);
        
        _thread.enter(function _trc_ShellMod_ent_writeFile(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=3000428;//jseditor.ShellMod:428
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
        
        //$LASTPOS=3000475;//jseditor.ShellMod:475
        src=_this.resolve(src);
        //$LASTPOS=3000497;//jseditor.ShellMod:497
        dst=_this.resolve(dst);
        //$LASTPOS=3000519;//jseditor.ShellMod:519
        _this.waitFor(dst.moveFrom(src));
      },
      fiber$mv :function _trc_ShellMod_f_mv(_thread,src,dst) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=3000475;//jseditor.ShellMod:475
        src=_this.resolve(src);
        //$LASTPOS=3000497;//jseditor.ShellMod:497
        dst=_this.resolve(dst);
        
        _thread.enter(function _trc_ShellMod_ent_mv(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=3000519;//jseditor.ShellMod:519
              _this.fiber$waitFor(_thread, dst.moveFrom(src));
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
        
        //$LASTPOS=3000568;//jseditor.ShellMod:568
        file=_this.resolve(file);
        //$LASTPOS=3000592;//jseditor.ShellMod:592
        r = _this.waitFor(file.isDir());
        
        return r;
      },
      fiber$isDir :function _trc_ShellMod_f_isDir(_thread,file) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var r;
        
        //$LASTPOS=3000568;//jseditor.ShellMod:568
        file=_this.resolve(file);
        
        _thread.enter(function _trc_ShellMod_ent_isDir(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=3000592;//jseditor.ShellMod:592
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
        
        //$LASTPOS=3000656;//jseditor.ShellMod:656
        file=_this.resolve(file);
        //$LASTPOS=3000680;//jseditor.ShellMod:680
        r = _this.waitFor(file.mkdir());
        
        return r;
      },
      fiber$mkdir :function _trc_ShellMod_f_mkdir(_thread,file) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var r;
        
        //$LASTPOS=3000656;//jseditor.ShellMod:656
        file=_this.resolve(file);
        
        _thread.enter(function _trc_ShellMod_ent_mkdir(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=3000680;//jseditor.ShellMod:680
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
        
        //$LASTPOS=3000741;//jseditor.ShellMod:741
        file=_this.resolve(file);
        //$LASTPOS=3000765;//jseditor.ShellMod:765
        r = _this.waitFor(file.rm());
        
        return r;
      },
      fiber$rm :function _trc_ShellMod_f_rm(_thread,file) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var r;
        
        //$LASTPOS=3000741;//jseditor.ShellMod:741
        file=_this.resolve(file);
        
        _thread.enter(function _trc_ShellMod_ent_rm(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=3000765;//jseditor.ShellMod:765
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