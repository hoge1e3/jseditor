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
        
        //$LASTPOS=13000087;//jseditor.ProjectSel:87
        _this.etc=new Tonyu.classes.jseditor.Etc;
        //$LASTPOS=13000100;//jseditor.ProjectSel:100
        _this.tag("div",(function anonymous_111() {
          
          //$LASTPOS=13000118;//jseditor.ProjectSel:118
          _this.tag("h1","プロジェクト一覧...");
          //$LASTPOS=13000147;//jseditor.ProjectSel:147
          _this.plist=_this.tag("div");
          //$LASTPOS=13000169;//jseditor.ProjectSel:169
          _this.parallel("list");
        }));
      },
      fiber$main :function _trc_ProjectSel_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=13000087;//jseditor.ProjectSel:87
        _this.etc=new Tonyu.classes.jseditor.Etc;
        
        _thread.enter(function _trc_ProjectSel_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=13000100;//jseditor.ProjectSel:100
              _this.fiber$tag(_thread, "div", (function anonymous_111() {
                
                //$LASTPOS=13000118;//jseditor.ProjectSel:118
                _this.tag("h1","プロジェクト一覧...");
                //$LASTPOS=13000147;//jseditor.ProjectSel:147
                _this.plist=_this.tag("div");
                //$LASTPOS=13000169;//jseditor.ProjectSel:169
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
        
        //$LASTPOS=13000066;//jseditor.ProjectSel:66
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
              //$LASTPOS=13000066;//jseditor.ProjectSel:66
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
        
        //$LASTPOS=13000251;//jseditor.ProjectSel:251
        Tonyu.globals.$editorSet.open(_this.prj.file);
      },
      fiber$edit :function _trc_ProjectSel_f_edit(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=13000251;//jseditor.ProjectSel:251
        Tonyu.globals.$editorSet.open(_this.prj.file);
        
        _thread.retVal=_this;return;
      },
      add :function _trc_ProjectSel_add() {
        "use strict";
        var _this=this;
        var e;
        
        //$LASTPOS=13000293;//jseditor.ProjectSel:293
        e = {name: "Name",path: process.cwd()};
        
        //$LASTPOS=13000338;//jseditor.ProjectSel:338
        _this.prj.data.push(e);
        //$LASTPOS=13000360;//jseditor.ProjectSel:360
        _this.addItem(e);
      },
      fiber$add :function _trc_ProjectSel_f_add(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var e;
        
        //$LASTPOS=13000293;//jseditor.ProjectSel:293
        e = {name: "Name",path: process.cwd()};
        
        //$LASTPOS=13000338;//jseditor.ProjectSel:338
        _this.prj.data.push(e);
        
        _thread.enter(function _trc_ProjectSel_ent_add(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=13000360;//jseditor.ProjectSel:360
              _this.fiber$addItem(_thread, e);
              __pc=1;return;
            case 1:
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      list :function _trc_ProjectSel_list() {
        "use strict";
        var _this=this;
        var l;
        
        //$LASTPOS=13000389;//jseditor.ProjectSel:389
        _this.prj=_this.etc.conf("projects.json");
        //$LASTPOS=13000424;//jseditor.ProjectSel:424
        l = _this.waitFor(_this.prj.load());
        
        //$LASTPOS=13000455;//jseditor.ProjectSel:455
        l.forEach(Tonyu.bindFunc(_this,_this.addItem));
      },
      fiber$list :function _trc_ProjectSel_f_list(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var l;
        
        //$LASTPOS=13000389;//jseditor.ProjectSel:389
        _this.prj=_this.etc.conf("projects.json");
        
        _thread.enter(function _trc_ProjectSel_ent_list(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=13000424;//jseditor.ProjectSel:424
              _this.fiber$waitFor(_thread, _this.prj.load());
              __pc=1;return;
            case 1:
              l=_thread.retVal;
              
              //$LASTPOS=13000455;//jseditor.ProjectSel:455
              l.forEach(Tonyu.bindFunc(_this,_this.addItem));
              _thread.exit(_this);return;
            }
          }
        });
      },
      addItem :function _trc_ProjectSel_addItem(e) {
        "use strict";
        var _this=this;
        var url;
        
        //$LASTPOS=13000495;//jseditor.ProjectSel:495
        url = location.href.replace(/\?.*/,"");
        
        //$LASTPOS=13000541;//jseditor.ProjectSel:541
        _this.change(_this.plist,(function anonymous_555() {
          
          //$LASTPOS=13000566;//jseditor.ProjectSel:566
          _this.tag("div",(function anonymous_577() {
            
            //$LASTPOS=13000592;//jseditor.ProjectSel:592
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
        
        //$LASTPOS=13000495;//jseditor.ProjectSel:495
        url = location.href.replace(/\?.*/,"");
        
        
        _thread.enter(function _trc_ProjectSel_ent_addItem(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=13000541;//jseditor.ProjectSel:541
              _this.fiber$change(_thread, _this.plist, (function anonymous_555() {
                
                //$LASTPOS=13000566;//jseditor.ProjectSel:566
                _this.tag("div",(function anonymous_577() {
                  
                  //$LASTPOS=13000592;//jseditor.ProjectSel:592
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