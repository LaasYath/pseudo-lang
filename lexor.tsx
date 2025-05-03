// Assign [varName] to [value]
// [ assignToken, id, equalsToken, numToken]


// possible token types in the lang
export enum TokenType {
    Assign,
    Id,
    Equals,
    Number,
    Print,
    Operator,
    Conditional,
    Create,
    Type,
    ListAdd,
    ListRemove,
    Execute,
    Separator,
    Range,
    EqualsEquals,
    TypeSpecifier,
    Word,
    OpenParen,
    CloseParen
}


// token interface
export interface Token {
    value: string,
    type: TokenType,
}


function token (value: “”, type: TokenType): Token {
    return {value, type};
}


// turns code into token array
export function tokenize (sourceCode: string): Token[] {
   const tokens = new Array<Token>();
   const src = sourceCode.split(" ");


   while (src.length > 0) {


        if (src[0] == "Assign") {
            tokens.push(token(src.shift(), TokenType.Assign));
		if (src.length > 1) {
			tokens.push(token.src.shift(), TokenType.Id));
		}
        } else if (src[0] == "print") {
            tokens.push(token(src.shift(), TokenType.Print));
        } else if (src[0] == "plus" || src[0] == “minus” || src[0] == “divided-by” || src[0] == “times”) {
            tokens.push(token(src.shift(), TokenType.Print));
        } else if (src[0] == "if" || src[0] == "or-if" || src[0] == "else") {
            tokens.push(token(src.shift(), TokenType.Conditional));
        } else if (src[0] == "create") {
            tokens.push(token(src.shift(), TokenType.Create));
        } else if (src[0] == "list" || src[0] == "numbers" || src[0] == "words") {
            tokens.push(token(src.shift(), TokenType.Type));
        } else if (src[0] == "add") {
            tokens.push(token(src.shift(), TokenType.ListAdd));
        } else if (src[0] == "remove") {
            tokens.push(token(src.shift(), TokenType.ListRemove));
        } else if (src[0] == "execute") {
            tokens.push(token(src.shift(), TokenType.Execute));
        } else if (src[0] == ",") {
            tokens.push(token(src.shift(), TokenType.Separator));
        } else if (src[0] == "through") {
            tokens.push(token(src.shift(), TokenType.Range));
        } else if (src[0] == "to") {
            tokens.push(token(src.shift(), TokenType.Equals));
        } else if (src[0] == "equals") {
            tokens.push(token(src.shift(), TokenType.EqualsEquals));
        } else if (src[0] == "of") {
            tokens.push(token(src.shift(), TokenType.TypeSpecifier));
        } else if (src[0] == "(") {
            tokens.push(token(src.shift(), TokenType.OpenParen));
        } else if (src[0] == ")") {
            tokens.push(token(src.shift(), TokenType.CloseParen));
        }






   }


   return tokens;
}
