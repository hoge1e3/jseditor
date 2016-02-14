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
        
        //$LASTPOS=7000197;//jseditor.UIForm:197
        d = _this.parseArray(arguments);
        
        //$LASTPOS=7000231;//jseditor.UIForm:231
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
              //$LASTPOS=7000197;//jseditor.UIForm:197
              _this.fiber$parseArray(_thread, _arguments);
              __pc=1;return;
            case 1:
              d=_thread.retVal;
              
              //$LASTPOS=7000231;//jseditor.UIForm:231
              (_this._jqdom||_this.jqdom).append(d);
              _thread.exit(d);return;
              _thread.exit(_this);return;
            }
          }
        });
      },
      parse :function _trc_UIForm_parse(expr) {
        "use strict";
        var _this=this;
        
        //$LASTPOS=7000305;//jseditor.UIForm:305
        if (expr instanceof Array) {
          return _this.parseArray(expr);
        } else {
          //$LASTPOS=7000367;//jseditor.UIForm:367
          if (typeof  expr=="string") {
            return _this.parseString(expr);
          } else {
            //$LASTPOS=7000430;//jseditor.UIForm:430
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
        
        //$LASTPOS=7000305;//jseditor.UIForm:305
        if (expr instanceof Array) {
          _thread.retVal=_this.parseArray(expr);return;
          
        } else {
          //$LASTPOS=7000367;//jseditor.UIForm:367
          if (typeof  expr=="string") {
            _thread.retVal=_this.parseString(expr);return;
            
          } else {
            //$LASTPOS=7000430;//jseditor.UIForm:430
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
        
        //$LASTPOS=7000537;//jseditor.UIForm:537
        tag = a[0];
        
        //$LASTPOS=7000556;//jseditor.UIForm:556
        i = 0;
        
        //$LASTPOS=7000570;//jseditor.UIForm:570
        svjq = _this._jqdom;
        
        //$LASTPOS=7000596;//jseditor.UIForm:596
        if (typeof  tag=="string") {
          //$LASTPOS=7000633;//jseditor.UIForm:633
          res=_this._jqdom=$("<"+tag+">");
          //$LASTPOS=7000669;//jseditor.UIForm:669
          if (! _this.jqdom) {
            //$LASTPOS=7000681;//jseditor.UIForm:681
            _this.jqdom=_this._jqdom;
          }
          //$LASTPOS=7000704;//jseditor.UIForm:704
          i=1;
          //$LASTPOS=7000718;//jseditor.UIForm:718
          if (typeof  a[i]=="object"&&! (a[i] instanceof Array)&&! (a[i] instanceof $)) {
            //$LASTPOS=7000833;//jseditor.UIForm:833
            _this.parseAttr(a[i]);
            //$LASTPOS=7000863;//jseditor.UIForm:863
            i++;
            
          }
          
        }
        //$LASTPOS=7000891;//jseditor.UIForm:891
        while (i<a.length) {
          //$LASTPOS=7000921;//jseditor.UIForm:921
          s = _this.parse(a[i]);
          
          //$LASTPOS=7000949;//jseditor.UIForm:949
          if (s) {
            //$LASTPOS=7000956;//jseditor.UIForm:956
            res.append(s);
          }
          //$LASTPOS=7000980;//jseditor.UIForm:980
          i++;
          
        }
        //$LASTPOS=7000997;//jseditor.UIForm:997
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
        
        //$LASTPOS=7000537;//jseditor.UIForm:537
        tag = a[0];
        
        //$LASTPOS=7000556;//jseditor.UIForm:556
        i = 0;
        
        //$LASTPOS=7000570;//jseditor.UIForm:570
        svjq = _this._jqdom;
        
        
        _thread.enter(function _trc_UIForm_ent_parseArray(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=7000596;//jseditor.UIForm:596
              if (!(typeof  tag=="string")) { __pc=3; break; }
              //$LASTPOS=7000633;//jseditor.UIForm:633
              res=_this._jqdom=$("<"+tag+">");
              //$LASTPOS=7000669;//jseditor.UIForm:669
              if (! _this.jqdom) {
                //$LASTPOS=7000681;//jseditor.UIForm:681
                _this.jqdom=_this._jqdom;
              }
              //$LASTPOS=7000704;//jseditor.UIForm:704
              i=1;
              //$LASTPOS=7000718;//jseditor.UIForm:718
              if (!(typeof  a[i]=="object"&&! (a[i] instanceof Array)&&! (a[i] instanceof $))) { __pc=2; break; }
              //$LASTPOS=7000833;//jseditor.UIForm:833
              _this.fiber$parseAttr(_thread, a[i]);
              __pc=1;return;
            case 1:
              
              //$LASTPOS=7000863;//jseditor.UIForm:863
              i++;
            case 2:
              
            case 3:
              
              //$LASTPOS=7000891;//jseditor.UIForm:891
            case 4:
              if (!(i<a.length)) { __pc=6; break; }
              //$LASTPOS=7000921;//jseditor.UIForm:921
              _this.fiber$parse(_thread, a[i]);
              __pc=5;return;
            case 5:
              s=_thread.retVal;
              
              //$LASTPOS=7000949;//jseditor.UIForm:949
              if (s) {
                //$LASTPOS=7000956;//jseditor.UIForm:956
                res.append(s);
              }
              //$LASTPOS=7000980;//jseditor.UIForm:980
              i++;
              __pc=4;break;
            case 6:
              
              //$LASTPOS=7000997;//jseditor.UIForm:997
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
        var _it_42;
        var eType;
        var li;
        var _it_43;
        
        //$LASTPOS=7001060;//jseditor.UIForm:1060
        _it_42=Tonyu.iterator(o,2);
        while(_it_42.next()) {
          k=_it_42[0];
          v=_it_42[1];
          
          //$LASTPOS=7001090;//jseditor.UIForm:1090
          if (k=="on") {
            //$LASTPOS=7001118;//jseditor.UIForm:1118
            _it_43=Tonyu.iterator(o.on,2);
            while(_it_43.next()) {
              eType=_it_43[0];
              li=_it_43[1];
              
              //$LASTPOS=7001145;//jseditor.UIForm:1145
              _this.parseOn(eType,li);
            }
            
          } else {
            //$LASTPOS=7001180;//jseditor.UIForm:1180
            if (k=="name") {
              //$LASTPOS=7001210;//jseditor.UIForm:1210
              _this[v]=_this._jqdom;
              //$LASTPOS=7001239;//jseditor.UIForm:1239
              _this._jqdom.attr(k,v);
              
            } else {
              //$LASTPOS=7001273;//jseditor.UIForm:1273
              if (k=="css"&&v!=null) {
                //$LASTPOS=7001313;//jseditor.UIForm:1313
                _this._jqdom.css(v);
                
              } else {
                //$LASTPOS=7001344;//jseditor.UIForm:1344
                if (Util.startsWith(k,"$")) {
                  //$LASTPOS=7001388;//jseditor.UIForm:1388
                  if (k=="$bind") {
                    
                    
                  }
                  
                } else {
                  //$LASTPOS=7001455;//jseditor.UIForm:1455
                  if (v!=null) {
                    //$LASTPOS=7001483;//jseditor.UIForm:1483
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
        var _it_42;
        var eType;
        var li;
        var _it_43;
        
        
        _thread.enter(function _trc_UIForm_ent_parseAttr(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=7001060;//jseditor.UIForm:1060
              _it_42=Tonyu.iterator(o,2);
            case 1:
              if (!(_it_42.next())) { __pc=7; break; }
              k=_it_42[0];
              v=_it_42[1];
              
              //$LASTPOS=7001090;//jseditor.UIForm:1090
              if (!(k=="on")) { __pc=5; break; }
              //$LASTPOS=7001118;//jseditor.UIForm:1118
              _it_43=Tonyu.iterator(o.on,2);
            case 2:
              if (!(_it_43.next())) { __pc=4; break; }
              eType=_it_43[0];
              li=_it_43[1];
              
              //$LASTPOS=7001145;//jseditor.UIForm:1145
              _this.fiber$parseOn(_thread, eType, li);
              __pc=3;return;
            case 3:
              
              __pc=2;break;
            case 4:
              
              __pc=6;break;
            case 5:
              //$LASTPOS=7001180;//jseditor.UIForm:1180
              if (k=="name") {
                //$LASTPOS=7001210;//jseditor.UIForm:1210
                _this[v]=_this._jqdom;
                //$LASTPOS=7001239;//jseditor.UIForm:1239
                _this._jqdom.attr(k,v);
                
              } else {
                //$LASTPOS=7001273;//jseditor.UIForm:1273
                if (k=="css"&&v!=null) {
                  //$LASTPOS=7001313;//jseditor.UIForm:1313
                  _this._jqdom.css(v);
                  
                } else {
                  //$LASTPOS=7001344;//jseditor.UIForm:1344
                  if (Util.startsWith(k,"$")) {
                    //$LASTPOS=7001388;//jseditor.UIForm:1388
                    if (k=="$bind") {
                      
                      
                    }
                    
                  } else {
                    //$LASTPOS=7001455;//jseditor.UIForm:1455
                    if (v!=null) {
                      //$LASTPOS=7001483;//jseditor.UIForm:1483
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
        
        //$LASTPOS=7001558;//jseditor.UIForm:1558
        if (! li) {
          return _this;
        }
        //$LASTPOS=7001580;//jseditor.UIForm:1580
        if (eType=="enterkey") {
          //$LASTPOS=7001614;//jseditor.UIForm:1614
          _this._jqdom.on("keypress",(function anonymous_1636(ev) {
            
            //$LASTPOS=7001657;//jseditor.UIForm:1657
            if (ev.which==13) {
              //$LASTPOS=7001675;//jseditor.UIForm:1675
              li.apply(_this._jqdom,arguments);
            }
          }));
          
        } else {
          //$LASTPOS=7001727;//jseditor.UIForm:1727
          if (eType=="realtimechange") {
            //$LASTPOS=7001767;//jseditor.UIForm:1767
            first = true;
            
            //$LASTPOS=7001798;//jseditor.UIForm:1798
            _this.listeners.push((function anonymous_1813() {
              var cur;
              
              
              //$LASTPOS=7001854;//jseditor.UIForm:1854
              if (_this.o.type=="checkbox") {
                //$LASTPOS=7001897;//jseditor.UIForm:1897
                cur=! ! _this._jqdom.prop("checked");
                
              } else {
                //$LASTPOS=7001966;//jseditor.UIForm:1966
                cur=_this._jqdom.val();
                
              }
              //$LASTPOS=7002012;//jseditor.UIForm:2012
              if (first||prev!=cur) {
                //$LASTPOS=7002055;//jseditor.UIForm:2055
                li.apply(_this._jqdom,[cur,prev]);
                //$LASTPOS=7002101;//jseditor.UIForm:2101
                prev=cur;
                
              }
              //$LASTPOS=7002139;//jseditor.UIForm:2139
              first=false;
            }));
            
          } else {
            //$LASTPOS=7002187;//jseditor.UIForm:2187
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
        
        //$LASTPOS=7001558;//jseditor.UIForm:1558
        if (! li) {
          _thread.retVal=_this;return;
          
        }
        //$LASTPOS=7001580;//jseditor.UIForm:1580
        if (eType=="enterkey") {
          //$LASTPOS=7001614;//jseditor.UIForm:1614
          _this._jqdom.on("keypress",(function anonymous_1636(ev) {
            
            //$LASTPOS=7001657;//jseditor.UIForm:1657
            if (ev.which==13) {
              //$LASTPOS=7001675;//jseditor.UIForm:1675
              li.apply(_this._jqdom,arguments);
            }
          }));
          
        } else {
          //$LASTPOS=7001727;//jseditor.UIForm:1727
          if (eType=="realtimechange") {
            //$LASTPOS=7001767;//jseditor.UIForm:1767
            first = true;
            
            //$LASTPOS=7001798;//jseditor.UIForm:1798
            _this.listeners.push((function anonymous_1813() {
              var cur;
              
              
              //$LASTPOS=7001854;//jseditor.UIForm:1854
              if (_this.o.type=="checkbox") {
                //$LASTPOS=7001897;//jseditor.UIForm:1897
                cur=! ! _this._jqdom.prop("checked");
                
              } else {
                //$LASTPOS=7001966;//jseditor.UIForm:1966
                cur=_this._jqdom.val();
                
              }
              //$LASTPOS=7002012;//jseditor.UIForm:2012
              if (first||prev!=cur) {
                //$LASTPOS=7002055;//jseditor.UIForm:2055
                li.apply(_this._jqdom,[cur,prev]);
                //$LASTPOS=7002101;//jseditor.UIForm:2101
                prev=cur;
                
              }
              //$LASTPOS=7002139;//jseditor.UIForm:2139
              first=false;
            }));
            
          } else {
            //$LASTPOS=7002187;//jseditor.UIForm:2187
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
    decls: {"methods":{"main":{"nowait":false},"new":{"nowait":false},"appendTo":{"nowait":false},"dialog":{"nowait":false},"tag":{"nowait":false},"parse":{"nowait":false},"parseArray":{"nowait":false},"parseAttr":{"nowait":false},"parseOn":{"nowait":false},"parseString":{"nowait":false}}}
  });
});