define(function (require) {
  var Tonyu=require('Tonyu');
  var UI=require('UI');
  var UIDiag=require('UIDiag');
  var ProjectCompiler=require('ProjectCompiler');
  var SFile=require('SFile');
  var Base=require('Base');
  var ReqConfBuilder=require('ReqConfBuilder');
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
      initialize :function _trc_TonyuC_initialize(prj) {
        "use strict";
        var _this=this;
        
        //$LASTPOS=15000047;//jseditor.TonyuC:47
        _this.prj=prj;
        //$LASTPOS=15000065;//jseditor.TonyuC:65
        _this.reqConfBuilder=new Tonyu.classes.jseditor.ReqConfBuilder({output: prj.reqConf,htmlDir: prj.www});
      },
      compile :function _trc_TonyuC_compile() {
        "use strict";
        var _this=this;
        var dir;
        var elem;
        var n;
        var c;
        var _it_109;
        var e;
        
        //$LASTPOS=15000178;//jseditor.TonyuC:178
        dir = _this.prj.tonyuC;
        
        //$LASTPOS=15000202;//jseditor.TonyuC:202
        elem = UI("div","Compiling...");
        
        //$LASTPOS=15000241;//jseditor.TonyuC:241
        UIDiag.custom(elem,{width: 500,ok: true,title: "Tonyu Compiler"});
        //$LASTPOS=15000324;//jseditor.TonyuC:324
        _this.update();
        //$LASTPOS=15000338;//jseditor.TonyuC:338
        Tonyu.globals.$currentProject=ProjectCompiler(dir);
        //$LASTPOS=15000380;//jseditor.TonyuC:380
        Tonyu.globals.$currentProject.setAMDPaths(reqConf.paths);
        try {
          //$LASTPOS=15000442;//jseditor.TonyuC:442
          _this.waitFor(Tonyu.globals.$currentProject.compile());
          //$LASTPOS=15000541;//jseditor.TonyuC:541
          elem.text("Compiled");
          //$LASTPOS=15000572;//jseditor.TonyuC:572
          _it_109=Tonyu.iterator(Tonyu.globals.$currentProject.env.classes,2);
          while(_it_109.next()) {
            n=_it_109[0];
            c=_it_109[1];
            
            //$LASTPOS=15000631;//jseditor.TonyuC:631
            if (SFile["is"](c.src.js)&&! reqConf.paths[c.shortName]) {
              //$LASTPOS=15000707;//jseditor.TonyuC:707
              _this.reqConfBuilder.addPath(c.shortName,c.src.js);
              
            }
            
          }
          //$LASTPOS=15000786;//jseditor.TonyuC:786
          if (_this.reqConfBuilder) {
            //$LASTPOS=15000806;//jseditor.TonyuC:806
            _this.reqConfBuilder.save();
          }
          
        } catch (e) {
          //$LASTPOS=15000855;//jseditor.TonyuC:855
          _this.print(e.stack);
          //$LASTPOS=15000879;//jseditor.TonyuC:879
          elem.text("Error "+e);
          
        }
      },
      fiber$compile :function _trc_TonyuC_f_compile(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var dir;
        var elem;
        var n;
        var c;
        var _it_109;
        var e;
        
        //$LASTPOS=15000178;//jseditor.TonyuC:178
        dir = _this.prj.tonyuC;
        
        //$LASTPOS=15000202;//jseditor.TonyuC:202
        elem = UI("div","Compiling...");
        
        //$LASTPOS=15000241;//jseditor.TonyuC:241
        UIDiag.custom(elem,{width: 500,ok: true,title: "Tonyu Compiler"});
        
        _thread.enter(function _trc_TonyuC_ent_compile(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=15000324;//jseditor.TonyuC:324
              _this.fiber$update(_thread);
              __pc=1;return;
            case 1:
              
              //$LASTPOS=15000338;//jseditor.TonyuC:338
              Tonyu.globals.$currentProject=ProjectCompiler(dir);
              //$LASTPOS=15000380;//jseditor.TonyuC:380
              Tonyu.globals.$currentProject.setAMDPaths(reqConf.paths);
              _thread.enterTry(3);
              //$LASTPOS=15000442;//jseditor.TonyuC:442
              _this.fiber$waitFor(_thread, Tonyu.globals.$currentProject.compile());
              __pc=2;return;
            case 2:
              
              //$LASTPOS=15000541;//jseditor.TonyuC:541
              elem.text("Compiled");
              //$LASTPOS=15000572;//jseditor.TonyuC:572
              _it_109=Tonyu.iterator(Tonyu.globals.$currentProject.env.classes,2);
              while(_it_109.next()) {
                n=_it_109[0];
                c=_it_109[1];
                
                //$LASTPOS=15000631;//jseditor.TonyuC:631
                if (SFile["is"](c.src.js)&&! reqConf.paths[c.shortName]) {
                  //$LASTPOS=15000707;//jseditor.TonyuC:707
                  _this.reqConfBuilder.addPath(c.shortName,c.src.js);
                  
                }
                
              }
              //$LASTPOS=15000786;//jseditor.TonyuC:786
              if (_this.reqConfBuilder) {
                //$LASTPOS=15000806;//jseditor.TonyuC:806
                _this.reqConfBuilder.save();
              }_thread.exitTry();
              __pc=4;break;
            case 3:
              e=_thread.startCatch();
              _thread.exitTry();
              {
                //$LASTPOS=15000855;//jseditor.TonyuC:855
                _this.print(e.stack);
                //$LASTPOS=15000879;//jseditor.TonyuC:879
                elem.text("Error "+e);
              }
            case 4:
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      __dummy: false
    },
    decls: {"methods":{"main":{"nowait":false},"new":{"nowait":false},"compile":{"nowait":false}}}
  });
});