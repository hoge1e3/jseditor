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
        
        //$LASTPOS=20000133;//jseditor.ProjectSel:133
        _this.etc=new Tonyu.classes.jseditor.Etc;
        //$LASTPOS=20000146;//jseditor.ProjectSel:146
        _this.prjFile=_this.etc.rel("projects.json");
        //$LASTPOS=20000180;//jseditor.ProjectSel:180
        _this.prjList=_this.readJSON(_this.prjFile,[]);
        //$LASTPOS=20000210;//jseditor.ProjectSel:210
        _this.tag("div",(function anonymous_221() {
          
          //$LASTPOS=20000228;//jseditor.ProjectSel:228
          _this.mesg=_this.tag("h1","プロジェクト一覧...");
          //$LASTPOS=20000262;//jseditor.ProjectSel:262
          _this.editor=_this.tag(Tonyu.classes.jseditor.ArrayEditor,{elem: Tonyu.classes.jseditor.ProjectItemEditor,model: _this.prjList});
          //$LASTPOS=20000353;//jseditor.ProjectSel:353
          _this.tag("button",{on: {click: Tonyu.bindFunc(_this,_this.add)}},"新規プロジェクト");
          //$LASTPOS=20000402;//jseditor.ProjectSel:402
          _this.tag("div",{align: _this.right},(function anonymous_427() {
            
            //$LASTPOS=20000438;//jseditor.ProjectSel:438
            _this.tag("button",{on: {click: Tonyu.bindFunc(_this,_this.setEtc)}},"ワークスペース...");
          }));
        }));
        //$LASTPOS=20000544;//jseditor.ProjectSel:544
        $(window).on("beforeunload",(function anonymous_573() {
          var e;
          
          try {
            //$LASTPOS=20000594;//jseditor.ProjectSel:594
            if (! _this.nosave) {
              //$LASTPOS=20000607;//jseditor.ProjectSel:607
              _this.save();
            }
            
          } catch (e) {
            //$LASTPOS=20000639;//jseditor.ProjectSel:639
            _this.alert(e);
            
          }
        }));
      },
      fiber$main :function _trc_ProjectSel_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=20000133;//jseditor.ProjectSel:133
        _this.etc=new Tonyu.classes.jseditor.Etc;
        //$LASTPOS=20000146;//jseditor.ProjectSel:146
        _this.prjFile=_this.etc.rel("projects.json");
        
        _thread.enter(function _trc_ProjectSel_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=20000180;//jseditor.ProjectSel:180
              _this.fiber$readJSON(_thread, _this.prjFile, []);
              __pc=1;return;
            case 1:
              _this.prjList=_thread.retVal;
              
              //$LASTPOS=20000210;//jseditor.ProjectSel:210
              _this.fiber$tag(_thread, "div", (function anonymous_221() {
                
                //$LASTPOS=20000228;//jseditor.ProjectSel:228
                _this.mesg=_this.tag("h1","プロジェクト一覧...");
                //$LASTPOS=20000262;//jseditor.ProjectSel:262
                _this.editor=_this.tag(Tonyu.classes.jseditor.ArrayEditor,{elem: Tonyu.classes.jseditor.ProjectItemEditor,model: _this.prjList});
                //$LASTPOS=20000353;//jseditor.ProjectSel:353
                _this.tag("button",{on: {click: Tonyu.bindFunc(_this,_this.add)}},"新規プロジェクト");
                //$LASTPOS=20000402;//jseditor.ProjectSel:402
                _this.tag("div",{align: _this.right},(function anonymous_427() {
                  
                  //$LASTPOS=20000438;//jseditor.ProjectSel:438
                  _this.tag("button",{on: {click: Tonyu.bindFunc(_this,_this.setEtc)}},"ワークスペース...");
                }));
              }));
              __pc=2;return;
            case 2:
              
              //$LASTPOS=20000544;//jseditor.ProjectSel:544
              $(window).on("beforeunload",(function anonymous_573() {
                var e;
                
                try {
                  //$LASTPOS=20000594;//jseditor.ProjectSel:594
                  if (! _this.nosave) {
                    //$LASTPOS=20000607;//jseditor.ProjectSel:607
                    _this.save();
                  }
                  
                } catch (e) {
                  //$LASTPOS=20000639;//jseditor.ProjectSel:639
                  _this.alert(e);
                  
                }
              }));
              _thread.exit(_this);return;
            }
          }
        });
      },
      runApp :function _trc_ProjectSel_runApp() {
        "use strict";
        var _this=this;
        
        //$LASTPOS=20000112;//jseditor.ProjectSel:112
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
              //$LASTPOS=20000112;//jseditor.ProjectSel:112
              _this.fiber$appendTo(_thread, "body");
              __pc=1;return;
            case 1:
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      saveAndGo :function _trc_ProjectSel_saveAndGo(url) {
        "use strict";
        var _this=this;
        
        //$LASTPOS=20000681;//jseditor.ProjectSel:681
        _this.mesg.text("Opening.. "+url);
        //$LASTPOS=20000714;//jseditor.ProjectSel:714
        _this.save();
        //$LASTPOS=20000756;//jseditor.ProjectSel:756
        _this.update(100);
        //$LASTPOS=20000773;//jseditor.ProjectSel:773
        _this.nosave=true;
        //$LASTPOS=20000790;//jseditor.ProjectSel:790
        location.href=url;
      },
      fiber$saveAndGo :function _trc_ProjectSel_f_saveAndGo(_thread,url) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=20000681;//jseditor.ProjectSel:681
        _this.mesg.text("Opening.. "+url);
        
        _thread.enter(function _trc_ProjectSel_ent_saveAndGo(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=20000714;//jseditor.ProjectSel:714
              _this.fiber$save(_thread);
              __pc=1;return;
            case 1:
              
              //$LASTPOS=20000756;//jseditor.ProjectSel:756
              _this.fiber$update(_thread, 100);
              __pc=2;return;
            case 2:
              
              //$LASTPOS=20000773;//jseditor.ProjectSel:773
              _this.nosave=true;
              //$LASTPOS=20000790;//jseditor.ProjectSel:790
              location.href=url;
              _thread.exit(_this);return;
            }
          }
        });
      },
      save :function _trc_ProjectSel_save() {
        "use strict";
        var _this=this;
        
        //$LASTPOS=20000825;//jseditor.ProjectSel:825
        _this.writeJSON(_this.prjFile,_this.prjList,{indent: 2});
      },
      fiber$save :function _trc_ProjectSel_f_save(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        _thread.enter(function _trc_ProjectSel_ent_save(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=20000825;//jseditor.ProjectSel:825
              _this.fiber$writeJSON(_thread, _this.prjFile, _this.prjList, {indent: 2});
              __pc=1;return;
            case 1:
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      add :function _trc_ProjectSel_add() {
        "use strict";
        var _this=this;
        
        //$LASTPOS=20000879;//jseditor.ProjectSel:879
        _this.editor.push({name: "Name",path: process.cwd().replace(/\\/g,"/"),tonyuC: "www/js/",www: "www/",reqConf: "www/js/reqConf.js"});
      },
      fiber$add :function _trc_ProjectSel_f_add(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=20000879;//jseditor.ProjectSel:879
        _this.editor.push({name: "Name",path: process.cwd().replace(/\\/g,"/"),tonyuC: "www/js/",www: "www/",reqConf: "www/js/reqConf.js"});
        
        _thread.retVal=_this;return;
      },
      setEtc :function _trc_ProjectSel_setEtc() {
        "use strict";
        var _this=this;
        
        //$LASTPOS=20001071;//jseditor.ProjectSel:1071
        _this.parallel(Tonyu.bindFunc(_this,_this.setEtcP));
      },
      fiber$setEtc :function _trc_ProjectSel_f_setEtc(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=20001071;//jseditor.ProjectSel:1071
        _this.parallel(Tonyu.bindFunc(_this,_this.setEtcP));
        
        _thread.retVal=_this;return;
      },
      setEtcP :function _trc_ProjectSel_setEtcP() {
        "use strict";
        var _this=this;
        var np;
        
        //$LASTPOS=20001109;//jseditor.ProjectSel:1109
        np = _this.prompt("ワークスペースのディレクトリ",localStorage.etc||"");
        
        //$LASTPOS=20001168;//jseditor.ProjectSel:1168
        if (np) {
          //$LASTPOS=20001186;//jseditor.ProjectSel:1186
          localStorage.etc=np;
          //$LASTPOS=20001215;//jseditor.ProjectSel:1215
          location.reload();
          
        }
      },
      fiber$setEtcP :function _trc_ProjectSel_f_setEtcP(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var np;
        
        
        _thread.enter(function _trc_ProjectSel_ent_setEtcP(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=20001109;//jseditor.ProjectSel:1109
              _this.fiber$prompt(_thread, "ワークスペースのディレクトリ", localStorage.etc||"");
              __pc=1;return;
            case 1:
              np=_thread.retVal;
              
              //$LASTPOS=20001168;//jseditor.ProjectSel:1168
              if (np) {
                //$LASTPOS=20001186;//jseditor.ProjectSel:1186
                localStorage.etc=np;
                //$LASTPOS=20001215;//jseditor.ProjectSel:1215
                location.reload();
                
              }
              _thread.exit(_this);return;
            }
          }
        });
      },
      __dummy: false
    },
    decls: {"methods":{"main":{"nowait":false},"runApp":{"nowait":false},"saveAndGo":{"nowait":false},"save":{"nowait":false},"add":{"nowait":false},"setEtc":{"nowait":false},"setEtcP":{"nowait":false}}}
  });
});