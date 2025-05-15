"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lexer_1 = require("./lexer");
var Parser = /** @class */ (function () {
    function Parser() {
        this.tokens = [];
    }
    //checks if token is the end of file
    Parser.prototype.not_eof = function () {
        return this.tokens[0].type != lexer_1.TokenType.EOF;
    };
    //returns first expr in tokens list
    Parser.prototype.at = function () {
        return this.tokens[0];
    };
    //get token and remove it (so we move down the file like how we did in the lexer)
    Parser.prototype.eat = function () {
        var prev = this.tokens.shift();
        return prev;
    };
    Parser.prototype.expect = function (type, err) {
        var prev = this.tokens.shift();
        if (!prev || prev.type != type) {
            console.error("Parser Error:\n", err, prev, " - Exception: ", type);
        }
        return prev;
    };
    //creates ast
    Parser.prototype.produceAST = function (sourceCode) {
        //uses function from lexer to get tokens
        this.tokens = (0, lexer_1.tokenize)(sourceCode);
        var program = {
            kind: "Program",
            body: [],
        };
        //checks that we're not at the end of the file
        while (this.not_eof()) {
            //adding every token to the program part of the diagram
            //check out astexplorer.net to see example
            program.body.push(this.parse_statement());
        }
        return program;
    };
    Parser.prototype.parse_statement = function () {
        //so far, only have expr not statements in ast.ts so...
        return this.parse_expr();
    };
    Parser.prototype.parse_expr = function () {
        return this.parse_additive_expr();
    };
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
    Parser.prototype.parse_multiplicative_expr = function () {
        var left = this.parse_primary_expr(); //says left is the most important numer
        //while loops helps check if there are stacked operations
        while (this.at().value == "*" || this.at().value == "/") {
            var operator = this.eat().value;
            var right = this.parse_primary_expr();
            left = {
                kind: "BinaryExpr",
                left: left,
                right: right,
                operator: operator
            };
        }
        return left;
    };
    Parser.prototype.parse_additive_expr = function () {
        var left = this.parse_multiplicative_expr(); //says left is the most important numer
        //while loops helps check if there are stacked operations
        while (this.at().value == "+" || this.at().value == "-") {
            var operator = this.eat().value;
            var right = this.parse_multiplicative_expr();
            left = {
                kind: "BinaryExpr",
                left: left,
                right: right,
                operator: operator
            };
        }
        return left;
    };
    Parser.prototype.parse_primary_expr = function () {
        var tk = this.at().type;
        switch (tk) {
            case lexer_1.TokenType.Id:
                return { kind: "Id", symbol: this.eat().value };
            case lexer_1.TokenType.Null:
                this.eat(); //get code past null
                return { kind: "NullLiteral", value: "null" };
            case lexer_1.TokenType.Number:
                return {
                    kind: "NumericLiteral",
                    symbol: parseFloat(this.eat().value),
                };
            case lexer_1.TokenType.OpenParen: {
                this.eat(); //get rid of (
                var value = this.parse_expr(); //get value
                this.expect(lexer_1.TokenType.CloseParen, "Unexpected token found inside paranthesised expression. Expected )"); //gets rid of )
                return value;
            }
            default:
                console.error("Unexpected token found during parsing!", this.at());
                return {};
        }
    };
    return Parser;
}());
exports.default = Parser;
