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

number -> digits {% (data) => Number(data[0]) %}
		| digits "." digits {% (data) => Number(data[0] + "." + data[2]) %}

digits -> digit {% id %}
		 | digit digits	{% (data) => data.join("") %}

digit -> [0-9] {% id %}

_ -> [ \t]:*