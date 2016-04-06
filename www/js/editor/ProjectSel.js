define(function (require) {
  var Tonyu=require('Tonyu');
  var UIForm=require('UIForm');
  var Etc=require('Etc');
  var ArrayEditor=require('ArrayEditor');
  var ProjectItemEditor=require('ProjectItemEditor');
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
        
        //$LASTPOS=20000087;//jseditor.ProjectSel:87
        _this.etc=new Tonyu.classes.jseditor.Etc;
        //$LASTPOS=20000100;//jseditor.ProjectSel:100
        _this.prjFile=_this.etc.rel("projects.json");
        //$LASTPOS=20000134;//jseditor.ProjectSel:134
        _this.prjList=_this.readJSON(_this.prjFile);
        //$LASTPOS=20000161;//jseditor.ProjectSel:161
        _this.tag("div",(function anonymous_172() {
          
          //$LASTPOS=20000179;//jseditor.ProjectSel:179
          _this.tag("h1","プロジェクト一覧...");
          //$LASTPOS=20000208;//jseditor.ProjectSel:208
          _this.editor=_this.tag(Tonyu.classes.jseditor.ArrayEditor,{elem: Tonyu.classes.jseditor.ProjectItemEditor,model: _this.prjList});
          //$LASTPOS=20000276;//jseditor.ProjectSel:276
          _this.tag("button",{on: {click: Tonyu.bindFunc(_this,_this.add)}},"新規プロジェクト");
          //$LASTPOS=20000325;//jseditor.ProjectSel:325
          _this.tag("button",{on: {click: (function anonymous_350() {
            
            //$LASTPOS=20000361;//jseditor.ProjectSel:361
            _this.writeJSON(_this.prjFile,_this.prjList,{indent: 2});
          })}},"保存");
        }));
      },
      fiber$main :function _trc_ProjectSel_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=20000087;//jseditor.ProjectSel:87
        _this.etc=new Tonyu.classes.jseditor.Etc;
        //$LASTPOS=20000100;//jseditor.ProjectSel:100
        _this.prjFile=_this.etc.rel("projects.json");
        
        _thread.enter(function _trc_ProjectSel_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=20000134;//jseditor.ProjectSel:134
              _this.fiber$readJSON(_thread, _this.prjFile);
              __pc=1;return;
            case 1:
              _this.prjList=_thread.retVal;
              
              //$LASTPOS=20000161;//jseditor.ProjectSel:161
              _this.fiber$tag(_thread, "div", (function anonymous_172() {
                
                //$LASTPOS=20000179;//jseditor.ProjectSel:179
                _this.tag("h1","プロジェクト一覧...");
                //$LASTPOS=20000208;//jseditor.ProjectSel:208
                _this.editor=_this.tag(Tonyu.classes.jseditor.ArrayEditor,{elem: Tonyu.classes.jseditor.ProjectItemEditor,model: _this.prjList});
                //$LASTPOS=20000276;//jseditor.ProjectSel:276
                _this.tag("button",{on: {click: Tonyu.bindFunc(_this,_this.add)}},"新規プロジェクト");
                //$LASTPOS=20000325;//jseditor.ProjectSel:325
                _this.tag("button",{on: {click: (function anonymous_350() {
                  
                  //$LASTPOS=20000361;//jseditor.ProjectSel:361
                  _this.writeJSON(_this.prjFile,_this.prjList,{indent: 2});
                })}},"保存");
              }));
              __pc=2;return;
            case 2:
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      runApp :function _trc_ProjectSel_runApp() {
        "use strict";
        var _this=this;
        
        //$LASTPOS=20000066;//jseditor.ProjectSel:66
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
              //$LASTPOS=20000066;//jseditor.ProjectSel:66
              _this.fiber$appendTo(_thread, "body");
              __pc=1;return;
            case 1:
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      edit :function _trc_ProjectSel_edit() {
        "use strict";
        var _this=this;
        
        //$LASTPOS=20000436;//jseditor.ProjectSel:436
        Tonyu.globals.$editorSet.open(_this.prjFile);
      },
      fiber$edit :function _trc_ProjectSel_f_edit(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=20000436;//jseditor.ProjectSel:436
        Tonyu.globals.$editorSet.open(_this.prjFile);
        
        _thread.retVal=_this;return;
      },
      add :function _trc_ProjectSel_add() {
        "use strict";
        var _this=this;
        
        //$LASTPOS=20000477;//jseditor.ProjectSel:477
        _this.editor.push({name: "Name",path: process.cwd().replace(/\\/g,"/"),tonyuC: "www/js/",www: "www/",reqConf: "www/js/reqConf.js"});
      },
      fiber$add :function _trc_ProjectSel_f_add(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=20000477;//jseditor.ProjectSel:477
        _this.editor.push({name: "Name",path: process.cwd().replace(/\\/g,"/"),tonyuC: "www/js/",www: "www/",reqConf: "www/js/reqConf.js"});
        
        _thread.retVal=_this;return;
      },
      __dummy: false
    },
    decls: {"methods":{"main":{"nowait":false},"runApp":{"nowait":false},"edit":{"nowait":false},"add":{"nowait":false}}}
  });
});