define(function (require) {
  var Tonyu=require('Tonyu');
  return Tonyu.klass.define({
    fullName: 'jseditor.WaitMod',
    shortName: 'WaitMod',
    namespace: 'jseditor',
    includes: [],
    methods: {
      main :function _trc_WaitMod_main() {
        "use strict";
        var _this=this;
        
      },
      fiber$main :function _trc_WaitMod_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        _thread.retVal=_this;return;
      },
      waitFor :function _trc_WaitMod_waitFor(f) {
        "use strict";
        var _this=this;
        
        //$LASTPOS=3000019;//jseditor.WaitMod:19
        if (null) {
          //$LASTPOS=3000042;//jseditor.WaitMod:42
          null.waitFor(f);
          
        } else {
          return f;
          
        }
      },
      fiber$waitFor :function _trc_WaitMod_f_waitFor(_thread,f) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=3000019;//jseditor.WaitMod:19
        if (_thread) {
          //$LASTPOS=3000042;//jseditor.WaitMod:42
          _thread.waitFor(f);
          
        } else {
          _thread.retVal=f;return;
          
          
        }
        
        _thread.retVal=_this;return;
      },
      parallel :function _trc_WaitMod_parallel() {
        "use strict";
        var _this=this;
        var args;
        var i;
        var name;
        var th;
        
        //$LASTPOS=3000127;//jseditor.WaitMod:127
        args = [];
        
        //$LASTPOS=3000145;//jseditor.WaitMod:145
        //$LASTPOS=3000150;//jseditor.WaitMod:150
        i = 1;
        for (; i<arguments.length ; i++) {
          {
            //$LASTPOS=3000195;//jseditor.WaitMod:195
            args.push(arguments[i]);
          }
        }
        //$LASTPOS=3000232;//jseditor.WaitMod:232
        name = arguments[0];
        
        //$LASTPOS=3000260;//jseditor.WaitMod:260
        th = Tonyu.thread();
        
        //$LASTPOS=3000288;//jseditor.WaitMod:288
        th.apply(_this,name,args);
        //$LASTPOS=3000319;//jseditor.WaitMod:319
        th.steps();
        return th;
      },
      __dummy: false
    },
    decls: {"methods":{"main":{"nowait":false},"waitFor":{"nowait":false},"parallel":{"nowait":true}}}
  });
});