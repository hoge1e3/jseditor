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
        if (! inf.file.exists()) {
          return _this;
        }
        //$LASTPOS=14000829;//jseditor.TEditorSet:829
        if (inf.lastTimeStamp<inf.file.lastUpdate()) {
          //$LASTPOS=14000885;//jseditor.TEditorSet:885
          inf.editor.setValue(inf.file.text());
          //$LASTPOS=14000932;//jseditor.TEditorSet:932
          inf.editor.clearSelection();
          //$LASTPOS=14000970;//jseditor.TEditorSet:970
          inf.lastTimeStamp=inf.file.lastUpdate();
          
        }
        //$LASTPOS=14001023;//jseditor.TEditorSet:1023
        unmod = inf.file.text()==inf.editor.getValue();
        
        //$LASTPOS=14001118;//jseditor.TEditorSet:1118
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
              if (!(! inf.file.exists())) { __pc=3; break; }
              _thread.exit(_this);return;
            case 3:
              
              //$LASTPOS=14000829;//jseditor.TEditorSet:829
              if (inf.lastTimeStamp<inf.file.lastUpdate()) {
                //$LASTPOS=14000885;//jseditor.TEditorSet:885
                inf.editor.setValue(inf.file.text());
                //$LASTPOS=14000932;//jseditor.TEditorSet:932
                inf.editor.clearSelection();
                //$LASTPOS=14000970;//jseditor.TEditorSet:970
                inf.lastTimeStamp=inf.file.lastUpdate();
                
              }
              //$LASTPOS=14001023;//jseditor.TEditorSet:1023
              unmod = inf.file.text()==inf.editor.getValue();
              
              //$LASTPOS=14001118;//jseditor.TEditorSet:1118
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
        var _it_89;
        
        //$LASTPOS=14001227;//jseditor.TEditorSet:1227
        res = [];
        
        //$LASTPOS=14001244;//jseditor.TEditorSet:1244
        _it_89=Tonyu.iterator(_this.editors,2);
        while(_it_89.next()) {
          k=_it_89[0];
          inf=_it_89[1];
          
          //$LASTPOS=14001282;//jseditor.TEditorSet:1282
          if (inf.file.text()!=inf.editor.getValue()) {
            //$LASTPOS=14001326;//jseditor.TEditorSet:1326
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
        var _it_89;
        
        //$LASTPOS=14001227;//jseditor.TEditorSet:1227
        res = [];
        
        //$LASTPOS=14001244;//jseditor.TEditorSet:1244
        _it_89=Tonyu.iterator(_this.editors,2);
        while(_it_89.next()) {
          k=_it_89[0];
          inf=_it_89[1];
          
          //$LASTPOS=14001282;//jseditor.TEditorSet:1282
          if (inf.file.text()!=inf.editor.getValue()) {
            //$LASTPOS=14001326;//jseditor.TEditorSet:1326
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
        
        //$LASTPOS=14001390;//jseditor.TEditorSet:1390
        if (f.isDir()) {
          return _this;
          
        }
        //$LASTPOS=14001436;//jseditor.TEditorSet:1436
        if (_this.curDOM) {
          //$LASTPOS=14001448;//jseditor.TEditorSet:1448
          _this.curDOM.hide();
        }
        //$LASTPOS=14001468;//jseditor.TEditorSet:1468
        inf = _this.editors[f.path()];
        
        //$LASTPOS=14001500;//jseditor.TEditorSet:1500
        if (Tonyu.globals.$fileList) {
          //$LASTPOS=14001526;//jseditor.TEditorSet:1526
          d1 = Tonyu.globals.$fileList.curDir;
          
          //$LASTPOS=14001560;//jseditor.TEditorSet:1560
          d2 = f.up();
          
          //$LASTPOS=14001584;//jseditor.TEditorSet:1584
          if (d1&&d2&&d1.path()!=d2.path()) {
            //$LASTPOS=14001622;//jseditor.TEditorSet:1622
            Tonyu.globals.$fileList.open(d2);
          }
          
        }
        //$LASTPOS=14001654;//jseditor.TEditorSet:1654
        if (! inf) {
          //$LASTPOS=14001675;//jseditor.TEditorSet:1675
          editorDOM = $("<pre>").css("height",(_this.options.height||300)+"px").text(f.text()).appendTo(_this.progs);
          
          //$LASTPOS=14001830;//jseditor.TEditorSet:1830
          editor = ace.edit(editorDOM[0]);
          
          //$LASTPOS=14001874;//jseditor.TEditorSet:1874
          if (typeof  _this.options.fontSize=="number") {
            //$LASTPOS=14001913;//jseditor.TEditorSet:1913
            editor.setFontSize(_this.options.fontSize);
          }
          //$LASTPOS=14001960;//jseditor.TEditorSet:1960
          editor.setTheme("ace/theme/eclipse");
          //$LASTPOS=14002007;//jseditor.TEditorSet:2007
          type = (f.ext()||"").replace(".","");
          
          //$LASTPOS=14002056;//jseditor.TEditorSet:2056
          type=_this.types[type]||type;
          //$LASTPOS=14002089;//jseditor.TEditorSet:2089
          editor.getSession().setMode("ace/mode/"+type);
          //$LASTPOS=14002145;//jseditor.TEditorSet:2145
          _this.editors[f.path()]=inf={file: f,editor: editor,dom: editorDOM};
          //$LASTPOS=14002218;//jseditor.TEditorSet:2218
          inf.name=f.name();
          //$LASTPOS=14002252;//jseditor.TEditorSet:2252
          _this.names[inf.name]=inf;
          //$LASTPOS=14002282;//jseditor.TEditorSet:2282
          inf.cand=UI("option",{value: inf.name});
          //$LASTPOS=14002331;//jseditor.TEditorSet:2331
          _this.cands.append(inf.cand);
          //$LASTPOS=14002364;//jseditor.TEditorSet:2364
          editor.setReadOnly(false);
          //$LASTPOS=14002400;//jseditor.TEditorSet:2400
          editor.clearSelection();
          //$LASTPOS=14002434;//jseditor.TEditorSet:2434
          editor.focus();
          //$LASTPOS=14002459;//jseditor.TEditorSet:2459
          _this.curDOM=editorDOM;
          
        } else {
          //$LASTPOS=14002500;//jseditor.TEditorSet:2500
          if (inf.lastTimeStamp<inf.file.lastUpdate()) {
            //$LASTPOS=14002560;//jseditor.TEditorSet:2560
            inf.editor.setValue(inf.file.text());
            //$LASTPOS=14002611;//jseditor.TEditorSet:2611
            inf.editor.clearSelection();
            //$LASTPOS=14002653;//jseditor.TEditorSet:2653
            inf.lastTimeStamp=inf.file.lastUpdate();
            
          }
          //$LASTPOS=14002714;//jseditor.TEditorSet:2714
          inf.dom.show();
          //$LASTPOS=14002739;//jseditor.TEditorSet:2739
          inf.editor.focus();
          //$LASTPOS=14002768;//jseditor.TEditorSet:2768
          _this.curDOM=inf.dom;
          
        }
        //$LASTPOS=14002796;//jseditor.TEditorSet:2796
        _this.curFile=f;
        //$LASTPOS=14002812;//jseditor.TEditorSet:2812
        inf.lastTimeStamp=f.lastUpdate();
        //$LASTPOS=14002851;//jseditor.TEditorSet:2851
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
        
        //$LASTPOS=14001390;//jseditor.TEditorSet:1390
        if (f.isDir()) {
          _thread.retVal=_this;return;
          
          
        }
        //$LASTPOS=14001436;//jseditor.TEditorSet:1436
        if (_this.curDOM) {
          //$LASTPOS=14001448;//jseditor.TEditorSet:1448
          _this.curDOM.hide();
        }
        //$LASTPOS=14001468;//jseditor.TEditorSet:1468
        inf = _this.editors[f.path()];
        
        //$LASTPOS=14001500;//jseditor.TEditorSet:1500
        if (Tonyu.globals.$fileList) {
          //$LASTPOS=14001526;//jseditor.TEditorSet:1526
          d1 = Tonyu.globals.$fileList.curDir;
          
          //$LASTPOS=14001560;//jseditor.TEditorSet:1560
          d2 = f.up();
          
          //$LASTPOS=14001584;//jseditor.TEditorSet:1584
          if (d1&&d2&&d1.path()!=d2.path()) {
            //$LASTPOS=14001622;//jseditor.TEditorSet:1622
            Tonyu.globals.$fileList.open(d2);
          }
          
        }
        //$LASTPOS=14001654;//jseditor.TEditorSet:1654
        if (! inf) {
          //$LASTPOS=14001675;//jseditor.TEditorSet:1675
          editorDOM = $("<pre>").css("height",(_this.options.height||300)+"px").text(f.text()).appendTo(_this.progs);
          
          //$LASTPOS=14001830;//jseditor.TEditorSet:1830
          editor = ace.edit(editorDOM[0]);
          
          //$LASTPOS=14001874;//jseditor.TEditorSet:1874
          if (typeof  _this.options.fontSize=="number") {
            //$LASTPOS=14001913;//jseditor.TEditorSet:1913
            editor.setFontSize(_this.options.fontSize);
          }
          //$LASTPOS=14001960;//jseditor.TEditorSet:1960
          editor.setTheme("ace/theme/eclipse");
          //$LASTPOS=14002007;//jseditor.TEditorSet:2007
          type = (f.ext()||"").replace(".","");
          
          //$LASTPOS=14002056;//jseditor.TEditorSet:2056
          type=_this.types[type]||type;
          //$LASTPOS=14002089;//jseditor.TEditorSet:2089
          editor.getSession().setMode("ace/mode/"+type);
          //$LASTPOS=14002145;//jseditor.TEditorSet:2145
          _this.editors[f.path()]=inf={file: f,editor: editor,dom: editorDOM};
          //$LASTPOS=14002218;//jseditor.TEditorSet:2218
          inf.name=f.name();
          //$LASTPOS=14002252;//jseditor.TEditorSet:2252
          _this.names[inf.name]=inf;
          //$LASTPOS=14002282;//jseditor.TEditorSet:2282
          inf.cand=UI("option",{value: inf.name});
          //$LASTPOS=14002331;//jseditor.TEditorSet:2331
          _this.cands.append(inf.cand);
          //$LASTPOS=14002364;//jseditor.TEditorSet:2364
          editor.setReadOnly(false);
          //$LASTPOS=14002400;//jseditor.TEditorSet:2400
          editor.clearSelection();
          //$LASTPOS=14002434;//jseditor.TEditorSet:2434
          editor.focus();
          //$LASTPOS=14002459;//jseditor.TEditorSet:2459
          _this.curDOM=editorDOM;
          
        } else {
          //$LASTPOS=14002500;//jseditor.TEditorSet:2500
          if (inf.lastTimeStamp<inf.file.lastUpdate()) {
            //$LASTPOS=14002560;//jseditor.TEditorSet:2560
            inf.editor.setValue(inf.file.text());
            //$LASTPOS=14002611;//jseditor.TEditorSet:2611
            inf.editor.clearSelection();
            //$LASTPOS=14002653;//jseditor.TEditorSet:2653
            inf.lastTimeStamp=inf.file.lastUpdate();
            
          }
          //$LASTPOS=14002714;//jseditor.TEditorSet:2714
          inf.dom.show();
          //$LASTPOS=14002739;//jseditor.TEditorSet:2739
          inf.editor.focus();
          //$LASTPOS=14002768;//jseditor.TEditorSet:2768
          _this.curDOM=inf.dom;
          
        }
        //$LASTPOS=14002796;//jseditor.TEditorSet:2796
        _this.curFile=f;
        //$LASTPOS=14002812;//jseditor.TEditorSet:2812
        inf.lastTimeStamp=f.lastUpdate();
        //$LASTPOS=14002851;//jseditor.TEditorSet:2851
        _this.fileSelBox.val(f.name());
        
        _thread.retVal=_this;return;
      },
      setFontSize :function _trc_TEditorSet_setFontSize(s) {
        "use strict";
        var _this=this;
        var inf;
        
        //$LASTPOS=14002966;//jseditor.TEditorSet:2966
        _this.options.fontSize=s;
        //$LASTPOS=14002991;//jseditor.TEditorSet:2991
        inf = _this.getCurrentEditorInfo();
        
        //$LASTPOS=14003028;//jseditor.TEditorSet:3028
        if (! inf) {
          return _this;
        }
        //$LASTPOS=14003051;//jseditor.TEditorSet:3051
        inf.editor.setFontSize(s);
      },
      fiber$setFontSize :function _trc_TEditorSet_f_setFontSize(_thread,s) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var inf;
        
        //$LASTPOS=14002966;//jseditor.TEditorSet:2966
        _this.options.fontSize=s;
        
        _thread.enter(function _trc_TEditorSet_ent_setFontSize(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=14002991;//jseditor.TEditorSet:2991
              _this.fiber$getCurrentEditorInfo(_thread);
              __pc=1;return;
            case 1:
              inf=_thread.retVal;
              
              //$LASTPOS=14003028;//jseditor.TEditorSet:3028
              if (!(! inf)) { __pc=2; break; }
              _thread.exit(_this);return;
            case 2:
              
              //$LASTPOS=14003051;//jseditor.TEditorSet:3051
              inf.editor.setFontSize(s);
              _thread.exit(_this);return;
            }
          }
        });
      },
      getCurrentEditorInfo :function _trc_TEditorSet_getCurrentEditorInfo() {
        "use strict";
        var _this=this;
        
        //$LASTPOS=14003113;//jseditor.TEditorSet:3113
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
        
        //$LASTPOS=14003113;//jseditor.TEditorSet:3113
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
        
        //$LASTPOS=14003196;//jseditor.TEditorSet:3196
        inf = _this.getCurrentEditorInfo();
        
        //$LASTPOS=14003233;//jseditor.TEditorSet:3233
        if (! inf) {
          return _this;
        }
        //$LASTPOS=14003256;//jseditor.TEditorSet:3256
        curFile = inf.file;
        
        //$LASTPOS=14003299;//jseditor.TEditorSet:3299
        editor = inf.editor;
        
        //$LASTPOS=14003349;//jseditor.TEditorSet:3349
        if (curFile&&editor&&! curFile.isReadOnly()) {
          //$LASTPOS=14003468;//jseditor.TEditorSet:3468
          old = curFile.text();
          
          //$LASTPOS=14003501;//jseditor.TEditorSet:3501
          nw = editor.getValue();
          
          //$LASTPOS=14003536;//jseditor.TEditorSet:3536
          if (old!=nw) {
            //$LASTPOS=14003564;//jseditor.TEditorSet:3564
            curFile.text(nw);
            //$LASTPOS=14003595;//jseditor.TEditorSet:3595
            inf.lastTimeStamp=curFile.lastUpdate();
            
          }
          
        }
        //$LASTPOS=14003658;//jseditor.TEditorSet:3658
        _this.fileSelBox.val(curFile.name());
        //$LASTPOS=14003695;//jseditor.TEditorSet:3695
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
              //$LASTPOS=14003196;//jseditor.TEditorSet:3196
              _this.fiber$getCurrentEditorInfo(_thread);
              __pc=1;return;
            case 1:
              inf=_thread.retVal;
              
              //$LASTPOS=14003233;//jseditor.TEditorSet:3233
              if (!(! inf)) { __pc=2; break; }
              _thread.exit(_this);return;
            case 2:
              
              //$LASTPOS=14003256;//jseditor.TEditorSet:3256
              curFile = inf.file;
              
              //$LASTPOS=14003299;//jseditor.TEditorSet:3299
              editor = inf.editor;
              
              //$LASTPOS=14003349;//jseditor.TEditorSet:3349
              if (curFile&&editor&&! curFile.isReadOnly()) {
                //$LASTPOS=14003468;//jseditor.TEditorSet:3468
                old = curFile.text();
                
                //$LASTPOS=14003501;//jseditor.TEditorSet:3501
                nw = editor.getValue();
                
                //$LASTPOS=14003536;//jseditor.TEditorSet:3536
                if (old!=nw) {
                  //$LASTPOS=14003564;//jseditor.TEditorSet:3564
                  curFile.text(nw);
                  //$LASTPOS=14003595;//jseditor.TEditorSet:3595
                  inf.lastTimeStamp=curFile.lastUpdate();
                  
                }
                
              }
              //$LASTPOS=14003658;//jseditor.TEditorSet:3658
              _this.fileSelBox.val(curFile.name());
              //$LASTPOS=14003695;//jseditor.TEditorSet:3695
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
        
        //$LASTPOS=14003773;//jseditor.TEditorSet:3773
        inf = f?_this.editors[f.path()]:_this.getCurrentEditorInfo();
        
        //$LASTPOS=14003830;//jseditor.TEditorSet:3830
        if (! inf) {
          return _this;
        }
        //$LASTPOS=14003853;//jseditor.TEditorSet:3853
        inf.editor.destroy();
        //$LASTPOS=14003880;//jseditor.TEditorSet:3880
        inf.dom.remove();
        //$LASTPOS=14003903;//jseditor.TEditorSet:3903
        inf.cand.remove();
        //$LASTPOS=14003927;//jseditor.TEditorSet:3927
        delete _this.editors[inf.file.path()];
        //$LASTPOS=14003965;//jseditor.TEditorSet:3965
        delete _this.names[inf.name];
      },
      fiber$close :function _trc_TEditorSet_f_close(_thread,f) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var inf;
        
        //$LASTPOS=14003773;//jseditor.TEditorSet:3773
        inf = f?_this.editors[f.path()]:_this.getCurrentEditorInfo();
        
        //$LASTPOS=14003830;//jseditor.TEditorSet:3830
        if (! inf) {
          _thread.retVal=_this;return;
          
        }
        //$LASTPOS=14003853;//jseditor.TEditorSet:3853
        inf.editor.destroy();
        //$LASTPOS=14003880;//jseditor.TEditorSet:3880
        inf.dom.remove();
        //$LASTPOS=14003903;//jseditor.TEditorSet:3903
        inf.cand.remove();
        //$LASTPOS=14003927;//jseditor.TEditorSet:3927
        delete _this.editors[inf.file.path()];
        //$LASTPOS=14003965;//jseditor.TEditorSet:3965
        delete _this.names[inf.name];
        
        _thread.retVal=_this;return;
      },
      __dummy: false
    },
    decls: {"methods":{"main":{"nowait":false},"new":{"nowait":false},"selIn":{"nowait":false},"watchLoop":{"nowait":false},"watch":{"nowait":false},"allModified":{"nowait":false},"open":{"nowait":false},"setFontSize":{"nowait":false},"getCurrentEditorInfo":{"nowait":false},"save":{"nowait":false},"close":{"nowait":false}}}
  });
});