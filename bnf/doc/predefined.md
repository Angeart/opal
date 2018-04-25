```
BLANK : ''
CR : '\r'
LF : '\n'
CRLF : CR LF | CR | LF
DIGIT : 1-0
DIGITS : 1*DIGIT
NUMBER : DIGITS [ "." DIGITS ] | "." DIGITS
WSP : 1*(SPACE | TAB)
TAB : '\t'
SPACE : ' '
OWSP : WSP | BLANK
ANYWSP : *( CRLF | WSP )
ALPHA : A-Z a-z
SYMBOL : !@#$%^&...ect. Does not include '', ''', '"', or '`'
ESCAPE : ''
QUOTE : '"'
SQUOTE : '''
AQUOTE : '`'
ANYCHAR : CHAR | DIGIT | SYMBOL
SQLITERAL : SQUOTE *( ( ESCAPE SQUOTE ) | ANYCHAR | QUOTE | AQUOTE | ESCAPE ) SQUOTE
QLITERAL : QUOTE *( ( ESCAPE QUOTE ) | ANYCHAR | SQUOTE | AQUOTE| ESCAPE ) QUOTE
AQLITERAL : AQUOTE *( ( ESCAPE AQUOTE ) | ANYCHAR | SQUOTE | QUOTE | CRLF| ESCAPE ) AQUOTE
LITERAL : SQLITERAL | QLITERAL
ANYLITERAL : AQLITERAL | SQLITERAL | QLITERAL
EOF : End of the file.
SCRIPT : The whole script, which is SYNTAX EOF.
SYNTAX : The syntax body for the script. The BNF script must declare this.
```