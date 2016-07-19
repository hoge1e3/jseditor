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
        
        //$LASTPOS=18001751;//jseditor.Finder:1751
        _this.excludeDir={".git/": 1};
        //$LASTPOS=18001775;//jseditor.Finder:1775
        _this.tag("div",(function anonymous_1786() {
          
          //$LASTPOS=18001793;//jseditor.Finder:1793
          _this.mesg=_this.tag("div");
          //$LASTPOS=18001814;//jseditor.Finder:1814
          _this.res=_this.tag("div");
        }));
      },
      fiber$main :function _trc_Finder_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=18001751;//jseditor.Finder:1751
        _this.excludeDir={".git/": 1};
        
        _thread.enter(function _trc_Finder_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=18001775;//jseditor.Finder:1775
              _this.fiber$tag(_thread, "div", (function anonymous_1786() {
                
                //$LASTPOS=18001793;//jseditor.Finder:1793
                _this.mesg=_this.tag("div");
                //$LASTPOS=18001814;//jseditor.Finder:1814
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
        
        //$LASTPOS=18000039;//jseditor.Finder:39
        _this.dialog();
        //$LASTPOS=18000067;//jseditor.Finder:67
        _this.clearResult();
        
        switch (_this.loopStatus) {
        case "progress":
          //$LASTPOS=18000147;//jseditor.Finder:147
          _this.word=word;
        case "complete":
          //$LASTPOS=18000192;//jseditor.Finder:192
          _this.findFromCache(word).forEach(Tonyu.bindFunc(_this,_this.addResult));
          break;
        default:
          //$LASTPOS=18000276;//jseditor.Finder:276
          _this.filesCache={};
          //$LASTPOS=18000299;//jseditor.Finder:299
          _this.word=word;
          //$LASTPOS=18000323;//jseditor.Finder:323
          c=_this.findFileLoop(Tonyu.globals.$jsePrj.path);
        }
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
              //$LASTPOS=18000039;//jseditor.Finder:39
              _this.fiber$dialog(_thread);
              __pc=1;return;
            case 1:
              
              //$LASTPOS=18000067;//jseditor.Finder:67
              _this.fiber$clearResult(_thread);
              __pc=2;return;
            case 2:
              
              
              switch (_this.loopStatus) {
              case "progress":
                __pc=3;break;
              case "complete":
                __pc=4;break;
              default:
                __pc=5;break;
                
              }
              break;
            case 3:
              //$LASTPOS=18000147;//jseditor.Finder:147
              _this.word=word;
            case 4:
              //$LASTPOS=18000192;//jseditor.Finder:192
              _this.findFromCache(word).forEach(Tonyu.bindFunc(_this,_this.addResult));
              __pc=7; break;
              
            case 5:
              //$LASTPOS=18000276;//jseditor.Finder:276
              _this.filesCache={};
              //$LASTPOS=18000299;//jseditor.Finder:299
              _this.word=word;
              //$LASTPOS=18000323;//jseditor.Finder:323
              _this.fiber$findFileLoop(_thread, Tonyu.globals.$jsePrj.path);
              __pc=6;return;
            case 6:
              c=_thread.retVal;
              
              case 7:
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      findFileLoop :function _trc_Finder_findFileLoop(dir) {
        "use strict";
        var _this=this;
        
        //$LASTPOS=18000386;//jseditor.Finder:386
        _this.loopStatus="progress";
        //$LASTPOS=18000413;//jseditor.Finder:413
        _this.findFileLoop2(dir);
        //$LASTPOS=18000441;//jseditor.Finder:441
        _this.loopStatus="complete";
        //$LASTPOS=18000468;//jseditor.Finder:468
        _this.mesg.text("Done");
      },
      fiber$findFileLoop :function _trc_Finder_f_findFileLoop(_thread,dir) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=18000386;//jseditor.Finder:386
        _this.loopStatus="progress";
        
        _thread.enter(function _trc_Finder_ent_findFileLoop(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=18000413;//jseditor.Finder:413
              _this.fiber$findFileLoop2(_thread, dir);
              __pc=1;return;
            case 1:
              
              //$LASTPOS=18000441;//jseditor.Finder:441
              _this.loopStatus="complete";
              //$LASTPOS=18000468;//jseditor.Finder:468
              _this.mesg.text("Done");
              _thread.exit(_this);return;
            }
          }
        });
      },
      findFileLoop2 :function _trc_Finder_findFileLoop2(dir) {
        "use strict";
        var _this=this;
        var c;
        var f;
        var _it_291;
        
        //$LASTPOS=18000515;//jseditor.Finder:515
        c = 0;
        
        //$LASTPOS=18000528;//jseditor.Finder:528
        _it_291=Tonyu.iterator(dir.listFiles(),1);
        while(_it_291.next()) {
          f=_it_291[0];
          
          //$LASTPOS=18000569;//jseditor.Finder:569
          _this.mesg.text("Searching..."+f.name());
          //$LASTPOS=18000613;//jseditor.Finder:613
          _this.update();
          //$LASTPOS=18000631;//jseditor.Finder:631
          _this.addFileToCache(f);
          //$LASTPOS=18000658;//jseditor.Finder:658
          if (_this.excludeDir[f.name()]) {
            
            
          } else {
            //$LASTPOS=18000701;//jseditor.Finder:701
            if (f.isDir()) {
              //$LASTPOS=18000730;//jseditor.Finder:730
              c+=_this.findFileLoop2(f);
              
            } else {
              //$LASTPOS=18000766;//jseditor.Finder:766
              if (_this.word&&Util.startsWith(f.name(),_this.word)) {
                //$LASTPOS=18000825;//jseditor.Finder:825
                _this.addResult(f);
                //$LASTPOS=18000862;//jseditor.Finder:862
                c++;
                
              }
            }
          }
          
        }
        return c;
      },
      fiber$findFileLoop2 :function _trc_Finder_f_findFileLoop2(_thread,dir) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var c;
        var f;
        var _it_291;
        
        //$LASTPOS=18000515;//jseditor.Finder:515
        c = 0;
        
        
        _thread.enter(function _trc_Finder_ent_findFileLoop2(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=18000528;//jseditor.Finder:528
              _it_291=Tonyu.iterator(dir.listFiles(),1);
            case 1:
              if (!(_it_291.next())) { __pc=11; break; }
              f=_it_291[0];
              
              //$LASTPOS=18000569;//jseditor.Finder:569
              _this.mesg.text("Searching..."+f.name());
              //$LASTPOS=18000613;//jseditor.Finder:613
              _this.fiber$update(_thread);
              __pc=2;return;
            case 2:
              
              //$LASTPOS=18000631;//jseditor.Finder:631
              _this.fiber$addFileToCache(_thread, f);
              __pc=3;return;
            case 3:
              
              //$LASTPOS=18000658;//jseditor.Finder:658
              if (!(_this.excludeDir[f.name()])) { __pc=4; break; }
              {
                
              }
              __pc=10;break;
            case 4:
              //$LASTPOS=18000701;//jseditor.Finder:701
              if (!(f.isDir())) { __pc=6; break; }
              //$LASTPOS=18000730;//jseditor.Finder:730
              _this.fiber$findFileLoop2(_thread, f);
              __pc=5;return;
            case 5:
              c+=_thread.retVal;
              
              __pc=9;break;
            case 6:
              //$LASTPOS=18000766;//jseditor.Finder:766
              if (!(_this.word&&Util.startsWith(f.name(),_this.word))) { __pc=8; break; }
              //$LASTPOS=18000825;//jseditor.Finder:825
              _this.fiber$addResult(_thread, f);
              __pc=7;return;
            case 7:
              
              //$LASTPOS=18000862;//jseditor.Finder:862
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
        
        //$LASTPOS=18000920;//jseditor.Finder:920
        _this.resC=0;
        //$LASTPOS=18000932;//jseditor.Finder:932
        _this.res.empty();
      },
      fiber$clearResult :function _trc_Finder_f_clearResult(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=18000920;//jseditor.Finder:920
        _this.resC=0;
        //$LASTPOS=18000932;//jseditor.Finder:932
        _this.res.empty();
        
        _thread.retVal=_this;return;
      },
      addResult :function _trc_Finder_addResult(f) {
        "use strict";
        var _this=this;
        
        //$LASTPOS=18000967;//jseditor.Finder:967
        _this.resC++;
        //$LASTPOS=18000979;//jseditor.Finder:979
        if (_this.resC<20) {
          //$LASTPOS=18001002;//jseditor.Finder:1002
          _this.change(_this.res,(function anonymous_1014() {
            
            //$LASTPOS=18001029;//jseditor.Finder:1029
            _this.tag("div",(function anonymous_1040() {
              
              //$LASTPOS=18001059;//jseditor.Finder:1059
              _this.tag("a",{href: "javascript:;",on: {click: (function anonymous_1121() {
                
                //$LASTPOS=18001123;//jseditor.Finder:1123
                Tonyu.globals.$fileList.open(f);
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
        
        //$LASTPOS=18000967;//jseditor.Finder:967
        _this.resC++;
        
        _thread.enter(function _trc_Finder_ent_addResult(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=18000979;//jseditor.Finder:979
              if (!(_this.resC<20)) { __pc=2; break; }
              //$LASTPOS=18001002;//jseditor.Finder:1002
              _this.fiber$change(_thread, _this.res, (function anonymous_1014() {
                
                //$LASTPOS=18001029;//jseditor.Finder:1029
                _this.tag("div",(function anonymous_1040() {
                  
                  //$LASTPOS=18001059;//jseditor.Finder:1059
                  _this.tag("a",{href: "javascript:;",on: {click: (function anonymous_1121() {
                    
                    //$LASTPOS=18001123;//jseditor.Finder:1123
                    Tonyu.globals.$fileList.open(f);
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
        var _it_295;
        
        //$LASTPOS=18001234;//jseditor.Finder:1234
        head = key.substring(0,1);
        
        //$LASTPOS=18001267;//jseditor.Finder:1267
        ent = _this.filesCache[head];
        
        //$LASTPOS=18001297;//jseditor.Finder:1297
        res = [];
        
        //$LASTPOS=18001313;//jseditor.Finder:1313
        if (! ent) {
          return res;
        }
        //$LASTPOS=18001339;//jseditor.Finder:1339
        _it_295=Tonyu.iterator(ent,2);
        while(_it_295.next()) {
          k=_it_295[0];
          v=_it_295[1];
          
          //$LASTPOS=18001370;//jseditor.Finder:1370
          if (Util.startsWith(k,key)) {
            //$LASTPOS=18001413;//jseditor.Finder:1413
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
        var _it_295;
        
        //$LASTPOS=18001234;//jseditor.Finder:1234
        head = key.substring(0,1);
        
        //$LASTPOS=18001267;//jseditor.Finder:1267
        ent = _this.filesCache[head];
        
        //$LASTPOS=18001297;//jseditor.Finder:1297
        res = [];
        
        //$LASTPOS=18001313;//jseditor.Finder:1313
        if (! ent) {
          _thread.retVal=res;return;
          
        }
        //$LASTPOS=18001339;//jseditor.Finder:1339
        _it_295=Tonyu.iterator(ent,2);
        while(_it_295.next()) {
          k=_it_295[0];
          v=_it_295[1];
          
          //$LASTPOS=18001370;//jseditor.Finder:1370
          if (Util.startsWith(k,key)) {
            //$LASTPOS=18001413;//jseditor.Finder:1413
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
        
        //$LASTPOS=18001491;//jseditor.Finder:1491
        _this.filesCache=_this.filesCache||{};
        //$LASTPOS=18001522;//jseditor.Finder:1522
        key = f.name();
        
        //$LASTPOS=18001544;//jseditor.Finder:1544
        head = key.substring(0,1);
        
        //$LASTPOS=18001577;//jseditor.Finder:1577
        ent = _this.filesCache[head]||(_this.filesCache[head]={});
        
        //$LASTPOS=18001632;//jseditor.Finder:1632
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
        
        //$LASTPOS=18001491;//jseditor.Finder:1491
        _this.filesCache=_this.filesCache||{};
        //$LASTPOS=18001522;//jseditor.Finder:1522
        key = f.name();
        
        //$LASTPOS=18001544;//jseditor.Finder:1544
        head = key.substring(0,1);
        
        //$LASTPOS=18001577;//jseditor.Finder:1577
        ent = _this.filesCache[head]||(_this.filesCache[head]={});
        
        //$LASTPOS=18001632;//jseditor.Finder:1632
        (ent[key]=ent[key]||[]).push(f);
        
        _thread.retVal=_this;return;
      },
      update :function _trc_Finder_update() {
        "use strict";
        var _this=this;
        
        //$LASTPOS=18001683;//jseditor.Finder:1683
        _this.upc=(_this.upc||0)+1;
        //$LASTPOS=18001703;//jseditor.Finder:1703
        if (_this.upc%5==0) {
          //$LASTPOS=18001727;//jseditor.Finder:1727
          Tonyu.classes.jseditor.UIForm.prototype.update.apply( _this, []);
          
        }
      },
      fiber$update :function _trc_Finder_f_update(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=18001683;//jseditor.Finder:1683
        _this.upc=(_this.upc||0)+1;
        
        _thread.enter(function _trc_Finder_ent_update(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=18001703;//jseditor.Finder:1703
              if (!(_this.upc%5==0)) { __pc=2; break; }
              //$LASTPOS=18001727;//jseditor.Finder:1727
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
    decls: {"methods":{"main":{"nowait":false},"findFile":{"nowait":false},"findFileLoop":{"nowait":false},"findFileLoop2":{"nowait":false},"clearResult":{"nowait":false},"addResult":{"nowait":false},"findFromCache":{"nowait":false},"addFileToCache":{"nowait":false},"update":{"nowait":false}}}
  });
});