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
        
        //$LASTPOS=2000026;//jseditor.TMenu:26
        if (! item.action) {
          return _this;
        }
        //$LASTPOS=2000057;//jseditor.TMenu:57
        if (typeof  item.action=="string") {
          //$LASTPOS=2000102;//jseditor.TMenu:102
          a = item.action;
          
          //$LASTPOS=2000130;//jseditor.TMenu:130
          r = /(\$[\$_A-Za-z0-9]*)\.([\$_A-Za-z0-9]+)/.exec(a);
          
          //$LASTPOS=2000195;//jseditor.TMenu:195
          if (r) {
            //$LASTPOS=2000217;//jseditor.TMenu:217
            Tonyu.globals(r[1]).parallel(r[2]);
            
          } else {
            //$LASTPOS=2000284;//jseditor.TMenu:284
            _this.parallel(a);
            
          }
          
        } else {
          //$LASTPOS=2000323;//jseditor.TMenu:323
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
        
        //$LASTPOS=2000026;//jseditor.TMenu:26
        if (! item.action) {
          _thread.retVal=_this;return;
          
        }
        //$LASTPOS=2000057;//jseditor.TMenu:57
        if (typeof  item.action=="string") {
          //$LASTPOS=2000102;//jseditor.TMenu:102
          a = item.action;
          
          //$LASTPOS=2000130;//jseditor.TMenu:130
          r = /(\$[\$_A-Za-z0-9]*)\.([\$_A-Za-z0-9]+)/.exec(a);
          
          //$LASTPOS=2000195;//jseditor.TMenu:195
          if (r) {
            //$LASTPOS=2000217;//jseditor.TMenu:217
            Tonyu.globals(r[1]).parallel(r[2]);
            
          } else {
            //$LASTPOS=2000284;//jseditor.TMenu:284
            _this.parallel(a);
            
          }
          
        } else {
          //$LASTPOS=2000323;//jseditor.TMenu:323
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
        var subMenuItem;
        var _it_8;
        var menu;
        
        //$LASTPOS=2000530;//jseditor.TMenu:530
        ul1 = UI("ul",{"class": "nav navbar-nav"});
        
        //$LASTPOS=2000581;//jseditor.TMenu:581
        _it_7=Tonyu.iterator(hier,1);
        while(_it_7.next()) {
          mainMenuItem=_it_7[0];
          
          //$LASTPOS=2000623;//jseditor.TMenu:623
          li = UI("li",["a",{href: (mainMenuItem.href||"#"),id: mainMenuItem.id,"class": (mainMenuItem.sub?"dropdown-toggle":null),"data-toggle": (mainMenuItem.sub?"dropdown":null)},mainMenuItem.label]);
          
          //$LASTPOS=2000935;//jseditor.TMenu:935
          ul1.append(li);
          //$LASTPOS=2000960;//jseditor.TMenu:960
          if (mainMenuItem.sub) {
            //$LASTPOS=2000997;//jseditor.TMenu:997
            ul2 = UI("ul",{"class": "dropdown-menu"});
            
            //$LASTPOS=2001054;//jseditor.TMenu:1054
            _it_8=Tonyu.iterator(mainMenuItem.sub,1);
            while(_it_8.next()) {
              subMenuItem=_it_8[0];
              
              //$LASTPOS=2001115;//jseditor.TMenu:1115
              if (subMenuItem.key) {
                //$LASTPOS=2001159;//jseditor.TMenu:1159
                KeyEventChecker.down(_this.document,subMenuItem.key,(function anonymous_1206(e) {
                  
                  //$LASTPOS=2001238;//jseditor.TMenu:1238
                  _this.runMenuItem(subMenuItem);
                  //$LASTPOS=2001286;//jseditor.TMenu:1286
                  e.stopPropagation();
                  //$LASTPOS=2001329;//jseditor.TMenu:1329
                  e.preventDefault();
                  return false;
                }));
                
              }
              //$LASTPOS=2001445;//jseditor.TMenu:1445
              ul2.append(UI("li",["a",{id: subMenuItem.id||_this.subMeniItem.action,href: subMenuItem.href||"#",on: {click: _this.runMenuItem(subMenuItem)}},subMenuItem.label]));
              
            }
            //$LASTPOS=2001825;//jseditor.TMenu:1825
            li.append(ul2);
            
          }
          
        }
        //$LASTPOS=2001864;//jseditor.TMenu:1864
        menu = UI("div",{"class": "collapse navbar-collapse"},ul1);
        
        //$LASTPOS=2001930;//jseditor.TMenu:1930
        Tonyu.globals.$("body").append(UI("div",{"class": "navbar navbar-inverse navbar-fixed-top",id: "navBar"},["div",{"class": "container"},["div",{"class": "navbar-header"},["button",{type: "button","class": "navbar-toggle","data-toggle": "collapse","data-target": ".navbar-collapse"},["span",{"class": "icon-bar"}],["span",{"class": "icon-bar"}],["span",{"class": "icon-bar"}]],["a",{"class": "navbar-brand",href: "#"},title]],menu]));
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
        var subMenuItem;
        var _it_8;
        var menu;
        
        //$LASTPOS=2000530;//jseditor.TMenu:530
        ul1 = UI("ul",{"class": "nav navbar-nav"});
        
        
        _thread.enter(function _trc_TMenu_ent_make(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              //$LASTPOS=2000581;//jseditor.TMenu:581
              _it_7=Tonyu.iterator(hier,1);
            case 1:
              if (!(_it_7.next())) { __pc=6; break; }
              mainMenuItem=_it_7[0];
              
              //$LASTPOS=2000623;//jseditor.TMenu:623
              li = UI("li",["a",{href: (mainMenuItem.href||"#"),id: mainMenuItem.id,"class": (mainMenuItem.sub?"dropdown-toggle":null),"data-toggle": (mainMenuItem.sub?"dropdown":null)},mainMenuItem.label]);
              
              //$LASTPOS=2000935;//jseditor.TMenu:935
              ul1.append(li);
              //$LASTPOS=2000960;//jseditor.TMenu:960
              if (!(mainMenuItem.sub)) { __pc=5; break; }
              //$LASTPOS=2000997;//jseditor.TMenu:997
              ul2 = UI("ul",{"class": "dropdown-menu"});
              
              //$LASTPOS=2001054;//jseditor.TMenu:1054
              _it_8=Tonyu.iterator(mainMenuItem.sub,1);
            case 2:
              if (!(_it_8.next())) { __pc=4; break; }
              subMenuItem=_it_8[0];
              
              //$LASTPOS=2001115;//jseditor.TMenu:1115
              if (!(subMenuItem.key)) { __pc=3; break; }
              //$LASTPOS=2001159;//jseditor.TMenu:1159
              KeyEventChecker.down(_this.document,subMenuItem.key,(function anonymous_1206(e) {
                
                //$LASTPOS=2001238;//jseditor.TMenu:1238
                _this.runMenuItem(subMenuItem);
                //$LASTPOS=2001286;//jseditor.TMenu:1286
                e.stopPropagation();
                //$LASTPOS=2001329;//jseditor.TMenu:1329
                e.preventDefault();
                return false;
              }));
            case 3:
              
              //$LASTPOS=2001445;//jseditor.TMenu:1445
              ul2.append(UI("li",["a",{id: subMenuItem.id||_this.subMeniItem.action,href: subMenuItem.href||"#",on: {click: _this.runMenuItem(subMenuItem)}},subMenuItem.label]));
              __pc=2;break;
            case 4:
              
              //$LASTPOS=2001825;//jseditor.TMenu:1825
              li.append(ul2);
            case 5:
              
              __pc=1;break;
            case 6:
              
              //$LASTPOS=2001864;//jseditor.TMenu:1864
              menu = UI("div",{"class": "collapse navbar-collapse"},ul1);
              
              //$LASTPOS=2001930;//jseditor.TMenu:1930
              Tonyu.globals.$("body").append(UI("div",{"class": "navbar navbar-inverse navbar-fixed-top",id: "navBar"},["div",{"class": "container"},["div",{"class": "navbar-header"},["button",{type: "button","class": "navbar-toggle","data-toggle": "collapse","data-target": ".navbar-collapse"},["span",{"class": "icon-bar"}],["span",{"class": "icon-bar"}],["span",{"class": "icon-bar"}]],["a",{"class": "navbar-brand",href: "#"},title]],menu]));
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