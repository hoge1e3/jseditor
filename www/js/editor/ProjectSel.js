define(function (require) {
  var Tonyu=require('Tonyu');
  var UIForm=require('UIForm');
  var Etc=require('Etc');
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
        
        //$LASTPOS=19000087;//jseditor.ProjectSel:87
        _this.etc=new Tonyu.classes.jseditor.Etc;
        //$LASTPOS=19000100;//jseditor.ProjectSel:100
        _this.tag("div",(function anonymous_111() {
          
          //$LASTPOS=19000118;//jseditor.ProjectSel:118
          _this.tag("h1","プロジェクト一覧...");
          //$LASTPOS=19000147;//jseditor.ProjectSel:147
          _this.plist=_this.tag("div");
          //$LASTPOS=19000169;//jseditor.ProjectSel:169
          _this.parallel("list");
        }));
      },
      fiber$main :function _trc_ProjectSel_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=19000087;//jseditor.ProjectSel:87
        _this.etc=new Tonyu.classes.jseditor.Etc;
        
        _thread.enter(function _trc_ProjectSel_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=19000100;//jseditor.ProjectSel:100
              _this.fiber$tag(_thread, "div", (function anonymous_111() {
                
                //$LASTPOS=19000118;//jseditor.ProjectSel:118
                _this.tag("h1","プロジェクト一覧...");
                //$LASTPOS=19000147;//jseditor.ProjectSel:147
                _this.plist=_this.tag("div");
                //$LASTPOS=19000169;//jseditor.ProjectSel:169
                _this.parallel("list");
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
        
        //$LASTPOS=19000066;//jseditor.ProjectSel:66
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
              //$LASTPOS=19000066;//jseditor.ProjectSel:66
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
        
        //$LASTPOS=19000251;//jseditor.ProjectSel:251
        Tonyu.globals.$editorSet.open(_this.prjFile);
      },
      fiber$edit :function _trc_ProjectSel_f_edit(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=19000251;//jseditor.ProjectSel:251
        Tonyu.globals.$editorSet.open(_this.prjFile);
        
        _thread.retVal=_this;return;
      },
      add :function _trc_ProjectSel_add() {
        "use strict";
        var _this=this;
        var e;
        
        //$LASTPOS=19000292;//jseditor.ProjectSel:292
        e = {name: "Name",path: process.cwd()};
        
        //$LASTPOS=19000337;//jseditor.ProjectSel:337
        _this.prjList.push(e);
        //$LASTPOS=19000358;//jseditor.ProjectSel:358
        _this.writeFile(_this.prjFile,_this.prjList);
        //$LASTPOS=19000390;//jseditor.ProjectSel:390
        _this.addItem(e);
      },
      fiber$add :function _trc_ProjectSel_f_add(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var e;
        
        //$LASTPOS=19000292;//jseditor.ProjectSel:292
        e = {name: "Name",path: process.cwd()};
        
        //$LASTPOS=19000337;//jseditor.ProjectSel:337
        _this.prjList.push(e);
        
        _thread.enter(function _trc_ProjectSel_ent_add(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=19000358;//jseditor.ProjectSel:358
              _this.fiber$writeFile(_thread, _this.prjFile, _this.prjList);
              __pc=1;return;
            case 1:
              
              //$LASTPOS=19000390;//jseditor.ProjectSel:390
              _this.fiber$addItem(_thread, e);
              __pc=2;return;
            case 2:
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      list :function _trc_ProjectSel_list() {
        "use strict";
        var _this=this;
        
        //$LASTPOS=19000419;//jseditor.ProjectSel:419
        _this.prjFile=_this.etc.rel("projects.json");
        //$LASTPOS=19000457;//jseditor.ProjectSel:457
        _this.prjList=_this.readJSON(_this.prjFile);
        //$LASTPOS=19000511;//jseditor.ProjectSel:511
        _this.prjList.forEach(Tonyu.bindFunc(_this,_this.addItem));
      },
      fiber$list :function _trc_ProjectSel_f_list(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=19000419;//jseditor.ProjectSel:419
        _this.prjFile=_this.etc.rel("projects.json");
        
        _thread.enter(function _trc_ProjectSel_ent_list(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=19000457;//jseditor.ProjectSel:457
              _this.fiber$readJSON(_thread, _this.prjFile);
              __pc=1;return;
            case 1:
              _this.prjList=_thread.retVal;
              
              //$LASTPOS=19000511;//jseditor.ProjectSel:511
              _this.prjList.forEach(Tonyu.bindFunc(_this,_this.addItem));
              _thread.exit(_this);return;
            }
          }
        });
      },
      addItem :function _trc_ProjectSel_addItem(e) {
        "use strict";
        var _this=this;
        var url;
        
        //$LASTPOS=19000557;//jseditor.ProjectSel:557
        url = location.href.replace(/\?.*/,"");
        
        //$LASTPOS=19000603;//jseditor.ProjectSel:603
        _this.change(_this.plist,(function anonymous_617() {
          
          //$LASTPOS=19000628;//jseditor.ProjectSel:628
          _this.tag("div",(function anonymous_639() {
            
            //$LASTPOS=19000654;//jseditor.ProjectSel:654
            _this.tag("a",{href: url+"?prj="+e.name},e.name);
          }));
        }));
      },
      fiber$addItem :function _trc_ProjectSel_f_addItem(_thread,e) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var url;
        
        //$LASTPOS=19000557;//jseditor.ProjectSel:557
        url = location.href.replace(/\?.*/,"");
        
        
        _thread.enter(function _trc_ProjectSel_ent_addItem(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=19000603;//jseditor.ProjectSel:603
              _this.fiber$change(_thread, _this.plist, (function anonymous_617() {
                
                //$LASTPOS=19000628;//jseditor.ProjectSel:628
                _this.tag("div",(function anonymous_639() {
                  
                  //$LASTPOS=19000654;//jseditor.ProjectSel:654
                  _this.tag("a",{href: url+"?prj="+e.name},e.name);
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
    decls: {"methods":{"main":{"nowait":false},"runApp":{"nowait":false},"edit":{"nowait":false},"add":{"nowait":false},"list":{"nowait":false},"addItem":{"nowait":false}}}
  });
});