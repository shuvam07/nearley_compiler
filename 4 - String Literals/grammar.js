// Generated automatically by nearley, version 2.19.5
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "input", "symbols": ["_", "value", "_"], "postprocess": (data) => [data[1]]},
    {"name": "value", "symbols": ["number"], "postprocess": id},
    {"name": "value", "symbols": ["boolean"], "postprocess": id},
    {"name": "value", "symbols": ["myNull"], "postprocess": id},
    {"name": "value", "symbols": ["string"], "postprocess": id},
    {"name": "value", "symbols": ["array"], "postprocess": id},
    {"name": "array", "symbols": [{"literal":"["}, "_", "array_items", "_", {"literal":"]"}], "postprocess": (data) => data[2]},
    {"name": "array", "symbols": [{"literal":"["}, "_", {"literal":"]"}], "postprocess": () => []},
    {"name": "array_items", "symbols": ["value"], "postprocess": (data) => [data[0]]},
    {"name": "array_items", "symbols": ["value", "_", {"literal":","}, "_", "array_items"], "postprocess": (data) => [data[0], ...data[4]]},
    {"name": "string", "symbols": [{"literal":"\""}, "characters", {"literal":"\""}], "postprocess": (data) => data[1]},
    {"name": "characters", "symbols": ["character"], "postprocess": id},
    {"name": "characters", "symbols": ["character", "characters"], "postprocess": (data) => data[0] + data[1]},
    {"name": "character", "symbols": [/[^\"\\]/], "postprocess": id},
    {"name": "character", "symbols": [{"literal":"\\"}, "escape"], "postprocess": (data) => data[1]},
    {"name": "escape", "symbols": [{"literal":"\""}], "postprocess": () => '"'},
    {"name": "escape", "symbols": [{"literal":"\\"}], "postprocess": () => "\\"},
    {"name": "escape", "symbols": [{"literal":"/"}], "postprocess": () => "/"},
    {"name": "escape", "symbols": [{"literal":"b"}], "postprocess": () => "\b"},
    {"name": "escape", "symbols": [{"literal":"f"}], "postprocess": () => "\f"},
    {"name": "escape", "symbols": [{"literal":"n"}], "postprocess": () => "\n"},
    {"name": "escape", "symbols": [{"literal":"r"}], "postprocess": () => "\r"},
    {"name": "escape", "symbols": [{"literal":"t"}], "postprocess": () => "\t"},
    {"name": "escape", "symbols": [{"literal":"u"}, "hex", "hex", "hex", "hex"], "postprocess":  
        (data) => {
        		const code = ((((data[1]*16)+data[2])*16)+data[3])*16+data[4]
        		return String.fromCharCode(code)
        }  
        			},
    {"name": "hex", "symbols": ["digit"], "postprocess": (data) => Number(data[0])},
    {"name": "hex", "symbols": [/[a-fA-F]/], "postprocess":  (data) => {
        switch(data[0].toLowerCase()){
        	case "a": return 10;
        	case "b": return 11;
        	case "c": return 12;
        	case "d": return 13;
        	case "e": return 14;
        	case "f": return 15;
        }
        }
        		},
    {"name": "myNull$string$1", "symbols": [{"literal":"n"}, {"literal":"u"}, {"literal":"l"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "myNull", "symbols": ["myNull$string$1"], "postprocess": () => null},
    {"name": "boolean$string$1", "symbols": [{"literal":"t"}, {"literal":"r"}, {"literal":"u"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "boolean", "symbols": ["boolean$string$1"], "postprocess": () => true},
    {"name": "boolean$string$2", "symbols": [{"literal":"f"}, {"literal":"a"}, {"literal":"l"}, {"literal":"s"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "boolean", "symbols": ["boolean$string$2"], "postprocess": () => false},
    {"name": "number", "symbols": ["digits"], "postprocess": (data) => Number(data.join(""))},
    {"name": "number", "symbols": ["digits", {"literal":"."}, "digits"], "postprocess": (data) => Number(data[0] + "." + data[2])},
    {"name": "digits", "symbols": ["digit"], "postprocess": id},
    {"name": "digits", "symbols": ["digit", "digits"], "postprocess": (data) => data.join("")},
    {"name": "digit", "symbols": [/[0-9]/], "postprocess": id},
    {"name": "_$ebnf$1", "symbols": []},
    {"name": "_$ebnf$1", "symbols": ["_$ebnf$1", /[ \t]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "_", "symbols": ["_$ebnf$1"]}
]
  , ParserStart: "input"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
