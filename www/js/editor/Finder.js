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
        
        //$LASTPOS=14001505;//jseditor.Finder:1505
        _this.excludeDir={".git/": 1};
        //$LASTPOS=14001529;//jseditor.Finder:1529
        _this.tag("div",(function anonymous_1540() {
          
          //$LASTPOS=14001547;//jseditor.Finder:1547
          _this.mesg=_this.tag("div");
          //$LASTPOS=14001568;//jseditor.Finder:1568
          _this.res=_this.tag("div");
        }));
      },
      fiber$main :function _trc_Finder_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=14001505;//jseditor.Finder:1505
        _this.excludeDir={".git/": 1};
        
        _thread.enter(function _trc_Finder_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=14001529;//jseditor.Finder:1529
              _this.fiber$tag(_thread, "div", (function anonymous_1540() {
                
                //$LASTPOS=14001547;//jseditor.Finder:1547
                _this.mesg=_this.tag("div");
                //$LASTPOS=14001568;//jseditor.Finder:1568
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
        
        //$LASTPOS=14000039;//jseditor.Finder:39
        _this.dialog();
        //$LASTPOS=14000067;//jseditor.Finder:67
        _this.clearResult();
        
        //$LASTPOS=14000097;//jseditor.Finder:97
        if (_this.filesCache) {
          //$LASTPOS=14000123;//jseditor.Finder:123
          _this.findFromCache(word).forEach(Tonyu.bindFunc(_this,_this.addResult));
          
        } else {
          //$LASTPOS=14000184;//jseditor.Finder:184
          _this.filesCache={};
          //$LASTPOS=14000207;//jseditor.Finder:207
          c=_this.findFileLoop(word,Tonyu.globals.$jsePrj.path);
          
        }
        //$LASTPOS=14000252;//jseditor.Finder:252
        _this.mesg.text("Done");
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
              //$LASTPOS=14000039;//jseditor.Finder:39
              _this.fiber$dialog(_thread);
              __pc=1;return;
            case 1:
              
              //$LASTPOS=14000067;//jseditor.Finder:67
              _this.fiber$clearResult(_thread);
              __pc=2;return;
            case 2:
              
              
              //$LASTPOS=14000097;//jseditor.Finder:97
              if (!(_this.filesCache)) { __pc=3; break; }
              {
                //$LASTPOS=14000123;//jseditor.Finder:123
                _this.findFromCache(word).forEach(Tonyu.bindFunc(_this,_this.addResult));
              }
              __pc=5;break;
            case 3:
              //$LASTPOS=14000184;//jseditor.Finder:184
              _this.filesCache={};
              //$LASTPOS=14000207;//jseditor.Finder:207
              _this.fiber$findFileLoop(_thread, word, Tonyu.globals.$jsePrj.path);
              __pc=4;return;
            case 4:
              c=_thread.retVal;
              
            case 5:
              
              //$LASTPOS=14000252;//jseditor.Finder:252
              _this.mesg.text("Done");
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
        var _it_241;
        
        //$LASTPOS=14000303;//jseditor.Finder:303
        c = 0;
        
        //$LASTPOS=14000316;//jseditor.Finder:316
        _it_241=Tonyu.iterator(dir.listFiles(),1);
        while(_it_241.next()) {
          f=_it_241[0];
          
          //$LASTPOS=14000357;//jseditor.Finder:357
          _this.mesg.text("Searching..."+f.name());
          //$LASTPOS=14000401;//jseditor.Finder:401
          _this.update();
          //$LASTPOS=14000419;//jseditor.Finder:419
          _this.addFileToCache(f);
          //$LASTPOS=14000446;//jseditor.Finder:446
          if (_this.excludeDir[f.name()]) {
            
            
          } else {
            //$LASTPOS=14000489;//jseditor.Finder:489
            if (f.isDir()) {
              //$LASTPOS=14000518;//jseditor.Finder:518
              c+=_this.findFileLoop(word,f);
              
            } else {
              //$LASTPOS=14000558;//jseditor.Finder:558
              if (Util.startsWith(f.name(),word)) {
                //$LASTPOS=14000609;//jseditor.Finder:609
                _this.addResult(f);
                //$LASTPOS=14000646;//jseditor.Finder:646
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
        var _it_241;
        
        //$LASTPOS=14000303;//jseditor.Finder:303
        c = 0;
        
        
        _thread.enter(function _trc_Finder_ent_findFileLoop(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=14000316;//jseditor.Finder:316
              _it_241=Tonyu.iterator(dir.listFiles(),1);
            case 1:
              if (!(_it_241.next())) { __pc=11; break; }
              f=_it_241[0];
              
              //$LASTPOS=14000357;//jseditor.Finder:357
              _this.mesg.text("Searching..."+f.name());
              //$LASTPOS=14000401;//jseditor.Finder:401
              _this.fiber$update(_thread);
              __pc=2;return;
            case 2:
              
              //$LASTPOS=14000419;//jseditor.Finder:419
              _this.fiber$addFileToCache(_thread, f);
              __pc=3;return;
            case 3:
              
              //$LASTPOS=14000446;//jseditor.Finder:446
              if (!(_this.excludeDir[f.name()])) { __pc=4; break; }
              {
                
              }
              __pc=10;break;
            case 4:
              //$LASTPOS=14000489;//jseditor.Finder:489
              if (!(f.isDir())) { __pc=6; break; }
              //$LASTPOS=14000518;//jseditor.Finder:518
              _this.fiber$findFileLoop(_thread, word, f);
              __pc=5;return;
            case 5:
              c+=_thread.retVal;
              
              __pc=9;break;
            case 6:
              //$LASTPOS=14000558;//jseditor.Finder:558
              if (!(Util.startsWith(f.name(),word))) { __pc=8; break; }
              //$LASTPOS=14000609;//jseditor.Finder:609
              _this.fiber$addResult(_thread, f);
              __pc=7;return;
            case 7:
              
              //$LASTPOS=14000646;//jseditor.Finder:646
              c++;
            case 8:
              
            case 9:
              
            case 10:
              
              __pc=1;break;
            case 11:
              
              _thread.exit(c);return;
              _thread.exit(_this);return;
            }
          }
        });
      },
      clearResult :function _trc_Finder_clearResult() {
        "use strict";
        var _this=this;
        
        //$LASTPOS=14000704;//jseditor.Finder:704
        _this.resC=0;
        //$LASTPOS=14000716;//jseditor.Finder:716
        _this.res.empty();
      },
      fiber$clearResult :function _trc_Finder_f_clearResult(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=14000704;//jseditor.Finder:704
        _this.resC=0;
        //$LASTPOS=14000716;//jseditor.Finder:716
        _this.res.empty();
        
        _thread.retVal=_this;return;
      },
      addResult :function _trc_Finder_addResult(f) {
        "use strict";
        var _this=this;
        
        //$LASTPOS=14000751;//jseditor.Finder:751
        _this.resC++;
        //$LASTPOS=14000763;//jseditor.Finder:763
        if (_this.resC<20) {
          //$LASTPOS=14000786;//jseditor.Finder:786
          _this.change(_this.res,(function anonymous_798() {
            
            //$LASTPOS=14000813;//jseditor.Finder:813
            _this.tag("div",(function anonymous_824() {
              
              //$LASTPOS=14000843;//jseditor.Finder:843
              _this.tag("a",{href: "javascript:;",on: {click: (function anonymous_905() {
                
                //$LASTPOS=14000907;//jseditor.Finder:907
                Tonyu.globals.$editorSet.open(f);
              })}},f.name());
            }));
          }));
          
        }
      },
      fiber$addResult :function _trc_Finder_f_addResult(_thread,f) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=14000751;//jseditor.Finder:751
        _this.resC++;
        
        _thread.enter(function _trc_Finder_ent_addResult(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=14000763;//jseditor.Finder:763
              if (!(_this.resC<20)) { __pc=2; break; }
              //$LASTPOS=14000786;//jseditor.Finder:786
              _this.fiber$change(_thread, _this.res, (function anonymous_798() {
                
                //$LASTPOS=14000813;//jseditor.Finder:813
                _this.tag("div",(function anonymous_824() {
                  
                  //$LASTPOS=14000843;//jseditor.Finder:843
                  _this.tag("a",{href: "javascript:;",on: {click: (function anonymous_905() {
                    
                    //$LASTPOS=14000907;//jseditor.Finder:907
                    Tonyu.globals.$editorSet.open(f);
                  })}},f.name());
                }));
              }));
              __pc=1;return;
            case 1:
              
            case 2:
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      findFromCache :function _trc_Finder_findFromCache(key) {
        "use strict";
        var _this=this;
        var head;
        var ent;
        var res;
        var k;
        var v;
        var _it_245;
        
        //$LASTPOS=14001019;//jseditor.Finder:1019
        head = key.substring(0,1);
        
        //$LASTPOS=14001052;//jseditor.Finder:1052
        ent = _this.filesCache[head];
        
        //$LASTPOS=14001082;//jseditor.Finder:1082
        res = [];
        
        //$LASTPOS=14001098;//jseditor.Finder:1098
        if (! ent) {
          return res;
        }
        //$LASTPOS=14001124;//jseditor.Finder:1124
        _it_245=Tonyu.iterator(ent,2);
        while(_it_245.next()) {
          k=_it_245[0];
          v=_it_245[1];
          
          //$LASTPOS=14001155;//jseditor.Finder:1155
          if (Util.startsWith(k,key)) {
            //$LASTPOS=14001198;//jseditor.Finder:1198
            res=res.concat(v);
            
          }
          
        }
        return res;
      },
      fiber$findFromCache :function _trc_Finder_f_findFromCache(_thread,key) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var head;
        var ent;
        var res;
        var k;
        var v;
        var _it_245;
        
        //$LASTPOS=14001019;//jseditor.Finder:1019
        head = key.substring(0,1);
        
        //$LASTPOS=14001052;//jseditor.Finder:1052
        ent = _this.filesCache[head];
        
        //$LASTPOS=14001082;//jseditor.Finder:1082
        res = [];
        
        //$LASTPOS=14001098;//jseditor.Finder:1098
        if (! ent) {
          _thread.retVal=res;return;
          
        }
        //$LASTPOS=14001124;//jseditor.Finder:1124
        _it_245=Tonyu.iterator(ent,2);
        while(_it_245.next()) {
          k=_it_245[0];
          v=_it_245[1];
          
          //$LASTPOS=14001155;//jseditor.Finder:1155
          if (Util.startsWith(k,key)) {
            //$LASTPOS=14001198;//jseditor.Finder:1198
            res=res.concat(v);
            
          }
          
        }
        _thread.retVal=res;return;
        
        
        _thread.retVal=_this;return;
      },
      addFileToCache :function _trc_Finder_addFileToCache(f) {
        "use strict";
        var _this=this;
        var key;
        var head;
        var ent;
        
        //$LASTPOS=14001276;//jseditor.Finder:1276
        key = f.name();
        
        //$LASTPOS=14001298;//jseditor.Finder:1298
        head = key.substring(0,1);
        
        //$LASTPOS=14001331;//jseditor.Finder:1331
        ent = _this.filesCache[head]||(_this.filesCache[head]={});
        
        //$LASTPOS=14001386;//jseditor.Finder:1386
        (ent[key]=ent[key]||[]).push(f);
      },
      fiber$addFileToCache :function _trc_Finder_f_addFileToCache(_thread,f) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var key;
        var head;
        var ent;
        
        //$LASTPOS=14001276;//jseditor.Finder:1276
        key = f.name();
        
        //$LASTPOS=14001298;//jseditor.Finder:1298
        head = key.substring(0,1);
        
        //$LASTPOS=14001331;//jseditor.Finder:1331
        ent = _this.filesCache[head]||(_this.filesCache[head]={});
        
        //$LASTPOS=14001386;//jseditor.Finder:1386
        (ent[key]=ent[key]||[]).push(f);
        
        _thread.retVal=_this;return;
      },
      update :function _trc_Finder_update() {
        "use strict";
        var _this=this;
        
        //$LASTPOS=14001437;//jseditor.Finder:1437
        _this.upc=(_this.upc||0)+1;
        //$LASTPOS=14001457;//jseditor.Finder:1457
        if (_this.upc%5==0) {
          //$LASTPOS=14001481;//jseditor.Finder:1481
          Tonyu.classes.jseditor.UIForm.prototype.update.apply( _this, []);
          
        }
      },
      fiber$update :function _trc_Finder_f_update(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=14001437;//jseditor.Finder:1437
        _this.upc=(_this.upc||0)+1;
        
        _thread.enter(function _trc_Finder_ent_update(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=14001457;//jseditor.Finder:1457
              if (!(_this.upc%5==0)) { __pc=2; break; }
              //$LASTPOS=14001481;//jseditor.Finder:1481
              Tonyu.classes.jseditor.UIForm.prototype.fiber$update.apply( _this, [_thread]);
              __pc=1;return;
            case 1:
              
            case 2:
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      __dummy: false
    },
    decls: {"methods":{"main":{"nowait":false},"findFile":{"nowait":false},"findFileLoop":{"nowait":false},"clearResult":{"nowait":false},"addResult":{"nowait":false},"findFromCache":{"nowait":false},"addFileToCache":{"nowait":false},"update":{"nowait":false}}}
  });
});