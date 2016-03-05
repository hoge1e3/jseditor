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
      tag :function _trc_UIForm_tag() {
        "use strict";
        var _this=this;
        var d;
        
        //$LASTPOS=16000242;//jseditor.UIForm:242
        d = _this.parseArray(arguments);
        
        //$LASTPOS=16000276;//jseditor.UIForm:276
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
              //$LASTPOS=16000242;//jseditor.UIForm:242
              _this.fiber$parseArray(_thread, _arguments);
              __pc=1;return;
            case 1:
              d=_thread.retVal;
              
              //$LASTPOS=16000276;//jseditor.UIForm:276
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
        
        //$LASTPOS=16000348;//jseditor.UIForm:348
        sv = _this._jqdom;
        
        //$LASTPOS=16000368;//jseditor.UIForm:368
        _this._jqdom=elem;
        //$LASTPOS=16000386;//jseditor.UIForm:386
        func();
        //$LASTPOS=16000399;//jseditor.UIForm:399
        _this._jqdom=sv;
      },
      fiber$change :function _trc_UIForm_f_change(_thread,elem,func) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var sv;
        
        //$LASTPOS=16000348;//jseditor.UIForm:348
        sv = _this._jqdom;
        
        //$LASTPOS=16000368;//jseditor.UIForm:368
        _this._jqdom=elem;
        //$LASTPOS=16000386;//jseditor.UIForm:386
        func();
        //$LASTPOS=16000399;//jseditor.UIForm:399
        _this._jqdom=sv;
        
        _thread.retVal=_this;return;
      },
      parse :function _trc_UIForm_parse(expr) {
        "use strict";
        var _this=this;
        
        //$LASTPOS=16000442;//jseditor.UIForm:442
        if (expr instanceof Array) {
          return _this.parseArray(expr);
        } else {
          //$LASTPOS=16000504;//jseditor.UIForm:504
          if (typeof  expr=="string") {
            return _this.parseString(expr);
          } else {
            //$LASTPOS=16000567;//jseditor.UIForm:567
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
        
        //$LASTPOS=16000442;//jseditor.UIForm:442
        if (expr instanceof Array) {
          _thread.retVal=_this.parseArray(expr);return;
          
        } else {
          //$LASTPOS=16000504;//jseditor.UIForm:504
          if (typeof  expr=="string") {
            _thread.retVal=_this.parseString(expr);return;
            
          } else {
            //$LASTPOS=16000567;//jseditor.UIForm:567
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
        
        //$LASTPOS=16000674;//jseditor.UIForm:674
        tag = a[0];
        
        //$LASTPOS=16000693;//jseditor.UIForm:693
        i = 0;
        
        //$LASTPOS=16000707;//jseditor.UIForm:707
        svjq = _this._jqdom;
        
        //$LASTPOS=16000733;//jseditor.UIForm:733
        if (typeof  tag=="string") {
          //$LASTPOS=16000770;//jseditor.UIForm:770
          res=_this._jqdom=$("<"+tag+">");
          //$LASTPOS=16000806;//jseditor.UIForm:806
          if (! _this.jqdom) {
            //$LASTPOS=16000818;//jseditor.UIForm:818
            _this.jqdom=_this._jqdom;
          }
          //$LASTPOS=16000841;//jseditor.UIForm:841
          i=1;
          //$LASTPOS=16000855;//jseditor.UIForm:855
          if (typeof  a[i]=="object"&&! (a[i] instanceof Array)&&! (a[i] instanceof $)) {
            //$LASTPOS=16000970;//jseditor.UIForm:970
            _this.parseAttr(a[i]);
            //$LASTPOS=16001000;//jseditor.UIForm:1000
            i++;
            
          }
          
        }
        //$LASTPOS=16001028;//jseditor.UIForm:1028
        while (i<a.length) {
          //$LASTPOS=16001058;//jseditor.UIForm:1058
          s = _this.parse(a[i]);
          
          //$LASTPOS=16001086;//jseditor.UIForm:1086
          if (s) {
            //$LASTPOS=16001093;//jseditor.UIForm:1093
            res.append(s);
          }
          //$LASTPOS=16001117;//jseditor.UIForm:1117
          i++;
          
        }
        //$LASTPOS=16001134;//jseditor.UIForm:1134
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
        
        //$LASTPOS=16000674;//jseditor.UIForm:674
        tag = a[0];
        
        //$LASTPOS=16000693;//jseditor.UIForm:693
        i = 0;
        
        //$LASTPOS=16000707;//jseditor.UIForm:707
        svjq = _this._jqdom;
        
        
        _thread.enter(function _trc_UIForm_ent_parseArray(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=16000733;//jseditor.UIForm:733
              if (!(typeof  tag=="string")) { __pc=3; break; }
              //$LASTPOS=16000770;//jseditor.UIForm:770
              res=_this._jqdom=$("<"+tag+">");
              //$LASTPOS=16000806;//jseditor.UIForm:806
              if (! _this.jqdom) {
                //$LASTPOS=16000818;//jseditor.UIForm:818
                _this.jqdom=_this._jqdom;
              }
              //$LASTPOS=16000841;//jseditor.UIForm:841
              i=1;
              //$LASTPOS=16000855;//jseditor.UIForm:855
              if (!(typeof  a[i]=="object"&&! (a[i] instanceof Array)&&! (a[i] instanceof $))) { __pc=2; break; }
              //$LASTPOS=16000970;//jseditor.UIForm:970
              _this.fiber$parseAttr(_thread, a[i]);
              __pc=1;return;
            case 1:
              
              //$LASTPOS=16001000;//jseditor.UIForm:1000
              i++;
            case 2:
              
            case 3:
              
              //$LASTPOS=16001028;//jseditor.UIForm:1028
            case 4:
              if (!(i<a.length)) { __pc=6; break; }
              //$LASTPOS=16001058;//jseditor.UIForm:1058
              _this.fiber$parse(_thread, a[i]);
              __pc=5;return;
            case 5:
              s=_thread.retVal;
              
              //$LASTPOS=16001086;//jseditor.UIForm:1086
              if (s) {
                //$LASTPOS=16001093;//jseditor.UIForm:1093
                res.append(s);
              }
              //$LASTPOS=16001117;//jseditor.UIForm:1117
              i++;
              __pc=4;break;
            case 6:
              
              //$LASTPOS=16001134;//jseditor.UIForm:1134
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
        var _it_337;
        var eType;
        var li;
        var _it_338;
        
        //$LASTPOS=16001197;//jseditor.UIForm:1197
        _it_337=Tonyu.iterator(o,2);
        while(_it_337.next()) {
          k=_it_337[0];
          v=_it_337[1];
          
          //$LASTPOS=16001227;//jseditor.UIForm:1227
          if (k=="on") {
            //$LASTPOS=16001255;//jseditor.UIForm:1255
            _it_338=Tonyu.iterator(o.on,2);
            while(_it_338.next()) {
              eType=_it_338[0];
              li=_it_338[1];
              
              //$LASTPOS=16001282;//jseditor.UIForm:1282
              _this.parseOn(eType,li);
            }
            
          } else {
            //$LASTPOS=16001317;//jseditor.UIForm:1317
            if (k=="name") {
              //$LASTPOS=16001347;//jseditor.UIForm:1347
              _this[v]=_this._jqdom;
              //$LASTPOS=16001376;//jseditor.UIForm:1376
              _this._jqdom.attr(k,v);
              
            } else {
              //$LASTPOS=16001410;//jseditor.UIForm:1410
              if (k=="css"&&v!=null) {
                //$LASTPOS=16001450;//jseditor.UIForm:1450
                _this._jqdom.css(v);
                
              } else {
                //$LASTPOS=16001481;//jseditor.UIForm:1481
                if (Util.startsWith(k,"$")) {
                  //$LASTPOS=16001525;//jseditor.UIForm:1525
                  if (k=="$bind") {
                    //$LASTPOS=16001560;//jseditor.UIForm:1560
                    _this.bind(v);
                    
                  }
                  
                } else {
                  //$LASTPOS=16001600;//jseditor.UIForm:1600
                  if (v!=null) {
                    //$LASTPOS=16001628;//jseditor.UIForm:1628
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
        var _it_337;
        var eType;
        var li;
        var _it_338;
        
        
        _thread.enter(function _trc_UIForm_ent_parseAttr(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=16001197;//jseditor.UIForm:1197
              _it_337=Tonyu.iterator(o,2);
            case 1:
              if (!(_it_337.next())) { __pc=15; break; }
              k=_it_337[0];
              v=_it_337[1];
              
              //$LASTPOS=16001227;//jseditor.UIForm:1227
              if (!(k=="on")) { __pc=5; break; }
              //$LASTPOS=16001255;//jseditor.UIForm:1255
              _it_338=Tonyu.iterator(o.on,2);
            case 2:
              if (!(_it_338.next())) { __pc=4; break; }
              eType=_it_338[0];
              li=_it_338[1];
              
              //$LASTPOS=16001282;//jseditor.UIForm:1282
              _this.fiber$parseOn(_thread, eType, li);
              __pc=3;return;
            case 3:
              
              __pc=2;break;
            case 4:
              
              __pc=14;break;
            case 5:
              //$LASTPOS=16001317;//jseditor.UIForm:1317
              if (!(k=="name")) { __pc=6; break; }
              {
                //$LASTPOS=16001347;//jseditor.UIForm:1347
                _this[v]=_this._jqdom;
                //$LASTPOS=16001376;//jseditor.UIForm:1376
                _this._jqdom.attr(k,v);
              }
              __pc=13;break;
            case 6:
              //$LASTPOS=16001410;//jseditor.UIForm:1410
              if (!(k=="css"&&v!=null)) { __pc=7; break; }
              {
                //$LASTPOS=16001450;//jseditor.UIForm:1450
                _this._jqdom.css(v);
              }
              __pc=12;break;
            case 7:
              //$LASTPOS=16001481;//jseditor.UIForm:1481
              if (!(Util.startsWith(k,"$"))) { __pc=10; break; }
              //$LASTPOS=16001525;//jseditor.UIForm:1525
              if (!(k=="$bind")) { __pc=9; break; }
              //$LASTPOS=16001560;//jseditor.UIForm:1560
              _this.fiber$bind(_thread, v);
              __pc=8;return;
            case 8:
              
            case 9:
              
              __pc=11;break;
            case 10:
              //$LASTPOS=16001600;//jseditor.UIForm:1600
              if (v!=null) {
                //$LASTPOS=16001628;//jseditor.UIForm:1628
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
        
        //$LASTPOS=16001703;//jseditor.UIForm:1703
        jqdom = _this._jqdom;
        
        //$LASTPOS=16001726;//jseditor.UIForm:1726
        if (! li) {
          return _this;
        }
        //$LASTPOS=16001748;//jseditor.UIForm:1748
        if (eType=="enterkey") {
          //$LASTPOS=16001782;//jseditor.UIForm:1782
          jqdom.on("keypress",(function anonymous_1803(ev) {
            
            //$LASTPOS=16001824;//jseditor.UIForm:1824
            if (ev.which==13) {
              //$LASTPOS=16001842;//jseditor.UIForm:1842
              li.apply(jqdom,arguments);
            }
          }));
          
        } else {
          //$LASTPOS=16001895;//jseditor.UIForm:1895
          if (eType=="realtimechange") {
            //$LASTPOS=16001935;//jseditor.UIForm:1935
            first = true;
            
            //$LASTPOS=16001966;//jseditor.UIForm:1966
            _this.listeners.push((function anonymous_1981() {
              var cur;
              
              
              //$LASTPOS=16002022;//jseditor.UIForm:2022
              if (jqdom.attr("type")=="checkbox") {
                //$LASTPOS=16002077;//jseditor.UIForm:2077
                cur=! ! jqdom.prop("checked");
                
              } else {
                //$LASTPOS=16002145;//jseditor.UIForm:2145
                cur=jqdom.val();
                
              }
              //$LASTPOS=16002190;//jseditor.UIForm:2190
              if (first||prev!=cur) {
                //$LASTPOS=16002233;//jseditor.UIForm:2233
                li.apply(jqdom,[cur,prev]);
                //$LASTPOS=16002278;//jseditor.UIForm:2278
                prev=cur;
                
              }
              //$LASTPOS=16002316;//jseditor.UIForm:2316
              first=false;
            }));
            //$LASTPOS=16002350;//jseditor.UIForm:2350
            if (! _this._listenersInvoked) {
              //$LASTPOS=16002389;//jseditor.UIForm:2389
              _this._listenersInvoked=true;
              //$LASTPOS=16002426;//jseditor.UIForm:2426
              _this.parallel("listenerLoop");
              
            }
            
          } else {
            //$LASTPOS=16002486;//jseditor.UIForm:2486
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
        
        //$LASTPOS=16001703;//jseditor.UIForm:1703
        jqdom = _this._jqdom;
        
        //$LASTPOS=16001726;//jseditor.UIForm:1726
        if (! li) {
          _thread.retVal=_this;return;
          
        }
        //$LASTPOS=16001748;//jseditor.UIForm:1748
        if (eType=="enterkey") {
          //$LASTPOS=16001782;//jseditor.UIForm:1782
          jqdom.on("keypress",(function anonymous_1803(ev) {
            
            //$LASTPOS=16001824;//jseditor.UIForm:1824
            if (ev.which==13) {
              //$LASTPOS=16001842;//jseditor.UIForm:1842
              li.apply(jqdom,arguments);
            }
          }));
          
        } else {
          //$LASTPOS=16001895;//jseditor.UIForm:1895
          if (eType=="realtimechange") {
            //$LASTPOS=16001935;//jseditor.UIForm:1935
            first = true;
            
            //$LASTPOS=16001966;//jseditor.UIForm:1966
            _this.listeners.push((function anonymous_1981() {
              var cur;
              
              
              //$LASTPOS=16002022;//jseditor.UIForm:2022
              if (jqdom.attr("type")=="checkbox") {
                //$LASTPOS=16002077;//jseditor.UIForm:2077
                cur=! ! jqdom.prop("checked");
                
              } else {
                //$LASTPOS=16002145;//jseditor.UIForm:2145
                cur=jqdom.val();
                
              }
              //$LASTPOS=16002190;//jseditor.UIForm:2190
              if (first||prev!=cur) {
                //$LASTPOS=16002233;//jseditor.UIForm:2233
                li.apply(jqdom,[cur,prev]);
                //$LASTPOS=16002278;//jseditor.UIForm:2278
                prev=cur;
                
              }
              //$LASTPOS=16002316;//jseditor.UIForm:2316
              first=false;
            }));
            //$LASTPOS=16002350;//jseditor.UIForm:2350
            if (! _this._listenersInvoked) {
              //$LASTPOS=16002389;//jseditor.UIForm:2389
              _this._listenersInvoked=true;
              //$LASTPOS=16002426;//jseditor.UIForm:2426
              _this.parallel("listenerLoop");
              
            }
            
          } else {
            //$LASTPOS=16002486;//jseditor.UIForm:2486
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
        
        //$LASTPOS=16002609;//jseditor.UIForm:2609
        jqdom = _this._jqdom;
        
        //$LASTPOS=16002632;//jseditor.UIForm:2632
        if (_this.model) {
          //$LASTPOS=16002643;//jseditor.UIForm:2643
          jqdom.val(_this.model[key]);
        }
        //$LASTPOS=16002671;//jseditor.UIForm:2671
        vtype = _this.modelType&&_this.modelType[key]||"string";
        
        //$LASTPOS=16002727;//jseditor.UIForm:2727
        _this.parseOn("realtimechange",(function anonymous_2753(val) {
          
          //$LASTPOS=16002771;//jseditor.UIForm:2771
          _this.print("bind-wrt",_this.model,key,val,vtype,_this.modelType);
          //$LASTPOS=16002829;//jseditor.UIForm:2829
          if (_this.model) {
            //$LASTPOS=16002855;//jseditor.UIForm:2855
            if (vtype=="string") {
              //$LASTPOS=16002895;//jseditor.UIForm:2895
              _this.model[key]=val;
              
            } else {
              //$LASTPOS=16002931;//jseditor.UIForm:2931
              if (vtype="number") {
                //$LASTPOS=16002969;//jseditor.UIForm:2969
                _this.model[key]=parseInt(val);
                
              }
            }
            
          }
        }));
        //$LASTPOS=16003034;//jseditor.UIForm:3034
        _this.binds[key]={onModelChanged: (function anonymous_3071(val) {
          
          //$LASTPOS=16003093;//jseditor.UIForm:3093
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
        
        //$LASTPOS=16002609;//jseditor.UIForm:2609
        jqdom = _this._jqdom;
        
        //$LASTPOS=16002632;//jseditor.UIForm:2632
        if (_this.model) {
          //$LASTPOS=16002643;//jseditor.UIForm:2643
          jqdom.val(_this.model[key]);
        }
        //$LASTPOS=16002671;//jseditor.UIForm:2671
        vtype = _this.modelType&&_this.modelType[key]||"string";
        
        
        _thread.enter(function _trc_UIForm_ent_bind(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=16002727;//jseditor.UIForm:2727
              _this.fiber$parseOn(_thread, "realtimechange", (function anonymous_2753(val) {
                
                //$LASTPOS=16002771;//jseditor.UIForm:2771
                _this.print("bind-wrt",_this.model,key,val,vtype,_this.modelType);
                //$LASTPOS=16002829;//jseditor.UIForm:2829
                if (_this.model) {
                  //$LASTPOS=16002855;//jseditor.UIForm:2855
                  if (vtype=="string") {
                    //$LASTPOS=16002895;//jseditor.UIForm:2895
                    _this.model[key]=val;
                    
                  } else {
                    //$LASTPOS=16002931;//jseditor.UIForm:2931
                    if (vtype="number") {
                      //$LASTPOS=16002969;//jseditor.UIForm:2969
                      _this.model[key]=parseInt(val);
                      
                    }
                  }
                  
                }
              }));
              __pc=1;return;
            case 1:
              
              //$LASTPOS=16003034;//jseditor.UIForm:3034
              _this.binds[key]={onModelChanged: (function anonymous_3071(val) {
                
                //$LASTPOS=16003093;//jseditor.UIForm:3093
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
        var _it_354;
        
        //$LASTPOS=16003153;//jseditor.UIForm:3153
        if (SFile["is"](m)) {
          //$LASTPOS=16003184;//jseditor.UIForm:3184
          _this.modelFile=m;
          //$LASTPOS=16003206;//jseditor.UIForm:3206
          _this.model=_this.readJSON(_this.modelFile)||{};
          
        } else {
          //$LASTPOS=16003260;//jseditor.UIForm:3260
          _this.model=m;
          
        }
        //$LASTPOS=16003281;//jseditor.UIForm:3281
        assert(_this.model,"Model load error");
        //$LASTPOS=16003321;//jseditor.UIForm:3321
        _it_354=Tonyu.iterator(_this.binds,2);
        while(_it_354.next()) {
          key=_it_354[0];
          handler=_it_354[1];
          
          //$LASTPOS=16003363;//jseditor.UIForm:3363
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
        var _it_354;
        
        //$LASTPOS=16003153;//jseditor.UIForm:3153
        if (SFile["is"](m)) {
          //$LASTPOS=16003184;//jseditor.UIForm:3184
          _this.modelFile=m;
          //$LASTPOS=16003206;//jseditor.UIForm:3206
          _this.model=_this.readJSON(_this.modelFile)||{};
          
        } else {
          //$LASTPOS=16003260;//jseditor.UIForm:3260
          _this.model=m;
          
        }
        //$LASTPOS=16003281;//jseditor.UIForm:3281
        assert(_this.model,"Model load error");
        //$LASTPOS=16003321;//jseditor.UIForm:3321
        _it_354=Tonyu.iterator(_this.binds,2);
        while(_it_354.next()) {
          key=_it_354[0];
          handler=_it_354[1];
          
          //$LASTPOS=16003363;//jseditor.UIForm:3363
          handler.onModelChanged(_this.model[key]);
          
        }
        
        _thread.retVal=_this;return;
      },
      saveModel :function _trc_UIForm_saveModel() {
        "use strict";
        var _this=this;
        
        //$LASTPOS=16003430;//jseditor.UIForm:3430
        if (_this.modelFile&&_this.model) {
          //$LASTPOS=16003465;//jseditor.UIForm:3465
          _this.writeJSON(_this.modelFile,_this.model,{indent: 4});
          //$LASTPOS=16003513;//jseditor.UIForm:3513
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
              //$LASTPOS=16003430;//jseditor.UIForm:3430
              if (!(_this.modelFile&&_this.model)) { __pc=2; break; }
              //$LASTPOS=16003465;//jseditor.UIForm:3465
              _this.fiber$writeJSON(_thread, _this.modelFile, _this.model, {indent: 4});
              __pc=1;return;
            case 1:
              
              //$LASTPOS=16003513;//jseditor.UIForm:3513
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
        
        //$LASTPOS=16003650;//jseditor.UIForm:3650
        _this.model[key]=val;
        //$LASTPOS=16003671;//jseditor.UIForm:3671
        _this.binds[key].onModelChanged(val);
        //$LASTPOS=16003708;//jseditor.UIForm:3708
        _this.fireEvent("modelChanged",key,val);
      },
      fiber$attr :function _trc_UIForm_f_attr(_thread,key,val) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=16003650;//jseditor.UIForm:3650
        _this.model[key]=val;
        //$LASTPOS=16003671;//jseditor.UIForm:3671
        _this.binds[key].onModelChanged(val);
        //$LASTPOS=16003708;//jseditor.UIForm:3708
        _this.fireEvent("modelChanged",key,val);
        
        _thread.retVal=_this;return;
      },
      listenerLoop :function _trc_UIForm_listenerLoop() {
        "use strict";
        var _this=this;
        
        //$LASTPOS=16003772;//jseditor.UIForm:3772
        while (true) {
          //$LASTPOS=16003795;//jseditor.UIForm:3795
          _this.listeners.forEach((function anonymous_3812(f) {
            
            //$LASTPOS=16003832;//jseditor.UIForm:3832
            f();
          }));
          //$LASTPOS=16003858;//jseditor.UIForm:3858
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
              //$LASTPOS=16003772;//jseditor.UIForm:3772
            case 1:
              //$LASTPOS=16003795;//jseditor.UIForm:3795
              _this.listeners.forEach((function anonymous_3812(f) {
                
                //$LASTPOS=16003832;//jseditor.UIForm:3832
                f();
              }));
              //$LASTPOS=16003858;//jseditor.UIForm:3858
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
    decls: {"methods":{"main":{"nowait":false},"new":{"nowait":false},"appendTo":{"nowait":false},"dialog":{"nowait":false},"tag":{"nowait":false},"change":{"nowait":false},"parse":{"nowait":false},"parseArray":{"nowait":false},"parseAttr":{"nowait":false},"parseOn":{"nowait":false},"parseString":{"nowait":false},"bind":{"nowait":false},"loadModel":{"nowait":false},"saveModel":{"nowait":false},"attr":{"nowait":false},"listenerLoop":{"nowait":false}}}
  });
});