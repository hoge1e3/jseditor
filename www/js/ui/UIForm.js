define(function (require) {
  var Tonyu=require('Tonyu');
  var Util=require('Util');
  var Base=require('Base');
  return Tonyu.klass.define({
    fullName: 'jseditor.UIForm',
    shortName: 'UIForm',
    namespace: 'jseditor',
    superclass: Tonyu.classes.jseditor.Base,
    includes: [],
    methods: {
      main :function _trc_UIForm_main() {
        "use strict";
        var _this=this;
        
      },
      fiber$main :function _trc_UIForm_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        _thread.retVal=_this;return;
      },
      initialize :function _trc_UIForm_initialize(o) {
        "use strict";
        var _this=this;
        
        //$LASTPOS=11000041;//jseditor.UIForm:41
        Tonyu.classes.jseditor.Base.apply( _this, [o]);
        //$LASTPOS=11000056;//jseditor.UIForm:56
        _this.listeners=[];
        //$LASTPOS=11000075;//jseditor.UIForm:75
        _this.main();
      },
      appendTo :function _trc_UIForm_appendTo(dom) {
        "use strict";
        var _this=this;
        
        //$LASTPOS=11000109;//jseditor.UIForm:109
        _this.jqdom.append(dom);
      },
      fiber$appendTo :function _trc_UIForm_f_appendTo(_thread,dom) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=11000109;//jseditor.UIForm:109
        _this.jqdom.append(dom);
        
        _thread.retVal=_this;return;
      },
      dialog :function _trc_UIForm_dialog(options) {
        "use strict";
        var _this=this;
        
        //$LASTPOS=11000156;//jseditor.UIForm:156
        _this.jqdom.dialog(options);
      },
      fiber$dialog :function _trc_UIForm_f_dialog(_thread,options) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=11000156;//jseditor.UIForm:156
        _this.jqdom.dialog(options);
        
        _thread.retVal=_this;return;
      },
      tag :function _trc_UIForm_tag() {
        "use strict";
        var _this=this;
        var d;
        
        //$LASTPOS=11000197;//jseditor.UIForm:197
        d = _this.parseArray(arguments);
        
        //$LASTPOS=11000231;//jseditor.UIForm:231
        (_this._jqdom||_this.jqdom).append(d);
        return d;
      },
      fiber$tag :function _trc_UIForm_f_tag(_thread) {
        "use strict";
        var _this=this;
        var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var d;
        
        
        _thread.enter(function _trc_UIForm_ent_tag(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=11000197;//jseditor.UIForm:197
              _this.fiber$parseArray(_thread, _arguments);
              __pc=1;return;
            case 1:
              d=_thread.retVal;
              
              //$LASTPOS=11000231;//jseditor.UIForm:231
              (_this._jqdom||_this.jqdom).append(d);
              _thread.exit(d);return;
              _thread.exit(_this);return;
            }
          }
        });
      },
      change :function _trc_UIForm_change(elem,func) {
        "use strict";
        var _this=this;
        var sv;
        
        //$LASTPOS=11000303;//jseditor.UIForm:303
        sv = _this._jqdom;
        
        //$LASTPOS=11000323;//jseditor.UIForm:323
        _this._jqdom=elem;
        //$LASTPOS=11000341;//jseditor.UIForm:341
        _this.find();
        //$LASTPOS=11000354;//jseditor.UIForm:354
        _this._jqdom=sv;
      },
      fiber$change :function _trc_UIForm_f_change(_thread,elem,func) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var sv;
        
        //$LASTPOS=11000303;//jseditor.UIForm:303
        sv = _this._jqdom;
        
        //$LASTPOS=11000323;//jseditor.UIForm:323
        _this._jqdom=elem;
        //$LASTPOS=11000341;//jseditor.UIForm:341
        _this.find();
        //$LASTPOS=11000354;//jseditor.UIForm:354
        _this._jqdom=sv;
        
        _thread.retVal=_this;return;
      },
      parse :function _trc_UIForm_parse(expr) {
        "use strict";
        var _this=this;
        
        //$LASTPOS=11000397;//jseditor.UIForm:397
        if (expr instanceof Array) {
          return _this.parseArray(expr);
        } else {
          //$LASTPOS=11000459;//jseditor.UIForm:459
          if (typeof  expr=="string") {
            return _this.parseString(expr);
          } else {
            //$LASTPOS=11000522;//jseditor.UIForm:522
            if (typeof  expr=="function") {
              return expr(_this._jqdom);
            } else {
              return expr;
            }
          }
        }
      },
      fiber$parse :function _trc_UIForm_f_parse(_thread,expr) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=11000397;//jseditor.UIForm:397
        if (expr instanceof Array) {
          _thread.retVal=_this.parseArray(expr);return;
          
        } else {
          //$LASTPOS=11000459;//jseditor.UIForm:459
          if (typeof  expr=="string") {
            _thread.retVal=_this.parseString(expr);return;
            
          } else {
            //$LASTPOS=11000522;//jseditor.UIForm:522
            if (typeof  expr=="function") {
              _thread.retVal=expr(_this._jqdom);return;
              
            } else {
              _thread.retVal=expr;return;
              
            }
          }
        }
        
        _thread.retVal=_this;return;
      },
      parseArray :function _trc_UIForm_parseArray(a) {
        "use strict";
        var _this=this;
        var tag;
        var i;
        var svjq;
        var res;
        var s;
        
        //$LASTPOS=11000629;//jseditor.UIForm:629
        tag = a[0];
        
        //$LASTPOS=11000648;//jseditor.UIForm:648
        i = 0;
        
        //$LASTPOS=11000662;//jseditor.UIForm:662
        svjq = _this._jqdom;
        
        //$LASTPOS=11000688;//jseditor.UIForm:688
        if (typeof  tag=="string") {
          //$LASTPOS=11000725;//jseditor.UIForm:725
          res=_this._jqdom=$("<"+tag+">");
          //$LASTPOS=11000761;//jseditor.UIForm:761
          if (! _this.jqdom) {
            //$LASTPOS=11000773;//jseditor.UIForm:773
            _this.jqdom=_this._jqdom;
          }
          //$LASTPOS=11000796;//jseditor.UIForm:796
          i=1;
          //$LASTPOS=11000810;//jseditor.UIForm:810
          if (typeof  a[i]=="object"&&! (a[i] instanceof Array)&&! (a[i] instanceof $)) {
            //$LASTPOS=11000925;//jseditor.UIForm:925
            _this.parseAttr(a[i]);
            //$LASTPOS=11000955;//jseditor.UIForm:955
            i++;
            
          }
          
        }
        //$LASTPOS=11000983;//jseditor.UIForm:983
        while (i<a.length) {
          //$LASTPOS=11001013;//jseditor.UIForm:1013
          s = _this.parse(a[i]);
          
          //$LASTPOS=11001041;//jseditor.UIForm:1041
          if (s) {
            //$LASTPOS=11001048;//jseditor.UIForm:1048
            res.append(s);
          }
          //$LASTPOS=11001072;//jseditor.UIForm:1072
          i++;
          
        }
        //$LASTPOS=11001089;//jseditor.UIForm:1089
        _this._jqdom=svjq;
        return res;
      },
      fiber$parseArray :function _trc_UIForm_f_parseArray(_thread,a) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var tag;
        var i;
        var svjq;
        var res;
        var s;
        
        //$LASTPOS=11000629;//jseditor.UIForm:629
        tag = a[0];
        
        //$LASTPOS=11000648;//jseditor.UIForm:648
        i = 0;
        
        //$LASTPOS=11000662;//jseditor.UIForm:662
        svjq = _this._jqdom;
        
        
        _thread.enter(function _trc_UIForm_ent_parseArray(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=11000688;//jseditor.UIForm:688
              if (!(typeof  tag=="string")) { __pc=3; break; }
              //$LASTPOS=11000725;//jseditor.UIForm:725
              res=_this._jqdom=$("<"+tag+">");
              //$LASTPOS=11000761;//jseditor.UIForm:761
              if (! _this.jqdom) {
                //$LASTPOS=11000773;//jseditor.UIForm:773
                _this.jqdom=_this._jqdom;
              }
              //$LASTPOS=11000796;//jseditor.UIForm:796
              i=1;
              //$LASTPOS=11000810;//jseditor.UIForm:810
              if (!(typeof  a[i]=="object"&&! (a[i] instanceof Array)&&! (a[i] instanceof $))) { __pc=2; break; }
              //$LASTPOS=11000925;//jseditor.UIForm:925
              _this.fiber$parseAttr(_thread, a[i]);
              __pc=1;return;
            case 1:
              
              //$LASTPOS=11000955;//jseditor.UIForm:955
              i++;
            case 2:
              
            case 3:
              
              //$LASTPOS=11000983;//jseditor.UIForm:983
            case 4:
              if (!(i<a.length)) { __pc=6; break; }
              //$LASTPOS=11001013;//jseditor.UIForm:1013
              _this.fiber$parse(_thread, a[i]);
              __pc=5;return;
            case 5:
              s=_thread.retVal;
              
              //$LASTPOS=11001041;//jseditor.UIForm:1041
              if (s) {
                //$LASTPOS=11001048;//jseditor.UIForm:1048
                res.append(s);
              }
              //$LASTPOS=11001072;//jseditor.UIForm:1072
              i++;
              __pc=4;break;
            case 6:
              
              //$LASTPOS=11001089;//jseditor.UIForm:1089
              _this._jqdom=svjq;
              _thread.exit(res);return;
              _thread.exit(_this);return;
            }
          }
        });
      },
      parseAttr :function _trc_UIForm_parseAttr(o) {
        "use strict";
        var _this=this;
        var k;
        var v;
        var _it_90;
        var eType;
        var li;
        var _it_91;
        
        //$LASTPOS=11001152;//jseditor.UIForm:1152
        _it_90=Tonyu.iterator(o,2);
        while(_it_90.next()) {
          k=_it_90[0];
          v=_it_90[1];
          
          //$LASTPOS=11001182;//jseditor.UIForm:1182
          if (k=="on") {
            //$LASTPOS=11001210;//jseditor.UIForm:1210
            _it_91=Tonyu.iterator(o.on,2);
            while(_it_91.next()) {
              eType=_it_91[0];
              li=_it_91[1];
              
              //$LASTPOS=11001237;//jseditor.UIForm:1237
              _this.parseOn(eType,li);
            }
            
          } else {
            //$LASTPOS=11001272;//jseditor.UIForm:1272
            if (k=="name") {
              //$LASTPOS=11001302;//jseditor.UIForm:1302
              _this[v]=_this._jqdom;
              //$LASTPOS=11001331;//jseditor.UIForm:1331
              _this._jqdom.attr(k,v);
              
            } else {
              //$LASTPOS=11001365;//jseditor.UIForm:1365
              if (k=="css"&&v!=null) {
                //$LASTPOS=11001405;//jseditor.UIForm:1405
                _this._jqdom.css(v);
                
              } else {
                //$LASTPOS=11001436;//jseditor.UIForm:1436
                if (Util.startsWith(k,"$")) {
                  //$LASTPOS=11001480;//jseditor.UIForm:1480
                  if (k=="$bind") {
                    
                    
                  }
                  
                } else {
                  //$LASTPOS=11001547;//jseditor.UIForm:1547
                  if (v!=null) {
                    //$LASTPOS=11001575;//jseditor.UIForm:1575
                    _this._jqdom.attr(k,v);
                    
                  }
                }
              }
            }
          }
          
        }
      },
      fiber$parseAttr :function _trc_UIForm_f_parseAttr(_thread,o) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var k;
        var v;
        var _it_90;
        var eType;
        var li;
        var _it_91;
        
        
        _thread.enter(function _trc_UIForm_ent_parseAttr(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=11001152;//jseditor.UIForm:1152
              _it_90=Tonyu.iterator(o,2);
            case 1:
              if (!(_it_90.next())) { __pc=7; break; }
              k=_it_90[0];
              v=_it_90[1];
              
              //$LASTPOS=11001182;//jseditor.UIForm:1182
              if (!(k=="on")) { __pc=5; break; }
              //$LASTPOS=11001210;//jseditor.UIForm:1210
              _it_91=Tonyu.iterator(o.on,2);
            case 2:
              if (!(_it_91.next())) { __pc=4; break; }
              eType=_it_91[0];
              li=_it_91[1];
              
              //$LASTPOS=11001237;//jseditor.UIForm:1237
              _this.fiber$parseOn(_thread, eType, li);
              __pc=3;return;
            case 3:
              
              __pc=2;break;
            case 4:
              
              __pc=6;break;
            case 5:
              //$LASTPOS=11001272;//jseditor.UIForm:1272
              if (k=="name") {
                //$LASTPOS=11001302;//jseditor.UIForm:1302
                _this[v]=_this._jqdom;
                //$LASTPOS=11001331;//jseditor.UIForm:1331
                _this._jqdom.attr(k,v);
                
              } else {
                //$LASTPOS=11001365;//jseditor.UIForm:1365
                if (k=="css"&&v!=null) {
                  //$LASTPOS=11001405;//jseditor.UIForm:1405
                  _this._jqdom.css(v);
                  
                } else {
                  //$LASTPOS=11001436;//jseditor.UIForm:1436
                  if (Util.startsWith(k,"$")) {
                    //$LASTPOS=11001480;//jseditor.UIForm:1480
                    if (k=="$bind") {
                      
                      
                    }
                    
                  } else {
                    //$LASTPOS=11001547;//jseditor.UIForm:1547
                    if (v!=null) {
                      //$LASTPOS=11001575;//jseditor.UIForm:1575
                      _this._jqdom.attr(k,v);
                      
                    }
                  }
                }
              }
            case 6:
              
              __pc=1;break;
            case 7:
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      parseOn :function _trc_UIForm_parseOn(eType,li) {
        "use strict";
        var _this=this;
        var first;
        var prev;
        
        //$LASTPOS=11001650;//jseditor.UIForm:1650
        if (! li) {
          return _this;
        }
        //$LASTPOS=11001672;//jseditor.UIForm:1672
        if (eType=="enterkey") {
          //$LASTPOS=11001706;//jseditor.UIForm:1706
          _this._jqdom.on("keypress",(function anonymous_1728(ev) {
            
            //$LASTPOS=11001749;//jseditor.UIForm:1749
            if (ev.which==13) {
              //$LASTPOS=11001767;//jseditor.UIForm:1767
              li.apply(_this._jqdom,arguments);
            }
          }));
          
        } else {
          //$LASTPOS=11001819;//jseditor.UIForm:1819
          if (eType=="realtimechange") {
            //$LASTPOS=11001859;//jseditor.UIForm:1859
            first = true;
            
            //$LASTPOS=11001890;//jseditor.UIForm:1890
            _this.listeners.push((function anonymous_1905() {
              var cur;
              
              
              //$LASTPOS=11001946;//jseditor.UIForm:1946
              if (_this.o.type=="checkbox") {
                //$LASTPOS=11001989;//jseditor.UIForm:1989
                cur=! ! _this._jqdom.prop("checked");
                
              } else {
                //$LASTPOS=11002058;//jseditor.UIForm:2058
                cur=_this._jqdom.val();
                
              }
              //$LASTPOS=11002104;//jseditor.UIForm:2104
              if (first||prev!=cur) {
                //$LASTPOS=11002147;//jseditor.UIForm:2147
                li.apply(_this._jqdom,[cur,prev]);
                //$LASTPOS=11002193;//jseditor.UIForm:2193
                prev=cur;
                
              }
              //$LASTPOS=11002231;//jseditor.UIForm:2231
              first=false;
            }));
            
          } else {
            //$LASTPOS=11002279;//jseditor.UIForm:2279
            _this._jqdom.on(eType,li);
            
          }
        }
      },
      fiber$parseOn :function _trc_UIForm_f_parseOn(_thread,eType,li) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var first;
        var prev;
        
        //$LASTPOS=11001650;//jseditor.UIForm:1650
        if (! li) {
          _thread.retVal=_this;return;
          
        }
        //$LASTPOS=11001672;//jseditor.UIForm:1672
        if (eType=="enterkey") {
          //$LASTPOS=11001706;//jseditor.UIForm:1706
          _this._jqdom.on("keypress",(function anonymous_1728(ev) {
            
            //$LASTPOS=11001749;//jseditor.UIForm:1749
            if (ev.which==13) {
              //$LASTPOS=11001767;//jseditor.UIForm:1767
              li.apply(_this._jqdom,arguments);
            }
          }));
          
        } else {
          //$LASTPOS=11001819;//jseditor.UIForm:1819
          if (eType=="realtimechange") {
            //$LASTPOS=11001859;//jseditor.UIForm:1859
            first = true;
            
            //$LASTPOS=11001890;//jseditor.UIForm:1890
            _this.listeners.push((function anonymous_1905() {
              var cur;
              
              
              //$LASTPOS=11001946;//jseditor.UIForm:1946
              if (_this.o.type=="checkbox") {
                //$LASTPOS=11001989;//jseditor.UIForm:1989
                cur=! ! _this._jqdom.prop("checked");
                
              } else {
                //$LASTPOS=11002058;//jseditor.UIForm:2058
                cur=_this._jqdom.val();
                
              }
              //$LASTPOS=11002104;//jseditor.UIForm:2104
              if (first||prev!=cur) {
                //$LASTPOS=11002147;//jseditor.UIForm:2147
                li.apply(_this._jqdom,[cur,prev]);
                //$LASTPOS=11002193;//jseditor.UIForm:2193
                prev=cur;
                
              }
              //$LASTPOS=11002231;//jseditor.UIForm:2231
              first=false;
            }));
            
          } else {
            //$LASTPOS=11002279;//jseditor.UIForm:2279
            _this._jqdom.on(eType,li);
            
          }
        }
        
        _thread.retVal=_this;return;
      },
      parseString :function _trc_UIForm_parseString(str) {
        "use strict";
        var _this=this;
        
        return str;
      },
      fiber$parseString :function _trc_UIForm_f_parseString(_thread,str) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        _thread.retVal=str;return;
        
        
        _thread.retVal=_this;return;
      },
      __dummy: false
    },
    decls: {"methods":{"main":{"nowait":false},"new":{"nowait":false},"appendTo":{"nowait":false},"dialog":{"nowait":false},"tag":{"nowait":false},"change":{"nowait":false},"parse":{"nowait":false},"parseArray":{"nowait":false},"parseAttr":{"nowait":false},"parseOn":{"nowait":false},"parseString":{"nowait":false}}}
  });
});