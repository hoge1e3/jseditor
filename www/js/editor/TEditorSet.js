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
        var _it_88;
        
        //$LASTPOS=14001190;//jseditor.TEditorSet:1190
        res = [];
        
        //$LASTPOS=14001207;//jseditor.TEditorSet:1207
        _it_88=Tonyu.iterator(_this.editors,2);
        while(_it_88.next()) {
          k=_it_88[0];
          inf=_it_88[1];
          
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
        var _it_88;
        
        //$LASTPOS=14001190;//jseditor.TEditorSet:1190
        res = [];
        
        //$LASTPOS=14001207;//jseditor.TEditorSet:1207
        _it_88=Tonyu.iterator(_this.editors,2);
        while(_it_88.next()) {
          k=_it_88[0];
          inf=_it_88[1];
          
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
        var d1;
        var d2;
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
        if (Tonyu.globals.$fileList) {
          //$LASTPOS=14001489;//jseditor.TEditorSet:1489
          d1 = Tonyu.globals.$fileList.curDir;
          
          //$LASTPOS=14001523;//jseditor.TEditorSet:1523
          d2 = f.up();
          
          //$LASTPOS=14001547;//jseditor.TEditorSet:1547
          if (d1&&d2&&d1.path()!=d2.path()) {
            //$LASTPOS=14001585;//jseditor.TEditorSet:1585
            Tonyu.globals.$fileList.open(d2);
          }
          
        }
        //$LASTPOS=14001617;//jseditor.TEditorSet:1617
        if (! inf) {
          //$LASTPOS=14001638;//jseditor.TEditorSet:1638
          editorDOM = $("<pre>").css("height",(_this.options.height||300)+"px").text(f.text()).appendTo(_this.progs);
          
          //$LASTPOS=14001793;//jseditor.TEditorSet:1793
          editor = ace.edit(editorDOM[0]);
          
          //$LASTPOS=14001837;//jseditor.TEditorSet:1837
          if (typeof  _this.options.fontSize=="number") {
            //$LASTPOS=14001876;//jseditor.TEditorSet:1876
            editor.setFontSize(_this.options.fontSize);
          }
          //$LASTPOS=14001923;//jseditor.TEditorSet:1923
          editor.setTheme("ace/theme/eclipse");
          //$LASTPOS=14001970;//jseditor.TEditorSet:1970
          type = (f.ext()||"").replace(".","");
          
          //$LASTPOS=14002019;//jseditor.TEditorSet:2019
          type=_this.types[type]||type;
          //$LASTPOS=14002052;//jseditor.TEditorSet:2052
          editor.getSession().setMode("ace/mode/"+type);
          //$LASTPOS=14002108;//jseditor.TEditorSet:2108
          _this.editors[f.path()]=inf={file: f,editor: editor,dom: editorDOM};
          //$LASTPOS=14002181;//jseditor.TEditorSet:2181
          inf.name=f.name();
          //$LASTPOS=14002215;//jseditor.TEditorSet:2215
          _this.names[inf.name]=inf;
          //$LASTPOS=14002245;//jseditor.TEditorSet:2245
          inf.cand=UI("option",{value: inf.name});
          //$LASTPOS=14002294;//jseditor.TEditorSet:2294
          _this.cands.append(inf.cand);
          //$LASTPOS=14002327;//jseditor.TEditorSet:2327
          editor.setReadOnly(false);
          //$LASTPOS=14002363;//jseditor.TEditorSet:2363
          editor.clearSelection();
          //$LASTPOS=14002397;//jseditor.TEditorSet:2397
          editor.focus();
          //$LASTPOS=14002422;//jseditor.TEditorSet:2422
          _this.curDOM=editorDOM;
          
        } else {
          //$LASTPOS=14002463;//jseditor.TEditorSet:2463
          if (inf.lastTimeStamp<inf.file.lastUpdate()) {
            //$LASTPOS=14002523;//jseditor.TEditorSet:2523
            inf.editor.setValue(inf.file.text());
            //$LASTPOS=14002574;//jseditor.TEditorSet:2574
            inf.editor.clearSelection();
            //$LASTPOS=14002616;//jseditor.TEditorSet:2616
            inf.lastTimeStamp=inf.file.lastUpdate();
            
          }
          //$LASTPOS=14002677;//jseditor.TEditorSet:2677
          inf.dom.show();
          //$LASTPOS=14002702;//jseditor.TEditorSet:2702
          inf.editor.focus();
          //$LASTPOS=14002731;//jseditor.TEditorSet:2731
          _this.curDOM=inf.dom;
          
        }
        //$LASTPOS=14002759;//jseditor.TEditorSet:2759
        _this.curFile=f;
        //$LASTPOS=14002775;//jseditor.TEditorSet:2775
        inf.lastTimeStamp=f.lastUpdate();
        //$LASTPOS=14002814;//jseditor.TEditorSet:2814
        _this.fileSelBox.val(f.name());
      },
      fiber$open :function _trc_TEditorSet_f_open(_thread,f) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var inf;
        var d1;
        var d2;
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
        if (Tonyu.globals.$fileList) {
          //$LASTPOS=14001489;//jseditor.TEditorSet:1489
          d1 = Tonyu.globals.$fileList.curDir;
          
          //$LASTPOS=14001523;//jseditor.TEditorSet:1523
          d2 = f.up();
          
          //$LASTPOS=14001547;//jseditor.TEditorSet:1547
          if (d1&&d2&&d1.path()!=d2.path()) {
            //$LASTPOS=14001585;//jseditor.TEditorSet:1585
            Tonyu.globals.$fileList.open(d2);
          }
          
        }
        //$LASTPOS=14001617;//jseditor.TEditorSet:1617
        if (! inf) {
          //$LASTPOS=14001638;//jseditor.TEditorSet:1638
          editorDOM = $("<pre>").css("height",(_this.options.height||300)+"px").text(f.text()).appendTo(_this.progs);
          
          //$LASTPOS=14001793;//jseditor.TEditorSet:1793
          editor = ace.edit(editorDOM[0]);
          
          //$LASTPOS=14001837;//jseditor.TEditorSet:1837
          if (typeof  _this.options.fontSize=="number") {
            //$LASTPOS=14001876;//jseditor.TEditorSet:1876
            editor.setFontSize(_this.options.fontSize);
          }
          //$LASTPOS=14001923;//jseditor.TEditorSet:1923
          editor.setTheme("ace/theme/eclipse");
          //$LASTPOS=14001970;//jseditor.TEditorSet:1970
          type = (f.ext()||"").replace(".","");
          
          //$LASTPOS=14002019;//jseditor.TEditorSet:2019
          type=_this.types[type]||type;
          //$LASTPOS=14002052;//jseditor.TEditorSet:2052
          editor.getSession().setMode("ace/mode/"+type);
          //$LASTPOS=14002108;//jseditor.TEditorSet:2108
          _this.editors[f.path()]=inf={file: f,editor: editor,dom: editorDOM};
          //$LASTPOS=14002181;//jseditor.TEditorSet:2181
          inf.name=f.name();
          //$LASTPOS=14002215;//jseditor.TEditorSet:2215
          _this.names[inf.name]=inf;
          //$LASTPOS=14002245;//jseditor.TEditorSet:2245
          inf.cand=UI("option",{value: inf.name});
          //$LASTPOS=14002294;//jseditor.TEditorSet:2294
          _this.cands.append(inf.cand);
          //$LASTPOS=14002327;//jseditor.TEditorSet:2327
          editor.setReadOnly(false);
          //$LASTPOS=14002363;//jseditor.TEditorSet:2363
          editor.clearSelection();
          //$LASTPOS=14002397;//jseditor.TEditorSet:2397
          editor.focus();
          //$LASTPOS=14002422;//jseditor.TEditorSet:2422
          _this.curDOM=editorDOM;
          
        } else {
          //$LASTPOS=14002463;//jseditor.TEditorSet:2463
          if (inf.lastTimeStamp<inf.file.lastUpdate()) {
            //$LASTPOS=14002523;//jseditor.TEditorSet:2523
            inf.editor.setValue(inf.file.text());
            //$LASTPOS=14002574;//jseditor.TEditorSet:2574
            inf.editor.clearSelection();
            //$LASTPOS=14002616;//jseditor.TEditorSet:2616
            inf.lastTimeStamp=inf.file.lastUpdate();
            
          }
          //$LASTPOS=14002677;//jseditor.TEditorSet:2677
          inf.dom.show();
          //$LASTPOS=14002702;//jseditor.TEditorSet:2702
          inf.editor.focus();
          //$LASTPOS=14002731;//jseditor.TEditorSet:2731
          _this.curDOM=inf.dom;
          
        }
        //$LASTPOS=14002759;//jseditor.TEditorSet:2759
        _this.curFile=f;
        //$LASTPOS=14002775;//jseditor.TEditorSet:2775
        inf.lastTimeStamp=f.lastUpdate();
        //$LASTPOS=14002814;//jseditor.TEditorSet:2814
        _this.fileSelBox.val(f.name());
        
        _thread.retVal=_this;return;
      },
      setFontSize :function _trc_TEditorSet_setFontSize(s) {
        "use strict";
        var _this=this;
        var inf;
        
        //$LASTPOS=14002929;//jseditor.TEditorSet:2929
        _this.options.fontSize=s;
        //$LASTPOS=14002954;//jseditor.TEditorSet:2954
        inf = _this.getCurrentEditorInfo();
        
        //$LASTPOS=14002991;//jseditor.TEditorSet:2991
        if (! inf) {
          return _this;
        }
        //$LASTPOS=14003014;//jseditor.TEditorSet:3014
        inf.editor.setFontSize(s);
      },
      fiber$setFontSize :function _trc_TEditorSet_f_setFontSize(_thread,s) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var inf;
        
        //$LASTPOS=14002929;//jseditor.TEditorSet:2929
        _this.options.fontSize=s;
        
        _thread.enter(function _trc_TEditorSet_ent_setFontSize(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=14002954;//jseditor.TEditorSet:2954
              _this.fiber$getCurrentEditorInfo(_thread);
              __pc=1;return;
            case 1:
              inf=_thread.retVal;
              
              //$LASTPOS=14002991;//jseditor.TEditorSet:2991
              if (!(! inf)) { __pc=2; break; }
              _thread.exit(_this);return;
            case 2:
              
              //$LASTPOS=14003014;//jseditor.TEditorSet:3014
              inf.editor.setFontSize(s);
              _thread.exit(_this);return;
            }
          }
        });
      },
      getCurrentEditorInfo :function _trc_TEditorSet_getCurrentEditorInfo() {
        "use strict";
        var _this=this;
        
        //$LASTPOS=14003076;//jseditor.TEditorSet:3076
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
        
        //$LASTPOS=14003076;//jseditor.TEditorSet:3076
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
        
        //$LASTPOS=14003159;//jseditor.TEditorSet:3159
        inf = _this.getCurrentEditorInfo();
        
        //$LASTPOS=14003196;//jseditor.TEditorSet:3196
        if (! inf) {
          return _this;
        }
        //$LASTPOS=14003219;//jseditor.TEditorSet:3219
        curFile = inf.file;
        
        //$LASTPOS=14003262;//jseditor.TEditorSet:3262
        editor = inf.editor;
        
        //$LASTPOS=14003312;//jseditor.TEditorSet:3312
        if (curFile&&editor&&! curFile.isReadOnly()) {
          //$LASTPOS=14003431;//jseditor.TEditorSet:3431
          old = curFile.text();
          
          //$LASTPOS=14003464;//jseditor.TEditorSet:3464
          nw = editor.getValue();
          
          //$LASTPOS=14003499;//jseditor.TEditorSet:3499
          if (old!=nw) {
            //$LASTPOS=14003527;//jseditor.TEditorSet:3527
            curFile.text(nw);
            //$LASTPOS=14003558;//jseditor.TEditorSet:3558
            inf.lastTimeStamp=curFile.lastUpdate();
            
          }
          
        }
        //$LASTPOS=14003621;//jseditor.TEditorSet:3621
        _this.fileSelBox.val(curFile.name());
        //$LASTPOS=14003658;//jseditor.TEditorSet:3658
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
              //$LASTPOS=14003159;//jseditor.TEditorSet:3159
              _this.fiber$getCurrentEditorInfo(_thread);
              __pc=1;return;
            case 1:
              inf=_thread.retVal;
              
              //$LASTPOS=14003196;//jseditor.TEditorSet:3196
              if (!(! inf)) { __pc=2; break; }
              _thread.exit(_this);return;
            case 2:
              
              //$LASTPOS=14003219;//jseditor.TEditorSet:3219
              curFile = inf.file;
              
              //$LASTPOS=14003262;//jseditor.TEditorSet:3262
              editor = inf.editor;
              
              //$LASTPOS=14003312;//jseditor.TEditorSet:3312
              if (curFile&&editor&&! curFile.isReadOnly()) {
                //$LASTPOS=14003431;//jseditor.TEditorSet:3431
                old = curFile.text();
                
                //$LASTPOS=14003464;//jseditor.TEditorSet:3464
                nw = editor.getValue();
                
                //$LASTPOS=14003499;//jseditor.TEditorSet:3499
                if (old!=nw) {
                  //$LASTPOS=14003527;//jseditor.TEditorSet:3527
                  curFile.text(nw);
                  //$LASTPOS=14003558;//jseditor.TEditorSet:3558
                  inf.lastTimeStamp=curFile.lastUpdate();
                  
                }
                
              }
              //$LASTPOS=14003621;//jseditor.TEditorSet:3621
              _this.fileSelBox.val(curFile.name());
              //$LASTPOS=14003658;//jseditor.TEditorSet:3658
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
        
        //$LASTPOS=14003736;//jseditor.TEditorSet:3736
        inf = f?_this.editors[f.path()]:_this.getCurrentEditorInfo();
        
        //$LASTPOS=14003793;//jseditor.TEditorSet:3793
        if (! inf) {
          return _this;
        }
        //$LASTPOS=14003816;//jseditor.TEditorSet:3816
        inf.editor.destroy();
        //$LASTPOS=14003843;//jseditor.TEditorSet:3843
        inf.dom.remove();
        //$LASTPOS=14003866;//jseditor.TEditorSet:3866
        inf.cand.remove();
        //$LASTPOS=14003890;//jseditor.TEditorSet:3890
        delete _this.editors[inf.file.path()];
        //$LASTPOS=14003928;//jseditor.TEditorSet:3928
        delete _this.names[inf.name];
      },
      fiber$close :function _trc_TEditorSet_f_close(_thread,f) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var inf;
        
        //$LASTPOS=14003736;//jseditor.TEditorSet:3736
        inf = f?_this.editors[f.path()]:_this.getCurrentEditorInfo();
        
        //$LASTPOS=14003793;//jseditor.TEditorSet:3793
        if (! inf) {
          _thread.retVal=_this;return;
          
        }
        //$LASTPOS=14003816;//jseditor.TEditorSet:3816
        inf.editor.destroy();
        //$LASTPOS=14003843;//jseditor.TEditorSet:3843
        inf.dom.remove();
        //$LASTPOS=14003866;//jseditor.TEditorSet:3866
        inf.cand.remove();
        //$LASTPOS=14003890;//jseditor.TEditorSet:3890
        delete _this.editors[inf.file.path()];
        //$LASTPOS=14003928;//jseditor.TEditorSet:3928
        delete _this.names[inf.name];
        
        _thread.retVal=_this;return;
      },
      __dummy: false
    },
    decls: {"methods":{"main":{"nowait":false},"new":{"nowait":false},"selIn":{"nowait":false},"watchLoop":{"nowait":false},"watch":{"nowait":false},"allModified":{"nowait":false},"open":{"nowait":false},"setFontSize":{"nowait":false},"getCurrentEditorInfo":{"nowait":false},"save":{"nowait":false},"close":{"nowait":false}}}
  });
});