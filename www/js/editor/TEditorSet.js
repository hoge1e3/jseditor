define(function (require) {
  var Tonyu=require('Tonyu');
  var assert=require('assert');
  var UI=require('UI');
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
        _this.fileSelBox=UI("input",{on: {change: Tonyu.bindFunc(_this,_this.selIn)},list: "fileList"}).appendTo(fileLabel);
        //$LASTPOS=11000275;//jseditor.TEditorSet:275
        _this.modStar=UI("span").appendTo(fileLabel);
        //$LASTPOS=11000320;//jseditor.TEditorSet:320
        _this.cands=UI("datalist",{id: "fileList"}).appendTo(fileLabel);
        //$LASTPOS=11000383;//jseditor.TEditorSet:383
        _this.editors={};
        //$LASTPOS=11000400;//jseditor.TEditorSet:400
        _this.names={};
        //$LASTPOS=11000415;//jseditor.TEditorSet:415
        _this.parallel("watchLoop");
        //$LASTPOS=11000443;//jseditor.TEditorSet:443
        _this.types={js: "javascript"};
      },
      selIn :function _trc_TEditorSet_selIn() {
        "use strict";
        var _this=this;
        var v;
        
        //$LASTPOS=11000488;//jseditor.TEditorSet:488
        v = _this.fileSelBox.val();
        
        //$LASTPOS=11000517;//jseditor.TEditorSet:517
        if (_this.names[v]) {
          //$LASTPOS=11000542;//jseditor.TEditorSet:542
          _this.open(_this.names[v].file);
          
        } else {
          //$LASTPOS=11000586;//jseditor.TEditorSet:586
          Tonyu.globals.$finder.parallel("findFile",v);
          
        }
      },
      fiber$selIn :function _trc_TEditorSet_f_selIn(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var v;
        
        //$LASTPOS=11000488;//jseditor.TEditorSet:488
        v = _this.fileSelBox.val();
        
        
        _thread.enter(function _trc_TEditorSet_ent_selIn(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=11000517;//jseditor.TEditorSet:517
              if (!(_this.names[v])) { __pc=2; break; }
              //$LASTPOS=11000542;//jseditor.TEditorSet:542
              _this.fiber$open(_thread, _this.names[v].file);
              __pc=1;return;
            case 1:
              
              __pc=3;break;
            case 2:
              {
                //$LASTPOS=11000586;//jseditor.TEditorSet:586
                Tonyu.globals.$finder.parallel("findFile",v);
              }
            case 3:
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      watchLoop :function _trc_TEditorSet_watchLoop() {
        "use strict";
        var _this=this;
        
        //$LASTPOS=11000649;//jseditor.TEditorSet:649
        while (true) {
          //$LASTPOS=11000673;//jseditor.TEditorSet:673
          _this.watch();
          //$LASTPOS=11000691;//jseditor.TEditorSet:691
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
              //$LASTPOS=11000649;//jseditor.TEditorSet:649
            case 1:
              //$LASTPOS=11000673;//jseditor.TEditorSet:673
              _this.fiber$watch(_thread);
              __pc=2;return;
            case 2:
              
              //$LASTPOS=11000691;//jseditor.TEditorSet:691
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
        
        //$LASTPOS=11000732;//jseditor.TEditorSet:732
        inf = _this.getCurrentEditorInfo();
        
        //$LASTPOS=11000769;//jseditor.TEditorSet:769
        if (! inf) {
          return _this;
        }
        //$LASTPOS=11000792;//jseditor.TEditorSet:792
        if (inf.lastTimeStamp<inf.file.lastUpdate()) {
          //$LASTPOS=11000848;//jseditor.TEditorSet:848
          inf.editor.setValue(inf.file.text());
          //$LASTPOS=11000895;//jseditor.TEditorSet:895
          inf.editor.clearSelection();
          //$LASTPOS=11000933;//jseditor.TEditorSet:933
          inf.lastTimeStamp=inf.file.lastUpdate();
          
        }
        //$LASTPOS=11000986;//jseditor.TEditorSet:986
        unmod = inf.file.text()==inf.editor.getValue();
        
        //$LASTPOS=11001081;//jseditor.TEditorSet:1081
        _this.modStar.text(unmod?"":"*");
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
              //$LASTPOS=11000732;//jseditor.TEditorSet:732
              _this.fiber$getCurrentEditorInfo(_thread);
              __pc=1;return;
            case 1:
              inf=_thread.retVal;
              
              //$LASTPOS=11000769;//jseditor.TEditorSet:769
              if (!(! inf)) { __pc=2; break; }
              _thread.exit(_this);return;
            case 2:
              
              //$LASTPOS=11000792;//jseditor.TEditorSet:792
              if (inf.lastTimeStamp<inf.file.lastUpdate()) {
                //$LASTPOS=11000848;//jseditor.TEditorSet:848
                inf.editor.setValue(inf.file.text());
                //$LASTPOS=11000895;//jseditor.TEditorSet:895
                inf.editor.clearSelection();
                //$LASTPOS=11000933;//jseditor.TEditorSet:933
                inf.lastTimeStamp=inf.file.lastUpdate();
                
              }
              //$LASTPOS=11000986;//jseditor.TEditorSet:986
              unmod = inf.file.text()==inf.editor.getValue();
              
              //$LASTPOS=11001081;//jseditor.TEditorSet:1081
              _this.modStar.text(unmod?"":"*");
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
        var _it_196;
        
        //$LASTPOS=11001190;//jseditor.TEditorSet:1190
        res = [];
        
        //$LASTPOS=11001207;//jseditor.TEditorSet:1207
        _it_196=Tonyu.iterator(_this.editors,2);
        while(_it_196.next()) {
          k=_it_196[0];
          inf=_it_196[1];
          
          //$LASTPOS=11001245;//jseditor.TEditorSet:1245
          if (inf.file.text()!=inf.editor.getValue()) {
            //$LASTPOS=11001289;//jseditor.TEditorSet:1289
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
        var _it_196;
        
        //$LASTPOS=11001190;//jseditor.TEditorSet:1190
        res = [];
        
        //$LASTPOS=11001207;//jseditor.TEditorSet:1207
        _it_196=Tonyu.iterator(_this.editors,2);
        while(_it_196.next()) {
          k=_it_196[0];
          inf=_it_196[1];
          
          //$LASTPOS=11001245;//jseditor.TEditorSet:1245
          if (inf.file.text()!=inf.editor.getValue()) {
            //$LASTPOS=11001289;//jseditor.TEditorSet:1289
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
        
        //$LASTPOS=11001353;//jseditor.TEditorSet:1353
        if (f.isDir()) {
          return _this;
          
        }
        //$LASTPOS=11001399;//jseditor.TEditorSet:1399
        if (_this.curDOM) {
          //$LASTPOS=11001411;//jseditor.TEditorSet:1411
          _this.curDOM.hide();
        }
        //$LASTPOS=11001431;//jseditor.TEditorSet:1431
        inf = _this.editors[f.path()];
        
        //$LASTPOS=11001463;//jseditor.TEditorSet:1463
        if (! inf) {
          //$LASTPOS=11001484;//jseditor.TEditorSet:1484
          editorDOM = $("<pre>").css("height",(_this.options.height||300)+"px").text(f.text()).appendTo(_this.progs);
          
          //$LASTPOS=11001639;//jseditor.TEditorSet:1639
          editor = ace.edit(editorDOM[0]);
          
          //$LASTPOS=11001683;//jseditor.TEditorSet:1683
          if (typeof  _this.options.fontSize=="number") {
            //$LASTPOS=11001722;//jseditor.TEditorSet:1722
            editor.setFontSize(_this.options.fontSize);
          }
          //$LASTPOS=11001769;//jseditor.TEditorSet:1769
          editor.setTheme("ace/theme/eclipse");
          //$LASTPOS=11001816;//jseditor.TEditorSet:1816
          type = (f.ext()||"").replace(".","");
          
          //$LASTPOS=11001865;//jseditor.TEditorSet:1865
          type=_this.types[type]||type;
          //$LASTPOS=11001898;//jseditor.TEditorSet:1898
          editor.getSession().setMode("ace/mode/"+type);
          //$LASTPOS=11001954;//jseditor.TEditorSet:1954
          _this.editors[f.path()]=inf={file: f,editor: editor,dom: editorDOM};
          //$LASTPOS=11002027;//jseditor.TEditorSet:2027
          inf.name=f.name();
          //$LASTPOS=11002061;//jseditor.TEditorSet:2061
          _this.names[inf.name]=inf;
          //$LASTPOS=11002091;//jseditor.TEditorSet:2091
          inf.cand=UI("option",{value: inf.name});
          //$LASTPOS=11002140;//jseditor.TEditorSet:2140
          _this.cands.append(inf.cand);
          //$LASTPOS=11002173;//jseditor.TEditorSet:2173
          editor.setReadOnly(false);
          //$LASTPOS=11002209;//jseditor.TEditorSet:2209
          editor.clearSelection();
          //$LASTPOS=11002243;//jseditor.TEditorSet:2243
          editor.focus();
          //$LASTPOS=11002268;//jseditor.TEditorSet:2268
          _this.curDOM=editorDOM;
          
        } else {
          //$LASTPOS=11002309;//jseditor.TEditorSet:2309
          if (inf.lastTimeStamp<inf.file.lastUpdate()) {
            //$LASTPOS=11002369;//jseditor.TEditorSet:2369
            inf.editor.setValue(inf.file.text());
            //$LASTPOS=11002420;//jseditor.TEditorSet:2420
            inf.editor.clearSelection();
            //$LASTPOS=11002462;//jseditor.TEditorSet:2462
            inf.lastTimeStamp=inf.file.lastUpdate();
            
          }
          //$LASTPOS=11002523;//jseditor.TEditorSet:2523
          inf.dom.show();
          //$LASTPOS=11002548;//jseditor.TEditorSet:2548
          inf.editor.focus();
          //$LASTPOS=11002577;//jseditor.TEditorSet:2577
          _this.curDOM=inf.dom;
          
        }
        //$LASTPOS=11002605;//jseditor.TEditorSet:2605
        _this.curFile=f;
        //$LASTPOS=11002621;//jseditor.TEditorSet:2621
        inf.lastTimeStamp=f.lastUpdate();
        //$LASTPOS=11002660;//jseditor.TEditorSet:2660
        _this.fileSelBox.val(f.name());
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
        
        //$LASTPOS=11001353;//jseditor.TEditorSet:1353
        if (f.isDir()) {
          _thread.retVal=_this;return;
          
          
        }
        //$LASTPOS=11001399;//jseditor.TEditorSet:1399
        if (_this.curDOM) {
          //$LASTPOS=11001411;//jseditor.TEditorSet:1411
          _this.curDOM.hide();
        }
        //$LASTPOS=11001431;//jseditor.TEditorSet:1431
        inf = _this.editors[f.path()];
        
        //$LASTPOS=11001463;//jseditor.TEditorSet:1463
        if (! inf) {
          //$LASTPOS=11001484;//jseditor.TEditorSet:1484
          editorDOM = $("<pre>").css("height",(_this.options.height||300)+"px").text(f.text()).appendTo(_this.progs);
          
          //$LASTPOS=11001639;//jseditor.TEditorSet:1639
          editor = ace.edit(editorDOM[0]);
          
          //$LASTPOS=11001683;//jseditor.TEditorSet:1683
          if (typeof  _this.options.fontSize=="number") {
            //$LASTPOS=11001722;//jseditor.TEditorSet:1722
            editor.setFontSize(_this.options.fontSize);
          }
          //$LASTPOS=11001769;//jseditor.TEditorSet:1769
          editor.setTheme("ace/theme/eclipse");
          //$LASTPOS=11001816;//jseditor.TEditorSet:1816
          type = (f.ext()||"").replace(".","");
          
          //$LASTPOS=11001865;//jseditor.TEditorSet:1865
          type=_this.types[type]||type;
          //$LASTPOS=11001898;//jseditor.TEditorSet:1898
          editor.getSession().setMode("ace/mode/"+type);
          //$LASTPOS=11001954;//jseditor.TEditorSet:1954
          _this.editors[f.path()]=inf={file: f,editor: editor,dom: editorDOM};
          //$LASTPOS=11002027;//jseditor.TEditorSet:2027
          inf.name=f.name();
          //$LASTPOS=11002061;//jseditor.TEditorSet:2061
          _this.names[inf.name]=inf;
          //$LASTPOS=11002091;//jseditor.TEditorSet:2091
          inf.cand=UI("option",{value: inf.name});
          //$LASTPOS=11002140;//jseditor.TEditorSet:2140
          _this.cands.append(inf.cand);
          //$LASTPOS=11002173;//jseditor.TEditorSet:2173
          editor.setReadOnly(false);
          //$LASTPOS=11002209;//jseditor.TEditorSet:2209
          editor.clearSelection();
          //$LASTPOS=11002243;//jseditor.TEditorSet:2243
          editor.focus();
          //$LASTPOS=11002268;//jseditor.TEditorSet:2268
          _this.curDOM=editorDOM;
          
        } else {
          //$LASTPOS=11002309;//jseditor.TEditorSet:2309
          if (inf.lastTimeStamp<inf.file.lastUpdate()) {
            //$LASTPOS=11002369;//jseditor.TEditorSet:2369
            inf.editor.setValue(inf.file.text());
            //$LASTPOS=11002420;//jseditor.TEditorSet:2420
            inf.editor.clearSelection();
            //$LASTPOS=11002462;//jseditor.TEditorSet:2462
            inf.lastTimeStamp=inf.file.lastUpdate();
            
          }
          //$LASTPOS=11002523;//jseditor.TEditorSet:2523
          inf.dom.show();
          //$LASTPOS=11002548;//jseditor.TEditorSet:2548
          inf.editor.focus();
          //$LASTPOS=11002577;//jseditor.TEditorSet:2577
          _this.curDOM=inf.dom;
          
        }
        //$LASTPOS=11002605;//jseditor.TEditorSet:2605
        _this.curFile=f;
        //$LASTPOS=11002621;//jseditor.TEditorSet:2621
        inf.lastTimeStamp=f.lastUpdate();
        //$LASTPOS=11002660;//jseditor.TEditorSet:2660
        _this.fileSelBox.val(f.name());
        
        _thread.retVal=_this;return;
      },
      setFontSize :function _trc_TEditorSet_setFontSize(s) {
        "use strict";
        var _this=this;
        var inf;
        
        //$LASTPOS=11002775;//jseditor.TEditorSet:2775
        _this.options.fontSize=s;
        //$LASTPOS=11002800;//jseditor.TEditorSet:2800
        inf = _this.getCurrentEditorInfo();
        
        //$LASTPOS=11002837;//jseditor.TEditorSet:2837
        if (! inf) {
          return _this;
        }
        //$LASTPOS=11002860;//jseditor.TEditorSet:2860
        inf.editor.setFontSize(s);
      },
      fiber$setFontSize :function _trc_TEditorSet_f_setFontSize(_thread,s) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var inf;
        
        //$LASTPOS=11002775;//jseditor.TEditorSet:2775
        _this.options.fontSize=s;
        
        _thread.enter(function _trc_TEditorSet_ent_setFontSize(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=11002800;//jseditor.TEditorSet:2800
              _this.fiber$getCurrentEditorInfo(_thread);
              __pc=1;return;
            case 1:
              inf=_thread.retVal;
              
              //$LASTPOS=11002837;//jseditor.TEditorSet:2837
              if (!(! inf)) { __pc=2; break; }
              _thread.exit(_this);return;
            case 2:
              
              //$LASTPOS=11002860;//jseditor.TEditorSet:2860
              inf.editor.setFontSize(s);
              _thread.exit(_this);return;
            }
          }
        });
      },
      getCurrentEditorInfo :function _trc_TEditorSet_getCurrentEditorInfo() {
        "use strict";
        var _this=this;
        
        //$LASTPOS=11002922;//jseditor.TEditorSet:2922
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
        
        //$LASTPOS=11002922;//jseditor.TEditorSet:2922
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
        
        //$LASTPOS=11003005;//jseditor.TEditorSet:3005
        inf = _this.getCurrentEditorInfo();
        
        //$LASTPOS=11003042;//jseditor.TEditorSet:3042
        if (! inf) {
          return _this;
        }
        //$LASTPOS=11003065;//jseditor.TEditorSet:3065
        curFile = inf.file;
        
        //$LASTPOS=11003108;//jseditor.TEditorSet:3108
        editor = inf.editor;
        
        //$LASTPOS=11003158;//jseditor.TEditorSet:3158
        if (curFile&&editor&&! curFile.isReadOnly()) {
          //$LASTPOS=11003277;//jseditor.TEditorSet:3277
          old = curFile.text();
          
          //$LASTPOS=11003310;//jseditor.TEditorSet:3310
          nw = editor.getValue();
          
          //$LASTPOS=11003345;//jseditor.TEditorSet:3345
          if (old!=nw) {
            //$LASTPOS=11003373;//jseditor.TEditorSet:3373
            curFile.text(nw);
            //$LASTPOS=11003404;//jseditor.TEditorSet:3404
            inf.lastTimeStamp=curFile.lastUpdate();
            
          }
          
        }
        //$LASTPOS=11003467;//jseditor.TEditorSet:3467
        _this.fileSelBox.val(curFile.name());
        //$LASTPOS=11003504;//jseditor.TEditorSet:3504
        _this.modStar.text("");
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
              //$LASTPOS=11003005;//jseditor.TEditorSet:3005
              _this.fiber$getCurrentEditorInfo(_thread);
              __pc=1;return;
            case 1:
              inf=_thread.retVal;
              
              //$LASTPOS=11003042;//jseditor.TEditorSet:3042
              if (!(! inf)) { __pc=2; break; }
              _thread.exit(_this);return;
            case 2:
              
              //$LASTPOS=11003065;//jseditor.TEditorSet:3065
              curFile = inf.file;
              
              //$LASTPOS=11003108;//jseditor.TEditorSet:3108
              editor = inf.editor;
              
              //$LASTPOS=11003158;//jseditor.TEditorSet:3158
              if (curFile&&editor&&! curFile.isReadOnly()) {
                //$LASTPOS=11003277;//jseditor.TEditorSet:3277
                old = curFile.text();
                
                //$LASTPOS=11003310;//jseditor.TEditorSet:3310
                nw = editor.getValue();
                
                //$LASTPOS=11003345;//jseditor.TEditorSet:3345
                if (old!=nw) {
                  //$LASTPOS=11003373;//jseditor.TEditorSet:3373
                  curFile.text(nw);
                  //$LASTPOS=11003404;//jseditor.TEditorSet:3404
                  inf.lastTimeStamp=curFile.lastUpdate();
                  
                }
                
              }
              //$LASTPOS=11003467;//jseditor.TEditorSet:3467
              _this.fileSelBox.val(curFile.name());
              //$LASTPOS=11003504;//jseditor.TEditorSet:3504
              _this.modStar.text("");
              _thread.exit(_this);return;
            }
          }
        });
      },
      close :function _trc_TEditorSet_close(f) {
        "use strict";
        var _this=this;
        var inf;
        
        //$LASTPOS=11003582;//jseditor.TEditorSet:3582
        inf = f?_this.editors[f.path()]:_this.getCurrentEditorInfo();
        
        //$LASTPOS=11003639;//jseditor.TEditorSet:3639
        if (! inf) {
          return _this;
        }
        //$LASTPOS=11003662;//jseditor.TEditorSet:3662
        inf.editor.destroy();
        //$LASTPOS=11003689;//jseditor.TEditorSet:3689
        inf.dom.remove();
        //$LASTPOS=11003712;//jseditor.TEditorSet:3712
        inf.cand.remove();
        //$LASTPOS=11003736;//jseditor.TEditorSet:3736
        delete _this.editors[inf.file.path()];
        //$LASTPOS=11003774;//jseditor.TEditorSet:3774
        delete _this.names[inf.name];
      },
      fiber$close :function _trc_TEditorSet_f_close(_thread,f) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var inf;
        
        //$LASTPOS=11003582;//jseditor.TEditorSet:3582
        inf = f?_this.editors[f.path()]:_this.getCurrentEditorInfo();
        
        //$LASTPOS=11003639;//jseditor.TEditorSet:3639
        if (! inf) {
          _thread.retVal=_this;return;
          
        }
        //$LASTPOS=11003662;//jseditor.TEditorSet:3662
        inf.editor.destroy();
        //$LASTPOS=11003689;//jseditor.TEditorSet:3689
        inf.dom.remove();
        //$LASTPOS=11003712;//jseditor.TEditorSet:3712
        inf.cand.remove();
        //$LASTPOS=11003736;//jseditor.TEditorSet:3736
        delete _this.editors[inf.file.path()];
        //$LASTPOS=11003774;//jseditor.TEditorSet:3774
        delete _this.names[inf.name];
        
        _thread.retVal=_this;return;
      },
      __dummy: false
    },
    decls: {"methods":{"main":{"nowait":false},"new":{"nowait":false},"selIn":{"nowait":false},"watchLoop":{"nowait":false},"watch":{"nowait":false},"allModified":{"nowait":false},"open":{"nowait":false},"setFontSize":{"nowait":false},"getCurrentEditorInfo":{"nowait":false},"save":{"nowait":false},"close":{"nowait":false}}}
  });
});