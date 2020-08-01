// Generated automatically by nearley, version 2.19.5
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "input", "symbols": ["value"], "postprocess": id},
    {"name": "value", "symbols": ["number"], "postprocess": id},
    {"name": "value", "symbols": ["boolean"], "postprocess": id},
    {"name": "value", "symbols": ["myNull"], "postprocess": id},
    {"name": "value", "symbols": ["string"], "postprocess": id},
    {"name": "value", "symbols": ["array"], "postprocess": id},
    {"name": "array", "symbols": [{"literal":"["}, "array_items", {"literal":"]"}], "postprocess": (data) => data[1]},
    {"name": "array", "symbols": [{"literal":"["}, {"literal":"]"}], "postprocess": () => []},
    {"name": "array_items", "symbols": ["value"], "postprocess": (data) => [data[0]]},
    {"name": "array_items", "symbols": ["value", {"literal":","}, "array_items"], "postprocess": (data) => [data[0], ...data[2]]},
    {"name": "string", "symbols": [{"literal":"\""}, "characters", {"literal":"\""}]},
    {"name": "characters", "symbols": ["character"]},
    {"name": "characters", "symbols": ["character", "characters"], "postprocess": (data) => data[0] + data[2]},
    {"name": "character", "symbols": [/[^\"]/], "postprocess": id},
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
    {"name": "digit", "symbols": [/[0-9]/], "postprocess": id}
]
  , ParserStart: "input"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
