define(function (require) {
  var Tonyu=require('Tonyu');
  var Util=require('Util');
  var SFile=require('SFile');
  var assert=require('assert');
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
        
        //$LASTPOS=16000059;//jseditor.UIForm:59
        Tonyu.classes.jseditor.Base.apply( _this, [o]);
        //$LASTPOS=16000074;//jseditor.UIForm:74
        _this.inputable={"input": 1,"textarea": 1,"select": 1};
        //$LASTPOS=16000126;//jseditor.UIForm:126
        _this.listeners=[];
        //$LASTPOS=16000145;//jseditor.UIForm:145
        _this.binds={};
        //$LASTPOS=16000160;//jseditor.UIForm:160
        _this.parallel("main");
      },
      appendTo :function _trc_UIForm_appendTo(dom) {
        "use strict";
        var _this=this;
        
        //$LASTPOS=16000204;//jseditor.UIForm:204
        _this.parentJqdom=$(dom);
        //$LASTPOS=16000229;//jseditor.UIForm:229
        if (_this.jqdom) {
          //$LASTPOS=16000240;//jseditor.UIForm:240
          _this.jqdom.appendTo(_this.parentJqdom);
        }
      },
      fiber$appendTo :function _trc_UIForm_f_appendTo(_thread,dom) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=16000204;//jseditor.UIForm:204
        _this.parentJqdom=$(dom);
        //$LASTPOS=16000229;//jseditor.UIForm:229
        if (_this.jqdom) {
          //$LASTPOS=16000240;//jseditor.UIForm:240
          _this.jqdom.appendTo(_this.parentJqdom);
        }
        
        _thread.retVal=_this;return;
      },
      dialog :function _trc_UIForm_dialog(options) {
        "use strict";
        var _this=this;
        
        //$LASTPOS=16000297;//jseditor.UIForm:297
        _this.jqdom.dialog(options);
      },
      fiber$dialog :function _trc_UIForm_f_dialog(_thread,options) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=16000297;//jseditor.UIForm:297
        _this.jqdom.dialog(options);
        
        _thread.retVal=_this;return;
      },
      clear :function _trc_UIForm_clear() {
        "use strict";
        var _this=this;
        
        //$LASTPOS=16000340;//jseditor.UIForm:340
        _this.jqdom.empty();
      },
      fiber$clear :function _trc_UIForm_f_clear(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=16000340;//jseditor.UIForm:340
        _this.jqdom.empty();
        
        _thread.retVal=_this;return;
      },
      tag :function _trc_UIForm_tag() {
        "use strict";
        var _this=this;
        var d;
        
        //$LASTPOS=16000373;//jseditor.UIForm:373
        d = _this.parseArray(arguments);
        
        //$LASTPOS=16000407;//jseditor.UIForm:407
        if (d instanceof $) {
          //$LASTPOS=16000438;//jseditor.UIForm:438
          (_this._jqdom||_this.jqdom).append(d);
          
        }
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
              //$LASTPOS=16000373;//jseditor.UIForm:373
              _this.fiber$parseArray(_thread, _arguments);
              __pc=1;return;
            case 1:
              d=_thread.retVal;
              
              //$LASTPOS=16000407;//jseditor.UIForm:407
              if (d instanceof $) {
                //$LASTPOS=16000438;//jseditor.UIForm:438
                (_this._jqdom||_this.jqdom).append(d);
                
              }
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
        
        //$LASTPOS=16000517;//jseditor.UIForm:517
        sv = _this._jqdom;
        
        //$LASTPOS=16000537;//jseditor.UIForm:537
        _this._jqdom=elem;
        //$LASTPOS=16000555;//jseditor.UIForm:555
        func();
        //$LASTPOS=16000568;//jseditor.UIForm:568
        _this._jqdom=sv;
      },
      fiber$change :function _trc_UIForm_f_change(_thread,elem,func) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var sv;
        
        //$LASTPOS=16000517;//jseditor.UIForm:517
        sv = _this._jqdom;
        
        //$LASTPOS=16000537;//jseditor.UIForm:537
        _this._jqdom=elem;
        //$LASTPOS=16000555;//jseditor.UIForm:555
        func();
        //$LASTPOS=16000568;//jseditor.UIForm:568
        _this._jqdom=sv;
        
        _thread.retVal=_this;return;
      },
      parse :function _trc_UIForm_parse(expr) {
        "use strict";
        var _this=this;
        
        //$LASTPOS=16000611;//jseditor.UIForm:611
        if (expr instanceof Array) {
          return _this.parseArray(expr);
        } else {
          //$LASTPOS=16000673;//jseditor.UIForm:673
          if (typeof  expr=="string") {
            return _this.parseString(expr);
          } else {
            //$LASTPOS=16000736;//jseditor.UIForm:736
            if (_this.isPlainFunction(expr)) {
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
        
        //$LASTPOS=16000611;//jseditor.UIForm:611
        if (expr instanceof Array) {
          _thread.retVal=_this.parseArray(expr);return;
          
        } else {
          //$LASTPOS=16000673;//jseditor.UIForm:673
          if (typeof  expr=="string") {
            _thread.retVal=_this.parseString(expr);return;
            
          } else {
            //$LASTPOS=16000736;//jseditor.UIForm:736
            if (_this.isPlainFunction(expr)) {
              _thread.retVal=expr(_this._jqdom);return;
              
            } else {
              _thread.retVal=expr;return;
              
            }
          }
        }
        
        _thread.retVal=_this;return;
      },
      isPlainObject :function _trc_UIForm_isPlainObject(o) {
        "use strict";
        var _this=this;
        
        return (typeof  o=="object"&&! (o instanceof Array)&&! (o instanceof $));
      },
      fiber$isPlainObject :function _trc_UIForm_f_isPlainObject(_thread,o) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        _thread.retVal=(typeof  o=="object"&&! (o instanceof Array)&&! (o instanceof $));return;
        
        
        _thread.retVal=_this;return;
      },
      isPlainFunction :function _trc_UIForm_isPlainFunction(f) {
        "use strict";
        var _this=this;
        
        return (typeof  f=="function")&&Object.keys(f.prototype).length==0;
      },
      fiber$isPlainFunction :function _trc_UIForm_f_isPlainFunction(_thread,f) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        _thread.retVal=(typeof  f=="function")&&Object.keys(f.prototype).length==0;return;
        
        
        _thread.retVal=_this;return;
      },
      parseArray :function _trc_UIForm_parseArray(a) {
        "use strict";
        var _this=this;
        var tag;
        var i;
        var svjq;
        var res;
        var params;
        var s;
        
        //$LASTPOS=16001065;//jseditor.UIForm:1065
        tag = a[0];
        
        //$LASTPOS=16001084;//jseditor.UIForm:1084
        i = 0;
        
        //$LASTPOS=16001098;//jseditor.UIForm:1098
        svjq = _this._jqdom;
        
        //$LASTPOS=16001124;//jseditor.UIForm:1124
        if (typeof  tag=="string") {
          //$LASTPOS=16001161;//jseditor.UIForm:1161
          res=_this._jqdom=$("<"+tag+">");
          //$LASTPOS=16001197;//jseditor.UIForm:1197
          if (! _this.jqdom) {
            //$LASTPOS=16001224;//jseditor.UIForm:1224
            _this.jqdom=_this._jqdom;
            //$LASTPOS=16001251;//jseditor.UIForm:1251
            if (_this.parentJqdom) {
              //$LASTPOS=16001268;//jseditor.UIForm:1268
              _this.parentJqdom.append(_this.jqdom);
            }
            
          }
          //$LASTPOS=16001315;//jseditor.UIForm:1315
          i=1;
          //$LASTPOS=16001329;//jseditor.UIForm:1329
          if (_this.isPlainObject(a[i])) {
            //$LASTPOS=16001369;//jseditor.UIForm:1369
            _this.parseAttr(a[i]);
            //$LASTPOS=16001399;//jseditor.UIForm:1399
            i++;
            
          }
          
        } else {
          //$LASTPOS=16001427;//jseditor.UIForm:1427
          if (typeof  tag=="function"&&tag.prototype.parseArray) {
            //$LASTPOS=16001494;//jseditor.UIForm:1494
            params = {parent: _this,parentJqdom: _this._jqdom};
            
            //$LASTPOS=16001549;//jseditor.UIForm:1549
            i=1;
            //$LASTPOS=16001563;//jseditor.UIForm:1563
            if (_this.isPlainObject(a[i])) {
              //$LASTPOS=16001603;//jseditor.UIForm:1603
              Tonyu.extend(params,a[i]);
              //$LASTPOS=16001643;//jseditor.UIForm:1643
              i++;
              
            }
            //$LASTPOS=16001668;//jseditor.UIForm:1668
            i=a.length;
            //$LASTPOS=16001689;//jseditor.UIForm:1689
            res=new tag(params);
            
          } else {
            //$LASTPOS=16001733;//jseditor.UIForm:1733
            _this.print("Errortag",a);
            throw new Error("Invalid tag "+tag);
            
            
          }
        }
        //$LASTPOS=16001812;//jseditor.UIForm:1812
        while (i<a.length) {
          //$LASTPOS=16001842;//jseditor.UIForm:1842
          s = _this.parse(a[i]);
          
          //$LASTPOS=16001870;//jseditor.UIForm:1870
          if (s) {
            //$LASTPOS=16001877;//jseditor.UIForm:1877
            res.append(s);
          }
          //$LASTPOS=16001901;//jseditor.UIForm:1901
          i++;
          
        }
        //$LASTPOS=16001918;//jseditor.UIForm:1918
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
        var params;
        var s;
        
        //$LASTPOS=16001065;//jseditor.UIForm:1065
        tag = a[0];
        
        //$LASTPOS=16001084;//jseditor.UIForm:1084
        i = 0;
        
        //$LASTPOS=16001098;//jseditor.UIForm:1098
        svjq = _this._jqdom;
        
        
        _thread.enter(function _trc_UIForm_ent_parseArray(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=16001124;//jseditor.UIForm:1124
              if (!(typeof  tag=="string")) { __pc=3; break; }
              //$LASTPOS=16001161;//jseditor.UIForm:1161
              res=_this._jqdom=$("<"+tag+">");
              //$LASTPOS=16001197;//jseditor.UIForm:1197
              if (! _this.jqdom) {
                //$LASTPOS=16001224;//jseditor.UIForm:1224
                _this.jqdom=_this._jqdom;
                //$LASTPOS=16001251;//jseditor.UIForm:1251
                if (_this.parentJqdom) {
                  //$LASTPOS=16001268;//jseditor.UIForm:1268
                  _this.parentJqdom.append(_this.jqdom);
                }
                
              }
              //$LASTPOS=16001315;//jseditor.UIForm:1315
              i=1;
              //$LASTPOS=16001329;//jseditor.UIForm:1329
              if (!(_this.isPlainObject(a[i]))) { __pc=2; break; }
              //$LASTPOS=16001369;//jseditor.UIForm:1369
              _this.fiber$parseAttr(_thread, a[i]);
              __pc=1;return;
            case 1:
              
              //$LASTPOS=16001399;//jseditor.UIForm:1399
              i++;
            case 2:
              
              __pc=4;break;
            case 3:
              //$LASTPOS=16001427;//jseditor.UIForm:1427
              if (typeof  tag=="function"&&tag.prototype.parseArray) {
                //$LASTPOS=16001494;//jseditor.UIForm:1494
                params = {parent: _this,parentJqdom: _this._jqdom};
                
                //$LASTPOS=16001549;//jseditor.UIForm:1549
                i=1;
                //$LASTPOS=16001563;//jseditor.UIForm:1563
                if (_this.isPlainObject(a[i])) {
                  //$LASTPOS=16001603;//jseditor.UIForm:1603
                  Tonyu.extend(params,a[i]);
                  //$LASTPOS=16001643;//jseditor.UIForm:1643
                  i++;
                  
                }
                //$LASTPOS=16001668;//jseditor.UIForm:1668
                i=a.length;
                //$LASTPOS=16001689;//jseditor.UIForm:1689
                res=new tag(params);
                
              } else {
                //$LASTPOS=16001733;//jseditor.UIForm:1733
                _this.print("Errortag",a);
                throw new Error("Invalid tag "+tag);
                
                
              }
            case 4:
              
              //$LASTPOS=16001812;//jseditor.UIForm:1812
            case 5:
              if (!(i<a.length)) { __pc=7; break; }
              //$LASTPOS=16001842;//jseditor.UIForm:1842
              _this.fiber$parse(_thread, a[i]);
              __pc=6;return;
            case 6:
              s=_thread.retVal;
              
              //$LASTPOS=16001870;//jseditor.UIForm:1870
              if (s) {
                //$LASTPOS=16001877;//jseditor.UIForm:1877
                res.append(s);
              }
              //$LASTPOS=16001901;//jseditor.UIForm:1901
              i++;
              __pc=5;break;
            case 7:
              
              //$LASTPOS=16001918;//jseditor.UIForm:1918
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
        var _it_122;
        var eType;
        var li;
        var _it_123;
        
        //$LASTPOS=16001981;//jseditor.UIForm:1981
        _it_122=Tonyu.iterator(o,2);
        while(_it_122.next()) {
          k=_it_122[0];
          v=_it_122[1];
          
          //$LASTPOS=16002011;//jseditor.UIForm:2011
          if (k=="on") {
            //$LASTPOS=16002039;//jseditor.UIForm:2039
            _it_123=Tonyu.iterator(o.on,2);
            while(_it_123.next()) {
              eType=_it_123[0];
              li=_it_123[1];
              
              //$LASTPOS=16002066;//jseditor.UIForm:2066
              _this.parseOn(eType,li);
            }
            
          } else {
            //$LASTPOS=16002101;//jseditor.UIForm:2101
            if (k=="name") {
              //$LASTPOS=16002131;//jseditor.UIForm:2131
              _this[v]=_this._jqdom;
              //$LASTPOS=16002160;//jseditor.UIForm:2160
              _this._jqdom.attr(k,v);
              
            } else {
              //$LASTPOS=16002194;//jseditor.UIForm:2194
              if (k=="css"&&v!=null) {
                //$LASTPOS=16002234;//jseditor.UIForm:2234
                _this._jqdom.css(v);
                
              } else {
                //$LASTPOS=16002265;//jseditor.UIForm:2265
                if (Util.startsWith(k,"$")) {
                  //$LASTPOS=16002309;//jseditor.UIForm:2309
                  if (k=="$bind") {
                    //$LASTPOS=16002344;//jseditor.UIForm:2344
                    _this.bind(v);
                    
                  }
                  
                } else {
                  //$LASTPOS=16002384;//jseditor.UIForm:2384
                  if (v!=null) {
                    //$LASTPOS=16002412;//jseditor.UIForm:2412
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
        var _it_122;
        var eType;
        var li;
        var _it_123;
        
        
        _thread.enter(function _trc_UIForm_ent_parseAttr(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=16001981;//jseditor.UIForm:1981
              _it_122=Tonyu.iterator(o,2);
            case 1:
              if (!(_it_122.next())) { __pc=15; break; }
              k=_it_122[0];
              v=_it_122[1];
              
              //$LASTPOS=16002011;//jseditor.UIForm:2011
              if (!(k=="on")) { __pc=5; break; }
              //$LASTPOS=16002039;//jseditor.UIForm:2039
              _it_123=Tonyu.iterator(o.on,2);
            case 2:
              if (!(_it_123.next())) { __pc=4; break; }
              eType=_it_123[0];
              li=_it_123[1];
              
              //$LASTPOS=16002066;//jseditor.UIForm:2066
              _this.fiber$parseOn(_thread, eType, li);
              __pc=3;return;
            case 3:
              
              __pc=2;break;
            case 4:
              
              __pc=14;break;
            case 5:
              //$LASTPOS=16002101;//jseditor.UIForm:2101
              if (!(k=="name")) { __pc=6; break; }
              {
                //$LASTPOS=16002131;//jseditor.UIForm:2131
                _this[v]=_this._jqdom;
                //$LASTPOS=16002160;//jseditor.UIForm:2160
                _this._jqdom.attr(k,v);
              }
              __pc=13;break;
            case 6:
              //$LASTPOS=16002194;//jseditor.UIForm:2194
              if (!(k=="css"&&v!=null)) { __pc=7; break; }
              {
                //$LASTPOS=16002234;//jseditor.UIForm:2234
                _this._jqdom.css(v);
              }
              __pc=12;break;
            case 7:
              //$LASTPOS=16002265;//jseditor.UIForm:2265
              if (!(Util.startsWith(k,"$"))) { __pc=10; break; }
              //$LASTPOS=16002309;//jseditor.UIForm:2309
              if (!(k=="$bind")) { __pc=9; break; }
              //$LASTPOS=16002344;//jseditor.UIForm:2344
              _this.fiber$bind(_thread, v);
              __pc=8;return;
            case 8:
              
            case 9:
              
              __pc=11;break;
            case 10:
              //$LASTPOS=16002384;//jseditor.UIForm:2384
              if (v!=null) {
                //$LASTPOS=16002412;//jseditor.UIForm:2412
                _this._jqdom.attr(k,v);
                
              }
            case 11:
              
            case 12:
              
            case 13:
              
            case 14:
              
              __pc=1;break;
            case 15:
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      isInputable :function _trc_UIForm_isInputable(dom) {
        "use strict";
        var _this=this;
        
        return _this.inputable[dom[0].tagName.toLowerCase()];
      },
      fiber$isInputable :function _trc_UIForm_f_isInputable(_thread,dom) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        _thread.retVal=_this.inputable[dom[0].tagName.toLowerCase()];return;
        
        
        _thread.retVal=_this;return;
      },
      parseOn :function _trc_UIForm_parseOn(eType,li) {
        "use strict";
        var _this=this;
        var jqdom;
        var first;
        var prev;
        
        //$LASTPOS=16002564;//jseditor.UIForm:2564
        jqdom = _this._jqdom;
        
        //$LASTPOS=16002587;//jseditor.UIForm:2587
        if (! li) {
          return _this;
        }
        //$LASTPOS=16002609;//jseditor.UIForm:2609
        if (eType=="enterkey") {
          //$LASTPOS=16002643;//jseditor.UIForm:2643
          jqdom.on("keypress",(function anonymous_2664(ev) {
            
            //$LASTPOS=16002685;//jseditor.UIForm:2685
            if (ev.which==13) {
              //$LASTPOS=16002703;//jseditor.UIForm:2703
              li.apply(jqdom,arguments);
            }
          }));
          
        } else {
          //$LASTPOS=16002756;//jseditor.UIForm:2756
          if (eType=="realtimechange") {
            //$LASTPOS=16002796;//jseditor.UIForm:2796
            if (! _this.isInputable(jqdom)) {
              return _this;
            }
            //$LASTPOS=16002838;//jseditor.UIForm:2838
            first = true;
            
            //$LASTPOS=16002869;//jseditor.UIForm:2869
            if (! _this._listenersInvoked) {
              //$LASTPOS=16002908;//jseditor.UIForm:2908
              _this._listenersInvoked=true;
              //$LASTPOS=16002945;//jseditor.UIForm:2945
              _this.parallel("listenerLoop");
              
            }
            //$LASTPOS=16002991;//jseditor.UIForm:2991
            _this.listeners.push((function anonymous_3006() {
              var cur;
              
              
              //$LASTPOS=16003047;//jseditor.UIForm:3047
              if (jqdom.attr("type")=="checkbox") {
                //$LASTPOS=16003102;//jseditor.UIForm:3102
                cur=! ! jqdom.prop("checked");
                
              } else {
                //$LASTPOS=16003170;//jseditor.UIForm:3170
                cur=jqdom.val();
                
              }
              //$LASTPOS=16003215;//jseditor.UIForm:3215
              if (first||prev!=cur) {
                //$LASTPOS=16003258;//jseditor.UIForm:3258
                li.apply(jqdom,[cur,prev]);
                //$LASTPOS=16003303;//jseditor.UIForm:3303
                prev=cur;
                
              }
              //$LASTPOS=16003341;//jseditor.UIForm:3341
              first=false;
            }));
            
          } else {
            //$LASTPOS=16003389;//jseditor.UIForm:3389
            jqdom.on(eType,li);
            
          }
        }
      },
      fiber$parseOn :function _trc_UIForm_f_parseOn(_thread,eType,li) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var jqdom;
        var first;
        var prev;
        
        //$LASTPOS=16002564;//jseditor.UIForm:2564
        jqdom = _this._jqdom;
        
        //$LASTPOS=16002587;//jseditor.UIForm:2587
        if (! li) {
          _thread.retVal=_this;return;
          
        }
        //$LASTPOS=16002609;//jseditor.UIForm:2609
        if (eType=="enterkey") {
          //$LASTPOS=16002643;//jseditor.UIForm:2643
          jqdom.on("keypress",(function anonymous_2664(ev) {
            
            //$LASTPOS=16002685;//jseditor.UIForm:2685
            if (ev.which==13) {
              //$LASTPOS=16002703;//jseditor.UIForm:2703
              li.apply(jqdom,arguments);
            }
          }));
          
        } else {
          //$LASTPOS=16002756;//jseditor.UIForm:2756
          if (eType=="realtimechange") {
            //$LASTPOS=16002796;//jseditor.UIForm:2796
            if (! _this.isInputable(jqdom)) {
              _thread.retVal=_this;return;
              
            }
            //$LASTPOS=16002838;//jseditor.UIForm:2838
            first = true;
            
            //$LASTPOS=16002869;//jseditor.UIForm:2869
            if (! _this._listenersInvoked) {
              //$LASTPOS=16002908;//jseditor.UIForm:2908
              _this._listenersInvoked=true;
              //$LASTPOS=16002945;//jseditor.UIForm:2945
              _this.parallel("listenerLoop");
              
            }
            //$LASTPOS=16002991;//jseditor.UIForm:2991
            _this.listeners.push((function anonymous_3006() {
              var cur;
              
              
              //$LASTPOS=16003047;//jseditor.UIForm:3047
              if (jqdom.attr("type")=="checkbox") {
                //$LASTPOS=16003102;//jseditor.UIForm:3102
                cur=! ! jqdom.prop("checked");
                
              } else {
                //$LASTPOS=16003170;//jseditor.UIForm:3170
                cur=jqdom.val();
                
              }
              //$LASTPOS=16003215;//jseditor.UIForm:3215
              if (first||prev!=cur) {
                //$LASTPOS=16003258;//jseditor.UIForm:3258
                li.apply(jqdom,[cur,prev]);
                //$LASTPOS=16003303;//jseditor.UIForm:3303
                prev=cur;
                
              }
              //$LASTPOS=16003341;//jseditor.UIForm:3341
              first=false;
            }));
            
          } else {
            //$LASTPOS=16003389;//jseditor.UIForm:3389
            jqdom.on(eType,li);
            
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
      setVal :function _trc_UIForm_setVal(dom,val) {
        "use strict";
        var _this=this;
        
        //$LASTPOS=16003519;//jseditor.UIForm:3519
        if (_this.isInputable(dom)) {
          //$LASTPOS=16003541;//jseditor.UIForm:3541
          dom.val(val);
        } else {
          //$LASTPOS=16003565;//jseditor.UIForm:3565
          dom.text(val);
        }
      },
      fiber$setVal :function _trc_UIForm_f_setVal(_thread,dom,val) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=16003519;//jseditor.UIForm:3519
        if (_this.isInputable(dom)) {
          //$LASTPOS=16003541;//jseditor.UIForm:3541
          dom.val(val);
        } else {
          //$LASTPOS=16003565;//jseditor.UIForm:3565
          dom.text(val);
        }
        
        _thread.retVal=_this;return;
      },
      bind :function _trc_UIForm_bind(key) {
        "use strict";
        var _this=this;
        var jqdom;
        var vtype;
        var bindObj;
        
        //$LASTPOS=16003602;//jseditor.UIForm:3602
        jqdom = _this._jqdom;
        
        //$LASTPOS=16003625;//jseditor.UIForm:3625
        if (_this.model) {
          //$LASTPOS=16003636;//jseditor.UIForm:3636
          _this.setVal(jqdom,_this.model[key]);
        }
        //$LASTPOS=16003667;//jseditor.UIForm:3667
        vtype = _this.modelType&&_this.modelType[key]||"string";
        
        
        //$LASTPOS=16003741;//jseditor.UIForm:3741
        bindObj=_this.binds[key]||{jqdoms: [],onModelChanged: (function anonymous_3808(val,from) {
          
          //$LASTPOS=16003836;//jseditor.UIForm:3836
          bindObj.jqdoms.forEach((function anonymous_3859(d) {
            
            //$LASTPOS=16003883;//jseditor.UIForm:3883
            if (from!==d) {
              //$LASTPOS=16003897;//jseditor.UIForm:3897
              _this.setVal(d,val);
            }
          }));
        })};
        //$LASTPOS=16003952;//jseditor.UIForm:3952
        _this.binds[key]=bindObj;
        //$LASTPOS=16003977;//jseditor.UIForm:3977
        _this.parseOn("realtimechange",(function anonymous_4003(val) {
          
          //$LASTPOS=16004081;//jseditor.UIForm:4081
          if (_this.model) {
            //$LASTPOS=16004107;//jseditor.UIForm:4107
            if (vtype=="string") {
              //$LASTPOS=16004147;//jseditor.UIForm:4147
              _this.model[key]=val;
              
            } else {
              //$LASTPOS=16004183;//jseditor.UIForm:4183
              if (vtype="number") {
                //$LASTPOS=16004221;//jseditor.UIForm:4221
                _this.model[key]=parseInt(val);
                
              }
            }
            //$LASTPOS=16004275;//jseditor.UIForm:4275
            bindObj.onModelChanged(val,jqdom);
            
          }
        }));
        //$LASTPOS=16004334;//jseditor.UIForm:4334
        bindObj.jqdoms.push(jqdom);
      },
      fiber$bind :function _trc_UIForm_f_bind(_thread,key) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var jqdom;
        var vtype;
        var bindObj;
        
        //$LASTPOS=16003602;//jseditor.UIForm:3602
        jqdom = _this._jqdom;
        
        
        _thread.enter(function _trc_UIForm_ent_bind(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=16003625;//jseditor.UIForm:3625
              if (!(_this.model)) { __pc=2; break; }
              //$LASTPOS=16003636;//jseditor.UIForm:3636
              _this.fiber$setVal(_thread, jqdom, _this.model[key]);
              __pc=1;return;
            case 1:
              
            case 2:
              
              //$LASTPOS=16003667;//jseditor.UIForm:3667
              vtype = _this.modelType&&_this.modelType[key]||"string";
              
              
              //$LASTPOS=16003741;//jseditor.UIForm:3741
              bindObj=_this.binds[key]||{jqdoms: [],onModelChanged: (function anonymous_3808(val,from) {
                
                //$LASTPOS=16003836;//jseditor.UIForm:3836
                bindObj.jqdoms.forEach((function anonymous_3859(d) {
                  
                  //$LASTPOS=16003883;//jseditor.UIForm:3883
                  if (from!==d) {
                    //$LASTPOS=16003897;//jseditor.UIForm:3897
                    _this.setVal(d,val);
                  }
                }));
              })};
              //$LASTPOS=16003952;//jseditor.UIForm:3952
              _this.binds[key]=bindObj;
              //$LASTPOS=16003977;//jseditor.UIForm:3977
              _this.fiber$parseOn(_thread, "realtimechange", (function anonymous_4003(val) {
                
                //$LASTPOS=16004081;//jseditor.UIForm:4081
                if (_this.model) {
                  //$LASTPOS=16004107;//jseditor.UIForm:4107
                  if (vtype=="string") {
                    //$LASTPOS=16004147;//jseditor.UIForm:4147
                    _this.model[key]=val;
                    
                  } else {
                    //$LASTPOS=16004183;//jseditor.UIForm:4183
                    if (vtype="number") {
                      //$LASTPOS=16004221;//jseditor.UIForm:4221
                      _this.model[key]=parseInt(val);
                      
                    }
                  }
                  //$LASTPOS=16004275;//jseditor.UIForm:4275
                  bindObj.onModelChanged(val,jqdom);
                  
                }
              }));
              __pc=3;return;
            case 3:
              
              //$LASTPOS=16004334;//jseditor.UIForm:4334
              bindObj.jqdoms.push(jqdom);
              _thread.exit(_this);return;
            }
          }
        });
      },
      loadModel :function _trc_UIForm_loadModel(m) {
        "use strict";
        var _this=this;
        var key;
        var handler;
        var _it_142;
        
        //$LASTPOS=16004490;//jseditor.UIForm:4490
        if (SFile["is"](m)) {
          //$LASTPOS=16004521;//jseditor.UIForm:4521
          _this.modelFile=m;
          //$LASTPOS=16004543;//jseditor.UIForm:4543
          _this.model=_this.readJSON(_this.modelFile)||{};
          
        } else {
          //$LASTPOS=16004597;//jseditor.UIForm:4597
          _this.model=m;
          
        }
        //$LASTPOS=16004618;//jseditor.UIForm:4618
        assert(_this.model,"Model load error");
        //$LASTPOS=16004658;//jseditor.UIForm:4658
        _it_142=Tonyu.iterator(_this.binds,2);
        while(_it_142.next()) {
          key=_it_142[0];
          handler=_it_142[1];
          
          //$LASTPOS=16004700;//jseditor.UIForm:4700
          handler.onModelChanged(_this.model[key]);
          
        }
      },
      fiber$loadModel :function _trc_UIForm_f_loadModel(_thread,m) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var key;
        var handler;
        var _it_142;
        
        //$LASTPOS=16004490;//jseditor.UIForm:4490
        if (SFile["is"](m)) {
          //$LASTPOS=16004521;//jseditor.UIForm:4521
          _this.modelFile=m;
          //$LASTPOS=16004543;//jseditor.UIForm:4543
          _this.model=_this.readJSON(_this.modelFile)||{};
          
        } else {
          //$LASTPOS=16004597;//jseditor.UIForm:4597
          _this.model=m;
          
        }
        //$LASTPOS=16004618;//jseditor.UIForm:4618
        assert(_this.model,"Model load error");
        //$LASTPOS=16004658;//jseditor.UIForm:4658
        _it_142=Tonyu.iterator(_this.binds,2);
        while(_it_142.next()) {
          key=_it_142[0];
          handler=_it_142[1];
          
          //$LASTPOS=16004700;//jseditor.UIForm:4700
          handler.onModelChanged(_this.model[key]);
          
        }
        
        _thread.retVal=_this;return;
      },
      saveModel :function _trc_UIForm_saveModel() {
        "use strict";
        var _this=this;
        
        //$LASTPOS=16004767;//jseditor.UIForm:4767
        if (_this.modelFile&&_this.model) {
          //$LASTPOS=16004802;//jseditor.UIForm:4802
          _this.writeJSON(_this.modelFile,_this.model,{indent: 4});
          //$LASTPOS=16004850;//jseditor.UIForm:4850
          _this.sendEvent("modelsaved",_this.model);
          
        } else {
          throw new Error("Model is not loaded from file");
          
          
        }
      },
      fiber$saveModel :function _trc_UIForm_f_saveModel(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        _thread.enter(function _trc_UIForm_ent_saveModel(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=16004767;//jseditor.UIForm:4767
              if (!(_this.modelFile&&_this.model)) { __pc=2; break; }
              //$LASTPOS=16004802;//jseditor.UIForm:4802
              _this.fiber$writeJSON(_thread, _this.modelFile, _this.model, {indent: 4});
              __pc=1;return;
            case 1:
              
              //$LASTPOS=16004850;//jseditor.UIForm:4850
              _this.sendEvent("modelsaved",_this.model);
              __pc=3;break;
            case 2:
              {
                throw new Error("Model is not loaded from file");
                
              }
            case 3:
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      attr :function _trc_UIForm_attr(key,val) {
        "use strict";
        var _this=this;
        
        //$LASTPOS=16004987;//jseditor.UIForm:4987
        _this.model[key]=val;
        //$LASTPOS=16005008;//jseditor.UIForm:5008
        if (_this.binds[key]) {
          //$LASTPOS=16005024;//jseditor.UIForm:5024
          _this.binds[key].onModelChanged(val);
        }
        //$LASTPOS=16005061;//jseditor.UIForm:5061
        _this.fireEvent("modelChanged",key,val);
      },
      fiber$attr :function _trc_UIForm_f_attr(_thread,key,val) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=16004987;//jseditor.UIForm:4987
        _this.model[key]=val;
        //$LASTPOS=16005008;//jseditor.UIForm:5008
        if (_this.binds[key]) {
          //$LASTPOS=16005024;//jseditor.UIForm:5024
          _this.binds[key].onModelChanged(val);
        }
        //$LASTPOS=16005061;//jseditor.UIForm:5061
        _this.fireEvent("modelChanged",key,val);
        
        _thread.retVal=_this;return;
      },
      listenerLoop :function _trc_UIForm_listenerLoop() {
        "use strict";
        var _this=this;
        
        //$LASTPOS=16005125;//jseditor.UIForm:5125
        while (true) {
          //$LASTPOS=16005148;//jseditor.UIForm:5148
          _this.listeners.forEach((function anonymous_5165(f) {
            
            //$LASTPOS=16005185;//jseditor.UIForm:5185
            f();
          }));
          //$LASTPOS=16005211;//jseditor.UIForm:5211
          _this.update(100);
          
        }
      },
      fiber$listenerLoop :function _trc_UIForm_f_listenerLoop(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        _thread.enter(function _trc_UIForm_ent_listenerLoop(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=16005125;//jseditor.UIForm:5125
            case 1:
              //$LASTPOS=16005148;//jseditor.UIForm:5148
              _this.listeners.forEach((function anonymous_5165(f) {
                
                //$LASTPOS=16005185;//jseditor.UIForm:5185
                f();
              }));
              //$LASTPOS=16005211;//jseditor.UIForm:5211
              _this.fiber$update(_thread, 100);
              __pc=2;return;
            case 2:
              
              __pc=1;break;
            case 3:
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      __dummy: false
    },
    decls: {"methods":{"main":{"nowait":false},"new":{"nowait":false},"appendTo":{"nowait":false},"dialog":{"nowait":false},"clear":{"nowait":false},"tag":{"nowait":false},"change":{"nowait":false},"parse":{"nowait":false},"isPlainObject":{"nowait":false},"isPlainFunction":{"nowait":false},"parseArray":{"nowait":false},"parseAttr":{"nowait":false},"isInputable":{"nowait":false},"parseOn":{"nowait":false},"parseString":{"nowait":false},"setVal":{"nowait":false},"bind":{"nowait":false},"loadModel":{"nowait":false},"saveModel":{"nowait":false},"attr":{"nowait":false},"listenerLoop":{"nowait":false}}}
  });
});