# nearley_compiler
Learning to build a Javascript parser for basic operations like if..else, while, do-while

To use the nearley parser, you need to install nearley locally.
npm install --save nearley

To use the nearley compiler, you need to additionally install nearley globally.
npm install -g nearley

Now after installation

Go to any of the directory

run nearleyc grammar.ne -o grammar.js 
to generate the Js parser

followed by 
node parse.js  
to execute the result as fed to the parser in parse.js file. 
