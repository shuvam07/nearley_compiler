# nearley_compiler
Learning to build a Javascript parser for basic operations like if..else, while, do-while.

To use the nearley parser, you need to install nearley locally.<p>
<b>npm install --save nearley</b>

To use the nearley compiler, you need to additionally install nearley globally.<p>
<b>npm install -g nearley</b>

Now after installation

Go to any of the directory

run<p>
<b>nearleyc grammar.ne -o grammar.js </b> <p>
to generate the Js parser

followed by <p>
<b>node parse.js </b> <p>
to execute the result as fed to the parser in parse.js file. 
