define(function (require) {
  var Tonyu=require('Tonyu');
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
      listFiles :function _trc_ShellMod_listFiles(dir) {
        "use strict";
        var _this=this;
        var r;
        
        //$LASTPOS=3000041;//jseditor.ShellMod:41
        r = _this.waitFor(dir.listFiles());
        
        return r;
      },
      fiber$listFiles :function _trc_ShellMod_f_listFiles(_thread,dir) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var r;
        
        
        _thread.enter(function _trc_ShellMod_ent_listFiles(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=3000041;//jseditor.ShellMod:41
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
        
        //$LASTPOS=3000111;//jseditor.ShellMod:111
        r = _this.waitFor(file.text(_this.cont));
        
        return r;
      },
      fiber$readFile :function _trc_ShellMod_f_readFile(_thread,file) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var r;
        
        
        _thread.enter(function _trc_ShellMod_ent_readFile(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=3000111;//jseditor.ShellMod:111
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
        
        //$LASTPOS=3000187;//jseditor.ShellMod:187
        _this.waitFor(file.text(cont));
      },
      fiber$writeFile :function _trc_ShellMod_f_writeFile(_thread,file,cont) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        _thread.enter(function _trc_ShellMod_ent_writeFile(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=3000187;//jseditor.ShellMod:187
              _this.fiber$waitFor(_thread, file.text(cont));
              __pc=1;return;
            case 1:
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      isDir :function _trc_ShellMod_isDir(f) {
        "use strict";
        var _this=this;
        var r;
        
        //$LASTPOS=3000231;//jseditor.ShellMod:231
        r = _this.waitFor(f.isDir());
        
        return r;
      },
      fiber$isDir :function _trc_ShellMod_f_isDir(_thread,f) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var r;
        
        
        _thread.enter(function _trc_ShellMod_ent_isDir(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=3000231;//jseditor.ShellMod:231
              _this.fiber$waitFor(_thread, f.isDir());
              __pc=1;return;
            case 1:
              r=_thread.retVal;
              
              _thread.exit(r);return;
              _thread.exit(_this);return;
            }
          }
        });
      },
      mkdir :function _trc_ShellMod_mkdir(f) {
        "use strict";
        var _this=this;
        var r;
        
        //$LASTPOS=3000289;//jseditor.ShellMod:289
        r = _this.waitFor(f.mkdir());
        
        return r;
      },
      fiber$mkdir :function _trc_ShellMod_f_mkdir(_thread,f) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var r;
        
        
        _thread.enter(function _trc_ShellMod_ent_mkdir(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=3000289;//jseditor.ShellMod:289
              _this.fiber$waitFor(_thread, f.mkdir());
              __pc=1;return;
            case 1:
              r=_thread.retVal;
              
              _thread.exit(r);return;
              _thread.exit(_this);return;
            }
          }
        });
      },
      rm :function _trc_ShellMod_rm(f) {
        "use strict";
        var _this=this;
        var r;
        
        //$LASTPOS=3000344;//jseditor.ShellMod:344
        r = _this.waitFor(f.rm());
        
        return r;
      },
      fiber$rm :function _trc_ShellMod_f_rm(_thread,f) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var r;
        
        
        _thread.enter(function _trc_ShellMod_ent_rm(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=3000344;//jseditor.ShellMod:344
              _this.fiber$waitFor(_thread, f.rm());
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
    decls: {"methods":{"main":{"nowait":false},"listFiles":{"nowait":false},"readFile":{"nowait":false},"writeFile":{"nowait":false},"isDir":{"nowait":false},"mkdir":{"nowait":false},"rm":{"nowait":false}}}
  });
});