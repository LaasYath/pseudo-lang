"use strict";
// SAMPLE LANG EXAMPLE
// Assign [varName] to [value]
// [ assignToken, id, equalsToken, numToken]
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenType = void 0;
exports.tokenize = tokenize;
// possible token types in the lang
var TokenType;
(function (TokenType) {
    TokenType[TokenType["Assign"] = 0] = "Assign";
    TokenType[TokenType["Id"] = 1] = "Id";
    TokenType[TokenType["Equals"] = 2] = "Equals";
    TokenType[TokenType["Number"] = 3] = "Number";
    TokenType[TokenType["Print"] = 4] = "Print";
    TokenType[TokenType["Operator"] = 5] = "Operator";
    TokenType[TokenType["Conditional"] = 6] = "Conditional";
    TokenType[TokenType["Create"] = 7] = "Create";
    TokenType[TokenType["Type"] = 8] = "Type";
    TokenType[TokenType["ListAdd"] = 9] = "ListAdd";
    TokenType[TokenType["ListRemove"] = 10] = "ListRemove";
    TokenType[TokenType["Execute"] = 11] = "Execute";
    TokenType[TokenType["Separator"] = 12] = "Separator";
    TokenType[TokenType["Range"] = 13] = "Range";
    TokenType[TokenType["EqualsEquals"] = 14] = "EqualsEquals";
    TokenType[TokenType["TypeSpecifier"] = 15] = "TypeSpecifier";
    TokenType[TokenType["Word"] = 16] = "Word";
    TokenType[TokenType["OpenParen"] = 17] = "OpenParen";
    TokenType[TokenType["CloseParen"] = 18] = "CloseParen";
    TokenType[TokenType["Value"] = 19] = "Value";
    TokenType[TokenType["EOF"] = 20] = "EOF";
    TokenType[TokenType["Null"] = 21] = "Null";
})(TokenType || (exports.TokenType = TokenType = {}));
// token function
function token(value, type) {
    if (value === void 0) { value = ""; }
    return { value: value, type: type };
}
// checks if the src value is a word (only made of letters)
function isAlpha(src) {
    return src.toUpperCase() != src.toLowerCase(); //checks that word contains letters (ints won't change cases, letters will)
}
// check if the src value is a new line/tab
function isSkippable(str) {
    return str == '\n' || str == '\t';
}
// check if the src value is a number with regex
function isInt(src) {
    var regex = new RegExp(/^(0|[1-9][0-9]*)$/); //constructor equals runtime compilation
    var test = regex.test(src);
    return test;
}
// adds user written code into token array
function tokenize(sourceCode) {
    var tokens = new Array();
    var src = sourceCode.split(" ");
    while (src.length > 0) {
        if (src[0] == "Assign") {
            tokens.push(token(src.shift(), TokenType.Assign));
            // automatically (if word exists) assigns the word after the keyword assign to a variable id
            if (src.length > 1) {
                tokens.push(token(src.shift(), TokenType.Id));
            }
        }
        else if (src[0] == "print") {
            tokens.push(token(src.shift(), TokenType.Print));
        }
        else if (src[0] == "+" || src[0] == "-" || src[0] == "/" || src[0] == "*") {
            tokens.push(token(src.shift(), TokenType.Print));
        }
        else if (src[0] == "if" || src[0] == "or-if" || src[0] == "else") {
            tokens.push(token(src.shift(), TokenType.Conditional));
        }
        else if (src[0] == "create") {
            tokens.push(token(src.shift(), TokenType.Create));
        }
        else if (src[0] == "list" || src[0] == "numbers" || src[0] == "words") {
            tokens.push(token(src.shift(), TokenType.Type));
        }
        else if (src[0] == "add") {
            tokens.push(token(src.shift(), TokenType.ListAdd));
        }
        else if (src[0] == "remove") {
            tokens.push(token(src.shift(), TokenType.ListRemove));
        }
        else if (src[0] == "execute") {
            tokens.push(token(src.shift(), TokenType.Execute));
        }
        else if (src[0] == ",") {
            tokens.push(token(src.shift(), TokenType.Separator));
        }
        else if (src[0] == "through") {
            tokens.push(token(src.shift(), TokenType.Range));
        }
        else if (src[0] == "to") {
            //if key word is for equating values to vars, automatically assigns the next item to be the value token
            if (src.length > 1) {
                tokens.push(token(src.shift(), TokenType.Equals));
                tokens.push(token(src.shift(), TokenType.Value));
            }
        }
        else if (src[0] == "equals") {
            tokens.push(token(src.shift(), TokenType.EqualsEquals));
        }
        else if (src[0] == "of") {
            tokens.push(token(src.shift(), TokenType.TypeSpecifier));
        }
        else if (src[0] == "(") {
            tokens.push(token(src.shift(), TokenType.OpenParen));
        }
        else if (src[0] == ")") {
            tokens.push(token(src.shift(), TokenType.CloseParen));
        }
        else if (src[0].startsWith("\"") && src[0].endsWith("\"")) {
            tokens.push(token(src.shift(), TokenType.Word));
        }
        else {
            // if skippable, doesn't add a token
            if (isSkippable(src[0])) {
                src.shift();
            }
            else if (isInt(src[0])) {
                tokens.push(token(src.shift(), TokenType.Number));
            }
            else if (isAlpha(src[0])) {
                if (src[0] == "null") {
                    tokens.push(token(src.shift(), TokenType.Null));
                }
                else {
                    tokens.push(token(src.shift(), TokenType.Id));
                }
            }
            else { //for errors errors of improper code
                console.log("Unrecognized word found in source: ", src[0]);
                src.shift();
            }
        }
    }
    tokens.push({ type: TokenType.EOF, value: "EndOfFile" });
    // returns token array
    return tokens;
}
// let source = fs.readFileSync('test.txt','utf8');
// let source : string = "Assign ( x ) to \"hello\"";
// console.log(tokenize(source));
