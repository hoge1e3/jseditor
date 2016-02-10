define(function (require) {
    var JSONConf=function (f) {
        this.file=f;
    };
    p=JSONConf.prototype;
    p.load=function () {
        var t=this;
        var f=t.file;
        return $.when(f.exists()).then(function (e) {
            return e ? f.obj() : {};
        }).then(function (d) {
            t.data=d;
        });
    };
    p.save=function () {
        if (this.data) {
            return this.file.obj(this.data);
        }
    };
    return JSONConf;
});