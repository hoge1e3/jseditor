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
      initialize :function _trc_ReqConfBuilder_initialize(o) {
        "use strict";
        var _this=this;
        
        //$LASTPOS=5000058;//jseditor.ReqConfBuilder:58
        Tonyu.classes.jseditor.Base.apply( _this, [o]);
        //$LASTPOS=5000072;//jseditor.ReqConfBuilder:72
        _this.base=_this.htmlDir.rel(reqConf.baseUrl);
      },
      save :function _trc_ReqConfBuilder_save(data) {
        "use strict";
        var _this=this;
        var js;
        
        //$LASTPOS=5000127;//jseditor.ReqConfBuilder:127
        if (! data) {
          //$LASTPOS=5000138;//jseditor.ReqConfBuilder:138
          data=reqConf;
        }
        //$LASTPOS=5000156;//jseditor.ReqConfBuilder:156
        js = JSON.stringify(data,null,4);
        
        //$LASTPOS=5000196;//jseditor.ReqConfBuilder:196
        _this.writeFile(_this.output,"var reqConf="+js+";\n"+"if (typeof module!==\"undefined\") {\n"+"    module.exports=reqConf;\n"+"}\n");
      },
      fiber$save :function _trc_ReqConfBuilder_f_save(_thread,data) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var js;
        
        //$LASTPOS=5000127;//jseditor.ReqConfBuilder:127
        if (! data) {
          //$LASTPOS=5000138;//jseditor.ReqConfBuilder:138
          data=reqConf;
        }
        //$LASTPOS=5000156;//jseditor.ReqConfBuilder:156
        js = JSON.stringify(data,null,4);
        
        
        _thread.enter(function _trc_ReqConfBuilder_ent_save(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=5000196;//jseditor.ReqConfBuilder:196
              _this.fiber$writeFile(_thread, _this.output, "var reqConf="+js+";\n"+"if (typeof module!==\"undefined\") {\n"+"    module.exports=reqConf;\n"+"}\n");
              __pc=1;return;
            case 1:
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      addPath :function _trc_ReqConfBuilder_addPath(name,file) {
        "use strict";
        var _this=this;
        var tf;
        
        //$LASTPOS=5000388;//jseditor.ReqConfBuilder:388
        tf = file.up().rel(file.truncExt());
        
        //$LASTPOS=5000431;//jseditor.ReqConfBuilder:431
        reqConf.paths[name]=tf.relPath(_this.base);
        //$LASTPOS=5000473;//jseditor.ReqConfBuilder:473
        Tonyu.extend(reqConf.paths,_this.paths);
      },
      fiber$addPath :function _trc_ReqConfBuilder_f_addPath(_thread,name,file) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var tf;
        
        //$LASTPOS=5000388;//jseditor.ReqConfBuilder:388
        tf = file.up().rel(file.truncExt());
        
        //$LASTPOS=5000431;//jseditor.ReqConfBuilder:431
        reqConf.paths[name]=tf.relPath(_this.base);
        //$LASTPOS=5000473;//jseditor.ReqConfBuilder:473
        Tonyu.extend(reqConf.paths,_this.paths);
        
        _thread.retVal=_this;return;
      },
      cleanUnused :function _trc_ReqConfBuilder_cleanUnused() {
        "use strict";
        var _this=this;
        var newPaths;
        var k;
        var v;
        var _it_25;
        var f;
        
        //$LASTPOS=5000532;//jseditor.ReqConfBuilder:532
        newPaths = {};
        
        //$LASTPOS=5000553;//jseditor.ReqConfBuilder:553
        _it_25=Tonyu.iterator(reqConf.paths,2);
        while(_it_25.next()) {
          k=_it_25[0];
          v=_it_25[1];
          
          //$LASTPOS=5000594;//jseditor.ReqConfBuilder:594
          f = _this.base.rel(v+".js");
          
          //$LASTPOS=5000627;//jseditor.ReqConfBuilder:627
          if (f.exists()) {
            //$LASTPOS=5000657;//jseditor.ReqConfBuilder:657
            newPaths[k]=v;
            
          }
          
        }
        //$LASTPOS=5000692;//jseditor.ReqConfBuilder:692
        _this.save({shim: reqConf.shim,paths: newPaths,baseUrl: reqConf.baseUrl});
      },
      fiber$cleanUnused :function _trc_ReqConfBuilder_f_cleanUnused(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var newPaths;
        var k;
        var v;
        var _it_25;
        var f;
        
        //$LASTPOS=5000532;//jseditor.ReqConfBuilder:532
        newPaths = {};
        
        //$LASTPOS=5000553;//jseditor.ReqConfBuilder:553
        _it_25=Tonyu.iterator(reqConf.paths,2);
        while(_it_25.next()) {
          k=_it_25[0];
          v=_it_25[1];
          
          //$LASTPOS=5000594;//jseditor.ReqConfBuilder:594
          f = _this.base.rel(v+".js");
          
          //$LASTPOS=5000627;//jseditor.ReqConfBuilder:627
          if (f.exists()) {
            //$LASTPOS=5000657;//jseditor.ReqConfBuilder:657
            newPaths[k]=v;
            
          }
          
        }
        
        _thread.enter(function _trc_ReqConfBuilder_ent_cleanUnused(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=5000692;//jseditor.ReqConfBuilder:692
              _this.fiber$save(_thread, {shim: reqConf.shim,paths: newPaths,baseUrl: reqConf.baseUrl});
              __pc=1;return;
            case 1:
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      __dummy: false
    },
    decls: {"methods":{"main":{"nowait":false},"new":{"nowait":false},"save":{"nowait":false},"addPath":{"nowait":false},"cleanUnused":{"nowait":false}}}
  });
});