import { BinaryExpr, Expr, Id, NullLiteral, NumericLiteral, Program, Statement } from './ast';
import { Token, tokenize, TokenType } from './lexer';

export default class Parser {

    private tokens: Token[] = [];

    //checks if token is the end of file
    private not_eof (): boolean {
        return this.tokens[0].type != TokenType.EOF;
    }

    //returns first expr in tokens list
    private at () {
        return this.tokens[0] as Token;
    }

    //get token and remove it (so we move down the file like how we did in the lexer)
    private eat () {
        const prev = this.tokens.shift() as Token;
        return prev;
    }

    private expect (type: TokenType, err: any) {
        const prev = this.tokens.shift() as Token;
        if (!prev || prev.type != type) {
            console.error("Parser Error:\n", err, prev, " - Exception: ", type);
        }

        return prev;
    }

    //creates ast
    public produceAST (sourceCode: string): Program {

        //uses function from lexer to get tokens
        this.tokens = tokenize(sourceCode);
        const program: Program = {
            kind: "Program",
            body: [],
        }

        //checks that we're not at the end of the file
        while (this.not_eof()) {
            //adding every token to the program part of the diagram
            //check out astexplorer.net to see example
            program.body.push(this.parse_statement());
        }

        return program;
    }

    private parse_statement (): Statement {
        //so far, only have expr not statements in ast.ts so...
        return this.parse_expr();
    }

    private parse_expr (): Expr {
        return this.parse_additive_expr();
    }

    //Orders or Precedence (higher it is, parse it last)
    /*
        - Assignment Expr
        - Member Expr
        - Function Calls
        - Logical Expr
        - Comparison Expr
        - Additive Expr
        - Multiplicative Expr (Here)
        - Primary Expr (eval values first!) 
    */

    private parse_multiplicative_expr (): Expr {
        let left = this.parse_primary_expr(); //says left is the most important numer

        //while loops helps check if there are stacked operations
        while (this.at().value == "*"  || this.at().value == "/") {
            const operator = this.eat().value;
            const right = this.parse_primary_expr();
            left = {
                kind: "BinaryExpr",
                left,
                right,
                operator
            } as BinaryExpr;
        }

        return left;
    }

    private parse_additive_expr (): Expr {
        let left = this.parse_multiplicative_expr(); //says left is the most important numer

        //while loops helps check if there are stacked operations
        while (this.at().value == "+"  || this.at().value == "-") {
            const operator = this.eat().value;
            const right = this.parse_multiplicative_expr();
            left = {
                kind: "BinaryExpr",
                left,
                right,
                operator
            } as BinaryExpr;
        }

        return left;
    }

    private parse_primary_expr (): Expr {
        const tk = this.at().type;

        switch (tk) {
            case TokenType.Id:
                return { kind: "Id", symbol: this.eat().value } as Id;
            
            case TokenType.Null:
                this.eat(); //get code past null
                return { kind: "NullLiteral", value: "null" } as NullLiteral;    
            
            case TokenType.Number:
                return { 
                    kind: "NumericLiteral", 
                    symbol: parseFloat(this.eat().value),
                } as NumericLiteral;

            case TokenType.OpenParen: {
                this.eat(); //get rid of (
                const value = this.parse_expr(); //get value
                this.expect(TokenType.CloseParen, "Unexpected token found inside paranthesised expression. Expected )") //gets rid of )
                return value;
            }

            default:
                console.error("Unexpected token found during parsing!", this.at());
                return {} as Statement;
        }
    }

}