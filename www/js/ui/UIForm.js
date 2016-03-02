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
        
        //$LASTPOS=12000041;//jseditor.UIForm:41
        Tonyu.classes.jseditor.Base.apply( _this, [o]);
        //$LASTPOS=12000056;//jseditor.UIForm:56
        _this.listeners=[];
        //$LASTPOS=12000075;//jseditor.UIForm:75
        _this.main();
      },
      appendTo :function _trc_UIForm_appendTo(dom) {
        "use strict";
        var _this=this;
        
        //$LASTPOS=12000109;//jseditor.UIForm:109
        _this.jqdom.appendTo(dom);
      },
      fiber$appendTo :function _trc_UIForm_f_appendTo(_thread,dom) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=12000109;//jseditor.UIForm:109
        _this.jqdom.appendTo(dom);
        
        _thread.retVal=_this;return;
      },
      dialog :function _trc_UIForm_dialog(options) {
        "use strict";
        var _this=this;
        
        //$LASTPOS=12000158;//jseditor.UIForm:158
        _this.jqdom.dialog(options);
      },
      fiber$dialog :function _trc_UIForm_f_dialog(_thread,options) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=12000158;//jseditor.UIForm:158
        _this.jqdom.dialog(options);
        
        _thread.retVal=_this;return;
      },
      tag :function _trc_UIForm_tag() {
        "use strict";
        var _this=this;
        var d;
        
        //$LASTPOS=12000199;//jseditor.UIForm:199
        d = _this.parseArray(arguments);
        
        //$LASTPOS=12000233;//jseditor.UIForm:233
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
              //$LASTPOS=12000199;//jseditor.UIForm:199
              _this.fiber$parseArray(_thread, _arguments);
              __pc=1;return;
            case 1:
              d=_thread.retVal;
              
              //$LASTPOS=12000233;//jseditor.UIForm:233
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
        
        //$LASTPOS=12000305;//jseditor.UIForm:305
        sv = _this._jqdom;
        
        //$LASTPOS=12000325;//jseditor.UIForm:325
        _this._jqdom=elem;
        //$LASTPOS=12000343;//jseditor.UIForm:343
        func();
        //$LASTPOS=12000356;//jseditor.UIForm:356
        _this._jqdom=sv;
      },
      fiber$change :function _trc_UIForm_f_change(_thread,elem,func) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var sv;
        
        //$LASTPOS=12000305;//jseditor.UIForm:305
        sv = _this._jqdom;
        
        //$LASTPOS=12000325;//jseditor.UIForm:325
        _this._jqdom=elem;
        //$LASTPOS=12000343;//jseditor.UIForm:343
        func();
        //$LASTPOS=12000356;//jseditor.UIForm:356
        _this._jqdom=sv;
        
        _thread.retVal=_this;return;
      },
      parse :function _trc_UIForm_parse(expr) {
        "use strict";
        var _this=this;
        
        //$LASTPOS=12000399;//jseditor.UIForm:399
        if (expr instanceof Array) {
          return _this.parseArray(expr);
        } else {
          //$LASTPOS=12000461;//jseditor.UIForm:461
          if (typeof  expr=="string") {
            return _this.parseString(expr);
          } else {
            //$LASTPOS=12000524;//jseditor.UIForm:524
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
        
        //$LASTPOS=12000399;//jseditor.UIForm:399
        if (expr instanceof Array) {
          _thread.retVal=_this.parseArray(expr);return;
          
        } else {
          //$LASTPOS=12000461;//jseditor.UIForm:461
          if (typeof  expr=="string") {
            _thread.retVal=_this.parseString(expr);return;
            
          } else {
            //$LASTPOS=12000524;//jseditor.UIForm:524
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
        
        //$LASTPOS=12000631;//jseditor.UIForm:631
        tag = a[0];
        
        //$LASTPOS=12000650;//jseditor.UIForm:650
        i = 0;
        
        //$LASTPOS=12000664;//jseditor.UIForm:664
        svjq = _this._jqdom;
        
        //$LASTPOS=12000690;//jseditor.UIForm:690
        if (typeof  tag=="string") {
          //$LASTPOS=12000727;//jseditor.UIForm:727
          res=_this._jqdom=$("<"+tag+">");
          //$LASTPOS=12000763;//jseditor.UIForm:763
          if (! _this.jqdom) {
            //$LASTPOS=12000775;//jseditor.UIForm:775
            _this.jqdom=_this._jqdom;
          }
          //$LASTPOS=12000798;//jseditor.UIForm:798
          i=1;
          //$LASTPOS=12000812;//jseditor.UIForm:812
          if (typeof  a[i]=="object"&&! (a[i] instanceof Array)&&! (a[i] instanceof $)) {
            //$LASTPOS=12000927;//jseditor.UIForm:927
            _this.parseAttr(a[i]);
            //$LASTPOS=12000957;//jseditor.UIForm:957
            i++;
            
          }
          
        }
        //$LASTPOS=12000985;//jseditor.UIForm:985
        while (i<a.length) {
          //$LASTPOS=12001015;//jseditor.UIForm:1015
          s = _this.parse(a[i]);
          
          //$LASTPOS=12001043;//jseditor.UIForm:1043
          if (s) {
            //$LASTPOS=12001050;//jseditor.UIForm:1050
            res.append(s);
          }
          //$LASTPOS=12001074;//jseditor.UIForm:1074
          i++;
          
        }
        //$LASTPOS=12001091;//jseditor.UIForm:1091
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
        
        //$LASTPOS=12000631;//jseditor.UIForm:631
        tag = a[0];
        
        //$LASTPOS=12000650;//jseditor.UIForm:650
        i = 0;
        
        //$LASTPOS=12000664;//jseditor.UIForm:664
        svjq = _this._jqdom;
        
        
        _thread.enter(function _trc_UIForm_ent_parseArray(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=12000690;//jseditor.UIForm:690
              if (!(typeof  tag=="string")) { __pc=3; break; }
              //$LASTPOS=12000727;//jseditor.UIForm:727
              res=_this._jqdom=$("<"+tag+">");
              //$LASTPOS=12000763;//jseditor.UIForm:763
              if (! _this.jqdom) {
                //$LASTPOS=12000775;//jseditor.UIForm:775
                _this.jqdom=_this._jqdom;
              }
              //$LASTPOS=12000798;//jseditor.UIForm:798
              i=1;
              //$LASTPOS=12000812;//jseditor.UIForm:812
              if (!(typeof  a[i]=="object"&&! (a[i] instanceof Array)&&! (a[i] instanceof $))) { __pc=2; break; }
              //$LASTPOS=12000927;//jseditor.UIForm:927
              _this.fiber$parseAttr(_thread, a[i]);
              __pc=1;return;
            case 1:
              
              //$LASTPOS=12000957;//jseditor.UIForm:957
              i++;
            case 2:
              
            case 3:
              
              //$LASTPOS=12000985;//jseditor.UIForm:985
            case 4:
              if (!(i<a.length)) { __pc=6; break; }
              //$LASTPOS=12001015;//jseditor.UIForm:1015
              _this.fiber$parse(_thread, a[i]);
              __pc=5;return;
            case 5:
              s=_thread.retVal;
              
              //$LASTPOS=12001043;//jseditor.UIForm:1043
              if (s) {
                //$LASTPOS=12001050;//jseditor.UIForm:1050
                res.append(s);
              }
              //$LASTPOS=12001074;//jseditor.UIForm:1074
              i++;
              __pc=4;break;
            case 6:
              
              //$LASTPOS=12001091;//jseditor.UIForm:1091
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
        var _it_93;
        var eType;
        var li;
        var _it_94;
        
        //$LASTPOS=12001154;//jseditor.UIForm:1154
        _it_93=Tonyu.iterator(o,2);
        while(_it_93.next()) {
          k=_it_93[0];
          v=_it_93[1];
          
          //$LASTPOS=12001184;//jseditor.UIForm:1184
          if (k=="on") {
            //$LASTPOS=12001212;//jseditor.UIForm:1212
            _it_94=Tonyu.iterator(o.on,2);
            while(_it_94.next()) {
              eType=_it_94[0];
              li=_it_94[1];
              
              //$LASTPOS=12001239;//jseditor.UIForm:1239
              _this.parseOn(eType,li);
            }
            
          } else {
            //$LASTPOS=12001274;//jseditor.UIForm:1274
            if (k=="name") {
              //$LASTPOS=12001304;//jseditor.UIForm:1304
              _this[v]=_this._jqdom;
              //$LASTPOS=12001333;//jseditor.UIForm:1333
              _this._jqdom.attr(k,v);
              
            } else {
              //$LASTPOS=12001367;//jseditor.UIForm:1367
              if (k=="css"&&v!=null) {
                //$LASTPOS=12001407;//jseditor.UIForm:1407
                _this._jqdom.css(v);
                
              } else {
                //$LASTPOS=12001438;//jseditor.UIForm:1438
                if (Util.startsWith(k,"$")) {
                  //$LASTPOS=12001482;//jseditor.UIForm:1482
                  if (k=="$bind") {
                    
                    
                  }
                  
                } else {
                  //$LASTPOS=12001549;//jseditor.UIForm:1549
                  if (v!=null) {
                    //$LASTPOS=12001577;//jseditor.UIForm:1577
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
        var _it_93;
        var eType;
        var li;
        var _it_94;
        
        
        _thread.enter(function _trc_UIForm_ent_parseAttr(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=12001154;//jseditor.UIForm:1154
              _it_93=Tonyu.iterator(o,2);
            case 1:
              if (!(_it_93.next())) { __pc=7; break; }
              k=_it_93[0];
              v=_it_93[1];
              
              //$LASTPOS=12001184;//jseditor.UIForm:1184
              if (!(k=="on")) { __pc=5; break; }
              //$LASTPOS=12001212;//jseditor.UIForm:1212
              _it_94=Tonyu.iterator(o.on,2);
            case 2:
              if (!(_it_94.next())) { __pc=4; break; }
              eType=_it_94[0];
              li=_it_94[1];
              
              //$LASTPOS=12001239;//jseditor.UIForm:1239
              _this.fiber$parseOn(_thread, eType, li);
              __pc=3;return;
            case 3:
              
              __pc=2;break;
            case 4:
              
              __pc=6;break;
            case 5:
              //$LASTPOS=12001274;//jseditor.UIForm:1274
              if (k=="name") {
                //$LASTPOS=12001304;//jseditor.UIForm:1304
                _this[v]=_this._jqdom;
                //$LASTPOS=12001333;//jseditor.UIForm:1333
                _this._jqdom.attr(k,v);
                
              } else {
                //$LASTPOS=12001367;//jseditor.UIForm:1367
                if (k=="css"&&v!=null) {
                  //$LASTPOS=12001407;//jseditor.UIForm:1407
                  _this._jqdom.css(v);
                  
                } else {
                  //$LASTPOS=12001438;//jseditor.UIForm:1438
                  if (Util.startsWith(k,"$")) {
                    //$LASTPOS=12001482;//jseditor.UIForm:1482
                    if (k=="$bind") {
                      
                      
                    }
                    
                  } else {
                    //$LASTPOS=12001549;//jseditor.UIForm:1549
                    if (v!=null) {
                      //$LASTPOS=12001577;//jseditor.UIForm:1577
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
        
        //$LASTPOS=12001652;//jseditor.UIForm:1652
        if (! li) {
          return _this;
        }
        //$LASTPOS=12001674;//jseditor.UIForm:1674
        if (eType=="enterkey") {
          //$LASTPOS=12001708;//jseditor.UIForm:1708
          _this._jqdom.on("keypress",(function anonymous_1730(ev) {
            
            //$LASTPOS=12001751;//jseditor.UIForm:1751
            if (ev.which==13) {
              //$LASTPOS=12001769;//jseditor.UIForm:1769
              li.apply(_this._jqdom,arguments);
            }
          }));
          
        } else {
          //$LASTPOS=12001821;//jseditor.UIForm:1821
          if (eType=="realtimechange") {
            //$LASTPOS=12001861;//jseditor.UIForm:1861
            first = true;
            
            //$LASTPOS=12001892;//jseditor.UIForm:1892
            _this.listeners.push((function anonymous_1907() {
              var cur;
              
              
              //$LASTPOS=12001948;//jseditor.UIForm:1948
              if (_this.o.type=="checkbox") {
                //$LASTPOS=12001991;//jseditor.UIForm:1991
                cur=! ! _this._jqdom.prop("checked");
                
              } else {
                //$LASTPOS=12002060;//jseditor.UIForm:2060
                cur=_this._jqdom.val();
                
              }
              //$LASTPOS=12002106;//jseditor.UIForm:2106
              if (first||prev!=cur) {
                //$LASTPOS=12002149;//jseditor.UIForm:2149
                li.apply(_this._jqdom,[cur,prev]);
                //$LASTPOS=12002195;//jseditor.UIForm:2195
                prev=cur;
                
              }
              //$LASTPOS=12002233;//jseditor.UIForm:2233
              first=false;
            }));
            
          } else {
            //$LASTPOS=12002281;//jseditor.UIForm:2281
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
        
        //$LASTPOS=12001652;//jseditor.UIForm:1652
        if (! li) {
          _thread.retVal=_this;return;
          
        }
        //$LASTPOS=12001674;//jseditor.UIForm:1674
        if (eType=="enterkey") {
          //$LASTPOS=12001708;//jseditor.UIForm:1708
          _this._jqdom.on("keypress",(function anonymous_1730(ev) {
            
            //$LASTPOS=12001751;//jseditor.UIForm:1751
            if (ev.which==13) {
              //$LASTPOS=12001769;//jseditor.UIForm:1769
              li.apply(_this._jqdom,arguments);
            }
          }));
          
        } else {
          //$LASTPOS=12001821;//jseditor.UIForm:1821
          if (eType=="realtimechange") {
            //$LASTPOS=12001861;//jseditor.UIForm:1861
            first = true;
            
            //$LASTPOS=12001892;//jseditor.UIForm:1892
            _this.listeners.push((function anonymous_1907() {
              var cur;
              
              
              //$LASTPOS=12001948;//jseditor.UIForm:1948
              if (_this.o.type=="checkbox") {
                //$LASTPOS=12001991;//jseditor.UIForm:1991
                cur=! ! _this._jqdom.prop("checked");
                
              } else {
                //$LASTPOS=12002060;//jseditor.UIForm:2060
                cur=_this._jqdom.val();
                
              }
              //$LASTPOS=12002106;//jseditor.UIForm:2106
              if (first||prev!=cur) {
                //$LASTPOS=12002149;//jseditor.UIForm:2149
                li.apply(_this._jqdom,[cur,prev]);
                //$LASTPOS=12002195;//jseditor.UIForm:2195
                prev=cur;
                
              }
              //$LASTPOS=12002233;//jseditor.UIForm:2233
              first=false;
            }));
            
          } else {
            //$LASTPOS=12002281;//jseditor.UIForm:2281
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