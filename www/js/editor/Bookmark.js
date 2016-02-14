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
          
          //$LASTPOS=4000453;//jseditor.Bookmark:453
          items.empty();
          //$LASTPOS=4000476;//jseditor.Bookmark:476
          _this.conf.data.forEach((function anonymous_494(d) {
            var item;
            
            //$LASTPOS=4000513;//jseditor.Bookmark:513
            item = UI("div",["a",{href: d.url},d.title]);
            
            //$LASTPOS=4000605;//jseditor.Bookmark:605
            items.append(item);
          }));
        }function ok() {
          
          //$LASTPOS=4000662;//jseditor.Bookmark:662
          d.dialog("close");
        }function edit() {
          
          //$LASTPOS=4000709;//jseditor.Bookmark:709
          _this.fileList.open(_this.file);
        }function add() {
          var urlHead;
          
          //$LASTPOS=4000757;//jseditor.Bookmark:757
          urlHead = location.href.replace(/\?.*/,"").replace(/#/,"");
          
          //$LASTPOS=4000827;//jseditor.Bookmark:827
          _this.conf.data.push({title: _this.fileList.curDir.name(),url: urlHead+"?dir="+_this.fileList.curDir.path()});
          //$LASTPOS=4000960;//jseditor.Bookmark:960
          _this.conf.save();
          //$LASTPOS=4000981;//jseditor.Bookmark:981
          refresh();
        }
        //$LASTPOS=4000100;//jseditor.Bookmark:100
        _this.conf.load();
        //$LASTPOS=4000117;//jseditor.Bookmark:117
        items = UI("div");
        
        //$LASTPOS=4000142;//jseditor.Bookmark:142
        d = UI("div",{title: "ブックマーク_"},items,["div",["button",{on: {click: add}},"Add current"],["button",{on: {click: edit}},"Open bookmark.json"],["button",{on: {click: ok}},"OK"]]);
        
        //$LASTPOS=4000390;//jseditor.Bookmark:390
        d.dialog({width: 600});
        //$LASTPOS=4000417;//jseditor.Bookmark:417
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
          
          //$LASTPOS=4000453;//jseditor.Bookmark:453
          items.empty();
          //$LASTPOS=4000476;//jseditor.Bookmark:476
          _this.conf.data.forEach((function anonymous_494(d) {
            var item;
            
            //$LASTPOS=4000513;//jseditor.Bookmark:513
            item = UI("div",["a",{href: d.url},d.title]);
            
            //$LASTPOS=4000605;//jseditor.Bookmark:605
            items.append(item);
          }));
        }function ok() {
          
          //$LASTPOS=4000662;//jseditor.Bookmark:662
          d.dialog("close");
        }function edit() {
          
          //$LASTPOS=4000709;//jseditor.Bookmark:709
          _this.fileList.open(_this.file);
        }function add() {
          var urlHead;
          
          //$LASTPOS=4000757;//jseditor.Bookmark:757
          urlHead = location.href.replace(/\?.*/,"").replace(/#/,"");
          
          //$LASTPOS=4000827;//jseditor.Bookmark:827
          _this.conf.data.push({title: _this.fileList.curDir.name(),url: urlHead+"?dir="+_this.fileList.curDir.path()});
          //$LASTPOS=4000960;//jseditor.Bookmark:960
          _this.conf.save();
          //$LASTPOS=4000981;//jseditor.Bookmark:981
          refresh();
        }
        //$LASTPOS=4000100;//jseditor.Bookmark:100
        _this.conf.load();
        //$LASTPOS=4000117;//jseditor.Bookmark:117
        items = UI("div");
        
        //$LASTPOS=4000142;//jseditor.Bookmark:142
        d = UI("div",{title: "ブックマーク_"},items,["div",["button",{on: {click: add}},"Add current"],["button",{on: {click: edit}},"Open bookmark.json"],["button",{on: {click: ok}},"OK"]]);
        
        //$LASTPOS=4000390;//jseditor.Bookmark:390
        d.dialog({width: 600});
        //$LASTPOS=4000417;//jseditor.Bookmark:417
        refresh();
        
        
        
        
        
        _thread.retVal=_this;return;
      },
      __dummy: false
    },
    decls: {"methods":{"main":{"nowait":false},"new":{"nowait":false},"open":{"nowait":false}}}
  });
});