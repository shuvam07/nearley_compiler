input -> additive {% id %}

additive -> multiplicative _ [+-] _ additive 
			{%
				(data) => {
					switch(data[2]){
						case '+': return data[0] + data[4];
						case '-': return data[0] - data[4];
					}
				}
			%}
			| multiplicative {% id %}

multiplicative -> unary_expression _ [*/] _ multiplicative
				  {%
					(data) => {
						switch(data[2]){
							case '*': return data[0] * data[4];
							case '/': return data[0] / data[4];
						}
					}
				%}
				| unary_expression {% id %}

unary_expression -> number {% id %}
				 | "(" _ additive _ ")" 
				   {%
				   	(data) => {
				   		return data[2];
				   		}
				   %}
				 | function {% id %}


function -> builtin_function "(" _ argument_list _ ")" 
			{%
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
			%}

argument_list -> additive _  "," _ argument_list
				{%
					(data) => [data[0], ...data[4]]
				%}
				| additive {% (data) => [data[0]] %}

builtin_function -> 
			"sqr"   {% id %}
		 |	"sqrt"  {% id %}
		 |	"sin"	{% id %}
		 |	"cos"	{% id %}
		 |	"abs"	{% id %}
		 |  "pow"	{% id %}


number -> digits {% (data) => Number(data[0]) %}
		| digits "." digits {% (data) => Number(data[0] + "." + data[2]) %}

digits -> digit {% id %}
		 | digit digits	{% (data) => data.join("") %}

digit -> [0-9] {% id %}

_ -> [ \t]:*