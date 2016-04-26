define(function (require) {
  var Tonyu=require('Tonyu');
  var UIForm=require('UIForm');
  return Tonyu.klass.define({
    fullName: 'jseditor.ProjectItemEditor',
    shortName: 'ProjectItemEditor',
    namespace: 'jseditor',
    superclass: Tonyu.classes.jseditor.UIForm,
    includes: [],
    methods: {
      main :function _trc_ProjectItemEditor_main() {
        "use strict";
        var _this=this;
        
        //$LASTPOS=19000034;//jseditor.ProjectItemEditor:34
        _this.tag("div",(function anonymous_45() {
          var url;
          
          //$LASTPOS=19000052;//jseditor.ProjectItemEditor:52
          url = location.href.replace(/\?.*/,"");
          
          //$LASTPOS=19000098;//jseditor.ProjectItemEditor:98
          _this.tag("a",{href: url+"?r=TEdit&prj="+_this.model.name,$bind: "name"});
          //$LASTPOS=19000163;//jseditor.ProjectItemEditor:163
          _this.tag("div",(function anonymous_174() {
            
            //$LASTPOS=19000185;//jseditor.ProjectItemEditor:185
            _this.tag("span","名前：");
            //$LASTPOS=19000212;//jseditor.ProjectItemEditor:212
            _this.tag("input",{$bind: "name"});
            //$LASTPOS=19000249;//jseditor.ProjectItemEditor:249
            _this.tag("span","ディレクトリ：");
            //$LASTPOS=19000280;//jseditor.ProjectItemEditor:280
            _this.tag("input",{$bind: "path",size: 80});
            //$LASTPOS=19000325;//jseditor.ProjectItemEditor:325
            _this.tag("button",{on: {click: (function anonymous_350() {
              
              //$LASTPOS=19000366;//jseditor.ProjectItemEditor:366
              _this.parent.remove(_this.model);
            })}},"削除");
          }));
        }));
      },
      fiber$main :function _trc_ProjectItemEditor_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        _thread.enter(function _trc_ProjectItemEditor_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=19000034;//jseditor.ProjectItemEditor:34
              _this.fiber$tag(_thread, "div", (function anonymous_45() {
                var url;
                
                //$LASTPOS=19000052;//jseditor.ProjectItemEditor:52
                url = location.href.replace(/\?.*/,"");
                
                //$LASTPOS=19000098;//jseditor.ProjectItemEditor:98
                _this.tag("a",{href: url+"?r=TEdit&prj="+_this.model.name,$bind: "name"});
                //$LASTPOS=19000163;//jseditor.ProjectItemEditor:163
                _this.tag("div",(function anonymous_174() {
                  
                  //$LASTPOS=19000185;//jseditor.ProjectItemEditor:185
                  _this.tag("span","名前：");
                  //$LASTPOS=19000212;//jseditor.ProjectItemEditor:212
                  _this.tag("input",{$bind: "name"});
                  //$LASTPOS=19000249;//jseditor.ProjectItemEditor:249
                  _this.tag("span","ディレクトリ：");
                  //$LASTPOS=19000280;//jseditor.ProjectItemEditor:280
                  _this.tag("input",{$bind: "path",size: 80});
                  //$LASTPOS=19000325;//jseditor.ProjectItemEditor:325
                  _this.tag("button",{on: {click: (function anonymous_350() {
                    
                    //$LASTPOS=19000366;//jseditor.ProjectItemEditor:366
                    _this.parent.remove(_this.model);
                  })}},"削除");
                }));
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
    decls: {"methods":{"main":{"nowait":false}}}
  });
});