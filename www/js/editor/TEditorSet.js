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
        
        //$LASTPOS=9000052;//jseditor.TEditorSet:52
        _this.progs=assert(progs,"progs");
        //$LASTPOS=9000091;//jseditor.TEditorSet:91
        _this.options=options||{};
        //$LASTPOS=9000122;//jseditor.TEditorSet:122
        _this.fileLabel=assert(fileLabel,"fileLabel");
        //$LASTPOS=9000173;//jseditor.TEditorSet:173
        _this.editors={};
        //$LASTPOS=9000190;//jseditor.TEditorSet:190
        _this.parallel("watchLoop");
        //$LASTPOS=9000218;//jseditor.TEditorSet:218
        _this.types={js: "javascript"};
      },
      watchLoop :function _trc_TEditorSet_watchLoop() {
        "use strict";
        var _this=this;
        
        //$LASTPOS=9000267;//jseditor.TEditorSet:267
        while (true) {
          //$LASTPOS=9000291;//jseditor.TEditorSet:291
          _this.watch();
          //$LASTPOS=9000309;//jseditor.TEditorSet:309
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
              //$LASTPOS=9000267;//jseditor.TEditorSet:267
            case 1:
              //$LASTPOS=9000291;//jseditor.TEditorSet:291
              _this.fiber$watch(_thread);
              __pc=2;return;
            case 2:
              
              //$LASTPOS=9000309;//jseditor.TEditorSet:309
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
        
        //$LASTPOS=9000350;//jseditor.TEditorSet:350
        inf = _this.getCurrentEditorInfo();
        
        //$LASTPOS=9000387;//jseditor.TEditorSet:387
        if (! inf) {
          return _this;
        }
        //$LASTPOS=9000410;//jseditor.TEditorSet:410
        if (inf.lastTimeStamp<inf.file.lastUpdate()) {
          //$LASTPOS=9000466;//jseditor.TEditorSet:466
          inf.editor.setValue(inf.file.text());
          //$LASTPOS=9000513;//jseditor.TEditorSet:513
          inf.editor.clearSelection();
          //$LASTPOS=9000551;//jseditor.TEditorSet:551
          inf.lastTimeStamp=inf.file.lastUpdate();
          
        }
        //$LASTPOS=9000604;//jseditor.TEditorSet:604
        unmod = inf.file.text()==inf.editor.getValue();
        
        //$LASTPOS=9000659;//jseditor.TEditorSet:659
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
              //$LASTPOS=9000350;//jseditor.TEditorSet:350
              _this.fiber$getCurrentEditorInfo(_thread);
              __pc=1;return;
            case 1:
              inf=_thread.retVal;
              
              //$LASTPOS=9000387;//jseditor.TEditorSet:387
              if (!(! inf)) { __pc=2; break; }
              _thread.exit(_this);return;
            case 2:
              
              //$LASTPOS=9000410;//jseditor.TEditorSet:410
              if (inf.lastTimeStamp<inf.file.lastUpdate()) {
                //$LASTPOS=9000466;//jseditor.TEditorSet:466
                inf.editor.setValue(inf.file.text());
                //$LASTPOS=9000513;//jseditor.TEditorSet:513
                inf.editor.clearSelection();
                //$LASTPOS=9000551;//jseditor.TEditorSet:551
                inf.lastTimeStamp=inf.file.lastUpdate();
                
              }
              //$LASTPOS=9000604;//jseditor.TEditorSet:604
              unmod = inf.file.text()==inf.editor.getValue();
              
              //$LASTPOS=9000659;//jseditor.TEditorSet:659
              _this.fileLabel.text(inf.file.name()+(unmod?"":"*"));
              _thread.exit(_this);return;
            }
          }
        });
      },
      open :function _trc_TEditorSet_open(f) {
        "use strict";
        var _this=this;
        var inf;
        var editorDOM;
        var editor;
        var type;
        
        //$LASTPOS=9000727;//jseditor.TEditorSet:727
        if (f.isDir()) {
          return _this;
          
        }
        //$LASTPOS=9000773;//jseditor.TEditorSet:773
        if (_this.curDOM) {
          //$LASTPOS=9000785;//jseditor.TEditorSet:785
          _this.curDOM.hide();
        }
        //$LASTPOS=9000805;//jseditor.TEditorSet:805
        inf = _this.editors[f.path()];
        
        //$LASTPOS=9000837;//jseditor.TEditorSet:837
        if (! inf) {
          //$LASTPOS=9000858;//jseditor.TEditorSet:858
          editorDOM = Tonyu.globals.$("<pre>").css("height",(_this.options.height||300)+"px").text(f.text()).appendTo(_this.progs);
          
          //$LASTPOS=9001013;//jseditor.TEditorSet:1013
          editor = ace.edit(editorDOM[0]);
          
          //$LASTPOS=9001057;//jseditor.TEditorSet:1057
          if (typeof  _this.options.fontSize=="number") {
            //$LASTPOS=9001096;//jseditor.TEditorSet:1096
            editor.setFontSize(_this.options.fontSize);
          }
          //$LASTPOS=9001143;//jseditor.TEditorSet:1143
          editor.setTheme("ace/theme/eclipse");
          //$LASTPOS=9001190;//jseditor.TEditorSet:1190
          type = f.ext().replace(".","");
          
          //$LASTPOS=9001233;//jseditor.TEditorSet:1233
          type=_this.types[type]||type;
          //$LASTPOS=9001266;//jseditor.TEditorSet:1266
          editor.getSession().setMode("ace/mode/"+type);
          //$LASTPOS=9001322;//jseditor.TEditorSet:1322
          _this.editors[f.path()]=inf={file: f,editor: editor,dom: editorDOM};
          //$LASTPOS=9001395;//jseditor.TEditorSet:1395
          editor.setReadOnly(false);
          //$LASTPOS=9001431;//jseditor.TEditorSet:1431
          editor.clearSelection();
          //$LASTPOS=9001465;//jseditor.TEditorSet:1465
          editor.focus();
          //$LASTPOS=9001490;//jseditor.TEditorSet:1490
          _this.curDOM=editorDOM;
          
        } else {
          //$LASTPOS=9001531;//jseditor.TEditorSet:1531
          if (inf.lastTimeStamp<inf.file.lastUpdate()) {
            //$LASTPOS=9001591;//jseditor.TEditorSet:1591
            inf.editor.setValue(inf.file.text());
            //$LASTPOS=9001642;//jseditor.TEditorSet:1642
            inf.editor.clearSelection();
            //$LASTPOS=9001684;//jseditor.TEditorSet:1684
            inf.lastTimeStamp=inf.file.lastUpdate();
            
          }
          //$LASTPOS=9001745;//jseditor.TEditorSet:1745
          inf.dom.show();
          //$LASTPOS=9001770;//jseditor.TEditorSet:1770
          inf.editor.focus();
          //$LASTPOS=9001799;//jseditor.TEditorSet:1799
          _this.curDOM=inf.dom;
          
        }
        //$LASTPOS=9001827;//jseditor.TEditorSet:1827
        _this.curFile=f;
        //$LASTPOS=9001843;//jseditor.TEditorSet:1843
        inf.lastTimeStamp=f.lastUpdate();
        //$LASTPOS=9001882;//jseditor.TEditorSet:1882
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
        
        //$LASTPOS=9000727;//jseditor.TEditorSet:727
        if (f.isDir()) {
          _thread.retVal=_this;return;
          
          
        }
        //$LASTPOS=9000773;//jseditor.TEditorSet:773
        if (_this.curDOM) {
          //$LASTPOS=9000785;//jseditor.TEditorSet:785
          _this.curDOM.hide();
        }
        //$LASTPOS=9000805;//jseditor.TEditorSet:805
        inf = _this.editors[f.path()];
        
        //$LASTPOS=9000837;//jseditor.TEditorSet:837
        if (! inf) {
          //$LASTPOS=9000858;//jseditor.TEditorSet:858
          editorDOM = Tonyu.globals.$("<pre>").css("height",(_this.options.height||300)+"px").text(f.text()).appendTo(_this.progs);
          
          //$LASTPOS=9001013;//jseditor.TEditorSet:1013
          editor = ace.edit(editorDOM[0]);
          
          //$LASTPOS=9001057;//jseditor.TEditorSet:1057
          if (typeof  _this.options.fontSize=="number") {
            //$LASTPOS=9001096;//jseditor.TEditorSet:1096
            editor.setFontSize(_this.options.fontSize);
          }
          //$LASTPOS=9001143;//jseditor.TEditorSet:1143
          editor.setTheme("ace/theme/eclipse");
          //$LASTPOS=9001190;//jseditor.TEditorSet:1190
          type = f.ext().replace(".","");
          
          //$LASTPOS=9001233;//jseditor.TEditorSet:1233
          type=_this.types[type]||type;
          //$LASTPOS=9001266;//jseditor.TEditorSet:1266
          editor.getSession().setMode("ace/mode/"+type);
          //$LASTPOS=9001322;//jseditor.TEditorSet:1322
          _this.editors[f.path()]=inf={file: f,editor: editor,dom: editorDOM};
          //$LASTPOS=9001395;//jseditor.TEditorSet:1395
          editor.setReadOnly(false);
          //$LASTPOS=9001431;//jseditor.TEditorSet:1431
          editor.clearSelection();
          //$LASTPOS=9001465;//jseditor.TEditorSet:1465
          editor.focus();
          //$LASTPOS=9001490;//jseditor.TEditorSet:1490
          _this.curDOM=editorDOM;
          
        } else {
          //$LASTPOS=9001531;//jseditor.TEditorSet:1531
          if (inf.lastTimeStamp<inf.file.lastUpdate()) {
            //$LASTPOS=9001591;//jseditor.TEditorSet:1591
            inf.editor.setValue(inf.file.text());
            //$LASTPOS=9001642;//jseditor.TEditorSet:1642
            inf.editor.clearSelection();
            //$LASTPOS=9001684;//jseditor.TEditorSet:1684
            inf.lastTimeStamp=inf.file.lastUpdate();
            
          }
          //$LASTPOS=9001745;//jseditor.TEditorSet:1745
          inf.dom.show();
          //$LASTPOS=9001770;//jseditor.TEditorSet:1770
          inf.editor.focus();
          //$LASTPOS=9001799;//jseditor.TEditorSet:1799
          _this.curDOM=inf.dom;
          
        }
        //$LASTPOS=9001827;//jseditor.TEditorSet:1827
        _this.curFile=f;
        //$LASTPOS=9001843;//jseditor.TEditorSet:1843
        inf.lastTimeStamp=f.lastUpdate();
        //$LASTPOS=9001882;//jseditor.TEditorSet:1882
        _this.fileLabel.text(f.name());
        
        _thread.retVal=_this;return;
      },
      setFontSize :function _trc_TEditorSet_setFontSize(s) {
        "use strict";
        var _this=this;
        var inf;
        
        //$LASTPOS=9001935;//jseditor.TEditorSet:1935
        _this.options.fontSize=s;
        //$LASTPOS=9001960;//jseditor.TEditorSet:1960
        inf = _this.getCurrentEditorInfo();
        
        //$LASTPOS=9001997;//jseditor.TEditorSet:1997
        if (! inf) {
          return _this;
        }
        //$LASTPOS=9002020;//jseditor.TEditorSet:2020
        inf.editor.setFontSize(s);
      },
      fiber$setFontSize :function _trc_TEditorSet_f_setFontSize(_thread,s) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var inf;
        
        //$LASTPOS=9001935;//jseditor.TEditorSet:1935
        _this.options.fontSize=s;
        
        _thread.enter(function _trc_TEditorSet_ent_setFontSize(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=9001960;//jseditor.TEditorSet:1960
              _this.fiber$getCurrentEditorInfo(_thread);
              __pc=1;return;
            case 1:
              inf=_thread.retVal;
              
              //$LASTPOS=9001997;//jseditor.TEditorSet:1997
              if (!(! inf)) { __pc=2; break; }
              _thread.exit(_this);return;
            case 2:
              
              //$LASTPOS=9002020;//jseditor.TEditorSet:2020
              inf.editor.setFontSize(s);
              _thread.exit(_this);return;
            }
          }
        });
      },
      getCurrentEditorInfo :function _trc_TEditorSet_getCurrentEditorInfo() {
        "use strict";
        var _this=this;
        
        //$LASTPOS=9002082;//jseditor.TEditorSet:2082
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
        
        //$LASTPOS=9002082;//jseditor.TEditorSet:2082
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
        
        //$LASTPOS=9002165;//jseditor.TEditorSet:2165
        inf = _this.getCurrentEditorInfo();
        
        //$LASTPOS=9002202;//jseditor.TEditorSet:2202
        if (! inf) {
          return _this;
        }
        //$LASTPOS=9002225;//jseditor.TEditorSet:2225
        curFile = inf.file;
        
        //$LASTPOS=9002268;//jseditor.TEditorSet:2268
        editor = inf.editor;
        
        //$LASTPOS=9002318;//jseditor.TEditorSet:2318
        if (curFile&&editor&&! curFile.isReadOnly()) {
          //$LASTPOS=9002437;//jseditor.TEditorSet:2437
          old = curFile.text();
          
          //$LASTPOS=9002470;//jseditor.TEditorSet:2470
          nw = editor.getValue();
          
          //$LASTPOS=9002505;//jseditor.TEditorSet:2505
          if (old!=nw) {
            //$LASTPOS=9002533;//jseditor.TEditorSet:2533
            curFile.text(nw);
            //$LASTPOS=9002564;//jseditor.TEditorSet:2564
            inf.lastTimeStamp=curFile.lastUpdate();
            
          }
          
        }
        //$LASTPOS=9002627;//jseditor.TEditorSet:2627
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
              //$LASTPOS=9002165;//jseditor.TEditorSet:2165
              _this.fiber$getCurrentEditorInfo(_thread);
              __pc=1;return;
            case 1:
              inf=_thread.retVal;
              
              //$LASTPOS=9002202;//jseditor.TEditorSet:2202
              if (!(! inf)) { __pc=2; break; }
              _thread.exit(_this);return;
            case 2:
              
              //$LASTPOS=9002225;//jseditor.TEditorSet:2225
              curFile = inf.file;
              
              //$LASTPOS=9002268;//jseditor.TEditorSet:2268
              editor = inf.editor;
              
              //$LASTPOS=9002318;//jseditor.TEditorSet:2318
              if (curFile&&editor&&! curFile.isReadOnly()) {
                //$LASTPOS=9002437;//jseditor.TEditorSet:2437
                old = curFile.text();
                
                //$LASTPOS=9002470;//jseditor.TEditorSet:2470
                nw = editor.getValue();
                
                //$LASTPOS=9002505;//jseditor.TEditorSet:2505
                if (old!=nw) {
                  //$LASTPOS=9002533;//jseditor.TEditorSet:2533
                  curFile.text(nw);
                  //$LASTPOS=9002564;//jseditor.TEditorSet:2564
                  inf.lastTimeStamp=curFile.lastUpdate();
                  
                }
                
              }
              //$LASTPOS=9002627;//jseditor.TEditorSet:2627
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
        
        //$LASTPOS=9002680;//jseditor.TEditorSet:2680
        inf = _this.editors[f.path()];
        
        //$LASTPOS=9002712;//jseditor.TEditorSet:2712
        if (! inf) {
          return _this;
        }
        //$LASTPOS=9002735;//jseditor.TEditorSet:2735
        inf.editor.destroy();
        //$LASTPOS=9002762;//jseditor.TEditorSet:2762
        inf.dom.remove();
        //$LASTPOS=9002785;//jseditor.TEditorSet:2785
        delete _this.editors[f.path()];
      },
      fiber$close :function _trc_TEditorSet_f_close(_thread,f) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var inf;
        
        //$LASTPOS=9002680;//jseditor.TEditorSet:2680
        inf = _this.editors[f.path()];
        
        //$LASTPOS=9002712;//jseditor.TEditorSet:2712
        if (! inf) {
          _thread.retVal=_this;return;
          
        }
        //$LASTPOS=9002735;//jseditor.TEditorSet:2735
        inf.editor.destroy();
        //$LASTPOS=9002762;//jseditor.TEditorSet:2762
        inf.dom.remove();
        //$LASTPOS=9002785;//jseditor.TEditorSet:2785
        delete _this.editors[f.path()];
        
        _thread.retVal=_this;return;
      },
      __dummy: false
    },
    decls: {"methods":{"main":{"nowait":false},"new":{"nowait":false},"watchLoop":{"nowait":false},"watch":{"nowait":false},"open":{"nowait":false},"setFontSize":{"nowait":false},"getCurrentEditorInfo":{"nowait":false},"save":{"nowait":false},"close":{"nowait":false}}}
  });
});