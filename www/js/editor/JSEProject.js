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
        
        
        //$LASTPOS=15000064;//jseditor.JSEProject:64
        prjs.forEach((function anonymous_77(p) {
          
          //$LASTPOS=15000092;//jseditor.JSEProject:92
          if (p.name==name) {
            //$LASTPOS=15000110;//jseditor.JSEProject:110
            prj=p;
          }
        }));
        //$LASTPOS=15000128;//jseditor.JSEProject:128
        if (! prj) {
          //$LASTPOS=15000148;//jseditor.JSEProject:148
          _this.name="JSEditor";
          //$LASTPOS=15000179;//jseditor.JSEProject:179
          _this.path=FS.get(_this.process.cwd().replace(/\\/g,"/"));
          //$LASTPOS=15000234;//jseditor.JSEProject:234
          _this.www=prj.path.rel("www/");
          //$LASTPOS=15000268;//jseditor.JSEProject:268
          _this.tonyuC=prj.www.rel("js/");
          //$LASTPOS=15000303;//jseditor.JSEProject:303
          _this.reqConf=prj.js.rel("reqConf.js");
          
        } else {
          //$LASTPOS=15000363;//jseditor.JSEProject:363
          _this.name=prj.name;
          //$LASTPOS=15000391;//jseditor.JSEProject:391
          _this.path=FS.get(prj.path.replace(/\\/g,"/"));
          //$LASTPOS=15000441;//jseditor.JSEProject:441
          _this.www=_this.path.rel(prj.www);
          //$LASTPOS=15000472;//jseditor.JSEProject:472
          _this.tonyuC=_this.path.rel(prj.tonyuC);
          //$LASTPOS=15000509;//jseditor.JSEProject:509
          _this.reqConf=_this.path.rel(prj.reqConf);
          
        }
        //$LASTPOS=15000555;//jseditor.JSEProject:555
        reqConf;
      },
      __dummy: false
    },
    decls: {"methods":{"main":{"nowait":false},"new":{"nowait":false}}}
  });
});