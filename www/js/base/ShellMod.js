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
      readJSON :function _trc_ShellMod_readJSON(file,def) {
        "use strict";
        var _this=this;
        var e;
        var o;
        var r;
        
        //$LASTPOS=7000321;//jseditor.ShellMod:321
        file=_this.resolve(file);
        //$LASTPOS=7000345;//jseditor.ShellMod:345
        e = _this.waitFor(file.exists());
        
        //$LASTPOS=7000379;//jseditor.ShellMod:379
        if (! e) {
          //$LASTPOS=7000397;//jseditor.ShellMod:397
          if (arguments.length>=2) {
            return def;
          }
          
        }
        //$LASTPOS=7000445;//jseditor.ShellMod:445
        o = file.obj();
        
        //$LASTPOS=7000467;//jseditor.ShellMod:467
        r = _this.waitFor(o);
        
        //$LASTPOS=7000489;//jseditor.ShellMod:489
        _this.print("rdjson",o,r);
        return r;
      },
      fiber$readJSON :function _trc_ShellMod_f_readJSON(_thread,file,def) {
        "use strict";
        var _this=this;
        var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var e;
        var o;
        var r;
        
        //$LASTPOS=7000321;//jseditor.ShellMod:321
        file=_this.resolve(file);
        
        _thread.enter(function _trc_ShellMod_ent_readJSON(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=7000345;//jseditor.ShellMod:345
              _this.fiber$waitFor(_thread, file.exists());
              __pc=1;return;
            case 1:
              e=_thread.retVal;
              
              //$LASTPOS=7000379;//jseditor.ShellMod:379
              if (!(! e)) { __pc=3; break; }
              //$LASTPOS=7000397;//jseditor.ShellMod:397
              if (!(_arguments.length>=2)) { __pc=2; break; }
              _thread.exit(def);return;
            case 2:
              
            case 3:
              
              //$LASTPOS=7000445;//jseditor.ShellMod:445
              o = file.obj();
              
              //$LASTPOS=7000467;//jseditor.ShellMod:467
              _this.fiber$waitFor(_thread, o);
              __pc=4;return;
            case 4:
              r=_thread.retVal;
              
              //$LASTPOS=7000489;//jseditor.ShellMod:489
              _this.print("rdjson",o,r);
              _thread.exit(r);return;
              _thread.exit(_this);return;
            }
          }
        });
      },
      readFile :function _trc_ShellMod_readFile(file,def) {
        "use strict";
        var _this=this;
        var e;
        var r;
        
        //$LASTPOS=7000552;//jseditor.ShellMod:552
        file=_this.resolve(file);
        //$LASTPOS=7000576;//jseditor.ShellMod:576
        e = _this.waitFor(file.exists());
        
        //$LASTPOS=7000610;//jseditor.ShellMod:610
        if (! e) {
          //$LASTPOS=7000628;//jseditor.ShellMod:628
          if (arguments.length>=2) {
            return def;
          }
          
        }
        //$LASTPOS=7000676;//jseditor.ShellMod:676
        r = _this.waitFor(file.text());
        
        return r;
      },
      fiber$readFile :function _trc_ShellMod_f_readFile(_thread,file,def) {
        "use strict";
        var _this=this;
        var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var e;
        var r;
        
        //$LASTPOS=7000552;//jseditor.ShellMod:552
        file=_this.resolve(file);
        
        _thread.enter(function _trc_ShellMod_ent_readFile(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=7000576;//jseditor.ShellMod:576
              _this.fiber$waitFor(_thread, file.exists());
              __pc=1;return;
            case 1:
              e=_thread.retVal;
              
              //$LASTPOS=7000610;//jseditor.ShellMod:610
              if (!(! e)) { __pc=3; break; }
              //$LASTPOS=7000628;//jseditor.ShellMod:628
              if (!(_arguments.length>=2)) { __pc=2; break; }
              _thread.exit(def);return;
            case 2:
              
            case 3:
              
              //$LASTPOS=7000676;//jseditor.ShellMod:676
              _this.fiber$waitFor(_thread, file.text());
              __pc=4;return;
            case 4:
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
        
        //$LASTPOS=7000756;//jseditor.ShellMod:756
        file=_this.resolve(file);
        //$LASTPOS=7000780;//jseditor.ShellMod:780
        if (typeof  cont=="string") {
          //$LASTPOS=7000818;//jseditor.ShellMod:818
          JSON.parse(cont);
          //$LASTPOS=7000844;//jseditor.ShellMod:844
          _this.writeFile(file,cont);
          
        } else {
          //$LASTPOS=7000877;//jseditor.ShellMod:877
          if (typeof  cont=="object") {
            //$LASTPOS=7000914;//jseditor.ShellMod:914
            if (options&&options.indent) {
              //$LASTPOS=7000957;//jseditor.ShellMod:957
              _this.writeFile(file,JSON.stringify(cont,null,options.indent));
              
            } else {
              //$LASTPOS=7001045;//jseditor.ShellMod:1045
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
        
        //$LASTPOS=7000756;//jseditor.ShellMod:756
        file=_this.resolve(file);
        
        _thread.enter(function _trc_ShellMod_ent_writeJSON(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=7000780;//jseditor.ShellMod:780
              if (!(typeof  cont=="string")) { __pc=2; break; }
              //$LASTPOS=7000818;//jseditor.ShellMod:818
              JSON.parse(cont);
              //$LASTPOS=7000844;//jseditor.ShellMod:844
              _this.fiber$writeFile(_thread, file, cont);
              __pc=1;return;
            case 1:
              
              __pc=9;break;
            case 2:
              //$LASTPOS=7000877;//jseditor.ShellMod:877
              if (!(typeof  cont=="object")) { __pc=7; break; }
              //$LASTPOS=7000914;//jseditor.ShellMod:914
              if (!(options&&options.indent)) { __pc=4; break; }
              //$LASTPOS=7000957;//jseditor.ShellMod:957
              _this.fiber$writeFile(_thread, file, JSON.stringify(cont,null,options.indent));
              __pc=3;return;
            case 3:
              
              __pc=6;break;
            case 4:
              //$LASTPOS=7001045;//jseditor.ShellMod:1045
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
        
        //$LASTPOS=7001184;//jseditor.ShellMod:1184
        file=_this.resolve(file);
        //$LASTPOS=7001208;//jseditor.ShellMod:1208
        if (typeof  cont=="string") {
          //$LASTPOS=7001246;//jseditor.ShellMod:1246
          _this.waitFor(file.text(cont));
          
        } else {
          //$LASTPOS=7001283;//jseditor.ShellMod:1283
          if (typeof  cont=="object") {
            //$LASTPOS=7001320;//jseditor.ShellMod:1320
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
        
        //$LASTPOS=7001184;//jseditor.ShellMod:1184
        file=_this.resolve(file);
        
        _thread.enter(function _trc_ShellMod_ent_writeFile(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=7001208;//jseditor.ShellMod:1208
              if (!(typeof  cont=="string")) { __pc=2; break; }
              //$LASTPOS=7001246;//jseditor.ShellMod:1246
              _this.fiber$waitFor(_thread, file.text(cont));
              __pc=1;return;
            case 1:
              
              __pc=6;break;
            case 2:
              //$LASTPOS=7001283;//jseditor.ShellMod:1283
              if (!(typeof  cont=="object")) { __pc=4; break; }
              //$LASTPOS=7001320;//jseditor.ShellMod:1320
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
        
        //$LASTPOS=7001440;//jseditor.ShellMod:1440
        src=_this.resolve(src);
        //$LASTPOS=7001462;//jseditor.ShellMod:1462
        dst=_this.resolve(dst);
        //$LASTPOS=7001484;//jseditor.ShellMod:1484
        _this.waitFor(dst.moveFrom(src));
      },
      fiber$mv :function _trc_ShellMod_f_mv(_thread,src,dst) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=7001440;//jseditor.ShellMod:1440
        src=_this.resolve(src);
        //$LASTPOS=7001462;//jseditor.ShellMod:1462
        dst=_this.resolve(dst);
        
        _thread.enter(function _trc_ShellMod_ent_mv(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=7001484;//jseditor.ShellMod:1484
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
        
        //$LASTPOS=7001533;//jseditor.ShellMod:1533
        file=_this.resolve(file);
        //$LASTPOS=7001557;//jseditor.ShellMod:1557
        r = _this.waitFor(file.isDir());
        
        return r;
      },
      fiber$isDir :function _trc_ShellMod_f_isDir(_thread,file) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var r;
        
        //$LASTPOS=7001533;//jseditor.ShellMod:1533
        file=_this.resolve(file);
        
        _thread.enter(function _trc_ShellMod_ent_isDir(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=7001557;//jseditor.ShellMod:1557
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
        
        //$LASTPOS=7001621;//jseditor.ShellMod:1621
        file=_this.resolve(file);
        //$LASTPOS=7001645;//jseditor.ShellMod:1645
        r = _this.waitFor(file.mkdir());
        
        return r;
      },
      fiber$mkdir :function _trc_ShellMod_f_mkdir(_thread,file) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var r;
        
        //$LASTPOS=7001621;//jseditor.ShellMod:1621
        file=_this.resolve(file);
        
        _thread.enter(function _trc_ShellMod_ent_mkdir(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=7001645;//jseditor.ShellMod:1645
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
        
        //$LASTPOS=7001706;//jseditor.ShellMod:1706
        file=_this.resolve(file);
        //$LASTPOS=7001730;//jseditor.ShellMod:1730
        r = _this.waitFor(file.rm());
        
        return r;
      },
      fiber$rm :function _trc_ShellMod_f_rm(_thread,file) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var r;
        
        //$LASTPOS=7001706;//jseditor.ShellMod:1706
        file=_this.resolve(file);
        
        _thread.enter(function _trc_ShellMod_ent_rm(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=7001730;//jseditor.ShellMod:1730
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