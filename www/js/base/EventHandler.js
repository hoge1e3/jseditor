define(function (require) {
  var Tonyu=require('Tonyu');
  var EventHandlerCaller=require('EventHandlerCaller');
  return Tonyu.klass.define({
    fullName: 'jseditor.EventHandler',
    shortName: 'EventHandler',
    namespace: 'jseditor',
    includes: [Tonyu.classes.jseditor.EventHandlerCaller],
    methods: {
      main :function _trc_EventHandler_main() {
        "use strict";
        var _this=this;
        
      },
      fiber$main :function _trc_EventHandler_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        _thread.retVal=_this;return;
      },
      initialize :function _trc_EventHandler_initialize(p) {
        "use strict";
        var _this=this;
        
        //$LASTPOS=6000089;//jseditor.EventHandler:89
        _this.listeners=[];
      },
      addListener :function _trc_EventHandler_addListener(f) {
        "use strict";
        var _this=this;
        
        //$LASTPOS=6000132;//jseditor.EventHandler:132
        if (_this.target&&(typeof  f)=="string") {
          //$LASTPOS=6000179;//jseditor.EventHandler:179
          f=_this.target[f];
          
        }
        //$LASTPOS=6000204;//jseditor.EventHandler:204
        if (typeof  f!="function") {
          throw new Error("Not a event listener: "+_this.target+" / "+f);
          
        }
        //$LASTPOS=6000293;//jseditor.EventHandler:293
        _this.listeners.push(f);
        return {remove: (function anonymous_343() {
          
          //$LASTPOS=6000358;//jseditor.EventHandler:358
          _this.removeListener(f);
        })};
      },
      fiber$addListener :function _trc_EventHandler_f_addListener(_thread,f) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=6000132;//jseditor.EventHandler:132
        if (_this.target&&(typeof  f)=="string") {
          //$LASTPOS=6000179;//jseditor.EventHandler:179
          f=_this.target[f];
          
        }
        //$LASTPOS=6000204;//jseditor.EventHandler:204
        if (typeof  f!="function") {
          throw new Error("Not a event listener: "+_this.target+" / "+f);
          
        }
        //$LASTPOS=6000293;//jseditor.EventHandler:293
        _this.listeners.push(f);
        
        _thread.enter(function _trc_EventHandler_ent_addListener(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              _thread.exit({remove: (function anonymous_343() {
                
                //$LASTPOS=6000358;//jseditor.EventHandler:358
                _this.removeListener(f);
              })});return;
              _thread.exit(_this);return;
            }
          }
        });
      },
      removeListener :function _trc_EventHandler_removeListener(f) {
        "use strict";
        var _this=this;
        var i;
        
        //$LASTPOS=6000426;//jseditor.EventHandler:426
        i = _this.listeners.indexOf(f);
        
        //$LASTPOS=6000459;//jseditor.EventHandler:459
        _this.listeners.splice(i,1);
      },
      fiber$removeListener :function _trc_EventHandler_f_removeListener(_thread,f) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var i;
        
        //$LASTPOS=6000426;//jseditor.EventHandler:426
        i = _this.listeners.indexOf(f);
        
        //$LASTPOS=6000459;//jseditor.EventHandler:459
        _this.listeners.splice(i,1);
        
        _thread.retVal=_this;return;
      },
      fire :function _trc_EventHandler_fire(args) {
        "use strict";
        var _this=this;
        var t;
        var h;
        var _it_295;
        
        //$LASTPOS=6000505;//jseditor.EventHandler:505
        if (_this.released) {
          return _this;
        }
        
        //$LASTPOS=6000544;//jseditor.EventHandler:544
        _it_295=Tonyu.iterator(_this.listeners,1);
        while(_it_295.next()) {
          h=_it_295[0];
          
          //$LASTPOS=6000788;//jseditor.EventHandler:788
          _this.callEventHandler(h,args);
          
        }
      },
      fiber$fire :function _trc_EventHandler_f_fire(_thread,args) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var t;
        var h;
        var _it_295;
        
        //$LASTPOS=6000505;//jseditor.EventHandler:505
        if (_this.released) {
          _thread.retVal=_this;return;
          
        }
        
        
        _thread.enter(function _trc_EventHandler_ent_fire(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=6000544;//jseditor.EventHandler:544
              _it_295=Tonyu.iterator(_this.listeners,1);
            case 1:
              if (!(_it_295.next())) { __pc=3; break; }
              h=_it_295[0];
              
              //$LASTPOS=6000788;//jseditor.EventHandler:788
              _this.fiber$callEventHandler(_thread, h, args);
              __pc=2;return;
            case 2:
              
              __pc=1;break;
            case 3:
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      release :function _trc_EventHandler_release() {
        "use strict";
        var _this=this;
        
        //$LASTPOS=6000844;//jseditor.EventHandler:844
        _this.released=true;
      },
      fiber$release :function _trc_EventHandler_f_release(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=6000844;//jseditor.EventHandler:844
        _this.released=true;
        
        _thread.retVal=_this;return;
      },
      __dummy: false
    },
    decls: {"methods":{"main":{"nowait":false},"new":{"nowait":false},"addListener":{"nowait":false},"removeListener":{"nowait":false},"fire":{"nowait":false},"release":{"nowait":false}}}
  });
});