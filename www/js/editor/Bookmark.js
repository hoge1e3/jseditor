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
        //$LASTPOS=4000088;//jseditor.Bookmark:88
        _this.conf.load();
      },
      open :function _trc_Bookmark_open() {
        "use strict";
        var _this=this;
        var items;
        var d;
        function refresh() {
          
          //$LASTPOS=4000441;//jseditor.Bookmark:441
          items.empty();
          //$LASTPOS=4000464;//jseditor.Bookmark:464
          _this.conf.data.forEach((function anonymous_482(d) {
            var item;
            
            //$LASTPOS=4000501;//jseditor.Bookmark:501
            item = UI("div",["a",{href: d.url},d.title]);
            
            //$LASTPOS=4000593;//jseditor.Bookmark:593
            items.append(item);
          }));
        }function ok() {
          
          //$LASTPOS=4000650;//jseditor.Bookmark:650
          d.dialog("close");
        }function edit() {
          
          //$LASTPOS=4000697;//jseditor.Bookmark:697
          _this.fileList.open(_this.file);
        }function add() {
          var urlHead;
          
          //$LASTPOS=4000745;//jseditor.Bookmark:745
          urlHead = location.href.replace(/\?.*/,"");
          
          //$LASTPOS=4000799;//jseditor.Bookmark:799
          _this.conf.data.push({name: _this.fileList.curDir.name(),url: urlHead+"?dir="+_this.fileList.curDir.path()});
          //$LASTPOS=4000931;//jseditor.Bookmark:931
          _this.conf.save();
          //$LASTPOS=4000952;//jseditor.Bookmark:952
          refresh();
        }
        //$LASTPOS=4000117;//jseditor.Bookmark:117
        items = UI("div");
        
        //$LASTPOS=4000142;//jseditor.Bookmark:142
        d = UI("div",{title: "ブックマーク"},items,["div",["button",{on: {click: add}},"Add current"],["button",{on: {click: edit}},"Open bookmark.json"],["button",{on: {click: ok}},"OK"]]);
        
        //$LASTPOS=4000389;//jseditor.Bookmark:389
        d.dialog();
        //$LASTPOS=4000405;//jseditor.Bookmark:405
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
          
          //$LASTPOS=4000441;//jseditor.Bookmark:441
          items.empty();
          //$LASTPOS=4000464;//jseditor.Bookmark:464
          _this.conf.data.forEach((function anonymous_482(d) {
            var item;
            
            //$LASTPOS=4000501;//jseditor.Bookmark:501
            item = UI("div",["a",{href: d.url},d.title]);
            
            //$LASTPOS=4000593;//jseditor.Bookmark:593
            items.append(item);
          }));
        }function ok() {
          
          //$LASTPOS=4000650;//jseditor.Bookmark:650
          d.dialog("close");
        }function edit() {
          
          //$LASTPOS=4000697;//jseditor.Bookmark:697
          _this.fileList.open(_this.file);
        }function add() {
          var urlHead;
          
          //$LASTPOS=4000745;//jseditor.Bookmark:745
          urlHead = location.href.replace(/\?.*/,"");
          
          //$LASTPOS=4000799;//jseditor.Bookmark:799
          _this.conf.data.push({name: _this.fileList.curDir.name(),url: urlHead+"?dir="+_this.fileList.curDir.path()});
          //$LASTPOS=4000931;//jseditor.Bookmark:931
          _this.conf.save();
          //$LASTPOS=4000952;//jseditor.Bookmark:952
          refresh();
        }
        //$LASTPOS=4000117;//jseditor.Bookmark:117
        items = UI("div");
        
        //$LASTPOS=4000142;//jseditor.Bookmark:142
        d = UI("div",{title: "ブックマーク"},items,["div",["button",{on: {click: add}},"Add current"],["button",{on: {click: edit}},"Open bookmark.json"],["button",{on: {click: ok}},"OK"]]);
        
        //$LASTPOS=4000389;//jseditor.Bookmark:389
        d.dialog();
        //$LASTPOS=4000405;//jseditor.Bookmark:405
        refresh();
        
        
        
        
        
        _thread.retVal=_this;return;
      },
      __dummy: false
    },
    decls: {"methods":{"main":{"nowait":false},"new":{"nowait":false},"open":{"nowait":false}}}
  });
});