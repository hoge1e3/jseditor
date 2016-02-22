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
        
        //$LASTPOS=9000063;//jseditor.TEditorSet:63
        _this.progs=assert(progs,"progs");
        //$LASTPOS=9000102;//jseditor.TEditorSet:102
        _this.options=options||{};
        //$LASTPOS=9000133;//jseditor.TEditorSet:133
        _this.fileLabel=assert(fileLabel,"fileLabel");
        //$LASTPOS=9000184;//jseditor.TEditorSet:184
        _this.editors={};
        //$LASTPOS=9000201;//jseditor.TEditorSet:201
        _this.parallel("watchLoop");
        //$LASTPOS=9000229;//jseditor.TEditorSet:229
        _this.types={js: "javascript"};
      },
      watchLoop :function _trc_TEditorSet_watchLoop() {
        "use strict";
        var _this=this;
        
        //$LASTPOS=9000278;//jseditor.TEditorSet:278
        while (true) {
          //$LASTPOS=9000302;//jseditor.TEditorSet:302
          _this.watch();
          //$LASTPOS=9000320;//jseditor.TEditorSet:320
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
              //$LASTPOS=9000278;//jseditor.TEditorSet:278
            case 1:
              //$LASTPOS=9000302;//jseditor.TEditorSet:302
              _this.fiber$watch(_thread);
              __pc=2;return;
            case 2:
              
              //$LASTPOS=9000320;//jseditor.TEditorSet:320
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
        
        //$LASTPOS=9000361;//jseditor.TEditorSet:361
        inf = _this.getCurrentEditorInfo();
        
        //$LASTPOS=9000398;//jseditor.TEditorSet:398
        if (! inf) {
          return _this;
        }
        //$LASTPOS=9000421;//jseditor.TEditorSet:421
        if (inf.lastTimeStamp<inf.file.lastUpdate()) {
          //$LASTPOS=9000477;//jseditor.TEditorSet:477
          inf.editor.setValue(inf.file.text());
          //$LASTPOS=9000524;//jseditor.TEditorSet:524
          inf.editor.clearSelection();
          //$LASTPOS=9000562;//jseditor.TEditorSet:562
          inf.lastTimeStamp=inf.file.lastUpdate();
          
        }
        //$LASTPOS=9000615;//jseditor.TEditorSet:615
        unmod = inf.file.text()==inf.editor.getValue();
        
        //$LASTPOS=9000670;//jseditor.TEditorSet:670
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
              //$LASTPOS=9000361;//jseditor.TEditorSet:361
              _this.fiber$getCurrentEditorInfo(_thread);
              __pc=1;return;
            case 1:
              inf=_thread.retVal;
              
              //$LASTPOS=9000398;//jseditor.TEditorSet:398
              if (!(! inf)) { __pc=2; break; }
              _thread.exit(_this);return;
            case 2:
              
              //$LASTPOS=9000421;//jseditor.TEditorSet:421
              if (inf.lastTimeStamp<inf.file.lastUpdate()) {
                //$LASTPOS=9000477;//jseditor.TEditorSet:477
                inf.editor.setValue(inf.file.text());
                //$LASTPOS=9000524;//jseditor.TEditorSet:524
                inf.editor.clearSelection();
                //$LASTPOS=9000562;//jseditor.TEditorSet:562
                inf.lastTimeStamp=inf.file.lastUpdate();
                
              }
              //$LASTPOS=9000615;//jseditor.TEditorSet:615
              unmod = inf.file.text()==inf.editor.getValue();
              
              //$LASTPOS=9000670;//jseditor.TEditorSet:670
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
        var _it_61;
        
        //$LASTPOS=9000744;//jseditor.TEditorSet:744
        res = [];
        
        //$LASTPOS=9000761;//jseditor.TEditorSet:761
        _it_61=Tonyu.iterator(_this.editors,2);
        while(_it_61.next()) {
          k=_it_61[0];
          inf=_it_61[1];
          
          //$LASTPOS=9000799;//jseditor.TEditorSet:799
          if (inf.file.text()!=inf.editor.getValue()) {
            //$LASTPOS=9000843;//jseditor.TEditorSet:843
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
        var _it_61;
        
        //$LASTPOS=9000744;//jseditor.TEditorSet:744
        res = [];
        
        //$LASTPOS=9000761;//jseditor.TEditorSet:761
        _it_61=Tonyu.iterator(_this.editors,2);
        while(_it_61.next()) {
          k=_it_61[0];
          inf=_it_61[1];
          
          //$LASTPOS=9000799;//jseditor.TEditorSet:799
          if (inf.file.text()!=inf.editor.getValue()) {
            //$LASTPOS=9000843;//jseditor.TEditorSet:843
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
        
        //$LASTPOS=9000907;//jseditor.TEditorSet:907
        if (f.isDir()) {
          return _this;
          
        }
        //$LASTPOS=9000953;//jseditor.TEditorSet:953
        if (_this.curDOM) {
          //$LASTPOS=9000965;//jseditor.TEditorSet:965
          _this.curDOM.hide();
        }
        //$LASTPOS=9000985;//jseditor.TEditorSet:985
        inf = _this.editors[f.path()];
        
        //$LASTPOS=9001017;//jseditor.TEditorSet:1017
        if (! inf) {
          //$LASTPOS=9001038;//jseditor.TEditorSet:1038
          editorDOM = $("<pre>").css("height",(_this.options.height||300)+"px").text(f.text()).appendTo(_this.progs);
          
          //$LASTPOS=9001193;//jseditor.TEditorSet:1193
          editor = ace.edit(editorDOM[0]);
          
          //$LASTPOS=9001237;//jseditor.TEditorSet:1237
          if (typeof  _this.options.fontSize=="number") {
            //$LASTPOS=9001276;//jseditor.TEditorSet:1276
            editor.setFontSize(_this.options.fontSize);
          }
          //$LASTPOS=9001323;//jseditor.TEditorSet:1323
          editor.setTheme("ace/theme/eclipse");
          //$LASTPOS=9001370;//jseditor.TEditorSet:1370
          type = f.ext().replace(".","");
          
          //$LASTPOS=9001413;//jseditor.TEditorSet:1413
          type=_this.types[type]||type;
          //$LASTPOS=9001446;//jseditor.TEditorSet:1446
          editor.getSession().setMode("ace/mode/"+type);
          //$LASTPOS=9001502;//jseditor.TEditorSet:1502
          _this.editors[f.path()]=inf={file: f,editor: editor,dom: editorDOM};
          //$LASTPOS=9001575;//jseditor.TEditorSet:1575
          editor.setReadOnly(false);
          //$LASTPOS=9001611;//jseditor.TEditorSet:1611
          editor.clearSelection();
          //$LASTPOS=9001645;//jseditor.TEditorSet:1645
          editor.focus();
          //$LASTPOS=9001670;//jseditor.TEditorSet:1670
          _this.curDOM=editorDOM;
          
        } else {
          //$LASTPOS=9001711;//jseditor.TEditorSet:1711
          if (inf.lastTimeStamp<inf.file.lastUpdate()) {
            //$LASTPOS=9001771;//jseditor.TEditorSet:1771
            inf.editor.setValue(inf.file.text());
            //$LASTPOS=9001822;//jseditor.TEditorSet:1822
            inf.editor.clearSelection();
            //$LASTPOS=9001864;//jseditor.TEditorSet:1864
            inf.lastTimeStamp=inf.file.lastUpdate();
            
          }
          //$LASTPOS=9001925;//jseditor.TEditorSet:1925
          inf.dom.show();
          //$LASTPOS=9001950;//jseditor.TEditorSet:1950
          inf.editor.focus();
          //$LASTPOS=9001979;//jseditor.TEditorSet:1979
          _this.curDOM=inf.dom;
          
        }
        //$LASTPOS=9002007;//jseditor.TEditorSet:2007
        _this.curFile=f;
        //$LASTPOS=9002023;//jseditor.TEditorSet:2023
        inf.lastTimeStamp=f.lastUpdate();
        //$LASTPOS=9002062;//jseditor.TEditorSet:2062
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
        
        //$LASTPOS=9000907;//jseditor.TEditorSet:907
        if (f.isDir()) {
          _thread.retVal=_this;return;
          
          
        }
        //$LASTPOS=9000953;//jseditor.TEditorSet:953
        if (_this.curDOM) {
          //$LASTPOS=9000965;//jseditor.TEditorSet:965
          _this.curDOM.hide();
        }
        //$LASTPOS=9000985;//jseditor.TEditorSet:985
        inf = _this.editors[f.path()];
        
        //$LASTPOS=9001017;//jseditor.TEditorSet:1017
        if (! inf) {
          //$LASTPOS=9001038;//jseditor.TEditorSet:1038
          editorDOM = $("<pre>").css("height",(_this.options.height||300)+"px").text(f.text()).appendTo(_this.progs);
          
          //$LASTPOS=9001193;//jseditor.TEditorSet:1193
          editor = ace.edit(editorDOM[0]);
          
          //$LASTPOS=9001237;//jseditor.TEditorSet:1237
          if (typeof  _this.options.fontSize=="number") {
            //$LASTPOS=9001276;//jseditor.TEditorSet:1276
            editor.setFontSize(_this.options.fontSize);
          }
          //$LASTPOS=9001323;//jseditor.TEditorSet:1323
          editor.setTheme("ace/theme/eclipse");
          //$LASTPOS=9001370;//jseditor.TEditorSet:1370
          type = f.ext().replace(".","");
          
          //$LASTPOS=9001413;//jseditor.TEditorSet:1413
          type=_this.types[type]||type;
          //$LASTPOS=9001446;//jseditor.TEditorSet:1446
          editor.getSession().setMode("ace/mode/"+type);
          //$LASTPOS=9001502;//jseditor.TEditorSet:1502
          _this.editors[f.path()]=inf={file: f,editor: editor,dom: editorDOM};
          //$LASTPOS=9001575;//jseditor.TEditorSet:1575
          editor.setReadOnly(false);
          //$LASTPOS=9001611;//jseditor.TEditorSet:1611
          editor.clearSelection();
          //$LASTPOS=9001645;//jseditor.TEditorSet:1645
          editor.focus();
          //$LASTPOS=9001670;//jseditor.TEditorSet:1670
          _this.curDOM=editorDOM;
          
        } else {
          //$LASTPOS=9001711;//jseditor.TEditorSet:1711
          if (inf.lastTimeStamp<inf.file.lastUpdate()) {
            //$LASTPOS=9001771;//jseditor.TEditorSet:1771
            inf.editor.setValue(inf.file.text());
            //$LASTPOS=9001822;//jseditor.TEditorSet:1822
            inf.editor.clearSelection();
            //$LASTPOS=9001864;//jseditor.TEditorSet:1864
            inf.lastTimeStamp=inf.file.lastUpdate();
            
          }
          //$LASTPOS=9001925;//jseditor.TEditorSet:1925
          inf.dom.show();
          //$LASTPOS=9001950;//jseditor.TEditorSet:1950
          inf.editor.focus();
          //$LASTPOS=9001979;//jseditor.TEditorSet:1979
          _this.curDOM=inf.dom;
          
        }
        //$LASTPOS=9002007;//jseditor.TEditorSet:2007
        _this.curFile=f;
        //$LASTPOS=9002023;//jseditor.TEditorSet:2023
        inf.lastTimeStamp=f.lastUpdate();
        //$LASTPOS=9002062;//jseditor.TEditorSet:2062
        _this.fileLabel.text(f.name());
        
        _thread.retVal=_this;return;
      },
      setFontSize :function _trc_TEditorSet_setFontSize(s) {
        "use strict";
        var _this=this;
        var inf;
        
        //$LASTPOS=9002115;//jseditor.TEditorSet:2115
        _this.options.fontSize=s;
        //$LASTPOS=9002140;//jseditor.TEditorSet:2140
        inf = _this.getCurrentEditorInfo();
        
        //$LASTPOS=9002177;//jseditor.TEditorSet:2177
        if (! inf) {
          return _this;
        }
        //$LASTPOS=9002200;//jseditor.TEditorSet:2200
        inf.editor.setFontSize(s);
      },
      fiber$setFontSize :function _trc_TEditorSet_f_setFontSize(_thread,s) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var inf;
        
        //$LASTPOS=9002115;//jseditor.TEditorSet:2115
        _this.options.fontSize=s;
        
        _thread.enter(function _trc_TEditorSet_ent_setFontSize(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=9002140;//jseditor.TEditorSet:2140
              _this.fiber$getCurrentEditorInfo(_thread);
              __pc=1;return;
            case 1:
              inf=_thread.retVal;
              
              //$LASTPOS=9002177;//jseditor.TEditorSet:2177
              if (!(! inf)) { __pc=2; break; }
              _thread.exit(_this);return;
            case 2:
              
              //$LASTPOS=9002200;//jseditor.TEditorSet:2200
              inf.editor.setFontSize(s);
              _thread.exit(_this);return;
            }
          }
        });
      },
      getCurrentEditorInfo :function _trc_TEditorSet_getCurrentEditorInfo() {
        "use strict";
        var _this=this;
        
        //$LASTPOS=9002262;//jseditor.TEditorSet:2262
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
        
        //$LASTPOS=9002262;//jseditor.TEditorSet:2262
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
        
        //$LASTPOS=9002345;//jseditor.TEditorSet:2345
        inf = _this.getCurrentEditorInfo();
        
        //$LASTPOS=9002382;//jseditor.TEditorSet:2382
        if (! inf) {
          return _this;
        }
        //$LASTPOS=9002405;//jseditor.TEditorSet:2405
        curFile = inf.file;
        
        //$LASTPOS=9002448;//jseditor.TEditorSet:2448
        editor = inf.editor;
        
        //$LASTPOS=9002498;//jseditor.TEditorSet:2498
        if (curFile&&editor&&! curFile.isReadOnly()) {
          //$LASTPOS=9002617;//jseditor.TEditorSet:2617
          old = curFile.text();
          
          //$LASTPOS=9002650;//jseditor.TEditorSet:2650
          nw = editor.getValue();
          
          //$LASTPOS=9002685;//jseditor.TEditorSet:2685
          if (old!=nw) {
            //$LASTPOS=9002713;//jseditor.TEditorSet:2713
            curFile.text(nw);
            //$LASTPOS=9002744;//jseditor.TEditorSet:2744
            inf.lastTimeStamp=curFile.lastUpdate();
            
          }
          
        }
        //$LASTPOS=9002807;//jseditor.TEditorSet:2807
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
              //$LASTPOS=9002345;//jseditor.TEditorSet:2345
              _this.fiber$getCurrentEditorInfo(_thread);
              __pc=1;return;
            case 1:
              inf=_thread.retVal;
              
              //$LASTPOS=9002382;//jseditor.TEditorSet:2382
              if (!(! inf)) { __pc=2; break; }
              _thread.exit(_this);return;
            case 2:
              
              //$LASTPOS=9002405;//jseditor.TEditorSet:2405
              curFile = inf.file;
              
              //$LASTPOS=9002448;//jseditor.TEditorSet:2448
              editor = inf.editor;
              
              //$LASTPOS=9002498;//jseditor.TEditorSet:2498
              if (curFile&&editor&&! curFile.isReadOnly()) {
                //$LASTPOS=9002617;//jseditor.TEditorSet:2617
                old = curFile.text();
                
                //$LASTPOS=9002650;//jseditor.TEditorSet:2650
                nw = editor.getValue();
                
                //$LASTPOS=9002685;//jseditor.TEditorSet:2685
                if (old!=nw) {
                  //$LASTPOS=9002713;//jseditor.TEditorSet:2713
                  curFile.text(nw);
                  //$LASTPOS=9002744;//jseditor.TEditorSet:2744
                  inf.lastTimeStamp=curFile.lastUpdate();
                  
                }
                
              }
              //$LASTPOS=9002807;//jseditor.TEditorSet:2807
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
        
        //$LASTPOS=9002860;//jseditor.TEditorSet:2860
        inf = _this.editors[f.path()];
        
        //$LASTPOS=9002892;//jseditor.TEditorSet:2892
        if (! inf) {
          return _this;
        }
        //$LASTPOS=9002915;//jseditor.TEditorSet:2915
        inf.editor.destroy();
        //$LASTPOS=9002942;//jseditor.TEditorSet:2942
        inf.dom.remove();
        //$LASTPOS=9002965;//jseditor.TEditorSet:2965
        delete _this.editors[f.path()];
      },
      fiber$close :function _trc_TEditorSet_f_close(_thread,f) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var inf;
        
        //$LASTPOS=9002860;//jseditor.TEditorSet:2860
        inf = _this.editors[f.path()];
        
        //$LASTPOS=9002892;//jseditor.TEditorSet:2892
        if (! inf) {
          _thread.retVal=_this;return;
          
        }
        //$LASTPOS=9002915;//jseditor.TEditorSet:2915
        inf.editor.destroy();
        //$LASTPOS=9002942;//jseditor.TEditorSet:2942
        inf.dom.remove();
        //$LASTPOS=9002965;//jseditor.TEditorSet:2965
        delete _this.editors[f.path()];
        
        _thread.retVal=_this;return;
      },
      __dummy: false
    },
    decls: {"methods":{"main":{"nowait":false},"new":{"nowait":false},"watchLoop":{"nowait":false},"watch":{"nowait":false},"allModified":{"nowait":false},"open":{"nowait":false},"setFontSize":{"nowait":false},"getCurrentEditorInfo":{"nowait":false},"save":{"nowait":false},"close":{"nowait":false}}}
  });
});