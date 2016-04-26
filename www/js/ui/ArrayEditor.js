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
        
        //$LASTPOS=21000267;//jseditor.ArrayEditor:267
        _this.ElementEditorClass=_this.ElementEditorClass||_this.elem;
        //$LASTPOS=21000312;//jseditor.ArrayEditor:312
        _this.tag("span",(function anonymous_324() {
          
          //$LASTPOS=21000331;//jseditor.ArrayEditor:331
          _this.refreshView();
        }));
      },
      fiber$main :function _trc_ArrayEditor_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=21000267;//jseditor.ArrayEditor:267
        _this.ElementEditorClass=_this.ElementEditorClass||_this.elem;
        
        _thread.enter(function _trc_ArrayEditor_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=21000312;//jseditor.ArrayEditor:312
              _this.fiber$tag(_thread, "span", (function anonymous_324() {
                
                //$LASTPOS=21000331;//jseditor.ArrayEditor:331
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
          _this.model.forEach(Tonyu.bindFunc(_this,_this.addSubView));
          
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
              if (_this.model) {
                //$LASTPOS=21000232;//jseditor.ArrayEditor:232
                _this.model.forEach(Tonyu.bindFunc(_this,_this.addSubView));
                
              }
              _thread.exit(_this);return;
            }
          }
        });
      },
      push :function _trc_ArrayEditor_push(e) {
        "use strict";
        var _this=this;
        
        //$LASTPOS=21000365;//jseditor.ArrayEditor:365
        _this.model.push(e);
        //$LASTPOS=21000384;//jseditor.ArrayEditor:384
        _this.change(_this.jqdom,(function anonymous_398() {
          
          //$LASTPOS=21000409;//jseditor.ArrayEditor:409
          _this.addSubView(e);
        }));
      },
      fiber$push :function _trc_ArrayEditor_f_push(_thread,e) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=21000365;//jseditor.ArrayEditor:365
        _this.model.push(e);
        
        _thread.enter(function _trc_ArrayEditor_ent_push(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=21000384;//jseditor.ArrayEditor:384
              _this.fiber$change(_thread, _this.jqdom, (function anonymous_398() {
                
                //$LASTPOS=21000409;//jseditor.ArrayEditor:409
                _this.addSubView(e);
              }));
              __pc=1;return;
            case 1:
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      addSubView :function _trc_ArrayEditor_addSubView(model) {
        "use strict";
        var _this=this;
        
        //$LASTPOS=21000458;//jseditor.ArrayEditor:458
        _this.subViews=_this.subViews||[];
        //$LASTPOS=21000485;//jseditor.ArrayEditor:485
        _this.subViews.push(_this.tag(_this.ElementEditorClass,{model: model}));
      },
      fiber$addSubView :function _trc_ArrayEditor_f_addSubView(_thread,model) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=21000458;//jseditor.ArrayEditor:458
        _this.subViews=_this.subViews||[];
        //$LASTPOS=21000485;//jseditor.ArrayEditor:485
        _this.subViews.push(_this.tag(_this.ElementEditorClass,{model: model}));
        
        _thread.retVal=_this;return;
      },
      clear :function _trc_ArrayEditor_clear() {
        "use strict";
        var _this=this;
        
        //$LASTPOS=21000552;//jseditor.ArrayEditor:552
        Tonyu.classes.jseditor.UIForm.prototype.clear.apply( _this, []);
        //$LASTPOS=21000571;//jseditor.ArrayEditor:571
        _this.subViews=[];
      },
      fiber$clear :function _trc_ArrayEditor_f_clear(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        _thread.enter(function _trc_ArrayEditor_ent_clear(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=21000552;//jseditor.ArrayEditor:552
              Tonyu.classes.jseditor.UIForm.prototype.fiber$clear.apply( _this, [_thread]);
              __pc=1;return;
            case 1:
              
              //$LASTPOS=21000571;//jseditor.ArrayEditor:571
              _this.subViews=[];
              _thread.exit(_this);return;
            }
          }
        });
      },
      remove :function _trc_ArrayEditor_remove(e) {
        "use strict";
        var _this=this;
        var vidx;
        var i;
        var midx;
        
        //$LASTPOS=21000631;//jseditor.ArrayEditor:631
        _this.print("prev",_this.subViews);
        //$LASTPOS=21000660;//jseditor.ArrayEditor:660
        if (! _this.subViews) {
          return _this;
        }
        //$LASTPOS=21000687;//jseditor.ArrayEditor:687
        vidx = - 1;
        
        //$LASTPOS=21000704;//jseditor.ArrayEditor:704
        //$LASTPOS=21000709;//jseditor.ArrayEditor:709
        i = 0;
        for (; i<_this.subViews.length ; i++) {
          {
            //$LASTPOS=21000750;//jseditor.ArrayEditor:750
            if (_this.subViews[i].model===e) {
              //$LASTPOS=21000791;//jseditor.ArrayEditor:791
              vidx=i;
              break;
              
              
            }
          }
        }
        //$LASTPOS=21000838;//jseditor.ArrayEditor:838
        if (vidx>=0) {
          //$LASTPOS=21000862;//jseditor.ArrayEditor:862
          _this.subViews[vidx].die();
          //$LASTPOS=21000893;//jseditor.ArrayEditor:893
          _this.subViews.splice(vidx,1);
          
        }
        //$LASTPOS=21000928;//jseditor.ArrayEditor:928
        midx = _this.model.indexOf(e);
        
        //$LASTPOS=21000959;//jseditor.ArrayEditor:959
        if (midx>=0) {
          //$LASTPOS=21000982;//jseditor.ArrayEditor:982
          _this.model.splice(midx,1);
          
        }
        //$LASTPOS=21001014;//jseditor.ArrayEditor:1014
        _this.print("rmed",vidx,midx,_this.model);
      },
      fiber$remove :function _trc_ArrayEditor_f_remove(_thread,e) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var vidx;
        var i;
        var midx;
        
        //$LASTPOS=21000631;//jseditor.ArrayEditor:631
        _this.print("prev",_this.subViews);
        //$LASTPOS=21000660;//jseditor.ArrayEditor:660
        if (! _this.subViews) {
          _thread.retVal=_this;return;
          
        }
        //$LASTPOS=21000687;//jseditor.ArrayEditor:687
        vidx = - 1;
        
        //$LASTPOS=21000704;//jseditor.ArrayEditor:704
        //$LASTPOS=21000709;//jseditor.ArrayEditor:709
        i = 0;
        for (; i<_this.subViews.length ; i++) {
          {
            //$LASTPOS=21000750;//jseditor.ArrayEditor:750
            if (_this.subViews[i].model===e) {
              //$LASTPOS=21000791;//jseditor.ArrayEditor:791
              vidx=i;
              break;
              
              
            }
          }
        }
        //$LASTPOS=21000838;//jseditor.ArrayEditor:838
        if (vidx>=0) {
          //$LASTPOS=21000862;//jseditor.ArrayEditor:862
          _this.subViews[vidx].die();
          //$LASTPOS=21000893;//jseditor.ArrayEditor:893
          _this.subViews.splice(vidx,1);
          
        }
        //$LASTPOS=21000928;//jseditor.ArrayEditor:928
        midx = _this.model.indexOf(e);
        
        //$LASTPOS=21000959;//jseditor.ArrayEditor:959
        if (midx>=0) {
          //$LASTPOS=21000982;//jseditor.ArrayEditor:982
          _this.model.splice(midx,1);
          
        }
        //$LASTPOS=21001014;//jseditor.ArrayEditor:1014
        _this.print("rmed",vidx,midx,_this.model);
        
        _thread.retVal=_this;return;
      },
      __dummy: false
    },
    decls: {"methods":{"main":{"nowait":false},"new":{"nowait":false},"loadModel":{"nowait":false},"refreshView":{"nowait":false},"push":{"nowait":false},"addSubView":{"nowait":false},"clear":{"nowait":false},"remove":{"nowait":false}}}
  });
});