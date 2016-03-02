define(function (require) {
  var Tonyu=require('Tonyu');
  var FS=require('FS');
  var reqConf=require('reqConf');
  var Base=require('Base');
  return Tonyu.klass.define({
    fullName: 'jseditor.JSEProject',
    shortName: 'JSEProject',
    namespace: 'jseditor',
    superclass: Tonyu.classes.jseditor.Base,
    includes: [],
    methods: {
      main :function _trc_JSEProject_main() {
        "use strict";
        var _this=this;
        
        
      },
      fiber$main :function _trc_JSEProject_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        
        _thread.retVal=_this;return;
      },
      initialize :function _trc_JSEProject_initialize(prjs,name) {
        "use strict";
        var _this=this;
        var prj;
        
        
        //$LASTPOS=9000080;//jseditor.JSEProject:80
        prjs.forEach((function anonymous_93(p) {
          
          //$LASTPOS=9000108;//jseditor.JSEProject:108
          if (p.name==name) {
            //$LASTPOS=9000126;//jseditor.JSEProject:126
            prj=p;
          }
        }));
        //$LASTPOS=9000144;//jseditor.JSEProject:144
        if (! prj) {
          //$LASTPOS=9000164;//jseditor.JSEProject:164
          _this.name="JSEditor";
          //$LASTPOS=9000195;//jseditor.JSEProject:195
          _this.path=FS.get(process.cwd().replace(/\\/g,"/"));
          //$LASTPOS=9000250;//jseditor.JSEProject:250
          _this.www=prj.path.rel("www/");
          //$LASTPOS=9000284;//jseditor.JSEProject:284
          _this.tonyuC=prj.www.rel("js/");
          //$LASTPOS=9000319;//jseditor.JSEProject:319
          _this.reqConf=prj.js.rel("reqConf.js");
          
        } else {
          //$LASTPOS=9000379;//jseditor.JSEProject:379
          _this.name=prj.name;
          //$LASTPOS=9000407;//jseditor.JSEProject:407
          _this.path=FS.get(prj.path.replace(/\\/g,"/"));
          //$LASTPOS=9000457;//jseditor.JSEProject:457
          _this.www=_this.path.rel(prj.www);
          //$LASTPOS=9000488;//jseditor.JSEProject:488
          _this.tonyuC=_this.path.rel(prj.tonyuC);
          //$LASTPOS=9000525;//jseditor.JSEProject:525
          _this.reqConf=_this.path.rel(prj.reqConf);
          
        }
        //$LASTPOS=9000571;//jseditor.JSEProject:571
        reqConf;
      },
      __dummy: false
    },
    decls: {"methods":{"main":{"nowait":false},"new":{"nowait":false}}}
  });
});