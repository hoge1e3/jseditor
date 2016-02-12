define(function (require, exports, module) {
   var A=require("assert");
   //var ace=require("ace");test!
   var EditorSet=function (progs,fileLabel,options) {
      this.progs=A(progs,"progs");
      this.options=options||{};
      this.fileLabel=A(fileLabel,"fileLabel");
      this.editors={};
      setInterval(this.watch.bind(this),1000);
   };
   var types={js:"javascript"};
   var p=EditorSet.prototype;
   p.watch=function () {
        var inf=this.getCurrentEditorInfo();
        if (!inf) return;
        if (inf.lastTimeStamp<inf.file.lastUpdate()) {
            inf.editor.setValue(inf.file.text());
            inf.editor.clearSelection();
            inf.lastTimeStamp=inf.file.lastUpdate();
        }
        var unmod=inf.file.text()==inf.editor.getValue();
        this.fileLabel.text(inf.file.name()+(unmod?"":"*"));
   };
   p.open=function open(f) {
        if (f.isDir()) {
            return;
        }
        var options=this.options;
        var editors=this.editors;
        if (this.curDOM) this.curDOM.hide();
        var inf=editors[f.path()];
        if (!inf) {
            var editorDOM=$("<pre>").
                css("height", (this.options.height||300)+"px").
                text(f.text()).
                appendTo(progs);
            var editor=ace.edit(editorDOM[0]);
            if (typeof options.fontSize=="number") editor.setFontSize(options.fontSize);
            editor.setTheme("ace/theme/eclipse");
            var type=f.ext().replace(".","");
            type=types[type]||type;
            editor.getSession().setMode("ace/mode/"+type);
            editors[f.path()]=inf={file:f , editor: editor, dom:editorDOM};
            editor.setReadOnly(false);
            editor.clearSelection();
            editor.focus();
            this.curDOM=editorDOM;
        } else {
            inf.dom.show();
            inf.editor.focus();
            this.curDOM=inf.dom;
        }
        this.curFile=f;
        inf.lastTimeStamp=f.lastUpdate();
        this.fileLabel.text(f.name());
    };
    p.setFontSize=function (s) {
        this.options.fontSize=s;
        var inf=this.getCurrentEditorInfo();
        if (!inf) return;
        inf.editor.setFontSize(s);
    };
    p.getCurrentEditorInfo=function () {
        if (!this.curFile) return null;
        return this.editors[this.curFile.path()];
    };
    p.save=function () {
        var inf=this.getCurrentEditorInfo();
        if (!inf) return;
        var curFile=inf.file; //fl.curFile();
        var editor=inf.editor; //getCurrentEditor();
        if (curFile && editor && !curFile.isReadOnly()) {
            //if (curFile.ext()==EXT) fixEditorIndent(editor);
            var old=curFile.text();
            var nw=editor.getValue();
            if (old!=nw) {
                this.curFile.text(nw);
                inf.lastTimeStamp=this.curFile.lastUpdate();
            }
        }
        this.fileLabel.text(curFile.name());
    };
    p.close=function (f) {
        var inf=this.editors[f.path()];
        if (!inf) return;
        inf.prog.destroy();
        inf.dom.remove();
        delete this.editors[f.path()];
    };
	return EditorSet;
});