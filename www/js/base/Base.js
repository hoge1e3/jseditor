define(function (require) {
  var Tonyu=require('Tonyu');
  var UIDiag=require('UIDiag');
  var DeferredUtil=require('DeferredUtil');
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
        
        //$LASTPOS=4000058;//jseditor.Base:58
        Tonyu.extend(_this,p);
      },
      alert :function _trc_Base_alert(m) {
        "use strict";
        var _this=this;
        
        //$LASTPOS=4000099;//jseditor.Base:99
        _this.waitFor(UIDiag.alert(m));
      },
      fiber$alert :function _trc_Base_f_alert(_thread,m) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        _thread.enter(function _trc_Base_ent_alert(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=4000099;//jseditor.Base:99
              _this.fiber$waitFor(_thread, UIDiag.alert(m));
              __pc=1;return;
            case 1:
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      prompt :function _trc_Base_prompt(m,v) {
        "use strict";
        var _this=this;
        var n;
        
        //$LASTPOS=4000146;//jseditor.Base:146
        n = _this.waitFor(UIDiag.prompt(m,v));
        
        return n;
      },
      fiber$prompt :function _trc_Base_f_prompt(_thread,m,v) {
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
              //$LASTPOS=4000146;//jseditor.Base:146
              _this.fiber$waitFor(_thread, UIDiag.prompt(m,v));
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
        
        //$LASTPOS=4000215;//jseditor.Base:215
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
              //$LASTPOS=4000215;//jseditor.Base:215
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
      print :function _trc_Base_print() {
        "use strict";
        var _this=this;
        
        //$LASTPOS=4000280;//jseditor.Base:280
        console.log.apply(console,arguments);
      },
      fiber$print :function _trc_Base_f_print(_thread) {
        "use strict";
        var _this=this;
        var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=4000280;//jseditor.Base:280
        console.log.apply(console,_arguments);
        
        _thread.retVal=_this;return;
      },
      update :function _trc_Base_update(t) {
        "use strict";
        var _this=this;
        
        //$LASTPOS=4000337;//jseditor.Base:337
        _this.waitFor(DeferredUtil.timeout(t||0));
      },
      fiber$update :function _trc_Base_f_update(_thread,t) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        _thread.enter(function _trc_Base_ent_update(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=4000337;//jseditor.Base:337
              _this.fiber$waitFor(_thread, DeferredUtil.timeout(t||0));
              __pc=1;return;
            case 1:
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      __dummy: false
    },
    decls: {"methods":{"main":{"nowait":false},"new":{"nowait":false},"alert":{"nowait":false},"prompt":{"nowait":false},"confirm":{"nowait":false},"print":{"nowait":false},"update":{"nowait":false}}}
  });
});