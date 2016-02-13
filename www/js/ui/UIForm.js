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
        
        //$LASTPOS=7000041;//jseditor.UIForm:41
        Tonyu.classes.jseditor.Base.apply( _this, [o]);
        //$LASTPOS=7000056;//jseditor.UIForm:56
        _this.listeners=[];
        //$LASTPOS=7000075;//jseditor.UIForm:75
        _this.main();
      },
      appendTo :function _trc_UIForm_appendTo(dom) {
        "use strict";
        var _this=this;
        
        //$LASTPOS=7000109;//jseditor.UIForm:109
        _this.jqdom.append(dom);
      },
      fiber$appendTo :function _trc_UIForm_f_appendTo(_thread,dom) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=7000109;//jseditor.UIForm:109
        _this.jqdom.append(dom);
        
        _thread.retVal=_this;return;
      },
      dialog :function _trc_UIForm_dialog(options) {
        "use strict";
        var _this=this;
        
        //$LASTPOS=7000156;//jseditor.UIForm:156
        _this.jqdom.dialog(options);
      },
      fiber$dialog :function _trc_UIForm_f_dialog(_thread,options) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=7000156;//jseditor.UIForm:156
        _this.jqdom.dialog(options);
        
        _thread.retVal=_this;return;
      },
      tag :function _trc_UIForm_tag() {
        "use strict";
        var _this=this;
        var d;
        
        
        //$LASTPOS=7000209;//jseditor.UIForm:209
        if (_this.jqdom) {
          //$LASTPOS=7000231;//jseditor.UIForm:231
          d=_this.parseArray(arguments);
          //$LASTPOS=7000265;//jseditor.UIForm:265
          _this.jqdom.append(d);
          
        } else {
          //$LASTPOS=7000305;//jseditor.UIForm:305
          d=_this.parseArray(arguments);
          
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
              //$LASTPOS=7000209;//jseditor.UIForm:209
              if (!(_this.jqdom)) { __pc=2; break; }
              //$LASTPOS=7000231;//jseditor.UIForm:231
              _this.fiber$parseArray(_thread, _arguments);
              __pc=1;return;
            case 1:
              d=_thread.retVal;
              
              //$LASTPOS=7000265;//jseditor.UIForm:265
              _this.jqdom.append(d);
              __pc=4;break;
            case 2:
              //$LASTPOS=7000305;//jseditor.UIForm:305
              _this.fiber$parseArray(_thread, _arguments);
              __pc=3;return;
            case 3:
              d=_thread.retVal;
              
            case 4:
              
              _thread.exit(d);return;
              _thread.exit(_this);return;
            }
          }
        });
      },
      parse :function _trc_UIForm_parse(expr) {
        "use strict";
        var _this=this;
        
        //$LASTPOS=7000384;//jseditor.UIForm:384
        if (expr instanceof Array) {
          return _this.parseArray(expr);
        } else {
          //$LASTPOS=7000446;//jseditor.UIForm:446
          if (typeof  expr=="string") {
            return _this.parseString(expr);
          } else {
            //$LASTPOS=7000509;//jseditor.UIForm:509
            if (typeof  expr=="function") {
              return expr(_this.jqdom);
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
        
        //$LASTPOS=7000384;//jseditor.UIForm:384
        if (expr instanceof Array) {
          _thread.retVal=_this.parseArray(expr);return;
          
        } else {
          //$LASTPOS=7000446;//jseditor.UIForm:446
          if (typeof  expr=="string") {
            _thread.retVal=_this.parseString(expr);return;
            
          } else {
            //$LASTPOS=7000509;//jseditor.UIForm:509
            if (typeof  expr=="function") {
              _thread.retVal=expr(_this.jqdom);return;
              
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
        
        //$LASTPOS=7000615;//jseditor.UIForm:615
        tag = a[0];
        
        //$LASTPOS=7000634;//jseditor.UIForm:634
        i = 0;
        
        //$LASTPOS=7000648;//jseditor.UIForm:648
        svjq = _this.jqdom;
        
        //$LASTPOS=7000673;//jseditor.UIForm:673
        if (typeof  tag=="string") {
          //$LASTPOS=7000710;//jseditor.UIForm:710
          res=_this.jqdom=$("<"+tag+">");
          //$LASTPOS=7000745;//jseditor.UIForm:745
          i=1;
          //$LASTPOS=7000759;//jseditor.UIForm:759
          if (typeof  a[i]=="object"&&! (a[i] instanceof Array)&&! (a[i] instanceof $)) {
            //$LASTPOS=7000874;//jseditor.UIForm:874
            _this.parseAttr(a[i]);
            //$LASTPOS=7000904;//jseditor.UIForm:904
            i++;
            
          }
          
        }
        //$LASTPOS=7000932;//jseditor.UIForm:932
        while (i<a.length) {
          //$LASTPOS=7000962;//jseditor.UIForm:962
          s = _this.parse(a[i]);
          
          //$LASTPOS=7000990;//jseditor.UIForm:990
          if (s) {
            //$LASTPOS=7000997;//jseditor.UIForm:997
            res.append(s);
          }
          //$LASTPOS=7001021;//jseditor.UIForm:1021
          i++;
          
        }
        //$LASTPOS=7001038;//jseditor.UIForm:1038
        if (svjq) {
          //$LASTPOS=7001048;//jseditor.UIForm:1048
          _this.jqdom=svjq;
        }
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
        
        //$LASTPOS=7000615;//jseditor.UIForm:615
        tag = a[0];
        
        //$LASTPOS=7000634;//jseditor.UIForm:634
        i = 0;
        
        //$LASTPOS=7000648;//jseditor.UIForm:648
        svjq = _this.jqdom;
        
        
        _thread.enter(function _trc_UIForm_ent_parseArray(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=7000673;//jseditor.UIForm:673
              if (!(typeof  tag=="string")) { __pc=3; break; }
              //$LASTPOS=7000710;//jseditor.UIForm:710
              res=_this.jqdom=$("<"+tag+">");
              //$LASTPOS=7000745;//jseditor.UIForm:745
              i=1;
              //$LASTPOS=7000759;//jseditor.UIForm:759
              if (!(typeof  a[i]=="object"&&! (a[i] instanceof Array)&&! (a[i] instanceof $))) { __pc=2; break; }
              //$LASTPOS=7000874;//jseditor.UIForm:874
              _this.fiber$parseAttr(_thread, a[i]);
              __pc=1;return;
            case 1:
              
              //$LASTPOS=7000904;//jseditor.UIForm:904
              i++;
            case 2:
              
            case 3:
              
              //$LASTPOS=7000932;//jseditor.UIForm:932
            case 4:
              if (!(i<a.length)) { __pc=6; break; }
              //$LASTPOS=7000962;//jseditor.UIForm:962
              _this.fiber$parse(_thread, a[i]);
              __pc=5;return;
            case 5:
              s=_thread.retVal;
              
              //$LASTPOS=7000990;//jseditor.UIForm:990
              if (s) {
                //$LASTPOS=7000997;//jseditor.UIForm:997
                res.append(s);
              }
              //$LASTPOS=7001021;//jseditor.UIForm:1021
              i++;
              __pc=4;break;
            case 6:
              
              //$LASTPOS=7001038;//jseditor.UIForm:1038
              if (svjq) {
                //$LASTPOS=7001048;//jseditor.UIForm:1048
                _this.jqdom=svjq;
              }
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
        var _it_42;
        var eType;
        var li;
        var _it_43;
        
        //$LASTPOS=7001110;//jseditor.UIForm:1110
        _it_42=Tonyu.iterator(o,2);
        while(_it_42.next()) {
          k=_it_42[0];
          v=_it_42[1];
          
          //$LASTPOS=7001140;//jseditor.UIForm:1140
          if (k=="on") {
            //$LASTPOS=7001168;//jseditor.UIForm:1168
            _it_43=Tonyu.iterator(o.on,2);
            while(_it_43.next()) {
              eType=_it_43[0];
              li=_it_43[1];
              
              //$LASTPOS=7001195;//jseditor.UIForm:1195
              _this.parseOn(eType,li);
            }
            
          } else {
            //$LASTPOS=7001230;//jseditor.UIForm:1230
            if (k=="name") {
              //$LASTPOS=7001260;//jseditor.UIForm:1260
              _this[v]=_this.jqdom;
              //$LASTPOS=7001288;//jseditor.UIForm:1288
              _this.jqdom.attr(k,v);
              
            } else {
              //$LASTPOS=7001321;//jseditor.UIForm:1321
              if (k=="css"&&v!=null) {
                //$LASTPOS=7001361;//jseditor.UIForm:1361
                _this.jqdom.css(v);
                
              } else {
                //$LASTPOS=7001391;//jseditor.UIForm:1391
                if (Util.startsWith(k,"$")) {
                  //$LASTPOS=7001435;//jseditor.UIForm:1435
                  if (k=="$bind") {
                    
                    
                  }
                  
                } else {
                  //$LASTPOS=7001502;//jseditor.UIForm:1502
                  if (v!=null) {
                    //$LASTPOS=7001530;//jseditor.UIForm:1530
                    _this.jqdom.attr(k,v);
                    
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
        var _it_42;
        var eType;
        var li;
        var _it_43;
        
        
        _thread.enter(function _trc_UIForm_ent_parseAttr(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=7001110;//jseditor.UIForm:1110
              _it_42=Tonyu.iterator(o,2);
            case 1:
              if (!(_it_42.next())) { __pc=7; break; }
              k=_it_42[0];
              v=_it_42[1];
              
              //$LASTPOS=7001140;//jseditor.UIForm:1140
              if (!(k=="on")) { __pc=5; break; }
              //$LASTPOS=7001168;//jseditor.UIForm:1168
              _it_43=Tonyu.iterator(o.on,2);
            case 2:
              if (!(_it_43.next())) { __pc=4; break; }
              eType=_it_43[0];
              li=_it_43[1];
              
              //$LASTPOS=7001195;//jseditor.UIForm:1195
              _this.fiber$parseOn(_thread, eType, li);
              __pc=3;return;
            case 3:
              
              __pc=2;break;
            case 4:
              
              __pc=6;break;
            case 5:
              //$LASTPOS=7001230;//jseditor.UIForm:1230
              if (k=="name") {
                //$LASTPOS=7001260;//jseditor.UIForm:1260
                _this[v]=_this.jqdom;
                //$LASTPOS=7001288;//jseditor.UIForm:1288
                _this.jqdom.attr(k,v);
                
              } else {
                //$LASTPOS=7001321;//jseditor.UIForm:1321
                if (k=="css"&&v!=null) {
                  //$LASTPOS=7001361;//jseditor.UIForm:1361
                  _this.jqdom.css(v);
                  
                } else {
                  //$LASTPOS=7001391;//jseditor.UIForm:1391
                  if (Util.startsWith(k,"$")) {
                    //$LASTPOS=7001435;//jseditor.UIForm:1435
                    if (k=="$bind") {
                      
                      
                    }
                    
                  } else {
                    //$LASTPOS=7001502;//jseditor.UIForm:1502
                    if (v!=null) {
                      //$LASTPOS=7001530;//jseditor.UIForm:1530
                      _this.jqdom.attr(k,v);
                      
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
        
        //$LASTPOS=7001604;//jseditor.UIForm:1604
        if (! li) {
          return _this;
        }
        //$LASTPOS=7001626;//jseditor.UIForm:1626
        if (eType=="enterkey") {
          //$LASTPOS=7001660;//jseditor.UIForm:1660
          _this.jqdom.on("keypress",(function anonymous_1681(ev) {
            
            //$LASTPOS=7001702;//jseditor.UIForm:1702
            if (ev.which==13) {
              //$LASTPOS=7001720;//jseditor.UIForm:1720
              li.apply(_this.jqdom,arguments);
            }
          }));
          
        } else {
          //$LASTPOS=7001771;//jseditor.UIForm:1771
          if (eType=="realtimechange") {
            //$LASTPOS=7001811;//jseditor.UIForm:1811
            first = true;
            
            //$LASTPOS=7001842;//jseditor.UIForm:1842
            _this.listeners.push((function anonymous_1857() {
              var cur;
              
              
              //$LASTPOS=7001898;//jseditor.UIForm:1898
              if (_this.o.type=="checkbox") {
                //$LASTPOS=7001941;//jseditor.UIForm:1941
                cur=! ! _this.jqdom.prop("checked");
                
              } else {
                //$LASTPOS=7002009;//jseditor.UIForm:2009
                cur=_this.jqdom.val();
                
              }
              //$LASTPOS=7002054;//jseditor.UIForm:2054
              if (first||prev!=cur) {
                //$LASTPOS=7002097;//jseditor.UIForm:2097
                li.apply(_this.jqdom,[cur,prev]);
                //$LASTPOS=7002142;//jseditor.UIForm:2142
                prev=cur;
                
              }
              //$LASTPOS=7002180;//jseditor.UIForm:2180
              first=false;
            }));
            
          } else {
            //$LASTPOS=7002228;//jseditor.UIForm:2228
            _this.jqdom.on(eType,li);
            
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
        
        //$LASTPOS=7001604;//jseditor.UIForm:1604
        if (! li) {
          _thread.retVal=_this;return;
          
        }
        //$LASTPOS=7001626;//jseditor.UIForm:1626
        if (eType=="enterkey") {
          //$LASTPOS=7001660;//jseditor.UIForm:1660
          _this.jqdom.on("keypress",(function anonymous_1681(ev) {
            
            //$LASTPOS=7001702;//jseditor.UIForm:1702
            if (ev.which==13) {
              //$LASTPOS=7001720;//jseditor.UIForm:1720
              li.apply(_this.jqdom,arguments);
            }
          }));
          
        } else {
          //$LASTPOS=7001771;//jseditor.UIForm:1771
          if (eType=="realtimechange") {
            //$LASTPOS=7001811;//jseditor.UIForm:1811
            first = true;
            
            //$LASTPOS=7001842;//jseditor.UIForm:1842
            _this.listeners.push((function anonymous_1857() {
              var cur;
              
              
              //$LASTPOS=7001898;//jseditor.UIForm:1898
              if (_this.o.type=="checkbox") {
                //$LASTPOS=7001941;//jseditor.UIForm:1941
                cur=! ! _this.jqdom.prop("checked");
                
              } else {
                //$LASTPOS=7002009;//jseditor.UIForm:2009
                cur=_this.jqdom.val();
                
              }
              //$LASTPOS=7002054;//jseditor.UIForm:2054
              if (first||prev!=cur) {
                //$LASTPOS=7002097;//jseditor.UIForm:2097
                li.apply(_this.jqdom,[cur,prev]);
                //$LASTPOS=7002142;//jseditor.UIForm:2142
                prev=cur;
                
              }
              //$LASTPOS=7002180;//jseditor.UIForm:2180
              first=false;
            }));
            
          } else {
            //$LASTPOS=7002228;//jseditor.UIForm:2228
            _this.jqdom.on(eType,li);
            
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
    decls: {"methods":{"main":{"nowait":false},"new":{"nowait":false},"appendTo":{"nowait":false},"dialog":{"nowait":false},"tag":{"nowait":false},"parse":{"nowait":false},"parseArray":{"nowait":false},"parseAttr":{"nowait":false},"parseOn":{"nowait":false},"parseString":{"nowait":false}}}
  });
});