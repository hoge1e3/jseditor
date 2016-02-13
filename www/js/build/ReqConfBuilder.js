define(function (require) {
  var Tonyu=require('Tonyu');
  var Base=require('Base');
  return Tonyu.klass.define({
    fullName: 'jseditor.ReqConfBuilder',
    shortName: 'ReqConfBuilder',
    namespace: 'jseditor',
    superclass: Tonyu.classes.jseditor.Base,
    includes: [],
    methods: {
      main :function _trc_ReqConfBuilder_main() {
        "use strict";
        var _this=this;
        
      },
      fiber$main :function _trc_ReqConfBuilder_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        _thread.retVal=_this;return;
      },
      build :function _trc_ReqConfBuilder_build() {
        "use strict";
        var _this=this;
        var base;
        var newPaths;
        var k;
        var v;
        var _it_30;
        var f;
        var js;
        
        //$LASTPOS=6000059;//jseditor.ReqConfBuilder:59
        base = _this.htmlDir.rel(reqConf.baseUrl);
        
        //$LASTPOS=6000102;//jseditor.ReqConfBuilder:102
        _this.print(base.path());
        //$LASTPOS=6000126;//jseditor.ReqConfBuilder:126
        newPaths = {};
        
        //$LASTPOS=6000147;//jseditor.ReqConfBuilder:147
        _it_30=Tonyu.iterator(reqConf.paths,2);
        while(_it_30.next()) {
          k=_it_30[0];
          v=_it_30[1];
          
          //$LASTPOS=6000188;//jseditor.ReqConfBuilder:188
          f = base.rel(v+".js");
          
          //$LASTPOS=6000221;//jseditor.ReqConfBuilder:221
          if (f.exists()) {
            //$LASTPOS=6000251;//jseditor.ReqConfBuilder:251
            newPaths[k]=v;
            
          }
          
        }
        //$LASTPOS=6000333;//jseditor.ReqConfBuilder:333
        js = JSON.stringify({shim: reqConf.shim,paths: newPaths,baseUrl: reqConf.baseUrl},null,4);
        
        //$LASTPOS=6000465;//jseditor.ReqConfBuilder:465
        _this.writeFile(_this.output,"var reqConf="+js+";\n"+"if (typeof module!==\"undefined\") {\n"+"    module.exports=reqConf;\n"+"}\n");
      },
      fiber$build :function _trc_ReqConfBuilder_f_build(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var base;
        var newPaths;
        var k;
        var v;
        var _it_30;
        var f;
        var js;
        
        //$LASTPOS=6000059;//jseditor.ReqConfBuilder:59
        base = _this.htmlDir.rel(reqConf.baseUrl);
        
        
        _thread.enter(function _trc_ReqConfBuilder_ent_build(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=6000102;//jseditor.ReqConfBuilder:102
              _this.fiber$print(_thread, base.path());
              __pc=1;return;
            case 1:
              
              //$LASTPOS=6000126;//jseditor.ReqConfBuilder:126
              newPaths = {};
              
              //$LASTPOS=6000147;//jseditor.ReqConfBuilder:147
              _it_30=Tonyu.iterator(reqConf.paths,2);
              while(_it_30.next()) {
                k=_it_30[0];
                v=_it_30[1];
                
                //$LASTPOS=6000188;//jseditor.ReqConfBuilder:188
                f = base.rel(v+".js");
                
                //$LASTPOS=6000221;//jseditor.ReqConfBuilder:221
                if (f.exists()) {
                  //$LASTPOS=6000251;//jseditor.ReqConfBuilder:251
                  newPaths[k]=v;
                  
                }
                
              }
              //$LASTPOS=6000333;//jseditor.ReqConfBuilder:333
              js = JSON.stringify({shim: reqConf.shim,paths: newPaths,baseUrl: reqConf.baseUrl},null,4);
              
              //$LASTPOS=6000465;//jseditor.ReqConfBuilder:465
              _this.fiber$writeFile(_thread, _this.output, "var reqConf="+js+";\n"+"if (typeof module!==\"undefined\") {\n"+"    module.exports=reqConf;\n"+"}\n");
              __pc=2;return;
            case 2:
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      __dummy: false
    },
    decls: {"methods":{"main":{"nowait":false},"build":{"nowait":false}}}
  });
});