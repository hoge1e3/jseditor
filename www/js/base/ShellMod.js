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
        
        //$LASTPOS=7000054;//jseditor.ShellMod:54
        _this.cwd=_this.resolve(dir);
      },
      resolve :function _trc_ShellMod_resolve(f) {
        "use strict";
        var _this=this;
        
        //$LASTPOS=7000099;//jseditor.ShellMod:99
        if (SFile["is"](f)) {
          return f;
        }
        //$LASTPOS=7000133;//jseditor.ShellMod:133
        if (! _this.cwd) {
          throw new Error("CWD is not set");
          
        }
        return _this.cwd.rel(f);
      },
      listFiles :function _trc_ShellMod_listFiles(dir) {
        "use strict";
        var _this=this;
        var r;
        
        //$LASTPOS=7000225;//jseditor.ShellMod:225
        dir=_this.resolve(dir);
        //$LASTPOS=7000247;//jseditor.ShellMod:247
        r = _this.waitFor(dir.listFiles());
        
        return r;
      },
      fiber$listFiles :function _trc_ShellMod_f_listFiles(_thread,dir) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var r;
        
        //$LASTPOS=7000225;//jseditor.ShellMod:225
        dir=_this.resolve(dir);
        
        _thread.enter(function _trc_ShellMod_ent_listFiles(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=7000247;//jseditor.ShellMod:247
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
        var o;
        var r;
        
        //$LASTPOS=7000317;//jseditor.ShellMod:317
        file=_this.resolve(file);
        //$LASTPOS=7000341;//jseditor.ShellMod:341
        o = file.obj();
        
        //$LASTPOS=7000363;//jseditor.ShellMod:363
        r = _this.waitFor(o);
        
        //$LASTPOS=7000385;//jseditor.ShellMod:385
        _this.print("rdjson",o,r);
        return r;
      },
      fiber$readJSON :function _trc_ShellMod_f_readJSON(_thread,file) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var o;
        var r;
        
        //$LASTPOS=7000317;//jseditor.ShellMod:317
        file=_this.resolve(file);
        //$LASTPOS=7000341;//jseditor.ShellMod:341
        o = file.obj();
        
        
        _thread.enter(function _trc_ShellMod_ent_readJSON(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=7000363;//jseditor.ShellMod:363
              _this.fiber$waitFor(_thread, o);
              __pc=1;return;
            case 1:
              r=_thread.retVal;
              
              //$LASTPOS=7000385;//jseditor.ShellMod:385
              _this.print("rdjson",o,r);
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
        
        //$LASTPOS=7000444;//jseditor.ShellMod:444
        file=_this.resolve(file);
        //$LASTPOS=7000468;//jseditor.ShellMod:468
        r = _this.waitFor(file.text());
        
        return r;
      },
      fiber$readFile :function _trc_ShellMod_f_readFile(_thread,file) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var r;
        
        //$LASTPOS=7000444;//jseditor.ShellMod:444
        file=_this.resolve(file);
        
        _thread.enter(function _trc_ShellMod_ent_readFile(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=7000468;//jseditor.ShellMod:468
              _this.fiber$waitFor(_thread, file.text());
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
        
        //$LASTPOS=7000548;//jseditor.ShellMod:548
        file=_this.resolve(file);
        //$LASTPOS=7000572;//jseditor.ShellMod:572
        if (typeof  cont=="string") {
          //$LASTPOS=7000610;//jseditor.ShellMod:610
          JSON.parse(cont);
          //$LASTPOS=7000636;//jseditor.ShellMod:636
          _this.writeFile(file,cont);
          
        } else {
          //$LASTPOS=7000669;//jseditor.ShellMod:669
          if (typeof  cont=="object") {
            //$LASTPOS=7000706;//jseditor.ShellMod:706
            if (options&&options.indent) {
              //$LASTPOS=7000749;//jseditor.ShellMod:749
              _this.writeFile(file,JSON.stringify(cont,null,options.indent));
              
            } else {
              //$LASTPOS=7000837;//jseditor.ShellMod:837
              _this.waitFor(file.obj(cont));
              
            }
            
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
        
        //$LASTPOS=7000548;//jseditor.ShellMod:548
        file=_this.resolve(file);
        
        _thread.enter(function _trc_ShellMod_ent_writeJSON(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=7000572;//jseditor.ShellMod:572
              if (!(typeof  cont=="string")) { __pc=2; break; }
              //$LASTPOS=7000610;//jseditor.ShellMod:610
              JSON.parse(cont);
              //$LASTPOS=7000636;//jseditor.ShellMod:636
              _this.fiber$writeFile(_thread, file, cont);
              __pc=1;return;
            case 1:
              
              __pc=9;break;
            case 2:
              //$LASTPOS=7000669;//jseditor.ShellMod:669
              if (!(typeof  cont=="object")) { __pc=7; break; }
              //$LASTPOS=7000706;//jseditor.ShellMod:706
              if (!(options&&options.indent)) { __pc=4; break; }
              //$LASTPOS=7000749;//jseditor.ShellMod:749
              _this.fiber$writeFile(_thread, file, JSON.stringify(cont,null,options.indent));
              __pc=3;return;
            case 3:
              
              __pc=6;break;
            case 4:
              //$LASTPOS=7000837;//jseditor.ShellMod:837
              _this.fiber$waitFor(_thread, file.obj(cont));
              __pc=5;return;
            case 5:
              
            case 6:
              
              __pc=8;break;
            case 7:
              {
                throw new Error("Invalid content type:"+cont);
                
              }
            case 8:
              
            case 9:
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      writeFile :function _trc_ShellMod_writeFile(file,cont) {
        "use strict";
        var _this=this;
        
        //$LASTPOS=7000976;//jseditor.ShellMod:976
        file=_this.resolve(file);
        //$LASTPOS=7001000;//jseditor.ShellMod:1000
        if (typeof  cont=="string") {
          //$LASTPOS=7001038;//jseditor.ShellMod:1038
          _this.waitFor(file.text(cont));
          
        } else {
          //$LASTPOS=7001075;//jseditor.ShellMod:1075
          if (typeof  cont=="object") {
            //$LASTPOS=7001112;//jseditor.ShellMod:1112
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
        
        //$LASTPOS=7000976;//jseditor.ShellMod:976
        file=_this.resolve(file);
        
        _thread.enter(function _trc_ShellMod_ent_writeFile(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=7001000;//jseditor.ShellMod:1000
              if (!(typeof  cont=="string")) { __pc=2; break; }
              //$LASTPOS=7001038;//jseditor.ShellMod:1038
              _this.fiber$waitFor(_thread, file.text(cont));
              __pc=1;return;
            case 1:
              
              __pc=6;break;
            case 2:
              //$LASTPOS=7001075;//jseditor.ShellMod:1075
              if (!(typeof  cont=="object")) { __pc=4; break; }
              //$LASTPOS=7001112;//jseditor.ShellMod:1112
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
        
        //$LASTPOS=7001232;//jseditor.ShellMod:1232
        src=_this.resolve(src);
        //$LASTPOS=7001254;//jseditor.ShellMod:1254
        dst=_this.resolve(dst);
        //$LASTPOS=7001276;//jseditor.ShellMod:1276
        _this.waitFor(dst.moveFrom(src));
      },
      fiber$mv :function _trc_ShellMod_f_mv(_thread,src,dst) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=7001232;//jseditor.ShellMod:1232
        src=_this.resolve(src);
        //$LASTPOS=7001254;//jseditor.ShellMod:1254
        dst=_this.resolve(dst);
        
        _thread.enter(function _trc_ShellMod_ent_mv(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=7001276;//jseditor.ShellMod:1276
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
        
        //$LASTPOS=7001325;//jseditor.ShellMod:1325
        file=_this.resolve(file);
        //$LASTPOS=7001349;//jseditor.ShellMod:1349
        r = _this.waitFor(file.isDir());
        
        return r;
      },
      fiber$isDir :function _trc_ShellMod_f_isDir(_thread,file) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var r;
        
        //$LASTPOS=7001325;//jseditor.ShellMod:1325
        file=_this.resolve(file);
        
        _thread.enter(function _trc_ShellMod_ent_isDir(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=7001349;//jseditor.ShellMod:1349
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
        
        //$LASTPOS=7001413;//jseditor.ShellMod:1413
        file=_this.resolve(file);
        //$LASTPOS=7001437;//jseditor.ShellMod:1437
        r = _this.waitFor(file.mkdir());
        
        return r;
      },
      fiber$mkdir :function _trc_ShellMod_f_mkdir(_thread,file) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var r;
        
        //$LASTPOS=7001413;//jseditor.ShellMod:1413
        file=_this.resolve(file);
        
        _thread.enter(function _trc_ShellMod_ent_mkdir(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=7001437;//jseditor.ShellMod:1437
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
        
        //$LASTPOS=7001498;//jseditor.ShellMod:1498
        file=_this.resolve(file);
        //$LASTPOS=7001522;//jseditor.ShellMod:1522
        r = _this.waitFor(file.rm());
        
        return r;
      },
      fiber$rm :function _trc_ShellMod_f_rm(_thread,file) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var r;
        
        //$LASTPOS=7001498;//jseditor.ShellMod:1498
        file=_this.resolve(file);
        
        _thread.enter(function _trc_ShellMod_ent_rm(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=7001522;//jseditor.ShellMod:1522
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