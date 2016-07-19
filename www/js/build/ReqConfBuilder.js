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
        
        //$LASTPOS=9000079;//jseditor.ReqConfBuilder:79
        Tonyu.classes.jseditor.Base.apply( _this, [o]);
        //$LASTPOS=9000093;//jseditor.ReqConfBuilder:93
        _this.base=_this.htmlDir.rel(reqConf.baseUrl);
      },
      save :function _trc_ReqConfBuilder_save(data) {
        "use strict";
        var _this=this;
        var js;
        
        //$LASTPOS=9000148;//jseditor.ReqConfBuilder:148
        if (! data) {
          //$LASTPOS=9000159;//jseditor.ReqConfBuilder:159
          data=reqConf;
        }
        //$LASTPOS=9000177;//jseditor.ReqConfBuilder:177
        js = JSON.stringify(data,null,4);
        
        //$LASTPOS=9000217;//jseditor.ReqConfBuilder:217
        _this.writeFile(_this.output,"var reqConf="+js+";\n"+"if (typeof module!==\"undefined\") {\n"+"    module.exports=reqConf;\n"+"}\n");
      },
      fiber$save :function _trc_ReqConfBuilder_f_save(_thread,data) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var js;
        
        //$LASTPOS=9000148;//jseditor.ReqConfBuilder:148
        if (! data) {
          //$LASTPOS=9000159;//jseditor.ReqConfBuilder:159
          data=reqConf;
        }
        //$LASTPOS=9000177;//jseditor.ReqConfBuilder:177
        js = JSON.stringify(data,null,4);
        
        
        _thread.enter(function _trc_ReqConfBuilder_ent_save(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=9000217;//jseditor.ReqConfBuilder:217
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
        
        //$LASTPOS=9000409;//jseditor.ReqConfBuilder:409
        tf = file.up().rel(file.truncExt());
        
        //$LASTPOS=9000452;//jseditor.ReqConfBuilder:452
        reqConf.paths[name]=tf.relPath(_this.base);
        //$LASTPOS=9000494;//jseditor.ReqConfBuilder:494
        Tonyu.extend(reqConf.paths,_this.paths);
      },
      fiber$addPath :function _trc_ReqConfBuilder_f_addPath(_thread,name,file) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var tf;
        
        //$LASTPOS=9000409;//jseditor.ReqConfBuilder:409
        tf = file.up().rel(file.truncExt());
        
        //$LASTPOS=9000452;//jseditor.ReqConfBuilder:452
        reqConf.paths[name]=tf.relPath(_this.base);
        //$LASTPOS=9000494;//jseditor.ReqConfBuilder:494
        Tonyu.extend(reqConf.paths,_this.paths);
        
        _thread.retVal=_this;return;
      },
      cleanUnused :function _trc_ReqConfBuilder_cleanUnused() {
        "use strict";
        var _this=this;
        var newPaths;
        var k;
        var v;
        var _it_51;
        var f;
        
        //$LASTPOS=9000553;//jseditor.ReqConfBuilder:553
        newPaths = {};
        
        //$LASTPOS=9000574;//jseditor.ReqConfBuilder:574
        _it_51=Tonyu.iterator(reqConf.paths,2);
        while(_it_51.next()) {
          k=_it_51[0];
          v=_it_51[1];
          
          //$LASTPOS=9000615;//jseditor.ReqConfBuilder:615
          f = _this.base.rel(v+".js");
          
          //$LASTPOS=9000648;//jseditor.ReqConfBuilder:648
          if (f.exists()) {
            //$LASTPOS=9000678;//jseditor.ReqConfBuilder:678
            newPaths[k]=v;
            
          }
          
        }
        //$LASTPOS=9000713;//jseditor.ReqConfBuilder:713
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
        var _it_51;
        var f;
        
        //$LASTPOS=9000553;//jseditor.ReqConfBuilder:553
        newPaths = {};
        
        //$LASTPOS=9000574;//jseditor.ReqConfBuilder:574
        _it_51=Tonyu.iterator(reqConf.paths,2);
        while(_it_51.next()) {
          k=_it_51[0];
          v=_it_51[1];
          
          //$LASTPOS=9000615;//jseditor.ReqConfBuilder:615
          f = _this.base.rel(v+".js");
          
          //$LASTPOS=9000648;//jseditor.ReqConfBuilder:648
          if (f.exists()) {
            //$LASTPOS=9000678;//jseditor.ReqConfBuilder:678
            newPaths[k]=v;
            
          }
          
        }
        
        _thread.enter(function _trc_ReqConfBuilder_ent_cleanUnused(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=9000713;//jseditor.ReqConfBuilder:713
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