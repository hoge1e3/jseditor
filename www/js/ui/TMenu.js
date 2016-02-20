define(function (require) {
  var Tonyu=require('Tonyu');
  var UI=require('UI');
  var KeyEventChecker=require('KeyEventChecker');
  return Tonyu.klass.define({
    fullName: 'jseditor.TMenu',
    shortName: 'TMenu',
    namespace: 'jseditor',
    includes: [],
    methods: {
      main :function _trc_TMenu_main() {
        "use strict";
        var _this=this;
        
      },
      fiber$main :function _trc_TMenu_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        _thread.retVal=_this;return;
      },
      runMenuItem :function _trc_TMenu_runMenuItem(item) {
        "use strict";
        var _this=this;
        var a;
        var r;
        var obj;
        
        //$LASTPOS=2000055;//jseditor.TMenu:55
        if (! item.action) {
          return _this;
        }
        //$LASTPOS=2000086;//jseditor.TMenu:86
        if (typeof  item.action=="string") {
          //$LASTPOS=2000131;//jseditor.TMenu:131
          a = item.action;
          
          //$LASTPOS=2000159;//jseditor.TMenu:159
          r = /(\$[\$_A-Za-z0-9]*)\.([\$_A-Za-z0-9]+)/.exec(a);
          
          //$LASTPOS=2000224;//jseditor.TMenu:224
          if (r) {
            //$LASTPOS=2000246;//jseditor.TMenu:246
            obj = Tonyu.globals[r[1]];
            
            //$LASTPOS=2000288;//jseditor.TMenu:288
            if (! obj) {
              throw new Error(r[1]+" not found");
              
            }
            //$LASTPOS=2000347;//jseditor.TMenu:347
            if (obj.parallel) {
              //$LASTPOS=2000365;//jseditor.TMenu:365
              obj.parallel(r[2]);
            } else {
              //$LASTPOS=2000403;//jseditor.TMenu:403
              obj[r[2]]();
            }
            
          } else {
            //$LASTPOS=2000447;//jseditor.TMenu:447
            _this.parallel(a);
            
          }
          
        } else {
          //$LASTPOS=2000486;//jseditor.TMenu:486
          if (typeof  item.action=="function") {
            return item.action();
            
          }
        }
      },
      fiber$runMenuItem :function _trc_TMenu_f_runMenuItem(_thread,item) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var a;
        var r;
        var obj;
        
        //$LASTPOS=2000055;//jseditor.TMenu:55
        if (! item.action) {
          _thread.retVal=_this;return;
          
        }
        //$LASTPOS=2000086;//jseditor.TMenu:86
        if (typeof  item.action=="string") {
          //$LASTPOS=2000131;//jseditor.TMenu:131
          a = item.action;
          
          //$LASTPOS=2000159;//jseditor.TMenu:159
          r = /(\$[\$_A-Za-z0-9]*)\.([\$_A-Za-z0-9]+)/.exec(a);
          
          //$LASTPOS=2000224;//jseditor.TMenu:224
          if (r) {
            //$LASTPOS=2000246;//jseditor.TMenu:246
            obj = Tonyu.globals[r[1]];
            
            //$LASTPOS=2000288;//jseditor.TMenu:288
            if (! obj) {
              throw new Error(r[1]+" not found");
              
            }
            //$LASTPOS=2000347;//jseditor.TMenu:347
            if (obj.parallel) {
              //$LASTPOS=2000365;//jseditor.TMenu:365
              obj.parallel(r[2]);
            } else {
              //$LASTPOS=2000403;//jseditor.TMenu:403
              obj[r[2]]();
            }
            
          } else {
            //$LASTPOS=2000447;//jseditor.TMenu:447
            _this.parallel(a);
            
          }
          
        } else {
          //$LASTPOS=2000486;//jseditor.TMenu:486
          if (typeof  item.action=="function") {
            _thread.retVal=item.action();return;
            
            
          }
        }
        
        _thread.retVal=_this;return;
      },
      make :function _trc_TMenu_make(title,hier) {
        "use strict";
        var _this=this;
        var ul1;
        var mainMenuItem;
        var _it_8;
        var li;
        var ul2;
        var menu;
        
        //$LASTPOS=2000693;//jseditor.TMenu:693
        ul1 = UI("ul",{"class": "nav navbar-nav"});
        
        //$LASTPOS=2000744;//jseditor.TMenu:744
        _it_8=Tonyu.iterator(hier,1);
        while(_it_8.next()) {
          mainMenuItem=_it_8[0];
          
          //$LASTPOS=2000786;//jseditor.TMenu:786
          li = UI("li",["a",{href: (mainMenuItem.href||"#"),id: mainMenuItem.id,"class": (mainMenuItem.sub?"dropdown-toggle":null),"data-toggle": (mainMenuItem.sub?"dropdown":null)},mainMenuItem.label]);
          
          //$LASTPOS=2001098;//jseditor.TMenu:1098
          ul1.append(li);
          //$LASTPOS=2001123;//jseditor.TMenu:1123
          if (mainMenuItem.sub) {
            //$LASTPOS=2001160;//jseditor.TMenu:1160
            ul2 = UI("ul",{"class": "dropdown-menu"});
            
            //$LASTPOS=2001217;//jseditor.TMenu:1217
            mainMenuItem.sub.forEach((function anonymous_1242(subMenuItem) {
              
              //$LASTPOS=2001276;//jseditor.TMenu:1276
              if (subMenuItem.key) {
                //$LASTPOS=2001320;//jseditor.TMenu:1320
                KeyEventChecker.down(document,subMenuItem.key,(function anonymous_1367(e) {
                  
                  //$LASTPOS=2001399;//jseditor.TMenu:1399
                  _this.runMenuItem(subMenuItem);
                  //$LASTPOS=2001447;//jseditor.TMenu:1447
                  e.stopPropagation();
                  //$LASTPOS=2001490;//jseditor.TMenu:1490
                  e.preventDefault();
                  return false;
                }));
                
              }
              //$LASTPOS=2001606;//jseditor.TMenu:1606
              ul2.append(UI("li",["a",{id: subMenuItem.id||_this.subMeniItem.action,href: subMenuItem.href||"#",on: {click: (function anonymous_1842() {
                
                //$LASTPOS=2001845;//jseditor.TMenu:1845
                _this.runMenuItem(subMenuItem);
              })}},subMenuItem.label]));
            }));
            //$LASTPOS=2001993;//jseditor.TMenu:1993
            li.append(ul2);
            
          }
          
        }
        //$LASTPOS=2002032;//jseditor.TMenu:2032
        menu = UI("div",{"class": "collapse navbar-collapse"},ul1);
        
        //$LASTPOS=2002098;//jseditor.TMenu:2098
        $("body").append(UI("div",{"class": "navbar navbar-inverse navbar-fixed-top",id: "navBar"},["div",{"class": "container"},["div",{"class": "navbar-header"},["button",{type: "button","class": "navbar-toggle","data-toggle": "collapse","data-target": ".navbar-collapse"},["span",{"class": "icon-bar"}],["span",{"class": "icon-bar"}],["span",{"class": "icon-bar"}]],["a",{"class": "navbar-brand",href: "#"},title]],menu]));
      },
      fiber$make :function _trc_TMenu_f_make(_thread,title,hier) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var ul1;
        var mainMenuItem;
        var _it_8;
        var li;
        var ul2;
        var menu;
        
        //$LASTPOS=2000693;//jseditor.TMenu:693
        ul1 = UI("ul",{"class": "nav navbar-nav"});
        
        
        _thread.enter(function _trc_TMenu_ent_make(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=2000744;//jseditor.TMenu:744
              _it_8=Tonyu.iterator(hier,1);
            case 1:
              if (!(_it_8.next())) { __pc=3; break; }
              mainMenuItem=_it_8[0];
              
              //$LASTPOS=2000786;//jseditor.TMenu:786
              li = UI("li",["a",{href: (mainMenuItem.href||"#"),id: mainMenuItem.id,"class": (mainMenuItem.sub?"dropdown-toggle":null),"data-toggle": (mainMenuItem.sub?"dropdown":null)},mainMenuItem.label]);
              
              //$LASTPOS=2001098;//jseditor.TMenu:1098
              ul1.append(li);
              //$LASTPOS=2001123;//jseditor.TMenu:1123
              if (!(mainMenuItem.sub)) { __pc=2; break; }
              //$LASTPOS=2001160;//jseditor.TMenu:1160
              ul2 = UI("ul",{"class": "dropdown-menu"});
              
              //$LASTPOS=2001217;//jseditor.TMenu:1217
              mainMenuItem.sub.forEach((function anonymous_1242(subMenuItem) {
                
                //$LASTPOS=2001276;//jseditor.TMenu:1276
                if (subMenuItem.key) {
                  //$LASTPOS=2001320;//jseditor.TMenu:1320
                  KeyEventChecker.down(document,subMenuItem.key,(function anonymous_1367(e) {
                    
                    //$LASTPOS=2001399;//jseditor.TMenu:1399
                    _this.runMenuItem(subMenuItem);
                    //$LASTPOS=2001447;//jseditor.TMenu:1447
                    e.stopPropagation();
                    //$LASTPOS=2001490;//jseditor.TMenu:1490
                    e.preventDefault();
                    return false;
                  }));
                  
                }
                //$LASTPOS=2001606;//jseditor.TMenu:1606
                ul2.append(UI("li",["a",{id: subMenuItem.id||_this.subMeniItem.action,href: subMenuItem.href||"#",on: {click: (function anonymous_1842() {
                  
                  //$LASTPOS=2001845;//jseditor.TMenu:1845
                  _this.runMenuItem(subMenuItem);
                })}},subMenuItem.label]));
              }));
              //$LASTPOS=2001993;//jseditor.TMenu:1993
              li.append(ul2);
            case 2:
              
              __pc=1;break;
            case 3:
              
              //$LASTPOS=2002032;//jseditor.TMenu:2032
              menu = UI("div",{"class": "collapse navbar-collapse"},ul1);
              
              //$LASTPOS=2002098;//jseditor.TMenu:2098
              $("body").append(UI("div",{"class": "navbar navbar-inverse navbar-fixed-top",id: "navBar"},["div",{"class": "container"},["div",{"class": "navbar-header"},["button",{type: "button","class": "navbar-toggle","data-toggle": "collapse","data-target": ".navbar-collapse"},["span",{"class": "icon-bar"}],["span",{"class": "icon-bar"}],["span",{"class": "icon-bar"}]],["a",{"class": "navbar-brand",href: "#"},title]],menu]));
              _thread.exit(_this);return;
            }
          }
        });
      },
      __dummy: false
    },
    decls: {"methods":{"main":{"nowait":false},"runMenuItem":{"nowait":false},"make":{"nowait":false}}}
  });
});