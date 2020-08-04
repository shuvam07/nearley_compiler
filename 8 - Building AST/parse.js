const nearley = require("nearley");
const grammar = require("./grammar.js");
const util = require("util")

// Create a Parser object from our grammar.
const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));

// Parse something!
// parser.feed('[1,2,true,false,null,"hello"]');

// parser.feed("sqrt(100) * (3 + 2)");
parser.feed("pow(2, 12)");


// parser.results is an array of possible parsings.
console.log(util.inspect(parser.results[0]), {depth: 10}); // [[[[ "foo" ],"\n" ]]]