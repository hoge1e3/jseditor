define(function (require) {
  var Tonyu=require('Tonyu');
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
      save :function _trc_ReqConfBuilder_save(data) {
        "use strict";
        var _this=this;
        var js;
        
        //$LASTPOS=6000062;//jseditor.ReqConfBuilder:62
        js = JSON.stringify(data,null,4);
        
        //$LASTPOS=6000102;//jseditor.ReqConfBuilder:102
        _this.writeFile(_this.output,"var reqConf="+js+";\n"+"if (typeof module!==\"undefined\") {\n"+"    module.exports=reqConf;\n"+"}\n");
      },
      fiber$save :function _trc_ReqConfBuilder_f_save(_thread,data) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var js;
        
        //$LASTPOS=6000062;//jseditor.ReqConfBuilder:62
        js = JSON.stringify(data,null,4);
        
        
        _thread.enter(function _trc_ReqConfBuilder_ent_save(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=6000102;//jseditor.ReqConfBuilder:102
              _this.fiber$writeFile(_thread, _this.output, "var reqConf="+js+";\n"+"if (typeof module!==\"undefined\") {\n"+"    module.exports=reqConf;\n"+"}\n");
              __pc=1;return;
            case 1:
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      addPath :function _trc_ReqConfBuilder_addPath(paths) {
        "use strict";
        var _this=this;
        
        //$LASTPOS=6000289;//jseditor.ReqConfBuilder:289
        Tonyu.extend(reqConf.paths,paths);
        //$LASTPOS=6000329;//jseditor.ReqConfBuilder:329
        _this.save(reqConf);
      },
      fiber$addPath :function _trc_ReqConfBuilder_f_addPath(_thread,paths) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=6000289;//jseditor.ReqConfBuilder:289
        Tonyu.extend(reqConf.paths,paths);
        
        _thread.enter(function _trc_ReqConfBuilder_ent_addPath(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=6000329;//jseditor.ReqConfBuilder:329
              _this.fiber$save(_thread, reqConf);
              __pc=1;return;
            case 1:
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      cleanUnused :function _trc_ReqConfBuilder_cleanUnused() {
        "use strict";
        var _this=this;
        var base;
        var newPaths;
        var k;
        var v;
        var _it_31;
        var f;
        
        //$LASTPOS=6000367;//jseditor.ReqConfBuilder:367
        base = _this.htmlDir.rel(reqConf.baseUrl);
        
        //$LASTPOS=6000410;//jseditor.ReqConfBuilder:410
        _this.print(base.path());
        //$LASTPOS=6000434;//jseditor.ReqConfBuilder:434
        newPaths = {};
        
        //$LASTPOS=6000455;//jseditor.ReqConfBuilder:455
        _it_31=Tonyu.iterator(reqConf.paths,2);
        while(_it_31.next()) {
          k=_it_31[0];
          v=_it_31[1];
          
          //$LASTPOS=6000496;//jseditor.ReqConfBuilder:496
          f = base.rel(v+".js");
          
          //$LASTPOS=6000529;//jseditor.ReqConfBuilder:529
          if (f.exists()) {
            //$LASTPOS=6000559;//jseditor.ReqConfBuilder:559
            newPaths[k]=v;
            
          }
          
        }
        //$LASTPOS=6000594;//jseditor.ReqConfBuilder:594
        _this.save({shim: reqConf.shim,paths: newPaths,baseUrl: reqConf.baseUrl});
      },
      fiber$cleanUnused :function _trc_ReqConfBuilder_f_cleanUnused(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var base;
        var newPaths;
        var k;
        var v;
        var _it_31;
        var f;
        
        //$LASTPOS=6000367;//jseditor.ReqConfBuilder:367
        base = _this.htmlDir.rel(reqConf.baseUrl);
        
        
        _thread.enter(function _trc_ReqConfBuilder_ent_cleanUnused(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=6000410;//jseditor.ReqConfBuilder:410
              _this.fiber$print(_thread, base.path());
              __pc=1;return;
            case 1:
              
              //$LASTPOS=6000434;//jseditor.ReqConfBuilder:434
              newPaths = {};
              
              //$LASTPOS=6000455;//jseditor.ReqConfBuilder:455
              _it_31=Tonyu.iterator(reqConf.paths,2);
              while(_it_31.next()) {
                k=_it_31[0];
                v=_it_31[1];
                
                //$LASTPOS=6000496;//jseditor.ReqConfBuilder:496
                f = base.rel(v+".js");
                
                //$LASTPOS=6000529;//jseditor.ReqConfBuilder:529
                if (f.exists()) {
                  //$LASTPOS=6000559;//jseditor.ReqConfBuilder:559
                  newPaths[k]=v;
                  
                }
                
              }
              //$LASTPOS=6000594;//jseditor.ReqConfBuilder:594
              _this.fiber$save(_thread, {shim: reqConf.shim,paths: newPaths,baseUrl: reqConf.baseUrl});
              __pc=2;return;
            case 2:
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      __dummy: false
    },
    decls: {"methods":{"main":{"nowait":false},"save":{"nowait":false},"addPath":{"nowait":false},"cleanUnused":{"nowait":false}}}
  });
});