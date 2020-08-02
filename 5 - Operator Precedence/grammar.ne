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

multiplicative -> number _ [*/] _ multiplicative
				  {%
					(data) => {
						switch(data[2]){
							case '*': return data[0] * data[4];
							case '/': return data[0] / data[4];
						}
					}
				%}
				| number {% id %}

number -> digits {% (data) => Number(data[0]) %}
		| digits "." digits {% (data) => Number(data[0] + "." + data[2]) %}

digits -> digit {% id %}
		 | digit digits	{% (data) => data.join("") %}

digit -> [0-9] {% id %}

_ -> [ \t]:*