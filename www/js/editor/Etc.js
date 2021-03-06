define(function (require) {
  var Tonyu=require('Tonyu');
  var FS=require('FS');
  var JSONConf=require('JSONConf');
  return Tonyu.klass.define({
    fullName: 'jseditor.Etc',
    shortName: 'Etc',
    namespace: 'jseditor',
    includes: [],
    methods: {
      main :function _trc_Etc_main() {
        "use strict";
        var _this=this;
        
      },
      fiber$main :function _trc_Etc_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        _thread.retVal=_this;return;
      },
      initialize :function _trc_Etc_initialize() {
        "use strict";
        var _this=this;
        var d;
        
        //$LASTPOS=4000050;//jseditor.Etc:50
        if (localStorage.etc) {
          //$LASTPOS=4000082;//jseditor.Etc:82
          d = FS.get(localStorage.etc);
          
          //$LASTPOS=4000122;//jseditor.Etc:122
          if (d.exists()&&d.isDir()) {
            //$LASTPOS=4000165;//jseditor.Etc:165
            _this.dir=d;
            
          }
          
        }
        //$LASTPOS=4000193;//jseditor.Etc:193
        if (! _this.dir) {
          //$LASTPOS=4000213;//jseditor.Etc:213
          _this.dir=FS.get(process.cwd()).rel(".jsetc/");
          
        }
      },
      conf :function _trc_Etc_conf(path) {
        "use strict";
        var _this=this;
        
        return new JSONConf(_this.rel(path));
      },
      fiber$conf :function _trc_Etc_f_conf(_thread,path) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        _thread.retVal=new JSONConf(_this.rel(path));return;
        
        
        _thread.retVal=_this;return;
      },
      rel :function _trc_Etc_rel(p) {
        "use strict";
        var _this=this;
        
        return _this.dir.rel(p);
      },
      fiber$rel :function _trc_Etc_f_rel(_thread,p) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        _thread.retVal=_this.dir.rel(p);return;
        
        
        _thread.retVal=_this;return;
      },
      __dummy: false
    },
    decls: {"methods":{"main":{"nowait":false},"new":{"nowait":false},"conf":{"nowait":false},"rel":{"nowait":false}}}
  });
});