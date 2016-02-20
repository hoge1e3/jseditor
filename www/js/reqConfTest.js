var reqConf={
    "shim": {
        "difflib": {
            "exports": "difflib"
        },
        "diffview": {
            "exports": "diffview"
        },
        "Util": {
            "exports": "Util"
        },
        "TextUtil": {
            "exports": "TextUtil"
        },
        "TError": {
            "exports": "TError"
        },
        "ace": {
            "exports": "ace"
        },
        "JSZip": {
            "exports": "JSZip"
        },
        "Encoding": {
            "exports": "Encoding"
        },
        "Base64": {
            "exports": "Base64"
        },
        "FileSaver": {
            "exports": "saveAs"
        }
    },
    "paths": {
        "TT": "lang/tonyu2_token",
        "Encoding": "lib/encoding.min",
        "runtime": "runtime/runtime",
        "difflib": "lib/difflib",
        "diffview": "lib/diffview",
        "T2MediaLib": "lib/T2MediaLib",
        "KeyEventChecker": "lib/KeyEventChecker",
        "UI": "ui/UI",
        "UIDiag": "ui/UIDiag",
        "reqConf": "reqConf",
        "FileMenu": "editor/FileMenu",
        "disp": "lib/disp",
        "Util": "lib/util",
        "Profiler": "lib/profiler",
        "TextUtil": "lib/TextUtil",
        "ObjectMatcher": "lang/ObjectMatcher",
        "context": "lang/context",
        "IndentBuffer": "lang/IndentBuffer",
        "ExpressionParser": "lang/ExpressionParser2",
        "Grammar": "lang/Grammar",
        "Parser": "lang/parser",
        "ProjectCompiler": "lang/projectCompiler",
        "TonyuLang": "lang/parse_tonyu2",
        "Visitor": "lang/Visitor",
        "XMLBuffer": "lang/XMLBuffer",
        "Tonyu": "runtime/TonyuLib",
        "Tonyu.Thread": "runtime/TonyuThread",
        "Tonyu.Iterator": "runtime/TonyuIterator",
        "Tonyu.Compiler": "lang/compiler",
        "Tonyu.Compiler.JSGenerator": "lang/JSGenerator",
        "Tonyu.Compiler.Semantics": "lang/Semantics",
        "fixIndent": "lang/indent",
        "Tonyu.TraceTbl": "runtime/TraceTbl",
        "FS": "editor/FS",
        "TError": "runtime/TError",
        "FileList": "editor/FileList",
        "ace": "lib/ace-noconflict/ace",
        "JSONCol": "lib/JSONCol",
        "StackTrace": "runtime/StackTrace",
        "typeCheck": "lang/typeCheck",
        "JSZip": "lib/jszip.min",
        "FileSaver": "lib/FileSaver.min",
        "exceptionCatcher": "lib/exceptionCatcher",
        "assert": "fs2/assert",
        "DataURL": "fs2/DataURL",
        "extend": "fs2/extend",
        "FS2": "fs2/FS2",
        "RootFS": "fs2/RootFS",
        "LSFS": "fs2/LSFS",
        "MIMETypes": "fs2/MIMETypes",
        "NativeFS": "fs2/NativeFS",
        "PathUtil": "fs2/PathUtil",
        "SFile": "fs2/SFile",
        "Env": "fs2/Env",
        "compiledProject": "lang/compiledProject",
        "DeferredUtil": "lib/DeferredUtil",
        "extLink": "ui/extLink",
        "Content": "fs2/Content",
        "WebFS": "fs2/WebFS",
        "jquery.binarytransport": "lib/jquery.binarytransport",
        "Class": "lib/Class",
        "Columns": "ui/Columns",
        "Menu": "ui/Menu",
        "EditorSet": "editor/EditorSet",
        "Finder": "editor/Finder",
        "TonyuC": "editor/TonyuC",
        "JSONConf": "editor/JSONConf",
        "WaitMod": "base/WaitMod",
        "ShellMod": "base/ShellMod",
        "Base": "base/Base",
        "ReqConfBuilder": "build/ReqConfBuilder",
        "Bookmark": "editor/Bookmark",
        "MyForm": "ui/MyForm",
        "UIForm": "ui/UIForm",
        "TEdit": "editor/TEdit",
        "main": "editor/main",
        "rescueCompile": "editor/rescueCompile",
        "TMenu": "ui/TMenu",
        "JSEProject": "editor/JSEProject",
        "ProjectSel": "editor/ProjectSel",
        "TEditorSet": "editor/TEditorSet"
    },
    "baseUrl": "./js/"
};
if (typeof module!=="undefined") {
    module.exports=reqConf;
}
