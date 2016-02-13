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
      parse :function _trc_UIForm_parse(expr) {
        "use strict";
        var _this=this;
        
        //$LASTPOS=7000211;//jseditor.UIForm:211
        if (expr instanceof Array) {
          return _this.parseArray(expr);
        } else {
          //$LASTPOS=7000273;//jseditor.UIForm:273
          if (typeof  expr=="string") {
            return _this.parseString(expr);
          } else {
            return expr;
          }
        }
      },
      fiber$parse :function _trc_UIForm_f_parse(_thread,expr) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=7000211;//jseditor.UIForm:211
        if (expr instanceof Array) {
          _thread.retVal=_this.parseArray(expr);return;
          
        } else {
          //$LASTPOS=7000273;//jseditor.UIForm:273
          if (typeof  expr=="string") {
            _thread.retVal=_this.parseString(expr);return;
            
          } else {
            _thread.retVal=expr;return;
            
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
        
        //$LASTPOS=7000383;//jseditor.UIForm:383
        tag = a[0];
        
        //$LASTPOS=7000402;//jseditor.UIForm:402
        i = 0;
        
        //$LASTPOS=7000416;//jseditor.UIForm:416
        svjq = _this.jqdom;
        
        //$LASTPOS=7000441;//jseditor.UIForm:441
        if (typeof  tag=="string") {
          //$LASTPOS=7000478;//jseditor.UIForm:478
          res=_this.jqdom=$("<"+tag+">");
          //$LASTPOS=7000513;//jseditor.UIForm:513
          i=1;
          //$LASTPOS=7000527;//jseditor.UIForm:527
          if (typeof  a[i]=="object"&&! (a[i] instanceof Array)&&! (a[i] instanceof $)) {
            //$LASTPOS=7000642;//jseditor.UIForm:642
            _this.parseAttr(a[i]);
            //$LASTPOS=7000672;//jseditor.UIForm:672
            i++;
            
          }
          
        }
        //$LASTPOS=7000700;//jseditor.UIForm:700
        while (i<a.length) {
          //$LASTPOS=7000730;//jseditor.UIForm:730
          res.append(_this.parse(a[i]));
          //$LASTPOS=7000764;//jseditor.UIForm:764
          i++;
          
        }
        //$LASTPOS=7000781;//jseditor.UIForm:781
        if (svjq) {
          //$LASTPOS=7000791;//jseditor.UIForm:791
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
        
        //$LASTPOS=7000383;//jseditor.UIForm:383
        tag = a[0];
        
        //$LASTPOS=7000402;//jseditor.UIForm:402
        i = 0;
        
        //$LASTPOS=7000416;//jseditor.UIForm:416
        svjq = _this.jqdom;
        
        
        _thread.enter(function _trc_UIForm_ent_parseArray(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=7000441;//jseditor.UIForm:441
              if (!(typeof  tag=="string")) { __pc=3; break; }
              //$LASTPOS=7000478;//jseditor.UIForm:478
              res=_this.jqdom=$("<"+tag+">");
              //$LASTPOS=7000513;//jseditor.UIForm:513
              i=1;
              //$LASTPOS=7000527;//jseditor.UIForm:527
              if (!(typeof  a[i]=="object"&&! (a[i] instanceof Array)&&! (a[i] instanceof $))) { __pc=2; break; }
              //$LASTPOS=7000642;//jseditor.UIForm:642
              _this.fiber$parseAttr(_thread, a[i]);
              __pc=1;return;
            case 1:
              
              //$LASTPOS=7000672;//jseditor.UIForm:672
              i++;
            case 2:
              
            case 3:
              
              //$LASTPOS=7000700;//jseditor.UIForm:700
            case 4:
              if (!(i<a.length)) { __pc=5; break; }
              {
                //$LASTPOS=7000730;//jseditor.UIForm:730
                res.append(_this.parse(a[i]));
                //$LASTPOS=7000764;//jseditor.UIForm:764
                i++;
              }
              __pc=4;break;
            case 5:
              
              //$LASTPOS=7000781;//jseditor.UIForm:781
              if (svjq) {
                //$LASTPOS=7000791;//jseditor.UIForm:791
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
        var _it_40;
        var eType;
        var li;
        var _it_41;
        
        //$LASTPOS=7000853;//jseditor.UIForm:853
        _it_40=Tonyu.iterator(o,2);
        while(_it_40.next()) {
          k=_it_40[0];
          v=_it_40[1];
          
          //$LASTPOS=7000883;//jseditor.UIForm:883
          if (k=="on") {
            //$LASTPOS=7000911;//jseditor.UIForm:911
            _it_41=Tonyu.iterator(o.on,2);
            while(_it_41.next()) {
              eType=_it_41[0];
              li=_it_41[1];
              
              //$LASTPOS=7000938;//jseditor.UIForm:938
              _this.parseOn(eType,li);
            }
            
          } else {
            //$LASTPOS=7000973;//jseditor.UIForm:973
            if (k=="name") {
              //$LASTPOS=7001003;//jseditor.UIForm:1003
              _this[v]=_this.jqdom;
              //$LASTPOS=7001031;//jseditor.UIForm:1031
              _this.jqdom.attr(k,v);
              
            } else {
              //$LASTPOS=7001064;//jseditor.UIForm:1064
              if (k=="css"&&v!=null) {
                //$LASTPOS=7001104;//jseditor.UIForm:1104
                _this.jqdom.css(v);
                
              } else {
                //$LASTPOS=7001134;//jseditor.UIForm:1134
                if (Util.startsWith(k,"$")) {
                  //$LASTPOS=7001178;//jseditor.UIForm:1178
                  if (k=="$bind") {
                    
                    
                  }
                  
                } else {
                  //$LASTPOS=7001245;//jseditor.UIForm:1245
                  if (v!=null) {
                    //$LASTPOS=7001273;//jseditor.UIForm:1273
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
        var _it_40;
        var eType;
        var li;
        var _it_41;
        
        
        _thread.enter(function _trc_UIForm_ent_parseAttr(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=7000853;//jseditor.UIForm:853
              _it_40=Tonyu.iterator(o,2);
            case 1:
              if (!(_it_40.next())) { __pc=7; break; }
              k=_it_40[0];
              v=_it_40[1];
              
              //$LASTPOS=7000883;//jseditor.UIForm:883
              if (!(k=="on")) { __pc=5; break; }
              //$LASTPOS=7000911;//jseditor.UIForm:911
              _it_41=Tonyu.iterator(o.on,2);
            case 2:
              if (!(_it_41.next())) { __pc=4; break; }
              eType=_it_41[0];
              li=_it_41[1];
              
              //$LASTPOS=7000938;//jseditor.UIForm:938
              _this.fiber$parseOn(_thread, eType, li);
              __pc=3;return;
            case 3:
              
              __pc=2;break;
            case 4:
              
              __pc=6;break;
            case 5:
              //$LASTPOS=7000973;//jseditor.UIForm:973
              if (k=="name") {
                //$LASTPOS=7001003;//jseditor.UIForm:1003
                _this[v]=_this.jqdom;
                //$LASTPOS=7001031;//jseditor.UIForm:1031
                _this.jqdom.attr(k,v);
                
              } else {
                //$LASTPOS=7001064;//jseditor.UIForm:1064
                if (k=="css"&&v!=null) {
                  //$LASTPOS=7001104;//jseditor.UIForm:1104
                  _this.jqdom.css(v);
                  
                } else {
                  //$LASTPOS=7001134;//jseditor.UIForm:1134
                  if (Util.startsWith(k,"$")) {
                    //$LASTPOS=7001178;//jseditor.UIForm:1178
                    if (k=="$bind") {
                      
                      
                    }
                    
                  } else {
                    //$LASTPOS=7001245;//jseditor.UIForm:1245
                    if (v!=null) {
                      //$LASTPOS=7001273;//jseditor.UIForm:1273
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
        
        //$LASTPOS=7001347;//jseditor.UIForm:1347
        if (! li) {
          return _this;
        }
        //$LASTPOS=7001369;//jseditor.UIForm:1369
        if (eType=="enterkey") {
          //$LASTPOS=7001403;//jseditor.UIForm:1403
          _this.jqdom.on("keypress",(function anonymous_1424(ev) {
            
            //$LASTPOS=7001445;//jseditor.UIForm:1445
            if (ev.which==13) {
              //$LASTPOS=7001463;//jseditor.UIForm:1463
              li.apply(_this.jqdom,arguments);
            }
          }));
          
        } else {
          //$LASTPOS=7001514;//jseditor.UIForm:1514
          if (eType=="realtimechange") {
            //$LASTPOS=7001554;//jseditor.UIForm:1554
            first = true;
            
            //$LASTPOS=7001585;//jseditor.UIForm:1585
            _this.listeners.push((function anonymous_1600() {
              var cur;
              
              
              //$LASTPOS=7001641;//jseditor.UIForm:1641
              if (_this.o.type=="checkbox") {
                //$LASTPOS=7001684;//jseditor.UIForm:1684
                cur=! ! _this.jqdom.prop("checked");
                
              } else {
                //$LASTPOS=7001752;//jseditor.UIForm:1752
                cur=_this.jqdom.val();
                
              }
              //$LASTPOS=7001797;//jseditor.UIForm:1797
              if (first||prev!=cur) {
                //$LASTPOS=7001840;//jseditor.UIForm:1840
                li.apply(_this.jqdom,[cur,prev]);
                //$LASTPOS=7001885;//jseditor.UIForm:1885
                prev=cur;
                
              }
              //$LASTPOS=7001923;//jseditor.UIForm:1923
              first=false;
            }));
            
          } else {
            //$LASTPOS=7001971;//jseditor.UIForm:1971
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
        
        //$LASTPOS=7001347;//jseditor.UIForm:1347
        if (! li) {
          _thread.retVal=_this;return;
          
        }
        //$LASTPOS=7001369;//jseditor.UIForm:1369
        if (eType=="enterkey") {
          //$LASTPOS=7001403;//jseditor.UIForm:1403
          _this.jqdom.on("keypress",(function anonymous_1424(ev) {
            
            //$LASTPOS=7001445;//jseditor.UIForm:1445
            if (ev.which==13) {
              //$LASTPOS=7001463;//jseditor.UIForm:1463
              li.apply(_this.jqdom,arguments);
            }
          }));
          
        } else {
          //$LASTPOS=7001514;//jseditor.UIForm:1514
          if (eType=="realtimechange") {
            //$LASTPOS=7001554;//jseditor.UIForm:1554
            first = true;
            
            //$LASTPOS=7001585;//jseditor.UIForm:1585
            _this.listeners.push((function anonymous_1600() {
              var cur;
              
              
              //$LASTPOS=7001641;//jseditor.UIForm:1641
              if (_this.o.type=="checkbox") {
                //$LASTPOS=7001684;//jseditor.UIForm:1684
                cur=! ! _this.jqdom.prop("checked");
                
              } else {
                //$LASTPOS=7001752;//jseditor.UIForm:1752
                cur=_this.jqdom.val();
                
              }
              //$LASTPOS=7001797;//jseditor.UIForm:1797
              if (first||prev!=cur) {
                //$LASTPOS=7001840;//jseditor.UIForm:1840
                li.apply(_this.jqdom,[cur,prev]);
                //$LASTPOS=7001885;//jseditor.UIForm:1885
                prev=cur;
                
              }
              //$LASTPOS=7001923;//jseditor.UIForm:1923
              first=false;
            }));
            
          } else {
            //$LASTPOS=7001971;//jseditor.UIForm:1971
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
    decls: {"methods":{"main":{"nowait":false},"new":{"nowait":false},"appendTo":{"nowait":false},"dialog":{"nowait":false},"parse":{"nowait":false},"parseArray":{"nowait":false},"parseAttr":{"nowait":false},"parseOn":{"nowait":false},"parseString":{"nowait":false}}}
  });
});