input -> _ value _ {% (data) => [data[1]] %}

value -> number		{% id %}
		| boolean	{% id %}
		| myNull	{% id %}
		| string	{% id %}
		| array 	{% id %}

array -> "[" _ array_items _ "]"	{% (data) => data[2] %}
		| "[" _ "]"	{% () => [] %}

array_items -> value {% (data) => [data[0]] %}
			| value _ "," _ array_items	{% (data) => [data[0], ...data[4]] %}

string -> "\"" characters "\"" {% (data) => data[1] %}

characters -> character {% id %}
			| character characters {% (data) => data[0] + data[1] %}

character -> [^\"\\] {% id %}
			| "\\" escape {% (data) => data[1] %}

escape -> "\"" {% () => '"' %}
		| "\\" {% () => "\\" %}
		| "/" {% () => "/" %}
		| "b" {% () => "\b" %}
		| "f" {% () => "\f" %}
		| "n" {% () => "\n" %}
		| "r" {% () => "\r" %}
		| "t" {% () => "\t" %}
		| "u" hex hex hex hex 
			{% 
				(data) => {
						const code = ((((data[1]*16)+data[2])*16)+data[3])*16+data[4]
						return String.fromCharCode(code)
				}  
			%}

hex -> digit {% (data) => Number(data[0]) %}
	| [a-fA-F]
		{% (data) => {
			switch(data[0].toLowerCase()){
				case "a": return 10;
				case "b": return 11;
				case "c": return 12;
				case "d": return 13;
				case "e": return 14;
				case "f": return 15;
			}
			}
		%}


myNull -> "null" {% () => null %}

boolean -> "true" {% () => true %}
		  | "false"	{% () => false %}

number -> digits {% (data) => Number(data.join("")) %}
		| digits "." digits {% (data) => Number(data[0] + "." + data[2]) %}

digits -> digit {% id %}
		 | digit digits	{% (data) => data.join("") %}

digit -> [0-9] {% id %}

_ -> [ \t]:*