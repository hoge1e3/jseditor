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
      waitFor :function _trc_WaitMod_waitFor(f) {
        "use strict";
        var _this=this;
        
        //$LASTPOS=2000019;//jseditor.WaitMod:19
        if (null) {
          //$LASTPOS=2000042;//jseditor.WaitMod:42
          null.waitFor(f);
          
        }
      },
      fiber$waitFor :function _trc_WaitMod_f_waitFor(_thread,f) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=2000019;//jseditor.WaitMod:19
        if (_thread) {
          //$LASTPOS=2000042;//jseditor.WaitMod:42
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
        
        //$LASTPOS=2000096;//jseditor.WaitMod:96
        args = [];
        
        //$LASTPOS=2000114;//jseditor.WaitMod:114
        //$LASTPOS=2000119;//jseditor.WaitMod:119
        i = 1;
        for (; i<arguments.length ; i++) {
          {
            //$LASTPOS=2000164;//jseditor.WaitMod:164
            args.push(arguments[i]);
          }
        }
        //$LASTPOS=2000201;//jseditor.WaitMod:201
        name = arguments[0];
        
        //$LASTPOS=2000229;//jseditor.WaitMod:229
        th = Tonyu.thread();
        
        //$LASTPOS=2000257;//jseditor.WaitMod:257
        th.apply(_this,name,args);
        //$LASTPOS=2000288;//jseditor.WaitMod:288
        th.steps();
        return th;
      },
      __dummy: false
    },
    decls: {"methods":{"main":{"nowait":false},"waitFor":{"nowait":false},"parallel":{"nowait":true}}}
  });
});