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
        var _it_80;
        var n;
        
        //$LASTPOS=12001308;//jseditor.JSEProject:1308
        e = _this.infoDir.exists();
        
        //$LASTPOS=12001336;//jseditor.JSEProject:1336
        if (! e) {
          return _this;
        }
        //$LASTPOS=12001356;//jseditor.JSEProject:1356
        _it_80=Tonyu.iterator(_this.infoDir.listFiles(),1);
        while(_it_80.next()) {
          f=_it_80[0];
          
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
        var _it_80;
        var n;
        
        //$LASTPOS=12001308;//jseditor.JSEProject:1308
        e = _this.infoDir.exists();
        
        //$LASTPOS=12001336;//jseditor.JSEProject:1336
        if (! e) {
          _thread.retVal=_this;return;
          
        }
        //$LASTPOS=12001356;//jseditor.JSEProject:1356
        _it_80=Tonyu.iterator(_this.infoDir.listFiles(),1);
        while(_it_80.next()) {
          f=_it_80[0];
          
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
        var _it_85;
        var sef;
        var max;
        var maxf;
        var f;
        var _it_86;
        var _it_87;
        function resolve(p) {
          
          //$LASTPOS=12002416;//jseditor.JSEProject:2416
          p=p.replace(/\$\{projects:([^\}]+)\}\/?/g,(function anonymous_2459(_,prjn) {
            var pr;
            
            //$LASTPOS=12002491;//jseditor.JSEProject:2491
            pr = _this.findProject(prjn);
            
            //$LASTPOS=12002529;//jseditor.JSEProject:2529
            if (! pr) {
              throw new Error("Project "+prjn+" not found");
              
            }
            return FS.PathUtil.directorify(pr.path);
          }));
          //$LASTPOS=12002658;//jseditor.JSEProject:2658
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
        _it_85=Tonyu.iterator(_this.sync,1);
        while(_it_85.next()) {
          se=_it_85[0];
          
          //$LASTPOS=12001807;//jseditor.JSEProject:1807
          sef = se.map(resolve);
          
          //$LASTPOS=12001840;//jseditor.JSEProject:1840
          max = 0;
          
          //$LASTPOS=12001864;//jseditor.JSEProject:1864
          _it_86=Tonyu.iterator(sef,1);
          while(_it_86.next()) {
            f=_it_86[0];
            
            //$LASTPOS=12001897;//jseditor.JSEProject:1897
            if (! f.exists()) {
              continue;
              
            }
            //$LASTPOS=12001936;//jseditor.JSEProject:1936
            if (f.lastUpdate()>max) {
              //$LASTPOS=12001978;//jseditor.JSEProject:1978
              max=f.lastUpdate();
              //$LASTPOS=12002014;//jseditor.JSEProject:2014
              maxf=f;
              
            }
            
          }
          //$LASTPOS=12002054;//jseditor.JSEProject:2054
          if (maxf) {
            //$LASTPOS=12002078;//jseditor.JSEProject:2078
            _it_87=Tonyu.iterator(sef,1);
            while(_it_87.next()) {
              f=_it_87[0];
              
              //$LASTPOS=12002115;//jseditor.JSEProject:2115
              if (! f.exists()) {
                continue;
                
              }
              //$LASTPOS=12002158;//jseditor.JSEProject:2158
              if (f.lastUpdate()<=max-1000) {
                //$LASTPOS=12002210;//jseditor.JSEProject:2210
                _this.print("cp ",maxf,max,new Date(max),f,f.lastUpdate(),new Date(f.lastUpdate()));
                //$LASTPOS=12002315;//jseditor.JSEProject:2315
                f.copyFrom(maxf,{a: true});
                
              }
              
            }
            
          }
          
        }
        
      },
      fiber$doSync :function _trc_JSEProject_f_doSync(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var se;
        var _it_85;
        var sef;
        var max;
        var maxf;
        var f;
        var _it_86;
        var _it_87;
        function resolve(p) {
          
          //$LASTPOS=12002416;//jseditor.JSEProject:2416
          p=p.replace(/\$\{projects:([^\}]+)\}\/?/g,(function anonymous_2459(_,prjn) {
            var pr;
            
            //$LASTPOS=12002491;//jseditor.JSEProject:2491
            pr = _this.findProject(prjn);
            
            //$LASTPOS=12002529;//jseditor.JSEProject:2529
            if (! pr) {
              throw new Error("Project "+prjn+" not found");
              
            }
            return FS.PathUtil.directorify(pr.path);
          }));
          //$LASTPOS=12002658;//jseditor.JSEProject:2658
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
              _it_85=Tonyu.iterator(_this.sync,1);
              while(_it_85.next()) {
                se=_it_85[0];
                
                //$LASTPOS=12001807;//jseditor.JSEProject:1807
                sef = se.map(resolve);
                
                //$LASTPOS=12001840;//jseditor.JSEProject:1840
                max = 0;
                
                //$LASTPOS=12001864;//jseditor.JSEProject:1864
                _it_86=Tonyu.iterator(sef,1);
                while(_it_86.next()) {
                  f=_it_86[0];
                  
                  //$LASTPOS=12001897;//jseditor.JSEProject:1897
                  if (! f.exists()) {
                    continue;
                    
                  }
                  //$LASTPOS=12001936;//jseditor.JSEProject:1936
                  if (f.lastUpdate()>max) {
                    //$LASTPOS=12001978;//jseditor.JSEProject:1978
                    max=f.lastUpdate();
                    //$LASTPOS=12002014;//jseditor.JSEProject:2014
                    maxf=f;
                    
                  }
                  
                }
                //$LASTPOS=12002054;//jseditor.JSEProject:2054
                if (maxf) {
                  //$LASTPOS=12002078;//jseditor.JSEProject:2078
                  _it_87=Tonyu.iterator(sef,1);
                  while(_it_87.next()) {
                    f=_it_87[0];
                    
                    //$LASTPOS=12002115;//jseditor.JSEProject:2115
                    if (! f.exists()) {
                      continue;
                      
                    }
                    //$LASTPOS=12002158;//jseditor.JSEProject:2158
                    if (f.lastUpdate()<=max-1000) {
                      //$LASTPOS=12002210;//jseditor.JSEProject:2210
                      _this.print("cp ",maxf,max,new Date(max),f,f.lastUpdate(),new Date(f.lastUpdate()));
                      //$LASTPOS=12002315;//jseditor.JSEProject:2315
                      f.copyFrom(maxf,{a: true});
                      
                    }
                    
                  }
                  
                }
                
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