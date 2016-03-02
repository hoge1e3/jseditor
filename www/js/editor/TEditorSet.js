define(function (require) {
  var Tonyu=require('Tonyu');
  var assert=require('assert');
  var ace=require('ace');
  var Base=require('Base');
  return Tonyu.klass.define({
    fullName: 'jseditor.TEditorSet',
    shortName: 'TEditorSet',
    namespace: 'jseditor',
    superclass: Tonyu.classes.jseditor.Base,
    includes: [],
    methods: {
      main :function _trc_TEditorSet_main() {
        "use strict";
        var _this=this;
        
      },
      fiber$main :function _trc_TEditorSet_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        _thread.retVal=_this;return;
      },
      initialize :function _trc_TEditorSet_initialize(progs,fileLabel,options) {
        "use strict";
        var _this=this;
        
        //$LASTPOS=11000063;//jseditor.TEditorSet:63
        _this.progs=assert(progs,"progs");
        //$LASTPOS=11000102;//jseditor.TEditorSet:102
        _this.options=options||{};
        //$LASTPOS=11000133;//jseditor.TEditorSet:133
        _this.fileLabel=assert(fileLabel,"fileLabel");
        //$LASTPOS=11000184;//jseditor.TEditorSet:184
        _this.editors={};
        //$LASTPOS=11000201;//jseditor.TEditorSet:201
        _this.parallel("watchLoop");
        //$LASTPOS=11000229;//jseditor.TEditorSet:229
        _this.types={js: "javascript"};
      },
      watchLoop :function _trc_TEditorSet_watchLoop() {
        "use strict";
        var _this=this;
        
        //$LASTPOS=11000278;//jseditor.TEditorSet:278
        while (true) {
          //$LASTPOS=11000302;//jseditor.TEditorSet:302
          _this.watch();
          //$LASTPOS=11000320;//jseditor.TEditorSet:320
          _this.update(1000);
          
        }
      },
      fiber$watchLoop :function _trc_TEditorSet_f_watchLoop(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        _thread.enter(function _trc_TEditorSet_ent_watchLoop(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=11000278;//jseditor.TEditorSet:278
            case 1:
              //$LASTPOS=11000302;//jseditor.TEditorSet:302
              _this.fiber$watch(_thread);
              __pc=2;return;
            case 2:
              
              //$LASTPOS=11000320;//jseditor.TEditorSet:320
              _this.fiber$update(_thread, 1000);
              __pc=3;return;
            case 3:
              
              __pc=1;break;
            case 4:
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      watch :function _trc_TEditorSet_watch() {
        "use strict";
        var _this=this;
        var inf;
        var unmod;
        
        //$LASTPOS=11000361;//jseditor.TEditorSet:361
        inf = _this.getCurrentEditorInfo();
        
        //$LASTPOS=11000398;//jseditor.TEditorSet:398
        if (! inf) {
          return _this;
        }
        //$LASTPOS=11000421;//jseditor.TEditorSet:421
        if (inf.lastTimeStamp<inf.file.lastUpdate()) {
          //$LASTPOS=11000477;//jseditor.TEditorSet:477
          inf.editor.setValue(inf.file.text());
          //$LASTPOS=11000524;//jseditor.TEditorSet:524
          inf.editor.clearSelection();
          //$LASTPOS=11000562;//jseditor.TEditorSet:562
          inf.lastTimeStamp=inf.file.lastUpdate();
          
        }
        //$LASTPOS=11000615;//jseditor.TEditorSet:615
        unmod = inf.file.text()==inf.editor.getValue();
        
        //$LASTPOS=11000670;//jseditor.TEditorSet:670
        _this.fileLabel.text(inf.file.name()+(unmod?"":"*"));
      },
      fiber$watch :function _trc_TEditorSet_f_watch(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var inf;
        var unmod;
        
        
        _thread.enter(function _trc_TEditorSet_ent_watch(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=11000361;//jseditor.TEditorSet:361
              _this.fiber$getCurrentEditorInfo(_thread);
              __pc=1;return;
            case 1:
              inf=_thread.retVal;
              
              //$LASTPOS=11000398;//jseditor.TEditorSet:398
              if (!(! inf)) { __pc=2; break; }
              _thread.exit(_this);return;
            case 2:
              
              //$LASTPOS=11000421;//jseditor.TEditorSet:421
              if (inf.lastTimeStamp<inf.file.lastUpdate()) {
                //$LASTPOS=11000477;//jseditor.TEditorSet:477
                inf.editor.setValue(inf.file.text());
                //$LASTPOS=11000524;//jseditor.TEditorSet:524
                inf.editor.clearSelection();
                //$LASTPOS=11000562;//jseditor.TEditorSet:562
                inf.lastTimeStamp=inf.file.lastUpdate();
                
              }
              //$LASTPOS=11000615;//jseditor.TEditorSet:615
              unmod = inf.file.text()==inf.editor.getValue();
              
              //$LASTPOS=11000670;//jseditor.TEditorSet:670
              _this.fileLabel.text(inf.file.name()+(unmod?"":"*"));
              _thread.exit(_this);return;
            }
          }
        });
      },
      allModified :function _trc_TEditorSet_allModified() {
        "use strict";
        var _this=this;
        var res;
        var k;
        var inf;
        var _it_64;
        
        //$LASTPOS=11000744;//jseditor.TEditorSet:744
        res = [];
        
        //$LASTPOS=11000761;//jseditor.TEditorSet:761
        _it_64=Tonyu.iterator(_this.editors,2);
        while(_it_64.next()) {
          k=_it_64[0];
          inf=_it_64[1];
          
          //$LASTPOS=11000799;//jseditor.TEditorSet:799
          if (inf.file.text()!=inf.editor.getValue()) {
            //$LASTPOS=11000843;//jseditor.TEditorSet:843
            res.push(inf.file);
          }
          
        }
        return res;
      },
      fiber$allModified :function _trc_TEditorSet_f_allModified(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var res;
        var k;
        var inf;
        var _it_64;
        
        //$LASTPOS=11000744;//jseditor.TEditorSet:744
        res = [];
        
        //$LASTPOS=11000761;//jseditor.TEditorSet:761
        _it_64=Tonyu.iterator(_this.editors,2);
        while(_it_64.next()) {
          k=_it_64[0];
          inf=_it_64[1];
          
          //$LASTPOS=11000799;//jseditor.TEditorSet:799
          if (inf.file.text()!=inf.editor.getValue()) {
            //$LASTPOS=11000843;//jseditor.TEditorSet:843
            res.push(inf.file);
          }
          
        }
        _thread.retVal=res;return;
        
        
        _thread.retVal=_this;return;
      },
      open :function _trc_TEditorSet_open(f) {
        "use strict";
        var _this=this;
        var inf;
        var editorDOM;
        var editor;
        var type;
        
        //$LASTPOS=11000907;//jseditor.TEditorSet:907
        if (f.isDir()) {
          return _this;
          
        }
        //$LASTPOS=11000953;//jseditor.TEditorSet:953
        if (_this.curDOM) {
          //$LASTPOS=11000965;//jseditor.TEditorSet:965
          _this.curDOM.hide();
        }
        //$LASTPOS=11000985;//jseditor.TEditorSet:985
        inf = _this.editors[f.path()];
        
        //$LASTPOS=11001017;//jseditor.TEditorSet:1017
        if (! inf) {
          //$LASTPOS=11001038;//jseditor.TEditorSet:1038
          editorDOM = $("<pre>").css("height",(_this.options.height||300)+"px").text(f.text()).appendTo(_this.progs);
          
          //$LASTPOS=11001193;//jseditor.TEditorSet:1193
          editor = ace.edit(editorDOM[0]);
          
          //$LASTPOS=11001237;//jseditor.TEditorSet:1237
          if (typeof  _this.options.fontSize=="number") {
            //$LASTPOS=11001276;//jseditor.TEditorSet:1276
            editor.setFontSize(_this.options.fontSize);
          }
          //$LASTPOS=11001323;//jseditor.TEditorSet:1323
          editor.setTheme("ace/theme/eclipse");
          //$LASTPOS=11001370;//jseditor.TEditorSet:1370
          type = (f.ext()||"").replace(".","");
          
          //$LASTPOS=11001419;//jseditor.TEditorSet:1419
          type=_this.types[type]||type;
          //$LASTPOS=11001452;//jseditor.TEditorSet:1452
          editor.getSession().setMode("ace/mode/"+type);
          //$LASTPOS=11001508;//jseditor.TEditorSet:1508
          _this.editors[f.path()]=inf={file: f,editor: editor,dom: editorDOM};
          //$LASTPOS=11001581;//jseditor.TEditorSet:1581
          editor.setReadOnly(false);
          //$LASTPOS=11001617;//jseditor.TEditorSet:1617
          editor.clearSelection();
          //$LASTPOS=11001651;//jseditor.TEditorSet:1651
          editor.focus();
          //$LASTPOS=11001676;//jseditor.TEditorSet:1676
          _this.curDOM=editorDOM;
          
        } else {
          //$LASTPOS=11001717;//jseditor.TEditorSet:1717
          if (inf.lastTimeStamp<inf.file.lastUpdate()) {
            //$LASTPOS=11001777;//jseditor.TEditorSet:1777
            inf.editor.setValue(inf.file.text());
            //$LASTPOS=11001828;//jseditor.TEditorSet:1828
            inf.editor.clearSelection();
            //$LASTPOS=11001870;//jseditor.TEditorSet:1870
            inf.lastTimeStamp=inf.file.lastUpdate();
            
          }
          //$LASTPOS=11001931;//jseditor.TEditorSet:1931
          inf.dom.show();
          //$LASTPOS=11001956;//jseditor.TEditorSet:1956
          inf.editor.focus();
          //$LASTPOS=11001985;//jseditor.TEditorSet:1985
          _this.curDOM=inf.dom;
          
        }
        //$LASTPOS=11002013;//jseditor.TEditorSet:2013
        _this.curFile=f;
        //$LASTPOS=11002029;//jseditor.TEditorSet:2029
        inf.lastTimeStamp=f.lastUpdate();
        //$LASTPOS=11002068;//jseditor.TEditorSet:2068
        _this.fileLabel.text(f.name());
      },
      fiber$open :function _trc_TEditorSet_f_open(_thread,f) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var inf;
        var editorDOM;
        var editor;
        var type;
        
        //$LASTPOS=11000907;//jseditor.TEditorSet:907
        if (f.isDir()) {
          _thread.retVal=_this;return;
          
          
        }
        //$LASTPOS=11000953;//jseditor.TEditorSet:953
        if (_this.curDOM) {
          //$LASTPOS=11000965;//jseditor.TEditorSet:965
          _this.curDOM.hide();
        }
        //$LASTPOS=11000985;//jseditor.TEditorSet:985
        inf = _this.editors[f.path()];
        
        //$LASTPOS=11001017;//jseditor.TEditorSet:1017
        if (! inf) {
          //$LASTPOS=11001038;//jseditor.TEditorSet:1038
          editorDOM = $("<pre>").css("height",(_this.options.height||300)+"px").text(f.text()).appendTo(_this.progs);
          
          //$LASTPOS=11001193;//jseditor.TEditorSet:1193
          editor = ace.edit(editorDOM[0]);
          
          //$LASTPOS=11001237;//jseditor.TEditorSet:1237
          if (typeof  _this.options.fontSize=="number") {
            //$LASTPOS=11001276;//jseditor.TEditorSet:1276
            editor.setFontSize(_this.options.fontSize);
          }
          //$LASTPOS=11001323;//jseditor.TEditorSet:1323
          editor.setTheme("ace/theme/eclipse");
          //$LASTPOS=11001370;//jseditor.TEditorSet:1370
          type = (f.ext()||"").replace(".","");
          
          //$LASTPOS=11001419;//jseditor.TEditorSet:1419
          type=_this.types[type]||type;
          //$LASTPOS=11001452;//jseditor.TEditorSet:1452
          editor.getSession().setMode("ace/mode/"+type);
          //$LASTPOS=11001508;//jseditor.TEditorSet:1508
          _this.editors[f.path()]=inf={file: f,editor: editor,dom: editorDOM};
          //$LASTPOS=11001581;//jseditor.TEditorSet:1581
          editor.setReadOnly(false);
          //$LASTPOS=11001617;//jseditor.TEditorSet:1617
          editor.clearSelection();
          //$LASTPOS=11001651;//jseditor.TEditorSet:1651
          editor.focus();
          //$LASTPOS=11001676;//jseditor.TEditorSet:1676
          _this.curDOM=editorDOM;
          
        } else {
          //$LASTPOS=11001717;//jseditor.TEditorSet:1717
          if (inf.lastTimeStamp<inf.file.lastUpdate()) {
            //$LASTPOS=11001777;//jseditor.TEditorSet:1777
            inf.editor.setValue(inf.file.text());
            //$LASTPOS=11001828;//jseditor.TEditorSet:1828
            inf.editor.clearSelection();
            //$LASTPOS=11001870;//jseditor.TEditorSet:1870
            inf.lastTimeStamp=inf.file.lastUpdate();
            
          }
          //$LASTPOS=11001931;//jseditor.TEditorSet:1931
          inf.dom.show();
          //$LASTPOS=11001956;//jseditor.TEditorSet:1956
          inf.editor.focus();
          //$LASTPOS=11001985;//jseditor.TEditorSet:1985
          _this.curDOM=inf.dom;
          
        }
        //$LASTPOS=11002013;//jseditor.TEditorSet:2013
        _this.curFile=f;
        //$LASTPOS=11002029;//jseditor.TEditorSet:2029
        inf.lastTimeStamp=f.lastUpdate();
        //$LASTPOS=11002068;//jseditor.TEditorSet:2068
        _this.fileLabel.text(f.name());
        
        _thread.retVal=_this;return;
      },
      setFontSize :function _trc_TEditorSet_setFontSize(s) {
        "use strict";
        var _this=this;
        var inf;
        
        //$LASTPOS=11002121;//jseditor.TEditorSet:2121
        _this.options.fontSize=s;
        //$LASTPOS=11002146;//jseditor.TEditorSet:2146
        inf = _this.getCurrentEditorInfo();
        
        //$LASTPOS=11002183;//jseditor.TEditorSet:2183
        if (! inf) {
          return _this;
        }
        //$LASTPOS=11002206;//jseditor.TEditorSet:2206
        inf.editor.setFontSize(s);
      },
      fiber$setFontSize :function _trc_TEditorSet_f_setFontSize(_thread,s) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var inf;
        
        //$LASTPOS=11002121;//jseditor.TEditorSet:2121
        _this.options.fontSize=s;
        
        _thread.enter(function _trc_TEditorSet_ent_setFontSize(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=11002146;//jseditor.TEditorSet:2146
              _this.fiber$getCurrentEditorInfo(_thread);
              __pc=1;return;
            case 1:
              inf=_thread.retVal;
              
              //$LASTPOS=11002183;//jseditor.TEditorSet:2183
              if (!(! inf)) { __pc=2; break; }
              _thread.exit(_this);return;
            case 2:
              
              //$LASTPOS=11002206;//jseditor.TEditorSet:2206
              inf.editor.setFontSize(s);
              _thread.exit(_this);return;
            }
          }
        });
      },
      getCurrentEditorInfo :function _trc_TEditorSet_getCurrentEditorInfo() {
        "use strict";
        var _this=this;
        
        //$LASTPOS=11002268;//jseditor.TEditorSet:2268
        if (! _this.curFile) {
          return null;
        }
        return _this.editors[_this.curFile.path()];
      },
      fiber$getCurrentEditorInfo :function _trc_TEditorSet_f_getCurrentEditorInfo(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        //$LASTPOS=11002268;//jseditor.TEditorSet:2268
        if (! _this.curFile) {
          _thread.retVal=null;return;
          
        }
        _thread.retVal=_this.editors[_this.curFile.path()];return;
        
        
        _thread.retVal=_this;return;
      },
      save :function _trc_TEditorSet_save() {
        "use strict";
        var _this=this;
        var inf;
        var curFile;
        var editor;
        var old;
        var nw;
        
        //$LASTPOS=11002351;//jseditor.TEditorSet:2351
        inf = _this.getCurrentEditorInfo();
        
        //$LASTPOS=11002388;//jseditor.TEditorSet:2388
        if (! inf) {
          return _this;
        }
        //$LASTPOS=11002411;//jseditor.TEditorSet:2411
        curFile = inf.file;
        
        //$LASTPOS=11002454;//jseditor.TEditorSet:2454
        editor = inf.editor;
        
        //$LASTPOS=11002504;//jseditor.TEditorSet:2504
        if (curFile&&editor&&! curFile.isReadOnly()) {
          //$LASTPOS=11002623;//jseditor.TEditorSet:2623
          old = curFile.text();
          
          //$LASTPOS=11002656;//jseditor.TEditorSet:2656
          nw = editor.getValue();
          
          //$LASTPOS=11002691;//jseditor.TEditorSet:2691
          if (old!=nw) {
            //$LASTPOS=11002719;//jseditor.TEditorSet:2719
            curFile.text(nw);
            //$LASTPOS=11002750;//jseditor.TEditorSet:2750
            inf.lastTimeStamp=curFile.lastUpdate();
            
          }
          
        }
        //$LASTPOS=11002813;//jseditor.TEditorSet:2813
        _this.fileLabel.text(curFile.name());
      },
      fiber$save :function _trc_TEditorSet_f_save(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var inf;
        var curFile;
        var editor;
        var old;
        var nw;
        
        
        _thread.enter(function _trc_TEditorSet_ent_save(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=11002351;//jseditor.TEditorSet:2351
              _this.fiber$getCurrentEditorInfo(_thread);
              __pc=1;return;
            case 1:
              inf=_thread.retVal;
              
              //$LASTPOS=11002388;//jseditor.TEditorSet:2388
              if (!(! inf)) { __pc=2; break; }
              _thread.exit(_this);return;
            case 2:
              
              //$LASTPOS=11002411;//jseditor.TEditorSet:2411
              curFile = inf.file;
              
              //$LASTPOS=11002454;//jseditor.TEditorSet:2454
              editor = inf.editor;
              
              //$LASTPOS=11002504;//jseditor.TEditorSet:2504
              if (curFile&&editor&&! curFile.isReadOnly()) {
                //$LASTPOS=11002623;//jseditor.TEditorSet:2623
                old = curFile.text();
                
                //$LASTPOS=11002656;//jseditor.TEditorSet:2656
                nw = editor.getValue();
                
                //$LASTPOS=11002691;//jseditor.TEditorSet:2691
                if (old!=nw) {
                  //$LASTPOS=11002719;//jseditor.TEditorSet:2719
                  curFile.text(nw);
                  //$LASTPOS=11002750;//jseditor.TEditorSet:2750
                  inf.lastTimeStamp=curFile.lastUpdate();
                  
                }
                
              }
              //$LASTPOS=11002813;//jseditor.TEditorSet:2813
              _this.fileLabel.text(curFile.name());
              _thread.exit(_this);return;
            }
          }
        });
      },
      close :function _trc_TEditorSet_close(f) {
        "use strict";
        var _this=this;
        var inf;
        
        //$LASTPOS=11002866;//jseditor.TEditorSet:2866
        inf = _this.editors[f.path()];
        
        //$LASTPOS=11002898;//jseditor.TEditorSet:2898
        if (! inf) {
          return _this;
        }
        //$LASTPOS=11002921;//jseditor.TEditorSet:2921
        inf.editor.destroy();
        //$LASTPOS=11002948;//jseditor.TEditorSet:2948
        inf.dom.remove();
        //$LASTPOS=11002971;//jseditor.TEditorSet:2971
        delete _this.editors[f.path()];
      },
      fiber$close :function _trc_TEditorSet_f_close(_thread,f) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var inf;
        
        //$LASTPOS=11002866;//jseditor.TEditorSet:2866
        inf = _this.editors[f.path()];
        
        //$LASTPOS=11002898;//jseditor.TEditorSet:2898
        if (! inf) {
          _thread.retVal=_this;return;
          
        }
        //$LASTPOS=11002921;//jseditor.TEditorSet:2921
        inf.editor.destroy();
        //$LASTPOS=11002948;//jseditor.TEditorSet:2948
        inf.dom.remove();
        //$LASTPOS=11002971;//jseditor.TEditorSet:2971
        delete _this.editors[f.path()];
        
        _thread.retVal=_this;return;
      },
      __dummy: false
    },
    decls: {"methods":{"main":{"nowait":false},"new":{"nowait":false},"watchLoop":{"nowait":false},"watch":{"nowait":false},"allModified":{"nowait":false},"open":{"nowait":false},"setFontSize":{"nowait":false},"getCurrentEditorInfo":{"nowait":false},"save":{"nowait":false},"close":{"nowait":false}}}
  });
});