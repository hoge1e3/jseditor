define(function (require) {
  var Tonyu=require('Tonyu');
  var Tonyu=require('Tonyu');
  var UIDiag=require('UIDiag');
  var WaitMod=require('WaitMod');
  var ShellMod=require('ShellMod');
  return Tonyu.klass.define({
    fullName: 'jseditor.Base',
    shortName: 'Base',
    namespace: 'jseditor',
    includes: [Tonyu.classes.jseditor.WaitMod,Tonyu.classes.jseditor.ShellMod],
    methods: {
      main :function _trc_Base_main() {
        "use strict";
        var _this=this;
        
      },
      fiber$main :function _trc_Base_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        _thread.retVal=_this;return;
      },
      initialize :function _trc_Base_initialize(p) {
        "use strict";
        var _this=this;
        
        //$LASTPOS=3000043;//jseditor.Base:43
        Tonyu.extend(_this,p);
      },
      prompt :function _trc_Base_prompt(m) {
        "use strict";
        var _this=this;
        var n;
        
        //$LASTPOS=3000085;//jseditor.Base:85
        n = _this.waitFor(UIDiag.prompt(m));
        
        return n;
      },
      fiber$prompt :function _trc_Base_f_prompt(_thread,m) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var n;
        
        
        _thread.enter(function _trc_Base_ent_prompt(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=3000085;//jseditor.Base:85
              _this.fiber$waitFor(_thread, UIDiag.prompt(m));
              __pc=1;return;
            case 1:
              n=_thread.retVal;
              
              _thread.exit(n);return;
              _thread.exit(_this);return;
            }
          }
        });
      },
      confirm :function _trc_Base_confirm(m) {
        "use strict";
        var _this=this;
        var n;
        
        //$LASTPOS=3000152;//jseditor.Base:152
        n = _this.waitFor(UIDiag.confirm(m));
        
        return n;
      },
      fiber$confirm :function _trc_Base_f_confirm(_thread,m) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var n;
        
        
        _thread.enter(function _trc_Base_ent_confirm(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=3000152;//jseditor.Base:152
              _this.fiber$waitFor(_thread, UIDiag.confirm(m));
              __pc=1;return;
            case 1:
              n=_thread.retVal;
              
              _thread.exit(n);return;
              _thread.exit(_this);return;
            }
          }
        });
      },
      __dummy: false
    },
    decls: {"methods":{"main":{"nowait":false},"new":{"nowait":false},"prompt":{"nowait":false},"confirm":{"nowait":false}}}
  });
});