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
        var _it_44;
        var e;
        
        //$LASTPOS=8000051;//jseditor.TonyuC:51
        elem = UI("div","Compiling...");
        
        //$LASTPOS=8000090;//jseditor.TonyuC:90
        UIDiag.custom(elem,{width: 500,ok: true,title: "Tonyu Compiler"});
        //$LASTPOS=8000173;//jseditor.TonyuC:173
        _this.update();
        //$LASTPOS=8000187;//jseditor.TonyuC:187
        Tonyu.globals.$currentProject=ProjectCompiler(dir);
        //$LASTPOS=8000229;//jseditor.TonyuC:229
        Tonyu.globals.$currentProject.setAMDPaths(reqConf.paths);
        try {
          //$LASTPOS=8000291;//jseditor.TonyuC:291
          _this.waitFor(Tonyu.globals.$currentProject.compile());
          //$LASTPOS=8000337;//jseditor.TonyuC:337
          elem.text("Compiled");
          //$LASTPOS=8000368;//jseditor.TonyuC:368
          _it_44=Tonyu.iterator(Tonyu.globals.$currentProject.env.classes,2);
          while(_it_44.next()) {
            n=_it_44[0];
            c=_it_44[1];
            
            //$LASTPOS=8000427;//jseditor.TonyuC:427
            if (SFile["is"](c.src.js)&&! reqConf.paths[c.shortName]) {
              //$LASTPOS=8000503;//jseditor.TonyuC:503
              Tonyu.globals.$reqConfBuilder.addPath(c.shortName,c.src.js);
              
            }
            
          }
          //$LASTPOS=8000583;//jseditor.TonyuC:583
          if (Tonyu.globals.$reqConfBuilder) {
            //$LASTPOS=8000604;//jseditor.TonyuC:604
            Tonyu.globals.$reqConfBuilder.save();
          }
          
        } catch (e) {
          //$LASTPOS=8000654;//jseditor.TonyuC:654
          _this.print(e.stack);
          //$LASTPOS=8000678;//jseditor.TonyuC:678
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
        var _it_44;
        var e;
        
        //$LASTPOS=8000051;//jseditor.TonyuC:51
        elem = UI("div","Compiling...");
        
        //$LASTPOS=8000090;//jseditor.TonyuC:90
        UIDiag.custom(elem,{width: 500,ok: true,title: "Tonyu Compiler"});
        
        _thread.enter(function _trc_TonyuC_ent_compile(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=8000173;//jseditor.TonyuC:173
              _this.fiber$update(_thread);
              __pc=1;return;
            case 1:
              
              //$LASTPOS=8000187;//jseditor.TonyuC:187
              Tonyu.globals.$currentProject=ProjectCompiler(dir);
              //$LASTPOS=8000229;//jseditor.TonyuC:229
              Tonyu.globals.$currentProject.setAMDPaths(reqConf.paths);
              _thread.enterTry(3);
              //$LASTPOS=8000291;//jseditor.TonyuC:291
              _this.fiber$waitFor(_thread, Tonyu.globals.$currentProject.compile());
              __pc=2;return;
            case 2:
              
              //$LASTPOS=8000337;//jseditor.TonyuC:337
              elem.text("Compiled");
              //$LASTPOS=8000368;//jseditor.TonyuC:368
              _it_44=Tonyu.iterator(Tonyu.globals.$currentProject.env.classes,2);
              while(_it_44.next()) {
                n=_it_44[0];
                c=_it_44[1];
                
                //$LASTPOS=8000427;//jseditor.TonyuC:427
                if (SFile["is"](c.src.js)&&! reqConf.paths[c.shortName]) {
                  //$LASTPOS=8000503;//jseditor.TonyuC:503
                  Tonyu.globals.$reqConfBuilder.addPath(c.shortName,c.src.js);
                  
                }
                
              }
              //$LASTPOS=8000583;//jseditor.TonyuC:583
              if (Tonyu.globals.$reqConfBuilder) {
                //$LASTPOS=8000604;//jseditor.TonyuC:604
                Tonyu.globals.$reqConfBuilder.save();
              }_thread.exitTry();
              __pc=5;break;
            case 3:
              e=_thread.startCatch();
              _thread.exitTry();
              //$LASTPOS=8000654;//jseditor.TonyuC:654
              _this.fiber$print(_thread, e.stack);
              __pc=4;return;
            case 4:
              
              //$LASTPOS=8000678;//jseditor.TonyuC:678
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