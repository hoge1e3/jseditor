define(function (require) {
  var Tonyu=require('Tonyu');
  var FS=require('FS');
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
        
        
        //$LASTPOS=12000105;//jseditor.JSEProject:105
        prjs.forEach((function anonymous_118(p) {
          
          //$LASTPOS=12000133;//jseditor.JSEProject:133
          if (p.name==name) {
            //$LASTPOS=12000151;//jseditor.JSEProject:151
            prj=p;
          }
        }));
        //$LASTPOS=12000169;//jseditor.JSEProject:169
        if (! prj) {
          //$LASTPOS=12000189;//jseditor.JSEProject:189
          _this.name="JSEditor";
          //$LASTPOS=12000220;//jseditor.JSEProject:220
          _this.path=FS.get(process.cwd().replace(/\\/g,"/"));
          //$LASTPOS=12000275;//jseditor.JSEProject:275
          _this.www=_this.path.rel("www/");
          //$LASTPOS=12000305;//jseditor.JSEProject:305
          _this.tonyuC=_this.www.rel("js/");
          //$LASTPOS=12000336;//jseditor.JSEProject:336
          _this.reqConf=_this.www.rel("js/reqConf.js");
          
        } else {
          //$LASTPOS=12000391;//jseditor.JSEProject:391
          _this.name=prj.name;
          //$LASTPOS=12000419;//jseditor.JSEProject:419
          _this.path=FS.get(prj.path.replace(/\\/g,"/"));
          //$LASTPOS=12000469;//jseditor.JSEProject:469
          _this.www=_this.path.rel(prj.www);
          //$LASTPOS=12000500;//jseditor.JSEProject:500
          _this.tonyuC=_this.path.rel(prj.tonyuC);
          //$LASTPOS=12000537;//jseditor.JSEProject:537
          _this.reqConf=_this.path.rel(prj.reqConf);
          
        }
      },
      __dummy: false
    },
    decls: {"methods":{"main":{"nowait":false},"new":{"nowait":false}}}
  });
});