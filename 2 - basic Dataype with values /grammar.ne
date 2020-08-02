input -> value
			{% id %}

value -> number		{% id %}
		| boolean	{% id %}
		| myNull	{% id %}
		| string	{% id %}
		| array 	{% id %}

array -> "[" array_items "]"	{% (data) => data[1] %}
		| "[" "]"	{% () => [] %}

array_items -> value {% (data) => [data[0]] %}
			| value "," array_items	{% (data) => [data[0], ...data[2]] %}

string -> "\"" characters "\""

characters -> character
			| character characters {% (data) => data[0] + data[2] %}

character -> [^\"] {% id %}

myNull -> "null" {% () => null %}

boolean -> "true" {% () => true %}
		  | "false"	{% () => false %}

number -> digits {% (data) => Number(data.join("")) %}
		| digits "." digits {% (data) => Number(data[0] + "." + data[2]) %}

digits -> digit {% id %}
		 | digit digits	{% (data) => data.join("") %}

digit -> [0-9] {% id %}