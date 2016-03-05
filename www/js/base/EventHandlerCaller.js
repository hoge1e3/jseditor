define(function (require) {
  var Tonyu=require('Tonyu');
  return Tonyu.klass.define({
    fullName: 'jseditor.EventHandlerCaller',
    shortName: 'EventHandlerCaller',
    namespace: 'jseditor',
    includes: [],
    methods: {
      main :function _trc_EventHandlerCaller_main() {
        "use strict";
        var _this=this;
        
      },
      fiber$main :function _trc_EventHandlerCaller_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        _thread.retVal=_this;return;
      },
      callEventHandler :function _trc_EventHandlerCaller_callEventHandler(h,args) {
        "use strict";
        var _this=this;
        var t;
        
        
        //$LASTPOS=1000076;//jseditor.EventHandlerCaller:76
        if (h["fiber"]) {
          //$LASTPOS=1000103;//jseditor.EventHandlerCaller:103
          t=Tonyu.thread();
          //$LASTPOS=1000130;//jseditor.EventHandlerCaller:130
          h["fiber"].apply(_this.target,[t].concat(args));
          //$LASTPOS=1000184;//jseditor.EventHandlerCaller:184
          t.steps();
          
        } else {
          //$LASTPOS=1000218;//jseditor.EventHandlerCaller:218
          h.apply(_this.target,args);
          
        }
      },
      fiber$callEventHandler :function _trc_EventHandlerCaller_f_callEventHandler(_thread,h,args) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var t;
        
        
        //$LASTPOS=1000076;//jseditor.EventHandlerCaller:76
        if (h["fiber"]) {
          //$LASTPOS=1000103;//jseditor.EventHandlerCaller:103
          t=Tonyu.thread();
          //$LASTPOS=1000130;//jseditor.EventHandlerCaller:130
          h["fiber"].apply(_this.target,[t].concat(args));
          //$LASTPOS=1000184;//jseditor.EventHandlerCaller:184
          t.steps();
          
        } else {
          //$LASTPOS=1000218;//jseditor.EventHandlerCaller:218
          h.apply(_this.target,args);
          
        }
        
        _thread.retVal=_this;return;
      },
      __dummy: false
    },
    decls: {"methods":{"main":{"nowait":false},"callEventHandler":{"nowait":false}}}
  });
});