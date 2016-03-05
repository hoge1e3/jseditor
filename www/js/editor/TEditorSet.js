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
        
        //$LASTPOS=14000063;//jseditor.TEditorSet:63
        _this.progs=assert(progs,"progs");
        //$LASTPOS=14000102;//jseditor.TEditorSet:102
        _this.options=options||{};
        //$LASTPOS=14000133;//jseditor.TEditorSet:133
        _this.fileLabel=assert(fileLabel,"fileLabel");
        //$LASTPOS=14000184;//jseditor.TEditorSet:184
        _this.fileSelBox=UI("input",{on: {change: Tonyu.bindFunc(_this,_this.selIn)},list: "fileList"}).appendTo(fileLabel);
        //$LASTPOS=14000275;//jseditor.TEditorSet:275
        _this.modStar=UI("span").appendTo(fileLabel);
        //$LASTPOS=14000320;//jseditor.TEditorSet:320
        _this.cands=UI("datalist",{id: "fileList"}).appendTo(fileLabel);
        //$LASTPOS=14000383;//jseditor.TEditorSet:383
        _this.editors={};
        //$LASTPOS=14000400;//jseditor.TEditorSet:400
        _this.names={};
        //$LASTPOS=14000415;//jseditor.TEditorSet:415
        _this.parallel("watchLoop");
        //$LASTPOS=14000443;//jseditor.TEditorSet:443
        _this.types={js: "javascript"};
      },
      selIn :function _trc_TEditorSet_selIn() {
        "use strict";
        var _this=this;
        var v;
        
        //$LASTPOS=14000488;//jseditor.TEditorSet:488
        v = _this.fileSelBox.val();
        
        //$LASTPOS=14000517;//jseditor.TEditorSet:517
        if (_this.names[v]) {
          //$LASTPOS=14000542;//jseditor.TEditorSet:542
          _this.open(_this.names[v].file);
          
        } else {
          //$LASTPOS=14000586;//jseditor.TEditorSet:586
          Tonyu.globals.$finder.parallel("findFile",v);
          
        }
      },
      fiber$selIn :function _trc_TEditorSet_f_selIn(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var v;
        
        //$LASTPOS=14000488;//jseditor.TEditorSet:488
        v = _this.fileSelBox.val();
        
        
        _thread.enter(function _trc_TEditorSet_ent_selIn(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=14000517;//jseditor.TEditorSet:517
              if (!(_this.names[v])) { __pc=2; break; }
              //$LASTPOS=14000542;//jseditor.TEditorSet:542
              _this.fiber$open(_thread, _this.names[v].file);
              __pc=1;return;
            case 1:
              
              __pc=3;break;
            case 2:
              {
                //$LASTPOS=14000586;//jseditor.TEditorSet:586
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
        
        //$LASTPOS=14000649;//jseditor.TEditorSet:649
        while (true) {
          //$LASTPOS=14000673;//jseditor.TEditorSet:673
          _this.watch();
          //$LASTPOS=14000691;//jseditor.TEditorSet:691
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
              //$LASTPOS=14000649;//jseditor.TEditorSet:649
            case 1:
              //$LASTPOS=14000673;//jseditor.TEditorSet:673
              _this.fiber$watch(_thread);
              __pc=2;return;
            case 2:
              
              //$LASTPOS=14000691;//jseditor.TEditorSet:691
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
        
        //$LASTPOS=14000732;//jseditor.TEditorSet:732
        inf = _this.getCurrentEditorInfo();
        
        //$LASTPOS=14000769;//jseditor.TEditorSet:769
        if (! inf) {
          return _this;
        }
        //$LASTPOS=14000792;//jseditor.TEditorSet:792
        if (inf.lastTimeStamp<inf.file.lastUpdate()) {
          //$LASTPOS=14000848;//jseditor.TEditorSet:848
          inf.editor.setValue(inf.file.text());
          //$LASTPOS=14000895;//jseditor.TEditorSet:895
          inf.editor.clearSelection();
          //$LASTPOS=14000933;//jseditor.TEditorSet:933
          inf.lastTimeStamp=inf.file.lastUpdate();
          
        }
        //$LASTPOS=14000986;//jseditor.TEditorSet:986
        unmod = inf.file.text()==inf.editor.getValue();
        
        //$LASTPOS=14001081;//jseditor.TEditorSet:1081
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
              //$LASTPOS=14000732;//jseditor.TEditorSet:732
              _this.fiber$getCurrentEditorInfo(_thread);
              __pc=1;return;
            case 1:
              inf=_thread.retVal;
              
              //$LASTPOS=14000769;//jseditor.TEditorSet:769
              if (!(! inf)) { __pc=2; break; }
              _thread.exit(_this);return;
            case 2:
              
              //$LASTPOS=14000792;//jseditor.TEditorSet:792
              if (inf.lastTimeStamp<inf.file.lastUpdate()) {
                //$LASTPOS=14000848;//jseditor.TEditorSet:848
                inf.editor.setValue(inf.file.text());
                //$LASTPOS=14000895;//jseditor.TEditorSet:895
                inf.editor.clearSelection();
                //$LASTPOS=14000933;//jseditor.TEditorSet:933
                inf.lastTimeStamp=inf.file.lastUpdate();
                
              }
              //$LASTPOS=14000986;//jseditor.TEditorSet:986
              unmod = inf.file.text()==inf.editor.getValue();
              
              //$LASTPOS=14001081;//jseditor.TEditorSet:1081
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
        var _it_214;
        
        //$LASTPOS=14001190;//jseditor.TEditorSet:1190
        res = [];
        
        //$LASTPOS=14001207;//jseditor.TEditorSet:1207
        _it_214=Tonyu.iterator(_this.editors,2);
        while(_it_214.next()) {
          k=_it_214[0];
          inf=_it_214[1];
          
          //$LASTPOS=14001245;//jseditor.TEditorSet:1245
          if (inf.file.text()!=inf.editor.getValue()) {
            //$LASTPOS=14001289;//jseditor.TEditorSet:1289
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
        var _it_214;
        
        //$LASTPOS=14001190;//jseditor.TEditorSet:1190
        res = [];
        
        //$LASTPOS=14001207;//jseditor.TEditorSet:1207
        _it_214=Tonyu.iterator(_this.editors,2);
        while(_it_214.next()) {
          k=_it_214[0];
          inf=_it_214[1];
          
          //$LASTPOS=14001245;//jseditor.TEditorSet:1245
          if (inf.file.text()!=inf.editor.getValue()) {
            //$LASTPOS=14001289;//jseditor.TEditorSet:1289
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
        
        //$LASTPOS=14001353;//jseditor.TEditorSet:1353
        if (f.isDir()) {
          return _this;
          
        }
        //$LASTPOS=14001399;//jseditor.TEditorSet:1399
        if (_this.curDOM) {
          //$LASTPOS=14001411;//jseditor.TEditorSet:1411
          _this.curDOM.hide();
        }
        //$LASTPOS=14001431;//jseditor.TEditorSet:1431
        inf = _this.editors[f.path()];
        
        //$LASTPOS=14001463;//jseditor.TEditorSet:1463
        if (! inf) {
          //$LASTPOS=14001484;//jseditor.TEditorSet:1484
          editorDOM = $("<pre>").css("height",(_this.options.height||300)+"px").text(f.text()).appendTo(_this.progs);
          
          //$LASTPOS=14001639;//jseditor.TEditorSet:1639
          editor = ace.edit(editorDOM[0]);
          
          //$LASTPOS=14001683;//jseditor.TEditorSet:1683
          if (typeof  _this.options.fontSize=="number") {
            //$LASTPOS=14001722;//jseditor.TEditorSet:1722
            editor.setFontSize(_this.options.fontSize);
          }
          //$LASTPOS=14001769;//jseditor.TEditorSet:1769
          editor.setTheme("ace/theme/eclipse");
          //$LASTPOS=14001816;//jseditor.TEditorSet:1816
          type = (f.ext()||"").replace(".","");
          
          //$LASTPOS=14001865;//jseditor.TEditorSet:1865
          type=_this.types[type]||type;
          //$LASTPOS=14001898;//jseditor.TEditorSet:1898
          editor.getSession().setMode("ace/mode/"+type);
          //$LASTPOS=14001954;//jseditor.TEditorSet:1954
          _this.editors[f.path()]=inf={file: f,editor: editor,dom: editorDOM};
          //$LASTPOS=14002027;//jseditor.TEditorSet:2027
          inf.name=f.name();
          //$LASTPOS=14002061;//jseditor.TEditorSet:2061
          _this.names[inf.name]=inf;
          //$LASTPOS=14002091;//jseditor.TEditorSet:2091
          inf.cand=UI("option",{value: inf.name});
          //$LASTPOS=14002140;//jseditor.TEditorSet:2140
          _this.cands.append(inf.cand);
          //$LASTPOS=14002173;//jseditor.TEditorSet:2173
          editor.setReadOnly(false);
          //$LASTPOS=14002209;//jseditor.TEditorSet:2209
          editor.clearSelection();
          //$LASTPOS=14002243;//jseditor.TEditorSet:2243
          editor.focus();
          //$LASTPOS=14002268;//jseditor.TEditorSet:2268
          _this.curDOM=editorDOM;
          
        } else {
          //$LASTPOS=14002309;//jseditor.TEditorSet:2309
          if (inf.lastTimeStamp<inf.file.lastUpdate()) {
            //$LASTPOS=14002369;//jseditor.TEditorSet:2369
            inf.editor.setValue(inf.file.text());
            //$LASTPOS=14002420;//jseditor.TEditorSet:2420
            inf.editor.clearSelection();
            //$LASTPOS=14002462;//jseditor.TEditorSet:2462
            inf.lastTimeStamp=inf.file.lastUpdate();
            
          }
          //$LASTPOS=14002523;//jseditor.TEditorSet:2523
          inf.dom.show();
          //$LASTPOS=14002548;//jseditor.TEditorSet:2548
          inf.editor.focus();
          //$LASTPOS=14002577;//jseditor.TEditorSet:2577
          _this.curDOM=inf.dom;
          
        }
        //$LASTPOS=14002605;//jseditor.TEditorSet:2605
        _this.curFile=f;
        //$LASTPOS=14002621;//jseditor.TEditorSet:2621
        inf.lastTimeStamp=f.lastUpdate();
        //$LASTPOS=14002660;//jseditor.TEditorSet:2660
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
        
        //$LASTPOS=14001353;//jseditor.TEditorSet:1353
        if (f.isDir()) {
          _thread.retVal=_this;return;
          
          
        }
        //$LASTPOS=14001399;//jseditor.TEditorSet:1399
        if (_this.curDOM) {
          //$LASTPOS=14001411;//jseditor.TEditorSet:1411
          _this.curDOM.hide();
        }
        //$LASTPOS=14001431;//jseditor.TEditorSet:1431
        inf = _this.editors[f.path()];
        
        //$LASTPOS=14001463;//jseditor.TEditorSet:1463
        if (! inf) {
          //$LASTPOS=14001484;//jseditor.TEditorSet:1484
          editorDOM = $("<pre>").css("height",(_this.options.height||300)+"px").text(f.text()).appendTo(_this.progs);
          
          //$LASTPOS=14001639;//jseditor.TEditorSet:1639
          editor = ace.edit(editorDOM[0]);
          
          //$LASTPOS=14001683;//jseditor.TEditorSet:1683
          if (typeof  _this.options.fontSize=="number") {
            //$LASTPOS=14001722;//jseditor.TEditorSet:1722
            editor.setFontSize(_this.options.fontSize);
          }
          //$LASTPOS=14001769;//jseditor.TEditorSet:1769
          editor.setTheme("ace/theme/eclipse");
          //$LASTPOS=14001816;//jseditor.TEditorSet:1816
          type = (f.ext()||"").replace(".","");
          
          //$LASTPOS=14001865;//jseditor.TEditorSet:1865
          type=_this.types[type]||type;
          //$LASTPOS=14001898;//jseditor.TEditorSet:1898
          editor.getSession().setMode("ace/mode/"+type);
          //$LASTPOS=14001954;//jseditor.TEditorSet:1954
          _this.editors[f.path()]=inf={file: f,editor: editor,dom: editorDOM};
          //$LASTPOS=14002027;//jseditor.TEditorSet:2027
          inf.name=f.name();
          //$LASTPOS=14002061;//jseditor.TEditorSet:2061
          _this.names[inf.name]=inf;
          //$LASTPOS=14002091;//jseditor.TEditorSet:2091
          inf.cand=UI("option",{value: inf.name});
          //$LASTPOS=14002140;//jseditor.TEditorSet:2140
          _this.cands.append(inf.cand);
          //$LASTPOS=14002173;//jseditor.TEditorSet:2173
          editor.setReadOnly(false);
          //$LASTPOS=14002209;//jseditor.TEditorSet:2209
          editor.clearSelection();
          //$LASTPOS=14002243;//jseditor.TEditorSet:2243
          editor.focus();
          //$LASTPOS=14002268;//jseditor.TEditorSet:2268
          _this.curDOM=editorDOM;
          
        } else {
          //$LASTPOS=14002309;//jseditor.TEditorSet:2309
          if (inf.lastTimeStamp<inf.file.lastUpdate()) {
            //$LASTPOS=14002369;//jseditor.TEditorSet:2369
            inf.editor.setValue(inf.file.text());
            //$LASTPOS=14002420;//jseditor.TEditorSet:2420
            inf.editor.clearSelection();
            //$LASTPOS=14002462;//jseditor.TEditorSet:2462
            inf.lastTimeStamp=inf.file.lastUpdate();
            
          }
          //$LASTPOS=14002523;//jseditor.TEditorSet:2523
          inf.dom.show();
          //$LASTPOS=14002548;//jseditor.TEditorSet:2548
          inf.editor.focus();
          //$LASTPOS=14002577;//jseditor.TEditorSet:2577
          _this.curDOM=inf.dom;
          
        }
        //$LASTPOS=14002605;//jseditor.TEditorSet:2605
        _this.curFile=f;
        //$LASTPOS=14002621;//jseditor.TEditorSet:2621
        inf.lastTimeStamp=f.lastUpdate();
        //$LASTPOS=14002660;//jseditor.TEditorSet:2660
        _this.fileSelBox.val(f.name());
        
        _thread.retVal=_this;return;
      },
      setFontSize :function _trc_TEditorSet_setFontSize(s) {
        "use strict";
        var _this=this;
        var inf;
        
        //$LASTPOS=14002775;//jseditor.TEditorSet:2775
        _this.options.fontSize=s;
        //$LASTPOS=14002800;//jseditor.TEditorSet:2800
        inf = _this.getCurrentEditorInfo();
        
        //$LASTPOS=14002837;//jseditor.TEditorSet:2837
        if (! inf) {
          return _this;
        }
        //$LASTPOS=14002860;//jseditor.TEditorSet:2860
        inf.editor.setFontSize(s);
      },
      fiber$setFontSize :function _trc_TEditorSet_f_setFontSize(_thread,s) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var inf;
        
        //$LASTPOS=14002775;//jseditor.TEditorSet:2775
        _this.options.fontSize=s;
        
        _thread.enter(function _trc_TEditorSet_ent_setFontSize(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=14002800;//jseditor.TEditorSet:2800
              _this.fiber$getCurrentEditorInfo(_thread);
              __pc=1;return;
            case 1:
              inf=_thread.retVal;
              
              //$LASTPOS=14002837;//jseditor.TEditorSet:2837
              if (!(! inf)) { __pc=2; break; }
              _thread.exit(_this);return;
            case 2:
              
              //$LASTPOS=14002860;//jseditor.TEditorSet:2860
              inf.editor.setFontSize(s);
              _thread.exit(_this);return;
            }
          }
        });
      },
      getCurrentEditorInfo :function _trc_TEditorSet_getCurrentEditorInfo() {
        "use strict";
        var _this=this;
        
        //$LASTPOS=14002922;//jseditor.TEditorSet:2922
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
        
        //$LASTPOS=14002922;//jseditor.TEditorSet:2922
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
        
        //$LASTPOS=14003005;//jseditor.TEditorSet:3005
        inf = _this.getCurrentEditorInfo();
        
        //$LASTPOS=14003042;//jseditor.TEditorSet:3042
        if (! inf) {
          return _this;
        }
        //$LASTPOS=14003065;//jseditor.TEditorSet:3065
        curFile = inf.file;
        
        //$LASTPOS=14003108;//jseditor.TEditorSet:3108
        editor = inf.editor;
        
        //$LASTPOS=14003158;//jseditor.TEditorSet:3158
        if (curFile&&editor&&! curFile.isReadOnly()) {
          //$LASTPOS=14003277;//jseditor.TEditorSet:3277
          old = curFile.text();
          
          //$LASTPOS=14003310;//jseditor.TEditorSet:3310
          nw = editor.getValue();
          
          //$LASTPOS=14003345;//jseditor.TEditorSet:3345
          if (old!=nw) {
            //$LASTPOS=14003373;//jseditor.TEditorSet:3373
            curFile.text(nw);
            //$LASTPOS=14003404;//jseditor.TEditorSet:3404
            inf.lastTimeStamp=curFile.lastUpdate();
            
          }
          
        }
        //$LASTPOS=14003467;//jseditor.TEditorSet:3467
        _this.fileSelBox.val(curFile.name());
        //$LASTPOS=14003504;//jseditor.TEditorSet:3504
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
              //$LASTPOS=14003005;//jseditor.TEditorSet:3005
              _this.fiber$getCurrentEditorInfo(_thread);
              __pc=1;return;
            case 1:
              inf=_thread.retVal;
              
              //$LASTPOS=14003042;//jseditor.TEditorSet:3042
              if (!(! inf)) { __pc=2; break; }
              _thread.exit(_this);return;
            case 2:
              
              //$LASTPOS=14003065;//jseditor.TEditorSet:3065
              curFile = inf.file;
              
              //$LASTPOS=14003108;//jseditor.TEditorSet:3108
              editor = inf.editor;
              
              //$LASTPOS=14003158;//jseditor.TEditorSet:3158
              if (curFile&&editor&&! curFile.isReadOnly()) {
                //$LASTPOS=14003277;//jseditor.TEditorSet:3277
                old = curFile.text();
                
                //$LASTPOS=14003310;//jseditor.TEditorSet:3310
                nw = editor.getValue();
                
                //$LASTPOS=14003345;//jseditor.TEditorSet:3345
                if (old!=nw) {
                  //$LASTPOS=14003373;//jseditor.TEditorSet:3373
                  curFile.text(nw);
                  //$LASTPOS=14003404;//jseditor.TEditorSet:3404
                  inf.lastTimeStamp=curFile.lastUpdate();
                  
                }
                
              }
              //$LASTPOS=14003467;//jseditor.TEditorSet:3467
              _this.fileSelBox.val(curFile.name());
              //$LASTPOS=14003504;//jseditor.TEditorSet:3504
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
        
        //$LASTPOS=14003582;//jseditor.TEditorSet:3582
        inf = f?_this.editors[f.path()]:_this.getCurrentEditorInfo();
        
        //$LASTPOS=14003639;//jseditor.TEditorSet:3639
        if (! inf) {
          return _this;
        }
        //$LASTPOS=14003662;//jseditor.TEditorSet:3662
        inf.editor.destroy();
        //$LASTPOS=14003689;//jseditor.TEditorSet:3689
        inf.dom.remove();
        //$LASTPOS=14003712;//jseditor.TEditorSet:3712
        inf.cand.remove();
        //$LASTPOS=14003736;//jseditor.TEditorSet:3736
        delete _this.editors[inf.file.path()];
        //$LASTPOS=14003774;//jseditor.TEditorSet:3774
        delete _this.names[inf.name];
      },
      fiber$close :function _trc_TEditorSet_f_close(_thread,f) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var inf;
        
        //$LASTPOS=14003582;//jseditor.TEditorSet:3582
        inf = f?_this.editors[f.path()]:_this.getCurrentEditorInfo();
        
        //$LASTPOS=14003639;//jseditor.TEditorSet:3639
        if (! inf) {
          _thread.retVal=_this;return;
          
        }
        //$LASTPOS=14003662;//jseditor.TEditorSet:3662
        inf.editor.destroy();
        //$LASTPOS=14003689;//jseditor.TEditorSet:3689
        inf.dom.remove();
        //$LASTPOS=14003712;//jseditor.TEditorSet:3712
        inf.cand.remove();
        //$LASTPOS=14003736;//jseditor.TEditorSet:3736
        delete _this.editors[inf.file.path()];
        //$LASTPOS=14003774;//jseditor.TEditorSet:3774
        delete _this.names[inf.name];
        
        _thread.retVal=_this;return;
      },
      __dummy: false
    },
    decls: {"methods":{"main":{"nowait":false},"new":{"nowait":false},"selIn":{"nowait":false},"watchLoop":{"nowait":false},"watch":{"nowait":false},"allModified":{"nowait":false},"open":{"nowait":false},"setFontSize":{"nowait":false},"getCurrentEditorInfo":{"nowait":false},"save":{"nowait":false},"close":{"nowait":false}}}
  });
});