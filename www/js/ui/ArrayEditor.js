define(function (require) {
  var Tonyu=require('Tonyu');
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
        
      },
      fiber$main :function _trc_ArrayEditor_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        _thread.retVal=_this;return;
      },
      initialize :function _trc_ArrayEditor_initialize(ElementEditorClass) {
        "use strict";
        var _this=this;
        
        //$LASTPOS=20000048;//jseditor.ArrayEditor:48
        _this.ElementEditorClass=ElementEditorClass;
      },
      loadArray :function _trc_ArrayEditor_loadArray(array) {
        "use strict";
        var _this=this;
        
        //$LASTPOS=20000119;//jseditor.ArrayEditor:119
        _this.model=array;
        //$LASTPOS=20000136;//jseditor.ArrayEditor:136
        _this.refreshView();
      },
      fiber$loadArray :function _trc_ArrayEditor_f_loadArray(_thread,array) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=20000119;//jseditor.ArrayEditor:119
        _this.model=array;
        
        _thread.enter(function _trc_ArrayEditor_ent_loadArray(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=20000136;//jseditor.ArrayEditor:136
              _this.fiber$refreshView(_thread);
              __pc=1;return;
            case 1:
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      refreshView :function _trc_ArrayEditor_refreshView() {
        "use strict";
        var _this=this;
        
        //$LASTPOS=20000174;//jseditor.ArrayEditor:174
        _this.clear();
        //$LASTPOS=20000187;//jseditor.ArrayEditor:187
        _this.model.forEach((function anonymous_201(e) {
          
          //$LASTPOS=20000216;//jseditor.ArrayEditor:216
          _this.tag(_this.ElementEditorClass,{model: e});
        }));
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
              //$LASTPOS=20000174;//jseditor.ArrayEditor:174
              _this.fiber$clear(_thread);
              __pc=1;return;
            case 1:
              
              //$LASTPOS=20000187;//jseditor.ArrayEditor:187
              _this.model.forEach((function anonymous_201(e) {
                
                //$LASTPOS=20000216;//jseditor.ArrayEditor:216
                _this.tag(_this.ElementEditorClass,{model: e});
              }));
              _thread.exit(_this);return;
            }
          }
        });
      },
      __dummy: false
    },
    decls: {"methods":{"main":{"nowait":false},"new":{"nowait":false},"loadArray":{"nowait":false},"refreshView":{"nowait":false}}}
  });
});