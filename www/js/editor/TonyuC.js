define(function (require) {
  var Tonyu=require('Tonyu');
  var UI=require('UI');
  var UIDiag=require('UIDiag');
  var ProjectCompiler=require('ProjectCompiler');
  var SFile=require('SFile');
  var Base=require('Base');
  return Tonyu.klass.define({
    fullName: 'jseditor.TonyuC',
    shortName: 'TonyuC',
    namespace: 'jseditor',
    superclass: Tonyu.classes.jseditor.Base,
    includes: [],
    methods: {
      main :function _trc_TonyuC_main() {
        "use strict";
        var _this=this;
        
      },
      fiber$main :function _trc_TonyuC_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        _thread.retVal=_this;return;
      },
      compile :function _trc_TonyuC_compile(dir) {
        "use strict";
        var _this=this;
        var elem;
        var n;
        var c;
        var _it_35;
        var e;
        
        //$LASTPOS=7000051;//jseditor.TonyuC:51
        elem = UI("div","Compiling...");
        
        //$LASTPOS=7000090;//jseditor.TonyuC:90
        UIDiag.custom(elem,{width: 500,ok: true,title: "Tonyu Compiler"});
        //$LASTPOS=7000173;//jseditor.TonyuC:173
        _this.update();
        //$LASTPOS=7000187;//jseditor.TonyuC:187
        Tonyu.globals.$currentProject=ProjectCompiler(dir);
        //$LASTPOS=7000229;//jseditor.TonyuC:229
        Tonyu.globals.$currentProject.setModulePaths(reqConf.paths);
        try {
          //$LASTPOS=7000294;//jseditor.TonyuC:294
          _this.waitFor(Tonyu.globals.$currentProject.compile());
          //$LASTPOS=7000340;//jseditor.TonyuC:340
          elem.text("Compiled");
          //$LASTPOS=7000371;//jseditor.TonyuC:371
          _it_35=Tonyu.iterator(Tonyu.globals.$currentProject.env.classes,2);
          while(_it_35.next()) {
            n=_it_35[0];
            c=_it_35[1];
            
            //$LASTPOS=7000430;//jseditor.TonyuC:430
            if (SFile["is"](c.src.js)&&! reqConf.paths[c.shortName]) {
              //$LASTPOS=7000506;//jseditor.TonyuC:506
              Tonyu.globals.$reqConfBuilder.addPath(c.shortName,c.src.js);
              
            }
            
          }
          //$LASTPOS=7000586;//jseditor.TonyuC:586
          Tonyu.globals.$reqConfBuilder.save();
          
        } catch (e) {
          //$LASTPOS=7000636;//jseditor.TonyuC:636
          _this.print(e.stack);
          //$LASTPOS=7000660;//jseditor.TonyuC:660
          elem.text("Error "+e);
          
        }
      },
      fiber$compile :function _trc_TonyuC_f_compile(_thread,dir) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var elem;
        var n;
        var c;
        var _it_35;
        var e;
        
        //$LASTPOS=7000051;//jseditor.TonyuC:51
        elem = UI("div","Compiling...");
        
        //$LASTPOS=7000090;//jseditor.TonyuC:90
        UIDiag.custom(elem,{width: 500,ok: true,title: "Tonyu Compiler"});
        
        _thread.enter(function _trc_TonyuC_ent_compile(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=7000173;//jseditor.TonyuC:173
              _this.fiber$update(_thread);
              __pc=1;return;
            case 1:
              
              //$LASTPOS=7000187;//jseditor.TonyuC:187
              Tonyu.globals.$currentProject=ProjectCompiler(dir);
              //$LASTPOS=7000229;//jseditor.TonyuC:229
              Tonyu.globals.$currentProject.setModulePaths(reqConf.paths);
              _thread.enterTry(3);
              //$LASTPOS=7000294;//jseditor.TonyuC:294
              _this.fiber$waitFor(_thread, Tonyu.globals.$currentProject.compile());
              __pc=2;return;
            case 2:
              
              //$LASTPOS=7000340;//jseditor.TonyuC:340
              elem.text("Compiled");
              //$LASTPOS=7000371;//jseditor.TonyuC:371
              _it_35=Tonyu.iterator(Tonyu.globals.$currentProject.env.classes,2);
              while(_it_35.next()) {
                n=_it_35[0];
                c=_it_35[1];
                
                //$LASTPOS=7000430;//jseditor.TonyuC:430
                if (SFile["is"](c.src.js)&&! reqConf.paths[c.shortName]) {
                  //$LASTPOS=7000506;//jseditor.TonyuC:506
                  Tonyu.globals.$reqConfBuilder.addPath(c.shortName,c.src.js);
                  
                }
                
              }
              //$LASTPOS=7000586;//jseditor.TonyuC:586
              Tonyu.globals.$reqConfBuilder.save();_thread.exitTry();
              __pc=5;break;
            case 3:
              e=_thread.startCatch();
              _thread.exitTry();
              //$LASTPOS=7000636;//jseditor.TonyuC:636
              _this.fiber$print(_thread, e.stack);
              __pc=4;return;
            case 4:
              
              //$LASTPOS=7000660;//jseditor.TonyuC:660
              elem.text("Error "+e);
            case 5:
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      __dummy: false
    },
    decls: {"methods":{"main":{"nowait":false},"compile":{"nowait":false}}}
  });
});