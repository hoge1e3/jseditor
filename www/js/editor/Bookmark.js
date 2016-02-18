define(function (require) {
  var Tonyu=require('Tonyu');
  var JSONConf=require('JSONConf');
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
        
        //$LASTPOS=4000045;//jseditor.Bookmark:45
        Tonyu.classes.jseditor.Base.apply( _this, [p]);
        //$LASTPOS=4000059;//jseditor.Bookmark:59
        _this.conf=new JSONConf(_this.file);
      },
      open :function _trc_Bookmark_open() {
        "use strict";
        var _this=this;
        var items;
        var d;
        function refresh() {
          
          //$LASTPOS=4000452;//jseditor.Bookmark:452
          items.empty();
          //$LASTPOS=4000475;//jseditor.Bookmark:475
          _this.conf.data.forEach((function anonymous_493(d) {
            var item;
            
            //$LASTPOS=4000512;//jseditor.Bookmark:512
            item = UI("div",["a",{href: d.url},d.title]);
            
            //$LASTPOS=4000604;//jseditor.Bookmark:604
            items.append(item);
          }));
        }function ok() {
          
          //$LASTPOS=4000661;//jseditor.Bookmark:661
          d.dialog("close");
        }function edit() {
          
          //$LASTPOS=4000708;//jseditor.Bookmark:708
          _this.fileList.open(_this.file);
        }function add() {
          var urlHead;
          
          //$LASTPOS=4000756;//jseditor.Bookmark:756
          urlHead = location.href.replace(/\?.*/,"").replace(/#/,"");
          
          //$LASTPOS=4000826;//jseditor.Bookmark:826
          _this.conf.data.push({title: _this.fileList.curDir.name(),url: urlHead+"?dir="+_this.fileList.curDir.path()});
          //$LASTPOS=4000959;//jseditor.Bookmark:959
          _this.conf.save();
          //$LASTPOS=4000980;//jseditor.Bookmark:980
          refresh();
        }
        //$LASTPOS=4000100;//jseditor.Bookmark:100
        _this.conf.load();
        //$LASTPOS=4000117;//jseditor.Bookmark:117
        items = UI("div");
        
        //$LASTPOS=4000142;//jseditor.Bookmark:142
        d = UI("div",{title: "ブックマーク"},items,["div",["button",{on: {click: add}},"Add current"],["button",{on: {click: edit}},"Open bookmark.json"],["button",{on: {click: ok}},"OK"]]);
        
        //$LASTPOS=4000389;//jseditor.Bookmark:389
        d.dialog({width: 600});
        //$LASTPOS=4000416;//jseditor.Bookmark:416
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
          
          //$LASTPOS=4000452;//jseditor.Bookmark:452
          items.empty();
          //$LASTPOS=4000475;//jseditor.Bookmark:475
          _this.conf.data.forEach((function anonymous_493(d) {
            var item;
            
            //$LASTPOS=4000512;//jseditor.Bookmark:512
            item = UI("div",["a",{href: d.url},d.title]);
            
            //$LASTPOS=4000604;//jseditor.Bookmark:604
            items.append(item);
          }));
        }function ok() {
          
          //$LASTPOS=4000661;//jseditor.Bookmark:661
          d.dialog("close");
        }function edit() {
          
          //$LASTPOS=4000708;//jseditor.Bookmark:708
          _this.fileList.open(_this.file);
        }function add() {
          var urlHead;
          
          //$LASTPOS=4000756;//jseditor.Bookmark:756
          urlHead = location.href.replace(/\?.*/,"").replace(/#/,"");
          
          //$LASTPOS=4000826;//jseditor.Bookmark:826
          _this.conf.data.push({title: _this.fileList.curDir.name(),url: urlHead+"?dir="+_this.fileList.curDir.path()});
          //$LASTPOS=4000959;//jseditor.Bookmark:959
          _this.conf.save();
          //$LASTPOS=4000980;//jseditor.Bookmark:980
          refresh();
        }
        //$LASTPOS=4000100;//jseditor.Bookmark:100
        _this.conf.load();
        //$LASTPOS=4000117;//jseditor.Bookmark:117
        items = UI("div");
        
        //$LASTPOS=4000142;//jseditor.Bookmark:142
        d = UI("div",{title: "ブックマーク"},items,["div",["button",{on: {click: add}},"Add current"],["button",{on: {click: edit}},"Open bookmark.json"],["button",{on: {click: ok}},"OK"]]);
        
        //$LASTPOS=4000389;//jseditor.Bookmark:389
        d.dialog({width: 600});
        //$LASTPOS=4000416;//jseditor.Bookmark:416
        refresh();
        
        
        
        
        
        _thread.retVal=_this;return;
      },
      __dummy: false
    },
    decls: {"methods":{"main":{"nowait":false},"new":{"nowait":false},"open":{"nowait":false}}}
  });
});