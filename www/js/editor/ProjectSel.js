define(function (require) {
  var Tonyu=require('Tonyu');
  var UIForm=require('UIForm');
  return Tonyu.klass.define({
    fullName: 'jseditor.ProjectSel',
    shortName: 'ProjectSel',
    namespace: 'jseditor',
    superclass: Tonyu.classes.jseditor.UIForm,
    includes: [],
    methods: {
      main :function _trc_ProjectSel_main() {
        "use strict";
        var _this=this;
        
        //$LASTPOS=12000054;//jseditor.ProjectSel:54
        _this.tag("div",(function anonymous_65() {
          
          //$LASTPOS=12000072;//jseditor.ProjectSel:72
          _this.tag("div","プロジェクト一覧...");
        }));
      },
      fiber$main :function _trc_ProjectSel_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        _thread.enter(function _trc_ProjectSel_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=12000054;//jseditor.ProjectSel:54
              _this.fiber$tag(_thread, "div", (function anonymous_65() {
                
                //$LASTPOS=12000072;//jseditor.ProjectSel:72
                _this.tag("div","プロジェクト一覧...");
              }));
              __pc=1;return;
            case 1:
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      runApp :function _trc_ProjectSel_runApp() {
        "use strict";
        var _this=this;
        
        //$LASTPOS=12000033;//jseditor.ProjectSel:33
        _this.appendTo("body");
      },
      fiber$runApp :function _trc_ProjectSel_f_runApp(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        _thread.enter(function _trc_ProjectSel_ent_runApp(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=12000033;//jseditor.ProjectSel:33
              _this.fiber$appendTo(_thread, "body");
              __pc=1;return;
            case 1:
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      __dummy: false
    },
    decls: {"methods":{"main":{"nowait":false},"runApp":{"nowait":false}}}
  });
});