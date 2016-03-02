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
        
        
        //$LASTPOS=9000105;//jseditor.JSEProject:105
        prjs.forEach((function anonymous_118(p) {
          
          //$LASTPOS=9000133;//jseditor.JSEProject:133
          if (p.name==name) {
            //$LASTPOS=9000151;//jseditor.JSEProject:151
            prj=p;
          }
        }));
        //$LASTPOS=9000169;//jseditor.JSEProject:169
        if (! prj) {
          //$LASTPOS=9000189;//jseditor.JSEProject:189
          _this.name="JSEditor";
          //$LASTPOS=9000220;//jseditor.JSEProject:220
          _this.path=FS.get(process.cwd().replace(/\\/g,"/"));
          //$LASTPOS=9000275;//jseditor.JSEProject:275
          _this.www=_this.path.rel("www/");
          //$LASTPOS=9000305;//jseditor.JSEProject:305
          _this.tonyuC=_this.www.rel("js/");
          //$LASTPOS=9000336;//jseditor.JSEProject:336
          _this.reqConf=_this.www.rel("js/reqConf.js");
          
        } else {
          //$LASTPOS=9000391;//jseditor.JSEProject:391
          _this.name=prj.name;
          //$LASTPOS=9000419;//jseditor.JSEProject:419
          _this.path=FS.get(prj.path.replace(/\\/g,"/"));
          //$LASTPOS=9000469;//jseditor.JSEProject:469
          _this.www=_this.path.rel(prj.www);
          //$LASTPOS=9000500;//jseditor.JSEProject:500
          _this.tonyuC=_this.path.rel(prj.tonyuC);
          //$LASTPOS=9000537;//jseditor.JSEProject:537
          _this.reqConf=_this.path.rel(prj.reqConf);
          
        }
      },
      __dummy: false
    },
    decls: {"methods":{"main":{"nowait":false},"new":{"nowait":false}}}
  });
});