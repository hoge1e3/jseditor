define(function (require) {
  var Tonyu=require('Tonyu');
  var EventHandler=require('EventHandler');
  return Tonyu.klass.define({
    fullName: 'jseditor.EventMod',
    shortName: 'EventMod',
    namespace: 'jseditor',
    includes: [],
    methods: {
      main :function _trc_EventMod_main() {
        "use strict";
        var _this=this;
        
      },
      fiber$main :function _trc_EventMod_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        _thread.retVal=_this;return;
      },
      initEventMod :function _trc_EventMod_initEventMod() {
        "use strict";
        var _this=this;
        
        //$LASTPOS=2000063;//jseditor.EventMod:63
        if (_this._eventHandlers) {
          return _this;
        }
        //$LASTPOS=2000156;//jseditor.EventMod:156
        _this._eventHandlers={};
        //$LASTPOS=2000179;//jseditor.EventMod:179
        _this.on("die",Tonyu.bindFunc(_this,_this.releaseEventMod));
      },
      releaseEventMod :function _trc_EventMod_releaseEventMod() {
        "use strict";
        var _this=this;
        var k;
        var v;
        var _it_2;
        
        //$LASTPOS=2000243;//jseditor.EventMod:243
        _it_2=Tonyu.iterator(_this._eventHandlers,2);
        while(_it_2.next()) {
          k=_it_2[0];
          v=_it_2[1];
          
          //$LASTPOS=2000285;//jseditor.EventMod:285
          v.release();
          
        }
      },
      parseArgs :function _trc_EventMod_parseArgs(a) {
        "use strict";
        var _this=this;
        var res;
        var i;
        
        //$LASTPOS=2000335;//jseditor.EventMod:335
        res = {type: a[0],args: []};
        
        //$LASTPOS=2000369;//jseditor.EventMod:369
        //$LASTPOS=2000374;//jseditor.EventMod:374
        i = 1;
        for (; i<a.length ; i++) {
          {
            //$LASTPOS=2000412;//jseditor.EventMod:412
            res.args.push(a[i]);
          }
        }
        return res;
      },
      registerEventHandler :function _trc_EventMod_registerEventHandler(type,obj) {
        "use strict";
        var _this=this;
        var cl;
        
        //$LASTPOS=2000535;//jseditor.EventMod:535
        _this.initEventMod();
        //$LASTPOS=2000555;//jseditor.EventMod:555
        if (typeof  type=="function") {
          //$LASTPOS=2000594;//jseditor.EventMod:594
          obj=obj||new type({target: _this});
          //$LASTPOS=2000634;//jseditor.EventMod:634
          type=obj.getClassInfo().fullName;
          
        } else {
          //$LASTPOS=2000689;//jseditor.EventMod:689
          if (! obj) {
            //$LASTPOS=2000713;//jseditor.EventMod:713
            cl = Tonyu.globals.$eventTypes&&Tonyu.globals.$eventTypes[type]||Tonyu.classes.jseditor.EventHandler;
            
            //$LASTPOS=2000782;//jseditor.EventMod:782
            obj=new cl({target: _this});
            
          }
          
        }
        return _this._eventHandlers[type]=obj;
      },
      getEventHandler :function _trc_EventMod_getEventHandler(type) {
        "use strict";
        var _this=this;
        var res;
        
        //$LASTPOS=2000995;//jseditor.EventMod:995
        _this.initEventMod();
        //$LASTPOS=2001015;//jseditor.EventMod:1015
        if (typeof  type=="function") {
          //$LASTPOS=2001054;//jseditor.EventMod:1054
          type=type.meta.fullName;
          
        }
        //$LASTPOS=2001089;//jseditor.EventMod:1089
        res = _this._eventHandlers[type];
        
        return res;
      },
      getOrRegisterEventHandler :function _trc_EventMod_getOrRegisterEventHandler(type) {
        "use strict";
        var _this=this;
        var res;
        
        //$LASTPOS=2001185;//jseditor.EventMod:1185
        res = _this.getEventHandler(type)||_this.registerEventHandler(type);
        
        return res;
      },
      on :function _trc_EventMod_on() {
        "use strict";
        var _this=this;
        var a;
        var h;
        
        //$LASTPOS=2001288;//jseditor.EventMod:1288
        a = _this.parseArgs(arguments);
        
        //$LASTPOS=2001321;//jseditor.EventMod:1321
        h = _this.getOrRegisterEventHandler(a.type);
        
        return h.addListener.apply(h,a.args);
      },
      fireEvent :function _trc_EventMod_fireEvent(type,arg) {
        "use strict";
        var _this=this;
        var h;
        
        //$LASTPOS=2001506;//jseditor.EventMod:1506
        h = _this.getEventHandler(type);
        
        //$LASTPOS=2001540;//jseditor.EventMod:1540
        if (h) {
          //$LASTPOS=2001547;//jseditor.EventMod:1547
          h.fire([arg]);
        }
      },
      sendEvent :function _trc_EventMod_sendEvent(type,arg) {
        "use strict";
        var _this=this;
        
        //$LASTPOS=2001602;//jseditor.EventMod:1602
        _this.fireEvent(type,arg);
      },
      waitEvent :function _trc_EventMod_waitEvent() {
        "use strict";
        var _this=this;
        var args;
        var i;
        
        //$LASTPOS=2001649;//jseditor.EventMod:1649
        if (null) {
          //$LASTPOS=2001673;//jseditor.EventMod:1673
          args = [];
          
          //$LASTPOS=2001695;//jseditor.EventMod:1695
          //$LASTPOS=2001700;//jseditor.EventMod:1700
          i = 0;
          for (; i<arguments.length ; i++) {
            {
              //$LASTPOS=2001747;//jseditor.EventMod:1747
              if (arguments[i]===undefined) {
                break;
                
              }
              //$LASTPOS=2001797;//jseditor.EventMod:1797
              args.push(arguments[i]);
            }
          }
          //$LASTPOS=2001842;//jseditor.EventMod:1842
          null.waitEvent(_this,args);
          
        }
      },
      fiber$waitEvent :function _trc_EventMod_f_waitEvent(_thread) {
        "use strict";
        var _this=this;
        var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var args;
        var i;
        
        //$LASTPOS=2001649;//jseditor.EventMod:1649
        if (_thread) {
          //$LASTPOS=2001673;//jseditor.EventMod:1673
          args = [];
          
          //$LASTPOS=2001695;//jseditor.EventMod:1695
          //$LASTPOS=2001700;//jseditor.EventMod:1700
          i = 0;
          for (; i<_arguments.length ; i++) {
            {
              //$LASTPOS=2001747;//jseditor.EventMod:1747
              if (_arguments[i]===undefined) {
                break;
                
              }
              //$LASTPOS=2001797;//jseditor.EventMod:1797
              args.push(_arguments[i]);
            }
          }
          //$LASTPOS=2001842;//jseditor.EventMod:1842
          _thread.waitEvent(_this,args);
          
        }
        
        _thread.retVal=_this;return;
      },
      waitFor :function _trc_EventMod_waitFor(f) {
        "use strict";
        var _this=this;
        
        //$LASTPOS=2001905;//jseditor.EventMod:1905
        if (null) {
          //$LASTPOS=2001929;//jseditor.EventMod:1929
          null.waitFor(f);
          
        }
      },
      fiber$waitFor :function _trc_EventMod_f_waitFor(_thread,f) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=2001905;//jseditor.EventMod:1905
        if (_thread) {
          //$LASTPOS=2001929;//jseditor.EventMod:1929
          _thread.waitFor(f);
          
        }
        
        _thread.retVal=_this;return;
      },
      __dummy: false
    },
    decls: {"methods":{"main":{"nowait":false},"initEventMod":{"nowait":true},"releaseEventMod":{"nowait":true},"parseArgs":{"nowait":true},"registerEventHandler":{"nowait":true},"getEventHandler":{"nowait":true},"getOrRegisterEventHandler":{"nowait":true},"on":{"nowait":true},"fireEvent":{"nowait":true},"sendEvent":{"nowait":true},"waitEvent":{"nowait":false},"waitFor":{"nowait":false}}}
  });
});