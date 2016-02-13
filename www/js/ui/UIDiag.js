define(["UI"],function (UI) {
    var UIDiag={};
    UIDiag.confirm=function (mesg) {
        var di=UI("div",{title:"確認"},["div",mesg],
                ["button",{on:{click:sendF(true)}},"OK"],
                ["button",{on:{click:sendF(false)}},"キャンセル"]).dialog({width:"auto",close:sendF(false)});
        var d=$.Deferred();
        function sendF(r) {
            return function () { d.resolve(r); di.dialog("close"); di.remove(); };
        }
        return d.promise();
    };
    UIDiag.alert=function (mesg) {
        var di=UI("div",{title:"確認"},["div",mesg],
                ["button",{on:{click:sendF(true)}},"OK"]).dialog({width:"auto",close:sendF(false)});
        var d=$.Deferred();
        function sendF(r) {
            return function () { d.resolve(r); di.dialog("close"); di.remove(); };
        }
        return d.promise();
    };

    UIDiag.prompt=function (mesg,value) {
        var di=UI("div",{title:"入力"},["div",mesg],
                ["input",{on:{enterkey:ok},$var:"val", value:value}],["br"],
                ["button",{on:{click:ok}},"OK"],
                ["button",{on:{click:cancel}},"キャンセル"]).dialog({width:"auto",close:function (){
                    di.dialog("close");
                    d.resolve();
                }});
        var d=$.Deferred();
        function ok() {
            var r=di.$vars.val.val();
            d.resolve(r);
            di.dialog("close");
            di.remove();
        }
        function cancel() {
            di.dialog("close");
            di.remove();
            d.resolve();
        }
        return d.promise();

    };
    UIDiag.custom=function (mesg,options) {
        var di=UI("div",{title:options.title||""},
            mesg,
            (options.ok ? ["button",{on:{click:ok}},"OK"] : ""),
            (options.cancel ? ["button",{on:{click:cancel}},"キャンセル"]:"")
        );
        var res=(typeof options.onCancel!="function") && options.onCancel;
        di.dialog({
            width:options.width || "auto",
            close:function (){
                di.dialog("close");
                di.remove();
                d.resolve(res);
            }
        });
        var d=$.Deferred();
        function ok() {
            if (options.onOK) {
                res=options.onOK();
            }
            di.dialog("close");
        }
        function cancel() {
            if (typeof options.onCancel=="function") {
                res=options.onCancel();
            }
            di.dialog("close");
        }
        return d.promise();
    };
    if (typeof window!="undefined") window.UIDiag=UIDiag;
    return UIDiag;
});