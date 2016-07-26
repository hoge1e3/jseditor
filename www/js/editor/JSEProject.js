define(function (require) {
  var Tonyu=require('Tonyu');
  var FS=require('FS');
  var Base=require('Base');
  return Tonyu.klass.define({
    fullName: 'jseditor.JSEProject',
    shortName: 'JSEProject',
    namespace: 'jseditor',
    superclass: Tonyu.classes.jseditor.Base,
    includes: [],
    methods: {
      main :function _trc_JSEProject_main() {
        "use strict";
        var _this=this;
        
        
      },
      fiber$main :function _trc_JSEProject_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        
        _thread.retVal=_this;return;
      },
      findProject :function _trc_JSEProject_findProject(name) {
        "use strict";
        var _this=this;
        var prj;
        
        
        //$LASTPOS=12000120;//jseditor.JSEProject:120
        _this.projects.forEach((function anonymous_137(p) {
          
          //$LASTPOS=12000152;//jseditor.JSEProject:152
          if (p.name==name) {
            //$LASTPOS=12000170;//jseditor.JSEProject:170
            prj=p;
          }
        }));
        return prj;
      },
      fiber$findProject :function _trc_JSEProject_f_findProject(_thread,name) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var prj;
        
        
        //$LASTPOS=12000120;//jseditor.JSEProject:120
        _this.projects.forEach((function anonymous_137(p) {
          
          //$LASTPOS=12000152;//jseditor.JSEProject:152
          if (p.name==name) {
            //$LASTPOS=12000170;//jseditor.JSEProject:170
            prj=p;
          }
        }));
        _thread.retVal=prj;return;
        
        
        _thread.retVal=_this;return;
      },
      initialize :function _trc_JSEProject_initialize(prjs,name) {
        "use strict";
        var _this=this;
        
        //$LASTPOS=12000244;//jseditor.JSEProject:244
        _this.projects=prjs;
        //$LASTPOS=12000268;//jseditor.JSEProject:268
        _this.prj=_this.findProject(name);
        //$LASTPOS=12000295;//jseditor.JSEProject:295
        if (! _this.prj) {
          //$LASTPOS=12000315;//jseditor.JSEProject:315
          _this.alert("Project "+name+" not found");
          //$LASTPOS=12000360;//jseditor.JSEProject:360
          _this.location.href="index.html";
          
        } else {
          //$LASTPOS=12000602;//jseditor.JSEProject:602
          _this.name=_this.prj.name;
          //$LASTPOS=12000630;//jseditor.JSEProject:630
          _this.path=FS.get(_this.prj.path.replace(/\\/g,"/"));
          //$LASTPOS=12000680;//jseditor.JSEProject:680
          _this.readInfoDir();
          //$LASTPOS=12000816;//jseditor.JSEProject:816
          _this.print("PRJ=",_this);
          
        }
      },
      __getter__www :function _trc_JSEProject___getter__www() {
        "use strict";
        var _this=this;
        var v;
        
        //$LASTPOS=12000855;//jseditor.JSEProject:855
        v = _this.prj.www||(_this.build&&_this.build.htmlDir);
        
        return v&&_this.path.rel(v);
      },
      __getter__htmlDir :function _trc_JSEProject___getter__htmlDir() {
        "use strict";
        var _this=this;
        
        return _this.www;
      },
      __getter__tonyuC :function _trc_JSEProject___getter__tonyuC() {
        "use strict";
        var _this=this;
        var v;
        
        //$LASTPOS=12001018;//jseditor.JSEProject:1018
        v = _this.prj.tonyuC||(_this.build&&_this.build.tonyuC);
        
        return v&&_this.path.rel(v);
      },
      __getter__reqConf :function _trc_JSEProject___getter__reqConf() {
        "use strict";
        var _this=this;
        var v;
        
        //$LASTPOS=12001158;//jseditor.JSEProject:1158
        v = _this.prj.reqConf||(_this.build&&_this.build.reqConf);
        
        return v&&_this.path.rel(v);
      },
      readInfoDir :function _trc_JSEProject_readInfoDir() {
        "use strict";
        var _this=this;
        var e;
        var f;
        var _it_340;
        var n;
        
        //$LASTPOS=12001308;//jseditor.JSEProject:1308
        e = _this.infoDir.exists();
        
        //$LASTPOS=12001336;//jseditor.JSEProject:1336
        if (! e) {
          return _this;
        }
        //$LASTPOS=12001356;//jseditor.JSEProject:1356
        _it_340=Tonyu.iterator(_this.infoDir.listFiles(),1);
        while(_it_340.next()) {
          f=_it_340[0];
          
          //$LASTPOS=12001401;//jseditor.JSEProject:1401
          n = f.truncExt();
          
          //$LASTPOS=12001429;//jseditor.JSEProject:1429
          if (_this[n]!=null) {
            //$LASTPOS=12001462;//jseditor.JSEProject:1462
            _this.print(f+" is ignored");
            continue;
            
            
          }
          try {
            //$LASTPOS=12001544;//jseditor.JSEProject:1544
            _this[n]=f.obj();
            
          } catch (e) {
            //$LASTPOS=12001594;//jseditor.JSEProject:1594
            _this.print("Invalid json on "+f+". Ignored");
            
          }
          
        }
      },
      fiber$readInfoDir :function _trc_JSEProject_f_readInfoDir(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var e;
        var f;
        var _it_340;
        var n;
        
        //$LASTPOS=12001308;//jseditor.JSEProject:1308
        e = _this.infoDir.exists();
        
        //$LASTPOS=12001336;//jseditor.JSEProject:1336
        if (! e) {
          _thread.retVal=_this;return;
          
        }
        //$LASTPOS=12001356;//jseditor.JSEProject:1356
        _it_340=Tonyu.iterator(_this.infoDir.listFiles(),1);
        while(_it_340.next()) {
          f=_it_340[0];
          
          //$LASTPOS=12001401;//jseditor.JSEProject:1401
          n = f.truncExt();
          
          //$LASTPOS=12001429;//jseditor.JSEProject:1429
          if (_this[n]!=null) {
            //$LASTPOS=12001462;//jseditor.JSEProject:1462
            _this.print(f+" is ignored");
            continue;
            
            
          }
          try {
            //$LASTPOS=12001544;//jseditor.JSEProject:1544
            _this[n]=f.obj();
            
          } catch (e) {
            //$LASTPOS=12001594;//jseditor.JSEProject:1594
            _this.print("Invalid json on "+f+". Ignored");
            
          }
          
        }
        
        _thread.retVal=_this;return;
      },
      __getter__infoDir :function _trc_JSEProject___getter__infoDir() {
        "use strict";
        var _this=this;
        
        return _this.path.rel(".jseprj/");
      },
      doSync :function _trc_JSEProject_doSync() {
        "use strict";
        var _this=this;
        var se;
        var _it_345;
        var files;
        function syncDirsOrFiles(files) {
          
          //$LASTPOS=12001910;//jseditor.JSEProject:1910
          if (files[0]&&files[0].isDir()) {
            //$LASTPOS=12001958;//jseditor.JSEProject:1958
            syncDirs(files);
            
          } else {
            //$LASTPOS=12002008;//jseditor.JSEProject:2008
            syncFiles(files);
            
          }
        }function syncDirs(dirs) {
          var names;
          var d;
          var _it_355;
          var f;
          var _it_356;
          var n;
          var v;
          var _it_357;
          var df;
          
          //$LASTPOS=12002072;//jseditor.JSEProject:2072
          names = {};
          
          //$LASTPOS=12002094;//jseditor.JSEProject:2094
          _it_355=Tonyu.iterator(dirs,1);
          while(_it_355.next()) {
            d=_it_355[0];
            
            //$LASTPOS=12002128;//jseditor.JSEProject:2128
            _it_356=Tonyu.iterator(d.listFiles(),1);
            while(_it_356.next()) {
              f=_it_356[0];
              
              //$LASTPOS=12002175;//jseditor.JSEProject:2175
              names[f.name()]=1;
              
            }
            
          }
          //$LASTPOS=12002226;//jseditor.JSEProject:2226
          _it_357=Tonyu.iterator(names,2);
          while(_it_357.next()) {
            n=_it_357[0];
            v=_it_357[1];
            
            //$LASTPOS=12002263;//jseditor.JSEProject:2263
            df = dirs.map((function anonymous_2279(d) {
              
              return d.rel(n);
            }));
            
            //$LASTPOS=12002355;//jseditor.JSEProject:2355
            syncDirsOrFiles(df);
            
          }
        }function syncFiles(files) {
          var max;
          var maxf;
          var f;
          var _it_369;
          var _it_370;
          var lu;
          
          //$LASTPOS=12002424;//jseditor.JSEProject:2424
          max = 0;
          
          //$LASTPOS=12002448;//jseditor.JSEProject:2448
          _it_369=Tonyu.iterator(files,1);
          while(_it_369.next()) {
            f=_it_369[0];
            
            //$LASTPOS=12002483;//jseditor.JSEProject:2483
            if (! f.exists()) {
              continue;
              
            }
            //$LASTPOS=12002522;//jseditor.JSEProject:2522
            if (f.lastUpdate()>max) {
              //$LASTPOS=12002564;//jseditor.JSEProject:2564
              max=f.lastUpdate();
              //$LASTPOS=12002600;//jseditor.JSEProject:2600
              maxf=f;
              
            }
            
          }
          //$LASTPOS=12002640;//jseditor.JSEProject:2640
          if (maxf) {
            //$LASTPOS=12002664;//jseditor.JSEProject:2664
            _it_370=Tonyu.iterator(files,1);
            while(_it_370.next()) {
              f=_it_370[0];
              
              //$LASTPOS=12002703;//jseditor.JSEProject:2703
              lu = f.exists()?f.lastUpdate():0;
              
              //$LASTPOS=12002759;//jseditor.JSEProject:2759
              if (lu<=max-1000) {
                //$LASTPOS=12002799;//jseditor.JSEProject:2799
                _this.print("cp ",maxf,max,new Date(max),f,f.lastUpdate(),new Date(f.lastUpdate()));
                //$LASTPOS=12002904;//jseditor.JSEProject:2904
                f.copyFrom(maxf,{a: true});
                
              }
              
            }
            
          }
        }function resolve(p) {
          
          //$LASTPOS=12003005;//jseditor.JSEProject:3005
          p=p.replace(/\$\{projects:([^\}]+)\}\/?/g,(function anonymous_3048(_,prjn) {
            var pr;
            
            //$LASTPOS=12003080;//jseditor.JSEProject:3080
            pr = _this.findProject(prjn);
            
            //$LASTPOS=12003118;//jseditor.JSEProject:3118
            if (! pr) {
              throw new Error("Project "+prjn+" not found");
              
            }
            return FS.PathUtil.directorify(pr.path);
          }));
          //$LASTPOS=12003247;//jseditor.JSEProject:3247
          if (FS.PathUtil.isAbsolutePath(p)) {
            return FS.get(p);
          }
          return _this.path.rel(p);
        }
        //$LASTPOS=12001716;//jseditor.JSEProject:1716
        if (! _this.sync) {
          //$LASTPOS=12001729;//jseditor.JSEProject:1729
          _this.alert("sync is not configured");
          return _this;
          
        }
        //$LASTPOS=12001776;//jseditor.JSEProject:1776
        _it_345=Tonyu.iterator(_this.sync,1);
        while(_it_345.next()) {
          se=_it_345[0];
          
          //$LASTPOS=12001807;//jseditor.JSEProject:1807
          files = se.map(resolve);
          
          //$LASTPOS=12001842;//jseditor.JSEProject:1842
          syncDirsOrFiles(files);
          
        }
        
        
        
        
      },
      fiber$doSync :function _trc_JSEProject_f_doSync(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var se;
        var _it_345;
        var files;
        function syncDirsOrFiles(files) {
          
          //$LASTPOS=12001910;//jseditor.JSEProject:1910
          if (files[0]&&files[0].isDir()) {
            //$LASTPOS=12001958;//jseditor.JSEProject:1958
            syncDirs(files);
            
          } else {
            //$LASTPOS=12002008;//jseditor.JSEProject:2008
            syncFiles(files);
            
          }
        }function syncDirs(dirs) {
          var names;
          var d;
          var _it_355;
          var f;
          var _it_356;
          var n;
          var v;
          var _it_357;
          var df;
          
          //$LASTPOS=12002072;//jseditor.JSEProject:2072
          names = {};
          
          //$LASTPOS=12002094;//jseditor.JSEProject:2094
          _it_355=Tonyu.iterator(dirs,1);
          while(_it_355.next()) {
            d=_it_355[0];
            
            //$LASTPOS=12002128;//jseditor.JSEProject:2128
            _it_356=Tonyu.iterator(d.listFiles(),1);
            while(_it_356.next()) {
              f=_it_356[0];
              
              //$LASTPOS=12002175;//jseditor.JSEProject:2175
              names[f.name()]=1;
              
            }
            
          }
          //$LASTPOS=12002226;//jseditor.JSEProject:2226
          _it_357=Tonyu.iterator(names,2);
          while(_it_357.next()) {
            n=_it_357[0];
            v=_it_357[1];
            
            //$LASTPOS=12002263;//jseditor.JSEProject:2263
            df = dirs.map((function anonymous_2279(d) {
              
              return d.rel(n);
            }));
            
            //$LASTPOS=12002355;//jseditor.JSEProject:2355
            syncDirsOrFiles(df);
            
          }
        }function syncFiles(files) {
          var max;
          var maxf;
          var f;
          var _it_369;
          var _it_370;
          var lu;
          
          //$LASTPOS=12002424;//jseditor.JSEProject:2424
          max = 0;
          
          //$LASTPOS=12002448;//jseditor.JSEProject:2448
          _it_369=Tonyu.iterator(files,1);
          while(_it_369.next()) {
            f=_it_369[0];
            
            //$LASTPOS=12002483;//jseditor.JSEProject:2483
            if (! f.exists()) {
              continue;
              
            }
            //$LASTPOS=12002522;//jseditor.JSEProject:2522
            if (f.lastUpdate()>max) {
              //$LASTPOS=12002564;//jseditor.JSEProject:2564
              max=f.lastUpdate();
              //$LASTPOS=12002600;//jseditor.JSEProject:2600
              maxf=f;
              
            }
            
          }
          //$LASTPOS=12002640;//jseditor.JSEProject:2640
          if (maxf) {
            //$LASTPOS=12002664;//jseditor.JSEProject:2664
            _it_370=Tonyu.iterator(files,1);
            while(_it_370.next()) {
              f=_it_370[0];
              
              //$LASTPOS=12002703;//jseditor.JSEProject:2703
              lu = f.exists()?f.lastUpdate():0;
              
              //$LASTPOS=12002759;//jseditor.JSEProject:2759
              if (lu<=max-1000) {
                //$LASTPOS=12002799;//jseditor.JSEProject:2799
                _this.print("cp ",maxf,max,new Date(max),f,f.lastUpdate(),new Date(f.lastUpdate()));
                //$LASTPOS=12002904;//jseditor.JSEProject:2904
                f.copyFrom(maxf,{a: true});
                
              }
              
            }
            
          }
        }function resolve(p) {
          
          //$LASTPOS=12003005;//jseditor.JSEProject:3005
          p=p.replace(/\$\{projects:([^\}]+)\}\/?/g,(function anonymous_3048(_,prjn) {
            var pr;
            
            //$LASTPOS=12003080;//jseditor.JSEProject:3080
            pr = _this.findProject(prjn);
            
            //$LASTPOS=12003118;//jseditor.JSEProject:3118
            if (! pr) {
              throw new Error("Project "+prjn+" not found");
              
            }
            return FS.PathUtil.directorify(pr.path);
          }));
          //$LASTPOS=12003247;//jseditor.JSEProject:3247
          if (FS.PathUtil.isAbsolutePath(p)) {
            return FS.get(p);
          }
          return _this.path.rel(p);
        }
        
        _thread.enter(function _trc_JSEProject_ent_doSync(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=12001716;//jseditor.JSEProject:1716
              if (!(! _this.sync)) { __pc=2; break; }
              //$LASTPOS=12001729;//jseditor.JSEProject:1729
              _this.fiber$alert(_thread, "sync is not configured");
              __pc=1;return;
            case 1:
              
              _thread.exit(_this);return;
            case 2:
              
              //$LASTPOS=12001776;//jseditor.JSEProject:1776
              _it_345=Tonyu.iterator(_this.sync,1);
              while(_it_345.next()) {
                se=_it_345[0];
                
                //$LASTPOS=12001807;//jseditor.JSEProject:1807
                files = se.map(resolve);
                
                //$LASTPOS=12001842;//jseditor.JSEProject:1842
                syncDirsOrFiles(files);
                
              }
              
              
              
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      __dummy: false
    },
    decls: {"methods":{"main":{"nowait":false},"findProject":{"nowait":false},"new":{"nowait":false},"__getter__www":{"nowait":true},"__getter__htmlDir":{"nowait":true},"__getter__tonyuC":{"nowait":true},"__getter__reqConf":{"nowait":true},"readInfoDir":{"nowait":false},"__getter__infoDir":{"nowait":true},"doSync":{"nowait":false}}}
  });
});