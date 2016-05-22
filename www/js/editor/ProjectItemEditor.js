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
          
          //$LASTPOS=19000052;//jseditor.ProjectItemEditor:52
          _this.tag("a",{on: {click: Tonyu.bindFunc(_this,_this.openProject)},$bind: "name"});
          //$LASTPOS=19000104;//jseditor.ProjectItemEditor:104
          _this.tag("div",(function anonymous_115() {
            
            //$LASTPOS=19000126;//jseditor.ProjectItemEditor:126
            _this.tag("span","名前：");
            //$LASTPOS=19000153;//jseditor.ProjectItemEditor:153
            _this.tag("input",{$bind: "name"});
            //$LASTPOS=19000190;//jseditor.ProjectItemEditor:190
            _this.tag("span","ディレクトリ：");
            //$LASTPOS=19000221;//jseditor.ProjectItemEditor:221
            _this.tag("input",{$bind: "path",size: 80});
            //$LASTPOS=19000266;//jseditor.ProjectItemEditor:266
            _this.tag("button",{on: {click: (function anonymous_291() {
              
              //$LASTPOS=19000307;//jseditor.ProjectItemEditor:307
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
                
                //$LASTPOS=19000052;//jseditor.ProjectItemEditor:52
                _this.tag("a",{on: {click: Tonyu.bindFunc(_this,_this.openProject)},$bind: "name"});
                //$LASTPOS=19000104;//jseditor.ProjectItemEditor:104
                _this.tag("div",(function anonymous_115() {
                  
                  //$LASTPOS=19000126;//jseditor.ProjectItemEditor:126
                  _this.tag("span","名前：");
                  //$LASTPOS=19000153;//jseditor.ProjectItemEditor:153
                  _this.tag("input",{$bind: "name"});
                  //$LASTPOS=19000190;//jseditor.ProjectItemEditor:190
                  _this.tag("span","ディレクトリ：");
                  //$LASTPOS=19000221;//jseditor.ProjectItemEditor:221
                  _this.tag("input",{$bind: "path",size: 80});
                  //$LASTPOS=19000266;//jseditor.ProjectItemEditor:266
                  _this.tag("button",{on: {click: (function anonymous_291() {
                    
                    //$LASTPOS=19000307;//jseditor.ProjectItemEditor:307
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
      openProject :function _trc_ProjectItemEditor_openProject() {
        "use strict";
        var _this=this;
        
        //$LASTPOS=19000382;//jseditor.ProjectItemEditor:382
        _this.url=location.href.replace(/\?.*/,"");
        //$LASTPOS=19000424;//jseditor.ProjectItemEditor:424
        _this.url+="?r=TEdit&prj="+_this.model.name;
        //$LASTPOS=19000461;//jseditor.ProjectItemEditor:461
        _this.parent.parent.parallel("saveAndGo",_this.url);
      },
      fiber$openProject :function _trc_ProjectItemEditor_f_openProject(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=19000382;//jseditor.ProjectItemEditor:382
        _this.url=location.href.replace(/\?.*/,"");
        //$LASTPOS=19000424;//jseditor.ProjectItemEditor:424
        _this.url+="?r=TEdit&prj="+_this.model.name;
        //$LASTPOS=19000461;//jseditor.ProjectItemEditor:461
        _this.parent.parent.parallel("saveAndGo",_this.url);
        
        _thread.retVal=_this;return;
      },
      __dummy: false
    },
    decls: {"methods":{"main":{"nowait":false},"openProject":{"nowait":false}}}
  });
});