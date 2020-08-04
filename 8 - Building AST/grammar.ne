input -> _ additive _ {%
				   	(data) => {
				   		return data[1];
				   		}
				   %}

additive -> multiplicative _ [+-] _ additive 
			{%
				(data) => {
					return {
						type : "operation",
						op: data[2],
						left: data[0],
						right: data[4]
					};
				}
			%}
			| multiplicative {% id %}

multiplicative -> unary_expression _ [*/] _ multiplicative
				  {%
					(data) => {
						return {
							type : "operation",
							op: data[2],
							left: data[0],
							right: data[4]
						};
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
					return {
						type: "function_call",
						fun_name: fn,
						arguments: args
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


number -> digits 
		{% 
			(data) => ({
				type: "number",
				value: Number(data[0]) 
			})
		%}
		| digits "." digits 
		{% 
			(data) => ({
				type: "number",
				value: Number(data[0] + "." + data[2])
			}) 
		%}

digits -> digit {% id %}
		 | digit digits	{% (data) => data.join("") %}

digit -> [0-9] {% id %}

_ -> [ \t\n]:*