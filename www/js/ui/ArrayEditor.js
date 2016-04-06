define(function (require) {
  var Tonyu=require('Tonyu');
  var assert=require('assert');
  var UIForm=require('UIForm');
  return Tonyu.klass.define({
    fullName: 'jseditor.ArrayEditor',
    shortName: 'ArrayEditor',
    namespace: 'jseditor',
    superclass: Tonyu.classes.jseditor.UIForm,
    includes: [],
    methods: {
      main :function _trc_ArrayEditor_main() {
        "use strict";
        var _this=this;
        
        //$LASTPOS=21000319;//jseditor.ArrayEditor:319
        _this.ElementEditorClass=_this.ElementEditorClass||_this.elem;
        //$LASTPOS=21000364;//jseditor.ArrayEditor:364
        _this.tag("span",(function anonymous_376() {
          
          //$LASTPOS=21000383;//jseditor.ArrayEditor:383
          _this.refreshView();
        }));
      },
      fiber$main :function _trc_ArrayEditor_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=21000319;//jseditor.ArrayEditor:319
        _this.ElementEditorClass=_this.ElementEditorClass||_this.elem;
        
        _thread.enter(function _trc_ArrayEditor_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=21000364;//jseditor.ArrayEditor:364
              _this.fiber$tag(_thread, "span", (function anonymous_376() {
                
                //$LASTPOS=21000383;//jseditor.ArrayEditor:383
                _this.refreshView();
              }));
              __pc=1;return;
            case 1:
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      initialize :function _trc_ArrayEditor_initialize(opt) {
        "use strict";
        var _this=this;
        
        //$LASTPOS=21000032;//jseditor.ArrayEditor:32
        Tonyu.classes.jseditor.UIForm.apply( _this, [opt]);
        //$LASTPOS=21000048;//jseditor.ArrayEditor:48
        assert(_this.ElementEditorClass,"ElementEditorClass not set");
      },
      loadModel :function _trc_ArrayEditor_loadModel(array) {
        "use strict";
        var _this=this;
        
        //$LASTPOS=21000132;//jseditor.ArrayEditor:132
        Tonyu.classes.jseditor.UIForm.prototype.loadModel.apply( _this, [array]);
        //$LASTPOS=21000160;//jseditor.ArrayEditor:160
        _this.refreshView();
      },
      fiber$loadModel :function _trc_ArrayEditor_f_loadModel(_thread,array) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        _thread.enter(function _trc_ArrayEditor_ent_loadModel(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=21000132;//jseditor.ArrayEditor:132
              Tonyu.classes.jseditor.UIForm.prototype.fiber$loadModel.apply( _this, [_thread, array]);
              __pc=1;return;
            case 1:
              
              //$LASTPOS=21000160;//jseditor.ArrayEditor:160
              _this.fiber$refreshView(_thread);
              __pc=2;return;
            case 2:
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      refreshView :function _trc_ArrayEditor_refreshView() {
        "use strict";
        var _this=this;
        
        //$LASTPOS=21000198;//jseditor.ArrayEditor:198
        _this.clear();
        //$LASTPOS=21000211;//jseditor.ArrayEditor:211
        if (_this.model) {
          //$LASTPOS=21000232;//jseditor.ArrayEditor:232
          _this.model.forEach((function anonymous_246(e) {
            
            //$LASTPOS=21000265;//jseditor.ArrayEditor:265
            _this.tag(_this.ElementEditorClass,{model: e});
          }));
          
        }
      },
      fiber$refreshView :function _trc_ArrayEditor_f_refreshView(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        _thread.enter(function _trc_ArrayEditor_ent_refreshView(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=21000198;//jseditor.ArrayEditor:198
              _this.fiber$clear(_thread);
              __pc=1;return;
            case 1:
              
              //$LASTPOS=21000211;//jseditor.ArrayEditor:211
              if (!(_this.model)) { __pc=2; break; }
              //$LASTPOS=21000232;//jseditor.ArrayEditor:232
              _this.model.forEach((function anonymous_246(e) {
                
                //$LASTPOS=21000265;//jseditor.ArrayEditor:265
                _this.tag(_this.ElementEditorClass,{model: e});
              }));
            case 2:
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      push :function _trc_ArrayEditor_push(e) {
        "use strict";
        var _this=this;
        
        //$LASTPOS=21000417;//jseditor.ArrayEditor:417
        _this.model.push(e);
        //$LASTPOS=21000436;//jseditor.ArrayEditor:436
        _this.change(_this.jqdom,(function anonymous_450() {
          
          //$LASTPOS=21000461;//jseditor.ArrayEditor:461
          _this.tag(_this.ElementEditorClass,{model: e});
        }));
      },
      fiber$push :function _trc_ArrayEditor_f_push(_thread,e) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=21000417;//jseditor.ArrayEditor:417
        _this.model.push(e);
        
        _thread.enter(function _trc_ArrayEditor_ent_push(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=21000436;//jseditor.ArrayEditor:436
              _this.fiber$change(_thread, _this.jqdom, (function anonymous_450() {
                
                //$LASTPOS=21000461;//jseditor.ArrayEditor:461
                _this.tag(_this.ElementEditorClass,{model: e});
              }));
              __pc=1;return;
            case 1:
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      __dummy: false
    },
    decls: {"methods":{"main":{"nowait":false},"new":{"nowait":false},"loadModel":{"nowait":false},"refreshView":{"nowait":false},"push":{"nowait":false}}}
  });
});