input -> value

value -> number
		| boolean
		| myNull
		| string
		| array

array -> "[" array_items "]"
		| "[" "]"

array_items -> value
			| value "," array_items

string -> "\"" characters "\""

characters -> character
			| character characters

character -> [^\"]

myNull -> "null"

boolean -> "true" 
		  | "false"

number -> digits
		| digits "." digits

digits -> digit 
		 | digit digits

digit -> [0-9]