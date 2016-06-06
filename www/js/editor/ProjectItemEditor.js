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
          _this.link=_this.tag("a",{$bind: "name"});
          //$LASTPOS=19000111;//jseditor.ProjectItemEditor:111
          _this.tag("div",(function anonymous_122() {
            
            //$LASTPOS=19000133;//jseditor.ProjectItemEditor:133
            _this.tag("span","名前：");
            //$LASTPOS=19000160;//jseditor.ProjectItemEditor:160
            _this.tag("input",{$bind: "name"});
            //$LASTPOS=19000197;//jseditor.ProjectItemEditor:197
            _this.tag("span","ディレクトリ：");
            //$LASTPOS=19000228;//jseditor.ProjectItemEditor:228
            _this.tag("input",{$bind: "path",size: 80});
            //$LASTPOS=19000273;//jseditor.ProjectItemEditor:273
            _this.tag("button",{on: {click: (function anonymous_298() {
              
              //$LASTPOS=19000314;//jseditor.ProjectItemEditor:314
              _this.parent.remove(_this.model);
            })}},"削除");
          }));
        }));
        //$LASTPOS=19000367;//jseditor.ProjectItemEditor:367
        _this.on("modelChanged",(function anonymous_386(e) {
          
          //$LASTPOS=19000397;//jseditor.ProjectItemEditor:397
          if (e.key=="name") {
            //$LASTPOS=19000426;//jseditor.ProjectItemEditor:426
            _this.link.attr("href",_this.url(e.value));
            
          }
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
                _this.link=_this.tag("a",{$bind: "name"});
                //$LASTPOS=19000111;//jseditor.ProjectItemEditor:111
                _this.tag("div",(function anonymous_122() {
                  
                  //$LASTPOS=19000133;//jseditor.ProjectItemEditor:133
                  _this.tag("span","名前：");
                  //$LASTPOS=19000160;//jseditor.ProjectItemEditor:160
                  _this.tag("input",{$bind: "name"});
                  //$LASTPOS=19000197;//jseditor.ProjectItemEditor:197
                  _this.tag("span","ディレクトリ：");
                  //$LASTPOS=19000228;//jseditor.ProjectItemEditor:228
                  _this.tag("input",{$bind: "path",size: 80});
                  //$LASTPOS=19000273;//jseditor.ProjectItemEditor:273
                  _this.tag("button",{on: {click: (function anonymous_298() {
                    
                    //$LASTPOS=19000314;//jseditor.ProjectItemEditor:314
                    _this.parent.remove(_this.model);
                  })}},"削除");
                }));
              }));
              __pc=1;return;
            case 1:
              
              //$LASTPOS=19000367;//jseditor.ProjectItemEditor:367
              _this.on("modelChanged",(function anonymous_386(e) {
                
                //$LASTPOS=19000397;//jseditor.ProjectItemEditor:397
                if (e.key=="name") {
                  //$LASTPOS=19000426;//jseditor.ProjectItemEditor:426
                  _this.link.attr("href",_this.url(e.value));
                  
                }
              }));
              _thread.exit(_this);return;
            }
          }
        });
      },
      url :function _trc_ProjectItemEditor_url(name) {
        "use strict";
        var _this=this;
        var url;
        
        //$LASTPOS=19000484;//jseditor.ProjectItemEditor:484
        url = location.href.replace(/\?.*/,"");
        
        //$LASTPOS=19000530;//jseditor.ProjectItemEditor:530
        url+="?r=TEdit&prj="+name;
        return url;
      },
      fiber$url :function _trc_ProjectItemEditor_f_url(_thread,name) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var url;
        
        //$LASTPOS=19000484;//jseditor.ProjectItemEditor:484
        url = location.href.replace(/\?.*/,"");
        
        //$LASTPOS=19000530;//jseditor.ProjectItemEditor:530
        url+="?r=TEdit&prj="+name;
        _thread.retVal=url;return;
        
        
        _thread.retVal=_this;return;
      },
      openProject :function _trc_ProjectItemEditor_openProject() {
        "use strict";
        var _this=this;
        
        //$LASTPOS=19000597;//jseditor.ProjectItemEditor:597
        _this.parent.parent.parallel("saveAndGo",Tonyu.bindFunc(_this,_this.url));
      },
      fiber$openProject :function _trc_ProjectItemEditor_f_openProject(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=19000597;//jseditor.ProjectItemEditor:597
        _this.parent.parent.parallel("saveAndGo",Tonyu.bindFunc(_this,_this.url));
        
        _thread.retVal=_this;return;
      },
      __dummy: false
    },
    decls: {"methods":{"main":{"nowait":false},"url":{"nowait":false},"openProject":{"nowait":false}}}
  });
});