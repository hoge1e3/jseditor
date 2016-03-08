define(function (require) {
    var UI=require("UI");
    var FileList=function (list,on) {
         this.list=list;
         this.on=on;
    };
    var p=FileList.prototype;
    p.open=function (d) {
        var t=this;
        this.lastSelected=d;
        if (!d.isDir()) {
            this.ls(d.up());
            return t.on.open(d);
        }
        this.ls(d);
    };
    p.ls=function (d) {
        var t=this;
        var list=t.list;
        list.empty();
        addItem(d.up(),"[UP]");
        this.curDir=d;
        return d.each(addItem);
        function addItem(n,cap) {
              var a=UI("a",{
	             href:"javascript:;", 
	             on:{
		             click:function () {
		                t.open(n);
		             }
	             }
	          }, (typeof cap=="string"? cap: n.name() ));
	          list.append(UI("div",a));
	    }
    };
    return FileList;
});
