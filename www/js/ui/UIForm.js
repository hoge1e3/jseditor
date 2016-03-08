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
        _this.listeners=[];
        //$LASTPOS=16000093;//jseditor.UIForm:93
        _this.binds={};
        //$LASTPOS=16000108;//jseditor.UIForm:108
        _this.parallel("main");
      },
      appendTo :function _trc_UIForm_appendTo(dom) {
        "use strict";
        var _this=this;
        
        //$LASTPOS=16000152;//jseditor.UIForm:152
        _this.jqdom.appendTo(dom);
      },
      fiber$appendTo :function _trc_UIForm_f_appendTo(_thread,dom) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=16000152;//jseditor.UIForm:152
        _this.jqdom.appendTo(dom);
        
        _thread.retVal=_this;return;
      },
      dialog :function _trc_UIForm_dialog(options) {
        "use strict";
        var _this=this;
        
        //$LASTPOS=16000201;//jseditor.UIForm:201
        _this.jqdom.dialog(options);
      },
      fiber$dialog :function _trc_UIForm_f_dialog(_thread,options) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=16000201;//jseditor.UIForm:201
        _this.jqdom.dialog(options);
        
        _thread.retVal=_this;return;
      },
      clear :function _trc_UIForm_clear() {
        "use strict";
        var _this=this;
        
        //$LASTPOS=16000244;//jseditor.UIForm:244
        _this.jqdom.empty();
      },
      fiber$clear :function _trc_UIForm_f_clear(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=16000244;//jseditor.UIForm:244
        _this.jqdom.empty();
        
        _thread.retVal=_this;return;
      },
      tag :function _trc_UIForm_tag() {
        "use strict";
        var _this=this;
        var d;
        
        //$LASTPOS=16000277;//jseditor.UIForm:277
        d = _this.parseArray(arguments);
        
        //$LASTPOS=16000311;//jseditor.UIForm:311
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
              //$LASTPOS=16000277;//jseditor.UIForm:277
              _this.fiber$parseArray(_thread, _arguments);
              __pc=1;return;
            case 1:
              d=_thread.retVal;
              
              //$LASTPOS=16000311;//jseditor.UIForm:311
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
        
        //$LASTPOS=16000383;//jseditor.UIForm:383
        sv = _this._jqdom;
        
        //$LASTPOS=16000403;//jseditor.UIForm:403
        _this._jqdom=elem;
        //$LASTPOS=16000421;//jseditor.UIForm:421
        func();
        //$LASTPOS=16000434;//jseditor.UIForm:434
        _this._jqdom=sv;
      },
      fiber$change :function _trc_UIForm_f_change(_thread,elem,func) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var sv;
        
        //$LASTPOS=16000383;//jseditor.UIForm:383
        sv = _this._jqdom;
        
        //$LASTPOS=16000403;//jseditor.UIForm:403
        _this._jqdom=elem;
        //$LASTPOS=16000421;//jseditor.UIForm:421
        func();
        //$LASTPOS=16000434;//jseditor.UIForm:434
        _this._jqdom=sv;
        
        _thread.retVal=_this;return;
      },
      parse :function _trc_UIForm_parse(expr) {
        "use strict";
        var _this=this;
        
        //$LASTPOS=16000477;//jseditor.UIForm:477
        if (expr instanceof Array) {
          return _this.parseArray(expr);
        } else {
          //$LASTPOS=16000539;//jseditor.UIForm:539
          if (typeof  expr=="string") {
            return _this.parseString(expr);
          } else {
            //$LASTPOS=16000602;//jseditor.UIForm:602
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
        
        //$LASTPOS=16000477;//jseditor.UIForm:477
        if (expr instanceof Array) {
          _thread.retVal=_this.parseArray(expr);return;
          
        } else {
          //$LASTPOS=16000539;//jseditor.UIForm:539
          if (typeof  expr=="string") {
            _thread.retVal=_this.parseString(expr);return;
            
          } else {
            //$LASTPOS=16000602;//jseditor.UIForm:602
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
        
        //$LASTPOS=16000931;//jseditor.UIForm:931
        tag = a[0];
        
        //$LASTPOS=16000950;//jseditor.UIForm:950
        i = 0;
        
        //$LASTPOS=16000964;//jseditor.UIForm:964
        svjq = _this._jqdom;
        
        //$LASTPOS=16000990;//jseditor.UIForm:990
        if (typeof  tag=="string") {
          //$LASTPOS=16001027;//jseditor.UIForm:1027
          res=_this._jqdom=$("<"+tag+">");
          //$LASTPOS=16001063;//jseditor.UIForm:1063
          if (! _this.jqdom) {
            //$LASTPOS=16001075;//jseditor.UIForm:1075
            _this.jqdom=_this._jqdom;
          }
          //$LASTPOS=16001098;//jseditor.UIForm:1098
          i=1;
          //$LASTPOS=16001112;//jseditor.UIForm:1112
          if (_this.isPlainObject(a[i])) {
            //$LASTPOS=16001152;//jseditor.UIForm:1152
            _this.parseAttr(a[i]);
            //$LASTPOS=16001182;//jseditor.UIForm:1182
            i++;
            
          }
          
        } else {
          //$LASTPOS=16001210;//jseditor.UIForm:1210
          if (typeof  tag=="function"&&tag.prototype.parseArray) {
            //$LASTPOS=16001277;//jseditor.UIForm:1277
            params = {parent: _this,jqdom: _this._jqdom};
            
            //$LASTPOS=16001326;//jseditor.UIForm:1326
            i=1;
            //$LASTPOS=16001340;//jseditor.UIForm:1340
            if (_this.isPlainObject(a[i])) {
              //$LASTPOS=16001380;//jseditor.UIForm:1380
              Tonyu.extend(params,a[i]);
              //$LASTPOS=16001420;//jseditor.UIForm:1420
              i++;
              
            }
            //$LASTPOS=16001445;//jseditor.UIForm:1445
            i=a.length;
            //$LASTPOS=16001466;//jseditor.UIForm:1466
            new tag(params);
            
          }
        }
        //$LASTPOS=16001495;//jseditor.UIForm:1495
        while (i<a.length) {
          //$LASTPOS=16001525;//jseditor.UIForm:1525
          s = _this.parse(a[i]);
          
          //$LASTPOS=16001553;//jseditor.UIForm:1553
          if (s) {
            //$LASTPOS=16001560;//jseditor.UIForm:1560
            res.append(s);
          }
          //$LASTPOS=16001584;//jseditor.UIForm:1584
          i++;
          
        }
        //$LASTPOS=16001601;//jseditor.UIForm:1601
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
        
        //$LASTPOS=16000931;//jseditor.UIForm:931
        tag = a[0];
        
        //$LASTPOS=16000950;//jseditor.UIForm:950
        i = 0;
        
        //$LASTPOS=16000964;//jseditor.UIForm:964
        svjq = _this._jqdom;
        
        
        _thread.enter(function _trc_UIForm_ent_parseArray(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=16000990;//jseditor.UIForm:990
              if (!(typeof  tag=="string")) { __pc=3; break; }
              //$LASTPOS=16001027;//jseditor.UIForm:1027
              res=_this._jqdom=$("<"+tag+">");
              //$LASTPOS=16001063;//jseditor.UIForm:1063
              if (! _this.jqdom) {
                //$LASTPOS=16001075;//jseditor.UIForm:1075
                _this.jqdom=_this._jqdom;
              }
              //$LASTPOS=16001098;//jseditor.UIForm:1098
              i=1;
              //$LASTPOS=16001112;//jseditor.UIForm:1112
              if (!(_this.isPlainObject(a[i]))) { __pc=2; break; }
              //$LASTPOS=16001152;//jseditor.UIForm:1152
              _this.fiber$parseAttr(_thread, a[i]);
              __pc=1;return;
            case 1:
              
              //$LASTPOS=16001182;//jseditor.UIForm:1182
              i++;
            case 2:
              
              __pc=4;break;
            case 3:
              //$LASTPOS=16001210;//jseditor.UIForm:1210
              if (typeof  tag=="function"&&tag.prototype.parseArray) {
                //$LASTPOS=16001277;//jseditor.UIForm:1277
                params = {parent: _this,jqdom: _this._jqdom};
                
                //$LASTPOS=16001326;//jseditor.UIForm:1326
                i=1;
                //$LASTPOS=16001340;//jseditor.UIForm:1340
                if (_this.isPlainObject(a[i])) {
                  //$LASTPOS=16001380;//jseditor.UIForm:1380
                  Tonyu.extend(params,a[i]);
                  //$LASTPOS=16001420;//jseditor.UIForm:1420
                  i++;
                  
                }
                //$LASTPOS=16001445;//jseditor.UIForm:1445
                i=a.length;
                //$LASTPOS=16001466;//jseditor.UIForm:1466
                new tag(params);
                
              }
            case 4:
              
              //$LASTPOS=16001495;//jseditor.UIForm:1495
            case 5:
              if (!(i<a.length)) { __pc=7; break; }
              //$LASTPOS=16001525;//jseditor.UIForm:1525
              _this.fiber$parse(_thread, a[i]);
              __pc=6;return;
            case 6:
              s=_thread.retVal;
              
              //$LASTPOS=16001553;//jseditor.UIForm:1553
              if (s) {
                //$LASTPOS=16001560;//jseditor.UIForm:1560
                res.append(s);
              }
              //$LASTPOS=16001584;//jseditor.UIForm:1584
              i++;
              __pc=5;break;
            case 7:
              
              //$LASTPOS=16001601;//jseditor.UIForm:1601
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
        var _it_317;
        var eType;
        var li;
        var _it_318;
        
        //$LASTPOS=16001664;//jseditor.UIForm:1664
        _it_317=Tonyu.iterator(o,2);
        while(_it_317.next()) {
          k=_it_317[0];
          v=_it_317[1];
          
          //$LASTPOS=16001694;//jseditor.UIForm:1694
          if (k=="on") {
            //$LASTPOS=16001722;//jseditor.UIForm:1722
            _it_318=Tonyu.iterator(o.on,2);
            while(_it_318.next()) {
              eType=_it_318[0];
              li=_it_318[1];
              
              //$LASTPOS=16001749;//jseditor.UIForm:1749
              _this.parseOn(eType,li);
            }
            
          } else {
            //$LASTPOS=16001784;//jseditor.UIForm:1784
            if (k=="name") {
              //$LASTPOS=16001814;//jseditor.UIForm:1814
              _this[v]=_this._jqdom;
              //$LASTPOS=16001843;//jseditor.UIForm:1843
              _this._jqdom.attr(k,v);
              
            } else {
              //$LASTPOS=16001877;//jseditor.UIForm:1877
              if (k=="css"&&v!=null) {
                //$LASTPOS=16001917;//jseditor.UIForm:1917
                _this._jqdom.css(v);
                
              } else {
                //$LASTPOS=16001948;//jseditor.UIForm:1948
                if (Util.startsWith(k,"$")) {
                  //$LASTPOS=16001992;//jseditor.UIForm:1992
                  if (k=="$bind") {
                    //$LASTPOS=16002027;//jseditor.UIForm:2027
                    _this.bind(v);
                    
                  }
                  
                } else {
                  //$LASTPOS=16002067;//jseditor.UIForm:2067
                  if (v!=null) {
                    //$LASTPOS=16002095;//jseditor.UIForm:2095
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
        var _it_317;
        var eType;
        var li;
        var _it_318;
        
        
        _thread.enter(function _trc_UIForm_ent_parseAttr(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=16001664;//jseditor.UIForm:1664
              _it_317=Tonyu.iterator(o,2);
            case 1:
              if (!(_it_317.next())) { __pc=15; break; }
              k=_it_317[0];
              v=_it_317[1];
              
              //$LASTPOS=16001694;//jseditor.UIForm:1694
              if (!(k=="on")) { __pc=5; break; }
              //$LASTPOS=16001722;//jseditor.UIForm:1722
              _it_318=Tonyu.iterator(o.on,2);
            case 2:
              if (!(_it_318.next())) { __pc=4; break; }
              eType=_it_318[0];
              li=_it_318[1];
              
              //$LASTPOS=16001749;//jseditor.UIForm:1749
              _this.fiber$parseOn(_thread, eType, li);
              __pc=3;return;
            case 3:
              
              __pc=2;break;
            case 4:
              
              __pc=14;break;
            case 5:
              //$LASTPOS=16001784;//jseditor.UIForm:1784
              if (!(k=="name")) { __pc=6; break; }
              {
                //$LASTPOS=16001814;//jseditor.UIForm:1814
                _this[v]=_this._jqdom;
                //$LASTPOS=16001843;//jseditor.UIForm:1843
                _this._jqdom.attr(k,v);
              }
              __pc=13;break;
            case 6:
              //$LASTPOS=16001877;//jseditor.UIForm:1877
              if (!(k=="css"&&v!=null)) { __pc=7; break; }
              {
                //$LASTPOS=16001917;//jseditor.UIForm:1917
                _this._jqdom.css(v);
              }
              __pc=12;break;
            case 7:
              //$LASTPOS=16001948;//jseditor.UIForm:1948
              if (!(Util.startsWith(k,"$"))) { __pc=10; break; }
              //$LASTPOS=16001992;//jseditor.UIForm:1992
              if (!(k=="$bind")) { __pc=9; break; }
              //$LASTPOS=16002027;//jseditor.UIForm:2027
              _this.fiber$bind(_thread, v);
              __pc=8;return;
            case 8:
              
            case 9:
              
              __pc=11;break;
            case 10:
              //$LASTPOS=16002067;//jseditor.UIForm:2067
              if (v!=null) {
                //$LASTPOS=16002095;//jseditor.UIForm:2095
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
      parseOn :function _trc_UIForm_parseOn(eType,li) {
        "use strict";
        var _this=this;
        var jqdom;
        var first;
        var prev;
        
        //$LASTPOS=16002170;//jseditor.UIForm:2170
        jqdom = _this._jqdom;
        
        //$LASTPOS=16002193;//jseditor.UIForm:2193
        if (! li) {
          return _this;
        }
        //$LASTPOS=16002215;//jseditor.UIForm:2215
        if (eType=="enterkey") {
          //$LASTPOS=16002249;//jseditor.UIForm:2249
          jqdom.on("keypress",(function anonymous_2270(ev) {
            
            //$LASTPOS=16002291;//jseditor.UIForm:2291
            if (ev.which==13) {
              //$LASTPOS=16002309;//jseditor.UIForm:2309
              li.apply(jqdom,arguments);
            }
          }));
          
        } else {
          //$LASTPOS=16002362;//jseditor.UIForm:2362
          if (eType=="realtimechange") {
            //$LASTPOS=16002402;//jseditor.UIForm:2402
            first = true;
            
            //$LASTPOS=16002433;//jseditor.UIForm:2433
            _this.listeners.push((function anonymous_2448() {
              var cur;
              
              
              //$LASTPOS=16002489;//jseditor.UIForm:2489
              if (jqdom.attr("type")=="checkbox") {
                //$LASTPOS=16002544;//jseditor.UIForm:2544
                cur=! ! jqdom.prop("checked");
                
              } else {
                //$LASTPOS=16002612;//jseditor.UIForm:2612
                cur=jqdom.val();
                
              }
              //$LASTPOS=16002657;//jseditor.UIForm:2657
              if (first||prev!=cur) {
                //$LASTPOS=16002700;//jseditor.UIForm:2700
                li.apply(jqdom,[cur,prev]);
                //$LASTPOS=16002745;//jseditor.UIForm:2745
                prev=cur;
                
              }
              //$LASTPOS=16002783;//jseditor.UIForm:2783
              first=false;
            }));
            //$LASTPOS=16002817;//jseditor.UIForm:2817
            if (! _this._listenersInvoked) {
              //$LASTPOS=16002856;//jseditor.UIForm:2856
              _this._listenersInvoked=true;
              //$LASTPOS=16002893;//jseditor.UIForm:2893
              _this.parallel("listenerLoop");
              
            }
            
          } else {
            //$LASTPOS=16002953;//jseditor.UIForm:2953
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
        
        //$LASTPOS=16002170;//jseditor.UIForm:2170
        jqdom = _this._jqdom;
        
        //$LASTPOS=16002193;//jseditor.UIForm:2193
        if (! li) {
          _thread.retVal=_this;return;
          
        }
        //$LASTPOS=16002215;//jseditor.UIForm:2215
        if (eType=="enterkey") {
          //$LASTPOS=16002249;//jseditor.UIForm:2249
          jqdom.on("keypress",(function anonymous_2270(ev) {
            
            //$LASTPOS=16002291;//jseditor.UIForm:2291
            if (ev.which==13) {
              //$LASTPOS=16002309;//jseditor.UIForm:2309
              li.apply(jqdom,arguments);
            }
          }));
          
        } else {
          //$LASTPOS=16002362;//jseditor.UIForm:2362
          if (eType=="realtimechange") {
            //$LASTPOS=16002402;//jseditor.UIForm:2402
            first = true;
            
            //$LASTPOS=16002433;//jseditor.UIForm:2433
            _this.listeners.push((function anonymous_2448() {
              var cur;
              
              
              //$LASTPOS=16002489;//jseditor.UIForm:2489
              if (jqdom.attr("type")=="checkbox") {
                //$LASTPOS=16002544;//jseditor.UIForm:2544
                cur=! ! jqdom.prop("checked");
                
              } else {
                //$LASTPOS=16002612;//jseditor.UIForm:2612
                cur=jqdom.val();
                
              }
              //$LASTPOS=16002657;//jseditor.UIForm:2657
              if (first||prev!=cur) {
                //$LASTPOS=16002700;//jseditor.UIForm:2700
                li.apply(jqdom,[cur,prev]);
                //$LASTPOS=16002745;//jseditor.UIForm:2745
                prev=cur;
                
              }
              //$LASTPOS=16002783;//jseditor.UIForm:2783
              first=false;
            }));
            //$LASTPOS=16002817;//jseditor.UIForm:2817
            if (! _this._listenersInvoked) {
              //$LASTPOS=16002856;//jseditor.UIForm:2856
              _this._listenersInvoked=true;
              //$LASTPOS=16002893;//jseditor.UIForm:2893
              _this.parallel("listenerLoop");
              
            }
            
          } else {
            //$LASTPOS=16002953;//jseditor.UIForm:2953
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
      bind :function _trc_UIForm_bind(key) {
        "use strict";
        var _this=this;
        var jqdom;
        var vtype;
        
        //$LASTPOS=16003076;//jseditor.UIForm:3076
        jqdom = _this._jqdom;
        
        //$LASTPOS=16003099;//jseditor.UIForm:3099
        if (_this.model) {
          //$LASTPOS=16003110;//jseditor.UIForm:3110
          jqdom.val(_this.model[key]);
        }
        //$LASTPOS=16003138;//jseditor.UIForm:3138
        vtype = _this.modelType&&_this.modelType[key]||"string";
        
        //$LASTPOS=16003194;//jseditor.UIForm:3194
        _this.parseOn("realtimechange",(function anonymous_3220(val) {
          
          //$LASTPOS=16003238;//jseditor.UIForm:3238
          _this.print("bind-wrt",_this.model,key,val,vtype,_this.modelType);
          //$LASTPOS=16003296;//jseditor.UIForm:3296
          if (_this.model) {
            //$LASTPOS=16003322;//jseditor.UIForm:3322
            if (vtype=="string") {
              //$LASTPOS=16003362;//jseditor.UIForm:3362
              _this.model[key]=val;
              
            } else {
              //$LASTPOS=16003398;//jseditor.UIForm:3398
              if (vtype="number") {
                //$LASTPOS=16003436;//jseditor.UIForm:3436
                _this.model[key]=parseInt(val);
                
              }
            }
            
          }
        }));
        //$LASTPOS=16003501;//jseditor.UIForm:3501
        _this.binds[key]={onModelChanged: (function anonymous_3538(val) {
          
          //$LASTPOS=16003560;//jseditor.UIForm:3560
          jqdom.val(val);
        })};
      },
      fiber$bind :function _trc_UIForm_f_bind(_thread,key) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var jqdom;
        var vtype;
        
        //$LASTPOS=16003076;//jseditor.UIForm:3076
        jqdom = _this._jqdom;
        
        //$LASTPOS=16003099;//jseditor.UIForm:3099
        if (_this.model) {
          //$LASTPOS=16003110;//jseditor.UIForm:3110
          jqdom.val(_this.model[key]);
        }
        //$LASTPOS=16003138;//jseditor.UIForm:3138
        vtype = _this.modelType&&_this.modelType[key]||"string";
        
        
        _thread.enter(function _trc_UIForm_ent_bind(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=16003194;//jseditor.UIForm:3194
              _this.fiber$parseOn(_thread, "realtimechange", (function anonymous_3220(val) {
                
                //$LASTPOS=16003238;//jseditor.UIForm:3238
                _this.print("bind-wrt",_this.model,key,val,vtype,_this.modelType);
                //$LASTPOS=16003296;//jseditor.UIForm:3296
                if (_this.model) {
                  //$LASTPOS=16003322;//jseditor.UIForm:3322
                  if (vtype=="string") {
                    //$LASTPOS=16003362;//jseditor.UIForm:3362
                    _this.model[key]=val;
                    
                  } else {
                    //$LASTPOS=16003398;//jseditor.UIForm:3398
                    if (vtype="number") {
                      //$LASTPOS=16003436;//jseditor.UIForm:3436
                      _this.model[key]=parseInt(val);
                      
                    }
                  }
                  
                }
              }));
              __pc=1;return;
            case 1:
              
              //$LASTPOS=16003501;//jseditor.UIForm:3501
              _this.binds[key]={onModelChanged: (function anonymous_3538(val) {
                
                //$LASTPOS=16003560;//jseditor.UIForm:3560
                jqdom.val(val);
              })};
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
        var _it_334;
        
        //$LASTPOS=16003620;//jseditor.UIForm:3620
        if (SFile["is"](m)) {
          //$LASTPOS=16003651;//jseditor.UIForm:3651
          _this.modelFile=m;
          //$LASTPOS=16003673;//jseditor.UIForm:3673
          _this.model=_this.readJSON(_this.modelFile)||{};
          
        } else {
          //$LASTPOS=16003727;//jseditor.UIForm:3727
          _this.model=m;
          
        }
        //$LASTPOS=16003748;//jseditor.UIForm:3748
        assert(_this.model,"Model load error");
        //$LASTPOS=16003788;//jseditor.UIForm:3788
        _it_334=Tonyu.iterator(_this.binds,2);
        while(_it_334.next()) {
          key=_it_334[0];
          handler=_it_334[1];
          
          //$LASTPOS=16003830;//jseditor.UIForm:3830
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
        var _it_334;
        
        //$LASTPOS=16003620;//jseditor.UIForm:3620
        if (SFile["is"](m)) {
          //$LASTPOS=16003651;//jseditor.UIForm:3651
          _this.modelFile=m;
          //$LASTPOS=16003673;//jseditor.UIForm:3673
          _this.model=_this.readJSON(_this.modelFile)||{};
          
        } else {
          //$LASTPOS=16003727;//jseditor.UIForm:3727
          _this.model=m;
          
        }
        //$LASTPOS=16003748;//jseditor.UIForm:3748
        assert(_this.model,"Model load error");
        //$LASTPOS=16003788;//jseditor.UIForm:3788
        _it_334=Tonyu.iterator(_this.binds,2);
        while(_it_334.next()) {
          key=_it_334[0];
          handler=_it_334[1];
          
          //$LASTPOS=16003830;//jseditor.UIForm:3830
          handler.onModelChanged(_this.model[key]);
          
        }
        
        _thread.retVal=_this;return;
      },
      saveModel :function _trc_UIForm_saveModel() {
        "use strict";
        var _this=this;
        
        //$LASTPOS=16003897;//jseditor.UIForm:3897
        if (_this.modelFile&&_this.model) {
          //$LASTPOS=16003932;//jseditor.UIForm:3932
          _this.writeJSON(_this.modelFile,_this.model,{indent: 4});
          //$LASTPOS=16003980;//jseditor.UIForm:3980
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
              //$LASTPOS=16003897;//jseditor.UIForm:3897
              if (!(_this.modelFile&&_this.model)) { __pc=2; break; }
              //$LASTPOS=16003932;//jseditor.UIForm:3932
              _this.fiber$writeJSON(_thread, _this.modelFile, _this.model, {indent: 4});
              __pc=1;return;
            case 1:
              
              //$LASTPOS=16003980;//jseditor.UIForm:3980
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
        
        //$LASTPOS=16004117;//jseditor.UIForm:4117
        _this.model[key]=val;
        //$LASTPOS=16004138;//jseditor.UIForm:4138
        _this.binds[key].onModelChanged(val);
        //$LASTPOS=16004175;//jseditor.UIForm:4175
        _this.fireEvent("modelChanged",key,val);
      },
      fiber$attr :function _trc_UIForm_f_attr(_thread,key,val) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=16004117;//jseditor.UIForm:4117
        _this.model[key]=val;
        //$LASTPOS=16004138;//jseditor.UIForm:4138
        _this.binds[key].onModelChanged(val);
        //$LASTPOS=16004175;//jseditor.UIForm:4175
        _this.fireEvent("modelChanged",key,val);
        
        _thread.retVal=_this;return;
      },
      listenerLoop :function _trc_UIForm_listenerLoop() {
        "use strict";
        var _this=this;
        
        //$LASTPOS=16004239;//jseditor.UIForm:4239
        while (true) {
          //$LASTPOS=16004262;//jseditor.UIForm:4262
          _this.listeners.forEach((function anonymous_4279(f) {
            
            //$LASTPOS=16004299;//jseditor.UIForm:4299
            f();
          }));
          //$LASTPOS=16004325;//jseditor.UIForm:4325
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
              //$LASTPOS=16004239;//jseditor.UIForm:4239
            case 1:
              //$LASTPOS=16004262;//jseditor.UIForm:4262
              _this.listeners.forEach((function anonymous_4279(f) {
                
                //$LASTPOS=16004299;//jseditor.UIForm:4299
                f();
              }));
              //$LASTPOS=16004325;//jseditor.UIForm:4325
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
    decls: {"methods":{"main":{"nowait":false},"new":{"nowait":false},"appendTo":{"nowait":false},"dialog":{"nowait":false},"clear":{"nowait":false},"tag":{"nowait":false},"change":{"nowait":false},"parse":{"nowait":false},"isPlainObject":{"nowait":false},"isPlainFunction":{"nowait":false},"parseArray":{"nowait":false},"parseAttr":{"nowait":false},"parseOn":{"nowait":false},"parseString":{"nowait":false},"bind":{"nowait":false},"loadModel":{"nowait":false},"saveModel":{"nowait":false},"attr":{"nowait":false},"listenerLoop":{"nowait":false}}}
  });
});