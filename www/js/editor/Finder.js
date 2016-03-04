define(function (require) {
  var Tonyu=require('Tonyu');
  var Util=require('Util');
  var UIForm=require('UIForm');
  return Tonyu.klass.define({
    fullName: 'jseditor.Finder',
    shortName: 'Finder',
    namespace: 'jseditor',
    superclass: Tonyu.classes.jseditor.UIForm,
    includes: [],
    methods: {
      main :function _trc_Finder_main() {
        "use strict";
        var _this=this;
        
        //$LASTPOS=16000713;//jseditor.Finder:713
        _this.excludeDir={".git/": 1};
        //$LASTPOS=16000737;//jseditor.Finder:737
        _this.tag("div",(function anonymous_748() {
          
          //$LASTPOS=16000755;//jseditor.Finder:755
          _this.mesg=_this.tag("div");
          //$LASTPOS=16000776;//jseditor.Finder:776
          _this.res=_this.tag("div");
        }));
      },
      fiber$main :function _trc_Finder_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=16000713;//jseditor.Finder:713
        _this.excludeDir={".git/": 1};
        
        _thread.enter(function _trc_Finder_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=16000737;//jseditor.Finder:737
              _this.fiber$tag(_thread, "div", (function anonymous_748() {
                
                //$LASTPOS=16000755;//jseditor.Finder:755
                _this.mesg=_this.tag("div");
                //$LASTPOS=16000776;//jseditor.Finder:776
                _this.res=_this.tag("div");
              }));
              __pc=1;return;
            case 1:
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      findFile :function _trc_Finder_findFile(word) {
        "use strict";
        var _this=this;
        var c;
        
        //$LASTPOS=16000039;//jseditor.Finder:39
        _this.dialog({width: 600});
        //$LASTPOS=16000062;//jseditor.Finder:62
        c = _this.findFileLoop(word,Tonyu.globals.$jsePrj.path);
        
        //$LASTPOS=16000105;//jseditor.Finder:105
        _this.mesg.text(c+" File(s) found");
      },
      fiber$findFile :function _trc_Finder_f_findFile(_thread,word) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var c;
        
        
        _thread.enter(function _trc_Finder_ent_findFile(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=16000039;//jseditor.Finder:39
              _this.fiber$dialog(_thread, {width: 600});
              __pc=1;return;
            case 1:
              
              //$LASTPOS=16000062;//jseditor.Finder:62
              _this.fiber$findFileLoop(_thread, word, Tonyu.globals.$jsePrj.path);
              __pc=2;return;
            case 2:
              c=_thread.retVal;
              
              //$LASTPOS=16000105;//jseditor.Finder:105
              _this.mesg.text(c+" File(s) found");
              _thread.exit(_this);return;
            }
          }
        });
      },
      findFileLoop :function _trc_Finder_findFileLoop(word,dir) {
        "use strict";
        var _this=this;
        var c;
        var f;
        var _it_194;
        
        //$LASTPOS=16000168;//jseditor.Finder:168
        c = 0;
        
        //$LASTPOS=16000181;//jseditor.Finder:181
        _this.mesg.text("Searching..."+dir.name());
        //$LASTPOS=16000223;//jseditor.Finder:223
        _this.update();
        //$LASTPOS=16000237;//jseditor.Finder:237
        _it_194=Tonyu.iterator(dir.listFiles(),1);
        while(_it_194.next()) {
          f=_it_194[0];
          
          //$LASTPOS=16000278;//jseditor.Finder:278
          if (_this.excludeDir[f.name()]) {
            
            
          } else {
            //$LASTPOS=16000321;//jseditor.Finder:321
            if (f.isDir()) {
              //$LASTPOS=16000350;//jseditor.Finder:350
              c+=_this.findFileLoop(word,f);
              
            } else {
              //$LASTPOS=16000390;//jseditor.Finder:390
              if (Util.startsWith(f.name(),word)) {
                //$LASTPOS=16000441;//jseditor.Finder:441
                _this.addResult(f);
                //$LASTPOS=16000478;//jseditor.Finder:478
                c++;
                
              }
            }
          }
          
        }
        return c;
      },
      fiber$findFileLoop :function _trc_Finder_f_findFileLoop(_thread,word,dir) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var c;
        var f;
        var _it_194;
        
        //$LASTPOS=16000168;//jseditor.Finder:168
        c = 0;
        
        //$LASTPOS=16000181;//jseditor.Finder:181
        _this.mesg.text("Searching..."+dir.name());
        
        _thread.enter(function _trc_Finder_ent_findFileLoop(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=16000223;//jseditor.Finder:223
              _this.fiber$update(_thread);
              __pc=1;return;
            case 1:
              
              //$LASTPOS=16000237;//jseditor.Finder:237
              _it_194=Tonyu.iterator(dir.listFiles(),1);
            case 2:
              if (!(_it_194.next())) { __pc=10; break; }
              f=_it_194[0];
              
              //$LASTPOS=16000278;//jseditor.Finder:278
              if (!(_this.excludeDir[f.name()])) { __pc=3; break; }
              {
                
              }
              __pc=9;break;
            case 3:
              //$LASTPOS=16000321;//jseditor.Finder:321
              if (!(f.isDir())) { __pc=5; break; }
              //$LASTPOS=16000350;//jseditor.Finder:350
              _this.fiber$findFileLoop(_thread, word, f);
              __pc=4;return;
            case 4:
              c+=_thread.retVal;
              
              __pc=8;break;
            case 5:
              //$LASTPOS=16000390;//jseditor.Finder:390
              if (!(Util.startsWith(f.name(),word))) { __pc=7; break; }
              //$LASTPOS=16000441;//jseditor.Finder:441
              _this.fiber$addResult(_thread, f);
              __pc=6;return;
            case 6:
              
              //$LASTPOS=16000478;//jseditor.Finder:478
              c++;
            case 7:
              
            case 8:
              
            case 9:
              
              __pc=2;break;
            case 10:
              
              _thread.exit(c);return;
              _thread.exit(_this);return;
            }
          }
        });
      },
      addResult :function _trc_Finder_addResult(f) {
        "use strict";
        var _this=this;
        
        //$LASTPOS=16000536;//jseditor.Finder:536
        _this.change(_this.res,(function anonymous_548() {
          
          //$LASTPOS=16000559;//jseditor.Finder:559
          _this.tag("div",(function anonymous_570() {
            
            //$LASTPOS=16000585;//jseditor.Finder:585
            _this.tag("a",{href: "javascript:;",on: {click: (function anonymous_643() {
              
              //$LASTPOS=16000645;//jseditor.Finder:645
              Tonyu.globals.$editorSet.open(f);
            })}},f.name());
          }));
        }));
      },
      fiber$addResult :function _trc_Finder_f_addResult(_thread,f) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        _thread.enter(function _trc_Finder_ent_addResult(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=16000536;//jseditor.Finder:536
              _this.fiber$change(_thread, _this.res, (function anonymous_548() {
                
                //$LASTPOS=16000559;//jseditor.Finder:559
                _this.tag("div",(function anonymous_570() {
                  
                  //$LASTPOS=16000585;//jseditor.Finder:585
                  _this.tag("a",{href: "javascript:;",on: {click: (function anonymous_643() {
                    
                    //$LASTPOS=16000645;//jseditor.Finder:645
                    Tonyu.globals.$editorSet.open(f);
                  })}},f.name());
                }));
              }));
              __pc=1;return;
            case 1:
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      __dummy: false
    },
    decls: {"methods":{"main":{"nowait":false},"findFile":{"nowait":false},"findFileLoop":{"nowait":false},"addResult":{"nowait":false}}}
  });
});