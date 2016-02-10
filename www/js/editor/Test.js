define(function (require) {
  var Tonyu=require('Tonyu');
  var UI=require('UI');
  return Tonyu.klass.define({
    fullName: 'jseditor.Test',
    shortName: 'Test',
    namespace: 'jseditor',
    includes: [],
    methods: {
      main :function _trc_Test_main() {
        "use strict";
        var _this=this;
        
      },
      fiber$main :function _trc_Test_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        _thread.retVal=_this;return;
      },
      foo :function _trc_Test_foo(x) {
        "use strict";
        var _this=this;
        
        //$LASTPOS=1000031;//jseditor.Test:31
        UI("div","Tonyu で dialog").dialog();
      },
      fiber$foo :function _trc_Test_f_foo(_thread,x) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=1000031;//jseditor.Test:31
        UI("div","Tonyu で dialog").dialog();
        
        _thread.retVal=_this;return;
      },
      __dummy: false
    },
    decls: {"methods":{"main":{"nowait":false},"foo":{"nowait":false}}}
  });
});