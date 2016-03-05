define(function (require) {
  var Tonyu=require('Tonyu');
  var UIForm=require('UIForm');
  return Tonyu.klass.define({
    fullName: 'jseditor.MyForm',
    shortName: 'MyForm',
    namespace: 'jseditor',
    superclass: Tonyu.classes.jseditor.UIForm,
    includes: [],
    methods: {
      main :function _trc_MyForm_main() {
        "use strict";
        var _this=this;
        
        //$LASTPOS=16000017;//jseditor.MyForm:17
        _this.tag("div",(function anonymous_28() {
          
          //$LASTPOS=16000035;//jseditor.MyForm:35
          _this.tag("h1","てすと2！");
          //$LASTPOS=16000058;//jseditor.MyForm:58
          _this.num=_this.tag("span",0);
          //$LASTPOS=16000082;//jseditor.MyForm:82
          _this.tag("br");
          //$LASTPOS=16000097;//jseditor.MyForm:97
          _this.tag("button",{on: {click: Tonyu.bindFunc(_this,_this.inc)}},"+");
          //$LASTPOS=16000137;//jseditor.MyForm:137
          _this.tag("button",{on: {click: Tonyu.bindFunc(_this,_this.countP)}},"+10");
        }));
        //$LASTPOS=16000181;//jseditor.MyForm:181
        _this.i=0;
      },
      fiber$main :function _trc_MyForm_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        _thread.enter(function _trc_MyForm_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=16000017;//jseditor.MyForm:17
              _this.fiber$tag(_thread, "div", (function anonymous_28() {
                
                //$LASTPOS=16000035;//jseditor.MyForm:35
                _this.tag("h1","てすと2！");
                //$LASTPOS=16000058;//jseditor.MyForm:58
                _this.num=_this.tag("span",0);
                //$LASTPOS=16000082;//jseditor.MyForm:82
                _this.tag("br");
                //$LASTPOS=16000097;//jseditor.MyForm:97
                _this.tag("button",{on: {click: Tonyu.bindFunc(_this,_this.inc)}},"+");
                //$LASTPOS=16000137;//jseditor.MyForm:137
                _this.tag("button",{on: {click: Tonyu.bindFunc(_this,_this.countP)}},"+10");
              }));
              __pc=1;return;
            case 1:
              
              //$LASTPOS=16000181;//jseditor.MyForm:181
              _this.i=0;
              _thread.exit(_this);return;
            }
          }
        });
      },
      countP :function _trc_MyForm_countP() {
        "use strict";
        var _this=this;
        
        //$LASTPOS=16000198;//jseditor.MyForm:198
        _this.parallel("count");
      },
      fiber$countP :function _trc_MyForm_f_countP(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=16000198;//jseditor.MyForm:198
        _this.parallel("count");
        
        _thread.retVal=_this;return;
      },
      count :function _trc_MyForm_count() {
        "use strict";
        var _this=this;
        var i;
        
        //$LASTPOS=16000234;//jseditor.MyForm:234
        //$LASTPOS=16000239;//jseditor.MyForm:239
        i = 0;
        for (; i<10 ; i++) {
          {
            //$LASTPOS=16000268;//jseditor.MyForm:268
            _this.inc();
            //$LASTPOS=16000283;//jseditor.MyForm:283
            _this.update(50);
          }
        }
      },
      fiber$count :function _trc_MyForm_f_count(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var i;
        
        
        _thread.enter(function _trc_MyForm_ent_count(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=16000234;//jseditor.MyForm:234
              //$LASTPOS=16000239;//jseditor.MyForm:239
              i = 0;
              
            case 1:
              if (!(i<10)) { __pc=5; break; }
              //$LASTPOS=16000268;//jseditor.MyForm:268
              _this.fiber$inc(_thread);
              __pc=2;return;
            case 2:
              
              //$LASTPOS=16000283;//jseditor.MyForm:283
              _this.fiber$update(_thread, 50);
              __pc=3;return;
            case 3:
              
            case 4:
              i++;
              __pc=1;break;
            case 5:
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      inc :function _trc_MyForm_inc() {
        "use strict";
        var _this=this;
        
        //$LASTPOS=16000316;//jseditor.MyForm:316
        _this.i++;
        //$LASTPOS=16000325;//jseditor.MyForm:325
        _this.num.text(_this.i);
      },
      fiber$inc :function _trc_MyForm_f_inc(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=16000316;//jseditor.MyForm:316
        _this.i++;
        //$LASTPOS=16000325;//jseditor.MyForm:325
        _this.num.text(_this.i);
        
        _thread.retVal=_this;return;
      },
      test :function _trc_MyForm_test() {
        "use strict";
        var _this=this;
        
        //$LASTPOS=16000354;//jseditor.MyForm:354
        _this.change(_this.num,(function anonymous_366() {
          
        }));
      },
      fiber$test :function _trc_MyForm_f_test(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        _thread.enter(function _trc_MyForm_ent_test(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=16000354;//jseditor.MyForm:354
              _this.fiber$change(_thread, _this.num, (function anonymous_366() {
                
              }));
              __pc=1;return;
            case 1:
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      __dummy: false
    },
    decls: {"methods":{"main":{"nowait":false},"countP":{"nowait":false},"count":{"nowait":false},"inc":{"nowait":false},"test":{"nowait":false}}}
  });
});