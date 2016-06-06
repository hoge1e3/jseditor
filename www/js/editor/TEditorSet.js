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
        _this.types={js: "javascript",c: "c_cpp"};
      },
      selIn :function _trc_TEditorSet_selIn() {
        "use strict";
        var _this=this;
        var v;
        
        //$LASTPOS=14000498;//jseditor.TEditorSet:498
        v = _this.fileSelBox.val();
        
        //$LASTPOS=14000527;//jseditor.TEditorSet:527
        if (_this.names[v]) {
          //$LASTPOS=14000552;//jseditor.TEditorSet:552
          _this.open(_this.names[v].file);
          
        } else {
          //$LASTPOS=14000596;//jseditor.TEditorSet:596
          Tonyu.globals.$finder.parallel("findFile",v);
          
        }
      },
      fiber$selIn :function _trc_TEditorSet_f_selIn(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var v;
        
        //$LASTPOS=14000498;//jseditor.TEditorSet:498
        v = _this.fileSelBox.val();
        
        
        _thread.enter(function _trc_TEditorSet_ent_selIn(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=14000527;//jseditor.TEditorSet:527
              if (!(_this.names[v])) { __pc=2; break; }
              //$LASTPOS=14000552;//jseditor.TEditorSet:552
              _this.fiber$open(_thread, _this.names[v].file);
              __pc=1;return;
            case 1:
              
              __pc=3;break;
            case 2:
              {
                //$LASTPOS=14000596;//jseditor.TEditorSet:596
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
        
        //$LASTPOS=14000659;//jseditor.TEditorSet:659
        while (true) {
          //$LASTPOS=14000683;//jseditor.TEditorSet:683
          _this.watch();
          //$LASTPOS=14000701;//jseditor.TEditorSet:701
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
              //$LASTPOS=14000659;//jseditor.TEditorSet:659
            case 1:
              //$LASTPOS=14000683;//jseditor.TEditorSet:683
              _this.fiber$watch(_thread);
              __pc=2;return;
            case 2:
              
              //$LASTPOS=14000701;//jseditor.TEditorSet:701
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
        
        //$LASTPOS=14000742;//jseditor.TEditorSet:742
        inf = _this.getCurrentEditorInfo();
        
        //$LASTPOS=14000779;//jseditor.TEditorSet:779
        if (! inf) {
          return _this;
        }
        //$LASTPOS=14000802;//jseditor.TEditorSet:802
        if (! inf.file.exists()) {
          return _this;
        }
        //$LASTPOS=14000839;//jseditor.TEditorSet:839
        if (inf.lastTimeStamp<inf.file.lastUpdate()) {
          //$LASTPOS=14000895;//jseditor.TEditorSet:895
          inf.editor.setValue(inf.file.text());
          //$LASTPOS=14000942;//jseditor.TEditorSet:942
          inf.editor.clearSelection();
          //$LASTPOS=14000980;//jseditor.TEditorSet:980
          inf.lastTimeStamp=inf.file.lastUpdate();
          
        }
        //$LASTPOS=14001033;//jseditor.TEditorSet:1033
        unmod = inf.file.text()==inf.editor.getValue();
        
        //$LASTPOS=14001128;//jseditor.TEditorSet:1128
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
              //$LASTPOS=14000742;//jseditor.TEditorSet:742
              _this.fiber$getCurrentEditorInfo(_thread);
              __pc=1;return;
            case 1:
              inf=_thread.retVal;
              
              //$LASTPOS=14000779;//jseditor.TEditorSet:779
              if (!(! inf)) { __pc=2; break; }
              _thread.exit(_this);return;
            case 2:
              
              //$LASTPOS=14000802;//jseditor.TEditorSet:802
              if (!(! inf.file.exists())) { __pc=3; break; }
              _thread.exit(_this);return;
            case 3:
              
              //$LASTPOS=14000839;//jseditor.TEditorSet:839
              if (inf.lastTimeStamp<inf.file.lastUpdate()) {
                //$LASTPOS=14000895;//jseditor.TEditorSet:895
                inf.editor.setValue(inf.file.text());
                //$LASTPOS=14000942;//jseditor.TEditorSet:942
                inf.editor.clearSelection();
                //$LASTPOS=14000980;//jseditor.TEditorSet:980
                inf.lastTimeStamp=inf.file.lastUpdate();
                
              }
              //$LASTPOS=14001033;//jseditor.TEditorSet:1033
              unmod = inf.file.text()==inf.editor.getValue();
              
              //$LASTPOS=14001128;//jseditor.TEditorSet:1128
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
        var _it_92;
        
        //$LASTPOS=14001237;//jseditor.TEditorSet:1237
        res = [];
        
        //$LASTPOS=14001254;//jseditor.TEditorSet:1254
        _it_92=Tonyu.iterator(_this.editors,2);
        while(_it_92.next()) {
          k=_it_92[0];
          inf=_it_92[1];
          
          //$LASTPOS=14001292;//jseditor.TEditorSet:1292
          if (! inf.file.exists()) {
            continue;
            
          }
          //$LASTPOS=14001335;//jseditor.TEditorSet:1335
          if (inf.file.text()!=inf.editor.getValue()) {
            //$LASTPOS=14001379;//jseditor.TEditorSet:1379
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
        var _it_92;
        
        //$LASTPOS=14001237;//jseditor.TEditorSet:1237
        res = [];
        
        //$LASTPOS=14001254;//jseditor.TEditorSet:1254
        _it_92=Tonyu.iterator(_this.editors,2);
        while(_it_92.next()) {
          k=_it_92[0];
          inf=_it_92[1];
          
          //$LASTPOS=14001292;//jseditor.TEditorSet:1292
          if (! inf.file.exists()) {
            continue;
            
          }
          //$LASTPOS=14001335;//jseditor.TEditorSet:1335
          if (inf.file.text()!=inf.editor.getValue()) {
            //$LASTPOS=14001379;//jseditor.TEditorSet:1379
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
        
        //$LASTPOS=14001443;//jseditor.TEditorSet:1443
        if (f.isDir()) {
          return _this;
          
        }
        //$LASTPOS=14001489;//jseditor.TEditorSet:1489
        if (_this.curDOM) {
          //$LASTPOS=14001501;//jseditor.TEditorSet:1501
          _this.curDOM.hide();
        }
        //$LASTPOS=14001521;//jseditor.TEditorSet:1521
        inf = _this.editors[f.path()];
        
        //$LASTPOS=14001553;//jseditor.TEditorSet:1553
        if (Tonyu.globals.$fileList) {
          //$LASTPOS=14001579;//jseditor.TEditorSet:1579
          d1 = Tonyu.globals.$fileList.curDir;
          
          //$LASTPOS=14001613;//jseditor.TEditorSet:1613
          d2 = f.up();
          
          //$LASTPOS=14001637;//jseditor.TEditorSet:1637
          if (d1&&d2&&d1.path()!=d2.path()) {
            //$LASTPOS=14001675;//jseditor.TEditorSet:1675
            Tonyu.globals.$fileList.open(d2);
          }
          
        }
        //$LASTPOS=14001707;//jseditor.TEditorSet:1707
        if (! inf) {
          //$LASTPOS=14001728;//jseditor.TEditorSet:1728
          editorDOM = $("<pre>").css("height",(_this.options.height||300)+"px").text(f.text()).appendTo(_this.progs);
          
          //$LASTPOS=14001883;//jseditor.TEditorSet:1883
          editor = ace.edit(editorDOM[0]);
          
          //$LASTPOS=14001927;//jseditor.TEditorSet:1927
          if (typeof  _this.options.fontSize=="number") {
            //$LASTPOS=14001966;//jseditor.TEditorSet:1966
            editor.setFontSize(_this.options.fontSize);
          }
          //$LASTPOS=14002013;//jseditor.TEditorSet:2013
          editor.setTheme("ace/theme/eclipse");
          //$LASTPOS=14002060;//jseditor.TEditorSet:2060
          type = (f.ext()||"").replace(".","");
          
          //$LASTPOS=14002109;//jseditor.TEditorSet:2109
          type=_this.types[type]||type;
          //$LASTPOS=14002142;//jseditor.TEditorSet:2142
          editor.getSession().setMode("ace/mode/"+type);
          //$LASTPOS=14002198;//jseditor.TEditorSet:2198
          _this.editors[f.path()]=inf={file: f,editor: editor,dom: editorDOM};
          //$LASTPOS=14002271;//jseditor.TEditorSet:2271
          inf.name=f.name();
          //$LASTPOS=14002305;//jseditor.TEditorSet:2305
          _this.names[inf.name]=inf;
          //$LASTPOS=14002335;//jseditor.TEditorSet:2335
          inf.cand=UI("option",{value: inf.name});
          //$LASTPOS=14002384;//jseditor.TEditorSet:2384
          _this.cands.append(inf.cand);
          //$LASTPOS=14002417;//jseditor.TEditorSet:2417
          editor.setReadOnly(false);
          //$LASTPOS=14002453;//jseditor.TEditorSet:2453
          editor.clearSelection();
          //$LASTPOS=14002487;//jseditor.TEditorSet:2487
          editor.focus();
          //$LASTPOS=14002512;//jseditor.TEditorSet:2512
          _this.curDOM=editorDOM;
          
        } else {
          //$LASTPOS=14002553;//jseditor.TEditorSet:2553
          if (inf.lastTimeStamp<inf.file.lastUpdate()) {
            //$LASTPOS=14002613;//jseditor.TEditorSet:2613
            inf.editor.setValue(inf.file.text());
            //$LASTPOS=14002664;//jseditor.TEditorSet:2664
            inf.editor.clearSelection();
            //$LASTPOS=14002706;//jseditor.TEditorSet:2706
            inf.lastTimeStamp=inf.file.lastUpdate();
            
          }
          //$LASTPOS=14002767;//jseditor.TEditorSet:2767
          inf.dom.show();
          //$LASTPOS=14002792;//jseditor.TEditorSet:2792
          inf.editor.focus();
          //$LASTPOS=14002821;//jseditor.TEditorSet:2821
          _this.curDOM=inf.dom;
          
        }
        //$LASTPOS=14002849;//jseditor.TEditorSet:2849
        _this.curFile=f;
        //$LASTPOS=14002865;//jseditor.TEditorSet:2865
        inf.lastTimeStamp=f.lastUpdate();
        //$LASTPOS=14002904;//jseditor.TEditorSet:2904
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
        
        //$LASTPOS=14001443;//jseditor.TEditorSet:1443
        if (f.isDir()) {
          _thread.retVal=_this;return;
          
          
        }
        //$LASTPOS=14001489;//jseditor.TEditorSet:1489
        if (_this.curDOM) {
          //$LASTPOS=14001501;//jseditor.TEditorSet:1501
          _this.curDOM.hide();
        }
        //$LASTPOS=14001521;//jseditor.TEditorSet:1521
        inf = _this.editors[f.path()];
        
        //$LASTPOS=14001553;//jseditor.TEditorSet:1553
        if (Tonyu.globals.$fileList) {
          //$LASTPOS=14001579;//jseditor.TEditorSet:1579
          d1 = Tonyu.globals.$fileList.curDir;
          
          //$LASTPOS=14001613;//jseditor.TEditorSet:1613
          d2 = f.up();
          
          //$LASTPOS=14001637;//jseditor.TEditorSet:1637
          if (d1&&d2&&d1.path()!=d2.path()) {
            //$LASTPOS=14001675;//jseditor.TEditorSet:1675
            Tonyu.globals.$fileList.open(d2);
          }
          
        }
        //$LASTPOS=14001707;//jseditor.TEditorSet:1707
        if (! inf) {
          //$LASTPOS=14001728;//jseditor.TEditorSet:1728
          editorDOM = $("<pre>").css("height",(_this.options.height||300)+"px").text(f.text()).appendTo(_this.progs);
          
          //$LASTPOS=14001883;//jseditor.TEditorSet:1883
          editor = ace.edit(editorDOM[0]);
          
          //$LASTPOS=14001927;//jseditor.TEditorSet:1927
          if (typeof  _this.options.fontSize=="number") {
            //$LASTPOS=14001966;//jseditor.TEditorSet:1966
            editor.setFontSize(_this.options.fontSize);
          }
          //$LASTPOS=14002013;//jseditor.TEditorSet:2013
          editor.setTheme("ace/theme/eclipse");
          //$LASTPOS=14002060;//jseditor.TEditorSet:2060
          type = (f.ext()||"").replace(".","");
          
          //$LASTPOS=14002109;//jseditor.TEditorSet:2109
          type=_this.types[type]||type;
          //$LASTPOS=14002142;//jseditor.TEditorSet:2142
          editor.getSession().setMode("ace/mode/"+type);
          //$LASTPOS=14002198;//jseditor.TEditorSet:2198
          _this.editors[f.path()]=inf={file: f,editor: editor,dom: editorDOM};
          //$LASTPOS=14002271;//jseditor.TEditorSet:2271
          inf.name=f.name();
          //$LASTPOS=14002305;//jseditor.TEditorSet:2305
          _this.names[inf.name]=inf;
          //$LASTPOS=14002335;//jseditor.TEditorSet:2335
          inf.cand=UI("option",{value: inf.name});
          //$LASTPOS=14002384;//jseditor.TEditorSet:2384
          _this.cands.append(inf.cand);
          //$LASTPOS=14002417;//jseditor.TEditorSet:2417
          editor.setReadOnly(false);
          //$LASTPOS=14002453;//jseditor.TEditorSet:2453
          editor.clearSelection();
          //$LASTPOS=14002487;//jseditor.TEditorSet:2487
          editor.focus();
          //$LASTPOS=14002512;//jseditor.TEditorSet:2512
          _this.curDOM=editorDOM;
          
        } else {
          //$LASTPOS=14002553;//jseditor.TEditorSet:2553
          if (inf.lastTimeStamp<inf.file.lastUpdate()) {
            //$LASTPOS=14002613;//jseditor.TEditorSet:2613
            inf.editor.setValue(inf.file.text());
            //$LASTPOS=14002664;//jseditor.TEditorSet:2664
            inf.editor.clearSelection();
            //$LASTPOS=14002706;//jseditor.TEditorSet:2706
            inf.lastTimeStamp=inf.file.lastUpdate();
            
          }
          //$LASTPOS=14002767;//jseditor.TEditorSet:2767
          inf.dom.show();
          //$LASTPOS=14002792;//jseditor.TEditorSet:2792
          inf.editor.focus();
          //$LASTPOS=14002821;//jseditor.TEditorSet:2821
          _this.curDOM=inf.dom;
          
        }
        //$LASTPOS=14002849;//jseditor.TEditorSet:2849
        _this.curFile=f;
        //$LASTPOS=14002865;//jseditor.TEditorSet:2865
        inf.lastTimeStamp=f.lastUpdate();
        //$LASTPOS=14002904;//jseditor.TEditorSet:2904
        _this.fileSelBox.val(f.name());
        
        _thread.retVal=_this;return;
      },
      setFontSize :function _trc_TEditorSet_setFontSize(s) {
        "use strict";
        var _this=this;
        var inf;
        
        //$LASTPOS=14003019;//jseditor.TEditorSet:3019
        _this.options.fontSize=s;
        //$LASTPOS=14003044;//jseditor.TEditorSet:3044
        inf = _this.getCurrentEditorInfo();
        
        //$LASTPOS=14003081;//jseditor.TEditorSet:3081
        if (! inf) {
          return _this;
        }
        //$LASTPOS=14003104;//jseditor.TEditorSet:3104
        inf.editor.setFontSize(s);
      },
      fiber$setFontSize :function _trc_TEditorSet_f_setFontSize(_thread,s) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var inf;
        
        //$LASTPOS=14003019;//jseditor.TEditorSet:3019
        _this.options.fontSize=s;
        
        _thread.enter(function _trc_TEditorSet_ent_setFontSize(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=14003044;//jseditor.TEditorSet:3044
              _this.fiber$getCurrentEditorInfo(_thread);
              __pc=1;return;
            case 1:
              inf=_thread.retVal;
              
              //$LASTPOS=14003081;//jseditor.TEditorSet:3081
              if (!(! inf)) { __pc=2; break; }
              _thread.exit(_this);return;
            case 2:
              
              //$LASTPOS=14003104;//jseditor.TEditorSet:3104
              inf.editor.setFontSize(s);
              _thread.exit(_this);return;
            }
          }
        });
      },
      getCurrentEditorInfo :function _trc_TEditorSet_getCurrentEditorInfo() {
        "use strict";
        var _this=this;
        
        //$LASTPOS=14003166;//jseditor.TEditorSet:3166
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
        
        //$LASTPOS=14003166;//jseditor.TEditorSet:3166
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
        
        //$LASTPOS=14003249;//jseditor.TEditorSet:3249
        inf = _this.getCurrentEditorInfo();
        
        //$LASTPOS=14003286;//jseditor.TEditorSet:3286
        if (! inf) {
          return _this;
        }
        //$LASTPOS=14003309;//jseditor.TEditorSet:3309
        curFile = inf.file;
        
        //$LASTPOS=14003352;//jseditor.TEditorSet:3352
        editor = inf.editor;
        
        //$LASTPOS=14003402;//jseditor.TEditorSet:3402
        if (curFile&&editor&&! curFile.isReadOnly()) {
          //$LASTPOS=14003521;//jseditor.TEditorSet:3521
          old = curFile.text();
          
          //$LASTPOS=14003554;//jseditor.TEditorSet:3554
          nw = editor.getValue();
          
          //$LASTPOS=14003589;//jseditor.TEditorSet:3589
          if (old!=nw) {
            //$LASTPOS=14003617;//jseditor.TEditorSet:3617
            curFile.text(nw);
            //$LASTPOS=14003648;//jseditor.TEditorSet:3648
            inf.lastTimeStamp=curFile.lastUpdate();
            
          }
          
        }
        //$LASTPOS=14003711;//jseditor.TEditorSet:3711
        _this.fileSelBox.val(curFile.name());
        //$LASTPOS=14003748;//jseditor.TEditorSet:3748
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
              //$LASTPOS=14003249;//jseditor.TEditorSet:3249
              _this.fiber$getCurrentEditorInfo(_thread);
              __pc=1;return;
            case 1:
              inf=_thread.retVal;
              
              //$LASTPOS=14003286;//jseditor.TEditorSet:3286
              if (!(! inf)) { __pc=2; break; }
              _thread.exit(_this);return;
            case 2:
              
              //$LASTPOS=14003309;//jseditor.TEditorSet:3309
              curFile = inf.file;
              
              //$LASTPOS=14003352;//jseditor.TEditorSet:3352
              editor = inf.editor;
              
              //$LASTPOS=14003402;//jseditor.TEditorSet:3402
              if (curFile&&editor&&! curFile.isReadOnly()) {
                //$LASTPOS=14003521;//jseditor.TEditorSet:3521
                old = curFile.text();
                
                //$LASTPOS=14003554;//jseditor.TEditorSet:3554
                nw = editor.getValue();
                
                //$LASTPOS=14003589;//jseditor.TEditorSet:3589
                if (old!=nw) {
                  //$LASTPOS=14003617;//jseditor.TEditorSet:3617
                  curFile.text(nw);
                  //$LASTPOS=14003648;//jseditor.TEditorSet:3648
                  inf.lastTimeStamp=curFile.lastUpdate();
                  
                }
                
              }
              //$LASTPOS=14003711;//jseditor.TEditorSet:3711
              _this.fileSelBox.val(curFile.name());
              //$LASTPOS=14003748;//jseditor.TEditorSet:3748
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
        
        //$LASTPOS=14003826;//jseditor.TEditorSet:3826
        inf = f?_this.editors[f.path()]:_this.getCurrentEditorInfo();
        
        //$LASTPOS=14003883;//jseditor.TEditorSet:3883
        if (! inf) {
          return _this;
        }
        //$LASTPOS=14003906;//jseditor.TEditorSet:3906
        inf.editor.destroy();
        //$LASTPOS=14003933;//jseditor.TEditorSet:3933
        inf.dom.remove();
        //$LASTPOS=14003956;//jseditor.TEditorSet:3956
        inf.cand.remove();
        //$LASTPOS=14003980;//jseditor.TEditorSet:3980
        delete _this.editors[inf.file.path()];
        //$LASTPOS=14004018;//jseditor.TEditorSet:4018
        delete _this.names[inf.name];
      },
      fiber$close :function _trc_TEditorSet_f_close(_thread,f) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var inf;
        
        //$LASTPOS=14003826;//jseditor.TEditorSet:3826
        inf = f?_this.editors[f.path()]:_this.getCurrentEditorInfo();
        
        //$LASTPOS=14003883;//jseditor.TEditorSet:3883
        if (! inf) {
          _thread.retVal=_this;return;
          
        }
        //$LASTPOS=14003906;//jseditor.TEditorSet:3906
        inf.editor.destroy();
        //$LASTPOS=14003933;//jseditor.TEditorSet:3933
        inf.dom.remove();
        //$LASTPOS=14003956;//jseditor.TEditorSet:3956
        inf.cand.remove();
        //$LASTPOS=14003980;//jseditor.TEditorSet:3980
        delete _this.editors[inf.file.path()];
        //$LASTPOS=14004018;//jseditor.TEditorSet:4018
        delete _this.names[inf.name];
        
        _thread.retVal=_this;return;
      },
      __dummy: false
    },
    decls: {"methods":{"main":{"nowait":false},"new":{"nowait":false},"selIn":{"nowait":false},"watchLoop":{"nowait":false},"watch":{"nowait":false},"allModified":{"nowait":false},"open":{"nowait":false},"setFontSize":{"nowait":false},"getCurrentEditorInfo":{"nowait":false},"save":{"nowait":false},"close":{"nowait":false}}}
  });
});