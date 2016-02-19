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
            Tonyu.globals[r[1]].parallel(r[2]);
            
          } else {
            //$LASTPOS=2000313;//jseditor.TMenu:313
            _this.parallel(a);
            
          }
          
        } else {
          //$LASTPOS=2000352;//jseditor.TMenu:352
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
            Tonyu.globals[r[1]].parallel(r[2]);
            
          } else {
            //$LASTPOS=2000313;//jseditor.TMenu:313
            _this.parallel(a);
            
          }
          
        } else {
          //$LASTPOS=2000352;//jseditor.TMenu:352
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
        var _it_7;
        var li;
        var ul2;
        var menu;
        
        //$LASTPOS=2000559;//jseditor.TMenu:559
        ul1 = UI("ul",{"class": "nav navbar-nav"});
        
        //$LASTPOS=2000610;//jseditor.TMenu:610
        _it_7=Tonyu.iterator(hier,1);
        while(_it_7.next()) {
          mainMenuItem=_it_7[0];
          
          //$LASTPOS=2000652;//jseditor.TMenu:652
          li = UI("li",["a",{href: (mainMenuItem.href||"#"),id: mainMenuItem.id,"class": (mainMenuItem.sub?"dropdown-toggle":null),"data-toggle": (mainMenuItem.sub?"dropdown":null)},mainMenuItem.label]);
          
          //$LASTPOS=2000964;//jseditor.TMenu:964
          ul1.append(li);
          //$LASTPOS=2000989;//jseditor.TMenu:989
          if (mainMenuItem.sub) {
            //$LASTPOS=2001026;//jseditor.TMenu:1026
            ul2 = UI("ul",{"class": "dropdown-menu"});
            
            //$LASTPOS=2001083;//jseditor.TMenu:1083
            mainMenuItem.sub.forEach((function anonymous_1108(subMenuItem) {
              
              //$LASTPOS=2001142;//jseditor.TMenu:1142
              if (subMenuItem.key) {
                //$LASTPOS=2001186;//jseditor.TMenu:1186
                KeyEventChecker.down(document,subMenuItem.key,(function anonymous_1233(e) {
                  
                  //$LASTPOS=2001265;//jseditor.TMenu:1265
                  _this.runMenuItem(subMenuItem);
                  //$LASTPOS=2001313;//jseditor.TMenu:1313
                  e.stopPropagation();
                  //$LASTPOS=2001356;//jseditor.TMenu:1356
                  e.preventDefault();
                  return false;
                }));
                
              }
              //$LASTPOS=2001472;//jseditor.TMenu:1472
              ul2.append(UI("li",["a",{id: subMenuItem.id||_this.subMeniItem.action,href: subMenuItem.href||"#",on: {click: (function anonymous_1708() {
                
                //$LASTPOS=2001711;//jseditor.TMenu:1711
                _this.runMenuItem(subMenuItem);
              })}},subMenuItem.label]));
            }));
            //$LASTPOS=2001859;//jseditor.TMenu:1859
            li.append(ul2);
            
          }
          
        }
        //$LASTPOS=2001898;//jseditor.TMenu:1898
        menu = UI("div",{"class": "collapse navbar-collapse"},ul1);
        
        //$LASTPOS=2001964;//jseditor.TMenu:1964
        $("body").append(UI("div",{"class": "navbar navbar-inverse navbar-fixed-top",id: "navBar"},["div",{"class": "container"},["div",{"class": "navbar-header"},["button",{type: "button","class": "navbar-toggle","data-toggle": "collapse","data-target": ".navbar-collapse"},["span",{"class": "icon-bar"}],["span",{"class": "icon-bar"}],["span",{"class": "icon-bar"}]],["a",{"class": "navbar-brand",href: "#"},title]],menu]));
      },
      fiber$make :function _trc_TMenu_f_make(_thread,title,hier) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var ul1;
        var mainMenuItem;
        var _it_7;
        var li;
        var ul2;
        var menu;
        
        //$LASTPOS=2000559;//jseditor.TMenu:559
        ul1 = UI("ul",{"class": "nav navbar-nav"});
        
        
        _thread.enter(function _trc_TMenu_ent_make(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=2000610;//jseditor.TMenu:610
              _it_7=Tonyu.iterator(hier,1);
            case 1:
              if (!(_it_7.next())) { __pc=3; break; }
              mainMenuItem=_it_7[0];
              
              //$LASTPOS=2000652;//jseditor.TMenu:652
              li = UI("li",["a",{href: (mainMenuItem.href||"#"),id: mainMenuItem.id,"class": (mainMenuItem.sub?"dropdown-toggle":null),"data-toggle": (mainMenuItem.sub?"dropdown":null)},mainMenuItem.label]);
              
              //$LASTPOS=2000964;//jseditor.TMenu:964
              ul1.append(li);
              //$LASTPOS=2000989;//jseditor.TMenu:989
              if (!(mainMenuItem.sub)) { __pc=2; break; }
              //$LASTPOS=2001026;//jseditor.TMenu:1026
              ul2 = UI("ul",{"class": "dropdown-menu"});
              
              //$LASTPOS=2001083;//jseditor.TMenu:1083
              mainMenuItem.sub.forEach((function anonymous_1108(subMenuItem) {
                
                //$LASTPOS=2001142;//jseditor.TMenu:1142
                if (subMenuItem.key) {
                  //$LASTPOS=2001186;//jseditor.TMenu:1186
                  KeyEventChecker.down(document,subMenuItem.key,(function anonymous_1233(e) {
                    
                    //$LASTPOS=2001265;//jseditor.TMenu:1265
                    _this.runMenuItem(subMenuItem);
                    //$LASTPOS=2001313;//jseditor.TMenu:1313
                    e.stopPropagation();
                    //$LASTPOS=2001356;//jseditor.TMenu:1356
                    e.preventDefault();
                    return false;
                  }));
                  
                }
                //$LASTPOS=2001472;//jseditor.TMenu:1472
                ul2.append(UI("li",["a",{id: subMenuItem.id||_this.subMeniItem.action,href: subMenuItem.href||"#",on: {click: (function anonymous_1708() {
                  
                  //$LASTPOS=2001711;//jseditor.TMenu:1711
                  _this.runMenuItem(subMenuItem);
                })}},subMenuItem.label]));
              }));
              //$LASTPOS=2001859;//jseditor.TMenu:1859
              li.append(ul2);
            case 2:
              
              __pc=1;break;
            case 3:
              
              //$LASTPOS=2001898;//jseditor.TMenu:1898
              menu = UI("div",{"class": "collapse navbar-collapse"},ul1);
              
              //$LASTPOS=2001964;//jseditor.TMenu:1964
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