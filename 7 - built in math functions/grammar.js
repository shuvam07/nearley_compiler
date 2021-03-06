// Generated automatically by nearley, version 2.19.5
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "input", "symbols": ["additive"], "postprocess": id},
    {"name": "additive", "symbols": ["multiplicative", "_", /[+-]/, "_", "additive"], "postprocess": 
        (data) => {
        	switch(data[2]){
        		case '+': return data[0] + data[4];
        		case '-': return data[0] - data[4];
        	}
        }
        			},
    {"name": "additive", "symbols": ["multiplicative"], "postprocess": id},
    {"name": "multiplicative", "symbols": ["unary_expression", "_", /[*/]/, "_", "multiplicative"], "postprocess": 
        (data) => {
        	switch(data[2]){
        		case '*': return data[0] * data[4];
        		case '/': return data[0] / data[4];
        	}
        }
        				},
    {"name": "multiplicative", "symbols": ["unary_expression"], "postprocess": id},
    {"name": "unary_expression", "symbols": ["number"], "postprocess": id},
    {"name": "unary_expression", "symbols": [{"literal":"("}, "_", "additive", "_", {"literal":")"}], "postprocess": 
        (data) => {
        	return data[2];
        	}
        				   },
    {"name": "unary_expression", "symbols": ["function"], "postprocess": id},
    {"name": "function", "symbols": ["builtin_function", {"literal":"("}, "_", "argument_list", "_", {"literal":")"}], "postprocess": 
        (data) => {
        	const fn = data[0]
        	const args = data[3]
        	const firstArg = args[0]
        	const secondArg = args[1]
        	switch(fn) {
        		case "sqr": return firstArg * firstArg;
        		case "sqrt": return Math.sqrt(firstArg);
        		case "sin": return Math.sin(firstArg);
        		case "cos": return Math.cos(firstArg);
        		case "abs": return Math.abs(firstArg);
        		case "pow" : return Math.pow(firstArg, secondArg)
        	}
        }
        			},
    {"name": "argument_list", "symbols": ["additive", "_", {"literal":","}, "_", "argument_list"], "postprocess": 
        (data) => [data[0], ...data[4]]
        				},
    {"name": "argument_list", "symbols": ["additive"], "postprocess": (data) => [data[0]]},
    {"name": "builtin_function$string$1", "symbols": [{"literal":"s"}, {"literal":"q"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "builtin_function", "symbols": ["builtin_function$string$1"], "postprocess": id},
    {"name": "builtin_function$string$2", "symbols": [{"literal":"s"}, {"literal":"q"}, {"literal":"r"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "builtin_function", "symbols": ["builtin_function$string$2"], "postprocess": id},
    {"name": "builtin_function$string$3", "symbols": [{"literal":"s"}, {"literal":"i"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "builtin_function", "symbols": ["builtin_function$string$3"], "postprocess": id},
    {"name": "builtin_function$string$4", "symbols": [{"literal":"c"}, {"literal":"o"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "builtin_function", "symbols": ["builtin_function$string$4"], "postprocess": id},
    {"name": "builtin_function$string$5", "symbols": [{"literal":"a"}, {"literal":"b"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "builtin_function", "symbols": ["builtin_function$string$5"], "postprocess": id},
    {"name": "builtin_function$string$6", "symbols": [{"literal":"p"}, {"literal":"o"}, {"literal":"w"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "builtin_function", "symbols": ["builtin_function$string$6"], "postprocess": id},
    {"name": "number", "symbols": ["digits"], "postprocess": (data) => Number(data[0])},
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
