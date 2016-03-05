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
        
        //$LASTPOS=4000054;//jseditor.ShellMod:54
        _this.cwd=_this.resolve(dir);
      },
      resolve :function _trc_ShellMod_resolve(f) {
        "use strict";
        var _this=this;
        
        //$LASTPOS=4000099;//jseditor.ShellMod:99
        if (SFile["is"](f)) {
          return f;
        }
        //$LASTPOS=4000133;//jseditor.ShellMod:133
        if (! _this.cwd) {
          throw new Error("CWD is not set");
          
        }
        return _this.cwd.rel(f);
      },
      listFiles :function _trc_ShellMod_listFiles(dir) {
        "use strict";
        var _this=this;
        var r;
        
        //$LASTPOS=4000225;//jseditor.ShellMod:225
        dir=_this.resolve(dir);
        //$LASTPOS=4000247;//jseditor.ShellMod:247
        r = _this.waitFor(dir.listFiles());
        
        return r;
      },
      fiber$listFiles :function _trc_ShellMod_f_listFiles(_thread,dir) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var r;
        
        //$LASTPOS=4000225;//jseditor.ShellMod:225
        dir=_this.resolve(dir);
        
        _thread.enter(function _trc_ShellMod_ent_listFiles(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=4000247;//jseditor.ShellMod:247
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
      readJSON :function _trc_ShellMod_readJSON(file) {
        "use strict";
        var _this=this;
        var r;
        
        //$LASTPOS=4000317;//jseditor.ShellMod:317
        file=_this.resolve(file);
        //$LASTPOS=4000341;//jseditor.ShellMod:341
        r = _this.waitFor(file.obj());
        
        return r;
      },
      fiber$readJSON :function _trc_ShellMod_f_readJSON(_thread,file) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var r;
        
        //$LASTPOS=4000317;//jseditor.ShellMod:317
        file=_this.resolve(file);
        
        _thread.enter(function _trc_ShellMod_ent_readJSON(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=4000341;//jseditor.ShellMod:341
              _this.fiber$waitFor(_thread, file.obj());
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
        
        //$LASTPOS=4000406;//jseditor.ShellMod:406
        file=_this.resolve(file);
        //$LASTPOS=4000430;//jseditor.ShellMod:430
        r = _this.waitFor(file.text(_this.cont));
        
        return r;
      },
      fiber$readFile :function _trc_ShellMod_f_readFile(_thread,file) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var r;
        
        //$LASTPOS=4000406;//jseditor.ShellMod:406
        file=_this.resolve(file);
        
        _thread.enter(function _trc_ShellMod_ent_readFile(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=4000430;//jseditor.ShellMod:430
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
      writeJSON :function _trc_ShellMod_writeJSON(file,cont,options) {
        "use strict";
        var _this=this;
        
        //$LASTPOS=4000514;//jseditor.ShellMod:514
        file=_this.resolve(file);
        //$LASTPOS=4000538;//jseditor.ShellMod:538
        if (typeof  cont=="string") {
          //$LASTPOS=4000576;//jseditor.ShellMod:576
          JSON.parse(cont);
          //$LASTPOS=4000602;//jseditor.ShellMod:602
          _this.writeFile(file,cont);
          
        } else {
          //$LASTPOS=4000635;//jseditor.ShellMod:635
          if (typeof  cont=="object") {
            //$LASTPOS=4000672;//jseditor.ShellMod:672
            _this.waitFor(file.obj(cont));
            
          } else {
            throw new Error("Invalid content type:"+cont);
            
            
          }
        }
      },
      fiber$writeJSON :function _trc_ShellMod_f_writeJSON(_thread,file,cont,options) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=4000514;//jseditor.ShellMod:514
        file=_this.resolve(file);
        
        _thread.enter(function _trc_ShellMod_ent_writeJSON(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=4000538;//jseditor.ShellMod:538
              if (!(typeof  cont=="string")) { __pc=2; break; }
              //$LASTPOS=4000576;//jseditor.ShellMod:576
              JSON.parse(cont);
              //$LASTPOS=4000602;//jseditor.ShellMod:602
              _this.fiber$writeFile(_thread, file, cont);
              __pc=1;return;
            case 1:
              
              __pc=6;break;
            case 2:
              //$LASTPOS=4000635;//jseditor.ShellMod:635
              if (!(typeof  cont=="object")) { __pc=4; break; }
              //$LASTPOS=4000672;//jseditor.ShellMod:672
              _this.fiber$waitFor(_thread, file.obj(cont));
              __pc=3;return;
            case 3:
              
              __pc=5;break;
            case 4:
              {
                throw new Error("Invalid content type:"+cont);
                
              }
            case 5:
              
            case 6:
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      writeFile :function _trc_ShellMod_writeFile(file,cont) {
        "use strict";
        var _this=this;
        
        //$LASTPOS=4000801;//jseditor.ShellMod:801
        file=_this.resolve(file);
        //$LASTPOS=4000825;//jseditor.ShellMod:825
        if (typeof  cont=="string") {
          //$LASTPOS=4000863;//jseditor.ShellMod:863
          _this.waitFor(file.text(cont));
          
        } else {
          //$LASTPOS=4000900;//jseditor.ShellMod:900
          if (typeof  cont=="object") {
            //$LASTPOS=4000937;//jseditor.ShellMod:937
            _this.waitFor(file.obj(cont));
            
          } else {
            throw new Error("Invalid content type:"+cont);
            
            
          }
        }
      },
      fiber$writeFile :function _trc_ShellMod_f_writeFile(_thread,file,cont) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=4000801;//jseditor.ShellMod:801
        file=_this.resolve(file);
        
        _thread.enter(function _trc_ShellMod_ent_writeFile(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=4000825;//jseditor.ShellMod:825
              if (!(typeof  cont=="string")) { __pc=2; break; }
              //$LASTPOS=4000863;//jseditor.ShellMod:863
              _this.fiber$waitFor(_thread, file.text(cont));
              __pc=1;return;
            case 1:
              
              __pc=6;break;
            case 2:
              //$LASTPOS=4000900;//jseditor.ShellMod:900
              if (!(typeof  cont=="object")) { __pc=4; break; }
              //$LASTPOS=4000937;//jseditor.ShellMod:937
              _this.fiber$waitFor(_thread, file.obj(cont));
              __pc=3;return;
            case 3:
              
              __pc=5;break;
            case 4:
              {
                throw new Error("Invalid content type:"+cont);
                
              }
            case 5:
              
            case 6:
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      mv :function _trc_ShellMod_mv(src,dst) {
        "use strict";
        var _this=this;
        
        //$LASTPOS=4001057;//jseditor.ShellMod:1057
        src=_this.resolve(src);
        //$LASTPOS=4001079;//jseditor.ShellMod:1079
        dst=_this.resolve(dst);
        //$LASTPOS=4001101;//jseditor.ShellMod:1101
        _this.waitFor(dst.moveFrom(src));
      },
      fiber$mv :function _trc_ShellMod_f_mv(_thread,src,dst) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=4001057;//jseditor.ShellMod:1057
        src=_this.resolve(src);
        //$LASTPOS=4001079;//jseditor.ShellMod:1079
        dst=_this.resolve(dst);
        
        _thread.enter(function _trc_ShellMod_ent_mv(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=4001101;//jseditor.ShellMod:1101
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
        
        //$LASTPOS=4001150;//jseditor.ShellMod:1150
        file=_this.resolve(file);
        //$LASTPOS=4001174;//jseditor.ShellMod:1174
        r = _this.waitFor(file.isDir());
        
        return r;
      },
      fiber$isDir :function _trc_ShellMod_f_isDir(_thread,file) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var r;
        
        //$LASTPOS=4001150;//jseditor.ShellMod:1150
        file=_this.resolve(file);
        
        _thread.enter(function _trc_ShellMod_ent_isDir(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=4001174;//jseditor.ShellMod:1174
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
        
        //$LASTPOS=4001238;//jseditor.ShellMod:1238
        file=_this.resolve(file);
        //$LASTPOS=4001262;//jseditor.ShellMod:1262
        r = _this.waitFor(file.mkdir());
        
        return r;
      },
      fiber$mkdir :function _trc_ShellMod_f_mkdir(_thread,file) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var r;
        
        //$LASTPOS=4001238;//jseditor.ShellMod:1238
        file=_this.resolve(file);
        
        _thread.enter(function _trc_ShellMod_ent_mkdir(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=4001262;//jseditor.ShellMod:1262
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
        
        //$LASTPOS=4001323;//jseditor.ShellMod:1323
        file=_this.resolve(file);
        //$LASTPOS=4001347;//jseditor.ShellMod:1347
        r = _this.waitFor(file.rm());
        
        return r;
      },
      fiber$rm :function _trc_ShellMod_f_rm(_thread,file) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var r;
        
        //$LASTPOS=4001323;//jseditor.ShellMod:1323
        file=_this.resolve(file);
        
        _thread.enter(function _trc_ShellMod_ent_rm(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=4001347;//jseditor.ShellMod:1347
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
    decls: {"methods":{"main":{"nowait":false},"cd":{"nowait":true},"resolve":{"nowait":true},"listFiles":{"nowait":false},"readJSON":{"nowait":false},"readFile":{"nowait":false},"writeJSON":{"nowait":false},"writeFile":{"nowait":false},"mv":{"nowait":false},"isDir":{"nowait":false},"mkdir":{"nowait":false},"rm":{"nowait":false}}}
  });
});