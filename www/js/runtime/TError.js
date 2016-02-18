if (typeof define!=="function") {
   define=require("requirejs").define;
}
define(["Tonyu"],function (Tonyu) {
TError=function (mesg, src, pos) {
    var e;
    if (typeof src=="string") {
        e=new Error();
        return Tonyu.extend(e,{
            isTError:true,
            mesg:mesg,
            src:{
                name:function () { return src;},
                text:function () { return src;}
            },
            pos:pos,
            toString:function (){
                return this.mesg+" at "+src+":"+this.pos;
            },
            raise: function () {
                throw this;
            }
        });
    }
    var klass=null;
    if (src && src.src) {
        klass=src;
        src=klass.src.tonyu;
    }
    if (typeof src.name!=="function") {
        throw new Error("src="+src+" should be file object");
    }
    var rc;
    if ( (typeof (src.text))=="function") {
        var s=src.text();
        if (typeof s=="string") {
            rc=TError.calcRowCol(s,pos);
        }
    }
    e=new Error();
    console.log("NEWERROR",e);
    return Tonyu.extend(e,{
        isTError:true,
        mesg:mesg,src:src,pos:pos,row:rc.row, col:rc.col, klass:klass,
        toString:function (){
            console.log("NEWERROR:toStr",this);
            return this.mesg+" at "+this.src.name()+":"+this.row+":"+this.col;
        },
        raise: function () {
            throw this;
        }
    });
};
TError.calcRowCol=function (text,pos) {
    var lines=text.split("\n");
    var pp=0,row,col;
    for (row=0;row<lines.length ; row++) {
        pp+=lines[row].length+1;
        if (pp>pos) {
            col=pos-(pp-lines[row].length);
            break;
        }
    }
    return {row:row,col:col};
};
return TError;
});