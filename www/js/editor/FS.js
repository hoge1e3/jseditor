define(function (require, exports, module) {
   var RootFS=require("RootFS");
   var NFS=require("NativeFS");
   var SFile=require("SFile");
   var rfs=new RootFS(new NFS);
   exports.get=function (path) {
       return new SFile(rfs, path);
   };
});