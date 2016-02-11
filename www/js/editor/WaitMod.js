define(function (require) {
  var Tonyu=require('Tonyu');
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
      initialize :function _trc_WaitMod_initialize(p) {
        "use strict";
        var _this=this;
        
        //$LASTPOS=2000014;//jseditor.WaitMod:14
        Tonyu.extend(_this,p);
      },
      waitFor :function _trc_WaitMod_waitFor(f) {
        "use strict";
        var _this=this;
        
        //$LASTPOS=2000056;//jseditor.WaitMod:56
        if (null) {
          //$LASTPOS=2000079;//jseditor.WaitMod:79
          null.waitFor(f);
          
        }
      },
      fiber$waitFor :function _trc_WaitMod_f_waitFor(_thread,f) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=2000056;//jseditor.WaitMod:56
        if (_thread) {
          //$LASTPOS=2000079;//jseditor.WaitMod:79
          _thread.waitFor(f);
          
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
        
        //$LASTPOS=2000133;//jseditor.WaitMod:133
        args = [];
        
        //$LASTPOS=2000151;//jseditor.WaitMod:151
        //$LASTPOS=2000156;//jseditor.WaitMod:156
        i = 1;
        for (; i<arguments.length ; i++) {
          {
            //$LASTPOS=2000201;//jseditor.WaitMod:201
            args.push(arguments[i]);
          }
        }
        //$LASTPOS=2000238;//jseditor.WaitMod:238
        name = arguments[0];
        
        //$LASTPOS=2000266;//jseditor.WaitMod:266
        th = Tonyu.thread();
        
        //$LASTPOS=2000294;//jseditor.WaitMod:294
        th.apply(_this,name,args);
        //$LASTPOS=2000325;//jseditor.WaitMod:325
        th.steps();
        return th;
      },
      __dummy: false
    },
    decls: {"methods":{"main":{"nowait":false},"new":{"nowait":false},"waitFor":{"nowait":false},"parallel":{"nowait":true}}}
  });
});