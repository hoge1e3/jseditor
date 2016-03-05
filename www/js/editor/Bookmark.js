define(function (require) {
  var Tonyu=require('Tonyu');
  var UI=require('UI');
  var Base=require('Base');
  return Tonyu.klass.define({
    fullName: 'jseditor.Bookmark',
    shortName: 'Bookmark',
    namespace: 'jseditor',
    superclass: Tonyu.classes.jseditor.Base,
    includes: [],
    methods: {
      main :function _trc_Bookmark_main() {
        "use strict";
        var _this=this;
        
      },
      fiber$main :function _trc_Bookmark_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        _thread.retVal=_this;return;
      },
      initialize :function _trc_Bookmark_initialize(p) {
        "use strict";
        var _this=this;
        
        //$LASTPOS=10000058;//jseditor.Bookmark:58
        Tonyu.classes.jseditor.Base.apply( _this, [p]);
      },
      open :function _trc_Bookmark_open() {
        "use strict";
        var _this=this;
        var items;
        var d;
        function refresh() {
          
          //$LASTPOS=10000494;//jseditor.Bookmark:494
          items.empty();
          //$LASTPOS=10000517;//jseditor.Bookmark:517
          _this.data.forEach((function anonymous_530(d) {
            var item;
            
            //$LASTPOS=10000549;//jseditor.Bookmark:549
            item = UI("div",["a",{href: d.url},d.title]);
            
            //$LASTPOS=10000641;//jseditor.Bookmark:641
            items.append(item);
          }));
        }function ok() {
          
          //$LASTPOS=10000698;//jseditor.Bookmark:698
          d.dialog("close");
        }function edit() {
          
          //$LASTPOS=10000745;//jseditor.Bookmark:745
          _this.fileList.open(_this.file);
        }function add() {
          var urlHead;
          
          //$LASTPOS=10000793;//jseditor.Bookmark:793
          urlHead = location.href.replace(/\?.*/,"").replace(/#/,"");
          
          //$LASTPOS=10000863;//jseditor.Bookmark:863
          _this.data.push({title: _this.fileList.curDir.name(),url: urlHead+"?dir="+_this.fileList.curDir.path()});
          //$LASTPOS=10000991;//jseditor.Bookmark:991
          _this.writeFile(_this.file,JSON.stringify(_this.data,null,2));
          //$LASTPOS=10001059;//jseditor.Bookmark:1059
          refresh();
        }
        //$LASTPOS=10000115;//jseditor.Bookmark:115
        _this.data=_this.readJSON(_this.file);
        //$LASTPOS=10000159;//jseditor.Bookmark:159
        items = UI("div");
        
        //$LASTPOS=10000184;//jseditor.Bookmark:184
        d = UI("div",{title: "ブックマーク"},items,["div",["button",{on: {click: add}},"Add current"],["button",{on: {click: edit}},"Open bookmark.json"],["button",{on: {click: ok}},"OK"]]);
        
        //$LASTPOS=10000431;//jseditor.Bookmark:431
        d.dialog({width: 600});
        //$LASTPOS=10000458;//jseditor.Bookmark:458
        refresh();
        
        
        
        
      },
      fiber$open :function _trc_Bookmark_f_open(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var items;
        var d;
        function refresh() {
          
          //$LASTPOS=10000494;//jseditor.Bookmark:494
          items.empty();
          //$LASTPOS=10000517;//jseditor.Bookmark:517
          _this.data.forEach((function anonymous_530(d) {
            var item;
            
            //$LASTPOS=10000549;//jseditor.Bookmark:549
            item = UI("div",["a",{href: d.url},d.title]);
            
            //$LASTPOS=10000641;//jseditor.Bookmark:641
            items.append(item);
          }));
        }function ok() {
          
          //$LASTPOS=10000698;//jseditor.Bookmark:698
          d.dialog("close");
        }function edit() {
          
          //$LASTPOS=10000745;//jseditor.Bookmark:745
          _this.fileList.open(_this.file);
        }function add() {
          var urlHead;
          
          //$LASTPOS=10000793;//jseditor.Bookmark:793
          urlHead = location.href.replace(/\?.*/,"").replace(/#/,"");
          
          //$LASTPOS=10000863;//jseditor.Bookmark:863
          _this.data.push({title: _this.fileList.curDir.name(),url: urlHead+"?dir="+_this.fileList.curDir.path()});
          //$LASTPOS=10000991;//jseditor.Bookmark:991
          _this.writeFile(_this.file,JSON.stringify(_this.data,null,2));
          //$LASTPOS=10001059;//jseditor.Bookmark:1059
          refresh();
        }
        
        _thread.enter(function _trc_Bookmark_ent_open(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=10000115;//jseditor.Bookmark:115
              _this.fiber$readJSON(_thread, _this.file);
              __pc=1;return;
            case 1:
              _this.data=_thread.retVal;
              
              //$LASTPOS=10000159;//jseditor.Bookmark:159
              items = UI("div");
              
              //$LASTPOS=10000184;//jseditor.Bookmark:184
              d = UI("div",{title: "ブックマーク"},items,["div",["button",{on: {click: add}},"Add current"],["button",{on: {click: edit}},"Open bookmark.json"],["button",{on: {click: ok}},"OK"]]);
              
              //$LASTPOS=10000431;//jseditor.Bookmark:431
              d.dialog({width: 600});
              //$LASTPOS=10000458;//jseditor.Bookmark:458
              refresh();
              
              
              
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      __dummy: false
    },
    decls: {"methods":{"main":{"nowait":false},"new":{"nowait":false},"open":{"nowait":false}}}
  });
});