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
          
          //$LASTPOS=10000497;//jseditor.Bookmark:497
          items.empty();
          //$LASTPOS=10000520;//jseditor.Bookmark:520
          _this.data.forEach((function anonymous_533(d) {
            var item;
            
            //$LASTPOS=10000552;//jseditor.Bookmark:552
            item = UI("div",["a",{href: d.url},d.title]);
            
            //$LASTPOS=10000644;//jseditor.Bookmark:644
            items.append(item);
          }));
        }function ok() {
          
          //$LASTPOS=10000701;//jseditor.Bookmark:701
          d.dialog("close");
        }function edit() {
          
          //$LASTPOS=10000748;//jseditor.Bookmark:748
          _this.fileList.open(_this.file);
        }function add() {
          var urlHead;
          
          //$LASTPOS=10000796;//jseditor.Bookmark:796
          urlHead = location.href.replace(/\?.*/,"").replace(/#/,"");
          
          //$LASTPOS=10000866;//jseditor.Bookmark:866
          _this.data.push({title: _this.fileList.curDir.name(),url: urlHead+"?dir="+_this.fileList.curDir.path()});
          //$LASTPOS=10000994;//jseditor.Bookmark:994
          _this.writeFile(_this.file,JSON.stringify(_this.data,null,2));
          //$LASTPOS=10001062;//jseditor.Bookmark:1062
          refresh();
        }
        //$LASTPOS=10000115;//jseditor.Bookmark:115
        _this.data=_this.readJSON(_this.file,[]);
        //$LASTPOS=10000162;//jseditor.Bookmark:162
        items = UI("div");
        
        //$LASTPOS=10000187;//jseditor.Bookmark:187
        d = UI("div",{title: "ブックマーク"},items,["div",["button",{on: {click: add}},"Add current"],["button",{on: {click: edit}},"Open bookmark.json"],["button",{on: {click: ok}},"OK"]]);
        
        //$LASTPOS=10000434;//jseditor.Bookmark:434
        d.dialog({width: 600});
        //$LASTPOS=10000461;//jseditor.Bookmark:461
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
          
          //$LASTPOS=10000497;//jseditor.Bookmark:497
          items.empty();
          //$LASTPOS=10000520;//jseditor.Bookmark:520
          _this.data.forEach((function anonymous_533(d) {
            var item;
            
            //$LASTPOS=10000552;//jseditor.Bookmark:552
            item = UI("div",["a",{href: d.url},d.title]);
            
            //$LASTPOS=10000644;//jseditor.Bookmark:644
            items.append(item);
          }));
        }function ok() {
          
          //$LASTPOS=10000701;//jseditor.Bookmark:701
          d.dialog("close");
        }function edit() {
          
          //$LASTPOS=10000748;//jseditor.Bookmark:748
          _this.fileList.open(_this.file);
        }function add() {
          var urlHead;
          
          //$LASTPOS=10000796;//jseditor.Bookmark:796
          urlHead = location.href.replace(/\?.*/,"").replace(/#/,"");
          
          //$LASTPOS=10000866;//jseditor.Bookmark:866
          _this.data.push({title: _this.fileList.curDir.name(),url: urlHead+"?dir="+_this.fileList.curDir.path()});
          //$LASTPOS=10000994;//jseditor.Bookmark:994
          _this.writeFile(_this.file,JSON.stringify(_this.data,null,2));
          //$LASTPOS=10001062;//jseditor.Bookmark:1062
          refresh();
        }
        
        _thread.enter(function _trc_Bookmark_ent_open(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=10000115;//jseditor.Bookmark:115
              _this.fiber$readJSON(_thread, _this.file, []);
              __pc=1;return;
            case 1:
              _this.data=_thread.retVal;
              
              //$LASTPOS=10000162;//jseditor.Bookmark:162
              items = UI("div");
              
              //$LASTPOS=10000187;//jseditor.Bookmark:187
              d = UI("div",{title: "ブックマーク"},items,["div",["button",{on: {click: add}},"Add current"],["button",{on: {click: edit}},"Open bookmark.json"],["button",{on: {click: ok}},"OK"]]);
              
              //$LASTPOS=10000434;//jseditor.Bookmark:434
              d.dialog({width: 600});
              //$LASTPOS=10000461;//jseditor.Bookmark:461
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