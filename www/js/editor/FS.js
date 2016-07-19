define(function (require, exports, module) {
   var RootFS=require("RootFS");
   var NFS=require("NativeFS");
   var SFile=require("SFile");
   var PathUtil=require("PathUtil");
   var rfs=new RootFS(new NFS);
   exports.PathUtil=PathUtil;
   exports.get=function (path) {
       return new SFile(rfs, path);
   };
   exports.resolve=function(path,base) {
       if (SFile.is(path)) return path; 
       if (!base) return exports.get(path);
       return exports.get(base).rel(path);
   };
});