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
        
        //$LASTPOS=2000018;//jseditor.WaitMod:18
        if (null) {
          //$LASTPOS=2000041;//jseditor.WaitMod:41
          null.waitFor(f);
          
        }
      },
      fiber$waitFor :function _trc_WaitMod_f_waitFor(_thread,f) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=2000018;//jseditor.WaitMod:18
        if (_thread) {
          //$LASTPOS=2000041;//jseditor.WaitMod:41
          _thread.waitFor(f);
          
        }
        
        _thread.retVal=_this;return;
      },
      __dummy: false
    },
    decls: {"methods":{"main":{"nowait":false},"waitFor":{"nowait":false}}}
  });
});